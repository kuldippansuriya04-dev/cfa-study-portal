import type { Question } from "../types/cfa";

export const MOCK_1_SESSION_1_QUESTION_OVERRIDES: Record<
  string,
  Partial<Question>
> = {
  q30: {
    vignette:
      "An analyst gathers the following information about a company:\n\n| Measure | Value |\n| --- | --- |\n| ROE | 6% |\n| ROA | 4% |\n| Average total assets | EUR600,000 |",
  },
  q34: {
    vignette:
      "An analyst gathers the following information (in EUR millions) about a firm:\n\n| Item | Amount |\n| --- | --- |\n| Total revenue | 100 |\n| Total variable costs | 75 |\n| Total fixed costs | 40 |",
  },
  q38: {
    vignette:
      "An analyst runs a simple linear regression using 35 months of data:\n\n| Variable | Coefficient | Standard Error |\n| --- | --- | --- |\n| Intercept | -0.5778 | 0.3479 |\n| Inflation rate | 1.1300 | 0.1806 |\n\nCritical t-values for a 1% level of significance:\n\n| Test | Critical value |\n| --- | --- |\n| One-sided, left side | -2.445 |\n| One-sided, right side | +2.445 |\n| Two-sided | +/-2.733 |",
  },
  q39: {
    vignette:
      "An analyst gathers the following data about an economy:\n\n| Measure | Value |\n| --- | --- |\n| Real trend growth rate | 0.5% |\n| Central bank's policy rate | 1.5% |",
  },
  q47: {
    vignette:
      "Company data for the fiscal year ended 31 December:\n\n| Item | Amount |\n| --- | --- |\n| Net income | $3,100,000 |\n| Cash dividends paid on common stock | $775,000 |\n| Cash dividends paid on preferred stock | $500,000 |\n| Common shares outstanding on 1 January | 1,000,000 |\n\nA 2-for-1 stock split occurred on 1 July.",
  },
  q50: {
    vignette:
      "Financial market information:\n\n| Item | Value |\n| --- | --- |\n| EUR/USD spot exchange rate | 0.9876 |\n| 180-day USD risk-free rate | 1.00% |\n| 180-day EUR risk-free rate | 1.20% |\n\nEUR/USD is the amount of EUR per 1 USD.",
  },
  q51: {
    vignette:
      "Company's 3-year construction contract (in millions):\n\n| Item | Amount |\n| --- | --- |\n| Contract price | 108 |\n| Expected total costs | 70 |\n| Actual costs incurred in Year 1 | 28 |\n| Bonus for on-time completion | 6 |",
  },
  q64: {
    vignette:
      "Annual returns on a stock:\n\n| Year | Return |\n| --- | --- |\n| 1 | 5% |\n| 2 | -2% |\n| 3 | 3% |\n| 4 | 8% |\n\nAnnual target return: 4%",
  },
  q67: {
    vignette:
      "Company current assets (in GBP millions):\n\n| Item | Amount |\n| --- | --- |\n| Cash | 800 |\n| Short-term marketable securities | 400 |\n| Receivables | 200 |\n| Inventories | 700 |\n| Current liabilities | 500 |",
  },
  q69: {
    vignette:
      "Year-end prices for a non-dividend-paying stock:\n\n| Year | Price |\n| --- | --- |\n| 1 | EUR6 |\n| 2 | EUR10 |\n| 3 | EUR12 |\n\n(Purchased at end of Year 1, sold at end of Year 3)",
  },
  q74: {
    vignette:
      "Information about three markets:\n\n| Market | Sellers | Non-price competition |\n| --- | --- | --- |\n| Market 1 | Many sellers | None |\n| Market 2 | Few sellers | Strong |\n| Market 3 | Many sellers | Strong |",
  },
  q78: {
    vignette:
      "Forecasted results for a company:\n\n| Item | Value |\n| --- | --- |\n| Net profit margin | 18% |\n| Depreciation | $6 million |\n| Decrease in working capital | $1.5 million |\n| Increase in fixed capital investment | $6 million |\n| Market share | 9% |\n| Total industry sales | $3.3 billion |",
  },
  q82: {
    vignette:
      "Cash flows and returns for a new account:\n\n| Year | Beginning-of-year cash inflow | Outflow | Return |\n| --- | --- | --- | --- |\n| 1 | EUR10,000 | EUR0 | -22% |\n| 2 | EUR0 | EUR1,000 | 24% |",
  },
  q83: {
    vignette:
      "Company information:\n\n| Item | Value |\n| --- | --- |\n| Before-tax cost of debt | 5% |\n| Marginal tax rate | 30% |\n| Cost of equity | 8% |\n| Target debt-to-equity ratio | 50% |",
  },
  q84: {
    vignette:
      "Three companies in the same industry at different lifecycle stages:\n\n| Company | Revenue trend | Debt/Capital |\n| --- | --- | --- |\n| Company 1 | $10M -> $11M -> $9M | 0% |\n| Company 2 | $30M -> $36M -> $44M | Higher |\n| Company 3 | Stable/mature revenue | Higher |",
  },
  q85: {
    vignette:
      "Electronics manufacturing company data (in EUR thousands):\n\n| Item | Year 2 | Year 1 |\n| --- | --- | --- |\n| Cost of sales | 1,250 | 1,000 |\n| Cost of inventory | 225 | 375 |\n| Net realizable value of inventory | 260 | 350 |",
  },
  q87: {
    vignette:
      "Portfolio information:\n\n| Asset class | Weight | Expected Return |\n| --- | --- | --- |\n| Equities | 45% | 16% |\n| Mortgages | 25% | 12% |\n| Cash and equivalents | 30% | 4% |",
  },
};
