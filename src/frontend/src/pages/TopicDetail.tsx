import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { ScoreRing } from "../components/ScoreRing";
import { useMyTopicStats, useQuestions, useTopic } from "../hooks/useBackend";

// ─── Static enrichment data per topic ─────────────────────────────────────────

interface TopicContent {
  objectives: string[];
  keyConcepts: { term: string; definition: string }[];
  studyTip: string;
}

const TOPIC_CONTENT: Record<string, TopicContent> = {
  ethics: {
    objectives: [
      "Understand the CFA Institute Code of Ethics and Standards of Professional Conduct",
      "Apply the Standards to real-world scenarios and case studies",
      "Explain Global Investment Performance Standards (GIPS) requirements",
      "Identify duties to clients, employers, and the profession",
      "Recognize and resolve conflicts of interest",
    ],
    keyConcepts: [
      {
        term: "Standard I(A) — Knowledge of the Law",
        definition:
          "Members must comply with the most strict applicable law. When in doubt, err on the side of the stricter regulation.",
      },
      {
        term: "Standard VI(B) — Priority of Transactions",
        definition:
          "Client and employer transactions must take precedence over member personal trades. Front-running is prohibited.",
      },
      {
        term: "GIPS Composites",
        definition:
          "Must include all actual, fee-paying, discretionary portfolios managed to a similar mandate. Cherry-picking is prohibited.",
      },
    ],
    studyTip:
      "Ethics carries 15-20% weight but is also qualitative — read CFA Institute's Standards of Practice Handbook carefully. Focus on the spirit of the rules, not just the letter.",
  },
  quant: {
    objectives: [
      "Calculate time value of money: PV, FV, annuities, and perpetuities",
      "Describe statistical measures: mean, variance, skewness, kurtosis",
      "Apply probability theory and Bayes' theorem",
      "Understand hypothesis testing, Type I/II errors, and p-values",
      "Interpret regression outputs and identify violations (heteroskedasticity, serial correlation)",
    ],
    keyConcepts: [
      {
        term: "Effective Annual Rate (EAR)",
        definition:
          "EAR = (1 + periodic rate)^m − 1. Always higher than the stated (nominal) rate when m > 1.",
      },
      {
        term: "Coefficient of Variation (CV)",
        definition:
          "CV = σ / μ. Measures risk per unit of return — lower is better for risk-adjusted comparison.",
      },
      {
        term: "Central Limit Theorem",
        definition:
          "For samples ≥ 30, the sample mean distribution approximates normal regardless of the population distribution.",
      },
    ],
    studyTip:
      "Use your financial calculator for TVM problems. Memorize the normal distribution rules: 68/95/99.7% within 1/2/3 standard deviations.",
  },
  econ: {
    objectives: [
      "Distinguish perfect competition, monopolistic competition, oligopoly, and monopoly",
      "Explain GDP, inflation, and business cycle phases",
      "Describe monetary and fiscal policy tools and their economic effects",
      "Analyze exchange rate determination and international trade effects",
      "Apply aggregate demand and supply framework",
    ],
    keyConcepts: [
      {
        term: "J-Curve Effect",
        definition:
          "After currency depreciation, the trade balance worsens initially (existing contracts repriced) before improving as export/import volumes adjust.",
      },
      {
        term: "Quantitative Easing (QE)",
        definition:
          "Central bank purchases long-term assets to inject money, increasing money supply and pushing down long-term yields.",
      },
      {
        term: "Long-Run Aggregate Supply (LRAS)",
        definition:
          "Vertical at potential GDP. Fiscal/monetary stimulus shifts AD but not LRAS — only supply-side reforms raise potential output.",
      },
    ],
    studyTip:
      "Draw supply/demand diagrams for every scenario. Economics questions often test understanding of second-order effects — ask 'what happens next?'",
  },
  fsa: {
    objectives: [
      "Analyze income statements, balance sheets, and cash flow statements",
      "Compare IFRS and US GAAP for key areas (inventory, leases, impairment)",
      "Calculate and interpret financial ratios (liquidity, solvency, profitability, efficiency)",
      "Apply the DuPont decomposition to analyze ROE",
      "Evaluate earnings quality and identify common red flags",
    ],
    keyConcepts: [
      {
        term: "DuPont Formula (3-factor)",
        definition:
          "ROE = Net Profit Margin × Asset Turnover × Equity Multiplier. Decomposes return into profitability, efficiency, and leverage.",
      },
      {
        term: "IFRS vs. GAAP — LIFO",
        definition:
          "LIFO is prohibited under IFRS (IAS 2). US GAAP allows it. During inflation, LIFO produces higher COGS and lower inventory values.",
      },
      {
        term: "Operating Cash Flow Adjustments",
        definition:
          "Under indirect method: start with net income, add back non-cash charges (D&A), adjust for working capital changes.",
      },
    ],
    studyTip:
      "FSA is the largest topic by weight. Master ratio analysis and the DuPont framework. Always check whether a question assumes IFRS or US GAAP.",
  },
  corp: {
    objectives: [
      "Explain capital structure theory including Modigliani-Miller propositions",
      "Analyze capital budgeting decisions: NPV, IRR, payback period",
      "Describe working capital management and liquidity",
      "Evaluate dividend policy and share repurchase effects on EPS and book value",
      "Understand agency conflicts between shareholders and management",
    ],
    keyConcepts: [
      {
        term: "MM Proposition I (no taxes)",
        definition:
          "Firm value is independent of capital structure. V(levered) = V(unlevered). With taxes, interest tax shield creates value from debt.",
      },
      {
        term: "Net Present Value (NPV)",
        definition:
          "Sum of discounted cash flows minus initial investment. Accept if NPV > 0. Superior to IRR when projects are mutually exclusive.",
      },
      {
        term: "Share Repurchase vs. Dividend",
        definition:
          "Buybacks reduce share count → higher EPS. In a perfect market, they are equivalent to cash dividends in terms of shareholder wealth.",
      },
    ],
    studyTip:
      "Focus on capital budgeting rules (NPV vs. IRR conflicts) and the tax effects on MM theory. Share repurchase questions are frequently tested.",
  },
  equity: {
    objectives: [
      "Describe market efficiency concepts and market anomalies",
      "Apply absolute valuation: DDM (Gordon Growth), FCFE, residual income",
      "Use relative valuation multiples: P/E, P/B, P/S, EV/EBITDA",
      "Conduct industry analysis using Porter's Five Forces",
      "Calculate CAPM expected returns and identify mispriced securities",
    ],
    keyConcepts: [
      {
        term: "Gordon Growth Model",
        definition:
          "P₀ = D₁ / (r − g). Requires r > g. D₁ = D₀ × (1+g). Used for stable-growth dividend-paying firms.",
      },
      {
        term: "CAPM",
        definition:
          "E(R) = Rf + β × (Rm − Rf). Beta measures systematic risk only. Securities above the SML are undervalued; below are overvalued.",
      },
      {
        term: "P/E Justified by Fundamentals",
        definition:
          "P/E = (1 − b) / (r − g), where b = retention ratio. Higher growth or lower risk → higher justified P/E.",
      },
    ],
    studyTip:
      "Practice valuation calculations — DDM and CAPM are always tested. Know when each valuation approach is appropriate and its limitations.",
  },
  fi: {
    objectives: [
      "Identify bond features: coupon, maturity, embedded options, seniority",
      "Calculate yield measures: current yield, YTM, YTC, spread metrics",
      "Measure interest rate risk: duration, modified duration, convexity",
      "Analyze the term structure and yield curve theories",
      "Evaluate credit risk and credit ratings",
    ],
    keyConcepts: [
      {
        term: "Price-Yield Inverse Relationship",
        definition:
          "Bond prices fall when yields rise, and vice versa. The magnitude depends on duration — longer duration = greater price sensitivity.",
      },
      {
        term: "Macaulay Duration",
        definition:
          "Weighted average time to receive cash flows. Modified Duration = Macaulay Duration / (1 + YTM/m). ΔP/P ≈ −D* × Δy.",
      },
      {
        term: "Convexity Advantage",
        definition:
          "Higher convexity bonds gain more when yields fall and lose less when yields rise vs. a bond with same duration but lower convexity.",
      },
    ],
    studyTip:
      "Duration and convexity calculations are mandatory. Understand how embedded options (callable, putable) affect duration and price behavior.",
  },
  deriv: {
    objectives: [
      "Describe forward, futures, options, and swap contract mechanics",
      "Apply put-call parity and no-arbitrage pricing",
      "Calculate profit/loss for basic option strategies",
      "Explain risk management applications of derivatives",
      "Identify differences between exchange-traded and OTC derivatives",
    ],
    keyConcepts: [
      {
        term: "Put-Call Parity",
        definition:
          "C + PV(X) = P + S₀. Equivalently: C − P = S₀ − PV(X). Violation creates arbitrage. Applies to European options only.",
      },
      {
        term: "Option Moneyness",
        definition:
          "Call ITM: S > X. Put ITM: S < X. ATM: S ≈ X. Intrinsic value = max(0, S−X) for calls; max(0, X−S) for puts.",
      },
      {
        term: "Forward Price Formula",
        definition:
          "F₀ = S₀ × (1 + Rf)^T. For assets with cash flows: subtract PV of benefits, add PV of costs.",
      },
    ],
    studyTip:
      "Draw payoff diagrams for every option strategy — they appear frequently. Understand why put-call parity holds and what arbitrage it implies.",
  },
  alts: {
    objectives: [
      "Describe characteristics of hedge funds, private equity, real estate, commodities",
      "Explain private equity fund structure, J-curve, and IRR calculation",
      "Analyze hedge fund strategies: long/short, global macro, event-driven",
      "Identify due diligence considerations for alternative investments",
      "Calculate REIT valuation using FFO and NAV",
    ],
    keyConcepts: [
      {
        term: "Hedge Fund '2 and 20' Structure",
        definition:
          "2% annual management fee on AUM + 20% incentive fee on profits above the high-water mark. High-water mark prevents double-charging.",
      },
      {
        term: "Private Equity J-Curve",
        definition:
          "Early negative returns (capital calls + fees) followed by positive returns as portfolio companies are exited. IRR is back-loaded.",
      },
      {
        term: "REIT — Funds From Operations (FFO)",
        definition:
          "FFO = Net Income + Depreciation − Gains on property sales. Better measure than net income for REIT valuation.",
      },
    ],
    studyTip:
      "Focus on fee structures, J-curve dynamics, and the characteristics that distinguish each alternative asset class. Correlation benefits are frequently tested.",
  },
  pm: {
    objectives: [
      "Apply mean-variance optimization and the efficient frontier",
      "Explain CAPM, the SML, and systematic vs. unsystematic risk",
      "Distinguish CML (total risk) from SML (systematic risk)",
      "Calculate portfolio risk/return using correlation and covariance",
      "Apply risk-adjusted performance measures: Sharpe, Treynor, Jensen's alpha",
    ],
    keyConcepts: [
      {
        term: "Systematic vs. Unsystematic Risk",
        definition:
          "Systematic (market) risk cannot be diversified away — measured by beta. Unsystematic (firm-specific) risk is diversifiable — not priced by CAPM.",
      },
      {
        term: "Sharpe vs. Treynor Ratio",
        definition:
          "Sharpe = (Rp − Rf) / σp (total risk). Treynor = (Rp − Rf) / βp (systematic risk). Use Sharpe for full-portfolio; Treynor for component in diversified portfolio.",
      },
      {
        term: "Capital Market Line (CML)",
        definition:
          "Expected return vs. total risk (σ). Only applies to efficient portfolios. Slope = Sharpe ratio of market portfolio.",
      },
    ],
    studyTip:
      "Master the distinction between CML and SML — it's a common trick question. Know all three performance ratios and when to use each.",
  },
};

