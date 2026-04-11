import type { MockExam, Question, Topic } from "../types/cfa";

export const MOCK_TOPICS: Topic[] = [
  {
    id: "ethics",
    title: "Ethical & Professional Standards",
    description:
      "Standards of Practice, Global Investment Performance Standards (GIPS), and ethical responsibilities.",
    weight: "15-20%",
    questionCount: 120,
    level: "I",
    order: 1,
  },
  {
    id: "quant",
    title: "Quantitative Methods",
    description:
      "Time value of money, statistical concepts, probability theory, hypothesis testing.",
    weight: "8-12%",
    questionCount: 140,
    level: "I",
    order: 2,
  },
  {
    id: "econ",
    title: "Economics",
    description:
      "Microeconomics, macroeconomics, market structures, monetary and fiscal policy.",
    weight: "8-12%",
    questionCount: 130,
    level: "I",
    order: 3,
  },
  {
    id: "fsa",
    title: "Financial Statement Analysis",
    description:
      "Income statements, balance sheets, cash flows, and financial analysis techniques.",
    weight: "13-17%",
    questionCount: 155,
    level: "I",
    order: 4,
  },
  {
    id: "corp",
    title: "Corporate Issuers",
    description:
      "Capital structure, leverage, working capital management, dividends and share repurchases.",
    weight: "8-12%",
    questionCount: 110,
    level: "I",
    order: 5,
  },
  {
    id: "equity",
    title: "Equity Investments",
    description:
      "Market organization, security valuation, industry analysis, equity valuation models.",
    weight: "10-12%",
    questionCount: 145,
    level: "I",
    order: 6,
  },
  {
    id: "fi",
    title: "Fixed Income",
    description:
      "Bond features, yield measures, interest rate risk, credit analysis, structured products.",
    weight: "10-12%",
    questionCount: 150,
    level: "I",
    order: 7,
  },
  {
    id: "deriv",
    title: "Derivatives",
    description:
      "Options, futures, forwards, swaps — pricing and risk management strategies.",
    weight: "5-8%",
    questionCount: 95,
    level: "I",
    order: 8,
  },
  {
    id: "alts",
    title: "Alternative Investments",
    description:
      "Hedge funds, private equity, real assets, commodities, and infrastructure.",
    weight: "5-8%",
    questionCount: 85,
    level: "I",
    order: 9,
  },
  {
    id: "pm",
    title: "Portfolio Management",
    description:
      "Risk-return tradeoffs, modern portfolio theory, CAPM, behavioral finance.",
    weight: "5-8%",
    questionCount: 100,
    level: "I",
    order: 10,
  },
];

