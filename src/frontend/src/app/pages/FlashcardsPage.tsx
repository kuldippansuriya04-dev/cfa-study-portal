import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, RotateCcw, Check, X } from "lucide-react";
import type { PageId } from "@/app/types/navigation";

interface FlashcardsPageProps {
  onNavigate: (page: PageId) => void;
}

const FLASHCARD_DATA = {
  Ethics: [
    { front: "What is the CFA Institute Code of Ethics?", back: "A set of principles requiring members to act with integrity, competence, diligence, and respect, placing client interests above personal interests." },
    { front: "Standard I - Professionalism", back: "Members must maintain knowledge of and comply with all applicable laws, rules, and regulations. Must not knowingly participate in any violation." },
    { front: "Standard II - Integrity of Capital Markets", back: "Prohibits acting on material nonpublic information (insider trading) and market manipulation." },
    { front: "Standard III - Duties to Clients", back: "Requires loyalty, prudence, care, fair dealing, suitability, performance presentation, and confidentiality." },
    { front: "What is 'Material Nonpublic Information'?", back: "Information that would affect an investor's decision to buy/sell a security AND has not been released to the public." },
    { front: "Mosaic Theory", back: "Analysts can use public information + non-material nonpublic information to form investment conclusions. This is NOT a violation." },
  ],
  Quantitative: [
    { front: "What is the Time Value of Money?", back: "A dollar today is worth more than a dollar in the future due to its potential earning capacity." },
    { front: "Future Value Formula", back: "FV = PV × (1 + r)^n\nWhere: PV = Present Value, r = interest rate, n = number of periods" },
    { front: "Present Value Formula", back: "PV = FV / (1 + r)^n\nDiscount future cash flows back to today." },
    { front: "Normal Distribution Properties", back: "Mean = Median = Mode. Symmetric. 68% within 1σ, 95% within 2σ, 99.7% within 3σ." },
    { front: "What is Hypothesis Testing?", back: "A statistical procedure to test whether a claim about a population parameter is supported by sample evidence." },
    { front: "Type I vs Type II Error", back: "Type I: Rejecting a true null hypothesis (false positive). Type II: Failing to reject a false null hypothesis (false negative)." },
  ],
  Economics: [
    { front: "GDP Definition", back: "Gross Domestic Product: Total market value of all final goods and services produced within a country in a specific time period." },
    { front: "GDP = ?", back: "GDP = C + I + G + (X - M)\nC=Consumption, I=Investment, G=Government, X=Exports, M=Imports" },
    { front: "What is Inflation?", back: "A sustained increase in the general price level of goods and services, measured by CPI or GDP deflator." },
    { front: "Phillips Curve", back: "Inverse relationship between inflation and unemployment in the short run. Higher inflation = Lower unemployment." },
    { front: "Fiscal Policy", back: "Government use of taxation and spending to influence the economy. Expansionary = increase spending/cut taxes." },
    { front: "Monetary Policy", back: "Central bank actions to control money supply and interest rates. Expansionary = lower rates, increase money supply." },
  ],
  "FSA/FRA": [
    { front: "Income Statement Purpose", back: "Shows revenues, expenses, and profits over a period. Measures company performance." },
    { front: "Balance Sheet Equation", back: "Assets = Liabilities + Shareholders' Equity\nShows financial position at a point in time." },
    { front: "Cash Flow Statement Sections", back: "1. Operating Activities (CFO)\n2. Investing Activities (CFI)\n3. Financing Activities (CFF)" },
    { front: "LIFO vs FIFO (Inflation)", back: "LIFO: Higher COGS, Lower profit, Lower taxes, Lower inventory value.\nFIFO: Lower COGS, Higher profit, Higher taxes, Higher inventory value." },
    { front: "DuPont Analysis", back: "ROE = Net Profit Margin × Asset Turnover × Financial Leverage\nBreaks down return on equity into components." },
    { front: "What is Revenue Recognition?", back: "Revenue is recognized when performance obligation is satisfied (IFRS 15 / ASC 606), not necessarily when cash is received." },
  ],
  "Corporate Finance": [
    { front: "WACC Formula", back: "WACC = (E/V)×Re + (D/V)×Rd×(1-T)\nWeighted average of equity and after-tax debt costs." },
    { front: "NPV Rule", back: "Accept project if NPV > 0. NPV = Sum of discounted cash flows - Initial investment." },
    { front: "IRR Definition", back: "Internal Rate of Return: Discount rate that makes NPV = 0. Accept if IRR > required rate of return." },
    { front: "Capital Structure", back: "Mix of debt and equity used to finance assets. Optimal structure minimizes WACC and maximizes firm value." },
    { front: "Modigliani-Miller Theorem", back: "Without taxes/frictions, capital structure is irrelevant. With taxes, debt has tax shield advantage." },
    { front: "Dividend Policy", back: "Decision on how much profit to return to shareholders vs reinvest. Irrelevant in perfect markets (MM)." },
  ],
  Equity: [
    { front: "DDM - Dividend Discount Model", back: "P = D1 / (r - g)\nWhere D1 = next dividend, r = required return, g = growth rate. For stable dividend stocks." },
    { front: "P/E Ratio", back: "Price-to-Earnings = Market Price / EPS. Higher P/E = higher growth expectations or overvaluation." },
    { front: "EV/EBITDA", back: "Enterprise Value / EBITDA. Capital structure neutral valuation multiple. Lower = potentially undervalued." },
    { front: "DCF Valuation", back: "Intrinsic value = Sum of PV of future free cash flows. Most theoretically sound valuation method." },
    { front: "Efficient Market Hypothesis", back: "Weak: Past prices. Semi-strong: All public info. Strong: All info (including private) reflected in prices." },
    { front: "Beta Definition", back: "Measure of systematic risk. β>1: more volatile than market. β<1: less volatile. β=1: moves with market." },
  ],
  "Fixed Income": [
    { front: "Bond Price & Yield Relationship", back: "Inverse: When yield rises, price falls. When yield falls, price rises." },
    { front: "Duration Definition", back: "Measures bond price sensitivity to interest rate changes. Higher duration = more interest rate risk." },
    { front: "Modified Duration", back: "% change in bond price ≈ -Modified Duration × Δyield\nUsed to estimate price impact of rate changes." },
    { front: "Yield Curve", back: "Graph of yields vs maturities. Normal (upward sloping), Inverted (downward), Flat. Inverted often predicts recession." },
    { front: "YTM Definition", back: "Yield to Maturity: Total return if bond held to maturity. Assumes coupons reinvested at same rate." },
    { front: "Convexity", back: "Second-order measure of bond price sensitivity. Positive convexity = price rises more than it falls for equal rate changes." },
  ],
  Derivatives: [
    { front: "Call Option", back: "Right (not obligation) to BUY an asset at strike price before expiration. Profitable when price rises above strike." },
    { front: "Put Option", back: "Right (not obligation) to SELL an asset at strike price before expiration. Profitable when price falls below strike." },
    { front: "Put-Call Parity", back: "C + PV(X) = P + S\nLinks call price, put price, stock price, and present value of strike price." },
    { front: "Forward Contract", back: "Agreement to buy/sell asset at predetermined price on future date. Both parties obligated. OTC traded." },
    { front: "Futures vs Forwards", back: "Futures: Exchange traded, standardized, daily settlement (mark-to-market). Forwards: OTC, customized, settled at maturity." },
    { front: "Options Greeks - Delta", back: "Rate of change of option price with respect to underlying price. Call delta: 0 to 1. Put delta: -1 to 0." },
  ],
  Alternatives: [
    { front: "Hedge Fund Strategies", back: "Long/Short Equity, Global Macro, Event-Driven, Relative Value, Managed Futures. High fees: 2% management + 20% performance." },
    { front: "Private Equity", back: "Investment in private companies. Types: Venture Capital (early stage), Buyout (mature companies), Mezzanine financing." },
    { front: "Real Estate Investment", back: "Direct ownership or REITs. Income from rent + capital appreciation. Hedge against inflation." },
    { front: "Commodities", back: "Physical goods: Gold, Oil, Agricultural. Hedge against inflation. Returns from spot price + roll yield + collateral." },
    { front: "Infrastructure Investing", back: "Long-term assets: Roads, airports, utilities. Stable cash flows, inflation-linked, low correlation with stocks." },
    { front: "REIT Definition", back: "Real Estate Investment Trust: Company owning income-producing real estate. Must distribute 90%+ of taxable income." },
  ],
  "Portfolio Mgmt": [
    { front: "Modern Portfolio Theory", back: "Markowitz (1952): Diversification reduces risk. Optimal portfolio maximizes return for given risk level." },
    { front: "Efficient Frontier", back: "Set of portfolios offering maximum return for each level of risk. Rational investors choose portfolios on the frontier." },
    { front: "CAPM Formula", back: "E(Ri) = Rf + βi × [E(Rm) - Rf]\nExpected return = Risk-free rate + Beta × Market risk premium." },
    { front: "Sharpe Ratio", back: "Sharpe = (Portfolio Return - Risk-free Rate) / Portfolio Std Dev. Measures excess return per unit of total risk." },
    { front: "Systematic vs Unsystematic Risk", back: "Systematic (market) risk: Cannot be diversified. Unsystematic (specific) risk: Can be eliminated through diversification." },
    { front: "Investment Policy Statement (IPS)", back: "Document defining investor's objectives, constraints, risk tolerance, time horizon, and investment guidelines." },
  ],
};

