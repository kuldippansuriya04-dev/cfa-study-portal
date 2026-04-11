import Types "../types/cfa";
import List "mo:core/List";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";

module {

  // ── Topic helpers ────────────────────────────────────────────────────────
  public func listTopics(topics : List.List<Types.Topic>) : [Types.Topic] {
    topics.toArray();
  };

  public func getTopic(topics : List.List<Types.Topic>, id : Nat) : ?Types.Topic {
    topics.find(func(t) { t.id == id });
  };

  // ── Question helpers ─────────────────────────────────────────────────────
  public func getQuestions(questions : List.List<Types.Question>, topicId : Nat) : [Types.Question] {
    questions.filter(func(q) { q.topicId == topicId }).toArray();
  };

  public func getQuestion(questions : List.List<Types.Question>, id : Nat) : ?Types.Question {
    questions.find(func(q) { q.id == id });
  };

  public func getQuestionsByIds(questions : List.List<Types.Question>, ids : [Nat]) : [Types.Question] {
    ids.filterMap<Nat, Types.Question>(func(qid) {
      questions.find(func(q) { q.id == qid })
    });
  };

  // ── MockExam helpers ─────────────────────────────────────────────────────
  public func listMockExams(exams : List.List<Types.MockExam>) : [Types.MockExam] {
    exams.toArray();
  };

  public func getMockExam(exams : List.List<Types.MockExam>, id : Nat) : ?Types.MockExam {
    exams.find(func(e) { e.id == id });
  };

  // ── Practice helpers ─────────────────────────────────────────────────────
  public func submitPracticeAnswer(
    questions : List.List<Types.Question>,
    practiceAttempts : List.List<Types.PracticeAttempt>,
    userStats : Map.Map<Types.UserId, Types.UserStats>,
    nextPracticeId : Nat,
    caller : Principal,
    topicId : Nat,
    questionId : Nat,
    selectedIndex : Nat,
  ) : (Types.PracticeResult, Nat) {
    let q = switch (questions.find(func(q) { q.id == questionId })) {
      case (?found) found;
      case null {
        let r : Types.PracticeResult = {
          isCorrect = false;
          correctIndex = 0;
          explanation = "Question not found";
          attempt = {
            id = nextPracticeId;
            topicId;
            userId = caller;
            questionId;
            selectedIndex;
            isCorrect = false;
            timestamp = Time.now();
          };
        };
        return (r, nextPracticeId);
      };
    };

    let isCorrect = selectedIndex == q.correctIndex;

    let attempt : Types.PracticeAttempt = {
      id = nextPracticeId;
      topicId = q.topicId;
      userId = caller;
      questionId;
      selectedIndex;
      isCorrect;
      timestamp = Time.now();
    };

    practiceAttempts.add(attempt);

    // Build updated UserStats
    let prev = switch (userStats.get(caller)) {
      case (?s) s;
      case null {
        {
          userId = caller;
          totalPracticeCorrect = 0;
          totalPracticeAttempts = 0;
          studyStreak = 0;
          lastActiveDate = "";
          topicStats = [];
        };
      };
    };

    // Upsert topic entry in topicStats
    let topicFound = prev.topicStats.find(func(entry : (Nat, Nat, Nat)) : Bool {
      let (tid, _, _) = entry;
      tid == q.topicId
    });

    let newTopicStats : [(Nat, Nat, Nat)] = switch (topicFound) {
      case null {
        let newEntry : (Nat, Nat, Nat) = (q.topicId, if (isCorrect) 1 else 0, 1);
        prev.topicStats.values().concat(Iter.singleton(newEntry)).toArray();
      };
      case _ {
        prev.topicStats.map<(Nat, Nat, Nat), (Nat, Nat, Nat)>(func(entry) {
          let (tid, c, t) = entry;
          if (tid == q.topicId) {
            (tid, c + (if (isCorrect) 1 else 0), t + 1)
          } else {
            entry
          }
        });
      };
    };

    let updated : Types.UserStats = {
      userId = caller;
      totalPracticeCorrect = prev.totalPracticeCorrect + (if (isCorrect) 1 else 0);
      totalPracticeAttempts = prev.totalPracticeAttempts + 1;
      studyStreak = prev.studyStreak;
      lastActiveDate = prev.lastActiveDate;
      topicStats = newTopicStats;
    };
    userStats.add(caller, updated);

    let result : Types.PracticeResult = {
      isCorrect;
      correctIndex = q.correctIndex;
      explanation = q.explanation;
      attempt;
    };

    (result, nextPracticeId + 1);
  };

  // ── Exam helpers ─────────────────────────────────────────────────────────
  public func submitExamAttempt(
    exams : List.List<Types.MockExam>,
    questions : List.List<Types.Question>,
    examAttempts : List.List<Types.ExamAttempt>,
    userStats : Map.Map<Types.UserId, Types.UserStats>,
    nextExamAttemptId : Nat,
    caller : Principal,
    examId : Nat,
    answers : [Types.ExamAnswer],
  ) : (Types.ExamAttempt, Nat) {
    let exam = switch (exams.find(func(e) { e.id == examId })) {
      case (?e) e;
      case null { return buildEmptyAttempt(nextExamAttemptId, caller, examId, answers) };
    };

    var totalCorrect = 0;

    // topic accumulator: topicId -> (correct, total)
    let topicAcc = Map.empty<Nat, (Nat, Nat)>();

    let scoredAnswers : [Types.UserAnswer] = answers.map<Types.ExamAnswer, Types.UserAnswer>(func(ans) {
      let isCorrect = switch (questions.find(func(q) { q.id == ans.questionId })) {
        case (?q) {
          let c = ans.selectedIndex == q.correctIndex;
          let (prevC, prevT) = switch (topicAcc.get(q.topicId)) {
            case (?entry) entry;
            case null (0, 0);
          };
          topicAcc.add(q.topicId, (prevC + (if (c) 1 else 0), prevT + 1));
          c
        };
        case null false;
      };
      if (isCorrect) totalCorrect += 1;
      {
        questionId = ans.questionId;
        selectedIndex = ans.selectedIndex;
        isCorrect;
        timestamp = Time.now();
      }
    });

    // Flatten topicAcc into array
    let topicBreakdown : [(Nat, Nat, Nat)] = topicAcc.entries().map<(Nat, (Nat, Nat)), (Nat, Nat, Nat)>(
      func(entry) {
        let (tid, counts) = entry;
        let (c, t) = counts;
        (tid, c, t)
      }
    ).toArray();

    let attempt : Types.ExamAttempt = {
      id = nextExamAttemptId;
      examId;
      userId = caller;
      answers = scoredAnswers;
      score = totalCorrect;
      totalQuestions = exam.questionIds.size();
      startedAt = Time.now();
      completedAt = Time.now();
      topicBreakdown;
    };

    examAttempts.add(attempt);

    // Update UserStats
    let prev = switch (userStats.get(caller)) {
      case (?s) s;
      case null {
        {
          userId = caller;
          totalPracticeCorrect = 0;
          totalPracticeAttempts = 0;
          studyStreak = 0;
          lastActiveDate = "";
          topicStats = [];
        };
      };
    };

    // Merge topicBreakdown into prev.topicStats
    var mergedTopicStats : [(Nat, Nat, Nat)] = prev.topicStats;
    for (bdEntry in topicBreakdown.values()) {
      let (tid, c, t) = bdEntry;
      let existing2 = mergedTopicStats.find(func(entry : (Nat, Nat, Nat)) : Bool {
        let (id, _, _) = entry;
        id == tid
      });
      mergedTopicStats := switch (existing2) {
        case null {
          mergedTopicStats.values().concat(Iter.singleton((tid, c, t))).toArray();
        };
        case _ {
          mergedTopicStats.map<(Nat, Nat, Nat), (Nat, Nat, Nat)>(func(entry) {
            let (id, ec, et) = entry;
            if (id == tid) (id, ec + c, et + t) else (id, ec, et)
          });
        };
      };
    };

    let updated : Types.UserStats = {
      userId = caller;
      totalPracticeCorrect = prev.totalPracticeCorrect;
      totalPracticeAttempts = prev.totalPracticeAttempts;
      studyStreak = prev.studyStreak;
      lastActiveDate = prev.lastActiveDate;
      topicStats = mergedTopicStats;
    };
    userStats.add(caller, updated);

    (attempt, nextExamAttemptId + 1);
  };

  // Helper: minimal attempt when exam not found
  private func buildEmptyAttempt(
    nextId : Nat,
    caller : Principal,
    examId : Nat,
    answers : [Types.ExamAnswer],
  ) : (Types.ExamAttempt, Nat) {
    let now = Time.now();
    let attempt : Types.ExamAttempt = {
      id = nextId;
      examId;
      userId = caller;
      answers = answers.map<Types.ExamAnswer, Types.UserAnswer>(func(a) {
        { questionId = a.questionId; selectedIndex = a.selectedIndex; isCorrect = false; timestamp = now }
      });
      score = 0;
      totalQuestions = 0;
      startedAt = now;
      completedAt = now;
      topicBreakdown = [];
    };
    (attempt, nextId + 1);
  };

  // ── Stats helpers ────────────────────────────────────────────────────────
  public func getMyExamHistory(
    examAttempts : List.List<Types.ExamAttempt>,
    caller : Principal,
  ) : [Types.ExamAttempt] {
    let mine = examAttempts.filter(func(a) { a.userId == caller });
    let arr = mine.toArray();
    // Sort descending by completedAt
    arr.sort<Types.ExamAttempt>(func(a, b) {
      if (a.completedAt > b.completedAt) #less
      else if (a.completedAt < b.completedAt) #greater
      else #equal
    });
  };

  public func getMyStats(
    userStats : Map.Map<Types.UserId, Types.UserStats>,
    caller : Principal,
  ) : Types.UserStats {
    switch (userStats.get(caller)) {
      case (?s) s;
      case null {
        {
          userId = caller;
          totalPracticeCorrect = 0;
          totalPracticeAttempts = 0;
          studyStreak = 0;
          lastActiveDate = "";
          topicStats = [];
        };
      };
    };
  };

  public func getMyTopicStats(
    userStats : Map.Map<Types.UserId, Types.UserStats>,
    caller : Principal,
  ) : [(Nat, Nat, Nat)] {
    switch (userStats.get(caller)) {
      case (?s) s.topicStats;
      case null [];
    };
  };

  // ── Seed helpers ─────────────────────────────────────────────────────────
  public func seedTopics(topics : List.List<Types.Topic>) {
    topics.add({ id = 0; title = "Ethical and Professional Standards"; description = "The CFA Institute Code of Ethics and Standards of Professional Conduct, GIPS standards, and ethical decision-making frameworks."; weightMin = 15; weightMax = 20; learningObjectives = ["Describe the six components of the Code of Ethics", "Identify the seven Standards of Professional Conduct", "Apply the Standards to situations involving conflicts of interest", "Describe the GIPS standards and their purpose"] });
    topics.add({ id = 1; title = "Quantitative Methods"; description = "Time value of money, statistical concepts, probability theory, sampling and estimation, hypothesis testing, and technical analysis."; weightMin = 6; weightMax = 9; learningObjectives = ["Calculate PV/FV of single sums and annuities", "Interpret descriptive statistics", "Apply probability rules and Bayes theorem", "Conduct hypothesis tests"] });
    topics.add({ id = 2; title = "Economics"; description = "Microeconomics, macroeconomics, monetary and fiscal policy, international trade, and currency exchange rates."; weightMin = 6; weightMax = 9; learningObjectives = ["Analyze supply and demand", "Describe macroeconomic indicators", "Explain monetary and fiscal policy tools", "Analyze exchange rate systems"] });
    topics.add({ id = 3; title = "Financial Statement Analysis"; description = "Analysis of income statements, balance sheets, cash flow statements, financial ratios, and quality of earnings."; weightMin = 11; weightMax = 14; learningObjectives = ["Analyze income statements and earnings quality", "Interpret balance sheet components", "Evaluate cash flow statement information", "Compute and interpret financial ratios"] });
    topics.add({ id = 4; title = "Corporate Issuers"; description = "Corporate governance, capital structure decisions, working capital management, and dividend policy."; weightMin = 6; weightMax = 9; learningObjectives = ["Describe corporate governance mechanisms", "Analyze capital structure decisions", "Evaluate working capital management", "Compare dividend theories and policies"] });
    topics.add({ id = 5; title = "Equity Investments"; description = "Equity market organization, market indices, equity valuation models including DDM and relative value approaches."; weightMin = 11; weightMax = 14; learningObjectives = ["Describe equity market structures", "Analyze market indices", "Apply the dividend discount model", "Use price multiples for valuation"] });
    topics.add({ id = 6; title = "Fixed Income"; description = "Bond features, yield measures, duration and convexity, term structure of interest rates, and credit analysis."; weightMin = 11; weightMax = 14; learningObjectives = ["Describe bond features and types", "Calculate and interpret yield measures", "Measure interest rate risk using duration", "Apply credit analysis frameworks"] });
    topics.add({ id = 7; title = "Derivatives"; description = "Derivative markets and instruments including forwards, futures, options, and swaps, and their pricing principles."; weightMin = 5; weightMax = 8; learningObjectives = ["Describe derivative market structures", "Price forwards and futures", "Understand option payoff profiles", "Explain swap mechanics"] });
    topics.add({ id = 8; title = "Alternative Investments"; description = "Hedge funds, private equity, real assets, commodities, infrastructure, and their risk-return characteristics."; weightMin = 7; weightMax = 10; learningObjectives = ["Describe hedge fund strategies", "Explain private equity structures", "Analyze real asset investment characteristics", "Assess commodity investments"] });
    topics.add({ id = 9; title = "Portfolio Management"; description = "Modern portfolio theory, CAPM, investment policy statements, portfolio construction, and behavioral finance."; weightMin = 8; weightMax = 12; learningObjectives = ["Apply modern portfolio theory", "Use the CAPM to estimate expected returns", "Construct an investment policy statement", "Identify behavioral finance biases"] });
  };

  public func seedQuestions(questions : List.List<Types.Question>) {
    // ── Topic 0: Ethics (questions 0-11) ─────────────────────────────────────
    questions.add({ id = 0; topicId = 0; difficulty = "medium"; stem = "An analyst discovers material nonpublic information about a company from a corporate insider. According to the CFA Institute Standards, the analyst should MOST likely:"; options = ["Immediately share the information with clients to fulfill fiduciary duty", "Refrain from trading or causing others to trade based on that information", "Report the information to the SEC before taking any action"]; correctIndex = 1; explanation = "Standard II(A) – Material Nonpublic Information prohibits acting or causing others to act on material nonpublic information. The analyst must refrain from trading until the information is public." });
    questions.add({ id = 1; topicId = 0; difficulty = "medium"; stem = "According to the CFA Institute Code of Ethics, a member must place the interests of:"; options = ["Their employer above the interests of clients", "Clients above their own interests, with employer interests secondary", "Themselves first, as compensation depends on their performance"]; correctIndex = 1; explanation = "The Code requires members to place clients' interests before their own personal interests and before employer interests, acting with integrity in all professional dealings." });
    questions.add({ id = 2; topicId = 0; difficulty = "hard"; stem = "A portfolio manager receives gifts worth $800 from a broker who executes trades for her clients. She discloses this to her employer. According to Standard I(B), this situation:"; options = ["Is fully resolved by disclosure to the employer", "May still compromise independence and objectivity even after disclosure", "Is acceptable as the amount is below a $1,000 threshold"]; correctIndex = 1; explanation = "Standard I(B) – Independence and Objectivity requires members to use reasonable care to maintain independence. Disclosure alone does not resolve the conflict; the member must ensure objectivity is not compromised." });
    questions.add({ id = 3; topicId = 0; difficulty = "easy"; stem = "The CFA Institute Standards of Professional Conduct are BEST described as:"; options = ["Rules that only apply to CFA charterholders, not candidates", "Minimum standards of conduct that supplement applicable laws", "Optional guidelines that members may choose to follow"]; correctIndex = 1; explanation = "The Standards represent minimum standards of conduct for CFA members and candidates worldwide, supplementing — but not replacing — applicable laws and regulations." });
    questions.add({ id = 4; topicId = 0; difficulty = "medium"; stem = "An investment manager is asked to present performance to a prospective client. The client requests 10 years of composite returns, but the firm only has 5 years of GIPS-compliant records. The manager should:"; options = ["Show only the 5 years of GIPS-compliant returns and explain the limitation", "Extrapolate the remaining 5 years using simulated data", "Combine audited and unaudited data to reach the 10-year period"]; correctIndex = 0; explanation = "Under GIPS, firms must present a minimum of 5 years (or since inception) of compliant performance. The manager cannot fabricate or extrapolate data." });
    questions.add({ id = 5; topicId = 0; difficulty = "medium"; stem = "Standard V(A) – Diligence and Reasonable Basis requires that:"; options = ["All recommendations be supported by an independent research analyst", "Members have a reasonable and adequate basis for any recommendation or action", "Members obtain written consent from clients before making recommendations"]; correctIndex = 1; explanation = "Standard V(A) requires members to exercise diligence and thoroughness and to have a reasonable, adequate basis, supported by appropriate research and investigation, for their recommendations." });
    questions.add({ id = 6; topicId = 0; difficulty = "hard"; stem = "A research analyst changes her stock recommendation from 'buy' to 'sell' after personally selling her holdings in that stock. This most likely violates:"; options = ["Standard III(B) – Fair Dealing only", "Standard VI(B) – Priority of Transactions only", "Both Standard VI(B) – Priority of Transactions and Standard V(B) – Communication with Clients"]; correctIndex = 2; explanation = "The analyst traded ahead of her recommendation (VI(B)) and failed to communicate her change of view to clients promptly (V(B))." });
    questions.add({ id = 7; topicId = 0; difficulty = "easy"; stem = "Under Standard IV(A) – Loyalty, a CFA member's duty to their employer:"; options = ["Supersedes duty to clients in cases of conflict", "Does not require the member to put employer interests above those of clients", "Requires the member to follow all employer instructions regardless of ethics"]; correctIndex = 1; explanation = "Standard IV(A) requires members to act for the benefit of their employer but does not require placing employer interests above client interests." });
    questions.add({ id = 8; topicId = 0; difficulty = "medium"; stem = "According to Standard VII(A) – Conduct as Participants in CFA Institute Programs, a candidate who shares questions from the CFA exam with others:"; options = ["Violates the Standard because exam questions are confidential", "Does not violate the Standard if shared only with study group members", "Violates only if they personally benefit from the sharing"]; correctIndex = 0; explanation = "Standard VII(A) prohibits candidates from sharing confidential exam information, regardless of intent or benefit. Exam content is strictly confidential." });
    questions.add({ id = 9; topicId = 0; difficulty = "hard"; stem = "A firm claims GIPS compliance. To make this claim, the firm must:"; options = ["Have its GIPS compliance verified by an independent third party", "Apply GIPS standards on a firm-wide basis, not just to selected composites", "Have composite performance reviewed by a regulator"]; correctIndex = 1; explanation = "GIPS compliance is a firm-wide claim. Third-party verification is recommended but not required. Firms must apply GIPS to all composites." });
    questions.add({ id = 10; topicId = 0; difficulty = "medium"; stem = "Under Standard II(B) – Market Manipulation, which of the following is MOST likely prohibited?"; options = ["Purchasing a stock after conducting fundamental research that suggests undervaluation", "Spreading false rumors about a company's earnings to artificially depress its price", "Short-selling a stock based on a negative analyst report"]; correctIndex = 1; explanation = "Standard II(B) prohibits practices that artificially influence prices or volume through deceptive means, such as spreading false information to manipulate a security's price." });
    questions.add({ id = 11; topicId = 0; difficulty = "easy"; stem = "When applicable law conflicts with CFA Institute Standards, a CFA member must:"; options = ["Always follow local law if it is stricter than the Standards", "Follow whichever rule — local law or Standards — is stricter", "Always follow CFA Standards, regardless of local law"]; correctIndex = 1; explanation = "CFA members must comply with the stricter of local law or CFA Standards." });
    // ── Topic 1: Quantitative Methods (questions 12-23) ───────────────────────
    questions.add({ id = 12; topicId = 1; difficulty = "easy"; stem = "An investor deposits $5,000 in an account that earns 6% per year compounded monthly. The effective annual rate (EAR) is closest to:"; options = ["6.00%", "6.17%", "6.36%"]; correctIndex = 1; explanation = "EAR = (1 + 0.06/12)^12 - 1 = (1.005)^12 - 1 approximately 6.17%. Monthly compounding produces an EAR higher than the stated 6% nominal rate." });
    questions.add({ id = 13; topicId = 1; difficulty = "medium"; stem = "A distribution of stock returns has a mean of 10% and a standard deviation of 15%. If returns are normally distributed, approximately what percentage of returns fall between -20% and 40%?"; options = ["68%", "90%", "95%"]; correctIndex = 2; explanation = "-20% to 40% spans 2 standard deviations on each side of the mean (10% plus or minus 2 times 15%). In a normal distribution, approximately 95% of observations fall within 2 standard deviations." });
    questions.add({ id = 14; topicId = 1; difficulty = "medium"; stem = "An analyst uses hypothesis testing to determine if a portfolio manager has positive alpha. The null hypothesis is that alpha equals zero. With a p-value of 0.03 and a 5% significance level, the analyst should:"; options = ["Fail to reject the null hypothesis because 0.03 < 0.05", "Reject the null hypothesis because 0.03 < 0.05", "Accept the alternative hypothesis only if p < 0.01"]; correctIndex = 1; explanation = "A p-value of 0.03 is less than the 5% significance level, so the result is statistically significant. The analyst rejects the null hypothesis of zero alpha." });
    questions.add({ id = 15; topicId = 1; difficulty = "hard"; stem = "A bond pays $1,000 in 3 years. At a discount rate of 8%, its present value is closest to:"; options = ["$793.83", "$857.34", "$925.93"]; correctIndex = 0; explanation = "PV = 1000 / (1.08)^3 = 1000 / 1.2597 approximately $793.83." });
    questions.add({ id = 16; topicId = 1; difficulty = "medium"; stem = "Which measure of central tendency is MOST affected by extreme outlier values?"; options = ["Median", "Mode", "Arithmetic mean"]; correctIndex = 2; explanation = "The arithmetic mean sums all values and divides by n, so it is pulled by outliers. The median and mode are more resistant to extreme values." });
    questions.add({ id = 17; topicId = 1; difficulty = "hard"; stem = "A random variable X has a probability distribution where P(X=1)=0.2, P(X=2)=0.3, P(X=3)=0.5. The expected value E(X) is:"; options = ["2.0", "2.3", "2.5"]; correctIndex = 1; explanation = "E(X) = 1 times 0.2 + 2 times 0.3 + 3 times 0.5 = 0.2 + 0.6 + 1.5 = 2.3." });
    questions.add({ id = 18; topicId = 1; difficulty = "easy"; stem = "The coefficient of variation (CV) is BEST used to:"; options = ["Measure the absolute level of risk in a portfolio", "Compare risk per unit of return across investments with different means", "Determine the probability of earning a positive return"]; correctIndex = 1; explanation = "CV = Standard Deviation / Mean. It normalizes risk by the mean, allowing comparison of risk per unit of return across investments with different average returns." });
    questions.add({ id = 19; topicId = 1; difficulty = "medium"; stem = "A Type I error in hypothesis testing occurs when:"; options = ["The analyst fails to reject a false null hypothesis", "The analyst rejects a true null hypothesis", "The significance level is set too low"]; correctIndex = 1; explanation = "Type I error (false positive) is rejecting a null hypothesis that is actually true. Its probability equals the significance level alpha." });
    questions.add({ id = 20; topicId = 1; difficulty = "hard"; stem = "Using the time-weighted rate of return (TWR) eliminates the impact of:"; options = ["Market volatility on portfolio returns", "Cash inflows and outflows by the client", "Management fees on performance"]; correctIndex = 1; explanation = "TWR eliminates the effect of external cash flows (deposits/withdrawals), making it the preferred measure for comparing portfolio manager performance." });
    questions.add({ id = 21; topicId = 1; difficulty = "medium"; stem = "Bayes' theorem is used to:"; options = ["Update a prior probability estimate given new information", "Calculate the variance of a joint probability distribution", "Determine the expected return of a portfolio"]; correctIndex = 0; explanation = "Bayes' theorem provides a formula for revising prior probability estimates using new conditional information: P(A|B) = P(B|A) times P(A) / P(B)." });
    questions.add({ id = 22; topicId = 1; difficulty = "easy"; stem = "An annuity due differs from an ordinary annuity in that payments are made:"; options = ["At the end of each period rather than the beginning", "At the beginning of each period rather than the end", "In a single lump sum at contract inception"]; correctIndex = 1; explanation = "An annuity due has payments at the beginning of each period. An ordinary annuity has payments at the end of each period." });
    questions.add({ id = 23; topicId = 1; difficulty = "hard"; stem = "A lognormal distribution is commonly used to model stock prices because:"; options = ["Stock prices are symmetrically distributed around their mean", "Stock prices cannot be negative, and the distribution is bounded at zero", "Stock returns follow a uniform distribution"]; correctIndex = 1; explanation = "Since stock prices cannot fall below zero, the lognormal distribution is more appropriate than the normal distribution for modeling price levels." });
    // ── Topic 2: Economics (questions 24-35) ─────────────────────────────────
    questions.add({ id = 24; topicId = 2; difficulty = "easy"; stem = "If the price of a good rises and the quantity demanded falls, the demand curve is:"; options = ["Upward sloping, reflecting Giffen good behavior", "Downward sloping, consistent with the law of demand", "Perfectly inelastic, indicating zero price sensitivity"]; correctIndex = 1; explanation = "The law of demand states that, ceteris paribus, there is an inverse relationship between price and quantity demanded, resulting in a downward-sloping demand curve." });
    questions.add({ id = 25; topicId = 2; difficulty = "medium"; stem = "In a perfectly competitive market, a firm in long-run equilibrium earns:"; options = ["Positive economic profits, attracting new entrants", "Zero economic profit, with price equal to minimum average total cost", "Accounting losses, causing exit from the market"]; correctIndex = 1; explanation = "In perfect competition, entry and exit eliminate economic profit in the long run. Firms earn normal profit (zero economic profit), with P = minimum ATC." });
    questions.add({ id = 26; topicId = 2; difficulty = "medium"; stem = "An expansionary monetary policy by the central bank would MOST likely:"; options = ["Increase short-term interest rates to slow inflation", "Decrease interest rates and increase the money supply to stimulate growth", "Reduce government spending to balance the fiscal budget"]; correctIndex = 1; explanation = "Expansionary monetary policy involves reducing policy rates and increasing the money supply to encourage borrowing and stimulate economic activity." });
    questions.add({ id = 27; topicId = 2; difficulty = "hard"; stem = "If real GDP is below its potential level, the output gap is best described as:"; options = ["Positive, indicating inflationary pressure", "Negative, indicating recessionary conditions", "Zero, indicating perfect economic equilibrium"]; correctIndex = 1; explanation = "A negative output gap (real GDP below potential GDP) means the economy is operating below capacity, typically associated with high unemployment and deflationary pressure." });
    questions.add({ id = 28; topicId = 2; difficulty = "medium"; stem = "The current account balance in a country's balance of payments includes:"; options = ["Foreign direct investment and portfolio investment flows", "Trade in goods, services, income, and current transfers", "Official reserve transactions by the central bank"]; correctIndex = 1; explanation = "The current account records trade in goods and services, primary income, and secondary income (transfers). Capital and financial flows are in separate accounts." });
    questions.add({ id = 29; topicId = 2; difficulty = "easy"; stem = "Price elasticity of demand measures:"; options = ["The percentage change in quantity demanded relative to a percentage change in price", "The absolute change in quantity demanded for a one-unit price change", "The relationship between income changes and demand shifts"]; correctIndex = 0; explanation = "Price elasticity of demand = % change in quantity demanded / % change in price. It measures consumer responsiveness to price changes in relative terms." });
    questions.add({ id = 30; topicId = 2; difficulty = "hard"; stem = "Under the purchasing power parity (PPP) framework, if Country A has 5% inflation and Country B has 2% inflation, the exchange rate of A's currency against B's should:"; options = ["Appreciate by approximately 3%", "Depreciate by approximately 3%", "Remain unchanged if both are free-floating currencies"]; correctIndex = 1; explanation = "PPP predicts that higher inflation in Country A will erode its currency's value. The high-inflation country's currency depreciates by approximately the inflation differential (3%)." });
    questions.add({ id = 31; topicId = 2; difficulty = "medium"; stem = "The marginal propensity to consume (MPC) equals 0.75. The fiscal multiplier for an increase in government spending is:"; options = ["0.75", "3.0", "4.0"]; correctIndex = 2; explanation = "Fiscal multiplier = 1/(1 - MPC) = 1/(1 - 0.75) = 1/0.25 = 4.0." });
    questions.add({ id = 32; topicId = 2; difficulty = "easy"; stem = "A monopolist maximizes profit by producing where:"; options = ["Price equals average total cost", "Marginal revenue equals marginal cost", "Total revenue is maximized"]; correctIndex = 1; explanation = "Profit maximization for any firm occurs where Marginal Revenue (MR) = Marginal Cost (MC)." });
    questions.add({ id = 33; topicId = 2; difficulty = "medium"; stem = "In the IS-LM framework, a contractionary fiscal policy (tax increase) shifts the:"; options = ["LM curve to the left, reducing interest rates", "IS curve to the left, reducing output and interest rates", "IS curve to the right, increasing output"]; correctIndex = 1; explanation = "An increase in taxes reduces disposable income and aggregate demand, shifting the IS curve left, reducing both equilibrium output and interest rates." });
    questions.add({ id = 34; topicId = 2; difficulty = "hard"; stem = "The J-curve effect in international trade suggests that after a currency depreciation:"; options = ["The trade balance improves immediately and stays improved", "The trade balance initially worsens before improving over time", "The trade balance improves only if import demand is perfectly elastic"]; correctIndex = 1; explanation = "The J-curve occurs because trade volumes adjust slowly. Initially the weaker currency increases import costs, worsening the balance. Over time, volumes adjust and the balance improves." });
    questions.add({ id = 35; topicId = 2; difficulty = "easy"; stem = "GDP measured by the expenditure approach equals:"; options = ["C + I + G + (X - M)", "National income + depreciation - net foreign factor income", "Value added at each stage of production"]; correctIndex = 0; explanation = "The expenditure approach sums: Consumption (C) + Gross Investment (I) + Government spending (G) + Net Exports (X - M)." });
    // ── Topic 3: Financial Statement Analysis (questions 36-47) ──────────────
    questions.add({ id = 36; topicId = 3; difficulty = "easy"; stem = "Under IFRS, interest paid on debt may be classified on the cash flow statement as:"; options = ["Operating activities only", "Either operating or financing activities", "Investing activities only"]; correctIndex = 1; explanation = "IFRS allows flexibility: interest paid can be classified as operating or financing cash flows, unlike US GAAP which requires operating classification." });
    questions.add({ id = 37; topicId = 3; difficulty = "medium"; stem = "A company's current ratio is 2.5 and its quick ratio is 1.2. This suggests that:"; options = ["The company has a large proportion of inventory relative to current liabilities", "The company cannot pay its current liabilities with liquid assets", "The company's inventory is very small relative to current assets"]; correctIndex = 0; explanation = "The gap between the current ratio (2.5) and quick ratio (1.2) implies a significant inventory balance since the quick ratio excludes inventory." });
    questions.add({ id = 38; topicId = 3; difficulty = "hard"; stem = "A company capitalizes $10M in software development costs instead of expensing them. Compared to expensing, in the year of capitalization, this choice results in:"; options = ["Lower assets and higher net income", "Higher assets and higher net income in the current year", "Higher assets and lower cash flow from operations"]; correctIndex = 1; explanation = "Capitalizing increases assets and defers expense recognition, so net income is higher initially. Cash flow from operations is also higher since the cost appears in investing activities." });
    questions.add({ id = 39; topicId = 3; difficulty = "medium"; stem = "The DuPont decomposition breaks return on equity (ROE) into:"; options = ["Net profit margin times Asset turnover times Equity multiplier", "Gross margin times Operating leverage times Financial leverage", "EBIT margin times Tax burden times Interest burden"]; correctIndex = 0; explanation = "DuPont ROE = Net profit margin x Asset turnover x Equity multiplier. Identifies profitability, efficiency, and leverage drivers." });
    questions.add({ id = 40; topicId = 3; difficulty = "easy"; stem = "On the balance sheet, goodwill arises from:"; options = ["Revaluation of plant and equipment above book value", "Paying more than fair value of net identifiable assets in a business acquisition", "Internally developed brand recognition over many years"]; correctIndex = 1; explanation = "Goodwill is recognized only in business combinations as the excess of purchase price over the fair value of identifiable net assets acquired. Internally generated goodwill is not capitalized." });
    questions.add({ id = 41; topicId = 3; difficulty = "medium"; stem = "Free cash flow to the firm (FCFF) is BEST defined as:"; options = ["Operating cash flow minus capital expenditures", "Net income plus depreciation minus changes in working capital", "Cash available to all capital providers after meeting operating needs and investing"]; correctIndex = 2; explanation = "FCFF = Cash flow from operations + after-tax interest paid - capital expenditures. It represents cash available to debt and equity providers after operating and investment needs are met." });
    questions.add({ id = 42; topicId = 3; difficulty = "hard"; stem = "A company switches from LIFO to FIFO inventory accounting during a period of rising prices. The immediate effect on the financial statements is:"; options = ["Higher COGS, lower ending inventory, and lower net income", "Lower COGS, higher ending inventory, and higher net income", "No effect on COGS; only the balance sheet changes"]; correctIndex = 1; explanation = "With rising prices, FIFO assigns older (cheaper) costs to COGS and newer (higher) costs to ending inventory. The switch to FIFO lowers COGS, raises inventory, and increases net income." });
    questions.add({ id = 43; topicId = 3; difficulty = "medium"; stem = "The interest coverage ratio (times interest earned) measures:"; options = ["Liquidity: whether short-term obligations can be met", "Solvency: the ability to service debt payments from operating earnings", "Profitability: net profit as a percentage of revenue"]; correctIndex = 1; explanation = "Interest coverage = EBIT / Interest expense. It measures how many times a company can cover its interest obligations from operating earnings." });
    questions.add({ id = 44; topicId = 3; difficulty = "easy"; stem = "Deferred tax liabilities arise when:"; options = ["Tax expense on the income statement exceeds taxes currently payable", "Taxes currently payable exceed tax expense on the income statement", "A company reports losses on the income statement"]; correctIndex = 0; explanation = "A deferred tax liability arises when taxable income (per tax returns) is less than accounting income (per GAAP), so the company owes more taxes in the future." });
    questions.add({ id = 45; topicId = 3; difficulty = "hard"; stem = "Under IFRS, impairment of a long-lived asset is recognized when:"; options = ["The asset's carrying value exceeds the higher of its fair value less costs to sell and its value in use", "The undiscounted future cash flows from the asset are less than its carrying value", "The asset's market value falls below its original purchase cost"]; correctIndex = 0; explanation = "Under IAS 36, impairment loss is recognized when carrying amount exceeds recoverable amount, where recoverable amount = max(fair value less disposal costs, value in use)." });
    questions.add({ id = 46; topicId = 3; difficulty = "medium"; stem = "Which financial ratio is most useful in evaluating a company's ability to generate profit from its assets?"; options = ["Return on assets (ROA)", "Current ratio", "Debt-to-equity ratio"]; correctIndex = 0; explanation = "ROA = Net income / Average total assets. It directly measures how efficiently a company uses its assets to generate profit." });
    questions.add({ id = 47; topicId = 3; difficulty = "easy"; stem = "In the cash flow statement, the purchase of equipment is classified as:"; options = ["Operating activity", "Investing activity", "Financing activity"]; correctIndex = 1; explanation = "Purchases and sales of long-term assets (PP&E) are investing activities under both IFRS and US GAAP." });
    // ── Topic 4: Corporate Issuers (questions 48-59) ──────────────────────────
    questions.add({ id = 48; topicId = 4; difficulty = "medium"; stem = "The Modigliani-Miller theorem (with no taxes, no bankruptcy costs) states that a firm's value is:"; options = ["Maximized by using the highest possible financial leverage", "Independent of its capital structure", "Maximized by using 100% equity financing"]; correctIndex = 1; explanation = "M&M Proposition I (no taxes): firm value is unaffected by capital structure. Investors can replicate any leverage personally, so financing mix is irrelevant to total value." });
    questions.add({ id = 49; topicId = 4; difficulty = "easy"; stem = "Which of the following BEST describes the agency conflict between shareholders and managers?"; options = ["Managers may act in their own self-interest rather than maximizing shareholder wealth", "Shareholders prefer more leverage while managers prefer less", "Shareholders and managers always have aligned incentives due to stock compensation"]; correctIndex = 0; explanation = "The principal-agent problem: managers may pursue personal goals rather than maximizing shareholder value." });
    questions.add({ id = 50; topicId = 4; difficulty = "hard"; stem = "A company's WACC is 8%, cost of equity is 10%, tax rate is 30%, and it is financed 40% by debt and 60% by equity. The pre-tax cost of debt is closest to:"; options = ["5.00%", "7.14%", "8.00%"]; correctIndex = 1; explanation = "WACC = 0.6 x 10% + 0.4 x kd x (1-0.30) = 8% -> 6% + 0.28 x kd = 8% -> kd = 2% / 0.28 approximately 7.14%." });
    questions.add({ id = 51; topicId = 4; difficulty = "medium"; stem = "A share buyback (repurchase) is preferred over a cash dividend when:"; options = ["The company wants to provide a guaranteed income stream to shareholders", "Management believes shares are undervalued and wants to return capital with flexibility", "The company faces legal restrictions on purchasing its own shares"]; correctIndex = 1; explanation = "Buybacks offer flexibility, potential EPS accretion, and are tax-efficient when capital gains rates are lower than dividend rates." });
    questions.add({ id = 52; topicId = 4; difficulty = "easy"; stem = "Working capital is defined as:"; options = ["Total assets minus total liabilities", "Current assets minus current liabilities", "Cash and equivalents plus short-term investments"]; correctIndex = 1; explanation = "Working capital = Current assets - Current liabilities. It measures the short-term liquidity buffer available to fund daily operations." });
    questions.add({ id = 53; topicId = 4; difficulty = "medium"; stem = "According to the trade-off theory of capital structure, the optimal debt ratio balances:"; options = ["The tax benefit of interest deductions against bankruptcy and financial distress costs", "Growth opportunities against dividend payout requirements", "Profitability against asset turnover efficiency"]; correctIndex = 0; explanation = "The trade-off theory: optimal capital structure is where the marginal benefit of debt (interest tax shield) equals the marginal cost (expected financial distress costs)." });
    questions.add({ id = 54; topicId = 4; difficulty = "hard"; stem = "Under the pecking order theory, firms prefer to finance investments in the following order:"; options = ["Equity first, then debt, then retained earnings", "Retained earnings first, then debt, then new equity issuance", "Debt first, then equity, then retained earnings"]; correctIndex = 1; explanation = "Pecking order theory: firms prefer internal financing (retained earnings) first to avoid information asymmetry costs, then debt, and finally new equity." });
    questions.add({ id = 55; topicId = 4; difficulty = "easy"; stem = "A staggered board (classified board) serves as an anti-takeover defense by:"; options = ["Allowing the company to issue new shares at below-market prices during a takeover", "Making it difficult to replace all directors at once, slowing hostile takeovers", "Giving the CEO a golden parachute payment upon change of control"]; correctIndex = 1; explanation = "A classified/staggered board divides directors into multiple classes with multi-year terms. Only one class stands for election each year, preventing rapid board replacement." });
    questions.add({ id = 56; topicId = 4; difficulty = "medium"; stem = "The cash conversion cycle (CCC) measures:"; options = ["How long it takes to convert cash into finished goods only", "The time from cash outlay for inventory to cash received from customers", "The average collection period for accounts receivable"]; correctIndex = 1; explanation = "CCC = Days of Inventory Outstanding + Days of Sales Outstanding - Days of Payables Outstanding. It measures the net time a firm's cash is tied up in operations." });
    questions.add({ id = 57; topicId = 4; difficulty = "hard"; stem = "A firm has DOL (degree of operating leverage) of 2.0 and DFL (degree of financial leverage) of 1.5. If sales increase by 10%, EPS will increase by approximately:"; options = ["10%", "15%", "30%"]; correctIndex = 2; explanation = "DTL = DOL x DFL = 2.0 x 1.5 = 3.0. A 10% increase in sales results in a 30% increase in EPS." });
    questions.add({ id = 58; topicId = 4; difficulty = "easy"; stem = "Which of the following is a PRIMARY objective of corporate governance?"; options = ["Maximizing short-term earnings per share", "Protecting shareholder interests and ensuring management accountability", "Minimizing the company's tax burden through financial engineering"]; correctIndex = 1; explanation = "Corporate governance refers to the system of controls designed to protect shareholder interests and ensure management accountability." });
    questions.add({ id = 59; topicId = 4; difficulty = "medium"; stem = "ESG (Environmental, Social, Governance) investing primarily seeks to:"; options = ["Maximize returns by ignoring non-financial risk factors", "Incorporate non-financial factors that may affect long-term risk and return", "Screen portfolios exclusively for high-dividend-paying companies"]; correctIndex = 1; explanation = "ESG integration evaluates environmental, social, and governance risks alongside financial metrics, recognizing these factors can materially affect long-term risk-adjusted returns." });
    // ── Topic 5: Equity Investments (questions 60-71) ─────────────────────────
    questions.add({ id = 60; topicId = 5; difficulty = "easy"; stem = "Which valuation model estimates equity value as the present value of all future dividends?"; options = ["Free cash flow to equity (FCFE) model", "Dividend discount model (DDM)", "Residual income model"]; correctIndex = 1; explanation = "The dividend discount model (DDM) values a stock as the sum of all future dividends discounted at the required return on equity." });
    questions.add({ id = 61; topicId = 5; difficulty = "medium"; stem = "A stock has an expected dividend of $2.00, a required return of 10%, and a sustainable growth rate of 4%. Its value using the Gordon Growth Model is:"; options = ["$20.00", "$33.33", "$50.00"]; correctIndex = 1; explanation = "V0 = D1/(r - g) = 2.00/(0.10 - 0.04) = 2.00/0.06 = $33.33." });
    questions.add({ id = 62; topicId = 5; difficulty = "hard"; stem = "In order for an equity market to be informationally efficient in the semi-strong form, prices must reflect:"; options = ["Only past trading prices and volume (historical data)", "All publicly available information, including financial statements and news", "All public and private (insider) information"]; correctIndex = 1; explanation = "Semi-strong form EMH holds that prices reflect all publicly available information. Strong form includes private information; weak form only includes historical market data." });
    questions.add({ id = 63; topicId = 5; difficulty = "medium"; stem = "A price-to-earnings (P/E) ratio will be HIGHER for a firm with:"; options = ["Lower expected growth rate", "Higher required rate of return", "Higher expected earnings growth rate"]; correctIndex = 2; explanation = "P/E = payout ratio / (r - g). Higher growth (g) results in a higher P/E. Growth firms command premium valuations." });
    questions.add({ id = 64; topicId = 5; difficulty = "easy"; stem = "Market capitalization-weighted indices overweight:"; options = ["Smaller companies relative to their market impact", "Larger companies proportionally to their total market value", "Each company equally regardless of size"]; correctIndex = 1; explanation = "Cap-weighted indices weight each constituent by its market capitalization, so larger companies have a greater impact on the index." });
    questions.add({ id = 65; topicId = 5; difficulty = "hard"; stem = "A company has ROE of 15%, plows back 60% of earnings, and currently earns $4 per share. Its sustainable growth rate is:"; options = ["6%", "9%", "15%"]; correctIndex = 1; explanation = "Sustainable growth rate g = ROE x retention ratio = 0.15 x 0.60 = 0.09 = 9%." });
    questions.add({ id = 66; topicId = 5; difficulty = "medium"; stem = "In a quote-driven (dealer) market, trades are executed:"; options = ["By matching buyers and sellers on an order-driven exchange", "At prices set by dealers who commit capital to maintain bid-ask spreads", "Through sealed-bid auctions where the highest bidder wins"]; correctIndex = 1; explanation = "Quote-driven (dealer) markets have market makers who post bid and ask prices, committing their own capital. Order-driven markets match buyer and seller orders." });
    questions.add({ id = 67; topicId = 5; difficulty = "easy"; stem = "Enterprise value (EV) is BEST described as:"; options = ["Market capitalization of common equity only", "Total company value: market cap + net debt (total debt minus cash)", "Book value of all assets on the balance sheet"]; correctIndex = 1; explanation = "EV = Market capitalization + Total debt - Cash and equivalents. It represents the total value of the enterprise available to all capital providers." });
    questions.add({ id = 68; topicId = 5; difficulty = "medium"; stem = "The Tobin's q ratio compares:"; options = ["A firm's market value to the replacement cost of its assets", "Price per share to book value per share", "Forward P/E to current P/E"]; correctIndex = 0; explanation = "Tobin's q = Market value of assets / Replacement cost of assets. A q > 1 suggests markets value assets above replacement cost." });
    questions.add({ id = 69; topicId = 5; difficulty = "hard"; stem = "Which equity valuation method is MOST appropriate when a firm pays no dividends and has negative free cash flows?"; options = ["Gordon Growth Model (DDM)", "FCFE discounted cash flow model", "Asset-based (book value) approach"]; correctIndex = 2; explanation = "When dividends are zero and free cash flows are negative, asset-based valuation provides a floor value." });
    questions.add({ id = 70; topicId = 5; difficulty = "medium"; stem = "Short selling a stock involves:"; options = ["Buying a stock with the expectation that prices will rise", "Borrowing shares and selling them, hoping to buy back cheaper later", "Using options to limit downside risk on a long position"]; correctIndex = 1; explanation = "In a short sale, the investor borrows shares and sells them at the current market price, hoping to buy them back at a lower price later." });
    questions.add({ id = 71; topicId = 5; difficulty = "easy"; stem = "A company's book value per share is $20 and its market price is $30. Its price-to-book (P/B) ratio is:"; options = ["0.67", "1.50", "2.00"]; correctIndex = 1; explanation = "P/B = Market price per share / Book value per share = $30 / $20 = 1.50." });
    // ── Topic 6: Fixed Income (questions 72-83) ───────────────────────────────
    questions.add({ id = 72; topicId = 6; difficulty = "easy"; stem = "A bond's yield to maturity (YTM) is BEST described as:"; options = ["The coupon rate stated on the bond certificate", "The discount rate that equates the bond's price to its present value of all cash flows", "The current yield calculated as annual coupon divided by face value"]; correctIndex = 1; explanation = "YTM is the IRR of the bond — the discount rate that sets the PV of all future cash flows equal to the current market price." });
    questions.add({ id = 73; topicId = 6; difficulty = "medium"; stem = "When interest rates rise, bond prices:"; options = ["Rise because investors receive higher coupon payments", "Fall because the present value of fixed cash flows decreases", "Are unaffected if the bond is held to maturity"]; correctIndex = 1; explanation = "Bond prices and yields move inversely. When discount rates rise, the PV of fixed future cash flows decreases, lowering the bond's price." });
    questions.add({ id = 74; topicId = 6; difficulty = "hard"; stem = "Modified duration of a bond is 5.0. If yields increase by 50 basis points, the approximate percentage price change is:"; options = ["+2.5%", "-2.5%", "-5.0%"]; correctIndex = 1; explanation = "Delta P/P approximately equals -Modified Duration x Delta y = -5.0 x 0.005 = -2.5%." });
    questions.add({ id = 75; topicId = 6; difficulty = "medium"; stem = "Convexity in fixed income refers to:"; options = ["The linear relationship between bond prices and yields", "The curvature of the price-yield relationship showing duration underestimates price appreciation for large yield decreases", "The credit risk premium embedded in bond yields above the risk-free rate"]; correctIndex = 1; explanation = "Positive convexity means price increases more than duration predicts when yields fall, and falls less than predicted when yields rise." });
    questions.add({ id = 76; topicId = 6; difficulty = "easy"; stem = "A bond trades at a premium above par when:"; options = ["Its coupon rate is below the current market yield", "Its coupon rate exceeds the current market yield", "It has a lower credit rating than comparable bonds"]; correctIndex = 1; explanation = "A bond trades at a premium when its coupon rate > YTM. Investors pay more than par to receive the above-market coupon payments." });
    questions.add({ id = 77; topicId = 6; difficulty = "hard"; stem = "The z-spread on a bond is the constant spread added to every point on the:"; options = ["Par rate curve to equate the bond's price to its cash flows", "Government spot rate curve to equate the bond's price to its cash flows", "Swap rate curve to equate the bond's price to its cash flows"]; correctIndex = 1; explanation = "The z-spread (zero-volatility spread) is added to each government spot rate so that the discounted cash flows equal the bond's current market price." });
    questions.add({ id = 78; topicId = 6; difficulty = "medium"; stem = "Dollar duration (DV01) measures:"; options = ["The percentage change in bond price for a 1-basis-point yield change", "The dollar change in bond price for a 1-basis-point yield change", "The duration expressed in dollar terms by multiplying by price"]; correctIndex = 1; explanation = "DV01 = Modified duration x Bond price x 0.0001. It gives the dollar price change for a 1 basis point move in yield." });
    questions.add({ id = 79; topicId = 6; difficulty = "easy"; stem = "A callable bond gives the issuer the right to:"; options = ["Sell the bond back to investors at a predetermined price", "Redeem the bond early at a specified price before maturity", "Convert the bond into equity shares of the issuing company"]; correctIndex = 1; explanation = "A callable bond contains an embedded call option for the issuer, allowing early redemption at the call price. Issuers call when rates fall." });
    questions.add({ id = 80; topicId = 6; difficulty = "hard"; stem = "A bond with option-adjusted spread (OAS) of 100 bps vs. a z-spread of 120 bps suggests the embedded option is worth approximately:"; options = ["20 bps, consistent with a call option held by the issuer", "20 bps, consistent with a put option held by the investor", "120 bps, reflecting total credit risk"]; correctIndex = 0; explanation = "OAS = z-spread - option cost. 100 = 120 - option value, so option = 20 bps. For callable bonds, OAS < z-spread since the call option benefits the issuer." });
    questions.add({ id = 81; topicId = 6; difficulty = "medium"; stem = "In credit analysis, the 4 Cs of credit commonly include:"; options = ["Capacity, Capital, Collateral, and Covenants", "Creditworthiness, Cashflow, Coupon, and Covenants", "Capacity, Currency, Country risk, and Collateral"]; correctIndex = 0; explanation = "Traditional credit analysis uses the 4 Cs: Capacity (ability to pay), Capital (financial strength), Collateral (security), and Covenants (protective agreements)." });
    questions.add({ id = 82; topicId = 6; difficulty = "easy"; stem = "The term structure of interest rates (yield curve) shows the relationship between:"; options = ["Bond yields and their credit ratings", "Bond yields and their time to maturity for similar credit quality", "Bond prices and their coupon rates"]; correctIndex = 1; explanation = "The yield curve plots yields-to-maturity against maturities for bonds of similar credit quality. The shape reflects market expectations for future interest rates." });
    questions.add({ id = 83; topicId = 6; difficulty = "medium"; stem = "Under the expectations theory of the term structure, a normal (upward-sloping) yield curve implies:"; options = ["Investors require a liquidity premium for holding longer-term bonds", "Markets expect short-term rates to rise in the future", "Current long-term rates are above their equilibrium level"]; correctIndex = 1; explanation = "Pure expectations theory: the long-term rate is the geometric average of expected future short-term rates. An upward-sloping curve means markets expect short rates to rise." });
    // ── Topic 7: Derivatives (questions 84-94) ────────────────────────────────
    questions.add({ id = 84; topicId = 7; difficulty = "easy"; stem = "A forward contract obligates both parties to:"; options = ["Exchange an asset at an agreed price on a specified future date", "Pay a premium for the right (not obligation) to buy an asset", "Settle daily mark-to-market gains and losses through a clearing house"]; correctIndex = 0; explanation = "A forward contract is a customized OTC agreement obligating the buyer to purchase and the seller to deliver an asset at a predetermined forward price on a specified future date." });
    questions.add({ id = 85; topicId = 7; difficulty = "medium"; stem = "A European call option gives the holder the right to:"; options = ["Sell the underlying asset at the exercise price at any time before expiry", "Buy the underlying asset at the exercise price only at expiry", "Sell the underlying at market price on the exercise date"]; correctIndex = 1; explanation = "A European call option gives the right (not obligation) to buy the underlying at the strike price, but only on the expiration date." });
    questions.add({ id = 86; topicId = 7; difficulty = "hard"; stem = "Put-call parity for European options states that:"; options = ["Call price + Strike/(1+r)^T = Put price + Spot price", "Call price + Spot price = Put price + Strike/(1+r)^T", "Call price = Put price + Spot price - Strike"]; correctIndex = 0; explanation = "Put-call parity: C + PV(K) = P + S0, rearranged as C + K/(1+r)^T = P + S0." });
    questions.add({ id = 87; topicId = 7; difficulty = "medium"; stem = "Delta of a call option measures:"; options = ["The rate of change in option price relative to a change in the underlying price", "The sensitivity of option price to changes in implied volatility", "The time decay of the option premium"]; correctIndex = 0; explanation = "Delta is the first derivative of option price with respect to the underlying price. A delta of 0.60 means the call price increases by $0.60 for every $1 increase in the stock price." });
    questions.add({ id = 88; topicId = 7; difficulty = "easy"; stem = "An interest rate swap typically involves:"; options = ["Exchanging a fixed interest payment for a floating interest payment on a notional principal", "Buying and selling the same bond simultaneously to lock in a spread", "Purchasing call options on interest rates to hedge rising costs"]; correctIndex = 0; explanation = "In a plain vanilla interest rate swap, one party pays a fixed rate and receives a floating rate on a notional principal amount. No principal is exchanged." });
    questions.add({ id = 89; topicId = 7; difficulty = "hard"; stem = "The value of a futures contract (after marking to market) at any given day is:"; options = ["The difference between today's futures price and yesterday's settlement price", "The present value of the difference between current and initial futures price", "Always zero because futures are marked to market daily"]; correctIndex = 2; explanation = "After daily mark-to-market settlement, the value of a futures position is reset to zero at each day's end. Gains and losses are paid in cash daily." });
    questions.add({ id = 90; topicId = 7; difficulty = "medium"; stem = "The payoff of a long call option at expiration is:"; options = ["Max(0, S_T - X), where S_T is the stock price and X is the strike price", "Max(0, X - S_T), representing intrinsic value of a put", "S_T - X, which may be negative if the stock falls below strike"]; correctIndex = 0; explanation = "Long call payoff = Max(0, S_T - X). The holder exercises only if S_T > X, earning S_T - X. If S_T <= X, the option expires worthless." });
    questions.add({ id = 91; topicId = 7; difficulty = "easy"; stem = "Hedging with futures contracts works by:"; options = ["Amplifying price exposure to profit from favorable moves", "Taking an offsetting futures position to neutralize price risk", "Using options instead of futures to limit downside only"]; correctIndex = 1; explanation = "A hedge establishes a futures position opposite to the existing spot exposure. If the spot position loses value, the futures position gains, reducing overall price risk." });
    questions.add({ id = 92; topicId = 7; difficulty = "medium"; stem = "The cost-of-carry model for pricing forwards states that the forward price equals:"; options = ["Spot price times (1 + r - dividend yield)^T, where r is the risk-free rate", "Spot price times (1 - r)^T, discounting at the risk-free rate", "Expected future spot price discounted at the equity risk premium"]; correctIndex = 0; explanation = "F0 = S0 x (1 + r - y)^T, where y is the continuous dividend yield. The forward price reflects carrying the asset to delivery at the risk-free rate net of income." });
    questions.add({ id = 93; topicId = 7; difficulty = "hard"; stem = "A protective put strategy (long stock + long put) is equivalent to:"; options = ["A covered call position", "A long call plus a risk-free bond (fiduciary call)", "A short put position"]; correctIndex = 1; explanation = "By put-call parity: S + P = C + PV(K). A protective put equals a fiduciary call. Both provide floored downside with unlimited upside." });
    questions.add({ id = 94; topicId = 7; difficulty = "medium"; stem = "A credit default swap (CDS) is used to:"; options = ["Transfer credit risk of a reference entity from protection buyer to protection seller", "Hedge interest rate risk using floating rate payments", "Exchange equity dividends for bond coupons"]; correctIndex = 0; explanation = "In a CDS, the protection buyer pays periodic premiums. If the reference entity defaults, the seller compensates the buyer. CDS are used to hedge or speculate on credit risk." });
    // ── Topic 8: Alternative Investments (questions 95-105) ───────────────────
    questions.add({ id = 95; topicId = 8; difficulty = "easy"; stem = "Private equity (PE) firms typically create value through:"; options = ["Only financial engineering (leveraged buyouts)", "Operational improvements, strategic repositioning, and financial leverage combined", "Passive buy-and-hold strategies similar to index investing"]; correctIndex = 1; explanation = "PE firms create value through: (1) financial leverage, (2) operational improvements, and (3) strategic repositioning." });
    questions.add({ id = 96; topicId = 8; difficulty = "medium"; stem = "Hedge funds differ from traditional mutual funds primarily in that hedge funds:"; options = ["Can only hold long positions in equities and bonds", "Have fewer regulatory constraints and can use leverage, short selling, and derivatives", "Are required to distribute 95% of income to investors annually"]; correctIndex = 1; explanation = "Hedge funds operate with fewer regulatory constraints, allowing leverage, short selling, derivatives, and illiquid investments. They typically target absolute rather than relative returns." });
    questions.add({ id = 97; topicId = 8; difficulty = "hard"; stem = "The 'carried interest' in private equity is:"; options = ["The management fee charged as a percentage of committed capital", "The share of profits (typically 20%) above the hurdle rate earned by the GP", "Interest paid on leveraged buyout debt"]; correctIndex = 1; explanation = "Carried interest (carry) is the performance-based fee earned by the general partner, typically 20% of profits above the hurdle rate. It aligns GP incentives with LP returns." });
    questions.add({ id = 98; topicId = 8; difficulty = "medium"; stem = "Real estate investment trusts (REITs) are attractive to investors primarily because:"; options = ["They provide capital appreciation similar to growth stocks with no income", "They offer liquid access to real estate with mandatory income distribution", "They are exempt from all forms of taxation"]; correctIndex = 1; explanation = "REITs must distribute at least 90% of taxable income to shareholders, providing income streams and liquidity not available in direct real estate investment." });
    questions.add({ id = 99; topicId = 8; difficulty = "easy"; stem = "Commodity investments provide portfolio diversification benefits primarily because commodity returns are:"; options = ["Highly correlated with equity and bond returns", "Driven by supply/demand factors that are largely uncorrelated with financial assets", "Risk-free stores of value similar to government bonds"]; correctIndex = 1; explanation = "Commodity returns are driven by physical supply-demand dynamics, largely independent of corporate earnings or interest rates, providing diversification benefits." });
    questions.add({ id = 100; topicId = 8; difficulty = "hard"; stem = "The vintage year of a private equity fund refers to:"; options = ["The year the fund achieves its final close for capital commitments", "The year the fund makes its first investment", "The year the fund was first registered with the SEC"]; correctIndex = 1; explanation = "Vintage year is the year the fund makes its first investment (or is formed/first closed). It is used to compare PE performance across funds from similar economic environments." });
    questions.add({ id = 101; topicId = 8; difficulty = "medium"; stem = "Infrastructure investments are characterized by:"; options = ["High liquidity, low barriers to entry, and volatile cash flows", "Long operating lives, stable regulated cash flows, and low correlation with equities", "High-growth potential with rapid technological obsolescence"]; correctIndex = 1; explanation = "Infrastructure assets typically feature long lives, essential service monopolies, regulated revenues providing stable cash flows, and low correlation with traditional asset classes." });
    questions.add({ id = 102; topicId = 8; difficulty = "easy"; stem = "A fund of funds (FoF) in the hedge fund context:"; options = ["Is a single hedge fund that manages a diversified portfolio of equities", "Invests in multiple underlying hedge funds, adding a layer of fees", "Is a passively managed ETF that tracks hedge fund indices"]; correctIndex = 1; explanation = "A fund of funds allocates capital across multiple hedge funds, providing diversification but adding a second layer of fees on top of underlying fund fees." });
    questions.add({ id = 103; topicId = 8; difficulty = "medium"; stem = "Venture capital (VC) differs from buyout private equity primarily in that VC:"; options = ["Targets mature companies with stable cash flows for leveraged acquisitions", "Invests in early-stage companies with high growth potential but negative cash flows", "Uses significant financial leverage to amplify returns"]; correctIndex = 1; explanation = "VC focuses on early-stage, high-growth companies and provides equity financing without leverage. Buyout PE targets established companies using significant debt financing." });
    questions.add({ id = 104; topicId = 8; difficulty = "hard"; stem = "The J-curve effect in private equity describes:"; options = ["The typical pattern of early negative returns followed by positive returns as investments mature", "The relationship between PE fund size and performance", "The trade-off between IRR and multiple on invested capital"]; correctIndex = 0; explanation = "The J-curve reflects early years when fees are paid and investments are not yet valued above cost. As investments mature and are exited, returns become positive." });
    questions.add({ id = 105; topicId = 8; difficulty = "easy"; stem = "Timberland as an alternative investment offers:"; options = ["Only inflation protection with no yield component", "Biological growth providing returns independent of market conditions, plus land value appreciation", "High liquidity and daily price discovery like publicly traded equities"]; correctIndex = 1; explanation = "Timberland provides biological growth, can time harvests to market conditions, provides an inflation hedge, and has low correlation to stocks and bonds." });
    // ── Topic 9: Portfolio Management (questions 106-117) ─────────────────────
    questions.add({ id = 106; topicId = 9; difficulty = "easy"; stem = "According to modern portfolio theory (MPT), the efficient frontier represents:"; options = ["All portfolios that maximize expected return for each level of risk", "The single portfolio with the highest Sharpe ratio", "Portfolios with the minimum possible risk regardless of return"]; correctIndex = 0; explanation = "The efficient frontier shows mean-variance optimal portfolios that achieve the highest expected return for a given level of risk, or the lowest risk for a given expected return." });
    questions.add({ id = 107; topicId = 9; difficulty = "medium"; stem = "In the CAPM, the expected return of an asset is determined by:"; options = ["Its total risk (standard deviation) relative to the market", "Its systematic risk (beta) relative to the market portfolio", "Its idiosyncratic (unsystematic) risk only"]; correctIndex = 1; explanation = "CAPM: E(Ri) = Rf + beta_i x [E(Rm) - Rf]. Only systematic (market) risk is priced; unsystematic risk can be diversified away." });
    questions.add({ id = 108; topicId = 9; difficulty = "hard"; stem = "If an asset has a beta of 1.5, the risk-free rate is 3%, and the equity risk premium is 5%, its expected return per CAPM is:"; options = ["7.5%", "10.5%", "11.5%"]; correctIndex = 1; explanation = "E(R) = 3% + 1.5 x 5% = 3% + 7.5% = 10.5%." });
    questions.add({ id = 109; topicId = 9; difficulty = "medium"; stem = "The Sharpe ratio measures:"; options = ["Return per unit of total risk (standard deviation)", "Excess return relative to a benchmark", "Return per unit of systematic risk (beta)"]; correctIndex = 0; explanation = "Sharpe ratio = (Portfolio return - Risk-free rate) / Portfolio standard deviation. It measures excess return per unit of total risk." });
    questions.add({ id = 110; topicId = 9; difficulty = "easy"; stem = "Systematic (market) risk is BEST described as:"; options = ["Risk that can be eliminated through portfolio diversification", "Risk arising from factors affecting all securities in the market", "Risk specific to an individual company's operations"]; correctIndex = 1; explanation = "Systematic risk comes from economy-wide factors. Unlike unsystematic (idiosyncratic) risk, it cannot be eliminated through diversification." });
    questions.add({ id = 111; topicId = 9; difficulty = "hard"; stem = "Jensen's alpha measures:"; options = ["The difference between a portfolio's actual return and its CAPM-predicted return", "The Sharpe ratio minus the market Sharpe ratio", "Portfolio return relative to the risk-free rate divided by beta"]; correctIndex = 0; explanation = "Jensen's alpha = Actual portfolio return - CAPM expected return. A positive alpha indicates outperformance after adjusting for systematic risk." });
    questions.add({ id = 112; topicId = 9; difficulty = "medium"; stem = "An investment policy statement (IPS) should primarily describe the investor's:"; options = ["Current portfolio holdings and their allocation weights", "Return objectives and risk tolerance, along with investment constraints", "Market outlook and tactical asset allocation decisions"]; correctIndex = 1; explanation = "An IPS documents the investor's objectives (return and risk tolerance) and constraints (time horizon, liquidity needs, tax situation). It is the foundation for portfolio construction." });
    questions.add({ id = 113; topicId = 9; difficulty = "easy"; stem = "Correlation coefficient of -1.0 between two assets means:"; options = ["The assets move perfectly together in the same direction", "The assets have no linear relationship", "The assets move perfectly opposite to each other, providing maximum diversification"]; correctIndex = 2; explanation = "A correlation of -1.0 means perfect negative correlation. Combining two perfectly negatively correlated assets can eliminate portfolio variance entirely." });
    questions.add({ id = 114; topicId = 9; difficulty = "medium"; stem = "The capital market line (CML) connects the risk-free asset to:"; options = ["Every efficient portfolio on the minimum-variance frontier", "The tangency portfolio (market portfolio) on the efficient frontier", "Only the global minimum variance portfolio"]; correctIndex = 1; explanation = "The CML passes through the risk-free asset and is tangent to the efficient frontier at the market portfolio. All investors on the CML combine the market portfolio with the risk-free asset." });
    questions.add({ id = 115; topicId = 9; difficulty = "hard"; stem = "Loss aversion, a concept from behavioral finance, implies that:"; options = ["Investors are equally sensitive to gains and losses of the same magnitude", "Investors feel losses more acutely than equivalent gains, leading to sub-optimal decisions", "Investors systematically underestimate the probability of large losses"]; correctIndex = 1; explanation = "Loss aversion (Kahneman and Tversky's prospect theory): the psychological pain of a loss is about twice as intense as the pleasure of an equivalent gain." });
    questions.add({ id = 116; topicId = 9; difficulty = "easy"; stem = "Rebalancing a portfolio back to its target asset allocation helps to:"; options = ["Maximize short-term returns by momentum trading", "Maintain the desired risk profile as asset prices change over time", "Reduce transaction costs by avoiding selling winners"]; correctIndex = 1; explanation = "As assets drift from target weights, portfolio risk changes. Rebalancing restores target weights and enforces a disciplined buy low, sell high approach." });
    questions.add({ id = 117; topicId = 9; difficulty = "medium"; stem = "In the arbitrage pricing theory (APT), expected asset returns are determined by:"; options = ["A single market risk factor (beta)", "Multiple systematic risk factors that cannot be arbitraged away", "Random walk theory suggesting returns are unpredictable"]; correctIndex = 1; explanation = "APT generalizes CAPM by allowing multiple systematic factors to explain returns. Each factor has its own beta (factor sensitivity) and risk premium." });
  };

  public func seedMockExams(exams : List.List<Types.MockExam>) {
    // CFA weights per 30 questions:
    // Ethics=5(17%), FSA=4(13%), Equity=4(13%), FixedIncome=4(13%), Quant=2(7%), Econ=2(7%), Corp=2(7%), Deriv=2(7%), Alts=2(7%), Portfolio=3(10%)
    // Topic ranges: Ethics 0-11, Quant 12-23, Econ 24-35, FSA 36-47, Corp 48-59, Equity 60-71, FI 72-83, Deriv 84-94, Alts 95-105, Port 106-117
    exams.add({ id = 0; title = "CFA Level I Mock Exam 1";  questionIds = [0,1,2,3,4,    36,37,38,39,   60,61,62,63,   72,73,74,75,   12,13,   24,25,   48,49,   84,85,   95,96,   106,107,108] });
    exams.add({ id = 1; title = "CFA Level I Mock Exam 2";  questionIds = [1,2,3,4,5,    37,38,39,40,   61,62,63,64,   73,74,75,76,   13,14,   25,26,   49,50,   85,86,   96,97,   107,108,109] });
    exams.add({ id = 2; title = "CFA Level I Mock Exam 3";  questionIds = [2,3,4,5,6,    38,39,40,41,   62,63,64,65,   74,75,76,77,   14,15,   26,27,   50,51,   86,87,   97,98,   108,109,110] });
    exams.add({ id = 3; title = "CFA Level I Mock Exam 4";  questionIds = [3,4,5,6,7,    39,40,41,42,   63,64,65,66,   75,76,77,78,   15,16,   27,28,   51,52,   87,88,   98,99,   109,110,111] });
    exams.add({ id = 4; title = "CFA Level I Mock Exam 5";  questionIds = [4,5,6,7,8,    40,41,42,43,   64,65,66,67,   76,77,78,79,   16,17,   28,29,   52,53,   88,89,   99,100,  110,111,112] });
    exams.add({ id = 5; title = "CFA Level I Mock Exam 6";  questionIds = [5,6,7,8,9,    41,42,43,44,   65,66,67,68,   77,78,79,80,   17,18,   29,30,   53,54,   89,90,   100,101, 111,112,113] });
    exams.add({ id = 6; title = "CFA Level I Mock Exam 7";  questionIds = [6,7,8,9,10,   42,43,44,45,   66,67,68,69,   78,79,80,81,   18,19,   30,31,   54,55,   90,91,   101,102, 112,113,114] });
    exams.add({ id = 7; title = "CFA Level I Mock Exam 8";  questionIds = [7,8,9,10,11,  43,44,45,46,   67,68,69,70,   79,80,81,82,   19,20,   31,32,   55,56,   91,92,   102,103, 113,114,115] });
    exams.add({ id = 8; title = "CFA Level I Mock Exam 9";  questionIds = [8,9,10,11,0,  44,45,46,47,   68,69,70,71,   80,81,82,83,   20,21,   32,33,   56,57,   92,93,   103,104, 114,115,116] });
    exams.add({ id = 9; title = "CFA Level I Mock Exam 10"; questionIds = [9,10,11,0,1,  45,46,47,36,   69,70,71,60,   81,82,83,72,   21,22,   33,34,   57,58,   93,94,   104,105, 115,116,117] });
  };
};