export const MOCK_QUESTIONS: Question[] = [
  // Ethics
  {
    id: "eth-1",
    topicId: "ethics",
    stem: "According to the CFA Institute Standards of Professional Conduct, a member who discovers a client has provided fraudulent information should:",
    optionA: "Immediately report the client to regulatory authorities.",
    optionB:
      "Dissociate from the activity and potentially resign from the engagement.",
    optionC:
      "Continue working with the client while documenting the fraud internally.",
    correctAnswer: "B",
    explanation:
      "Standard I(A) requires members to dissociate from any participation in illegal or unethical activity. If a client provides fraudulent data, the member should first attempt to stop the conduct, then dissociate and potentially resign.",
    difficulty: "medium",
  },
  {
    id: "eth-2",
    topicId: "ethics",
    stem: "A portfolio manager receives a research report from a broker and uses it to make investment decisions for clients. Under the CFA Standards, this practice is:",
    optionA: "Prohibited because it constitutes soft dollar abuse.",
    optionB: "Acceptable as long as the research directly benefits clients.",
    optionC: "Prohibited unless disclosed in the investment policy statement.",
    correctAnswer: "B",
    explanation:
      "Standard III(A) permits the use of client brokerage commissions to pay for research that directly benefits the client. The key test is that the research must benefit the client, not just the manager.",
    difficulty: "easy",
  },
  {
    id: "eth-3",
    topicId: "ethics",
    stem: "Under the CFA Institute Code of Ethics, members must act with:",
    optionA:
      "Competence, diligence, and respect only when serving institutional clients.",
    optionB:
      "Integrity, competence, diligence, and respect in all professional interactions.",
    optionC: "Loyalty to the employer above all other considerations.",
    correctAnswer: "B",
    explanation:
      "The CFA Code of Ethics requires acting with integrity, competence, diligence, and respect in all professional interactions — not just with institutional clients, and placing client interests above employer interests.",
    difficulty: "easy",
  },
  {
    id: "eth-4",
    topicId: "ethics",
    stem: "CFA Standard VI(B) prohibits priority trading in securities EXCEPT when:",
    optionA:
      "The member's personal trades have de minimis impact on market price.",
    optionB:
      "Employer policy explicitly permits personal trading before client trades.",
    optionC: "The securities involved are not in the client's portfolio.",
    correctAnswer: "A",
    explanation:
      "Standard VI(B) (Priority of Transactions) prohibits front-running client orders. An exception exists for de minimis trades with negligible market impact, as specified in employer compliance policies.",
    difficulty: "hard",
  },
  {
    id: "eth-5",
    topicId: "ethics",
    stem: "According to GIPS standards, a composite must include:",
    optionA:
      "All fee-paying discretionary portfolios managed according to similar strategies.",
    optionB:
      "Only the top-performing portfolios to ensure accurate benchmarking.",
    optionC: "All client accounts regardless of investment mandate.",
    correctAnswer: "A",
    explanation:
      "GIPS requires composites to include all actual, fee-paying, discretionary portfolios managed to a similar investment mandate, objective, or strategy. Cherry-picking is explicitly prohibited.",
    difficulty: "medium",
  },
  // Quantitative Methods
  {
    id: "quant-1",
    topicId: "quant",
    stem: "An investor deposits $10,000 today at 6% per year compounded monthly. What is the effective annual rate (EAR)?",
    optionA: "6.00%",
    optionB: "6.17%",
    optionC: "6.09%",
    correctAnswer: "B",
    explanation:
      "EAR = (1 + 0.06/12)^12 − 1 = (1.005)^12 − 1 ≈ 6.168%. The monthly compounding produces an effective annual rate greater than the nominal 6%.",
    difficulty: "medium",
  },
  {
    id: "quant-2",
    topicId: "quant",
    stem: "Which of the following statements about the normal distribution is MOST accurate?",
    optionA:
      "It is defined by its mean, median, and mode, which are all different.",
    optionB:
      "Approximately 95% of observations fall within two standard deviations of the mean.",
    optionC: "The distribution is positively skewed with a long right tail.",
    correctAnswer: "B",
    explanation:
      "For a normal distribution, approximately 68% of observations fall within 1 σ, 95% within 2 σ, and 99.7% within 3 σ of the mean. The mean, median, and mode are all equal, and the distribution is symmetric (zero skewness).",
    difficulty: "easy",
  },
  {
    id: "quant-3",
    topicId: "quant",
    stem: "A Type II error in hypothesis testing occurs when a test:",
    optionA: "Rejects the null hypothesis when it is actually true.",
    optionB: "Fails to reject the null hypothesis when it is actually false.",
    optionC: "Uses an incorrect significance level for the test statistic.",
    correctAnswer: "B",
    explanation:
      "A Type II error (β error) is failing to reject a false null hypothesis. A Type I error (α) is rejecting a true null hypothesis. The power of a test (1 − β) is the probability of correctly rejecting a false null.",
    difficulty: "medium",
  },
  {
    id: "quant-4",
    topicId: "quant",
    stem: "Given a portfolio with expected return of 12% and standard deviation of 15%, what is the coefficient of variation?",
    optionA: "0.80",
    optionB: "1.25",
    optionC: "0.20",
    correctAnswer: "B",
    explanation:
      "Coefficient of Variation (CV) = Standard Deviation / Expected Return = 15% / 12% = 1.25. CV measures risk per unit of return — lower is better for risk-adjusted performance.",
    difficulty: "easy",
  },
  {
    id: "quant-5",
    topicId: "quant",
    stem: "In regression analysis, heteroskedasticity refers to:",
    optionA: "Correlation between the residuals and independent variables.",
    optionB: "Non-constant variance of the regression residuals.",
    optionC: "High correlation between two or more independent variables.",
    correctAnswer: "B",
    explanation:
      "Heteroskedasticity occurs when the variance of the error term is not constant across observations. It does not bias coefficient estimates but makes standard errors and hypothesis tests unreliable. Serial correlation relates to correlated errors; multicollinearity relates to correlated predictors.",
    difficulty: "medium",
  },
  // Economics
  {
    id: "econ-1",
    topicId: "econ",
    stem: "In a perfectly competitive market, a firm's long-run equilibrium occurs where:",
    optionA: "Price equals average total cost and economic profit is zero.",
    optionB: "Price equals marginal cost but exceeds average total cost.",
    optionC:
      "The firm earns positive economic profit to justify staying in the market.",
    correctAnswer: "A",
    explanation:
      "In long-run equilibrium for perfect competition, free entry/exit drives economic profit to zero: P = MR = MC = ATC (at minimum ATC). Firms earn only normal profit (accounting profit covering opportunity cost).",
    difficulty: "medium",
  },
  {
    id: "econ-2",
    topicId: "econ",
    stem: "Quantitative easing by a central bank MOST likely results in:",
    optionA:
      "An increase in the money supply and downward pressure on long-term interest rates.",
    optionB:
      "A decrease in the money supply that reduces inflationary pressure.",
    optionC:
      "Higher short-term rates to counteract increased inflation expectations.",
    correctAnswer: "A",
    explanation:
      "QE involves a central bank purchasing long-term assets (e.g., government bonds) to inject money into the economy. This increases the money supply, pushes up asset prices, and puts downward pressure on long-term yields.",
    difficulty: "easy",
  },
  {
    id: "econ-3",
    topicId: "econ",
    stem: "The J-curve effect following a currency depreciation suggests that the current account balance will:",
    optionA: "Immediately improve as exports become cheaper.",
    optionB: "Initially worsen before eventually improving.",
    optionC: "Remain unchanged in the short run due to price stickiness.",
    correctAnswer: "B",
    explanation:
      "The J-curve describes the short-run deterioration followed by long-run improvement in the trade balance after depreciation. Initially, import costs rise faster than export volume adjusts (existing contracts), worsening the balance before it improves.",
    difficulty: "hard",
  },
  // Financial Statement Analysis
  {
    id: "fsa-1",
    topicId: "fsa",
    stem: "Under IFRS, which inventory cost flow assumption is NOT permitted?",
    optionA: "FIFO (First-In, First-Out)",
    optionB: "LIFO (Last-In, First-Out)",
    optionC: "Weighted average cost",
    correctAnswer: "B",
    explanation:
      "IFRS (IAS 2) prohibits the LIFO method. US GAAP permits LIFO. The key difference is important for analysts comparing companies across standards, as LIFO can significantly affect reported inventory values and COGS during inflationary periods.",
    difficulty: "easy",
  },
  {
    id: "fsa-2",
    topicId: "fsa",
    stem: "The DuPont decomposition of Return on Equity (ROE) breaks it down into:",
    optionA: "Net profit margin × Total asset turnover × Equity multiplier.",
    optionB: "Gross profit margin × Asset turnover × Current ratio.",
    optionC: "Operating margin × Interest burden × Tax burden × Leverage.",
    correctAnswer: "A",
    explanation:
      "The classic 3-factor DuPont formula: ROE = (Net Income/Sales) × (Sales/Total Assets) × (Total Assets/Equity) = Net Profit Margin × Asset Turnover × Equity Multiplier. The 5-factor extends this further.",
    difficulty: "medium",
  },
  {
    id: "fsa-3",
    topicId: "fsa",
    stem: "A company using the percentage-of-completion method for long-term contracts will recognize revenue:",
    optionA:
      "Only when the contract is fully completed and accepted by the customer.",
    optionB:
      "Proportionally over the contract period based on project completion milestones.",
    optionC: "At the start of the contract based on the total contract value.",
    correctAnswer: "B",
    explanation:
      "The percentage-of-completion method recognizes revenue and profit proportional to the work completed each period, matching revenue to effort. The completed contract method only recognizes at completion — this is now restricted under IFRS 15 and ASC 606.",
    difficulty: "medium",
  },
  // Corporate Issuers
  {
    id: "corp-1",
    topicId: "corp",
    stem: "According to the Modigliani-Miller theorem with no taxes, a firm's capital structure:",
    optionA: "Has no effect on its total market value.",
    optionB: "Optimally consists entirely of debt to minimize cost of capital.",
    optionC: "Should balance debt and equity to achieve the optimal WACC.",
    correctAnswer: "A",
    explanation:
      "Without taxes, MM Proposition I states capital structure is irrelevant — firm value depends only on its assets and earning power, not how those assets are financed. With taxes, the interest tax shield creates value from debt.",
    difficulty: "medium",
  },
  {
    id: "corp-2",
    topicId: "corp",
    stem: "A company repurchases its own shares. All else equal, this will MOST likely:",
    optionA: "Decrease EPS because fewer shares reduce total earnings.",
    optionB:
      "Increase EPS because the same earnings are spread over fewer shares.",
    optionC:
      "Have no effect on EPS because retained earnings offset the buyback.",
    correctAnswer: "B",
    explanation:
      "Share buybacks reduce the share count. If net income remains constant, fewer shares outstanding means higher EPS (Earnings Per Share = Net Income / Shares Outstanding). Buybacks are an alternative to dividends for returning capital.",
    difficulty: "easy",
  },
  // Equity Investments
  {
    id: "equity-1",
    topicId: "equity",
    stem: "Using the Gordon Growth Model, if a stock pays a dividend of $2.00, has a required return of 10%, and dividends grow at 4% perpetually, the stock's intrinsic value is:",
    optionA: "$33.33",
    optionB: "$50.00",
    optionC: "$20.00",
    correctAnswer: "A",
    explanation:
      "Gordon Growth Model: P = D₁ / (r − g) = D₀(1+g) / (r−g) = $2.00 × 1.04 / (0.10 − 0.04) = $2.08 / 0.06 = $34.67. Using D₁ = $2.00 directly: $2.00 / 0.06 = $33.33.",
    difficulty: "medium",
  },
  {
    id: "equity-2",
    topicId: "equity",
    stem: "A stock with a beta of 1.5 and a market risk premium of 6% has an expected return based on CAPM of (risk-free rate = 3%):",
    optionA: "9.0%",
    optionB: "12.0%",
    optionC: "10.5%",
    correctAnswer: "B",
    explanation:
      "CAPM: E(R) = Rf + β × (Rm − Rf) = 3% + 1.5 × 6% = 3% + 9% = 12%. The stock's expected return exceeds the market's expected return (9%) due to its higher systematic risk (β > 1).",
    difficulty: "easy",
  },
  // Fixed Income
  {
    id: "fi-1",
    topicId: "fi",
    stem: "When market interest rates increase, the price of a fixed-rate bond will:",
    optionA: "Increase, as higher rates make the bond more attractive.",
    optionB:
      "Decrease, reflecting the inverse relationship between price and yield.",
    optionC: "Remain unchanged until maturity.",
    correctAnswer: "B",
    explanation:
      "Bond prices and yields move inversely. When market rates rise, existing bonds with lower coupons become less attractive, so their prices fall to offer the competitive market yield. Duration measures the sensitivity of price to yield changes.",
    difficulty: "easy",
  },
  {
    id: "fi-2",
    topicId: "fi",
    stem: "A bond with a high convexity compared to a bond with low convexity:",
    optionA: "Will decrease more in price when yields rise.",
    optionB:
      "Benefits more from yield decreases and suffers less from yield increases.",
    optionC: "Has higher duration risk and lower credit quality.",
    correctAnswer: "B",
    explanation:
      "Convexity is a desirable property — higher convexity means the price-yield curve is more bowed. When yields fall, a high-convexity bond gains more; when yields rise, it loses less compared to a bond with identical duration but lower convexity.",
    difficulty: "hard",
  },
  // Derivatives
  {
    id: "deriv-1",
    topicId: "deriv",
    stem: "A call option is in-the-money when the:",
    optionA:
      "Option's exercise price is above the current market price of the underlying.",
    optionB:
      "Option's exercise price is below the current market price of the underlying.",
    optionC:
      "Option's exercise price equals the current market price of the underlying.",
    correctAnswer: "B",
    explanation:
      "A call option gives the right to BUY. It's in-the-money (ITM) when the market price exceeds the exercise price — meaning immediate exercise generates a profit. A put option is ITM when market price is BELOW exercise price.",
    difficulty: "easy",
  },
  {
    id: "deriv-2",
    topicId: "deriv",
    stem: "Put-call parity for European options states that:",
    optionA:
      "C − P = S₀ − PV(X), where S₀ is spot price and X is strike price.",
    optionB: "C + P = S₀ + PV(X), ensuring equal premiums for calls and puts.",
    optionC: "C = P when the option is at-the-money.",
    correctAnswer: "A",
    explanation:
      "Put-call parity: C − P = S₀ − PV(X). Equivalently: C + PV(X) = P + S₀ (protective put equals fiduciary call). This arbitrage relationship holds for European options with the same strike and expiration.",
    difficulty: "medium",
  },
  // Alternative Investments
  {
    id: "alts-1",
    topicId: "alts",
    stem: "Which of the following BEST describes a hedge fund's incentive fee structure?",
    optionA: "A flat annual management fee of 2% regardless of performance.",
    optionB:
      "A performance fee (e.g., 20% of profits) often subject to a high-water mark.",
    optionC:
      "A fee based solely on assets under management with no performance component.",
    correctAnswer: "B",
    explanation:
      "The typical '2 and 20' hedge fund fee structure charges 2% management fee on AUM and 20% of profits above the high-water mark (highest previous NAV). The high-water mark prevents collecting performance fees on recovering losses.",
    difficulty: "easy",
  },
  {
    id: "alts-2",
    topicId: "alts",
    stem: "Private equity investments typically exhibit the 'J-curve effect' because:",
    optionA:
      "Returns start high due to leverage and decline as the portfolio matures.",
    optionB:
      "Early capital calls and fees create negative returns before portfolio companies appreciate.",
    optionC: "The IRR calculation favors early distributions over later gains.",
    correctAnswer: "B",
    explanation:
      "PE J-curve: In early years, capital is called for investments and management fees are paid with no distributions, creating negative returns. As portfolio companies mature and are exited, returns become positive and typically accelerate in later years.",
    difficulty: "medium",
  },
  // Portfolio Management
  {
    id: "pm-1",
    topicId: "pm",
    stem: "The Capital Market Line (CML) differs from the Security Market Line (SML) in that the CML:",
    optionA:
      "Plots expected return against beta, while SML plots against standard deviation.",
    optionB:
      "Plots expected return against total risk (σ), while SML plots against systematic risk (β).",
    optionC:
      "Applies to individual securities, while SML applies to portfolios.",
    correctAnswer: "B",
    explanation:
      "CML: plots expected return vs. total risk (std deviation) — applies only to efficient portfolios on the efficient frontier. SML: plots expected return vs. beta (systematic risk) — applies to all individual securities and portfolios under CAPM.",
    difficulty: "medium",
  },
  {
    id: "pm-2",
    topicId: "pm",
    stem: "The Sharpe ratio measures:",
    optionA: "Excess return per unit of systematic (market) risk.",
    optionB: "Excess return per unit of total risk (standard deviation).",
    optionC:
      "Portfolio return relative to a benchmark, adjusted for tracking error.",
    correctAnswer: "B",
    explanation:
      "Sharpe Ratio = (Rp − Rf) / σp. It measures excess return (above risk-free rate) per unit of total risk. Treynor ratio uses beta (systematic risk). Information ratio uses active return / tracking error.",
    difficulty: "easy",
  },
];

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "mock-1",
    title: "CFA Level I Mock Exam 1",
    description:
      "Full-length mock covering all 10 topic areas. AM Session — 90 questions.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "mock-2",
    title: "CFA Level I Mock Exam 2",
    description:
      "Emphasis on Quantitative Methods, FSA, and Fixed Income. AM Session.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "mock-3",
    title: "CFA Level I Mock Exam 3",
    description:
      "Focus on Equity Investments, Derivatives, and Portfolio Management.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-02-01T00:00:00Z",
  },
  {
    id: "mock-4",
    title: "CFA Level I Mock Exam 4",
    description:
      "Comprehensive ethics-heavy session. High difficulty, timed under exam conditions.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-02-15T00:00:00Z",
  },
  {
    id: "mock-5",
    title: "CFA Level I Mock Exam 5",
    description:
      "Balanced across all topics. Mirrors the actual CFA Institute exam format.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-03-01T00:00:00Z",
  },
  {
    id: "mock-6",
    title: "CFA Level I Mock Exam 6",
    description:
      "Economics and Corporate Finance deep dive with alternative investments.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-03-15T00:00:00Z",
  },
  {
    id: "mock-7",
    title: "CFA Level I Mock Exam 7",
    description:
      "Speed-focused session. 20 questions in 45 minutes. Builds exam stamina.",
    questionCount: 20,
    durationMinutes: 45,
    level: "I",
    createdAt: "2024-04-01T00:00:00Z",
  },
  {
    id: "mock-8",
    title: "CFA Level I Mock Exam 8",
    description: "Quantitative Methods and Fixed Income mastery assessment.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-04-15T00:00:00Z",
  },
  {
    id: "mock-9",
    title: "CFA Level I Mock Exam 9",
    description: "GIPS, Standards of Practice, and Ethics case studies.",
    questionCount: 20,
    durationMinutes: 60,
    level: "I",
    createdAt: "2024-05-01T00:00:00Z",
  },
  {
    id: "mock-10",
    title: "CFA Level I Mock Exam 10",
    description:
      "Final preparation exam. Mirrors June exam difficulty and time pressure.",
    questionCount: 20,
    durationMinutes: 135,
    level: "I",
    createdAt: "2024-05-15T00:00:00Z",
  },
];