const TOPICS = Object.keys(FLASHCARD_DATA) as (keyof typeof FLASHCARD_DATA)[];

export function FlashcardsPage({ onNavigate }: FlashcardsPageProps) {
  const [selectedTopic, setSelectedTopic] = useState<keyof typeof FLASHCARD_DATA>("Ethics");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);

  const cards = FLASHCARD_DATA[selectedTopic];
  const currentCard = cards[currentIndex];
  const progress = ((known.length + unknown.length) / cards.length) * 100;

  const handleTopicChange = (topic: keyof typeof FLASHCARD_DATA) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown([]);
    setUnknown([]);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((i) => Math.min(i + 1, cards.length - 1)), 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentIndex((i) => Math.max(i - 1, 0)), 150);
  };

  const handleKnow = () => {
    if (!known.includes(currentIndex)) setKnown([...known, currentIndex]);
    setUnknown(unknown.filter((i) => i !== currentIndex));
    handleNext();
  };

  const handleDontKnow = () => {
    if (!unknown.includes(currentIndex)) setUnknown([...unknown, currentIndex]);
    setKnown(known.filter((i) => i !== currentIndex));
    handleNext();
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnown([]);
    setUnknown([]);
  };

  const isDone = currentIndex === cards.length - 1 && (known.includes(currentIndex) || unknown.includes(currentIndex));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Flashcard Study Tool</h1>
        <p className="text-muted-foreground text-sm">Click card to flip • Mark known/unknown to track progress</p>
      </div>

      {/* Topic Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TOPICS.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTopicChange(topic)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedTopic === topic
                ? "bg-blue-600 text-white"
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-muted-foreground mb-1">
          <span>Card {currentIndex + 1} of {cards.length}</span>
          <span className="flex gap-3">
            <span className="text-green-600">✓ {known.length} known</span>
            <span className="text-red-500">✗ {unknown.length} to review</span>
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div
        className="cursor-pointer mb-4"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
      >
        <div
          style={{
            transition: "transform 0.4s",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            position: "relative",
            height: "240px",
          }}
        >
          {/* Front */}
          <Card
            className="absolute inset-0 flex items-center justify-center border-2 border-blue-200 shadow-md"
            style={{ backfaceVisibility: "hidden" }}
          >
            <CardContent className="p-8 text-center">
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-3">{selectedTopic}</div>
              <p className="text-lg font-semibold">{currentCard.front}</p>
              <p className="text-xs text-muted-foreground mt-4">Click to reveal answer</p>
            </CardContent>
          </Card>

          {/* Back */}
          <Card
            className="absolute inset-0 flex items-center justify-center border-2 border-green-200 shadow-md bg-green-50"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <CardContent className="p-8 text-center">
              <div className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-3">Answer</div>
              <p className="text-base whitespace-pre-line">{currentCard.back}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center mb-4">
        <Button variant="outline" size="sm" onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeft size={16} />
        </Button>
        <Button
          size="sm"
          className="bg-red-500 hover:bg-red-600 text-white gap-1"
          onClick={handleDontKnow}
          disabled={!isFlipped}
        >
          <X size={14} /> Don't Know
        </Button>
        <Button
          size="sm"
          className="bg-green-600 hover:bg-green-700 text-white gap-1"
          onClick={handleKnow}
          disabled={!isFlipped}
        >
          <Check size={14} /> Know It
        </Button>
        <Button variant="outline" size="sm" onClick={handleNext} disabled={currentIndex === cards.length - 1}>
          <ChevronRight size={16} />
        </Button>
      </div>

      {/* Reset & Done */}
      <div className="flex justify-center gap-3">
        <Button variant="ghost" size="sm" onClick={handleReset} className="gap-1 text-muted-foreground">
          <RotateCcw size={14} /> Reset
        </Button>
        {isDone && (
          <div className="text-sm text-green-600 font-medium flex items-center gap-1">
            🎉 Topic Complete! {known.length}/{cards.length} known
          </div>
        )}
      </div>
    </div>
  );
}