const DIFFICULTY_MAP: Record<string, { label: string; cls: string }> = {
  easy: {
    label: "Easy",
    cls: "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]",
  },
  medium: { label: "Medium", cls: "bg-accent/10 text-accent" },
  hard: { label: "Hard", cls: "bg-destructive/10 text-destructive" },
};

// ─── Page Component ────────────────────────────────────────────────────────────

export default function TopicDetail() {
  const { topicId } = useParams({ from: "/topics/$topicId" });
  const { data: topic, isLoading } = useTopic(topicId);
  const { data: questions } = useQuestions(topicId);
  const { data: topicStats } = useMyTopicStats();
  const stats = topicStats?.find((s) => s.topicId === topicId);
  const content = TOPIC_CONTENT[topicId];

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-36 w-full rounded-xl" />
        <div className="grid grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 rounded-lg" />
          ))}
        </div>
        <Skeleton className="h-48 w-full rounded-xl" />
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="font-display text-lg font-semibold text-foreground mb-2">
          Topic not found
        </p>
        <Link to="/topics">
          <Button className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
            Back to Topics
          </Button>
        </Link>
      </div>
    );
  }

  const accuracy = stats?.accuracy ?? 0;
  const answered = stats?.answeredCount ?? 0;
  const correct = stats?.correctCount ?? 0;
  const progressPct = Math.min((answered / topic.questionCount) * 100, 100);

  // Difficulty breakdown of questions
  const difficultyBreakdown = (questions ?? []).reduce(
    (acc, q) => {
      acc[q.difficulty] = (acc[q.difficulty] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Page header band */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <Link
            to="/topics"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4 w-fit"
            data-ocid="back-to-topics"
          >
            <ArrowLeft className="w-4 h-4" />
            All Topics
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h1 className="font-display text-2xl font-bold text-foreground leading-tight">
                    {topic.title}
                  </h1>
                  <span className="badge-weight">{topic.weight}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                  {topic.description}
                </p>
              </div>
            </div>
            <ScoreRing score={accuracy} size="lg" label="Accuracy" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: "Available Qs",
              value: topic.questionCount,
              icon: BookOpen,
            },
            { label: "Answered", value: answered, icon: Target },
            { label: "Correct", value: correct, icon: CheckCircle2 },
            {
              label: "Accuracy",
              value: accuracy > 0 ? `${accuracy}%` : "—",
              icon: TrendingUp,
            },
          ].map(({ label, value, icon: Icon }) => (
            <Card
              key={label}
              className="shadow-card border border-border bg-card p-4 text-center"
            >
              <Icon className="w-4 h-4 text-muted-foreground mx-auto mb-1.5" />
              <div className="font-display text-xl font-bold text-foreground">
                {value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {label}
              </div>
            </Card>
          ))}
        </div>

        {/* Progress + CTA card */}
        <Card className="shadow-card border border-border bg-card p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-muted-foreground font-medium">
                  {answered} of {topic.questionCount} questions answered (
                  {Math.round(progressPct)}%)
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* Difficulty badges */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            {(["easy", "medium", "hard"] as const).map((d) => (
              <Badge
                key={d}
                className={cn(
                  "text-[10px] border-0 font-medium",
                  DIFFICULTY_MAP[d].cls,
                )}
              >
                {difficultyBreakdown[d] ?? 0} {DIFFICULTY_MAP[d].label}
              </Badge>
            ))}
          </div>

          <Link to="/topics/$topicId/practice" params={{ topicId: topic.id }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full sm:w-auto"
              data-ocid="start-practice-btn"
            >
              <Target className="w-4 h-4 mr-2" />
              {answered > 0
                ? "Continue Practice Session"
                : "Start Practice Session"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </Card>

        {/* Learning Objectives */}
        {content && (
          <Card className="shadow-card border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <h2 className="font-display text-base font-bold text-foreground">
                Learning Objectives
              </h2>
            </div>
            <ul className="space-y-2.5" data-ocid="learning-objectives">
              {content.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground leading-relaxed">
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Key Concepts */}
        {content && (
          <Card className="shadow-card border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-accent" />
              <h2 className="font-display text-base font-bold text-foreground">
                Key Concepts
              </h2>
            </div>
            <div className="space-y-4" data-ocid="key-concepts">
              {content.keyConcepts.map((kc) => (
                <div
                  key={kc.term}
                  className="border-l-2 border-primary/30 pl-4 py-0.5"
                >
                  <p className="text-sm font-semibold text-foreground mb-1">
                    {kc.term}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {kc.definition}
                  </p>
                </div>
              ))}
            </div>

            {/* Study tip */}
            <div className="mt-5 bg-accent/8 border border-accent/20 rounded-lg p-4">
              <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                Study Tip
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                {content.studyTip}
              </p>
            </div>
          </Card>
        )}

        {/* Question Preview */}
        <Card className="shadow-card border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-base font-bold text-foreground">
              Practice Questions Preview
            </h2>
            <Badge
              variant="outline"
              className="text-xs border-border font-normal"
            >
              {questions?.length ?? 0} available
            </Badge>
          </div>
          <div className="space-y-2.5">
            {(questions ?? []).slice(0, 3).map((q, i) => (
              <div
                key={q.id}
                className="flex items-start gap-3 py-2.5 border-b border-border last:border-0"
              >
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground line-clamp-2 leading-relaxed">
                    {q.stem}
                  </p>
                  <Badge
                    className={cn(
                      "text-[10px] border-0 mt-1.5 font-medium",
                      DIFFICULTY_MAP[q.difficulty].cls,
                    )}
                  >
                    {DIFFICULTY_MAP[q.difficulty].label}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/topics/$topicId/practice"
            params={{ topicId: topic.id }}
            className="block mt-4"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              data-ocid="view-all-questions-btn"
            >
              Start practice — all {questions?.length} questions
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
