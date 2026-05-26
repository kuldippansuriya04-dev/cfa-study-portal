// Auto-generated from CFA Level I PDF curriculum
export interface ReadingModule {
  number: number;
  title: string;
  pages: number;
  los: string;
  intro: string;
  overview: string;
  body: string;
}

export const CFA_READINGS: Record<string, ReadingModule[]> = {
  quant: [
    {
      number: 1,
      title: `Rates and Returns`,
      pages: 40,
      los: `Mastery The candidate should be able to:
interpret interest rates as required rates of return, discount rates, or
opportunity costs and explain an interest rate as the sum of a real
risk-free rate and premiums that compensate investors for bearing
distinct types of risk
calculate and interpret different approaches to return measurement
over time and describe their appropriate uses
compare the money-weighted and time-weighted rates of return and
evaluate the performance of portfolios based on these measures
calculate and interpret annualized return measures and continuously
compounded returns, and describe their appropriate uses
calculate and interpret major return measures and describe their`,
      intro: `Interest rates are a critical concept in finance. In some cases, we assume a particular 
interest rate and in others, the interest rate remains the unknown quantity to deter -
mine. Although the pre-reads have covered the mechanics of time value of money 
problems, here we first illustrate the underlying economic concepts by explaining 
the meaning and interpretation of interest rates and then calculate, interpret, and 
compare different return measures.
1`,
      overview: `■ An interest rate, r, can have three interpretations: (1) a 
required rate of return, (2) a discount rate, or (3) an opportu -
nity cost. An interest rate reflects the relationship between differently 
dated cash flows.
 ■ An interest rate can be viewed as the sum of the real risk-free inter -
est rate and a set of premiums that compensate lenders for bearing 
distinct types of risk: an inflation premium, a default risk premium, a 
liquidity premium, and a maturity premium.
 ■ The nominal risk-free interest rate is approximated as the sum of the 
real risk-free interest rate and the inflation premium.
 ■ A financial asset’s total return consists of two components: an income 
yield consisting of cash dividends or interest payments, and a return 
reflecting the capital gain or loss resulting from changes in the price of 
the financial asset.
 ■ A holding period return, R, is the return that an investor earns for a 
single, specified period of time (e.g., one day, one month, five years).
 ■ Multiperiod returns may be calculated across several holding periods 
using different return measures (e.g., arithmetic mean, geometric 
mean, harmonic mean, trimmed mean, winsorized mean). Each return 
computation has special applications for evaluating investments.
 ■ The choice of which of the various alternative measurements of mean 
to use for a given dataset depends on considerations such as the 
presence of extreme outliers, outliers that we want to include, whether 
there is a symmetric distribution, and compounding.
 ■ A money-weighted return reflects the actual return earned on an 
investment after accounting for the value and timing of cash flows 
relating to the investment.
 ■ A time-weighted return measures the compound rate of growth of one 
unit of currency invested in a portfolio during a stated measurement 
period. Unlike a money-weighted return, a time-weighted return is not 
sensitive to the timing and amount of cashflows and is the preferred 
performance measure`,
      body: `LEARNING MODULE OVERVIEW
 ■ An interest rate, r, can have three interpretations: (1) a 
required rate of return, (2) a discount rate, or (3) an opportu -
nity cost. An interest rate reflects the relationship between differently 
dated cash flows.
 ■ An interest rate can be viewed as the sum of the real risk-free inter -
est rate and a set of premiums that compensate lenders for bearing 
distinct types of risk: an inflation premium, a default risk premium, a 
liquidity premium, and a maturity premium.
 ■ The nominal risk-free interest rate is approximated as the sum of the 
real risk-free interest rate and the inflation premium.
 ■ A financial asset’s total return consists of two components: an income 
yield consisting of cash dividends or interest payments, and a return 
reflecting the capital gain or loss resulting from changes in the price of 
the financial asset.
 ■ A holding period return, R, is the return that an investor earns for a 
single, specified period of time (e.g., one day, one month, five years).
 ■ Multiperiod returns may be calculated across several holding periods 
using different return measures (e.g., arithmetic mean, geometric 
mean, harmonic mean, trimmed mean, winsorized mean). Each return 
computation has special applications for evaluating investments.
 ■ The choice of which of the various alternative measurements of mean 
to use for a given dataset depends on considerations such as the 
presence of extreme outliers, outliers that we want to include, whether 
there is a symmetric distribution, and compounding.
 ■ A money-weighted return reflects the actual return earned on an 
investment after accounting for the value and timing of cash flows 
relating to the investment.
 ■ A time-weighted return measures the compound rate of growth of one 
unit of currency invested in a portfolio during a stated measurement 
period. Unlike a money-weighted return, a time-weighted return is not 
sensitive to the timing and amount of cashflows and is the preferred 
performance measure for evaluating portfolio managers because cash 
withdrawals or additions to the portfolio are generally outside of the 
control of the portfolio manager.
 ■ Interest may be paid or received more frequently than annually. The 
periodic interest rate and the corresponding number of compounding 
periods (e.g., quarterly, monthly, daily) should be adjusted to compute 
present and future values.
 ■ Annualizing periodic returns allows investors to compare different 
investments across different holding periods to better evaluate and 
compare their relative performance. With the number of compound -
ing periods per year approaching infinity, the interest is compound 
continuously.
 ■ Gross return, return prior to deduction of managerial and adminis -
trative expenses (those expenses not directly related to return gener -
ation), is an appropriate measure to evaluate the comparative perfor -
mance of an asset manager.
© CFA Institute. For candidate use only. Not for distribution.
Interest Rates and Time Value of Money 5
 ■ Net return, which is equal to the gross return less managerial and 
administrative expenses, is a better return measure of what an investor 
actually earned.
 ■ The after-tax nominal return is computed as the total return minus 
any allowance for taxes on dividends, interest, and realized gains.
 ■ Real returns are particularly useful in comparing returns across time 
periods because inflation rates may vary over time and are particularly 
useful for comparing investments across time periods and perfor -
mance between different asset classes with different taxation.
 ■ Leveraging a portfolio, via borrowing or futures, can amplify the port -
folio’s gains or losses.
INTEREST RATES AND TIME VALUE OF MONEY
interpret interest rates as required rates of return, discount rates, or 
opportunity costs and explain an interest rate as the sum of a real 
risk-free rate and premiums that compensate investors for bearing 
distinct types of risk
The time value of money establishes the equivalence between cash flows occurring on 
different dates. As cash received today is preferred to cash promised in the future, we 
must establish a consistent basis for this trade-off to compare financial instruments in 
cases in which cash is paid or received at different times. An interest rate (or yield), 
denoted r, is a rate of return that reflects the relationship between differently dated 
– timed – cash flows. If USD 9,500 today and USD 10,000 in one year are equivalent 
in value, then USD 10,000 – USD 9,500 = USD 500 is the required compensation for 
receiving USD 10,000 in one year rather than now. The interest rate (i.e., the required 
compensation stated as a rate of return) is USD 500/USD 9,500 = 0.0526 or 5.26 percent.
Interest rates can be thought of in three ways:
 ■ First, they can be considered required rates of return —that is, the minimum 
rate of return an investor must receive to accept an investment.
 ■ Second, interest rates can be considered discount rates. In the previous 
example, 5.26 percent is the discount rate at which USD 10,000 in one year 
is equivalent to USD 9,500 today. Thus, we use the terms “interest rate” and 
“discount rate” almost interchangeably.
 ■ Third, interest rates can be considered opportunity costs . An opportunity 
cost is the value that investors forgo by choosing a course of action. In the 
example, if the party who supplied USD 9,500 had instead decided to spend 
it today, he would have forgone earning 5.26 percent by consuming rather 
than saving. So, we can view 5.26 percent as the opportunity cost of current 
consumption.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 Ra tes and Returns6
Determinants of Interest Rates
Economics tells us that interest rates are set by the forces of supply and demand, where 
investors supply funds and borrowers demand their use. Taking the perspective of 
investors in analyzing market-determined interest rates, we can view an interest rate 
r as being composed of a real risk-free interest rate plus a set of premiums that are 
required returns or compensation for bearing distinct types of risk:
 r = Real risk-free interest rate + Inflation premium + Default risk premium + 
Liquidity premium + Maturity premium. (1)
 ■ The real risk-free interest rate is the single-period interest rate for a com -
pletely risk-free security if no inflation were expected. In economic theory, 
the real risk-free rate reflects the time preferences of individuals for current 
versus future real consumption.
 ■ The inflation premium compensates investors for expected inflation and 
reflects the average inflation rate expected over the maturity of the debt. 
Inflation reduces the purchasing power of a unit of currency—the amount 
of goods and services one can buy with it.
 ■ The default risk premium compensates investors for the possibility that the 
borrower will fail to make a promised payment at the contracted time and in 
the contracted amount.
 ■ The liquidity premium compensates investors for the risk of loss relative 
to an investment’s fair value if the investment needs to be converted to 
cash quickly. US Treasury bills (T-bills), for example, do not bear a liquidity 
premium because large amounts of them can be bought and sold without 
affecting their market price. Many bonds of small issuers, by contrast, trade 
infrequently after they are issued; the interest rate on such bonds includes a 
liquidity premium reflecting the relatively high costs (including the impact 
on price) of selling a position.
 ■ The maturity premium compensates investors for the increased sensitivity 
of the market value of debt to a change in market interest rates as maturity 
is extended, in general (holding all else equal). The difference between the 
interest rate on longer-maturity, liquid Treasury debt and that on short-term 
Treasury debt typically reflects a positive maturity premium for th`,
    },
    {
      number: 2,
      title: `Time Value of Money in Finance`,
      pages: 40,
      los: `Mastery The candidate should be able to:
calculate and interpret the present value (PV) of fixed-income and
equity instruments based on expected future cash flows
calculate and interpret the implied return of fixed-income
instruments and required return and implied growth of equity
instruments given the present value (PV) and cash flows
explain the cash flow additivity principle, its importance for the
no-arbitrage condition, and its use in calculating implied forward
interest rates, forward exchange rates, and option values`,
      intro: `This learning module applies time value of money principles in valuing financial assets. 
The first lesson focuses on solving for the present value of expected future cash flows 
associated with bonds and stocks. In the second lesson, the focus shifts to solving for 
implied bond and stock returns given current prices. This includes solving for and 
interpreting implied growth rates associated with given stock prices. The final lesson 
introduces cash flow additivity, an important principle which ensures that financial 
asset prices do not allow investors to earn risk-free profits, illustrated with several 
examples. The material covered in this learning module provides an important foun -
dation for candidates in understanding how financial assets are priced in markets.`,
      overview: `■ The price of a bond is the sum of the present values of the 
bond’s promised coupon payments and its par value. For dis -
count bonds, the price reflects only the present value of the bond’s par 
value.
 ■ The value of a stock should reflect the sum of the present values of the 
stock’s expected future dividends in perpetuity.
 ■ Stock valuation models are classified by the expected growth pattern 
assumed for future dividends: (1) no growth, (2) constant growth, or 
(3) changing dividend growth.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The price of a bond is the sum of the present values of the 
bond’s promised coupon payments and its par value. For dis -
count bonds, the price reflects only the present value of the bond’s par 
value.
 ■ The value of a stock should reflect the sum of the present values of the 
stock’s expected future dividends in perpetuity.
 ■ Stock valuation models are classified by the expected growth pattern 
assumed for future dividends: (1) no growth, (2) constant growth, or 
(3) changing dividend growth.
1
LEARNING MODULE
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 T ime Value of Money in Finance46
 ■ If a bond’s price is known, the bond’s implied return can be computed 
using the bond’s price and its promised future cash flows.
 ■ A stock’s required return can be estimated given the stock’s current 
price and assumptions about its expected future dividends and growth 
rates.
 ■ A stock’s implied dividend growth rate can be estimated given the 
stock’s current price and assumptions about its expected future divi -
dends and required return.
 ■ If valuing two (or more) cash flow streams, the cash flow additivity 
principle allows for the cash flow streams to be compared (as long as 
the cash flows occur at the same point in time).
 ■ Application of cash flow additivity allows for confirmation that asset 
prices are the same for economically equivalent assets (even if the 
assets have differing cash flow streams).
 ■ Several real-world applications of cash flow additivity are used to illus -
trate no-arbitrage pricing.
TIME VALUE OF MONEY IN FIXED INCOME AND 
EQUITY
calculate and interpret the present value (PV) of fixed-income and 
equity instruments based on expected future cash flows 
The timing of cash flows associated with financial instruments affects their value, with 
cash inflows valued more highly the sooner they are received. The time value of money 
represents the trade-off between cash flows received today versus those received on a 
future date, allowing the comparison of the current or present value of one or more 
cash flows to those received at different times in the future. This difference is based 
upon an appropriate discount rate r as shown in the prior learning module, which 
varies based upon the type of instrument and the timing and riskiness of expected 
cash flows.
In general, the relationship between a current or present value ( PV) and future 
value (FV) of a cash flow, where r is the stated discount rate per period and t is the 
number of compounding periods, is as follows:
 FVt = PV(1 + r)t. (1)
If the number of compounding periods t is very large, that is, t→∞, we compound 
the initial cash flow on a continuous basis as follows:
 FVt = PVer t. (2)
Conversely, present values can be expressed in future value terms, which requires 
recasting Equation 1 as follows:
   
 FV  t   =  PV   (1 + r)    t 
   PV =   FV  t   [  1 _   (1 + r)    t   ]    
PV =   FV  t     (1 + r)    −t 
   . (3)
The continuous time equivalent expression of Equation 3 is as follows:
2
© CFA Institute. For candidate use only. Not for distribution.
Time Value of Money in Fixed Income and Equity 47
 PVt = FVe−r t. (4)
Fixed-Income Instruments and the Time Value of Money
Fixed-income instruments are debt instruments, such as a bond or a loan, that rep -
resent contracts under which an issuer borrows money from an investor in exchange 
for a promise of future repayment. The discount rate for fixed-income instruments 
is an interest rate, and the rate of return on a bond or loan is often referred to as its 
yield-to-maturity (YTM).
Cash flows associated with fixed-income instruments usually follow one of three 
general patterns:
 ■ Discount: An investor pays an initial price ( PV) for a bond or loan and 
receives a single principal cash flow ( FV) at maturity. The difference (FV − 
PV) represents the interest earned over the life of the instrument.
 ■ Periodic Interest: An investor pays an initial price ( PV) for a bond or loan 
and receives interest cash flows ( PMT) at pre-determined intervals over the 
life of the instrument, with the final interest payment and the principal ( FV) 
paid at maturity.
 ■ Level Payments: An investor pays an initial price ( PV) and receives uniform 
cash flows at pre-determined intervals ( A) through maturity which represent 
both interest and principal repayment.
Discount Instruments
The discount cash flow pattern is shown in Exhibit 1:
Exhibit 1: Discount Bond Cash Flows
Years
Investor pays
discounted
value of bond
at inception
Investor receives
final bond principal
payment at maturity
(FV–PV) represents
interest over the
investment period
PV
PV
FV FV
5.0
The present value ( PV) calculation for a discount bond with principal ( FV) paid at 
time t with a market discount rate of r per period is:
 PV(Discount Bond) = FVt / (1 + r)t. (5)
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 T ime Value of Money in Finance48
The investor’s sole source of return is the difference between the price paid (PV) and 
full principal ( FV) received at maturity. This type of bond is often referred to as a 
zero-coupon bond given the lack of intermediate interest cash flows, which for bonds 
are generally referred to as coupons.
EXAMPLE 1
Discount Bonds under Positive and Negative Interest 
Rates
While most governments issue fixed coupon bonds with principal paid at matu-
rity, for many government issuers such as the United States, United Kingdom, 
or India, investors buy and sell individual interest or principal cash flows sepa -
rated (or stripped) from these instruments as discount bonds. Consider a single 
principal cash flow payable in 20 years on a Republic of India government bond 
issued when the YTM is 6.70 percent. For purposes of this simplified example, 
we use annual compounding, that is, t in Equation 5  is equal to the number of 
years until the cash flow occurs.
1. Wha t should an investor expect to pay for this discount bond per INR100 of 
principal?
Solution:
INR27.33
We solve for PV given r of 6.70 percent, t = 20, and FV
20 of INR100 using 
Equation 5:
 PV = INR100 / (1 + 0.067) 20 = INR27.33.
We may also use the Microsoft Excel or Google Sheets PV function:
 = PV (rate, nper, pmt, FV, type), 
where:
rate = the market discount rate per period,
nper = the number of periods,
pmt = the periodic coupon payment (zero for a discount bond),
FV = future or face value, and
type = payments made at the end (0 as in this case) or beginning (1) of each 
period.
As a cash outflow (or price paid), the Excel PV solution has a negative sign, 
so:
 PV = (27.33) = PV (0.067,20,0,100,0).
While the principal (FV) is a constant INR100, the price (PV) changes as 
both time passes, and interest rates change.
2. If we a ssume that interest rates remain unchanged, what is the price ( PV) of 
the bond in three years’ time? 
Solution:
INR33.21
© CFA Institute. For candidate use only. Not for distribution.
Time Value of Money in Fixed Income and Equity 49
Solve for PV by substituting t = 17 into the prior calculation using Equation 
5:
 PV = INR100 / (1 + 0.067) 17 = INR33.21.
The INR5.88 price increase with a constant r represents implied interest 
earned over the three years. If the interest rate is positive, the PV generally 
rises (or accretes) over time to reach FV as time passes and t approaches 
zero.
3. Pr ices also change as interest rates change. Suppose after purchase at t = 
0 we observe an immediate drop in the bond price to INR22.68224 per 
INR100 of principal. What is the implied interest rate on the discount bond? 
Solution:
7.70 percent
Here we may solve for r in Equation 5 as follows:
 INR22.68224 = INR100 / (1 + r)20.
Rearranging Equation 5, we get:
 r = 7.70 percent = (100/22.68224) 1/20 − 1.
Alternatively, we may use the Microsoft Excel or Google Sheets RATE 
function:
= RATE (nper, pmt, PV, FV, type, guess) using the same ar-
guments as ab`,
    },
    {
      number: 3,
      title: `Statistical Measures of Asset Returns`,
      pages: 40,
      los: `Mastery The candidate should be able to:
calculate, interpret, and evaluate measures of central tendency and
location to address an investment problem
calculate, interpret, and evaluate measures of dispersion to address
an investment problem
interpret and evaluate measures of skewness and kurtosis to address
an investment problem
interpret correlation between two variables to address an investment`,
      intro: `Data have always been a key input for securities analysis and investment management, 
allowing investors to explore and exploit an abundance of information for their invest-
ment strategies. While this data-rich environment offers potentially tremendous oppor-
tunities for investors, turning data into useful information is not so straightforward.
This module provides a foundation for understanding important concepts that are 
an indispensable part of the analytical tool kit needed by investment practitioners, 
from junior analysts to senior portfolio managers. These basic concepts pave the way 
for more sophisticated tools that will be developed as the quantitative methods topic 
unfolds, which are integral to gaining competencies in the investment management 
techniques and asset classes that are presented later in the CFA curriculum.
This learning module focuses on how to summarize and analyze important aspects 
of financial returns, including key measures of central tendency, dispersion, and the 
shape of return distributions—specifically, skewness and kurtosis. The learning mod -
ule finishes with a graphical introduction to covariance and correlation between two 
variables, a key concept in constructing investment portfolios to achieve diversification 
across assets within a portfolio.
1`,
      overview: `■ Sample statistics—such as measures of central tendency, dis -
persion, skewness, and kurtosis—help with investment analy -
sis, particularly in making probabilistic statements about returns.
 ■ Measures of central tendency include the mean, the median and the 
mode, and specify where data are centered.
 ■ The arithmetic mean is the sum of the observations divided by the 
number of observations. It is the most frequently used measure of 
central tendency.
 ■ The median is the value of the middle item of observations, or the 
mean of the values of the two middle items, when the items in a set 
are sorted into ascending or descending order. Since the median is not 
influenced by extreme values, it is most useful in the case of skewed 
distributions.
 ■ The mode is the most frequently observed value and is the only mea -
sure of central tendency that can be used with nominal or categori -
cal data. A distribution may be unimodal (one mode), bimodal (two 
modes), trimodal (three modes), or have even more modes.
 ■ Quantiles, as the median, quartiles, quintiles, deciles, and percentiles, 
are location parameters that divide a distribution into halves, quarters, 
fifths, tenths, and hundredths, respectively.
 ■ A box and whiskers plot illustrates the distribution of a set of observa -
tions. The “box” depicts the interquartile range, the difference between 
the first and the third quartile. The “whiskers” outside of the “box” 
indicate the others measures of dispersion.
 ■ Dispersion measures, such as the range, mean absolute deviation 
(MAD), variance, standard deviation, target downside deviation, and 
coefficient of variation, describe the variability of outcomes around the 
arithmetic mean.
 ■ The range is the difference between the maximum value and the 
minimum value of the dataset. The range has only a limited usefulness 
because it uses information from only two observations.
 ■ The MAD for a sample is the average of the absolute deviations of 
observations from `,
      body: `LEARNING MODULE OVERVIEW
 ■ Sample statistics—such as measures of central tendency, dis -
persion, skewness, and kurtosis—help with investment analy -
sis, particularly in making probabilistic statements about returns.
 ■ Measures of central tendency include the mean, the median and the 
mode, and specify where data are centered.
 ■ The arithmetic mean is the sum of the observations divided by the 
number of observations. It is the most frequently used measure of 
central tendency.
 ■ The median is the value of the middle item of observations, or the 
mean of the values of the two middle items, when the items in a set 
are sorted into ascending or descending order. Since the median is not 
influenced by extreme values, it is most useful in the case of skewed 
distributions.
 ■ The mode is the most frequently observed value and is the only mea -
sure of central tendency that can be used with nominal or categori -
cal data. A distribution may be unimodal (one mode), bimodal (two 
modes), trimodal (three modes), or have even more modes.
 ■ Quantiles, as the median, quartiles, quintiles, deciles, and percentiles, 
are location parameters that divide a distribution into halves, quarters, 
fifths, tenths, and hundredths, respectively.
 ■ A box and whiskers plot illustrates the distribution of a set of observa -
tions. The “box” depicts the interquartile range, the difference between 
the first and the third quartile. The “whiskers” outside of the “box” 
indicate the others measures of dispersion.
 ■ Dispersion measures, such as the range, mean absolute deviation 
(MAD), variance, standard deviation, target downside deviation, and 
coefficient of variation, describe the variability of outcomes around the 
arithmetic mean.
 ■ The range is the difference between the maximum value and the 
minimum value of the dataset. The range has only a limited usefulness 
because it uses information from only two observations.
 ■ The MAD for a sample is the average of the absolute deviations of 
observations from the mean.
 ■ The variance is the average of the squared deviations around the mean, 
and the standard deviation is the positive square root of variance. In 
computing sample variance, s
2, and sample standard deviation, s, the 
average squared deviation is computed using a divisor equal to the 
sample size minus 1.
 ■ The target downside deviation, or target semideviation, is a measure of 
the risk of being below a given target.
 ■ The coefficient of variation (CV) is the ratio of the standard deviation 
of a set of observations to their mean value. By expressing the mag -
nitude of variation among observations relative to their average size, 
the CV allows for the direct comparisons of dispersion across differ -
ent datasets. Reflecting the correction for scale, the CV is a scale-free 
measure, that is, it has no units of measurement.
© CFA Institute. For candidate use only. Not for distribution.
Measures of Central Tendency and Location 89
 ■ Skewness describes the degree to which a distribution is asymmetric 
about its mean. An asset return distribution with positive skewness 
has frequent small losses and a few extreme gains compared to a 
normal distribution. An asset return distribution with negative skew -
ness has frequent small gains and a few extreme losses compared to a 
normal distribution. Zero skewness indicates a symmetric distribution 
of returns.
 ■ Kurtosis measures the combined weight of the tails of a distribution 
relative to the rest of the distribution. A distribution with fatter tails 
than the normal distribution is referred to as fat-tailed (leptokurtic); a 
distribution with thinner tails than the normal distribution is referred 
to as thin-tailed (platykurtic). The kurtosis of a normal distribution is 
3.
 ■ The correlation coefficient measures the association between two vari -
ables. It is the ratio of covariance to the product of the two variables’ 
standard deviations. A positive correlation coefficient indicates that 
the two variables tend to move together, whereas a negative coefficient 
indicates that the two variables tend to move in opposite directions. 
Correlation does not imply causation, simply association. Issues that 
arise in evaluating correlation include the presence of outliers and 
spurious correlation.
MEASURES OF CENTRAL TENDENCY AND LOCATION
calculate, interpret, and evaluate measures of central tendency and 
location to address an investment problem
In this lesson, our focus is on measures of central tendency and other measures of 
location. A measure of central tendency  specifies where the data are centered. For 
a return series, a measure of central tendency shows where the empirical distribution 
of returns is centered, essentially a measure of the “expected” return based on the 
observed sample. Measures of location, mean, the median, and the mode include 
not only measures of central tendency but also other measures that illustrate other 
aspects of the location or distribution of the data.
Frequency distributions, histograms, and contingency tables provide a convenient 
way to summarize a series of observations on an asset’s returns as a first step toward 
describing the data. For example, a histogram for the frequency distribution of the 
daily returns for the fictitious EAA Equity Index over the past five years is shown in 
Exhibit 1.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 S tatistical Measures of Asset Returns90
Exhibit 1: Histogram of Daily Returns on the EAA Equity Index
Number of Observations
600
500
400
300
200
100
0
–1.6 to
–0.8
–4.1 to
–3.3
–3.3 to
–2.5
–2.5 to
–1.6
–0.8 to
0
0.9 to
1.7
2.5 to
3.3
3.3 to
4.2
4.2 to
5.0
0 to
0.9
1.7 to
2.5
Daily Return Range (%)
5 7 37
94
470 493
122
27 11 1
Measures of Central Tendency
The Arithmetic Mean
Analysts and portfolio managers often want one number that describes a representative 
possible outcome of an investment decision. The arithmetic mean is one of the most 
frequently used measures of central tendency.
Arithmetic Mean.  The arithmetic mean  is the sum of the values of the 
observations in a dataset divided by the number of observations.
The Sample Mean
The sample mean is the arithmetic mean, or arithmetic average, computed for a sample.
Sample Mean Formula.  The sample mean or average,    
_
 X    (read “X-bar”), 
is the arithmetic mean value of a sample:
    
_
 X   =    
 ∑ i=1  
n
    X  i   
 _ n   , (1)
where n is the number of observations in the sample.
A property and potential drawback of the arithmetic mean is its sensitivity to 
extreme values, or outliers. Because all observations are used to compute the mean and 
are given equal weight (i.e., importance), the arithmetic mean can be pulled sharply 
upward or downward by extremely large or small observations, respectively. The most 
common approach in this situation is to report the median, or middle value, in place 
of or in addition to the mean.
The Median
A second important measure of central tendency is the median.
Definition of Median.  The median is the value of the middle item of a 
dataset that has been sorted into ascending or descending order. In an 
odd-numbered sample of n observations, the median is the value of the 
© CFA Institute. For candidate use only. Not for distribution.
Measures of Central Tendency and Location 91
observation that occupies the ( n + 1)/2 position. In an even-numbered 
sample, we define the median as the mean of the values of the observations 
occupying the n/2 and (n + 2)/2 positions (the two middle observations).
Whether we use the calculation for an even- or odd-numbered sample, an equal 
number of observations lie above and below the median. A distribution has only one 
median. A potential advantage of the median is that, unlike the mean, outliers do 
not affect it.
The median, however, does not use all the information about the size of the obser-
vations; it focuses only on the relative position of t`,
    },
    {
      number: 4,
      title: `Probability Trees and Conditional Expectations`,
      pages: 20,
      los: `Mastery The candidate should be able to:
calculate expected values, variances, and standard deviations and
demonstrate their application to investment problems
formulate an investment problem as a probability tree and explain
the use of conditional expectations in investment application
calculate and interpret an updated probability in an investment
setting using Bayes’ formula`,
      intro: `Investment decisions are made under uncertainty about the future direction of the 
economy, issuers, companies, and prices. This learning module presents probability 
tools that address many real-world problems involving uncertainty and applies to a 
variety of investment management applications.
Lesson 1 introduces the calculation of the expected value, variance, and standard 
deviation for a random variable. These are essential quantitative concepts in invest -
ment management. Lesson 2 introduces probability trees that help in visualizing the 
conditional expectations and the total probabilities for expected value.
When making investment decisions, analysts often rely on perspectives, which 
may be influenced by subsequent observations. Lesson 3 introduces Bayes’ formula, 
a rational method to adjust probabilities with the arrival of new information. This 
method has wide business and investment applications.
1`,
      overview: `■ The expected value of a random variable is a probabili -
ty-weighted average of the possible outcomes of the random 
variable. For a random variable X, the expected value of X is denoted 
E(X).
 ■ The variance of a random variable is the expected value (the probabili -
ty-weighted average) of squared deviations from the random variable’s 
expected value E(X): σ
2(X) = E{[X − E (X)]2}, where σ 2(X) stands for the 
variance of X.
 ■ Standard deviation is the positive square root of variance. Standard 
deviation measures dispersion (as does variance), but it is measured in 
the same units as the variable.
 ■ A probability tree is a means of illustrating the results of two or more 
independent events.
 ■ A probability of an event given (conditioned on) another event is a 
conditional probability. The probability of an event A given an event B 
is denoted P(A | B), and P(A | B) = P(AB)/P(B), P(B) ≠ 0.
 ■ According to the total probability rule, if S1, S2, …, Sn are mutually 
exclusive and exhaustive scenarios or events, then P(A) = P(A | S1)
P(S1) + P(A | S2)P(S2) + … + P(A | Sn)P(Sn).
 ■ Conditional expected value is E(X | S) = P(X1 | S)X1 + P(X2 | S)X2 + … 
+ P(Xn | S)Xn and has an associated conditional variance and condi -
tional standard deviation.
 ■ Bayes’ formula is a method used to update probabilities based on new 
information.
 ■ Bayes’ formula is expressed as follows: Updated probability of event 
given the new information = [(Probability of the new information 
given event)/(Unconditional probability of the new information)] × 
Prior probability of event.`,
      body: `LEARNING MODULE OVERVIEW
 ■ The expected value of a random variable is a probabili -
ty-weighted average of the possible outcomes of the random 
variable. For a random variable X, the expected value of X is denoted 
E(X).
 ■ The variance of a random variable is the expected value (the probabili -
ty-weighted average) of squared deviations from the random variable’s 
expected value E(X): σ
2(X) = E{[X − E (X)]2}, where σ 2(X) stands for the 
variance of X.
 ■ Standard deviation is the positive square root of variance. Standard 
deviation measures dispersion (as does variance), but it is measured in 
the same units as the variable.
 ■ A probability tree is a means of illustrating the results of two or more 
independent events.
 ■ A probability of an event given (conditioned on) another event is a 
conditional probability. The probability of an event A given an event B 
is denoted P(A | B), and P(A | B) = P(AB)/P(B), P(B) ≠ 0.
 ■ According to the total probability rule, if S1, S2, …, Sn are mutually 
exclusive and exhaustive scenarios or events, then P(A) = P(A | S1)
P(S1) + P(A | S2)P(S2) + … + P(A | Sn)P(Sn).
 ■ Conditional expected value is E(X | S) = P(X1 | S)X1 + P(X2 | S)X2 + … 
+ P(Xn | S)Xn and has an associated conditional variance and condi -
tional standard deviation.
 ■ Bayes’ formula is a method used to update probabilities based on new 
information.
 ■ Bayes’ formula is expressed as follows: Updated probability of event 
given the new information = [(Probability of the new information 
given event)/(Unconditional probability of the new information)] × 
Prior probability of event.
EXPECTED VALUE AND VARIANCE
calculate expected values, variances, and standard deviations and 
demonstrate their application to investment problems
The expected value of a random variable is an essential quantitative concept in 
investments. Investors continually make use of expected values—in estimating the 
rewards of alternative investments, in forecasting earnings per share (EPS) and 
other corporate financial variables and ratios, and in assessing any other factor that 
may affect their financial position. The expected value of a random variable  is the 
probability-weighted average of the possible outcomes of the random variable. For a 
random variable X, the expected value of X is denoted E(X).
Expected value (e.g., expected stock return) looks either to the future, as a fore -
cast, or to the “true” value of the mean (the population mean). We should distinguish 
expected value from the concepts of historical or sample mean. The sample mean also 
2
© CFA Institute. For candidate use only. Not for distribution.
Expected Value and Variance 135
summarizes in a single number a central value. However, the sample mean presents 
a central value for a particular set of observations as an equally weighted average of 
those observations. In sum, the contrast is forecast versus historical, or population 
versus sample.
An equation that summarizes the calculation of the expected value for a discrete 
random variable X is as follows:
  E (X)  =  P ( X  1  )   X  1   +  P ( X  2  )   X  2   + … + P ( X  n  )   X  n   =   ∑ i=1  
n
    P ( X  i  )   X  i   , (1)
where Xi is one of n possible outcomes of the discrete random variable X.
The expected value is our forecast. Because we are discussing random quantities, 
we cannot count on an individual forecast being realized (although we hope that, on 
average, forecasts will be accurate). It is important, as a result, to measure the risk 
we face. Variance and standard deviation measure the dispersion of outcomes around 
the expected value or forecast.
The variance of a random variable is the expected value (the probability-weighted 
average) of squared deviations from the random variable’s expected value:
   σ   2  (X)  =  E   [X − E (X) ]    2  . (2)
The two notations for variance are σ 2(X) and Var(X).
Variance is a number greater than or equal to 0 because it is the sum of squared 
terms. If variance is 0, there is no dispersion or risk. The outcome is certain, and 
the quantity X is not random at all. Variance greater than 0 indicates dispersion of 
outcomes. Increasing variance indicates increasing dispersion, all else being equal.
The following equation summarizes the calculation of variance:
   
 σ   2  (X)  =  P ( X  1  )    [ X  1   − E (X) ]    2  +  P ( X  2  )    [ X  2   − E (X) ]    2 
        + … + P ( X  n  )    [ X  n   − E (X) ]    2  =  ∑ i = 1  
n
    P ( X  i  )    [ X  i   − E (X) ]    2   , (3)
where Xi is one of n possible outcomes of the discrete random variable X.
Variance of X is a quantity in the squared units of X. For example, if the random 
variable is return in percent, variance of return is in units of percent squared. Standard 
deviation is easier to interpret than variance because it is in the same units as the 
random variable .Standard deviation  is the square root of variance. If the random 
variable is return in percent, standard deviation of return is also in units of percent. In 
the following examples, when the variance of returns is stated as a percent or amount 
of money, to conserve space, we may suppress showing the unit squared.
The best way to become familiar with these concepts is to work examples.
EXAMPLE 1
BankCorp’s Earnings per Share, Part 1
As part of your work as a banking industry analyst, you build models for forecast-
ing earnings per share of the banks you cover. Today you are studying BankCorp. 
In Exhibit 1, you have recorded a probability distribution for BankCorp’s EPS 
for the current fiscal year.
 
Exhibit 1: Probability Distribution for BankCorp’s EPS
 
 
Probability EPS (USD)
0.15 2.60
0.45 2.45
0.24 2.20
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Pr obability Trees and Conditional Expectations136
Probability EPS (USD)
0.16 2.00
1.00
 
1. Wha t is the expected value of BankCorp’s EPS for the current fiscal year?
Solution:
Following the definition of expected value, list each outcome, weight it by its 
probability, and sum the terms.
 E(EPS) = 0.15(USD2.60) + 0.45(USD 2.45) + 0.24(USD 2.20) + 0.16(USD 
2.00) 
 = USD2.3405
The expected value of EPS is USD2.34.
2. U sing the probability distribution of EPS from Exhibit 1, you want to 
measure the dispersion around your forecast. What are the variance and 
standard deviation of BankCorp’s EPS for the current fiscal year? 
Solution:
The order of calculation is always expected value, then variance, and then 
standard deviation. Expected value has already been calculated. Following 
the previous definition of variance, calculate the deviation of each outcome 
from the mean or expected value, square each deviation, weight (multiply) 
each squared deviation by its probability of occurrence, and then sum these 
terms.
   
 σ   2  (EPS)  =  P (2.60)    [2.60 − E (EPS) ]    2  +  P (2.45)    [2.45 − E (EPS) ]    2 
       
+   P (2.20)    [2.20 − E (EPS) ]    2  +  P (2.00)    [2.00 − E (EPS) ]    2 
      = 0.15   (2.60 − 2.34)    2  + 0.45   (2.45 − 2.34)    2      
+   0.24    (2.20 − 2.34)    2  + 0.16   (2.00 − 2.34)    2 
     
= 0.01014 + 0.005445 + 0.004704 + 0.018496 =  0.038785
   
Standard deviation is the positive square root of 0.038785:
 σ(EPS) = 0.038785 1/2 = 0.196939, or approximately 0.20.
PROBABILITY TREES AND CONDITIONAL 
EXPECTATIONS
formulate an investment problem as a probability tree and explain 
the use of conditional expectations in investment application
In investments, we make use of any relevant information available in making our 
forecasts. When we refine our expectations or forecasts, we are typically updating 
them based on new information or events; in these cases, we are using conditional 
expected values. The expected value of a random variable X given an event or scenario 
S is denoted E(X | S). Suppose the random variable X can take on any one of n distinct 
3
© CFA Institute. For candidate use only. Not for distribution.
Probability Trees and`,
    },
    {
      number: 5,
      title: `Portfolio Mathematics`,
      pages: 24,
      los: `Mastery The candidate should be able to:
calculate and interpret the expected value, variance, standard
deviation, covariances, and correlations of portfolio returns
calculate and interpret the covariance and correlation of portfolio
returns using a joint probability function for returns
define shortfall risk, calculate the safety-first ratio, and identify an
optimal portfolio using Roy’s safety-first criterion`,
      intro: `Modern portfolio theory makes frequent use of the idea that investment opportunities 
can be evaluated using expected return as a measure of reward and variance of return 
as a measure of risk. In Lesson 1, we will develop an understanding of portfolio return 
and risk metrics. The forecast expected return and variance of return are functions 
of the returns on the individual portfolio holdings. To begin, the expected return 
on a portfolio is a weighted average of the expected returns on the securities in the 
portfolio. When we have estimated the expected returns on the individual securities, 
we immediately have portfolio expected return. Lesson 2 focuses on forecasting 
certain portfolio metrics, such as correlations and covariances by looking at the risk 
and return on the individual components of a portfolio. Lesson 3 introduces various 
portfolio risk metrics widely used in portfolio management.
1`,
      overview: `■ A portfolio’s variance measures its expected investment risk 
and is defined as σ 2(Rp) = E{[RpE(Rp)]2}. A portfolio’s expected 
return (E(Rp)) is a weighted average of the expected returns (R 1 to Rn) 
on the component securities using their respective proportions of the 
portfolio in currency units as weights (w
1 to wn):
   
E ( R  p  )  =  E ( w  1    R  1   +   w  2    R  2   + … +  w  n    R  n  ) 
     =  w  1   E ( R  1  )  +  w  2   E ( R  2  )  + … +  w  n   E ( R  n  )    
 ■ Portfolio variance is affected by both the risk of the individual com -
ponent assets and their combined risks together as measured by their 
covariance, which is defined as
   σ   2  ( R  p  )  =  ∑ i=1  
n
    ∑ j=1  
n
    w  i    w  j   Cov  ( R  i  ,  R  j  )  .  
 ■ Covariance of returns can be negative (an average negative rela -
tionship between returns), zero if returns on the assets are unre -
lated, or positive (an average positive relationship between returns). 
Correlation, like covariance, measures linear association and ranges 
between –1 (strongly inverse) to +1 (strongly direct), with 0 indicating 
no relationship.
 ■ The covariance of portfolio returns can be estimated using a joint 
probability function of random variables. Defined on variables X and 
Y, as P(X,Y), which gives the probability of joint occurrences of their 
values. For example, P(X=3, Y=2), is the probability X equals 3 and Y 
equals 2.
 ■ A formula for computing the covariance between random variables R A 
and RB, such as the different assets of a portfolio, is
  Cov ( R  A  ,  R  B  )  =  ∑ i  
 
    ∑ j  
 
   P ( R  A,i  ,  R  B,j  )  ( R  A,i   − E  R  A  )  ( R  B,j   − E  R  B  )  .  
The value is derived by summing all possible deviation cross-products 
weighted by the appropriate joint probability.
 ■ The joint probability function simplifies for independent variables, 
defined for two random variables X and Y if and only if P(X,Y) = P(X)
P(Y). The expected value of the product of both in`,
      body: `LEARNING MODULE OVERVIEW
 ■ A portfolio’s variance measures its expected investment risk 
and is defined as σ 2(Rp) = E{[RpE(Rp)]2}. A portfolio’s expected 
return (E(Rp)) is a weighted average of the expected returns (R 1 to Rn) 
on the component securities using their respective proportions of the 
portfolio in currency units as weights (w
1 to wn):
   
E ( R  p  )  =  E ( w  1    R  1   +   w  2    R  2   + … +  w  n    R  n  ) 
     =  w  1   E ( R  1  )  +  w  2   E ( R  2  )  + … +  w  n   E ( R  n  )    
 ■ Portfolio variance is affected by both the risk of the individual com -
ponent assets and their combined risks together as measured by their 
covariance, which is defined as
   σ   2  ( R  p  )  =  ∑ i=1  
n
    ∑ j=1  
n
    w  i    w  j   Cov  ( R  i  ,  R  j  )  .  
 ■ Covariance of returns can be negative (an average negative rela -
tionship between returns), zero if returns on the assets are unre -
lated, or positive (an average positive relationship between returns). 
Correlation, like covariance, measures linear association and ranges 
between –1 (strongly inverse) to +1 (strongly direct), with 0 indicating 
no relationship.
 ■ The covariance of portfolio returns can be estimated using a joint 
probability function of random variables. Defined on variables X and 
Y, as P(X,Y), which gives the probability of joint occurrences of their 
values. For example, P(X=3, Y=2), is the probability X equals 3 and Y 
equals 2.
 ■ A formula for computing the covariance between random variables R A 
and RB, such as the different assets of a portfolio, is
  Cov ( R  A  ,  R  B  )  =  ∑ i  
 
    ∑ j  
 
   P ( R  A,i  ,  R  B,j  )  ( R  A,i   − E  R  A  )  ( R  B,j   − E  R  B  )  .  
The value is derived by summing all possible deviation cross-products 
weighted by the appropriate joint probability.
 ■ The joint probability function simplifies for independent variables, 
defined for two random variables X and Y if and only if P(X,Y) = P(X)
P(Y). The expected value of the product of both independent and 
uncorrelated random variables is the product of their expected values.
 ■ An application of normal distribution theory to practical investment 
problems involves safety-first rules. These focus on reducing the short -
fall risk, defined as portfolio value (or portfolio return) falling below 
some minimum acceptable level over some time horizon,
 ■ The safety-first ratio is defined as (SFRatio = [E(R P) − R L]/σP, where 
E(RP) is expected portfolio return, R L is a predetermined minimum 
threshold level for a variable of interest like portfolio return, and σ P is 
portfolio standard deviation. When R L is the risk-free rate, the safe -
ty-first ratio is equivalent to the Sharpe ratio.
 ■ Roy’s safety-first criterion states that the optimal portfolio minimizes 
the probability that portfolio return, R
P, will fall below R L. For a 
portfolio with a given safety-first ratio (SFratio), the probability that 
© CFA Institute. For candidate use only. Not for distribution.
Portfolio Expected Return and Variance of Return 155
its return will be less than R L is Normal(–SFRatio), and the safety-first 
optimal portfolio has the lowest such probability. The criterion is 
implemented by first calculating each potential portfolio’s SFRatio and 
then choosing the portfolio with the highest SFRatio.
PORTFOLIO EXPECTED RETURN AND VARIANCE OF 
RETURN
calculate and interpret the expected value, variance, standard 
deviation, covariances, and correlations of portfolio returns
The expected return on the portfolio  (E(Rp)) is a weighted average of the expected 
returns (R1 to Rn) on the component securities using their respective proportions of 
the portfolio in currency units as weights ( w1 to wn):
   
E ( R  p  )  =  E ( w  1    R  1   +   w  2    R  2   + … +  w  n    R  n  ) 
     =  w  1   E ( R  1  )  +  w  2   E ( R  2  )  + … +  w  n   E ( R  n  )    . (1)
Suppose we have estimated expected returns on assets in the three-asset portfolio 
shown in Exhibit 1.
Exhibit 1: Weights and Expected Returns of Sample Portfolio
Asset Class Weight Expected Return (%)
S&P 500 0.50 13
US long-term corporate bonds 0.25 6
MSCI EAFE 0.25 15
We calculate the expected return on the portfolio as 11.75 percent:
   
E ( R  p  )  =  w  1   E ( R  1  )  +  w  2   E ( R  2  )  +  w  3   E ( R  3  ) 
     
= 0.50 (13%)  + 0.25 (6%)  + 0.25 (15%)  =  1 1.75%
  .
Here we are interested in portfolio variance of return as a measure of investment 
risk. Accordingly, portfolio variance is as follows:
 σ2(Rp) = E{[RpE(Rp)]2}. (2)
This is expected variance or variance in a forward-looking sense. To implement this 
definition of portfolio variance, we use information about the individual assets in the 
portfolio, but we also need the concept of covariance. To avoid notational clutter, we 
write ER
p for E(Rp).
Covariance
Given two random variables Ri and Rj, the covariance between Ri and Rj is as follows:
 Cov(Ri,Rj) = E[(Ri − ERi)(Rj − ERj)]. (3)
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 P ortfolio Mathematics156
Alternative notations are σ(Ri,Rj) and σij. Equation 3 states that the covariance between 
two random variables is the probability-weighted average of the cross-products of 
each random variable’s deviation from its own expected value. The previous measure 
is the population covariance and is forward-looking. The sample covariance between 
two random variables R
i and Rj, based on a sample of past data of size n is as follows:
  Cov ( R  i  ,  R  j  )  =   ∑ n=1  
n
    ( R  i,t  ,    
_
 R    i  )  ( R  j,t   − E    
_
 R    j  )  ⧸  (n − 1)   . (4)
Start with the definition of variance for a three-asset portfolio and see how it decom -
poses into three variance terms and six covariance terms. Dispensing with the deri -
vation, the result is Equation 5:
   
 σ   2  ( R  p  )  =  E [  ( R  p   − E  R  p  )    2 ] 
    = E {  [ w  1    R  1   +   w  2    R  2   +   w  3    R  3   − E ( w  1    R  1   +   w  2    R  2   +   w  3    R  3  ) ]    2 }       
= E {  [ w  1    R  1   +   w  2    R  2   +   w  3    R  3   −  w  1   E  R  1   −  w  2   E  R  2   −  w  3   E  R  3  ]    2 } .
   (5)
   
=  w  1  2   σ   2  ( R  1  )  +  w  1    w  2   Cov  ( R  1  ,  R  2  )  +  w  1    w  3   Cov  ( R  1  ,  R  3  ) 
      +  w  1    w  2   Cov  ( R  1  ,  R  2  )  +  w  2  2   σ   2  ( R  2  )  +  w  2    w  3   Cov  ( R  2  ,  R  3  )       
+  w  1    w  3   Cov  ( R  1  ,  R  3  )  +  w  2    w  3   Cov  ( R  2  ,  R  3  )  +  w  2  3   σ   2  ( R  3  ) .
  
Noting that the order of variables in covariance does not matter, for example, Cov(R2,R1) 
= Cov( R1,R2), and that diagonal variance terms σ 2(R1), σ 2(R2), and σ 2(R3) can be 
expressed as Cov(R1,R1), Cov(R2,R2), and Cov(R3,R3), respectively, the most compact 
way to state Equation 5 is 
   σ   2  ( R  p  )  =  ∑ i=1  
3
    ∑ j=1  
3
    w  i    w  j   Cov  ( R  i  ,  R  j  )  .  
Moreover, this expression generalizes for a portfolio of any size n to
   σ   2  ( R  p  )  =  ∑ i=1  
n
    ∑ j=1  
n
    w  i    w  j   Cov  ( R  i  ,  R  j  )  .   (6)
Equation 6 shows that individual variances of return constitute part, but not all, of 
portfolio variance. The three variances are outnumbered by the six covariance terms 
off the diagonal. If there are 20 assets, there are 20 variance terms and 20(20) − 20 = 
380 off-diagonal covariance terms. A first observation is that as the number of holdings 
increases, covariance becomes increasingly important, all else equal.
The covariance terms capture how the co-movements of returns affect aggregate 
portfolio variance. From the definition of covariance, we can establish two essential 
observations about covariance.
1. We can interpret the sign of covariance as follows:
 ● Covariance of returns is negative if, when the return on one asset is 
above its expected value, the return on the other asset tends to be below 
its expected value (an average inverse r`,
    },
    {
      number: 6,
      title: `Simulation Methods`,
      pages: 18,
      los: `Mastery The candidate should be able to:
explain the relationship between normal and lognormal distributions
and why the lognormal distribution is used to model asset prices
when using continuously compounded asset returns
describe Monte Carlo simulation and explain how it can be used in
investment applications
describe the use of bootstrap resampling in conducting a simulation
based on observed data in investment applications`,
      intro: `The understanding and application of probability distributions is a critical component 
of forecasting financial variables and asset prices. This learning module provides a 
foundation for understanding important concepts related to probability distributions. 
Regarding the application of probability distributions, this learning module explains 
how to construct and interpret a Monte Carlo simulation analysis. Bootstrapping, 
with some similarities to Monte Carlo simulations, is also demonstrated to illustrate 
the use and application of this statistical sampling approach.`,
      overview: `■ The lognormal distribution is widely used for modeling the 
probability distribution of financial asset prices because the 
distribution is bounded from below by 0 as asset prices and usually 
describes accurately the statistical distribution properties of financial 
assets prices. Lognormal distribution is typically skewed to the right.
 ■ Continuously compounded returns play a role in many asset pricing 
models, as well as in risk management.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The lognormal distribution is widely used for modeling the 
probability distribution of financial asset prices because the 
distribution is bounded from below by 0 as asset prices and usually 
describes accurately the statistical distribution properties of financial 
assets prices. Lognormal distribution is typically skewed to the right.
 ■ Continuously compounded returns play a role in many asset pricing 
models, as well as in risk management.
1
LEARNING MODULE
6
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 S imulation Methods178
 ■ Monte Carlo simulation is widely used to estimate risk and return in 
investment applications. Specifically, it is commonly used to value 
securities with complex features, such as embedded options, where no 
analytic pricing formula is available
 ■ A Monte Carlo simulation generates a large number of random sam -
ples from a specified probability distribution or a series of distribu -
tions to obtain the likelihood of a range of results.
 ■ Bootstrapping mimics the process of performing random sampling 
from a population to construct the sampling distribution by treating 
the randomly drawn sample as if it were the population.
 ■ Because a random sample offers a good representation of the popu -
lation, bootstrapping can simulate sampling from the population by 
sampling from the observed sample.
LOGNORMAL DISTRIBUTION AND CONTINUOUS 
COMPOUNDING
explain the relationship between normal and lognormal distributions 
and why the lognormal distribution is used to model asset prices 
when using continuously compounded asset returns
The Lognormal Distribution
Closely related to the normal distribution, the lognormal distribution is widely used for 
modeling the probability distribution of share and other asset prices. For example, the 
lognormal distribution appears in the Black–Scholes–Merton option pricing model. 
The Black–Scholes–Merton model assumes that the price of the asset underlying the 
option is lognormally distributed.
A random variable Y follows a lognormal distribution if its natural logarithm, ln 
Y, is normally distributed. The reverse is also true: If the natural logarithm of random 
variable Y, ln Y, is normally distributed, then Y follows a lognormal distribution. 
If you think of the term lognormal as “the log is normal, ” you will have no trouble 
remembering this relationship.
The two most noteworthy observations about the lognormal distribution are that it 
is bounded below by 0 and it is skewed to the right (it has a long right tail). Note these 
two properties in the graphs of the probability density functions (pdfs) of two lognor-
mal distributions in Exhibit 1. Asset prices are bounded from below by 0. In practice, 
the lognormal distribution has been found to be a usefully accurate description of the 
distribution of prices for many financial assets. However, the normal distribution is 
often a good approximation for returns. For this reason, both distributions are very 
important for finance professionals.
2
© CFA Institute. For candidate use only. Not for distribution.
Lognormal Distribution and Continuous Compounding 179
Exhibit 1: Two Lognormal Distributions
0 0 4.5 4.50.5 0.51.0 1.0 1.5 1.5 2.0 2.02.5 2.53.0 3.03.5 3.54.0 4.0
Like the normal distribution, the lognormal distribution is completely described by 
two parameters. Unlike many other distributions, a lognormal distribution is defined 
in terms of the parameters of a different distribution. The two parameters of a lognor-
mal distribution are the mean and standard deviation (or variance) of its associated 
normal distribution: the mean and variance of ln Y, given that Y is lognormal. So, 
we must keep track of two sets of means and standard deviations (or variances): (1) 
the mean and standard deviation (or variance) of the associated normal distribution 
(these are the parameters) and (2) the mean and standard deviation (or variance) of 
the lognormal variable itself.
To illustrate this relationship, we simulated 1,000 scenarios of yearly asset returns, 
assuming that returns are normally distributed with 7 percent mean and 12 percent 
standard deviation. For each scenario i, we converted the simulated continuously 
compounded returns (ri) to future asset prices with the formula Price(1 year later) i = 
USD1 × exp(ri), where exp is the exponential function and assuming that the asset’s 
price is USD1 today. In Exhibit 2 , Panel A shows the distribution of the simulated 
returns together with the fitted normal pdf, whereas Panel B shows the distribution 
of the corresponding future asset prices together with the fitted lognormal pdf. Again, 
note that the lognormal distribution of future asset prices is bounded below by 0 and 
has a long right tail.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 S imulation Methods180
Exhibit 2: Simulated Returns (Normal PDF) and Asset Prices (Lognormal 
PDF)
A. Normal PDF
120 120
100 100
80 80
60 60
40 40
20 20
0 0
–28.76–28.76 –18.58 –18.58 22.1 22.111.93 11.931.761.76–8.41 –8.41 32.27 32.2742.45 42.45
Yearly Returns (%)
Normal FitHistogram
B. Lognormal PDF
120 120
100 100
80 80
60 60
40 40
20 20
0 0
0.750.75 0.86 0.86 1.32 1.321.21 1.211.09 1.090.98 0.98 1.44 1.44 1.55 1.55
Asset Values 1 Year Later (USD 1 Initial Investment)
Lognormal FitHistogram
The expressions for the mean and variance of the lognormal variable are challenging. 
Suppose a normal random variable X has expected value μ and variance σ
2. Define Y 
= exp(X). Remember that the operation indicated by exp( X) or eX (where e ≈ 2.7183) 
is the opposite operation from taking logs. Because ln Y = ln [exp(X)] = X is normal 
(we assume X is normal), Y is lognormal. What is the expected value of Y = exp(X)? 
A guess might be that the expected value of Y is exp(μ). The expected value is actually 
exp(μ + 0.50σ2), which is larger than exp(μ) by a factor of exp(0.50 σ2) > 1. To get some 
insight into this concept, think of what happens if we increase σ2. The distribution 
spreads out; it can spread upward, but it cannot spread downward past 0. As a result, 
the center of its distribution is pushed to the right: The distribution’s mean increases.
The expressions for the mean and variance of a lognormal variable are summarized 
below, where μ and σ2 are the mean and variance of the associated normal distribution 
(refer to these expressions as needed, rather than memorizing them):
 ■ Mean (μL) of a lognormal random variable = exp( μ + 0.50σ2).
© CFA Institute. For candidate use only. Not for distribution.
Lognormal Distribution and Continuous Compounding 181
 ■ Variance (σL2) of a lognormal random variable = exp(2 μ + σ2) × [exp(σ2) 
− 1].
Continuously Compounded Rates of Return
We now explore the relationship between the distribution of stock return and stock 
price. In this section, we show that if a stock’s continuously compounded return is 
normally distributed, then future stock price is necessarily lognormally distributed. 
Furthermore, we show that stock price may be well described by the lognormal 
distribution even when continuously compounded returns do not follow a normal 
distribution. These results provide the theoretical foundation for using the lognormal 
distribution to model asset prices.
Showing that the stock price at some future time T, PT, equals the current stock 
price, P0, multiplied by e raised to power r0,T, the continuously compounded return 
from 0 to T:
 PT = P0exp(r0,T).
We showed in an earlier lesson that r0,T, the continuously compounded return to 
time T, is the sum of the one-period continuously compounded returns, as follows:
 r0,T = rT−1,T + rT−2,T−1 + . . . + r0,1. (1)
If these shorter-period returns are normally distributed, then r0,T is normally distrib-
uted (given certain assumptions) or approximately normally distributed (not making 
those assumptions). As P
T is proportional to the log of a normal random v`,
    },
    {
      number: 7,
      title: `Estimation and Inference`,
      pages: 22,
      los: `Mastery The candidate should be able to:
compare and contrast simple random, stratified random, cluster,
convenience, and judgmental sampling and their implications for
sampling error in an investment problem
explain the central limit theorem and its importance for the
distribution and standard error of the sample mean
describe the use of resampling (bootstrap, jackknife) to estimate the
sampling distribution of a statistic`,
      intro: `In this Learning Module, we present the various methods for obtaining information 
on a population (all members of a specified group) through samples (part of the 
population). The information on a population that we seek usually concerns the value 
of a parameter, a quantity computed from or used to describe a population of data. 
In Lesson 1 we introduce sampling, which we use a sample to estimate a parameter; 
we make use of sample statistics. A statistic is a quantity computed from or used to 
describe a sample of data.
Supposing that a sample is representative of the underlying population, how can 
the analyst assess the sampling error in estimating a population parameter? In Lesson 
2, the Central Limit Theorem helps us understand the sampling distribution of the 
sample mean in many of the estimation problems we face. This provides guidance 
on how closely a sample mean can be expected to match its underlying population 
mean, allowing an analyst to use the sampling distribution to assess the accuracy 
of the sample and test hypotheses about the underlying parameter. Lesson 3 covers 
various resampling approaches.
1`,
      overview: `■ Of the two types of sampling methods, probability sampling 
includes simple random sampling and stratified random sam -
pling, and non-probability sampling includes convenience sampling 
and judgmental sampling. Probability sampling involves equal chance 
of sample selection, while non-probability sampling has a significant 
risk of being non-representative.
 ■ Sampling error is the difference between the observed value of a 
statistic and the quantity it is intended to estimate as a result of using 
subsets of the population.
 ■ Non-probability sampling methods rely not on a fixed selection 
process but instead on a researcher’s sample selection capabilities. Its 
advantages include quick and low-cost data collection, and can apply 
expert judgment for efficient sample selection.
 ■ The Central Limit Theorem is defined as follows: Given a popula -
tion described by any probability distribution with mean µ and finite 
variance σ
2, the sampling distribution of the sample mean   
_
 X   computed 
from random samples of size n from this population will be approxi -
mately normal with mean µ (the population mean) and variance σ 2/n 
(the population variance divided by n) when the sample size n is large.
 ■ The standard error of the sample mean is an important quantity in 
applying the central limit theorem in practice. It is typically estimated 
using the square root of the sample variance, calculated as follows:
   s   2  =    
 ∑ i=1  
n
     ( X  i   −  
_
 X )    2  
  ____________ n − 1   .
 ■ The central limit theorem shows that when sampling from any dis -
tribution, the sample mean distribution will have these two proper -
ties when the sample size is large: (1) the distribution of the sample 
mean    
_
 X    will be approximately normal, and (2) the mean of the distri -
bution of   
_
 X   will be equal to the mean of the population from which 
samples are drawn.
 ■ Bootstrap, a popular resampling method which repeatedly draws 
samples of the same size as t`,
      body: `LEARNING MODULE OVERVIEW
 ■ Of the two types of sampling methods, probability sampling 
includes simple random sampling and stratified random sam -
pling, and non-probability sampling includes convenience sampling 
and judgmental sampling. Probability sampling involves equal chance 
of sample selection, while non-probability sampling has a significant 
risk of being non-representative.
 ■ Sampling error is the difference between the observed value of a 
statistic and the quantity it is intended to estimate as a result of using 
subsets of the population.
 ■ Non-probability sampling methods rely not on a fixed selection 
process but instead on a researcher’s sample selection capabilities. Its 
advantages include quick and low-cost data collection, and can apply 
expert judgment for efficient sample selection.
 ■ The Central Limit Theorem is defined as follows: Given a popula -
tion described by any probability distribution with mean µ and finite 
variance σ
2, the sampling distribution of the sample mean   
_
 X   computed 
from random samples of size n from this population will be approxi -
mately normal with mean µ (the population mean) and variance σ 2/n 
(the population variance divided by n) when the sample size n is large.
 ■ The standard error of the sample mean is an important quantity in 
applying the central limit theorem in practice. It is typically estimated 
using the square root of the sample variance, calculated as follows:
   s   2  =    
 ∑ i=1  
n
     ( X  i   −  
_
 X )    2  
  ____________ n − 1   .
 ■ The central limit theorem shows that when sampling from any dis -
tribution, the sample mean distribution will have these two proper -
ties when the sample size is large: (1) the distribution of the sample 
mean    
_
 X    will be approximately normal, and (2) the mean of the distri -
bution of   
_
 X   will be equal to the mean of the population from which 
samples are drawn.
 ■ Bootstrap, a popular resampling method which repeatedly draws 
samples of the same size as the original sample, uses computer simu -
lation for statistical inference without using an analytical formula such 
as a z-statistic or t-statistic. It can be used as a simple but powerful 
method for any complicated estimators such as the standard error of a 
sample mean.
 ■ Bootstrap has potential advantages in accuracy. Given these advan -
tages, it can be applied widely in finance, such as for historical simula -
tions in asset allocation or in gauging an investment strategy’s perfor -
mance against a benchmark.
 ■ Jackknife is another resampling technique with samples selected by 
taking the original observed data sample and leaving out one obser -
vation at a time from the set (and not replacing it). Jackknife is often 
used to reduce the bias of an estimator, and other applications include 
finding the standard error and confidence interval of an estimator.
© CFA Institute. For candidate use only. Not for distribution.
Sampling Methods 197
SAMPLING METHODS
compare and contrast simple random, stratified random, cluster, 
convenience, and judgmental sampling and their implications for 
sampling error in an investment problem
We take samples for one of two reasons. In some cases, we cannot possibly examine 
every member of the population. In other cases, examining every member of the 
population would not be economically efficient. Thus, savings of time and money 
are two primary factors that cause an analyst to use sampling to answer a question 
about a population.
There are two types of sampling methods: probability sampling and non-probability 
sampling. Probability sampling gives every member of the population an equal chance 
of being selected. Hence it can create a sample that is representative of the popula -
tion. In contrast, non-probability sampling depends on factors other than probabil -
ity considerations, such as a sampler’s judgment or the convenience to access data. 
Consequently, there is a significant risk that non-probability sampling might generate 
a non-representative sample. In general, all else being equal, probability sampling can 
yield more accuracy and reliability compared with non-probability sampling.
We first focus on probability sampling, particularly the widely used simple ran-
dom sampling  and stratified random sampling . We then turn our attention to 
non-probability sampling.
Simple Random Sampling
Suppose a wireless equipment analyst wants to know how much major customers will 
spend on average for equipment during the coming year. One strategy is to survey 
the population of wireless equipment customers and inquire what their purchasing 
plans are. Surveying all companies, however, would be very costly in terms of time 
and money.
Alternatively, the analyst can collect a representative sample of companies and 
survey them about upcoming wireless equipment expenditures. In this case, the analyst 
will compute the sample mean expenditure,    
_
 X   , a st atistic. This strategy has a substantial 
advantage over polling the whole population because it can be accomplished more 
quickly and at lower cost.
Sampling, however, introduces error. The error arises because not all of the com -
panies in the population are surveyed. The analyst who decides to sample is trading 
time and money for sampling error.
When an analyst chooses to sample, they must formulate a sampling plan. A 
sampling plan is the set of rules used to select a sample. The basic type of sample 
from which we can draw statistically sound conclusions about a population is the 
simple random sample.
A simple random sample  is a subset of a larger population created in such a 
way that each element of the population has an equal probability of being selected 
to the subset.
The procedure of drawing a sample to satisfy the definition of a simple random 
sample is called simple random sampling . Simple random sampling is particularly 
useful when data in the population is homogeneous—that is, the characteristics of 
the data or observations (e.g., size or region) are broadly similar. If this condition is 
not satisfied, other types of sampling may be more appropriate.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 Estima tion and Inference198
Systematic sampling can be used when we cannot code (or even identify) all the 
members of a population. With systematic sampling, we select every kth member 
until we have a sample of the desired size. The sample that results from this procedure 
should be approximately random.
Suppose the wireless equipment analyst polls a random sample of wireless equip -
ment customers to determine the average equipment expenditure. The derived sample 
mean will provide the analyst with an estimate of the population mean expenditure. 
The mean obtained from the sample this way will differ from the population mean 
that we are trying to estimate. It is subject to error. An important part of this error is 
known as sampling error, which comes from sampling variation and occurs because 
we have data on only a subset of the population.
Sampling error is the difference between the observed value of a statistic and 
the quantity it is intended to estimate as a result of using subsets of the population.
A random sample reflects the properties of the population in an unbiased way, 
and sample statistics, such as the sample mean, computed on the basis of a random 
sample are valid estimates of the underlying population parameters. Thus a sample 
statistic is a random variable. In other words, not only do the original data from the 
population have a distribution but so does the sample statistic. This distribution is 
the statistic’s sampling distribution.
Sampling distribution of a statistic is the distribution of all the distinct possible 
values that the statistic can assume when computed from samples of the same size 
randomly drawn from the same population.
In the case of the sample mean, for example, we re`,
    },
    {
      number: 8,
      title: `Hypothesis Testing`,
      pages: 28,
      los: `Mastery The candidate should be able to:
explain hypothesis testing and its components, including statistical
significance, Type I and Type II errors, and the power of a test.
construct hypothesis tests and determine their statistical
significance, the associated Type I and Type II errors, and power of
the test given a significance level
compare and contrast parametric and nonparametric tests, and
describe situations where each is the more appropriate type of test`,
      intro: `Hypothesis testing is covered extensively in the pre-read. This learning module builds 
on that coverage and assumes a functional understanding of the topic gained there 
or elsewhere.
Lesson 1 summaries the hypothesis testing process by exemplifying its use in 
finance and investment management. Lesson 2 brings forward the impact of errors 
in the hypothesis testing process. Lesson 3 introduces nonparametric tests and their 
applications in investment management.`,
      overview: `■ The steps in testing a hypothesis are as follows:
1. State the hypotheses.
2. Identify the appropriate test statistic and its probability 
distribution.
3. Specify the significance level.
4. State the decision rule.
5. Collect the data and calculate the test statistic.
6. Make a decision.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The steps in testing a hypothesis are as follows:
1. State the hypotheses.
2. Identify the appropriate test statistic and its probability 
distribution.
3. Specify the significance level.
4. State the decision rule.
5. Collect the data and calculate the test statistic.
6. Make a decision.
1
LEARNING MODULE
8
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 8 H ypothesis Testing218
 ■ A test statistic is a quantity, calculated using a sample, whose value is 
the basis for deciding whether to reject or not reject the null hypoth -
esis. We compare the computed value of the test statistic to a critical 
value for the same test statistic to determine whether to reject or not 
reject the null hypothesis.
 ■ In reaching a statistical decision, two possible errors can be made: 
reject a true null hypothesis (a Type I error, or false positive), or fail to 
reject a false null hypothesis (a Type II error, or false negative).
 ■ The level of significance of a test is the probability of a Type I error 
when conducting a hypothesis test. The standard approach to hypoth -
esis testing involves specifying a level of significance (i.e., the probabil -
ity of a Type I error). The complement of the level of significance is the 
confidence level.
 ■ For hypothesis tests concerning the population mean of a normally 
distributed population with an unknown variance, the theoretically 
correct test statistic is the t-statistic.
 ■ To test whether the observed difference between two means is statisti -
cally significant, the analyst must first decide whether the samples are 
independent or dependent (related). If the samples are independent, a 
test concerning differences between means is employed. If the samples 
are dependent, a test of mean differences (paired comparisons test) is 
employed.
 ■ To determine whether the difference between two population means 
from normally distributed populations with unknown but equal 
variances, the appropriate test is a t-test based on pooling the obser -
vations of the two samples to estimate the common but unknown 
variance. This test is based on an assumption of independent samples.
 ■ In tests concerning two means based on two samples that are not 
independent, the data are often arranged in paired observations and 
a test of mean differences (a paired comparisons test) is conducted. 
When the samples are from normally distributed populations with 
unknown variances, the appropriate test statistic is t-distributed.
 ■ In tests concerning the variance of a single normally distributed pop -
ulation, the test statistic is chi-square with n − 1 degrees of freedom, 
where n is sample size.
 ■ For tests concerning differences between the variances of two nor -
mally distributed populations based on two random, independent 
samples, the appropriate test statistic is based on an F-test (the ratio of 
the sample variances). The degrees of freedom for this F-test are n1 − 
1 and n2 − 1, where n1 corresponds to the number of observations in 
the calculation of the numerator, and n2 is the number of observations 
in the calculation of the denominator of the F-statistic.
 ■ A parametric test is a hypothesis test concerning a population param -
eter, or a hypothesis test based on specific distributional assump -
tions. In contrast, a nonparametric test either is not concerned with a 
parameter or makes minimal assumptions about the population from 
which the sample was taken.
 ■ A nonparametric test is primarily used when data do not meet distri -
butional assumptions, when there are outliers, when data are given in 
ranks, or when the hypothesis we are addressing does not concern a 
parameter.
© CFA Institute. For candidate use only. Not for distribution.
Hypothesis Tests for Finance 219
HYPOTHESIS TESTS FOR FINANCE
explain hypothesis testing and its components, including statistical 
significance, Type I and Type II errors, and the power of a test.
We use hypothesis testing to make decisions using data. Hypothesis testing is part 
of statistical inference, the process of making judgments about a larger group (a pop -
ulation) based on a smaller group of observations (a sample).
In hypothesis testing, we test to determine whether a sample statistic is likely to 
come from a population with the hypothesized value of the population parameter.
The concepts and tools of hypothesis testing provide an objective means to gauge 
whether the available evidence supports the hypothesis. After applying a statistical 
test, we should have a clearer idea of the probability that a hypothesis is true or not, 
although our conclusion always stops short of certainty.
The main focus of this lesson is on the framework of hypothesis testing and tests 
concerning mean and variance, two measures frequently used in investments.
The Process of Hypothesis Testing
Hypothesis testing is part of the branch of statistics known as statistical inference. In 
statistical inference, there is estimation and hypothesis testing. Estimation involves 
point estimates and interval estimates. Consider a sample mean, which is a point 
estimate, that we can use to form a confidence interval. In hypothesis testing, the 
focus is examining how a sample statistic informs us about a population parameter. 
A hypothesis is a statement about one or more populations that we test using sample 
statistics.
The process of hypothesis testing begins with the formulation of a theory to orga-
nize and explain observations. We judge the correctness of the theory by its ability to 
make accurate predictions—for example, to predict the results of new observations. If 
the predictions are correct, we continue to maintain the theory as a possibly correct 
explanation of our observations. Risk plays a role in the outcomes of observations 
in finance, so we can only try to make unbiased, probability-based judgments about 
whether the new data support the predictions. Statistical hypothesis testing fills that 
key role of testing hypotheses when there is uncertainty. When an analyst correctly 
formulates the question into a testable hypothesis and carries out a test of hypotheses, 
the use of well-established scientific methods supports the conclusions and decisions 
made on the basis of this test.
We organize this introduction to hypothesis testing around the six steps presented 
in Exhibit 1, which illustrate the standard approach to hypothesis testing.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 8 H ypothesis Testing220
Exhibit 1: The Process of Hypothesis Testing
Step 1: State the hypotheses
Step 2: Identify the appropriate test statistic
Step 3: Specify the level of significance
Step 4: State the decision rule
Step 5: Collect data and calculate the test statistic
Step 6: Make a decision
Stating the Hypotheses
For each hypothesis test, we always state two hypotheses: the null hypothesis (or null), 
designated H0, and the alternative hypothesis, designated Ha. The null hypothesis is 
a statement concerning a population parameter or parameters considered to be true 
unless the sample we use to conduct the hypothesis test gives convincing evidence 
that the null hypothesis is false. In fact, the null hypothesis is what we want to reject. 
If there is sufficient evidence to indicate that the null hypothesis is not true, we reject 
it in favor of the alternative hypothesis.
Importantly, the null and alternative hypotheses are stated in terms of population 
parameters, and we use sample statistics to test these hypotheses.
Second, the null and alternative hypotheses must be mutually exclusive and col -
lectively exhaustive; in other words, all possible values are contained in either the null 
or the alternative hypothesis.
Identify the Appropriate Test Statistic and Distribution
A test statistic is a value calculated on the basis of a sample that, when used in conjunc-
tion with a decision rule, is the basis for d`,
    },
    {
      number: 9,
      title: `Parametric and Non-Parametric Tests of Independence`,
      pages: 20,
      los: `Mastery The candidate should be able to:
explain parametric and nonparametric tests of the hypothesis that
the population correlation coefficient equals zero, and determine
whether the hypothesis is rejected at a given level of significance
explain tests of independence based on contingency table data`,
      intro: `In many contexts in investments, we want to assess the strength of the linear rela -
tionship between two variables—that is, we want to evaluate the correlation between 
them. A significance test of a correlation coefficient allows us to assess whether the 
relationship between two random variables is the result of chance. Lesson 1 covers 
a parametric and a non-parametric approach to testing the correlation between two 
variables. If we decide that the relationship does not result from chance, then we can 
use this information in modeling or forecasting using regression models or machine 
learning covered in later Learning Modules.
When faced with categorical or discrete data, however, we cannot use the meth -
ods discussed in the first lesson to test whether the classifications of such data are 
independent. If we want to test whether there is a relationship between categorical 
or discreet data, we can perform a test of independence using a nonparametric test 
statistic. The second lesson covers the use of contingency tables in implementing this 
non-parametric test.`,
      overview: `■ There are three ways to formulate hypotheses. Let θ indicate 
the population parameters:
1. Two-sided alternative: H0: θ = θ 0 versus Ha: θ ≠ θ 0
2. One-sided alternative (right side): H0: θ ≤ θ 0 versus Ha: θ > θ 0
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ There are three ways to formulate hypotheses. Let θ indicate 
the population parameters:
1. Two-sided alternative: H0: θ = θ 0 versus Ha: θ ≠ θ 0
2. One-sided alternative (right side): H0: θ ≤ θ 0 versus Ha: θ > θ 0
1
LEARNING MODULE
9
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 9 P arametric and Non-Parametric Tests of Independence246
3. One-sided alternative (left side): H0: θ ≥ θ 0 versus Ha: θ < θ 0
where θ0 is a hypothesized value of the population parameter and θ is 
the true value of the population parameter.
 ■ A parametric test is a hypothesis test concerning a population param -
eter or a hypothesis test based on specific distributional assumptions. 
In contrast, a nonparametric test either is not concerned with a 
parameter or makes mini  mal a ssumptions about the population from 
which the sample comes.
 ■ A nonparametric test is primarily used when data do not meet distri -
butional assumptions, when there are outliers, when data are given in 
ranks, or when the hypothesis we are addressing does not concern a 
parameter.
 ■ In tests concerning correlation, we use a t-statistic to test whether a 
popula tion c orrelation coefficient is different from zero. If we have n 
observations for two variables, this test statistic has a t-distribution 
with n − 2 degrees of freedom.
 ■ The Spearman rank correlation coefficient is calculated on the ranks of 
two variables within their respective samples.
 ■ A chi-square distributed test statistic is used to test for independence 
of two categorical variables. This nonparametric test compares actual 
frequencies with those expected on the basis of independence. This 
test statistic has degrees of freedom of ( r − 1)( c − 2), where r is the 
number of categories for the first variable and c is the number of cate -
gories of the second variable.
TESTS CONCERNING CORRELATION
explain parametric and nonparametric tests of the hypothesis that 
the population correlation coefficient equals zero, and determine 
whether the hypothesis is rejected at a given level of significance 
The most common hypotheses concerning correlation occur when comparing the 
population correlation coefficient with zero because we often ask whether a rela -
tionship exists, which implies a null of the correlation coefficient equal to zero (i.e., 
no relationship). Hypotheses concerning the population correlation coefficient may 
be two- or one-sided, as we have seen in other tests. Let ρ represent the population 
correlation coefficient. The possible hypotheses are as follows:
 Two sided: H0: ρ = 0 versus Ha: ρ ≠ 0
 One sided (right side): H0: ρ ≤ 0 versus Ha: ρ > 0
 One sided (left side): H0: ρ ≥ 0 versus Ha: ρ < 0
We use the sample correlation to test these hypotheses on the population correlation.
2
© CFA Institute. For candidate use only. Not for distribution.
Tests Concerning Correlation 247
Parametric Test of a Correlation
The parametric pairwise correlation coefficient is often referred to as Pearson cor-
relation, the bivariate correlation, or simply the correlation. Our focus is on the 
testing of the correlation and not the actual calculation of this statistic, but it helps 
distinguish this correlation from the nonparametric correlation if we look at the 
formula for the sample correlation. Consider two variables, X and Y. The sample 
correlation, rXY, is as follows:
   r  XY   =    
 s  XY  
 _  s  X    s  Y    ,  (1)
where sXY is the sample covariance between the X and Y variables, sX is the standard 
deviation of the X variable, and sY is the standard deviation of the Y variable. We often 
drop the subscript to represent the correlation as simply r.
Therefore, you can see from this formula that each observation is compared with 
its respective variable mean and that, because of the covariance, it matters how much 
each observation differs from its respective variable mean. Note that the covariance 
drives the sign of the correlation. 
If the two variables are normally distributed, we can test to determine whether 
the null hypothesis (H
0: ρ = 0) should be rejected using the sample correlation, r. The 
formula for the t-test is as follows:
  t =   r  √ 
_
 n − 2   _ 
 √ 
_
 1 −  r   2   
  .  (2)
This test statistic is t-distributed with n − 2 degrees of freedom. One practical obser -
vation concerning Equation 2  is that the magnitude of r needed to reject the null 
hypothesis decreases as sample size n increases, for two reasons. First, as n increases, 
the number of degrees of freedom increases and the absolute value of the critical value 
of the t-statistic decreases. Second, the absolute value of the numerator increases with 
larger n, resulting in a larger magnitude of the calculated t-statistic. For example, with 
sample size n = 12, r = 0.35 results in a t-statistic of 1.182, which is not different from 
zero at the 0.05 level ( tα/2 = ±2.228). With a sample size of n = 32, the same sample 
correlation, r = 0.35, yields a t-statistic of 2.046, which is just significant at the 0.05 
level (tα/2 = ±2.042).
Another way to make this point is that when sampling from the same popula -
tion, a false null hypothesis is more likely to be rejected (i.e., the power of the test 
increases) as we increase the sample size, all else equal, because a higher number of 
observations increases the numerator of the test statistic. We show this in Exhibit 1 
for three different sample correlation coefficients, with the corresponding calculated 
t-statistics and significance at the 5 percent level for a two-sided alternative hypoth -
esis. As the sample size increases, significance is more likely to be indicated, but the 
rate of achieving this significance depends on the sample correlation coefficient; the 
higher the sample correlation, the faster significance is achieved when increasing the 
sample size. As the sample sizes increase as ever-larger datasets are examined, the null 
hypothesis is almost always rejected and other tools of data analysis must be applied.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 9 P arametric and Non-Parametric Tests of Independence248
Exhibit 1: Calculated Test Statistics for Different Sample Sizes and Sample 
Correlations with a 5 Percent Level of Significance
Calculated t-Statistic
8 8
6 6
7 7
5 5
4 4
3 3
1 1
2 2
0 0
3 3 12 12 21 21 30 30 39 39 48 48 57 57 66 66 75 75 84 84 93 93
Sample Size
t-Statistic for Correlation = 0.2
t-Statistic for Correlation = 0.4
t-Statistic for Correlation = 0.6
Significant Correlation = 0.2
Significant Correlation = 0.4
Significant Correlation = 0.6
EXAMPLE 1
Examining the Relationship between Returns on 
Investment One and Investment Two
An analyst is examining the annual returns for Investment One and Investment 
Two over 33 years, as displayed in Exhibit 2.
 
Exhibit 2: Returns for Investments One and Two over 33 Y ears
 
Annual Return (%)
12 12
10 10
8 8
6 6
2 2
0 0
4 4
–2 –2
1 1 33 335 53 3 7 7 9 9 11 11 13 13 15 15 19 19 21 21 23 2325 25 29 2931 3117 17 27 27
Year
Investment One Investment Two
Although this time series plot provides some useful information, the analyst is 
most interested in quantifying how the returns of these two series are related, so 
she calculates the correlation coefficient, equal to 0.43051, between these series.
1. Is t here a significant positive correlation between these two return series if 
she uses a 1 percent level of significance?
Solution:
© CFA Institute. For candidate use only. Not for distribution.
Tests Concerning Correlation 249
 
Step 1 State the hypotheses.   H  0   :  ρ ≤ 0 versus    H  a   :  ρ > 0  
Step 2 Identify the appropriate test 
statistic. 
 t =   r  √ 
_
 n −  2   _ 
 √ 
_
 1 −   r   2   
   
Step 3 Specify the level of 
significance.
1%
Step 4 State the decision rule. With 33 − 2 = 31 degrees of freedom 
and a one-sided test with a 1% level 
of significance, the critical value is 
2.45282.  
We reject the n`,
    },
    {
      number: 10,
      title: `Simple Linear Regression`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe a simple linear regression model, how the least squares
criterion is used to estimate regression coefficients, and the
interpretation of these coefficients
explain the assumptions underlying the simple linear regression
model, and describe how residuals and residual plots indicate if these
assumptions may have been violated
calculate and interpret measures of fit and formulate and evaluate
tests of fit and of regression coefficients in a simple linear regression
describe the use of analysis of variance (ANOVA) in regression
analysis, interpret ANOVA results, and calculate and interpret the
standard error of estimate in a simple linear regression`,
      intro: `describe a simple linear regression model, how the least squares 
criterion is used to estimate regression coefficients, and the 
interpretation of these coefficients
Financial analysts often need to examine whether a variable is useful for explaining 
another variable. For example, the analyst may want to know whether earnings or 
cash flow growth help explain a company’s market value. Regression analysis  is a 
tool for examining this type of issue.
1`,
      overview: `■ Simple linear regression is a mathematical process for deter -
mining how the variation in one variable can explain the varia -
tion in another variable.
 ■ The variable we wish to explain is called the dependent variable, and 
the variable that we use to explain the dependent variable is called the 
independent variable.
 ■ Simple linear regression uses the ordinary least squares approach to 
calculate the slope and intercept parameters that characterize a linear 
relationship between the two variables.
 ■ Simple linear regression requires that we make four assumptions: lin -
earity, homoskedasticity, independence, and normality.
 ■ Linearity requires that the regression residuals be random and that the 
independent variable not be random. Homoskedasticity, which refers 
to variance being constant across observations, cannot be assumed 
when we see residuals clustering in multiple groups because the clus -
tering indicates multiple regimes with different variances within our 
time period.
 ■ Independence means that the X-Y pairs are uncorrelated; a pattern in 
a plot of the residuals (e.g., seasonality) suggests that there is autocor -
relation across observations and that we cannot assume independence. 
Normality means that residuals must be normally distributed and does 
not require that the data itself be normally distributed. Non-normality 
is of particular concern for small sample sizes, but for large sample 
sizes, the central limit theorem tells us that we may be able to relax the 
normality requirement.
 ■ The total variation in the dependent variable, called the sum of squares 
total (SST), can be decomposed into two parts: the explained varia -
tion, called the sum of squares regression (SSR), and the unexplained 
variation, called the sum of squares error (SSE).
 ■ There are several ways to measure a regression model’s goodness of fit. 
These include the coefficient of determination, the F-statistic for the 
test of fit, and the standard error of the r`,
      body: `LEARNING MODULE OVERVIEW
 ■ Simple linear regression is a mathematical process for deter -
mining how the variation in one variable can explain the varia -
tion in another variable.
 ■ The variable we wish to explain is called the dependent variable, and 
the variable that we use to explain the dependent variable is called the 
independent variable.
 ■ Simple linear regression uses the ordinary least squares approach to 
calculate the slope and intercept parameters that characterize a linear 
relationship between the two variables.
 ■ Simple linear regression requires that we make four assumptions: lin -
earity, homoskedasticity, independence, and normality.
 ■ Linearity requires that the regression residuals be random and that the 
independent variable not be random. Homoskedasticity, which refers 
to variance being constant across observations, cannot be assumed 
when we see residuals clustering in multiple groups because the clus -
tering indicates multiple regimes with different variances within our 
time period.
 ■ Independence means that the X-Y pairs are uncorrelated; a pattern in 
a plot of the residuals (e.g., seasonality) suggests that there is autocor -
relation across observations and that we cannot assume independence. 
Normality means that residuals must be normally distributed and does 
not require that the data itself be normally distributed. Non-normality 
is of particular concern for small sample sizes, but for large sample 
sizes, the central limit theorem tells us that we may be able to relax the 
normality requirement.
 ■ The total variation in the dependent variable, called the sum of squares 
total (SST), can be decomposed into two parts: the explained varia -
tion, called the sum of squares regression (SSR), and the unexplained 
variation, called the sum of squares error (SSE).
 ■ There are several ways to measure a regression model’s goodness of fit. 
These include the coefficient of determination, the F-statistic for the 
test of fit, and the standard error of the regression.
 ■ Hypothesis testing can be used to determine, at a specified confidence 
level, whether the slope or intercept differs from zero or another spec -
ified value, or whether the slope is positive or negative. We can use 
indicator variables to determine whether our regression parameters 
differ between data points that either have or do not have a particular 
characteristic (e.g., monthly price data in cases in which only some 
months have earnings announcements).
 ■ An analysis of variance (ANOVA) table presents the sums of squares, 
degrees of freedom, mean squares, and F-statistic for a regression 
model.
© CFA Institute. For candidate use only. Not for distribution.
Estimation of the Simple Linear Regression Model 267
 ■ The standard error of the estimate is a measure of the distance 
between the observed values of the dependent variable and those pre -
dicted from the estimated regression. The smaller this value, the better 
the fit of the model.
 ■ The standard error of the forecast is used to provide an interval esti -
mate around the estimated regression line. It is necessary because the 
regression line does not describe the relationship between the depen -
dent and independent variables perfectly.
 ■ The simple linear regression model on non-linear data can be adjusted 
by using different functional forms that transform the dependent or 
independent variables.
 ■ Three common functional forms for transforming data include the log-
lin model, the lin-log model, and the log-log model.
 ■ The key to fitting the appropriate functional form of a simple linear 
regression is examining the goodness-of-fit measures—the coefficient 
of determination (R
2), the F-statistic, and the standard error of the 
estimate (se)—as well as examining whether there are patterns in the 
residuals.
ESTIMATION OF THE SIMPLE LINEAR REGRESSION 
MODEL
describe a simple linear regression model, how the least squares 
criterion is used to estimate regression coefficients, and the 
interpretation of these coefficients
Introduction to Linear Regression
Suppose an analyst is examining the return on assets (ROA) for an industry and 
observes the ROA for the six companies shown in Exhibit 1 . The average of these 
ROAs is 12.5 percent, but the range is from 4 percent to 20 percent.
Exhibit 1: Return on Assets of Selected Companies
Company ROA (%)
A 6.0
B 4.0
C 15.0
D 20.0
E 10.0
F 20.0
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 10  S imple Linear Regression268
In trying to understand why the ROAs differ among these companies, we could look at 
why the ROA of Company A differs from that of Company B, why the ROA of Company 
A differs from that of Company D, why the ROA of Company F differs from that of 
Company C, and so on, comparing each pair of ROAs. We can simplify this exercise 
by instead comparing each company’s ROA to the mean ROA of 12.5 percent. To do 
this, we look at the sum of the squared deviations of the observations from the mean 
to capture variations in ROA from their mean. Let Y represent the variable that we 
would like to explain, which in this case is the ROA. Let   Y  i    represent an observation 
of a company’s ROA, and let    
_
 Y    represent the mean ROA for the sample of size n. We 
can describe the variation of the ROAs as follows:
  Variation of  Y =  ∑ i=1  
n
      ( Y  i   −   
_
 Y  )    2 .  (1)
Our goal is to understand what drives these ROAs or, in other words, what explains 
the variation of Y. The variation of Y is often referred to as the sum of squares total 
(SST), or the total sum of squares.
We now ask whether it is possible to explain the variation of the ROA using 
another variable that also varies among the companies; note that if this other variable 
is constant or random, it would not explain the ROA differences. Suppose the analyst 
believes that the capital expenditures in the previous period, scaled by the prior period’s 
beginning property, plant, and equipment, are a driver for the ROA variable. Let us 
represent this scaled capital expenditures variable as CAPEX, as we show in Exhibit 2.
Exhibit 2: Return on Assets and Scaled Capital 
Expenditures
Company ROA (%) CAPEX (%)
A 6.0 0.7
B 4.0 0.4
C 15.0 5.0
D 20.0 10.0
E 10.0 8.0
F 20.0 12.5
Arithmetic mean 12.5 6.1
Let X represent the explanatory variable, in this case, CAPEX. Then   X  i    will represent 
an observation of our explanatory variable, and    
_
 X    will represent the mean value for 
the explanatory variable, that is, the mean of all of our CAPEX values. The variation 
of X is calculated as follows:
  Variation of  X =  ∑ i=1  
n
      ( X  i   −   
_
 X  )    2 .  (2)
We can see the relation between ROA and CAPEX in the scatter plot (or scatter -
gram) in Exhibit 3, which represents the two variables in two dimensions. Typically, 
we present the variable whose variation we want to explain along the vertical axis 
and the variable whose variation we want to use to explain that variation along the 
horizontal axis. Each point in this scatter plot represents a paired observation that 
consists of CAPEX and ROA. From a casual visual inspection, a positive relation is 
apparent between ROA and CAPEX: Companies with higher CAPEX tend to have 
a higher ROA.
© CFA Institute. For candidate use only. Not for distribution.
Estimation of the Simple Linear Regression Model 269
Exhibit 3: Scatter Plot of ROA and CAPEX
ROA (%)
25 25
20 20
15 15
10 10
5 5
0 0
001 4 144 42 2 6 6 10 108 8 12 12
CAPEX (%)
0.7, 6.0
0.4, 4.0
5.0, 15.0
8.0, 10.0
10.0, 20.0 12.5, 20.0
In the ROA example, we use the capital expenditures to explain the ROAs. We refer 
to the variable whose variation is being explained as the dependent variable, or the 
explained variable; it is typically denoted by Y. We refer to the variable whose variation 
is being used to explain the variation of the dependent variable as the independent 
variable, or the explanatory variabl`,
    },
    {
      number: 11,
      title: `Introduction to Big Data Techniques`,
      pages: 14,
      los: `Mastery The candidate should be able to:
describe aspects of “fintech” that are directly relevant for the
gathering and analyzing of financial data.
describe Big Data, artificial intelligence, and machine learning
describe applications of Big Data and Data Science to investment`,
      intro: `The meeting of finance and technology, commonly known as fintech, is changing the 
landscape of investment management. Advancements include the use of Big Data, 
artificial intelligence, and machine learning to evaluate investment opportunities, 
optimize portfolios, and mitigate risks. These developments are affecting not only 
quantitative asset managers but also fundamental asset managers who make use of 
these tools and technologies to engage in hybrid forms of investment decision making.`,
      overview: `■ Big Data is characterized by the three Vs—volume, velocity, 
and variety—and includes both traditional and non-traditional 
(or alternative) datasets. When Big Data is used for inference or pre -
diction, it is important to consider a fourth V: veracity.
 ■ Among the main sources of alternative data are data generated by 
individuals, business processes, and sensors.
 ■ Artificial intelligence (AI) computer systems are capable of performing 
tasks that traditionally required human intelligence at levels compara -
ble (or superior) to those of human beings.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Big Data is characterized by the three Vs—volume, velocity, 
and variety—and includes both traditional and non-traditional 
(or alternative) datasets. When Big Data is used for inference or pre -
diction, it is important to consider a fourth V: veracity.
 ■ Among the main sources of alternative data are data generated by 
individuals, business processes, and sensors.
 ■ Artificial intelligence (AI) computer systems are capable of performing 
tasks that traditionally required human intelligence at levels compara -
ble (or superior) to those of human beings.
1
LEARNING MODULE
11
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 11  Intr oduction to Big Data Techniques330
 ■ Machine learning (ML) seeks to extract knowledge from large 
amounts of data by “learning” from known examples and then gener -
ating structure or predictions. Simply put, ML algorithms aim to “find 
the pattern, apply the pattern. ” Main types of ML include supervised 
learning, unsupervised learning, and deep learning.
 ■ Natural language processing (NLP) is an application of text analytics 
that uses insight into the structure of human language to analyze and 
interpret text- and voice-based data.
HOW IS FINTECH USED IN QUANTITATIVE 
INVESTMENT ANALYSIS?
describe aspects of “fintech” that are directly relevant for the 
gathering and analyzing of financial data.
describe Big Data, artificial intelligence, and machine learning
In its broadest sense, the term fintech generally refers to technology-driven innova -
tion occurring in the financial services industry. For our purposes, fintech refers to 
technological innovation in the design and delivery of financial services and products. 
In common usage, fintech can also refer to companies involved in developing the new 
technologies and their applications, as well as the business sector that includes such 
companies. Many of these innovations are challenging the traditional business models 
of incumbent financial services providers.
Early forms of fintech included data processing and the automation of routine 
tasks. Systems that provided execution of decisions according to specified rules and 
instructions followed. Fintech has advanced into decision-making applications based 
on complex machine-learning logic, in which computer programs are able to “learn” 
how to complete tasks over time. In some applications, advanced computer systems 
are performing tasks at levels that far surpass human capabilities. Fintech has changed 
the financial services industry in many ways, giving rise to new systems for investment 
advice, financial planning, business lending, and payments.
Whereas fintech covers a broad range of services and applications, areas of devel -
opment that are more directly relevant to quantitative analysis in the investment 
industry include the following:
 ■ Analysis of large datasets.  In addition to growing amounts of traditional 
data, such as security prices, corporate financial statements, and economic 
indicators, massive amounts of alternative data generated from non-tradi -
tional data sources, such as social media and sensor networks, can now be 
integrated into a portfolio manager’s investment decision-making process 
and used to help generate alpha and reduce losses.
 ■ Analytical tools.  For extremely large datasets, techniques involving artifi-
cial intelligence (AI)—computer systems capable of performing tasks that 
previously required human intelligence—might be better suited to identify 
complex, non-linear relationships than traditional quantitative methods and 
statistical analysis. Advances in AI-based techniques are enabling differ -
ent data analysis approaches. For example, analysts are turning to AI to 
sort through the enormous amounts of data from company filings, annual 
2
© CFA Institute. For candidate use only. Not for distribution.
How Is Fintech used in Quantitative Investment Analysis? 331
reports, and earnings calls to determine which data are most important and 
to help uncover trends and generate insights relating to human sentiment 
and behavior.
Big Data
As noted, datasets are growing rapidly in terms of the size and diversity of data types 
that are available for analysis. The term Big Data has been in use since the late 1990s 
and refers to the vast amount of information being generated by industry, govern -
ments, individuals, and electronic devices. Big Data includes data generated from 
traditional sources—such as stock exchanges, companies, and governments—as well 
as non-traditional data types, also known as alternative data, arising from the use of 
electronic devices, social media, sensor networks, and company exhaust (information 
generated in the normal course of doing business).
Traditional data sources include corporate data in the form of annual reports, 
regulatory filings, sales and earnings figures, and conference calls with analysts. 
Traditional data also include data that are generated in the financial markets, including 
trade prices and volumes. Because the world has become increasingly connected, we 
can now obtain data from a wide range of devices, including smart phones, cameras, 
microphones, radio-frequency identification (RFID) readers, wireless sensors, and 
satellites that are now in use all over the world. As the internet and the presence 
of such networked devices have grown, the use of non-traditional data sources, or 
alternative data sources—including social media (posts, tweets, and blogs), email and 
text communications, web traffic, online news sites, and other electronic information 
sources—has risen.
The term Big Data typically refers to datasets that have the following characteristics:
 ■ Volume: The amount of data collected in files, records, and tables is very 
large, representing many millions, or even billions, of data points.
 ■ Velocity: The speed and frequency with which the data are recorded and 
transmitted has accelerated. Real-time or near-real-time data have become 
the norm in many areas.
 ■ Variety: The data are collected from many different sources and in a variety 
of formats, including structured data (e.g., SQL tables), semistructured data 
(e.g., HTML code), and unstructured data (e.g., video messages).
Features relating to big data’s volume, velocity, and variety are shown in Exhibit 1.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 11  Intr oduction to Big Data Techniques332
Exhibit 1: Big Data Characteristics: Volume, Velocity, and Variety
Data
MB
GB
TB
PB
Volume Key
Megabyte
Gigabyte
Terabyte
Petabyte
Bytes of Information
One Million
One Billion
One Trillion
One Quadrillion
Data 
Volume
Social
Video
Unstructured
Mobile
Database
Photo
Web
Audio
Table
Real Time
Near Real Time
Periodic
Batch
Data 
Velocity
MB GB TB PB
Data 
Variety
Source: Ivy Wigmore, “Definition: 3Vs (Volume, Variety and Velocity), ” WhatIs.com, last updated 
December 2020, http:// whatis .techtarget .com/ definition/ 3Vs.
Exhibit 1 shows that data volumes are growing from megabytes and gigabytes to far 
larger sizes, such as terabytes and petabytes, as more data are being generated, cap -
tured, and stored. At the same time, more data, traditional and non-traditional, are 
available on a real-time or near-real-time basis with far greater variety in data types 
than ever before.
When Big Data is used for inference or prediction, a “fourth V” comes into play— 
veracity—which relates to the credibility and reliability of different data sources. 
Determining the credibility and reliability of data sources is an important part of any 
empirical investigation. The issue of veracity becomes critically important for Big Data, 
however, because of the varied sources of these large datasets. Big Data amplifies the 
age-old challenge of disentangling quality from quantity.
Big Data can be structured, semi-structured, or unstructured data. Structured data 
items can be organiz`,
    },
    {
      number: 12,
      title: `Appendices A-E`,
      pages: 10,
      los: ``,
      intro: ``,
      overview: ``,
      body: `Appendices A-E
APPENDICES A-E
Appendix A Cumulative Probabilities for a Standard Normal Distribution
Appendix B Table of the Student’s t-Distribution (One-Tailed Probabilities) 
Appendix C Values of X2 (Degrees of Freedom, Level of Significance) 
Appendix D Table of the F-Distribution 
Appendix E Critical Values for the Durbin-Watson Statistic (α = .05)
1
LEARNING MODULE
12
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 12  Appendices A-E344
 Appendix A 
 Cumulative Probabilities for a Standard Normal Distribution  
 P(Z ≤ x) = N(x) for x ≥ 0 or P(Z ≤ z) = N(z) for z ≥ 0
 x or z  0 0.01  0.02  0.03  0.04 0.05 0.06 0.07 0.08 0.09
 0.00  0.5000  0.5040  0.5080  0.5120  0.5160  0.5199  0.5239  0.5279  0.5319  0.5359
 0.10  0.5398  0.5438  0.5478  0.5517  0.5557  0.5596  0.5636  0.5675  0.5714  0.5753
 0.20  0.5793  0.5832  0.5871  0.5910  0.5948  0.5987  0.6026  0.6064  0.6103  0.6141
 0.30  0.6179  0.6217  0.6255  0.6293  0.6331  0.6368  0.6406  0.6443  0.6480  0.6517
 0.40  0.6554  0.6591  0.6628  0.6664  0.6700  0.6736  0.6772  0.6808  0.6844  0.6879
 0.50  0.6915  0.6950  0.6985  0.7019  0.7054  0.7088  0.7123  0.7157  0.7190  0.7224
 0.60  0.7257  0.7291  0.7324  0.7357  0.7389  0.7422  0.7454  0.7486  0.7517  0.7549
 0.70  0.7580  0.7611  0.7642  0.7673  0.7704  0.7734  0.7764  0.7794  0.7823  0.7852
 0.80  0.7881  0.7910  0.7939  0.7967  0.7995  0.8023  0.8051  0.8078  0.8106  0.8133
 0.90  0.8159  0.8186  0.8212  0.8238  0.8264  0.8289  0.8315  0.8340  0.8365  0.8389
 1.00  0.8413  0.8438  0.8461  0.8485  0.8508  0.8531  0.8554  0.8577  0.8599  0.8621
 1.10  0.8643  0.8665  0.8686  0.8708  0.8729  0.8749  0.8770  0.8790  0.8810  0.8830
 1.20  0.8849  0.8869  0.8888  0.8907  0.8925  0.8944  0.8962  0.8980  0.8997  0.9015
 1.30  0.9032  0.9049  0.9066  0.9082  0.9099  0.9115  0.9131  0.9147  0.9162  0.9177
 1.40  0.9192  0.9207  0.9222  0.9236  0.9251  0.9265  0.9279  0.9292  0.9306  0.9319
 1.50  0.9332  0.9345  0.9357  0.9370  0.9382  0.9394  0.9406  0.9418  0.9429  0.9441
 1.60  0.9452  0.9463  0.9474  0.9484  0.9495  0.9505  0.9515  0.9525  0.9535  0.9545
 1.70  0.9554  0.9564  0.9573  0.9582  0.9591  0.9599  0.9608  0.9616  0.9625  0.9633
 1.80  0.9641  0.9649  0.9656  0.9664  0.9671  0.9678  0.9686  0.9693  0.9699  0.9706
 1.90  0.9713  0.9719  0.9726  0.9732  0.9738  0.9744  0.9750  0.9756  0.9761  0.9767
 2.00  0.9772  0.9778  0.9783  0.9788  0.9793  0.9798  0.9803  0.9808  0.9812  0.9817
 2.10  0.9821  0.9826  0.9830  0.9834  0.9838  0.9842  0.9846  0.9850  0.9854  0.9857
 2.20  0.9861  0.9864  0.9868  0.9871  0.9875  0.9878  0.9881  0.9884  0.9887  0.9890
 2.30  0.9893  0.9896  0.9898  0.9901  0.9904  0.9906  0.9909  0.9911  0.9913  0.9916
 2.40  0.9918  0.9920  0.9922  0.9925  0.9927  0.9929  0.9931  0.9932  0.9934  0.9936
 2.50  0.9938  0.9940  0.9941  0.9943  0.9945  0.9946  0.9948  0.9949  0.9951  0.9952
 2.60  0.9953  0.9955  0.9956  0.9957  0.9959  0.9960  0.9961  0.9962  0.9963  0.9964
 2.70  0.9965  0.9966  0.9967  0.9968  0.9969  0.9970  0.9971  0.9972  0.9973  0.9974
 2.80  0.9974  0.9975  0.9976  0.9977  0.9977  0.9978  0.9979  0.9979  0.9980  0.9981
 2.90  0.9981  0.9982  0.9982  0.9983  0.9984  0.9984  0.9985  0.9985  0.9986  0.9986
 3.00  0.9987  0.9987  0.9987  0.9988  0.9988  0.9989  0.9989  0.9989  0.9990  0.9990
 3.10  0.9990  0.9991  0.9991  0.9991  0.9992  0.9992  0.9992  0.9992  0.9993  0.9993
 3.20  0.9993  0.9993  0.9994  0.9994  0.9994  0.9994  0.9994  0.9995  0.9995  0.9995
 3.30  0.9995  0.9995  0.9995  0.9996  0.9996  0.9996  0.9996  0.9996  0.9996  0.9997
 3.40  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9997  0.9998
 3.50  0.9998  0.9998  0.9998  0.9998  0.9998  0.9998  0.9998  0.9998  0.9998  0.9998
 3.60  0.9998  0.9998  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999
 3.70  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999
 3.80  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999  0.9999
 3.90  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000
 4.00  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000  1.0000
 F or example, to  ﬁ nd the z-value le av ing 2.5/uni00A0 pe rcent of the area/probability in the upper t ail, ﬁ n d the element 0.9750 in the bo dy o f the ta ble. Read  
1.90 at  t he left end of the elemen t’ s row and 0.06 at  t he top of the elemen t’ s column, to  give 1.90/uni00A0+ 0.06/uni00A0= 1.96. Table generated with Excel.
 Quantitative Methods for Investment Analysis, Sec ond Edition, by Richard A . De Fu sco, CF A,  Dennis W.  McLea ve y,  CFA , Jerald E . Pinto, CF A,  and  
Da vid E.  Runkle, CF A.  Copyright  ©  2004 by CF A Institute.
© CFA Institute. For candidate use only. Not for distribution.
Appendices A-E 345
 Appendix A (continued) 
 Cumulative Probabilities for a Standard Normal Distribution  
 P(Z ≤ x) = N(x) for x ≤ 0 or P(Z ≤ z) = N(z) for z ≤ 0
 x or z  0 0.01  0.02  0.03  0.04  0.05 0.06 0.07 0.08 0.09
 0.0  0.5000  0.4960  0.4920  0.4880  0.4840  0.4801  0.4761  0.4721  0.4681  0.4641
 −0.10  0.4602  0.4562  0.4522  0.4483  0.4443  0.4404  0.4364  0.4325  0.4286  0.4247
 −0.20  0.4207  0.4168  0.4129  0.4090  0.4052  0.4013  0.3974  0.3936  0.3897  0.3859
 −0.30  0.3821  0.3783  0.3745  0.3707  0.3669  0.3632  0.3594  0.3557  0.3520  0.3483
 −0.40  0.3446  0.3409  0.3372  0.3336  0.3300  0.3264  0.3228  0.3192  0.3156  0.3121
 −0.50  0.3085  0.3050  0.3015  0.2981  0.2946  0.2912  0.2877  0.2843  0.2810  0.2776
 −0.60  0.2743  0.2709  0.2676  0.2643  0.2611  0.2578  0.2546  0.2514  0.2483  0.2451
 −0.70  0.2420  0.2389  0.2358  0.2327  0.2296  0.2266  0.2236  0.2206  0.2177  0.2148
 −0.80  0.2119  0.2090  0.2061  0.2033  0.2005  0.1977  0.1949  0.1922  0.1894  0.1867
 −0.90  0.1841  0.1814  0.1788  0.1762  0.1736  0.1711  0.1685  0.1660  0.1635  0.1611
 −1.00  0.1587  0.1562  0.1539  0.1515  0.1492  0.1469  0.1446  0.1423  0.1401  0.1379
 −1.10  0.1357  0.1335  0.1314  0.1292  0.1271  0.1251  0.1230  0.1210  0.1190  0.1170
 −1.20  0.1151  0.1131  0.1112  0.1093  0.1075  0.1056  0.1038  0.1020  0.1003  0.0985
 −1.30  0.0968  0.0951  0.0934  0.0918  0.0901  0.0885  0.0869  0.0853  0.0838  0.0823
 −1.40  0.0808  0.0793  0.0778  0.0764  0.0749  0.0735  0.0721  0.0708  0.0694  0.0681
 −1.50  0.0668  0.0655  0.0643  0.0630  0.0618  0.0606  0.0594  0.0582  0.0571  0.0559
 −1.60  0.0548  0.0537  0.0526  0.0516  0.0505  0.0495  0.0485  0.0475  0.0465  0.0455
 −1.70  0.0446  0.0436  0.0427  0.0418  0.0409  0.0401  0.0392  0.0384  0.0375  0.0367
 −1.80  0.0359  0.0351  0.0344  0.0336  0.0329  0.0322  0.0314  0.0307  0.0301  0.0294
 −1.90  0.0287  0.0281  0.0274  0.0268  0.0262  0.0256  0.0250  0.0244  0.0239  0.0233
 −2.00  0.0228  0.0222  0.0217  0.0212  0.0207  0.0202  0.0197  0.0192  0.0188  0.0183
 −2.10  0.0179  0.0174  0.0170  0.0166  0.0162  0.0158  0.0154  0.0150  0.0146  0.0143
 −2.20  0.0139  0.0136  0.0132  0.0129  0.0125  0.0122  0.0119  0.0116  0.0113  0.0110
 −2.30  0.0107  0.0104  0.0102  0.0099  0.0096  0.0094  0.0091  0.0089  0.0087  0.0084
 −2.40  0.0082  0.0080  0.0078  0.0075  0.0073  0.0071  0.0069  0.0068  0.0066  0.0064
 −2.50  0.0062  0.0060  0.0059  0.0057  0.0055  0.0054  0.0052  0.0051  0.0049  0.0048
 −2.60  0.0047  0.0045  0.0044  0.0043  0.0041  0.0040  0.0039  0.0038  0.0037  0.0036
 −2.70  0.0035  0.0034  0.0033  0.0032  0.0031  0.0030  0.0029  0.0028  0.0027  0.0026
 −2.80  0.0026  0.0025  0.0024  0.0023  0.0023  0.0022  0.0021  0.0021  0.0020  0.0019
 −2.90  0.0019  0.0018  0.0018  0.0017  0.0016  0.0016  0.0015  0.0015  0.0014  0.0014
 −3.00  0.0013  0.0013  0.0013  0.0012  0.0012  0.0011  0.0011  0.0011  0.0010  0.0010
 −3.10  0.0010  0.0009  0.0009  0.0009  0.0008  0.0008  0.0008  0.0008  0.0007  0.0007
 −3.20  0.0007  0.0007  0.0006  0.0006  0.0006  0.0006  0.0006  0.0005  0.0005  0.0005
 −3.30  0.0005  0.0005  0.0005  0.0004  0.0004  0.0004  0.0004  0.0004  0.0004  0.0003
 −3`,
    },
  ],
  econ: [
    {
      number: 1,
      title: `The Firm and Market Structures`,
      pages: 40,
      los: `Mastery The candidate should be able to:
determine and interpret breakeven and shutdown points of
production, as well as how economies and diseconomies of scale
affect costs under perfect and imperfect competition
describe characteristics of perfect competition, monopolistic
competition, oligopoly, and pure monopoly
explain supply and demand relationships under monopolistic
competition, including the optimal price and output for firms as well
explain supply and demand relationships under oligopoly, including
the optimal price and output for firms as well as pricing strategy
identify the type of market structure within which a firm operates
and describe the use and limitations of concentration measures`,
      intro: `This learning module addresses several important concepts that extend the basic 
market model of demand and supply to the assessment of a firm’s breakeven and 
shutdown points of production. Demand concepts covered include own-price elas -
ticity of demand, cross-price elasticity of demand, and income elasticity of demand. 
Supply concepts covered include total, average, and marginal product of labor; total, 
variable, and marginal cost of labor; and total and marginal revenue. These concepts 
are used to calculate the breakeven and shutdown points of production.
1`,
      overview: `■ Firms under conditions of perfect competition have no pricing 
power and, therefore, face a perfectly horizontal demand curve 
at the market price. For firms under conditions of perfect competition, 
price is identical to marginal revenue (MR).
 ■ Firms under conditions of imperfect competition face a negatively 
sloped demand curve and have pricing power. For firms under condi-
tions of imperfect competition, MR is less than price.
 ■ Economic profit equals total revenue (TR) minus total economic cost, 
whereas accounting profit equals TR minus total accounting cost.
 ■ Economic cost considers the total opportunity cost of all factors of 
production.
 ■ Opportunity cost is the next best alternative use of a resource forgone 
in making a decision.
 ■ Maximum economic profit requires that (1) MR equals marginal cost 
(MC) and (2) MC not be falling with output.
 ■ The breakeven point occurs when TR equals total cost (TC), otherwise 
stated as the output quantity at which average total cost (ATC) equals 
price.
 ■ Shutdown occurs when a firm is better off not operating than continu-
ing to operate.
 ■ If all fixed costs are sunk costs, then shutdown occurs when the 
market price falls below the minimum average variable cost. After 
shutdown, the firm incurs only fixed costs and loses less money than it 
would operating at a price that does not cover variable costs.
 ■ In the short run, it may be rational for a firm to continue to operate 
while earning negative economic profit if some unavoidable fixed costs 
are covered.
 ■ Economies of scale is defined as decreasing long-run cost per unit as 
output increases. Diseconomies of scale is defined as increasing long-
run cost per unit as output increases.
 ■ Long-run ATC is the cost of production per unit of output under con-
ditions in which all inputs are variable.
 ■ Specialization efficiencies and bargaining power in input price can 
lead to economies of scale.
 ■ Bureaucratic and communication breakdowns and bottle`,
      body: `LEARNING MODULE OVERVIEW
 ■ Firms under conditions of perfect competition have no pricing 
power and, therefore, face a perfectly horizontal demand curve 
at the market price. For firms under conditions of perfect competition, 
price is identical to marginal revenue (MR).
 ■ Firms under conditions of imperfect competition face a negatively 
sloped demand curve and have pricing power. For firms under condi-
tions of imperfect competition, MR is less than price.
 ■ Economic profit equals total revenue (TR) minus total economic cost, 
whereas accounting profit equals TR minus total accounting cost.
 ■ Economic cost considers the total opportunity cost of all factors of 
production.
 ■ Opportunity cost is the next best alternative use of a resource forgone 
in making a decision.
 ■ Maximum economic profit requires that (1) MR equals marginal cost 
(MC) and (2) MC not be falling with output.
 ■ The breakeven point occurs when TR equals total cost (TC), otherwise 
stated as the output quantity at which average total cost (ATC) equals 
price.
 ■ Shutdown occurs when a firm is better off not operating than continu-
ing to operate.
 ■ If all fixed costs are sunk costs, then shutdown occurs when the 
market price falls below the minimum average variable cost. After 
shutdown, the firm incurs only fixed costs and loses less money than it 
would operating at a price that does not cover variable costs.
 ■ In the short run, it may be rational for a firm to continue to operate 
while earning negative economic profit if some unavoidable fixed costs 
are covered.
 ■ Economies of scale is defined as decreasing long-run cost per unit as 
output increases. Diseconomies of scale is defined as increasing long-
run cost per unit as output increases.
 ■ Long-run ATC is the cost of production per unit of output under con-
ditions in which all inputs are variable.
 ■ Specialization efficiencies and bargaining power in input price can 
lead to economies of scale.
 ■ Bureaucratic and communication breakdowns and bottlenecks that 
raise input prices can lead to diseconomies of scale.
 ■ The minimum point on the long-run ATC curve defines the minimum 
efficient scale for the firm.
 ■ Economic market structures can be grouped into four categories: per -
fect competition, monopolistic competition, oligopoly, and monopoly.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 5
 ■ The categories of economic market structures differ because of the 
following characteristics: The number of producers is many in perfect 
and monopolistic competition, few in oligopoly, and one in monopoly. 
The degree of product differentiation, the pricing power of the pro-
ducer, the barriers to entry of new producers, and the level of non-
price competition (e.g., advertising) are all low in perfect competition, 
moderate in monopolistic competition, high in oligopoly, and gener -
ally highest in monopoly.
 ■ A financial analyst must understand the characteristics of market 
structures to better forecast a firm’s future profit stream.
 ■ The optimal MR equals MC. Only in perfect competition, however, 
does the MR equal price. In the remaining structures, price generally 
exceeds MR because a firm can sell more units only by reducing the 
per unit price.
 ■ The quantity sold is highest in perfect competition. The price in 
perfect competition is usually lowest, but this depends on factors 
such as demand elasticity and increasing returns to scale (which may 
reduce the producer’s MC). Monopolists, oligopolists, and producers 
in monopolistic competition attempt to differentiate their products so 
that they can charge higher prices.
 ■ Typically, monopolists sell a smaller quantity at a higher price. 
Investors may benefit from being shareholders of monopolistic firms 
that have large margins and substantial positive cash flows.
 ■ In perfect competition, firms do not earn economic profit. The market 
will compensate for the rental of capital and of management ser -
vices, but the lack of pricing power implies that there will be no extra 
margins.
 ■ In the short run, firms in any market structure can have economic 
profits, the more competitive a market is and the lower the barriers 
to entry, the faster the extra profits will fade. In the long run, new 
entrants shrink margins and push the least efficient firms out of the 
market.
 ■ Oligopoly is characterized by the importance of strategic behavior. 
Firms can change the price, quantity, quality, and advertisement of the 
product to gain an advantage over their competitors. Several types of 
equilibrium (e.g., Nash, Cournot, kinked demand curve) may occur 
that affect the likelihood of each of the incumbents (and potential 
entrants in the long run) having economic profits. Price wars may be 
started to force weaker competitors to abandon the market.
 ■ Measuring market power is complicated. Ideally, econometric esti-
mates of the elasticity of demand and supply should be computed. 
However, because of the lack of reliable data and the fact that elastic -
ity changes over time (so that past data may not apply to the current 
situation), regulators and economists often use simpler measures. The 
concentration ratio is simple, but the Herfindahl-Hirschman index 
(HHI), with a little more computation required, often produces a bet -
ter figure for decision making.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 T he Firm and Market Structures6
PROFIT MAXIMIZATION: PRODUCTION BREAKEVEN, 
SHUTDOWN AND ECONOMIES OF SCALE
determine and interpret breakeven and shutdown points of 
production, as well as how economies and diseconomies of scale 
affect costs under perfect and imperfect competition 
Firms generally can be classified as operating in either a perfectly competitive or an 
imperfectly competitive environment. The difference between the two manifests in the 
slope of the demand curve facing the firm. If the environment of the firm is perfectly 
competitive, it must take the market price of its output as given, so it faces a perfectly 
elastic, horizontal demand curve. In this case, the firm’s marginal revenue (MR) and 
the price of its product are identical. Additionally, the firm’s average revenue (AR), 
or revenue per unit, is also equal to price per unit. A firm that faces a negatively 
sloped demand curve, however, must lower its price to sell an additional unit, so its 
MR is less than price (P ).
These characteristics of MR are also applicable to the total revenue (TR) func -
tions. Under conditions of perfect competition, TR (as always) is equal to price times 
quantity: TR = (P )(Q). But under conditions of perfect competition, price is dictated 
by the market; the firm has no control over price. As the firm sells one more unit, its 
TR rises by the exact amount of price per unit.
Under conditions of imperfect competition, price is a variable under the firm’s 
control, and therefore price is a function of quantity: P  = f(Q ), and TR = f(Q ) × Q . 
For simplicity, suppose the firm is monopolistic and faces the market demand curve, 
which we will assume is linear and negatively sloped. Because the monopolist is the 
only seller, its TR is identical to the total expenditure of all buyers in the market. When 
price is reduced and quantity sold increases in this environment, a decrease in price 
initially increases total expenditure by buyers and TR to the firm because the decrease 
in price is outweighed by the increase in units sold. But as price continues to fall, the 
decrease in price overshadows the increase in quantity, and total expenditure (revenue) 
falls. We can now depict the demand and TR functions for firms under conditions of 
perfect and imperfect competition, as shown in Exhibit 1.
2
© CFA Institute. For candidate use only. Not for distribution.
Profit Maximization: Production Breakeven, Shutdown and Economies of Scale 7
Exhibit 1: Demand and Total Revenue Functions for Fir`,
    },
    {
      number: 2,
      title: `Understanding Business Cycles`,
      pages: 30,
      los: `Mastery The candidate should be able to:
describe the business cycle and its phases
describe credit cycles
describe how resource use, consumer and business activity, housing
sector activity, and external trade sector activity vary over the
business cycle and describe their measurement using economic`,
      intro: `A typical economy’s output of goods and services fluctuates around its long-term 
path. We now turn our attention to those recurring, cyclical fluctuations in economic 
output. Some of the factors that influence short-term changes in the economy—such 
as changes in population, technology, and capital—are the same as those that affect 
long-term sustainable economic growth. But forces that cause shifts in aggregate 
demand and aggregate supply curves—such as expectations, political developments, 
natural disasters, and fiscal and monetary policy decisions—also influence economies, 
particularly in the short run.
We first describe a typical business cycle and its phases. While each cycle is dif -
ferent, analysts and investors need to be familiar with the typical cycle phases and 
what they mean for the expectations and decisions of businesses and households 
that influence the performance of sectors and companies. These behaviors also affect 
financial conditions and risk appetite, thus affecting the setting of expectations and 
choices of portfolio exposures to different investment sectors or styles.
In the lessons that follow, we describe credit cycles, introduce several theories 
of business cycles, and explain how different economic schools of thought interpret 
the business cycle and their recommendations with respect to it. We also discuss 
1`,
      overview: `■ Business cycles are recurrent expansions and contractions in 
economic activity affecting broad segments of the economy.
 ■ Classical cycle refers to fluctuations in the level of economic activity 
(e.g., measured by GDP in volume terms).
 ■ Growth cycle refers to fluctuations in economic activity around the 
long-term potential or trend growth level.
 ■ Growth rate cycle refers to fluctuations in the growth rate of economic 
activity (e.g., GDP growth rate).
 ■ The overall business cycle can be split into four phases: recovery, 
expansion, slowdown, and contraction.
 ■ In the recovery phase of the business cycle, the economy is going 
through the “trough” of the cycle, where actual output is at its lowest 
level relative to potential output.
 ■ In the expansion phase of the business cycle, output increases, and the 
rate of growth is above average. Actual output rises above potential 
output, and the economy enters the so-called boom phase.
 ■ In the slowdown phase of the business cycle, output reaches its highest 
level relative to potential output (i.e., the largest positive output gap). 
The growth rate begins to slow relative to potential output growth, and 
the positive output gap begins to narrow.
 ■ In the contraction phase of the business cycle, actual economic output 
falls below potential economic output.
 ■ Credit cycles describe the changing availability—and pricing—of 
credit.
 ■ Strong peaks in credit cycles are closely associated with subsequent 
systemic banking crises.
 ■ Economic indicators are variables that provide information on the 
state of the overall economy.
 ● Leading economic indicators have turning points that usually 
precede those of the overall economy.
 ● Coincident economic indicators have turning points that usually 
are close to those of the overall economy.
 ● Lagging economic indicators have turning points that take place 
later than those of the overall economy.
 ■ A diffusion index reflects the proportion of a composite ind`,
      body: `LEARNING MODULE OVERVIEW
 ■ Business cycles are recurrent expansions and contractions in 
economic activity affecting broad segments of the economy.
 ■ Classical cycle refers to fluctuations in the level of economic activity 
(e.g., measured by GDP in volume terms).
 ■ Growth cycle refers to fluctuations in economic activity around the 
long-term potential or trend growth level.
 ■ Growth rate cycle refers to fluctuations in the growth rate of economic 
activity (e.g., GDP growth rate).
 ■ The overall business cycle can be split into four phases: recovery, 
expansion, slowdown, and contraction.
 ■ In the recovery phase of the business cycle, the economy is going 
through the “trough” of the cycle, where actual output is at its lowest 
level relative to potential output.
 ■ In the expansion phase of the business cycle, output increases, and the 
rate of growth is above average. Actual output rises above potential 
output, and the economy enters the so-called boom phase.
 ■ In the slowdown phase of the business cycle, output reaches its highest 
level relative to potential output (i.e., the largest positive output gap). 
The growth rate begins to slow relative to potential output growth, and 
the positive output gap begins to narrow.
 ■ In the contraction phase of the business cycle, actual economic output 
falls below potential economic output.
 ■ Credit cycles describe the changing availability—and pricing—of 
credit.
 ■ Strong peaks in credit cycles are closely associated with subsequent 
systemic banking crises.
 ■ Economic indicators are variables that provide information on the 
state of the overall economy.
 ● Leading economic indicators have turning points that usually 
precede those of the overall economy.
 ● Coincident economic indicators have turning points that usually 
are close to those of the overall economy.
 ● Lagging economic indicators have turning points that take place 
later than those of the overall economy.
 ■ A diffusion index reflects the proportion of a composite index of 
leading, lagging and coincident indicators that are moving in a pattern 
consistent with the overall index. Analysts often rely on these diffusion 
indexes to provide a measure of the breadth of the change in a com-
posite index.
© CFA Institute. For candidate use only. Not for distribution.
Overview of the Business Cycle 51
OVERVIEW OF THE BUSINESS CYCLE
describe the business cycle and its phases
Business cycles are recurrent expansions and contractions in economic activity 
affecting broad segments of the economy. In their 1946 book “Measuring Business 
Cycles” , Burns and Mitchell define the business cycle as follows:
Business cycles are a type of fluctuation found in the aggregate economic 
activity of nations that organize their work mainly in business enterprises: 
a cycle consists of expansions occurring at about the same time in many 
economic activities, followed by similarly general recessions, contractions, 
and revivals which merge into the expansion phase of the next cycle; this 
sequence of events is recurrent but not periodic; in duration, business 
cycles vary from more than one year to 10 or 12 years.
This definition is rich with important insight. First, business cycles are typical of 
economies that rely mainly on business enterprises—therefore, not agrarian societies 
or centrally planned economies. Second, a cycle has an expected sequence of phases, 
alternating between expansion and contraction, or upswings and downturns. Third, 
such phases occur at about the same time throughout the economy. Finally, cycles are 
recurrent; they happen again and again over time but not in a periodic way; they do 
not all have the exact same intensity and duration. Exhibit 1 provides an illustration 
of the pattern of economic growth rate in developed markets.
Exhibit 1: Fluctuations of Growth in OECD Countries over Time
Quarterly GDP (Y-o-y change %)
10 10
8 8
6 6
4 4
2 2
0 0
–2 –2
–4 –4
–6 –6
1965 1965 1972 1972 19791979 1986 1986 1993 1993 2000 2000 2007 2007 2014 2014
Note: The Organisation for Economic Co-Operation and Development (OECD) includes more than 
30 large member countries.
Source: OECD.Stat (https://  s tats . oecd .or g), year-over-year change in quarterly GDP in OECD 
countries.
Burns and Mitchell’s definition remains helpful. History never repeats itself in quite 
the same way, but it certainly does offer patterns that can be used when analyzing 
the present and forecasting the future. Business cycle analysis is a wide-ranging topic 
with conflicting perspectives held by industry participants.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 Understanding Business C ycles52
Phases of the Business Cycle
Business cycles are recurring sequences of alternating upswings and downturns. The 
business cycle can be broken into phases in various ways. The most obvious way is to 
divide it into two primary segments: the expansion, or the upswing, and the contrac -
tion, or the downturn, with two key turning points, or peaks and troughs (see Exhibits 
2 and 3). These two periods are fairly easy to identify in retrospect. Subdividing the 
cycle more finely, however, becomes ambiguous, even in retrospect, because it requires 
identifying more nuanced changes, such as acceleration or deceleration of growth 
without a change in its direction. It thus is useful to divide the cycle into several phases 
distinguished through both economic and financial market characteristics. Our focus 
is on economic characteristics of the different phases, but we also will highlight their 
implication for the behavior of different segments of the financial markets.
The timing of these periods will depend on the type of cycle. Before moving on 
to the description of the four distinct phases to which we will refer in the subsequent 
sections, we first explain the different cycle concepts that analysts should be aware 
of given the range of different opinions, interpretations, and descriptions that prac -
titioners use.
Types of Cycles
 ■ Classical cycle refers to fluctuations in the level of economic activity (e.g., 
measured by GDP in volume terms). The contraction phases between peaks 
and troughs are often short, whereas expansion phases are much longer. 
Exhibit 2 shows the classical cycle of economic activity. In practice, the clas-
sical cycle is not used extensively by academics and practitioners because it 
does not easily allow the breakdown of movements in GDP between short-
term fluctuations and long-run trends. In addition, an absolute decline in 
activity between peaks and troughs does not occur frequently.
Exhibit 2: Classical Cycle
Index
115 115
110 110
105 105
100 100
95 95
Output (left scale)
Trough
Classical Cycle:
Contraction
Classical Cycle: Expansion Peak
Peak Trough
 ■ Growth cycle refers to fluctuations in economic activity around the 
long-term potential or trend growth level. The focus is on how much actual 
economic activity is below or above trend growth in economic activity. The 
dashed “wave” in the lower part of Exhibit 3 captures the fluctuation of 
actual activity from trend growth activity. Exhibit 3 shows “gaps” between 
actual and trend output. The growth cycle definition comes closest to how 
mainstream economists think: It dissects overall economic activity into a 
© CFA Institute. For candidate use only. Not for distribution.
Overview of the Business Cycle 53
part driven by long-run trends and a part reflecting short-run fluctuations. 
Compared with the classical view of business cycles, peaks generally are 
reached earlier and troughs later in time. The time periods below and above 
trend growth are of similar length.
Exhibit 3: Classical and Growth Cycles
Deviation (in %)Index
115 115
110 110
105 105
100 100
95 95
4 4
2 2
0 0
–2 –2
Output (left scale) Potential Output (left scale)
Growth Cycle (right scale)
Growth cycle trough 
corresponds to the 
largest negative gap 
between actual GDP 
and t`,
    },
    {
      number: 3,
      title: `Fiscal Policy`,
      pages: 26,
      los: `Mastery The candidate should be able to:
compare monetary and fiscal policy
describe roles and objectives of fiscal policy as well as arguments as
to whether the size of a national debt relative to GDP matters
describe tools of fiscal policy, including their advantages and
explain the implementation of fiscal policy and difficulties of
implementation as well as whether a fiscal policy is expansionary or`,
      intro: `Fiscal policy refers to the government’s decisions about taxation and spending, 
whereas monetary policy refers to central bank activities that are directed toward 
influencing the quantity of money and credit in an economy. Fiscal policy involves the 
use of government spending and changing tax revenue to affect certain aspects of the 
economy, such as the overall level of aggregate demand. Government deficits are the 
difference between government revenues and expenditures over a period of calendar 
time. The fiscal tools available to a government include transfer payments, current 
government spending, capital expenditures, and taxes. Economists often examine the 
structural budget deficit as an indicator of a government’s fiscal stance.`,
      overview: `■ Fiscal policy refers to the government’s decisions about taxa-
tion and spending.
 ■ Monetary policy refers to central bank activities that are directed 
toward influencing the quantity of money and credit in an economy.
1`,
      body: `LEARNING MODULE OVERVIEW 
 ■ Fiscal policy refers to the government’s decisions about taxa-
tion and spending.
 ■ Monetary policy refers to central bank activities that are directed 
toward influencing the quantity of money and credit in an economy.
1
LEARNING MODULE
3
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 F iscal Policy80
 ■ The primary goal of both monetary and fiscal policy is the creation of 
an economic environment in which growth is stable and positive, and 
inflation is stable and low.
 ■ Fiscal policy involves the use of government spending and changing 
tax revenue to affect certain aspects of the economy, including the 
level of economic activity in an economy, the distribution of income 
and wealth among different segments of the population, and the allo-
cation of resources between different sectors and economic agents.
 ■ The budget surplus/deficit is the difference between government 
revenue and expenditure for a fixed period of time, such as a fiscal or 
calendar year.
 ■ There are several strong arguments both for and against being con-
cerned about national debt relative to GDP .
 ■ The fiscal tools available to a government include transfer payments, 
current government spending, capital expenditures, direct taxes, and 
indirect taxes.
 ■ Taxes can be justified both in terms of raising revenues to finance 
expenditures and in terms of income and wealth redistribution 
policies.
 ■ Fiscal policy tools seek to achieve or maintain an economy on a path 
of positive, stable growth with low inflation.
 ■ Economists assess the structural (or cyclically adjusted) budget deficit 
as an indicator of the government’s fiscal stance, which is defined as 
the deficit that would exist if the economy was at full employment.
 ■ Actual government deficits may not be a good measure of fiscal stance 
because of the distinction between real and nominal interest rates and 
the role of inflation adjustment when applied to budget deficits.
 ■ Fiscal policy cannot stabilize aggregate demand completely because 
the difficulties in executing fiscal policy cannot be completely 
overcome.
INTRODUCTION TO MONETARY AND FISCAL POLICY
compare monetary and fiscal policy
The economic decisions of households can have a significant impact on an economy. 
For example, a decision on the part of households to consume more and to save less 
can lead to an increase in employment, investment, and ultimately profits. Equally, the 
investment decisions made by corporations can have an important impact on the real 
economy and on corporate profits. But individual corporations can rarely affect large 
economies on their own; the decisions of a single household concerning consumption 
will have a negligible impact on the wider economy.
By contrast, the decisions made by governments can have an enormous impact 
on even the largest and most developed of economies for two main reasons. First, the 
public sectors of most developed economies normally employ a significant propor -
tion of the population, and they usually are responsible for a significant proportion 
2
© CFA Institute. For candidate use only. Not for distribution.
Introduction to Monetary and Fiscal Policy 81
of spending in an economy. Second, governments are also the largest borrowers in 
world debt markets. Exhibit 1 gives some idea of the scale of government borrowing 
and spending.
Scale of Government Borrowing and Spending
Panel A. Central Government Debt to GDP , 2017
05 0 100 150 200 250
Japan
Greece
Italy
Portugal
Singapore
United States
Belgium
Spain
France
Canada
United Kingdom
General Government Gross Debt as % GDP
Panel B. Public Sector Spending to GDP , 2017
01 02 03 04 05 06 0
Japan
Greece
Italy
Portugal
Singapore
United States
Belgium
Spain
France
Canada
United Kingdom
Government Expenditure as % of GDP
Source: IMF, World Economic Outlook Database, April 2018.
Government policy is ultimately expressed through its borrowing and spending 
activities. In this reading, we identify and discuss two types of government policy that 
can affect the macroeconomy and financial markets: monetary policy and fiscal policy.
Monetary policy refers to central bank activities that are directed toward influenc-
ing the quantity of money and credit in an economy. Central banks can implement 
monetary policy almost completely independent of government interference and 
influence at one end of the scale or may simply act as the agent of the government at 
the other end of the scale.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 F iscal Policy82
By contrast, fiscal policy refers to the government’s decisions about taxation and 
spending. Both monetary and fiscal policies are used to regulate economic activity 
over time. They can be used to accelerate growth when an economy starts to slow or 
to moderate growth and activity when an economy starts to overheat. In addition, 
fiscal policy can be used to redistribute income and wealth.
The overarching goal of both monetary and fiscal policy is normally the creation 
of an economic environment in which growth is stable and positive and inflation is 
stable and low. Crucially, the aim is to steer the underlying economy so that it does 
not experience economic booms that may be followed by extended periods of low or 
negative growth and high levels of unemployment. In such a stable economic envi-
ronment, households can feel secure in their consumption and saving decisions, while 
corporations can concentrate on their investment decisions, on making their regular 
coupon payments to their bond holders, and on making profits for their shareholders.
The challenges to achieving this overarching goal are many. Economies frequently 
are buffeted by shocks (such as oil price jumps), and some economists believe that 
natural cycles in the economy also exist. Moreover, we can find plenty of examples 
from history in which government policies—either monetary, fiscal, or both—have 
exacerbated an economic expansion that eventually led to damaging consequences 
for the real economy, for financial markets, and for investors.
QUESTION SET
1.
 Whic
h of the following statements best describes monetary policy? 
Monetary policy: 
A.
 in
volves the setting of medium-term targets for broad money 
aggregates.
B. in
volves the manipulation by a central bank of the government’s bud-
get deficit.
C.
 s
eeks to influence the macroeconomy by influencing the quantity of 
money and credit in the economy.
Solution:
C is correct, as monetary policy involves central bank activities directed 
toward influencing the quantity of money and credit. Choice A is incorrect 
because, although the setting of targets for monetary aggregates is a possible 
tool of monetary policy, monetary policy itself is concerned with influencing 
the overall, or macro, economy.
2.
 Whic
h of the following statements best describes fiscal policy? Fiscal policy: 
A.
 i
s used by governments to redistribute wealth and incomes.
B. i
s the attempt by governments to balance their budgets from one year 
to the next.
C.
 in
volves the use of government spending and taxation to influence 
economy activity.
Solution:
C is correct. Note that governments may wish to use fiscal policy to redis-
tribute income and balance their budgets, but the overriding goal of fiscal 
policy is usually to influence a broader range of economic activity.
© CFA Institute. For candidate use only. Not for distribution.
Roles and Objectives of Fiscal Policy 83
ROLES AND OBJECTIVES OF FISCAL POLICY
describe roles and objectives of fiscal policy as well as arguments as 
to whether the size of a national debt relative to GDP matters
Fiscal policy involves the use of government spending and changing tax revenue to 
affect a number of aspects of the economy:
 ■ Overall level of aggregate demand in an economy and hence the level of 
economic activity.
 ■ Distribution of income and wealth among di`,
    },
    {
      number: 4,
      title: `Monetary Policy`,
      pages: 36,
      los: `Mastery The candidate should be able to:
describe the roles and objectives of central banks
describe tools used to implement monetary policy tools and the
monetary transmission mechanism, and explain the relationships
between monetary policy and economic growth, inflation, interest,
describe qualities of effective central banks; contrast their use of
inflation, interest rate, and exchange rate targeting in expansionary
or contractionary monetary policy; and describe the limitations of
explain the interaction of monetary and fiscal policy`,
      intro: `Central banks play several important roles in modern economies. These roles include 
being the monopoly supplier of the currency, the banker to the government and the 
bankers’ bank, the lender of last resort, the regulator and supervisor of the payments 
system, the conductor of monetary policy, and the supervisor of the banking system. 
Central banks have three primary tools available to them: open market operations, the 
refinancing rate, and reserve requirements. The success of central banks is thought to 
depend on three key concepts: central bank independence, credibility, and transparency. 
Both fiscal and monetary policy can alter aggregate demand, but they do so through 
differing channels with differing impacts on the composition of aggregate demand.`,
      overview: `■ Central banks are the sole supplier of domestic currency, the 
banker to the government and the bankers’ bank, the lender 
of last resort, the regulator and supervisor of the payments system, 
the conductor of monetary policy, and the supervisor of the banking 
system.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Central banks are the sole supplier of domestic currency, the 
banker to the government and the bankers’ bank, the lender 
of last resort, the regulator and supervisor of the payments system, 
the conductor of monetary policy, and the supervisor of the banking 
system.
1
LEARNING MODULE
4
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Monetar y Policy106
 ■ The highest profile role that central banks assume is the operation of a 
country’s monetary policy, which refers to central bank activities that 
are directed toward influencing the quantity of money and credit in an 
economy.
 ■ The overarching goal of most central banks in maintaining price stabil-
ity is the associated goal of controlling inflation.
 ■ Central banks can manipulate the money supply in one of three ways: 
open market operations, its official policy rate and associated actions 
in the repo market, and manipulation of official reserve requirements.
 ■ The central bank target interest rate (or policy rate) is used to influ-
ence short- and long-term interest rates and, ultimately, real economic 
activity.
 ■ The central bank’s policy rate works through the economy via the fol-
lowing interconnected channels: short-term interest rates, changes in 
the values of key asset prices, the exchange rate, and the expectations 
of economic agents.
 ■ The success of inflation-targeting by central banks depends on three 
key characteristics: central bank independence, credibility, and 
transparency.
 ■ Many emerging market economies choose to operate monetary policy 
by targeting their currency’s exchange rate, rather than an explicit 
level of domestic inflation.
 ■ A major problem for central banks as they try to manage the money 
supply to influence the real economy is that they cannot control the 
amount of money that households and corporations put in banks on 
deposit, nor can they easily control the willingness of banks to create 
money by expanding credit.
 ■ Both fiscal and monetary policy can alter aggregate demand, but they 
do so through differing channels with differing impacts on the compo-
sition of aggregate demand.
 ■ Both fiscal and monetary policies suffer from a lack of precise cur -
rent knowledge of the economy, because periodic economic data are 
released with a time lag and are subject to revision.
 ■ The interaction between monetary and fiscal policies is evident in the 
Ricardian equivalence because if tax cuts have no impact on private 
spending due to higher expected future taxes, then this may lead pol-
icy makers to favor monetary tools.
ROLE OF CENTRAL BANKS
describe the roles and objectives of central banks
2
© CFA Institute. For candidate use only. Not for distribution.
Role of Central Banks 107
Roles of Central Banks and Objectives of Monetary Policy
Central banks play several key roles in modern economies. Generally, a central bank 
is the sole supplier of the domestic currency, the banker to the government and the 
bankers’ bank, the lender of last resort, the regulator and supervisor of the payments 
system, the conductor of monetary policy, and the supervisor of the banking system. 
Let us examine these roles in turn.
In its earliest form, money could be exchanged for a prespecified precious com-
modity, usually gold, and promissory notes were issued by many private banks. Today, 
however, state-owned institutions—usually central banks—are designated in law as 
being the monopoly suppliers of a currency. Initially, these monopolists supplied 
money that could be converted into a prespecified amount of gold; they adhered to a 
gold standard. For example, until 1931, bank notes issued by Britain’s central bank, 
the Bank of England, could be redeemed at the bank for a prespecified amount of gold. 
But Britain, like most other major economies, abandoned this convertibility principle 
in the first half of the twentieth century. Money in all major economies today is not 
convertible by law into anything else, but it is, in law, legal tender. This means that it 
must be accepted when offered in exchange for goods and services. Money that is not 
convertible into any other commodity is known as fiat money. Fiat money derives its 
value through government decree and because people accept it for payment of goods 
and services and for debt repayment.
As long as fiat money is acceptable to everyone as a medium of exchange, and it 
holds its value over time, then it also will be able to serve as a unit of account. However, 
once an economy has moved to a system of fiat money, the role of the supplier of that 
money becomes even more crucial because they could, for example, expand the supply 
of this money indefinitely should they wish to do so. Central banks, therefore, play a 
crucial role in modern economies as the suppliers and guardians of the value of their 
fiat currencies and as institutions charged with the role of maintaining confidence 
in their currencies. As the sole suppliers of domestic currency, central banks are at 
the center of economic life. As such, they assume other roles in addition to being the 
suppliers and guardians of the value of their currencies.
Most central banks act as the banker to the government and to other banks. They 
also act as a lender of last resort to banks. Because the central bank effectively has 
the capacity to print money, it is in the position to be able to supply the funds to banks 
that are facing crisis. The facts that economic agents know that the central bank stands 
ready to provide the liquidity required by any of the banks under its jurisdiction and 
that they trust government bank deposit insurance help to prevent bank runs in the 
first place. However, the recent financial crisis has shown that this knowledge is not 
always sufficient to deter a bank run.
EXAMPLE 1
The Northern Rock Bank Run
In the latter part of the summer of 2007, the fall in US house prices and the 
related implosion of the US sub-prime mortgage market became the catalyst 
for a global liquidity crisis. Banks began to hoard cash and refused to lend to 
other banks at anything other than extremely punitive interest rates through 
the interbank market. This caused severe difficulties for a UK mortgage bank, 
Northern Rock. Northern Rock’s mortgage book had expanded rapidly in the 
preceding years as it borrowed aggressively from the money markets. It is now 
clear that this expansion was at the expense of loan quality. The then–UK reg-
ulatory authority, the Financial Services Authority (FSA), later reported in 2008 
that Northern Rock’s lending practices did not pay due regard to either the credit 
quality of the mortgagees or the values of the properties on which the mortgages 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Monetar y Policy108
were secured. Being at the worst end of banking practice and relying heavily 
on international capital markets for its funding, Northern Rock was therefore 
susceptible to a global reduction in liquidity. As the liquidity crisis took hold, 
Northern Rock found that it could not replace its maturing money market 
borrowings. On 12 September 2007, in desperate need of liquidity, Northern 
Rock’s board approached the UK central bank to ask for the necessary funds.
However, the news of Northern Rock’s perilous liquidity position became 
known by the public and, more pertinently, by Northern Rock’s retail deposi-
tors. On 14 September, having heard the news, queues began to form outside 
Northern Rock branches as depositors tried to withdraw their savings. On that 
day, it was estimated that Northern Rock depositors withdrew around GBP1 
billion, representing 5 percent of Northern Rock’s deposits. Further panic ensued 
as investors in “internet-only” Northern Rock accounts could not withdraw their 
money because of the collapse of Northern Rock’s website. A further GBP1 
billion was withdrawn over the next two `,
    },
    {
      number: 5,
      title: `Introduction to Geopolitics`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe geopolitics from a cooperation versus competition
describe geopolitics and its relationship with globalization
describe functions and objectives of the international organizations
that facilitate trade, including the World Bank, the International
Monetary Fund, and the World Trade Organization
describe geopolitical risk
describe tools of geopolitics and their impact on regions and
describe the impact of geopolitical risk on investments`,
      intro: `Investors study geopolitics and geopolitical risk because they can have a material 
impact on investment outcomes. These relations affect key drivers of investment 
performance, including economic growth, business performance, market volatility, 
and transaction costs. On a portfolio level, geopolitical risk can affect the suitability of 
a security or strategy for an investor’s goals, risk tolerance, and time horizon. In this 
learning module, we will build a framework by which investors can measure, assess, 
track, and react to geopolitical risk, with a goal of improving investment outcomes.
1`,
      overview: `■ Geopolitics is the study of how geography affects politics and 
international relations. Within the field of geopolitics, analysts 
study actors—the individuals, organizations, companies, and national 
governments that carry out political, economic, and financial activi-
ties—and how they interact with one another.
 ■ State actors can be cooperative or non-cooperative. A country may 
want to cooperate with its neighbors or with other state actors for 
many reasons. These reasons are typically defined by a country’s 
national interest—its goals and ambitions—whether they be military, 
economic, or cultural.
 ■ The cooperation and engagement among countries is also affected by 
its resource endowment, standardization of the rules of engagement, 
and cultural factors and soft power.
 ■ A country’s national interest can be viewed as a hierarchy of factors, 
with those essential for survival at the top of the hierarchy and nice-
but-not-essential elements lower in the hierarchy. Governments use 
the hierarchy of interests to guide their behavior.
 ■ Political cooperation versus non-cooperation is only one lens through 
which geopolitical actors engage with the world, but it is an important 
one for understanding countries’ priorities.
 ■ Globalization is marked by economic and financial cooperation, 
including the active trade of goods and services, capital flows, cur -
rency exchange, and cultural and information exchange. By contrast, 
antiglobalization or nationalism is the promotion of a country’s own 
economic interests to the exclusion or detriment of the interests of 
other nations. Nationalism is marked by limited economic and finan-
cial cooperation.
 ■ Globalization provides potential gains, such as:
 ● increased profits—through increasing sales and/or reducing costs,
 ● access to resources—market access and investment opportunities, 
and
 ● intrinsic gains—an improved quality of life.
 ■ Globalization also has some potential drawbacks, such as:
 ● unequal ec`,
      body: `LEARNING MODULE OVERVIEW
 ■ Geopolitics is the study of how geography affects politics and 
international relations. Within the field of geopolitics, analysts 
study actors—the individuals, organizations, companies, and national 
governments that carry out political, economic, and financial activi-
ties—and how they interact with one another.
 ■ State actors can be cooperative or non-cooperative. A country may 
want to cooperate with its neighbors or with other state actors for 
many reasons. These reasons are typically defined by a country’s 
national interest—its goals and ambitions—whether they be military, 
economic, or cultural.
 ■ The cooperation and engagement among countries is also affected by 
its resource endowment, standardization of the rules of engagement, 
and cultural factors and soft power.
 ■ A country’s national interest can be viewed as a hierarchy of factors, 
with those essential for survival at the top of the hierarchy and nice-
but-not-essential elements lower in the hierarchy. Governments use 
the hierarchy of interests to guide their behavior.
 ■ Political cooperation versus non-cooperation is only one lens through 
which geopolitical actors engage with the world, but it is an important 
one for understanding countries’ priorities.
 ■ Globalization is marked by economic and financial cooperation, 
including the active trade of goods and services, capital flows, cur -
rency exchange, and cultural and information exchange. By contrast, 
antiglobalization or nationalism is the promotion of a country’s own 
economic interests to the exclusion or detriment of the interests of 
other nations. Nationalism is marked by limited economic and finan-
cial cooperation.
 ■ Globalization provides potential gains, such as:
 ● increased profits—through increasing sales and/or reducing costs,
 ● access to resources—market access and investment opportunities, 
and
 ● intrinsic gains—an improved quality of life.
 ■ Globalization also has some potential drawbacks, such as:
 ● unequal economic and financial gains,
 ● interdependence that can lead to supply chain disruption, and
 ● possible exploitation of social and environmental resources.
 ■ The International Monetary Fund’s (IMF’s) main mandate is to ensure 
the stability of the international monetary system, the system of 
exchange rates and international payments that enables countries to 
buy goods and services from each other.
 ■ The World Bank’s main objective is to help developing countries fight 
poverty and enhance environmentally sound economic growth.
 ■ The World Trade Organization (WTO) provides the legal and insti-
tutional foundation of the multinational trading system. It regulates 
cross-border trade relationships among nations on a global scale.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 143
 ■ A geopolitical framework for analysis includes four archetypes of 
country behavior: autarky, hegemony, multilateralism, and bilateral-
ism. Each archetype has its own costs, benefits, and trade-offs with 
respect to geopolitical risk.
 ■ Geopolitical risk is the risk associated with tensions or actions 
between actors (state and non-state) that affect the normal and 
peaceful course of international relations. Geopolitical risk tends to 
rise when the geographic and political factors underpinning country 
relations shift.
 ■ The tools of geopolitics may be separated into the following three 
types:
 ● national security tools,
 ● economic tools, and
 ● financial tools.
 ■ The most extreme example of a national security tool is that of armed 
conflict. Espionage is an indirect national security tool. Military alli-
ances are often used either to aid in direct conflict or to deter conflict 
from arising in the first place.
 ■ Economic tools are used to reinforce a cooperative or non-cooperative 
stance through economic means. Among state actors, economic tools 
can include multilateral trade agreements or the global harmonization 
of tariff rules. Economic tools also can be non-cooperative in nature. 
Nationalization is a non-cooperative approach to asserting economic 
control.
 ■ Financial tools are the actions used to reinforce a cooperative or 
non-cooperative stance through financial mechanisms. Examples of 
cooperative financial tools include the free exchange of currencies 
across borders and allowing foreign investment. Examples of non-co-
operative financial tools include limiting access to local currency 
markets and restricting foreign investment.
 ■ There are three basic types of geopolitical risk:
 ● event risk,
 ● exogenous risk, and
 ● thematic risk.
 ■ Event risk evolves around set dates known in advance. Political events, 
for example, often result in changes to investor expectations related to 
a country’s cooperative stance. Brexit is an example of event risk.
 ■ Exogenous risk is a sudden or unanticipated risk that can affect either 
a country’s cooperative stance, the ability of non-state actors to glo-
balize, or both. Examples include sudden uprisings, invasions, or the 
aftermath of natural disasters.
 ■ Thematic risks are known risks that evolve and expand over time. 
Climate change, cyber threats, and the ongoing threat of terrorism fall 
into this category.
 ■ To make an assessment, an investor considers geopolitical risk in 
terms of the following three areas:
 ● likelihood it will occur,
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 Intr oduction to Geopolitics144
 ● velocity (speed) of its impact, and
 ● size and nature of that impact.
 ■ Geopolitical risks seldom develop in linear fashion, making it diffi-
cult to monitor and forecast their likelihood, velocity, and size and 
nature of impact on a portfolio. As a result, many investors deploy an 
approach that includes scenario building and signposting rather than a 
single point forecast.
 ■ Investors study geopolitical risk because it has a tangible impact on 
investment outcomes. On a macroeconomic level, these risks can 
affect capital markets conditions, such as economic growth, interest 
rates, and market volatility.
 ■ Changes in capital markets conditions can have an important influ-
ence on asset allocation decisions, including an investor’s choice of 
geographic exposures.
 ■ On a portfolio level, geopolitical risk can influence the appropriateness 
of an investment security or strategy for an investor’s goals, risk toler -
ance, and time horizon.
NATIONAL GOVERNMENTS AND POLITICAL 
COOPERATION
describe geopolitics from a cooperation versus competition 
perspective
The international environment is constantly evolving. Such trends as the growth of 
emerging market economies, globalization, and the rise of populism affect the range of 
opportunities and threats that companies, industries, nations, and regional groups face. 
Geopolitics is the study of how geography affects politics and international relations. 
Within the field of geopolitics, analysts study actors—the individuals, organizations, 
companies, and national governments that carry out political, economic, and financial 
activities—and how they interact with one another. The role of state and non-state 
actors is discussed in the following section.
State and Non-State Actors
Relationships within and among countries can be complex. To begin, many actors 
influence international relations, political developments, and economic affairs. In 
the introduction, we defined actors as the individuals, organizations, companies, and 
national governments that carry out political, economic, and financial activities. This 
definition can be divided into two types of actors relevant for geopolitical risk: state 
actors and non-state actors. State actors are typically national governments, political 
organizations, or country leaders that exert authority over a country’s national security 
and resources. The South African president, sultan of Brunei, Malaysia’s parliament, 
and the Brit`,
    },
    {
      number: 6,
      title: `International Trade`,
      pages: 20,
      los: `Mastery The candidate should be able to:
describe the benefits and costs of international trade
compare types of trade restrictions, such as tariffs, quotas, and
export subsidies, and their economic implications
explain motivations for and advantages of trading blocs, common
markets, and economic unions`,
      intro: `From an investment perspective, it is important for global investors to understand 
existing trade policies. Such policies can affect the volume and value of trade and thus 
can affect the return on investment. Investors need to be aware of potential changes 
in the government’s trade policy. Such changes have important implications for firm 
profitability and growth by affecting the demand for its products and its pricing. There 
has been much debate among economists on the role of trade and trade policy and 
its impact on the overall economy. This learning module examines the benefits and 
cost of international trade. It then describes trade restrictions and their implications 
and discusses the motivation for, and advantages of, the different types of trading 
blocs or trade agreements.`,
      overview: `■ The most compelling arguments supporting international trade 
are:
 ● countries gain from exchange and specialization,
 ● industries experience greater economies of scale,
 ● households and firms have greater product variety,
 ● competition is increased, and
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The most compelling arguments supporting international trade 
are:
 ● countries gain from exchange and specialization,
 ● industries experience greater economies of scale,
 ● households and firms have greater product variety,
 ● competition is increased, and
1
LEARNING MODULE
6
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 Int ernational Trade196
 ● resources are allocated more efficiently.
 ■ Newer models of trade focus on the gains from trade that result 
from economies of scale, greater product variety, and increased 
competition.
 ■ Opponents of free trade point to the potential for greater income 
inequality and the loss of jobs in developed market countries as a 
result of import competition.
 ■ The fact that trade increases overall welfare does not mean that every 
individual consumer and producer is better off. What it does mean is 
that the winners could, in theory, compensate the losers and still be 
better off.
 ■ Trade restrictions (or trade protection) are government policies that 
limit the ability of domestic households and firms to trade freely with 
other countries.
 ■ Tariffs are taxes that a government levies on imported goods. The pri-
mary objective of tariffs is to protect domestic industries that produce 
the same or similar goods. They also may aim to reduce a trade deficit.
 ■ The net welfare effect of tariffs is the sum of consumer surplus, 
producer surplus and government tax revenue. The loss in consumer 
surplus is greater than the sum of the gain in producer surplus and 
government revenue and results in a deadweight loss to the country’s 
welfare.
 ■ A quota restricts the quantity of a good that can be imported into a 
country, generally for a specified period of time. A voluntary export 
restraint (VER) is a trade barrier under which the exporting country 
agrees to limit its exports of the good to its trading partners to a spe-
cific number of units.
 ■ An export subsidy is a payment by the government to a firm for each 
unit of a good that is exported. Its goal is to stimulate exports.
 ■ A regional trading bloc is a group of countries that have signed an 
agreement to reduce and progressively eliminate barriers to trade and 
the movement of factors of production among the members of the 
bloc.
 ■ There are many different types of regional trading blocs, depending on 
the level of integration that takes place. These include free trade areas, 
customs union, common market, and economic union.
 ■ Trade creation occurs when regional integration results in the replace-
ment of higher-cost domestic production by lower-cost imports from 
other members. Trade diversion occurs when lower-cost imports from 
non-member countries are replaced with higher-cost imports from 
members.
BENEFITS AND COSTS OF TRADE
describe the benefits and costs of international trade
2
© CFA Institute. For candidate use only. Not for distribution.
Benefits and Costs of Trade 197
Over the past few decades, the global economy has experienced rapid growth in trade 
and a growing interdependence among countries. This has led to a debate among policy 
makers over whether the expansion of trade has been helpful for individual national 
economies. This lesson examines the possible benefits and costs of international trade.
Benefits and Costs of International Trade
The benefits and costs of international trade are widely debated. The most compelling 
arguments supporting international trade are as follows: countries gain from exchange 
and specialization, industries experience greater economies of scale, households and 
firms have greater product variety, competition is increased, and resources are allo-
cated more efficiently.
Gains from exchange occur when trade enables each country to receive a higher 
price for its exports (and greater profit) or pay a lower price for imported goods 
instead of producing these goods domestically at a higher cost (i.e., less efficiently). 
This exchange, in turn, leads to a more efficient allocation of resources by increasing 
production of the export good and reducing production of the import good in each 
country (trading partner). This efficiency allows for consumption of a larger bundle 
of goods, thus increasing overall welfare. The fact that trade increases overall welfare 
does not mean, of course, that every individual consumer and producer is better off. 
What it does mean is that the winners could, in theory, compensate the losers and 
still be better off.
Trade also leads to greater efficiency by fostering specialization based on com-
parative advantage. Traditional trade models, such as the Ricardian model and the 
Heckscher–Ohlin model, focus on specialization and trade according to comparative 
advantage arising from differences in technology and factor endowments, respectively.
Newer models of trade focus on the gains from trade that result from economies 
of scale, greater product variety, and increased competition. In an open economy, 
increased competition from foreign firms reduces the monopoly power of domestic 
firms and forces them to become more efficient, in contrast to a closed economy. 
Industries that exhibit increasing returns to scale (e.g., the automobile and steel 
industries) benefit from increased market size as a country starts trading because 
the average cost of production declines as output increases in these industries. 
Monopolistically competitive models of trade have been used to explain why there is 
significant two-way trade (known as intra-industry trade) between countries within 
the same industry. Intra-industry trade occurs when a country exports and imports 
goods in the same product category or classification.
A monopolistically competitive industry has many firms; each firm produces 
a unique or differentiated product: it does not have any exit or entry barriers, and 
long-run economic profits are zero. In such a model, even though countries may be 
similar, they gain from trade because each country focuses on the production and 
export of one or more varieties of the good and imports other varieties of the good. For 
example, the European Union exports and imports different types of cars. Consumers 
gain from having access to a greater variety of final goods. Firms benefit from greater 
economies of scale because firms both within and outside the EU are able to sell their 
goods in both markets. Hence, scale economies allow firms to benefit from the larger 
market size and experience lower average cost of production as a result of trade.
Research suggests that trade liberalization can lead to increased real (i.e., 
inflation-adjusted) GDP although the strength of this relationship is still debated. The 
positive influence of trade on GDP can arise from more efficient allocation of resources, 
learning by doing, higher productivity, knowledge spillovers, and trade-induced changes 
in policies and institutions that affect the incentives for innovation. In industries 
that embrace “learning by doing, ” such as the semiconductor industry, the cost of 
production per unit declines as output increases because of expertise and experience 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 Int ernational Trade198
acquired in the process of production. Trade can lead to increased exchange of ideas, 
freer flow of technical expertise, and greater awareness of changing consumer tastes 
and preferences in global markets. It also can contribute to the development of higher 
quality and more effective institutions and policies that encourage domestic innovation. 
For example, studies have shown that foreign research and development (R&D) has 
beneficial effects on domestic productivity, which become stronger the more open 
an economy is to foreign trade. For example, some estimate that about a quarter of 
the benefits of R&D investment in a G–7 country accrues to their trading partners. 
Co`,
    },
    {
      number: 7,
      title: `Capital Flows and the FX Market`,
      pages: 38,
      los: `Mastery The candidate should be able to:
describe the foreign exchange market, including its functions and
participants, distinguish between nominal and real exchange rates,
and calculate and interpret the percentage change in a currency
relative to another currency
describe exchange rate regimes and explain the effects of exchange
rates on countries’ international trade and capital flows
describe common objectives of capital restrictions imposed by`,
      intro: `The foreign exchange market, which is the largest trading market in the world, facil-
itates international trade and capital flows. Numerous participants use this market 
for a wide variety of financial, business, trade, and hedging purposes. As with any 
trading market, the foreign exchange market uses various terms and conventions that 
allow participants to understand quoting mechanisms and the factors affecting pricing 
and then to conduct trades. International capital flows are the primary determinant 
of short- to medium-term exchange rate movements, and exchange rate movements 
affect the trade balance between countries. Given the relative economic stability and 
objectives of different national governments, countries use a range of exchange rate 
regimes, which are described in this module. These lessons introduce and expand 
upon these topics to lay the groundwork for a more detailed understanding of the 
foreign exchange market.`,
      overview: `■ The foreign exchange market is the largest market in the world.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The foreign exchange market is the largest market in the world.
1
LEARNING MODULE
7
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 C apital Flows and the FX Market216
 ■ Nominal spot exchange rates are quoted in the market and are inputs 
for analysts to determine real exchange rates, which reflect the rela-
tionship between domestic and foreign price levels and indicate the 
relative purchasing power between countries. To track exchange rate 
movements, calculating the percentage change in a currency relative 
to another currency enables market participants to understand price 
changes and use these percentages in market trades.
 ■ Exchange rate regimes can be floating or fully fixed, and various polit -
ical and economic forces drive countries to use one of a number of 
intermediate regimes.
 ■ The impact of exchange rates and other factors on a country’s trade 
balance is mirrored by their impact on that country’s capital flows.
 ■ Although the free flow of capital between countries is most beneficial 
economically, governments may restrict capital inflows or outflows to 
address domestic policy and strategic or defense-related objectives. 
These restrictions allow governments to avoid capital flight in times 
of macroeconomic crisis and limit capital inflows, which may hurt the 
competitiveness of domestic firms.
THE FOREIGN EXCHANGE MARKET AND EXCHANGE 
RATES
describe the foreign exchange market, including its functions and 
participants, distinguish between nominal and real exchange rates, 
and calculate and interpret the percentage change in a currency 
relative to another currency
Introduction and the Foreign Exchange Market
The foreign exchange (FX) market—the market in which currencies are traded against 
each other—is by far the world’s largest market. Current estimates put daily turnover 
at approximately USD6.6 trillion for 2019. This is about 10 to 15 times larger than 
daily turnover in global fixed-income markets and about 50 times larger than global 
turnover in equities.
The FX market is a truly global market that operates 24 hours a day, each business 
day. It involves market participants from every time zone connected through electronic 
communications networks that link players as large as multibillion-dollar investment 
funds and as small as individuals trading for their own account—all brought together 
in real time. International trade would be impossible without the trade in currencies 
that facilitates it and so too would cross-border capital flows that connect all financial 
markets globally through the FX market.
These factors make FX a key market for investors and market participants to 
understand. The world economy is increasingly transnational in nature, with both 
production processes and trade flows often determined more by global factors than 
by domestic considerations. Likewise, investment portfolio performance increasingly 
reflects global determinants because pricing in financial markets responds to the array 
of investment opportunities available worldwide, not just locally. All of these factors 
2
© CFA Institute. For candidate use only. Not for distribution.
The Foreign Exchange Market and Exchange Rates 217
funnel through, and are reflected in, the FX market. As investors shed their “home bias” 
and invest in FX, the exchange rate—the price at which foreign-currency-denominated 
investments are valued in terms of the domestic currency—becomes an increasingly 
important determinant of portfolio performance.
Even investors adhering to a purely “domestic” portfolio mandate are increasingly 
affected by what happens in the FX market. Given the globalization of the world econ-
omy, most large companies depend heavily on their foreign operations (e.g., by some 
estimates about 30 percent of S&P 500 Index earnings are from outside the United 
States). Almost all companies are exposed to some degree of foreign competition, and 
the pricing for domestic assets—equities, bonds, real estate, and others—also depend 
on demand from foreign investors. All of these various influences on investment 
performance reflect developments in the FX market.
The FX Market
To understand the FX market, it is necessary to become familiar with some of its basic 
conventions. Individual currencies often are referred to by standardized three-letter 
codes that the market has agreed upon through the International Organization for 
Standardization (ISO). Exhibit 1 lists some of the major global currencies and their 
identification codes.
Exhibit 1: Standard Currency Codes
Three-Letter Currency Code Currency
AUD Australian dollar
BRL Brazilian real
CAD Canadian dollar
CHF Swiss franc
CNY Chinese yuan
EUR Euro
GBP British pound sterling
HKD Hong Kong dollar
INR Indian rupee
JPY Japanese yen
KRW South Korean won
MXN Mexican peso
NOK Norwegian krone
NZD New Zealand dollar
RUB Russian ruble
SEK Swedish krona
SGD Singapore dollar
USD US dollar
ZAR South African rand
It is important to understand the difference between referring to an individual currency 
and an exchange rate. One can hold an individual currency (e.g., in a EUR100 million 
deposit); an exchange rate, however, is the price of one currency in terms of another 
(e.g., the exchange rate between the euro and the US dollar). An individual currency 
can be singular, but two currencies always are involved in an exchange rate: the price 
of one currency relative to another. The exchange rate is the number of units of one 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 C apital Flows and the FX Market218
currency (called the price currency) that one unit of another currency (called the base 
currency) will buy. An equivalent way of describing the exchange rate is as the cost of 
one unit of the base currency in terms of the price currency.
This distinction between individual currencies and exchange rates is important 
because, as we will see in a later lesson, these three-letter currency codes can be used 
both ways. For example, when used as an exchange rate in the professional FX market, 
EUR is understood to be the exchange rate between the euro and US dollar. Be aware 
of the context (either as a currency or as an exchange rate) in which these three-letter 
currency codes are being used. To avoid confusion, this lesson will identify exchange 
rates using the convention of “ A/B, ” referring to the number of units of currency A 
that one unit of currency B will buy. For example, a USD/EUR exchange rate of 1.1700 
means that 1 euro will buy 1.1700 US dollars (i.e., 1 euro costs 1.1700 US dollars). 
In this case, the euro is the base currency and the US dollar is the price currency. A 
decrease in this exchange rate would mean that the euro costs less or that fewer US 
dollars are needed to buy one euro. In other words, a decline in this exchange rate 
indicates that the US dollar is appreciating against the euro or, equivalently, the euro 
is depreciating against the US dollar.
These exchange rates are referred to as nominal exchange rates. In contrast, real  
exchange rates are indexes that often are constructed by economists and other market 
analysts to assess changes in the relative purchasing power of one currency compared 
with another. Creating these indexes requires adjusting the nominal exchange rate 
by using the price levels in each country of the currency pair (hence the name “real 
exchange rates”) to compare the relative purchasing power between countries.
In a world of homogenous goods and services, and with no market frictions or trade 
barriers, the relative purchasing power across countries would tend to equalize: Why 
would you pay more, in real terms, domestically for a “widget” if you could import an 
identical “widget” from overseas at a cheaper price? This basic concept is the intu-
ition behind a theory known as purchasing power parity (PPP), which describes the 
long-`,
    },
    {
      number: 8,
      title: `Exchange Rate Calculations`,
      pages: 16,
      los: `Mastery The candidate should be able to:
calculate and interpret currency cross-rates
explain the arbitrage relationship between spot and forward
exchange rates and interest rates, calculate a forward rate using
points or in percentage terms, and interpret a forward discount or`,
      intro: `The foreign exchange market facilitates international currency and trade flows, and it 
is important to understand how currency exchange rates are calculated. Market par -
ticipants can also derive cross-rates to expand trading opportunities by determining 
quotes for currencies not directly traded. Understanding the concept of arbitrage 
relationships in the foreign exchange market provides a basis for understanding the 
interrelationships between four key market inputs. Global entities trade currencies for 
a wide variety of purposes and understanding the relationships between the market 
factors affecting spot and forward rates is crucial. These interactions are reinforced 
by the calculations in the second lesson.`,
      overview: `■ An exchange rate between two currencies that are not 
expressly quoted on the market is known as a cross-rate and 
can be calculated using conventional currency quotes.
 ■ Three conventional currency market quotes can be used with one 
inversion to calculate a cross-rate.
 ■ Discrepancies in exchange rates can create arbitrage opportunities but 
they are rare due to market efficiencies.
 ■ The premium of a forward exchange rate over a spot rate is quoted in 
terms of forward points, which are also called swap points.
 ■ Forward rates are directly proportional to currency spot rates, the 
interest rate differential, and the maturity of the forward contract.
1`,
      body: `LEARNING MODULE OVERVIEW 
 ■ An exchange rate between two currencies that are not 
expressly quoted on the market is known as a cross-rate and 
can be calculated using conventional currency quotes.
 ■ Three conventional currency market quotes can be used with one 
inversion to calculate a cross-rate.
 ■ Discrepancies in exchange rates can create arbitrage opportunities but 
they are rare due to market efficiencies.
 ■ The premium of a forward exchange rate over a spot rate is quoted in 
terms of forward points, which are also called swap points.
 ■ Forward rates are directly proportional to currency spot rates, the 
interest rate differential, and the maturity of the forward contract.
1
LEARNING MODULE
8
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 8 Ex change Rate Calculations254
 ■ As a result of the interrelationship among these four variables, any 
variable can be calculated by using the other three as inputs.
CROSS-RATE CALCULATIONS
calculate and interpret currency cross-rates
Global currencies are bought, sold, and exchanged in the foreign exchange (FX) 
market. In this decentralized market, participants trade currencies utilizing exchange 
rates, which typically reflect an efficient market. This section will cover the use of 
cross exchange rate relationships (cross-rates) to calculate exchange rates between 
two currencies using a third currency. It also will introduce calculations used in the 
FX market to trade currencies.
Given two exchange rates involving three currencies, it is possible to back out the 
cross-rate. For example, as we have seen in a prior lesson, the FX market convention 
is to quote the exchange rate between the US dollar and the euro as euro–dollar 
(USD/EUR). The FX market also quotes the exchange rate between the Canadian 
dollar and US dollar as dollar–Canada (CAD/USD). Given these two exchange rates, 
it is possible to back out the cross-rate between the euro and the Canadian dollar, 
which according to market convention is quoted as euro–Canada (CAD/EUR). This 
calculation is shown as follows:
    CAD _ USD   ×   USD _ EUR   =   CAD _  USD    ×    USD  _ EUR   =   CAD _ EUR  .  
Hence, to get a euro–Canada (CAD/EUR) quote, we must multiply the dollar–Canada 
(CAD/USD) quote by the euro–dollar (USD/EUR) quote. For example, assume the 
exchange rate for dollar–Canada is 1.3020 and the exchange rate for euro–dollar is 
1.1701. Using these spot exchange rates, the euro–Canada cross-rate equals:
	 1.3020
	×
	1.1701
	=
	1.5235
	CAD
	per
	EUR.
The pr
ofessional FX market does not use the convention of direct or indirect quotes 
because these conventions depend on one’s location to determine the domestic ver -
sus foreign currencies. Instead, the market uses rate quotes on defined conventional 
currency pairs. Sometimes, to get a cross-rate using several currency quotes, it is 
necessary to invert a quote to get an intermediary currency that can be canceled out 
in the equation to obtain the cross-rate. For example, to get a Canada–yen (JPY/CAD) 
quote, one typically uses the dollar–Canada (CAD/USD) rate and dollar–yen (JPY/
USD) rate, which are the market conventions. This Canada–yen calculation requires 
that the dollar–Canada rate (CAD/USD) be inverted to a Canada–dollar (USD/CAD) 
quote for the calculations to work, as follows:
    (  CAD _ USD  )    
−1
  ×   JPY _ USD   =   USD _ CAD   ×   JPY _ USD   =    USD  _ CAD   ×   JPY _  USD    =   JPY _ CAD  .  
Hence, to get a Canada–yen (JPY/CAD) quote, we must first invert the dollar–Canada 
(CAD/USD) quote before multiplying by the dollar–yen (JPY/USD) quote. Market 
quotes for most currencies are quoted to four decimal places; however, the Japanese 
yen exchange rate is quoted to two decimal places. For example, assume that we have 
spot exchange rates of 1.3020 for dollar–Canada (CAD/USD) and 111.94 for dollar–yen 
(JPY/USD). The dollar–Canada rate of 1.3020 inverts to 0.7680; multiplying this value 
by the dollar–yen quote of 111.94 gives the following Canada–yen quote:
2
© CFA Institute. For candidate use only. Not for distribution.
Cross-Rate Calculations 255
	 0.7680	× 	1 11.94 	= 	85.97 	JPY	per 	CAD.
Mar
ket participants asking for a quote in a cross-rate currency pair typically will not 
need to do this calculation themselves: Either the dealer or the electronic trading 
platform will provide a quote in the specified currency pair. (For example, a client 
asking for a quote in Canada–yen will receive that quote from the dealer; he will not 
be given separate dollar–Canada and dollar–yen quotes to do the calculation.) Dealers 
providing the quotes often have to do this calculation themselves if only because the 
dollar–Canada and dollar–yen currency pairs often trade on different trading desks 
and involve different traders. Electronic dealing machines used in both the interbank 
market and bank-to-client markets often provide this mathematical operation to 
calculate cross-rates automatically.
Because market participants can receive both a cross-rate quote (e.g., Canada–yen) 
as well as the component underlying exchange rate quotes (e.g., dollar–Canada and 
dollar–yen), these cross-rate quotes must be consistent with the previous equation; 
otherwise, the market will arbitrage the mispricing. Extending our example, we cal-
culate a Canada–yen (JPY/CAD) rate of 85.97 based on underlying dollar–Canada 
(CAD/USD) and dollar–yen (JPY/USD) rates of 1.3020 and 111.94, respectively. Now 
suppose that at the same time a misguided dealer quotes a Canada–yen rate of 86.20. 
This is a different price in Canada–yen for an identical service—that is, converting 
yen into Canadian dollars. Hence, any trader could buy CAD1 at the lower price of 
JPY85.97and then turn around and sell CAD1 at JPY86.20 (recall our earlier discussion 
of how price and base currencies are defined). The riskless arbitrage profit is JPY0.23 
per CAD1. The arbitrage—called triangular arbitrage (we use “tri-” because it involves 
three currencies—would continue until the price discrepancy was removed.
In reality, however, these discrepancies in cross-rates rarely occur because both 
human traders and automatic trading algorithms are constantly on alert for any pric -
ing inefficiencies. In practice, and for the purposes of this lesson, we can consider 
cross-rates as being consistent with their underlying exchange rate quotes and can 
assume that given any two exchange rates involving three currencies, we can back 
out the third cross-rate.
EXAMPLE 1
Cross-Rates and Percentage Changes
A research report produced by a dealer includes the following spot rate quotes:
 
Currency Spot Rate
Expected Spot Rate in One 
Y ear
USD/EUR 1.1701 1.1619
CHF/USD 0.9900 0.9866
USD/GBP 1.3118 1.3066
 
1. The sp ot CHF/EUR cross-rate is closest to: 
A.
 0.8461.
B. 0.8546.
C.
 1.1584.
S
olution:
C is correct:
    CHF _ EUR   =   USD _ EUR   ×   CHF _ USD   = 1.1701  × 0.9900  = 1.1584 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 8 Ex change Rate Calculations256
2. The sp ot GBP/EUR cross-rate is closest to: 
A.
 0.8920.
B. 1.1211.
C.
 1.4653.
S
olution:
A is correct:
    GBP _ EUR   =   USD _ EUR   ×   (  USD _ GBP  )    
−1
  =   USD _ EUR   ×   GBP _ USD   =   1.1701 _ 1.3118   = 0.8920 
3.
 B
ased on the research report, the euro is expected to appreciate by how 
much against the US dollar over the next year? 
A.
 –0.7 p
ercent
B. +0.7 p
ercent
C.
 +1.0 p
ercent
Solution:
A is correct. The euro is the base currency in the USD/EUR quote, and 
the expected decrease in the USD/EUR rate indicates that the euro is 
depreciating. In one year, it will cost less, in US dollars, to buy one euro. 
Mathematically:
    1.1619 _ 1.1701   − 1 = − 0.7 %  
4.
 B
ased on the research report, how much is the US dollar expected to appre-
ciate against the British pound sterling over the next year? 
A.
 +0.6 p
ercent
B. –0.4 p
ercent
C.
 +0.4 p
ercent
Solution:
C is cor`,
    },
  ],
  corp: [
    {
      number: 1,
      title: `Organizational Forms, Corporate Issuer Features, and Ownership`,
      pages: 34,
      los: `Mastery The candidate should be able to:
compare the organizational forms of businesses
describe key features of corporate issuers
compare publicly and privately owned corporate issuers`,
      intro: `This learning module introduces the Corporate Issuers topic area, which covers the 
fundamentals of how corporations are organized and governed and how they make 
operating, investing, and financing decisions. Financial analysts must have a strong 
understanding of corporate issuers because they are the largest type of issuer in finan-
cial markets globally; many analysts are focused entirely on analyzing and investing 
in their debt or equity instruments. In the first lesson of this module, we describe and 
compare the legal organizational forms of businesses, emphasizing their similarities 
and differences and important implications for investors. The second lesson focuses 
on the corporate organizational form and its key features, such as the separation of 
ownership and management, limited shareholder liability, access to financing, and tax 
issues. In the final lesson, we compare privately held and public corporate issuers, 
including the mechanisms of how corporate issuers go public and are taken private.`,
      overview: `■ Businesses are legally organized as sole proprietorships, 
partnerships, or limited companies, which differ by several 
attributes, including legal identity, owner–manager relations, owner 
liability, taxation, and access to financing. In practice, organizational 
forms are jurisdiction specific; our focus is on common characteristics. 
 ■ The limited company form, often known as the corporation, offers 
advantages over the other two forms by improving the ability to raise 
capital, through limited shareholder liability, the separation of own -
ership and management, and fewer restrictions on the number of 
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Businesses are legally organized as sole proprietorships, 
partnerships, or limited companies, which differ by several 
attributes, including legal identity, owner–manager relations, owner 
liability, taxation, and access to financing. In practice, organizational 
forms are jurisdiction specific; our focus is on common characteristics. 
 ■ The limited company form, often known as the corporation, offers 
advantages over the other two forms by improving the ability to raise 
capital, through limited shareholder liability, the separation of own -
ership and management, and fewer restrictions on the number of 
1
LEARNING MODULE
1
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 O rganizational Forms, Corporate Issuer Features, and Ownership4
owners and transferring ownership. In most jurisdictions, there are 
two types of limited companies: private limited companies and public 
limited companies.
 ■ Private limited companies tend to have some restrictions on own -
ership but pass-through taxation like partnerships. Public limited 
companies have no ownership restrictions, but their income can be 
taxed at both the company and shareholder level. While public lim -
ited companies do not have to go public by selling their shares on an 
exchange, it is this form that is most suitable for becoming a publicly 
traded company. 
 ■ Corporate shareholders elect a board of directors that appoints execu -
tive management to operate the company. Shareholders effect change 
primarily through their ability to replace directors. 
 ■ Corporations that seek external financing in financial markets, known 
as corporate issuers, can utilize either public or private markets, and 
these choices have implications for the liquidity and price transpar -
ency of the company’s securities, as well as its ability to raise future 
financing and the degree to which it must disclose information.
 ■ Corporate issuers can change their status from privately held to pub -
licly traded (or “listed”) through a variety of mechanisms, including 
an initial public offering. Publicly traded issuers can be taken private 
through several mechanisms, including a leveraged buyout.
 ■ Shareholders of corporate issuers include not only individuals and 
institutional investors, such as pension funds and mutual funds, but 
also governments, non-profits, and other corporations. 
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this topic.
1. F ill in the two blanks below using the two of the following four possible 
terms: 
Sole proprietorship
General partnership
Limited partnership
Public limited company (corporation)
A _____________________ likely has the greatest access to financing, while a 
_____________________ likely has the least access to financing. 
Solution:
A public limited company (corporation) likely has the greatest access to 
financing, while a sole proprietorship likely has the least access to financing.
A primary difference across organizational forms is access to financing to 
fund investments. The sole proprietorship is limited to its individual owner’s 
ability to invest her own money and borrowing capacity as an individual. At 
the other end of the spectrum, a public limited company can access a broad 
array of outside investors by issuing debt and/or equity securities.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 5
2. Whic h of the following organizational forms provides for the least owner 
liability of business debts?
A. General partnership
B. Private limited company
C. Sole proprietorship
Solution:
B is correct. In both the sole proprietorship and general partnership forms 
of organization, the owners are personally liable for all debts assumed by 
the company. In a private limited company, owner (shareholder) liability is 
limited to the value of their ownership stake.
3. V oting rights of a corporate issuer’s shareholders generally refer to which of 
the following?
A. The ability of the corporation to vote in political elections
B. The direct ability to elect a chief executive officer of the company
C. The ability to elect members of the company’s board of directors
Solution:
C is correct. The voting rights of shareholders generally allow them to elect 
board members as well as vote on other matters outlined in the company’s 
charter. The board of directors has the responsibility to hire (or retain) the 
company’s chief executive officer (CEO); thus, voting rights do not give 
shareholders the direct ability to hire the CEO. Despite the status of a corpo-
ration as a distinct legal entity, this status does not provide voting rights in 
political elections.
4. E xplain how the following situation reflects double taxation on the corpo -
rate organizational form: The corporation pays a 21% tax rate on pre-tax 
income of USD100 million. The corporation distributes USD10 million to its 
shareholders. Individuals pay a 20% tax on dividend income.
Solution:
The corporation pays USD21 million in income taxes at the corporate level 
and, collectively, the shareholders pay USD2 million in individual income 
taxes on dividends received. In total, USD23 million in income taxes were 
paid on the pre-tax income of USD100 million. Effectively, the USD10 mil-
lion paid as dividends was taxed twice, first as business income and again as 
personal income.
5. T rue or false: The term “public” for a public corporate issuer means that the 
company is wholly or partially owned by a government.
A. True
B. False
Solution:
B is correct. The statement is false because while a public corporate issuer 
could be owned partly by a government, this condition is not necessary. The 
term “public” refers only to the fact that a company’s equity securities are 
traded on an exchange and thus are available for investment by the public.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 O rganizational Forms, Corporate Issuer Features, and Ownership6
6. F ill in the blanks: 
A public company’s shares can be exchanged on a ________________, 
while a private company’s shares suffer from a lack of price 
____________________.
Solution:
A public company’s shares can be exchanged on a stock exchange, while a 
private company’s shares suffer from a lack of price transparency.
ORGANIZATIONAL FORMS OF BUSINESSES
compare the organizational forms of businesses
In most market economies, there are three general types of organization, each with 
distinct purposes, stakeholders, and governing legal frameworks: for-profit orga -
nizations, known as businesses or companies ; not-for-profit non-governmental 
organizations, or simply non-profits; and governments. 
The focus of this and subsequent modules are businesses, because financial ana -
lysts are important participants in the markets for their financial resources. However, 
non-profits and governments often are investors in businesses, which will be covered 
in later lessons. Governments as issuers of debt and other securities are covered in 
modules on fixed income.
Organizational Forms of Businesses
Business owners choose a legal organizational form that defines how returns, risks, 
and ownership and operational responsibilities are distributed. There are three general 
forms common to most jurisdictions.
Exhibit 1: Organizational Forms of Businesses
Businesses
Sole Trader or Sole
Proprietorship Partnership Limited Company
Non-Profits Governments
The organizational forms of businesses differ by several attributes:
 ■ Legal identity:  Whether the business is legally considered a separate entity 
or person apart from its owners 
 ■ Owner–manager relationship:  The relationship between the owner(s) of the 
business and those who manage the business 
2
© CFA Institute. For candidate use only. Not for distribution.
Organizational Forms of Businesses 7
 ■ Owner liability:  The ex`,
    },
    {
      number: 2,
      title: `Investors and Other Stakeholders`,
      pages: 30,
      los: `Mastery The candidate should be able to:
compare the financial claims and motivations of lenders and
describe a company’s stakeholder groups and compare their interests
describe environmental, social, and governance factors of corporate
issuers considered by investors`,
      intro: `Corporate issuers are financed with debt and equity. Debt and equity securities have 
different risk and return profiles for both issuers and investors. This learning module 
discusses these differences and their implications, while also considering the per -
spectives of a broader group of stakeholders beyond debtholders and shareholders. 
We introduce these groups and discuss potential conflicts of interest among them. 
Balancing stakeholder interests is important, as both issuers and investors have 
increasingly incorporated environmental, social, and governance factors into their 
decision-making processes. Analysts assess ESG factors to better evaluate issuers’ 
expected future performance and risk profile.`,
      overview: `■ Corporate issuers are financed with debt and equity. Debt is a 
financing source with a finite length, and interest and principal 
payments are promised on pre-specified future dates. Debtholders 
have a priority claim over shareholders to an issuer’s cash flows and 
assets.
 ■ Equity is a source of permanent financing, and no promises of repay -
ments or distributions to shareholders are made. Equity is a residual 
claim on an issuer’s cash flows and assets.
 ■ From the perspective of an issuer, debt is riskier than equity. From the 
perspective of an investor, equity is riskier than debt. The proportion 
of debt in a firm’s capital structure affects both the potential return 
and the risk of cash flows.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Corporate issuers are financed with debt and equity. Debt is a 
financing source with a finite length, and interest and principal 
payments are promised on pre-specified future dates. Debtholders 
have a priority claim over shareholders to an issuer’s cash flows and 
assets.
 ■ Equity is a source of permanent financing, and no promises of repay -
ments or distributions to shareholders are made. Equity is a residual 
claim on an issuer’s cash flows and assets.
 ■ From the perspective of an issuer, debt is riskier than equity. From the 
perspective of an investor, equity is riskier than debt. The proportion 
of debt in a firm’s capital structure affects both the potential return 
and the risk of cash flows.
1
LEARNING MODULE
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 In vestors and Other Stakeholders38
 ■ Conflicts of interest may exist between debtholders and sharehold -
ers. Debtholders’ payoff is limited to promised interest and principal 
payments, while shareholders’ payoff is theoretically unlimited as 
increases in firm value over the value of debt accrue to shareholders.
 ■ Besides debt and equity investors, corporate stakeholders include 
the board of directors, managers, employees, customers, suppliers, 
governments, society in general, and the environment. The stakeholder 
theory of corporate governance broadens the focus of corporate deci -
sion-making beyond that of the shareholder theory.
 ■ Environmental, social, and governance (ESG) considerations are 
becoming more important to both investors and analysts. ESG factors 
affect firms’ values and can present both risks and opportunities.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
Complete each statement by selecting the most appropriate term in 
parentheses.
1. ____________ mak e permanent capital available to issuers. (debtholders, 
shareholders)
Solution:
Shareholders make permanent capital available to issuers. 
Debtholders is incorrect. Debt has a finite maturity, though it can be far in 
the future.
2. ____________ ha ve a residual claim against a firm’s cash flows. (debtholders, 
shareholders)
Solution:
Shareholders have a residual claim against a firm’s cash flows. 
Debtholders is incorrect. Debtholders have a priority claim over sharehold-
ers to a firm’s cash flows and assets.
3. The s hareholder theory of corporate governance is _______________ than 
the stakeholder theory. (narrower, broader)
Solution:
The shareholder theory of corporate governance is narrower than the stake-
holder theory.
Stakeholders are groups and individuals with a vested interest in a firm’s 
success and include, but are not limited to, shareholders.
4. E SG considerations are an explicit objective in the _____________ theory of 
corporate governance. (shareholder, stakeholder)
Solution:
ESG considerations are an explicit objective in the stakeholder theory of 
corporate governance.
The stakeholder theory seeks to balance the interests of shareholders with 
the interests of a broader group that relate to ESG considerations.
© CFA Institute. For candidate use only. Not for distribution.
Financial Claims of Lenders and Shareholders 39
5. The e stimated impact of ESG factors on corporate issuers’ financial and 
share price performance has _________________ over time. (decreased, 
remained the same, increased)
Solution:
The estimated impact of ESG factors on corporate issuers’ financial and 
share price performance has increased over time. This impact is the result 
of changing consumer and investor preferences, increased regulations and 
taxes related to ESG factors, and the rising threat of climate change.
6. E SG factors are increasingly recognized as _______________ by analysts. 
(quantifiable, qualitative)
Solution:
ESG factors are increasingly recognized as quantifiable by analysts. His -
torically, ESG factors were considered negative externalities with no direct 
effect on firms’ financial statements. Increasingly, analysts are quantifying 
the effects of ESG factors and including them in firm valuation and invest-
ment decision-making.
FINANCIAL CLAIMS OF LENDERS AND 
SHAREHOLDERS
compare the financial claims and motivations of lenders and 
shareholders
Debt Versus Equity
The prior module established that corporations finance their assets with debt and 
equity. We now turn our attention to the nature of these claims, their relative risk 
versus return for both issuers and investors, and potential conflicts of interest that 
may arise between lenders and shareholders.
Debt and Equity Claims
Exhibit 1 shows the relationship between a corporation’s assets and the claims of its 
debt and equity investors that finance them. Exhibit 2 shows that assets are used to 
generate income to pay interest to debtholders, while remaining profits are either 
reinvested or distributed to shareholders.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 In vestors and Other Stakeholders40
Exhibit 1: Balance Sheet: Assets, Debt, and Equity
Short-Term Claims
and Assets
Short-Term 
ObligationsCash
EquityLong-Term
Assets
Long-Term
Obligations
Claims:
Suppliers
Customers
Employees
Community
Internal and
External
Governance
Obligations:
Suppliers
Customers
Employees
Community
Internal and
External
Governance
Economic
Balance
Sheet
Financial
Balance
Sheet
Debt and Other
Fixed
Obligations
Exhibit 2: Payments to Debt and Equity Investors
Cost of Goods Sold
Assets
Wages and Salaries
Interest Payments
Taxes
Suppliers
Employees
Debtholders
Government
Profit
(Net Income)
Retained
Earnings
Discretionary
Dividends Shareholders
to
less
Available to
reinvest
Use assets to
generate
revenue Customers
Revenue
Debtholders, or lenders, provide capital with a finite maturity. Issuers agree to make 
promised interest payments and to repay principal on pre-specified dates. Lenders 
have no decision-making power within the corporation, but debt contracts can be 
structured to protect lenders by imposing financial requirements and/or legal claims 
on certain assets of the corporation if the debt is not repaid as agreed. As shown in 
Exhibit 2, interest payments are paid before any distributions to equity investors and 
are a priority claim against a company’s assets and cash flows.
© CFA Institute. For candidate use only. Not for distribution.
Financial Claims of Lenders and Shareholders 41
Equity investors make permanent capital available to issuers; issuers generally do 
not commit to future dividends or repayments to shareholders. Rather, equity is a 
residual claim against company cash flows—whatever is left after expenses, invest -
ments, and debt payments. Cash distributions to equity investors are at the discretion 
of the board of directors. In contrast to lenders, equity investors have voting rights on 
important company matters such as choosing the board of directors, which appoints 
and oversees management. 
In addition to interest payments to debtholders, other claims that must be satisfied 
before any shareholder distributions are made include payments to suppliers, employ-
ees, and governments (in the form of taxes). If a firm is dissolved and its assets are 
liquidated, these priority claims must be met before equity investors receive anything.
Because debt is a priority, fixed, and finite claim on assets and cash flows, it is a less 
costly form of financing for issuers: it is lower risk for investors than equity (though, 
as will be discussed, increasing debt increases risk for a company’s equity investors). 
Another difference between debt and equity is that debtholder interest payments are 
usually treated as a tax-deductible expense, reducing taxable income, while dividends 
paid to shareholders are not.
KNOWLEDGE CHECK
1. I dentify whether the attribute on the left is a feature of debt or 
equity.
 
Legal repayment obliga`,
    },
    {
      number: 3,
      title: `Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits`,
      pages: 30,
      los: `Mastery The candidate should be able to:
describe the principal-agent relationship and conflicts that may arise
between stakeholder groups
describe corporate governance and mechanisms to manage
stakeholder relationships and mitigate associated risks
describe potential risks of poor corporate governance and
stakeholder management and benefits of effective corporate
governance and stakeholder management`,
      intro: `Corporations are complex structures with stakeholders beyond owners, lenders, and 
managers. Corporate governance involves the creation and maintenance of a system 
of checks, balances, and incentives that addresses conflicting interests among these 
stakeholders. In this Learning Module, we first identify key aspects of the relation -
ships between these parties and the potential conflicts that may arise. In the second 
lesson, we turn to the various mechanisms established to manage these conflicts, 
settle disputes, and mitigate risk. Finally, we highlight the benefits of strong corporate 
governance and stakeholder management policies as well as the risks of weak policies 
and their potential impact on corporate performance.`,
      overview: `■ A principal-agent relationship is created when one party (a 
principal) hires another party (an agent) to perform a task or 
service. The relationship can exist with or without a contract. The 
agent is expected to act in the principal’s best interest.
 ■ In many cases, the agent possesses more information than the prin -
cipal, and conflicts arise where the interests of the principal and the 
agent diverge. In a corporation, shareholders are a principal and elect 
directors (an agent) , who appoint managers (another agent), who are 
charged with maximizing shareholder value.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ A principal-agent relationship is created when one party (a 
principal) hires another party (an agent) to perform a task or 
service. The relationship can exist with or without a contract. The 
agent is expected to act in the principal’s best interest.
 ■ In many cases, the agent possesses more information than the prin -
cipal, and conflicts arise where the interests of the principal and the 
agent diverge. In a corporation, shareholders are a principal and elect 
directors (an agent) , who appoint managers (another agent), who are 
charged with maximizing shareholder value.
1
LEARNING MODULE
3
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 C orporate Governance: Conflicts, Mechanisms, Risks, and Benefits68
 ■ Given the complex ecosystem of stakeholders in a corporation, the 
rights, responsibilities, and powers of each stakeholder must be 
considered when establishing an appropriate governance structure by 
striking a balance among the interests of these groups while meeting 
corporate objectives.
 ■ A sound governance structure consists of mechanisms to ensure 
adherence to rules and regulations imposed by external authorities 
as well as to meet the unique requirements of internal stakeholders. 
These mechanisms include financial reporting, general and extraordi -
nary meetings, compensation, debt covenants, and more.
 ■ Weak corporate governance, unmanaged conflicts of interest, or inad -
equate stakeholder management can place firms at a competitive dis -
advantage. Strong governance practices and a proper balance among 
stakeholders’ interests are often reflected in increased competitiveness 
and operational efficiency, better control processes, and improved 
performance.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. The f ollowing statements relate to the ecosystem of stakeholders in a cor -
poration. Complete each statement by selecting one of the following: agent, 
principal, contractual, principal-agent, employer-employee
In a corporation, the board of directors is elected to act as a(n 
________________.
In a corporation, shareholders are a(n) ________________.
Customers have a(n) ________________ relationship with a corporate issuer.
Solution:
In a corporation, the board of directors is elected to act as an agent.
In a corporation, shareholders are a principal.
Customers have a contractual relationship with a corporate issuer.
2. Conflic ts arise where the interests of a principal and an agent diverge, 
resulting in agency costs. Identify and explain an example of an agency cost 
for a corporate issuer.<QuestionType>essay</QuestionType>
Solution:
An example of an agency cost for public companies is the cost of hiring 
an external independent auditor for the financial statements and internal 
controls. Audit fees are paid by the issuer, a cost borne by the shareholders, 
to mitigate the risk that financial reports are materially misstated or deviate 
from generally accepted accounting principles.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 69
3. Ma tch the mechanism to manage relationships or settle disputes with the 
applicable stakeholder
 
1. Shareholders A. Ad hoc committee
2. Creditors B. Proxy contest
3. Management C. – Stock-based compensation
 
Solution:
1. B is correct. Proxy contests are one mechanism for shareholders to pursue 
changes in corporate control.
2. A is correct. When a company is struggling to meet its debt obligations, 
an ad hoc committee may be formed by a group of bondholders to approach 
the company with potential options to restructure their bonds.
3. C is correct. Stock-based compensation seeks to align the interests of 
management and shareholders.
4. A(n) ________________ ma y be called when requested by a specific mini-
mum number of calling shareholders, as detailed in the company’s bylaws or 
charter.
Solution:
An extraordinary general meeting (EGM) may be called when requested 
by a specific minimum number of calling shareholders, as detailed in the 
company’s bylaws or charter.
5. S tudies have shown that improvements in corporate governance practic -
es ________________ (increase/decrease) the likelihood of a credit rating 
________________ (upgrade/downgrade), which tends to ________________ 
(increase/decrease) the cost of debt.
Solution:
Studies have shown that improvements in corporate governance practices 
increase the likelihood of a credit rating upgrade, which tends to decrease 
the cost of debt.
6. Wha t types of questions should analysts consider about a company’s cor -
porate governance and stakeholder management?<QuestionType>essay</
QuestionType>
Solution:
Key questions analysts should consider about a company’s corporate gover-
nance and stakeholder management include the following:
 ■ What is the company’s ownership and voting structure?
 ■ How well do board members’ skills and experience match the current 
and future needs of the company?
 ■ How closely does the management team’s compensation and incentive 
structure align with factors expected to drive overall company results?
 ■ Who are the significant investors in the company?
 ■ How strong are company shareholder rights versus its peers?
 ■ How effective has management been in taking a long-term perspective 
on risks and sustainability?
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 C orporate Governance: Conflicts, Mechanisms, Risks, and Benefits70
STAKEHOLDER CONFLICTS AND MANAGEMENT
describe the principal-agent relationship and conflicts that may arise 
between stakeholder groups
A corporation is a legal entity with a complex ecosystem of stakeholders. Corporate 
stakeholder relationships include contractual, principal-agent, and other relationships 
as illustrated in Exhibit 1.
Exhibit 1: Principal-Agent and Other Relationships
Governments
Compliance
Agent relationship
Oversight
Contract relationship Contract relationship
Agent relationship
Agent relationship
Appoint board (vote)
Purchaser of outputContract relationship
Capital provider
Capital provider
Contract
relationshipSeller of input
Corporation
Hire
HireSuppliers
Customers
Employees
Managers
(Agent)
Board of Directors
(Agent)
Creditors/
Debtholders
Shareholders
(Principal)
A principal-agent relationship (or agency relationship) is created when one party 
(a principal) hires another party (an agent) to perform a task or service and can be 
present with or without a contract governing the relationship. An agent is expected to 
act in the principal’s best interest, and the relationship involves trust and expectations 
of loyalty and diligence. In many cases, the agent possesses more information than 
the principal, which means that the principal is often unable to directly verify that the 
agent is acting in the principal’s best interest. Conflicts arise where the interests of 
the principal and agent diverge, resulting in agency costs, which can be direct, such 
as the costs of hiring monitoring agents (e.g., a board of directors hiring an auditor), 
or indirect, like the forgone profits and economic benefits of lost opportunities.
In a corporation, shareholders are a principal and elect directors (an agent), who 
are expected to pursue shareholders’ interests by hiring managers (another agent) to 
maximize shareholder value. Shareholders and lenders demand higher returns and 
risk premiums when faced with greater information asymmetry due to the greater 
potential for conflicts of interest. Principal-agent relationships and potential conflicts 
arise in several areas within corporations.
2
© CFA Institute. For candidate use only. Not for distribution.
Stakeholder Conflicts and Management 71
Shareholder, Board Director, and Manager Relationships
Directors and managers have more information about a company’s performance, 
risks, and investmen`,
    },
    {
      number: 4,
      title: `Working Capital and Liquidity`,
      pages: 38,
      los: `Mastery The candidate should be able to:
explain the cash conversion cycle and compare issuers’ cash
explain liquidity and compare issuers’ liquidity levels
describe issuers’ objectives and compare methods for managing
working capital and liquidity`,
      intro: `Earlier lessons introduced the balance sheet of corporate issuers, composed of assets 
financed by liabilities (including debt) and equity. This learning module covers the 
analysis of short-term assets and liabilities, those that result in cash inflows or outflows 
within a year. The behavior of these assets and liabilities is primarily determined by 
an issuer’s payment and delivery terms with its customers and suppliers. Subsequent 
modules cover issuers’ long-term assets, liabilities, and equity financing. Short-term 
assets and liabilities are a key determinant of an issuer’s ability to generate cash flows 
for investors, and mismatches between the timing and liquidity of assets and liabilities 
can have catastrophic effects on a firm. For these reasons and others, analysts closely 
scrutinize issuers’ cash conversion and liquidity.`,
      overview: `■ Issuers invest cash to generate revenues and profits. The cash 
conversion cycle is the length of time from paying suppliers to 
collecting cash from customers.
 ■ The cash conversion cycle is measured as the sum of days of inventory 
on hand and days sales outstanding, less days payable outstanding. A 
short cash conversion cycle means that an issuer converts an invest -
ment in inventory into cash quickly, while a long cash conversion cycle 
means that an issuer converts its inventory investments into cash 
slowly.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Issuers invest cash to generate revenues and profits. The cash 
conversion cycle is the length of time from paying suppliers to 
collecting cash from customers.
 ■ The cash conversion cycle is measured as the sum of days of inventory 
on hand and days sales outstanding, less days payable outstanding. A 
short cash conversion cycle means that an issuer converts an invest -
ment in inventory into cash quickly, while a long cash conversion cycle 
means that an issuer converts its inventory investments into cash 
slowly.
1
LEARNING MODULE
4
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 W orking Capital and Liquidity98
 ■ Collecting cash from customers sooner, delaying payments to suppli -
ers, and reducing inventory levels relative to sales improve an issuer’s 
cash conversion cycle.
 ■ Working capital is defined as an issuer’s short-term assets minus its 
short-term liabilities. Net working capital adjusts for non-operating 
accounts such as cash, marketable securities, and short-term debt. The 
ratio of net working capital to sales is closely related to an issuer’s cash 
conversion cycle a long cash conversion cycle is associated with higher 
net working capital to sales, while a short cash conversion cycle is 
associated with lower net working capital to sales.
 ■ An issuer’s liquidity is primarily determined by the relative amounts 
and liquidity of its short-term assets and liabilities, which are deter -
mined by the issuer’s business model. The long-run primary source 
of liquidity for most issuers is cash flow from operations. Secondary 
sources of liquidity are typically used in crises and impose significant 
costs, such as issuing equity, renegotiating contracts, selling assets, 
and filing for bankruptcy protection.
 ■ Drags and pulls on liquidity affect an issuer’s liquidity situation. Drags 
on liquidity reduce cash inflows and include such issues as uncollect -
ible receivables and obsolete inventory. Pulls on liquidity are accelera -
tions in cash outflows or interruptions in credit.
 ■ Issuers may adopt a conservative, moderate, or aggressive approach 
to working capital management, and these approaches differ in the 
amount of working capital held on the balance sheet as well as in their 
reliance on external financing and the composition of short- and long-
term financing.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Whic h of the following actions or events will most likely decrease an issuer’s 
cash conversion cycle?
A. Buying short-term marketable securities using cash on hand
B. Offering customers a discount for payment received within 10 days
C. Slowing of sales of certain goods due to changing preferences in styles
Solution:
B is correct. A prompt-payment discount would likely reduce days sales 
outstanding and, in turn, decrease the issuer’s cash conversion cycle.
A is incorrect, because increasing marketable securities by reducing cash 
does not affect the issuer’s cash conversion cycle.
C is incorrect, because the slowing of sales of certain goods would likely 
increase days of inventory on hand and, in turn, increase the issuer’s cash 
conversion cycle.
2. Whic h of the following actions will most likely increase an issuer’s liquidity?
A. Forgoing a supplier’s discount for prompt payments
B. Relaxing terms for customers by lengthening the payment period
© CFA Institute. For candidate use only. Not for distribution.
Introduction 99
C. Purchasing short-term marketable securities with cash on hand
Solution:
A is correct. Forgoing the discount is using the supplier’s financing and will 
result in the issuer stretching out payments on accounts payable, putting 
less drain on liquidity in the short run. This action increases the issuer’s cash 
conversion cycle.
B is incorrect, because by relaxing credit terms, customers will take longer 
to pay, so this action increases the cash conversion cycle.
C is incorrect, because marketable securities are generally less liquid than 
cash, so this action would reduce liquidity. Even if the marketable securi-
ties are as liquid as cash (e.g., short-term Treasuries), this action would not 
materially affect liquidity.
3. The P lough Corporation reports the following items on its two most recent 
balance sheets (in millions)
 
Fiscal Y ear-End
31 December 20X2 31 December 20X1
Cash 10 15
Short-term marketable securities 20 15
Accounts receivable 100 80
Inventory 200 150
Prepaid expenses 5 5
Accounts payable 100 120
Accrued expenses 50 60
 
Based on the cash ratio, the company has:
A. become less liquid.
B. become more liquid.
C. not changed regarding liquidity.
Solution:
B is correct. The cash ratios for the two fiscal year-ends are:
  Cash ratio, 20X1 =    15 + 15 _ 120 + 60   =    30 _ 180   = 0.1667 
  Cash ratio, 20X2 =    10 + 20 _ 100 + 50   =    30 _ 150   = 0.20 
The cash ratio has increased from 0.1667 to 0.20, indicating an increase in 
liquidity.
4. Whic h of the following events or activities is most likely to be a drag on 
liquidity?
A. Inventory that becomes obsolete
B. Making payments to suppliers earlier
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 W orking Capital and Liquidity100
C. Offering a discount to customers who pay within 10 days
Solution:
A is correct. As inventory becomes obsolete, it becomes more challenging to 
sell and inventory levels increase. This event is a drag on liquidity, because it 
slows cash flows.
B is incorrect, because making payments to suppliers earlier is a pull on 
liquidity.
C is incorrect, because offering a prompt-payment discount is likely to result 
in cash receipts sooner, which would improve liquidity.
5. Whic h of the following actions provides a secondary source of liquidity?
A. Issuance of equity securities
B. Collecting accounts receivable
C. Taking advantage of a supplier’s financing and paying on the net day, 
day 40
Solution:
A is correct. Primary sources of liquidity include cash on hand, borrowings, 
and cash flow from operations. Secondary sources of liquidity generate 
cash at a greater cost when primary sources are insufficient, such as issuing 
equity.
B is incorrect, because collection of accounts receivable is a primary source 
of liquidity.
C is incorrect, because supplier financing is a primary source of liquidity.
6. C lassify each of the following actions as either a conservative or an aggres -
sive approach to working capital management:
 
  Conservative Aggressive
Minimize inventory levels    
Greater reliance on long-term debt and equity 
financing    
Lower level of short-term assets    
Greater reliance on short-term debt    
 
Solution:
 
  Conservative Aggressive
Minimize inventory levels   ✓
Greater reliance on long-term debt and equity 
financing ✓  
Lower level of short-term assets   ✓
Greater reliance on short-term debt   ✓
 
© CFA Institute. For candidate use only. Not for distribution.
Cash Conversion Cycle 101
CASH CONVERSION CYCLE
explain the cash conversion cycle and compare issuers’ cash 
conversion cycles
A company’s business operations are usually composed of several sequential steps. 
For a company that makes and sells physical goods, its operations include acquiring 
materials, producing inventory, selling products to customers, and collecting cash. 
These activities are known as the issuer’s operating cycle and occur once or many 
times over a year, as illustrated in Exhibit 1.
Exhibit 1: Operating Cycle
Purchases
Sales
Collection
Production
Cash
Raw
Materials
Finished
Goods
Customer
Credit
These activities result in cash outflows and inflows that usually do not occur at the 
same time as the activity. For example, materials are purchased and received by a firm 
but may not be paid for in cash until weeks or months later. Goods are sold to cus -
tomers, but cash may not be received until weeks or m`,
    },
    {
      number: 5,
      title: `Capital Investments and Capital Allocation`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe types of capital investments
describe the capital allocation process, calculate net present value
(NPV), internal rate of return (IRR), and return on invested capital
(ROIC), and contrast their use in capital allocation
describe principles of capital allocation and common capital
describe types of real options relevant to capital investments`,
      intro: `The previous learning module described issuers’ short-term investments and financing 
activities. In this module and the next, we turn our attention to issuers’ long-term 
investment and financing activities. First, we explore the various forms of capital 
investment and their purposes. We then discuss the investment decision-making 
process and compare analytical approaches employed in that process. In the third 
lesson, we describe principles of capital allocation and common pitfalls. While the 
goals of both capital allocation and estimating expected investment returns are to 
select the best choice among investment alternatives, a firm’s decision today may 
influence future investment decisions, resulting in so-called real options, which are 
discussed in the final lesson.`,
      overview: `■ Companies make capital investments to maintain or expand 
operations. Capital investments can be grouped into four cate -
gories based on their risk and return characteristics: (1) going concern 
projects, (2) regulatory/compliance projects, (3) expansion projects, 
and (4) other.
 ■ Capital allocation is a process undertaken by issuers’ management and 
board for evaluating investment opportunities based on their expected 
contribution to shareholder value, as well as other considerations, 
such as environmental, social, and governance (ESG) factors. Although 
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Companies make capital investments to maintain or expand 
operations. Capital investments can be grouped into four cate -
gories based on their risk and return characteristics: (1) going concern 
projects, (2) regulatory/compliance projects, (3) expansion projects, 
and (4) other.
 ■ Capital allocation is a process undertaken by issuers’ management and 
board for evaluating investment opportunities based on their expected 
contribution to shareholder value, as well as other considerations, 
such as environmental, social, and governance (ESG) factors. Although 
1
LEARNING MODULE
5
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 C apital Investments and Capital Allocation136
some projects might look profitable on an accounting or standalone 
basis, they might be uneconomical compared to alternatives or from 
an overall strategic perspective. Such projects should not be pursued, 
and capital should instead be returned to shareholders.
 ■ Net present value (NPV) and internal rate of return (IRR) are two 
tools used to evaluate individual investment projects. NPV estimates 
the increase in firm value from a project, while IRR is an estimate of 
the rate of return on a project, subject to certain assumptions, which 
can be compared to a hurdle rate.
 ■ Unlike NPV and IRR, return on invested capital (ROIC) is a compa -
ny-wide measure and can be calculated using data available to inde -
pendent analysts. ROIC is the rate of return an issuer earns over a 
period across all investments and can be compared to an investor’s 
required rate of return. Like NPV and IRR, ROIC is subject to limita -
tions and assumptions.
 ■ Before investment projects are appraised on a quantitative basis, they 
should be modeled in accordance with certain principles, including 
measurement of cash flows on an after-tax basis, avoiding double 
counting, and including a project’s impact on the rest of the firm. 
Impacts can be positive, such as cost savings, or negative, such as the 
loss of sales from existing products.
 ■ Apart from deviations from these principles, capital allocation is addi -
tionally prone to behavioral biases and cognitive errors. These pitfalls 
can be detected by a thorough analysis of a company’s financials on a 
historical and comparative basis, as well as an examination of corpo -
rate governance and management renumeration policies.
 ■ Real options are like financial options in that they provide a right, not 
an obligation, for management to alter different aspects of capital proj -
ects in the future. Those aspects include timing and size of a project, 
as well as flexibility with regard to future pricing policies or operating 
capacity.
 ■ The most common approach to evaluating projects with real options 
is to compare a project’s NPV before and after inclusion of an option’s 
value less the option’s cost. More advanced methods include decision 
trees and option pricing models, which require assumptions about the 
probability of future events.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. The f ollowing list contains either an example or an attribute of a capital 
investment project. Assign each item to either maintenance or growth.
 ■ Acquisition
 ■ Expand business scope
 ■ Research and development
 ■ Replace outdated facilities
 ■ High-risk investment and uncertainty
© CFA Institute. For candidate use only. Not for distribution.
Introduction 137
 ■ Limited downside risk and uncertainty
 ■ Needed to meet safety, compliance, regulatory standards
 
Maintenance Growth
                           
                           
                           
                           
 
Solution:
 
Maintenance Growth
Replace outdated facilities Acquisition
Needed to meet safety, compliance, 
regulatory standards
Expand business scope
Limited downside risk and uncertainty Research and development
  High-risk investment and uncertainty
 
2. When c alculating IRR, the interim cash flows are assumed to be reinvested 
and earn a rate of return rate that is:
A. lower than IRR.
B. the same as IRR.
C. higher than IRR.
Solution:
B is correct. An important assumption of IRR is that it represents only the 
(geometric) rate of return on the investment if interim cash flows are rein-
vested at the IRR.
A is incorrect because if reinvestment rates are lower compared to IRR, the 
rate of return on the investment will be lower than the IRR.
C is incorrect because if reinvestment rates are higher compared to IRR, the 
rate of return on the investment will be higher than the IRR.
3. Com plete the following sentences by filling in the blanks using the terms 
provided. 
When calculating ROIC, an independent analyst should add 
_________________ and _________________ to calculating average invested 
capital. ROIC, _________________ project NPV and IRR, can be calculated 
using data available to independent investment analysts.
like
unlike
equity
short-term assets
long-term assets
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 C apital Investments and Capital Allocation138
long-term liabilities
Solution:
When calculating ROIC, an independent analyst should add equity and 
long-term liabilities to calculate average invested capital. ROIC, unlike 
project NPV and IRR, can be calculated using data available to independent 
investment analysts.
4. E xplain why capital allocation decisions should not be based on accounting 
measures such as earnings per share (EPS).
Solution:
Capital investments with a positive NPV can reduce rather than increase ac-
counting measures in the near term, while cost cutting and share buybacks, 
in contrast, may have a positive effect on such measures. Basing investment 
decisions on short-term accounting numbers can lead a company to choose 
investments that are not in the long-run interests of its shareholders. Addi-
tionally, capital allocation should consider opportunity costs, such as by us-
ing a required rate of return for calculating NPV and an appropriate hurdle 
rate for an IRR. Accounting profits do not consider opportunity costs.
5. The ann ual report of company XYZ contains the following disclosures:
Disclosure 1: “XYZ’s management compensation is based on exceeding a 
target EPS growth rate. ”
Disclosure 2: “XYZ’s management does not change the required rate 
of return when evaluating capital projects based on whether they are 
financed by internal or external sources. ”
Disclosure 3: “When evaluating investment projects, XYZ prepares cash-
flow projections based on inflation-adjusted cash flows and discounts 
them using real rates. ”
Which of the disclosed policies does not conform to best practices regarding 
capital allocation?
A. Disclosure 1
B. Disclosure 2
C. Disclosure 3
Solution:
A is correct. Positive-NPV investment projects can reduce, rather than 
increase, EPS in the near term, even though they increase shareholder value. 
Management compensation should incorporate a longer-term perspective 
and a measure that better considers required rates of return, such as ROIC.
B is incorrect because internally generated capital, such as cash flow from 
operations, is equity financing and it could be returned to equity inves-
tors as a dividend. Regardless of the financing source, management should 
use appropriate risk-adjusted required rates of return to evaluate capital 
investments.
C is incorrect because companies may perform analysis in either nominal or 
real terms, but the approach to cash flows and the discount rate should be 
consistent. That is, nominal cash flows should be discounted at a nominal 
discount rate, and real (inflation-adjusted) cash flows should be discounted 
at a real rate.
© CFA Institute. For candidate use only. Not for distribution.
Capital Investments 139
6. E xplain what real options are and how they influence com`,
    },
    {
      number: 6,
      title: `Capital Structure`,
      pages: 38,
      los: `Mastery The candidate should be able to:
calculate and interpret the weighted-average cost of capital for a
explain factors affecting capital structure and the weighted-average
explain the Modigliani–Miller propositions regarding capital
describe optimal and target capital structures`,
      intro: `Earlier lessons addressed a firm’s short-term activities and longer-term capital invest-
ment decisions. We now turn to the last part of the balance sheet: long-term debt 
and equity financing, known as a firm’s capital structure. The first lesson introduces 
the basic objective of most managers when choosing a capital structure: minimizing 
the firm’s weighted-average cost of capital. The second lesson considers the internal 
and external factors that influence a firm’s choice of—and investors’ willingness to 
offer—debt versus equity financing. While capital structure seems like an important 
decision for boards and managers, it is the present value of future cash flows, rather 
than a firm’s capital structure, that primarily drives a firm’s value, a central insight in 
the influential work of Franco Modigliani and Merton Miller. In the third lesson, we 
explore the simplifying assumptions used by Modigliani and Miller to demonstrate 
the irrelevance of capital structure to firm value, and then we relax these assumptions 
to show the impact of both taxes and the cost of financial distress. In the final lesson, 
we discuss optimal and target capital structures for issuers.`,
      overview: `■ An issuer’s cost of capital is composed of its cost of debt and 
equity, which are defined as its investors’ required rates of 
return on debt and equity financing. An issuer’s cost of capital is esti -
mated using a weighted average of the costs of debt and equity, using 
either current market value or management’s target weights of each 
type of financing as the weights.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ An issuer’s cost of capital is composed of its cost of debt and 
equity, which are defined as its investors’ required rates of 
return on debt and equity financing. An issuer’s cost of capital is esti -
mated using a weighted average of the costs of debt and equity, using 
either current market value or management’s target weights of each 
type of financing as the weights.
1
LEARNING MODULE
6
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 C apital Structure176
 ■ Issuers generally aim to minimize their weighted-average cost of 
capital and to match the duration of their assets and financing. 
Managements’ target capital structures are usually stated using book 
values or indirectly through financial leverage ratios, such as a max -
imum ratio of debt or net debt to EBITDA or a minimum credit rating.
 ■ While management has some influence, the total amount and type 
of financing needed or the weights in the WACC calculation often 
depends on the issuer’s business model (e.g., capital intensive or capi -
tal light) and on the company’s life cycle stage.
 ■ The component costs of debt and equity are determined by top-down 
factors, such as financial market and industry conditions, and by issu -
er-specific factors, including the stability of revenues and operating 
and financial leverage.
 ■ Modigliani and Miller (MM) showed, under a restrictive set of 
assumptions including no taxes, that an issuer’s capital structure is 
irrelevant to firm value. MM relaxed the assumptions by considering 
corporate taxes, financial distress, and bankruptcy costs and showed 
that capital structure does matter, although far less than an issuer’s 
future cash flows, for firm value.
 ■ Under MM’s static trade-off theory of capital structure, the optimal 
capital structure occurs where the tax benefit of debt equals the finan -
cial distress costs associated with debt.
 ■ The pecking order theory of capital structure is an alternative to the 
static theory and suggests that a firm will use internal financing as 
much as possible. If external financing is needed, the firm prefers 
private debt over public debt and will limit the use of equity financing 
if possible.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. In c omputing WACC, the cost of equity is higher than the cost of debt be -
cause the:
A. cost of debt is set by management.
B. distributions to shareholders are tax deductible.
C. debt investors take less risk than equity investors.
Solution:
C is correct. Debt is less risky than equity because it has a priority, contrac-
tual claim on the firm’s cash flow. Additionally, some debt is secured with an 
underlying asset. In contrast, equity is a residual claim.
A is incorrect because an issuer’s cost of debt, like its cost of equity, is deter-
mined by financial market participants.
B is incorrect because, generally, distributions to shareholders, such as 
dividends, are not tax deductible while interest expense is tax deductible in 
many jurisdictions.
2. N utry, Inc., has a capital structure of 30% debt and 70% equity, and interest 
expense is tax deductible. Debt investors require a before-tax return of 5%, 
© CFA Institute. For candidate use only. Not for distribution.
Introduction 177
and equity investors’ required return is 10%. If the marginal corporate tax 
rate is 20%, the WACC is closest to:
A. 5.9%.
B. 8.2%.
C. 8.5%.
Solution:
B is correct. Nutry’s WACC is calculated as follows:
	 W ACC	= 	(W eighting 	of 	debt 	× 	Cost 	of 	debt) 	+ 	(W eighting 	of 	equity 	× 	Cost 	of	
equity)
 = (0.3)(5%)(1 – 0.2) + (0.70)(10%) = 8.2%.
Thus, the WACC for Nutry is 8.2%. The cost of debt is stated on an after-tax 
basis because interest expense is tax deductible in Nutry’s jurisdiction.
3. The optimal c apital structure is determined where the benefit of the debt tax 
shield is offset by the cost of financial distress under the:
A. pecking order theory.
B. free cash flow hypothesis.
C. static trade-off theory of capital structure.
Solution:
C is correct. The static trade-off theory of capital structure incorporates 
both the value-enhancing effect of the tax shield and the value-reducing 
impact of the costs of financial distress. At the optimal level of debt, the 
financial distress cost equals the tax benefit of debt.
The pecking order theory states that firms use internally generated funds 
first because there are no floatation costs or negative signals. If more funds 
are needed, firms issue debt and only as a last resort will they issue equity. 
There is no optimal capital structure.
The free cash flow hypothesis argues that higher debt levels discipline man-
agers by forcing them to manage the company efficiently and use cash wisely 
so the company can make its interest and principal payments.
4. T rue or False: Managers cannot precisely estimate the optimal capital struc -
ture, but they often establish a target capital structure. An issuer’s actual 
capital structure may differ from its target based on business and financial 
market conditions.
A. True
B. False
Solution:
A is correct. Since management cannot estimate the optimal capital struc-
ture in practice, it instead sets a target capital structure. The actual capital 
structure may deviate from the target for several reasons. First, the firm may 
be able to issue debt at a favorable rate, so management takes advantage of 
these opportunities. Second, changing market values of the firm’s debt and 
equity may cause the firm’s actual capital structure to differ from its target. 
Transaction costs make it costly to constantly adjust to the changing market 
values.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 C apital Structure178
5. The amoun t and type of financing needed or the weights in the WACC cal-
culation depend on the issuer’s:
A. business model.
B. financial leverage.
C. proportion of fixed cost to total costs.
Solution:
A is correct. The amount and type of financing needed or the weights in the 
WACC calculation depend on the business model and the stage in the com-
pany’s life cycle. Some businesses require large amounts of assets and are 
capital intensive. Other business models require less assets and are capital 
light.
B and C are incorrect because the proportion of fixed assets to total costs 
(operating leverage) and financial leverage are issuer-specific factors that 
influence the component costs of debt and equity.
6. U nder Modigliani and Miller (MM), if one assumes no taxes and no finan -
cial distress cost, among other assumptions, the value of the company is:
A. determined by its capital structure.
B. determined solely by its expected future cash flows.
C. set so the value of levered company is greater than that of the 
unlevered company.
Solution:
B is correct. MM showed that under a set of restrictive assumptions, includ-
ing zero taxes, the firm’s value is unaffected by its financing mix or capital 
structure. It is the firm’s cash flow that is the primary determinant of value. 
If the market value of the company is not affected by its financing mix, then 
the value of the levered firm is equal to the value of the unlevered firm.
THE COST OF CAPITAL
calculate and interpret the weighted-average cost of capital for a 
company
As discussed in prior lessons, issuers make capital investments that are expected 
to have a return on investment greater than the required rate of return. An issuer’s 
required rate of return on its capital investments is derived from its investors’ required 
rates of return, adjusted for specific risks in the project. If the issuer has exhausted its 
positive-NPV project opportunities, it should return capital to investors so they can 
invest elsewhere and earn their required rate of return. Not doing so would destroy 
value for investors.
For an issuer, its req`,
    },
    {
      number: 7,
      title: `Business Models`,
      pages: 30,
      los: `Mastery The candidate should be able to:
describe key features of business models
describe various types of business models`,
      intro: `A clearly described business model helps the analyst understand a business: its strategy, 
operations, target markets, key customers, suppliers, and ultimately prospects, risks, 
and financial profile. Many firms have conventional business models that are easily 
understood and have long existed, such as manufacturers and retailers. However, 
many business models are complex, novel, or a combination of models. Technological 
innovation, particularly digitalization, has enabled significant business model innova -
tion over the past decades. Analysts need to develop their own understanding of an 
issuer’s business model to inform their outlook and risk assessment; analysts should 
not rely solely on management’s description of its business model.`,
      overview: `■ A business model addresses four key parts of a business: the 
customers (the “who”), the firm’s product and service offerings 
(the “what” and often the “why”), channels for reaching customers (the 
“where”), and pricing (the “how much”).
 ■ A pricing model describes the amount customers are billed for units of 
products or services. A firm’s value proposition refers to the product 
attributes that lead customers to purchase the product rather than 
those of competitors. A firm’s value chain refers to how a firm struc -
tures its systems and processes to create value for its customers. 
 ■ Conventional business models are common and long established, 
while unconventional business models are based on innovations or 
industry-specific combinations and variations of conventional models.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ A business model addresses four key parts of a business: the 
customers (the “who”), the firm’s product and service offerings 
(the “what” and often the “why”), channels for reaching customers (the 
“where”), and pricing (the “how much”).
 ■ A pricing model describes the amount customers are billed for units of 
products or services. A firm’s value proposition refers to the product 
attributes that lead customers to purchase the product rather than 
those of competitors. A firm’s value chain refers to how a firm struc -
tures its systems and processes to create value for its customers. 
 ■ Conventional business models are common and long established, 
while unconventional business models are based on innovations or 
industry-specific combinations and variations of conventional models.
1
LEARNING MODULE
7
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 Business Models214
 ■ Digital technology has been particularly influential for business model 
innovation by generating new products, new channels, new ways to 
communicate and exchange information, and new methods for han -
dling financial transactions.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. ________________ r efers to characterizing types of customers a firm may 
serve according to attributes such as geography, demographics, behavior, 
preferences, income, affinity for technology, and self-image.
A. Channeling
B. Segmenting
C. Direct selling
Solution:
B is correct. Companies often identify and group prospective or current 
customers into segments based on attributes useful for sales, marketing, and 
product design.
2. The obj ective of ________________ is to maximize profit in situations where 
different customers have different willingness or ability to pay.
A. unit economics
B. price discrimination
C. functional separation
Solution:
B is correct. Firms can price the same or similar products and services 
differently by customer segment, volume purchased, season, time of day, 
channel, and so on, based on perceived customer preferences to expand 
their addressable market.
3. Com panies selling in markets with many competitors and little or no prod -
uct differentiation are often ____________; in contrast, companies selling 
differentiated products with few competitors tend to have ____________.
A. crowdsourcing; bundling
B. price takers; pricing power
C. omnichannel; direct sales
Solution:
B is correct. Markets with many competitors and homogeneous products 
are characterized by having perfect or near-perfect competition market 
structures, with prices determined by market supply and demand.
4. T wo examples of pricing models for complex products are ____________, 
which refers to incentivizing or requiring the purchase of multiple products 
or services, and ____________, which combines a low price on an initial pur-
chase of a durable good with high-margin prices on associated consumables.
A. bundling; razor, razorblade
© CFA Institute. For candidate use only. Not for distribution.
Defining the Business Model 215
B. fractional ownership; subscriptions
C. horizontal integration; network effects
Solution:
A is correct. Companies often bundle complementary products and services 
by offering a discount for their combined purchase versus the sum of the 
individual prices, such as a product and a repair/maintenance package. A ra-
zor, razorblade model, named for Gillette’s business model of selling a razor 
with disposable razorblades, combines a durable good sold at near cost with 
high-margin, possibly proprietary consumables needed to use the durable 
good. Other examples include Nespresso and Keurig coffee machines, print-
ers and toner/ink, and diagnostic instruments and reagents.
5. ____________ r efers to the increase in the value of a network to its users as 
more users join.
A. “Value chain”
B. “Network effects”
C. “Value proposition”
Solution:
B is correct. A network in which participants interact or transact with one 
another increases in value as more participants join. Examples of companies 
or services with network effects include financial instrument exchanges, 
payment networks, social media, and phone and other communication net-
works. Network effects can be a strong barrier to new industry entrants.
6. ____________ in volves user communities that enable voluntary collabora-
tion between users of a product with generally a small amount of modera-
tion and oversight by the community host or operator.
A. Franchising
B. Crowdsourcing
C. A loyalty program
Solution:
B is correct. Generically, crowdsourcing means obtaining contributions 
from multiple parties. Many digital business models incorporate or utilize 
crowdsourcing as their defining feature, whereby the company creates a 
service that users build, while the company simply creates rules and moder-
ates user contributions. Common examples include social media, product 
reviews, open source software, and Wikis.
DEFINING THE BUSINESS MODEL
describe key features of business models
Successful new businesses may be based on a new product or technology, but there 
are many success stories based on familiar products or services and a new business 
model. For example, IKEA successfully combines existing business concepts—low-cost 
self-assembly furniture, modernist Scandinavian design, and big box retailing—in a 
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 Business Models216
unique and successful way. Similarly, Google did not invent online search but found 
a way to improve the accuracy of search results and to generate revenues through 
advertising based on user search data.
Often, successful business models are neither new nor unique but proven. Many 
businesses, such as wholesalers, retailers, law firms, building contractors, banks, and 
insurers, have conventional business models. Success for these firms hinges not on 
business model innovation but on superior execution, skill, proprietary technology, 
a strong brand, scale, scope economies, or other factors.
While there is no precise generally accepted definition of a business model, it is a 
description of how a business works and includes the following:
 ■ The customer base for the business (“who?”)
 ■ The product or service the business offers to customers (“what?” and often 
“why?”)
 ■ Where is the firm selling and how do its products and services reach cus -
tomers (“where?”)
 ■ The pricing strategy (“how much?”)
 ■ The key assets, partners, and suppliers the business requires (“how?”)
A business model should provide enough detail so that the basic elements and 
relationships are clear, without providing so much detail as to become a business plan. 
A clear business model should have the elements included in Exhibit 1.
Exhibit 1: Business Model
What is the firm’s value proposition to its target customer(s)? What is the firm’s value chain?
Who are the
firm’s target
customers?
How does the
firm keep its
customers?
What product(s),
service(s), and
experience(s),
does the firm
offer?
Where is the
firm selling?
How does it
reach its
customer(s)?
How much
is offer pricing
relative to
competitors?
How is the
firm organized
to execute?
Does the firm
have
competitive
capabilities?
• Revenue model?
• Cost structure?
• Asset profile? Financial structure?
What impact does the firm’s business model have on its:
What is the
firm’s
profitability?
Business Model Features
Information needed to determine the business model of public corporate issuers is 
often provided in annual reports and presentations; management may even provide 
its own description of the issuer’s business model. The beginning of Tesla’s annual 
report provides a good example.
© CFA Institute. For candidate use only. Not for distribution.
Defining the Business Model 217
EXAMPLE 1
Tesla Management’s Description of its`,
    },
  ],
  fsa: [
    {
      number: 1,
      title: `Introduction to Financial Statement Analysis`,
      pages: 34,
      los: `Mastery The candidate should be able to:
describe the steps in the financial statement analysis framework
describe the roles of financial statement analysis
describe the importance of regulatory filings, financial statement
notes and supplementary information, management’s commentary,
describe implications for financial analysis of alternative financial
reporting systems and the importance of monitoring developments
in financial reporting standards
describe information sources that analysts use in financial statement
analysis besides annual and interim financial reports
The two major accounting
standard setters are as follows:`,
      intro: `Financial analysis is the process of interpreting and evaluating a company’s performance 
and position in the context of its economic environment. Financial analysis is used 
by analysts to make decisions and recommendations such as whether to invest in a 
company’s debt or equity securities and at what price. A debt investor is concerned 
about a company’s ability to pay interest and to repay the principal lent, while an 
equity investor is interested in a company’s profitability and per-share value. Overall, 
a central focus of financial analysis is evaluating the company’s ability to earn a return 
on its capital that is at least equal to the cost of that capital, to profitably grow its 
operations, and to generate enough cash to meet obligations and pursue opportunities.
Financial analysis starts with the information found in a company’s financial reports. 
These financial reports include audited financial statements, additional disclosures 
required by regulatory authorities, and any accompanying (unaudited) commentary by 
management. Analysts supplement their analysis of a company’s financial statements 
with industry and company research.`,
      overview: `■ Financial analysis for a company often includes obtaining an 
understanding of the target company’s business model, finan-
cial performance, financial position, and broader information about 
the economic environment and the industry in which the company 
operates. When analytical tasks are not well defined, the analyst 
may need to make decisions about the approach, the tools, the data 
sources, the format for reporting the results, and the relative impor -
tance of different aspects of the analysis.
 ■ Financial analysis will include evaluating financial results, and struc -
turing and scaling data to facilitate comparisons by calculating 
percentages, changes, and ratios. Answers to analytical questions 
often rely not just on numerical results but also on the analyst’s 
interpretation of the numerical results to support a conclusion or 
recommendation.
 ■ The role of financial statement analysis is to form expectations about 
a company’s future performance, financial position, and risk factors 
for the purpose of making investment, credit, and other economic 
decisions.
 ■ · Regulatory authorities require publicly traded companies to prepare 
financial reports in accordance with specified accounting standards 
and other securities laws and regulations. An example of such a reg-
ulatory authority is the Securities and Exchange Commission in the 
United States.
 ■ Other organizations exist without explicit regulatory authority and 
develop reporting standards, facilitate cooperation, and advise govern-
ments. Examples include the International Organization of Securities 
Commissions, the European Securities Committee, and the European 
Securities and Market Authority.
 ■ Sources of information for analysts and investors include standard-
ized forms that are filed with regulatory authorities, disclosures made 
in notes, supplementary schedules, and management commentary 
that accompany financial statements, and audit reports. In an audit 
report, an independent a`,
      body: `LEARNING MODULE OVERVIEW
 ■ Financial analysis for a company often includes obtaining an 
understanding of the target company’s business model, finan-
cial performance, financial position, and broader information about 
the economic environment and the industry in which the company 
operates. When analytical tasks are not well defined, the analyst 
may need to make decisions about the approach, the tools, the data 
sources, the format for reporting the results, and the relative impor -
tance of different aspects of the analysis.
 ■ Financial analysis will include evaluating financial results, and struc -
turing and scaling data to facilitate comparisons by calculating 
percentages, changes, and ratios. Answers to analytical questions 
often rely not just on numerical results but also on the analyst’s 
interpretation of the numerical results to support a conclusion or 
recommendation.
 ■ The role of financial statement analysis is to form expectations about 
a company’s future performance, financial position, and risk factors 
for the purpose of making investment, credit, and other economic 
decisions.
 ■ · Regulatory authorities require publicly traded companies to prepare 
financial reports in accordance with specified accounting standards 
and other securities laws and regulations. An example of such a reg-
ulatory authority is the Securities and Exchange Commission in the 
United States.
 ■ Other organizations exist without explicit regulatory authority and 
develop reporting standards, facilitate cooperation, and advise govern-
ments. Examples include the International Organization of Securities 
Commissions, the European Securities Committee, and the European 
Securities and Market Authority.
 ■ Sources of information for analysts and investors include standard-
ized forms that are filed with regulatory authorities, disclosures made 
in notes, supplementary schedules, and management commentary 
that accompany financial statements, and audit reports. In an audit 
report, an independent auditor expresses an opinion on whether the 
1
Financial Statement Analysis Framework 5
information in the audited financial statements fairly presents the 
financial position, performance, and cash flows of the company in 
accordance with a specified set of accounting standards.
 ■ Despite increasing convergence over time, differences still exist 
between IFRS (International Financial Reporting Standards) and US 
GAAP (Generally Accepted Accounting Principles) that affect financial 
reporting. Analysts must be aware of areas where accounting stan-
dards have not converged.
 ■ In addition to information required by regulatory authorities, issuers 
also communicate through earnings calls, investor day events, press 
releases, company websites, and company visits. Analysts may also 
get information by speaking with management, investor relations, and 
other company personnel.
 ■ Third-party sources for additional information include industry white-
papers, analyst reports, economic information from governments, 
general and industry-specific news outlets, and electronic data plat -
forms. Analysts also use surveys, conversations, and product evalua-
tions to generate their own information.
FINANCIAL STATEMENT ANALYSIS FRAMEWORK
describe the steps in the financial statement analysis framework
Analysts work in a variety of positions within the investment management industry. 
Some are equity analysts whose main objective is to evaluate potential investments 
in a company’s equity securities as a basis for deciding whether a prospective invest -
ment is attractive and what an appropriate purchase price might be. Others are credit 
analysts who evaluate the creditworthiness of a company to decide whether (and 
on what terms) a debt investment should be made or what credit rating should be 
assigned. Analysts may also be involved in a variety of other tasks, such as evaluating 
the performance of a subsidiary company, evaluating a private equity investment, or 
finding stocks that are overvalued for purposes of taking a short position.
Exhibit 1 presents a generic framework for financial statement analysis used in 
these various roles.
2
Learning Module 1 Introduction to Financial Statement Analysis6
Exhibit 1: Financial Statement Analysis Framework
Phase Sources of Information Output
Articulate the purpose and 
context of the analysis.
 ■ The nature of the analyst’s function, such as 
evaluating an equity or debt investment or 
issuing a credit rating.
 ■ Communication with client or supervisor on 
specific needs and concerns.
 ■ Institutional guidelines related to developing 
specific work product.
 ■ Statement of the purpose or objective of 
analysis.
 ■ A list (written or unwritten) of specific ques -
tions to be answered by the analysis.
 ■ Nature and content of report to be provided.
 ■ Timetable and budgeted resources for 
completion.
Collect data.  ■ Financial statements, other financial data, 
questionnaires, and industry/economic data.
 ■ Discussions with issuer investor relations, 
management, suppliers, customers, competi-
tors, and company or industry experts.
 ■ Company site visits (e.g., to production facili-
ties or retail stores).
 ■ Financial statements and other quantitative 
data in a usable form, such as a spreadsheet.
 ■ Completed questionnaires, if applicable.
Process data. Data from the previous phase.  ■ Adjusted financial statements.
 ■ Common-size statements.
 ■ Ratios and graphs.
Analyze/interpret the data. Input data as well as processed data.  ■ Analytical results.
 ■ Forecasts.
 ■ Valuations.
Develop and communicate 
conclusions and recom-
mendations (e.g., with an 
analysis report).
 ■ Analytical results and previous reports.
 ■ Institutional guidelines for published reports.
 ■ Analytical report answering questions posed 
in Phase 1.
 ■ Recommendation regarding the purpose of 
the analysis, such as whether to make an 
investment or extend credit.
Follow-up. Information gathered by periodically repeating 
the previous steps as necessary to determine 
whether changes to holdings or recommenda-
tions are necessary.
 ■ Comparison of actual to expected results
 ■ Revised forecasts
 ■ Updated reports and recommendations.
The following sections discuss the individual phases of financial statement analysis.
Articulate the Purpose and Context of the Analysis
Before undertaking any analysis, it is essential to understand the purpose of the analysis. 
An understanding of the purpose is particularly important in financial statement anal-
ysis because of the numerous available techniques and the substantial amount of data.
Some analytical tasks are well defined, in which case articulating the purpose of 
the analysis requires little decision making by the analyst. For example, a periodic 
credit review of an investment-grade debt portfolio or an equity analyst’s quarterly 
report on a particular company may be guided by institutional norms such that the 
purpose of the analysis is given. Furthermore, the format, procedures, or sources of 
information may also be given.
For other analytical tasks, articulating the purpose of the analysis requires the 
analyst to make decisions about the approach, the tools, the data sources, the format 
in which to report the results of the analysis, and the relative importance of different 
aspects of the analysis.
Financial Statement Analysis Framework 7
When facing a substantial amount of data, a less experienced analyst may be 
tempted to start calculating ratios without considering what is relevant for the decision 
at hand. It is generally advisable to resist this temptation and thus avoid unnecessary 
or pointless efforts. Consider the questions: If you could have all the calculations and 
ratios completed instantly, what question would you be able to answer? What decision 
would your answer support?
The analyst should also define the context at this stage. Who is the intended 
audience? What is the deliverable`,
    },
    {
      number: 2,
      title: `Analyzing Income Statements`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe general principles of revenue recognition, specific revenue
recognition applications, and implications of revenue recognition
choices for financial analysis
describe general principles of expense recognition, specific expense
recognition applications, implications of expense recognition choices
for financial analysis and contrast costs that are capitalized versus
those that are expensed in the period in which they are incurred
describe the financial reporting treatment and analysis of
non-recurring items (including discontinued operations, unusual or
infrequent items) and changes in accounting policies
describe how earnings per share is calculated and calculate and`,
      intro: `Income statements and analytical measures derived from them, such as sales growth, 
operating margin, and earnings per share (EPS), are critical for equity and credit anal-
ysis. Investors analyze income statements to evaluate companies’ growth, profitability, 
and risks, and often use income statement figures in valuation. Corporate financial 
announcements frequently emphasize information reported in income statements, 
particularly earnings, more than information reported in the other financial statements.`,
      overview: `■ Revenue is recognized in the period it is earned, which may or 
may not be in the same period as the related cash collection.
 ■ An analyst should identify differences in companies’ revenue recogni-
tion methods and adjust reported revenue where possible to facilitate 
comparability. In cases in which the available information does not 
permit adjustment, an analyst can characterize the revenue recogni-
tion as more or less conservative and thus qualitatively assess how 
differences in policies might affect financial ratios and judgments 
about profitability.
 ■ As of the beginning of 2018, revenue recognition standards have 
converged across US GAAP and International Financial Reporting 
Standards (IFRS). The core principle of the converged standards is 
that revenue should be recognized to “depict the transfer of promised 
goods or services to customers in an amount that reflects the consid-
eration to which the entity expects to be entitled in an exchange for 
those goods or services. ”
 ■ To achieve the core principle, the standard describes the application of 
five steps in recognizing revenue. The standard also specifies the treat -
ment of some related contract costs and disclosure requirements.
 ■ The general principles of expense recognition include a process to 
match expenses to revenue (e.g., cost of goods sold), to the period in 
which the expenditure occurs (e.g., administrative costs), or to the 
period of expected benefits of the expenditures (e.g., depreciation and 
amortization).
 ■ In expense recognition, choice of method (i.e., depreciation method 
and inventory cost method), as well as estimates (i.e., uncollectible 
accounts, warranty expenses, assets’ useful life, and salvage value) 
affect a company’s reported income. An analyst should identify differ -
ences in companies’ expense recognition methods and adjust reported 
financial statements where possible to facilitate comparability. In 
cases in which the available information does not pe`,
      body: `LEARNING MODULE OVERVIEW
 ■ Revenue is recognized in the period it is earned, which may or 
may not be in the same period as the related cash collection.
 ■ An analyst should identify differences in companies’ revenue recogni-
tion methods and adjust reported revenue where possible to facilitate 
comparability. In cases in which the available information does not 
permit adjustment, an analyst can characterize the revenue recogni-
tion as more or less conservative and thus qualitatively assess how 
differences in policies might affect financial ratios and judgments 
about profitability.
 ■ As of the beginning of 2018, revenue recognition standards have 
converged across US GAAP and International Financial Reporting 
Standards (IFRS). The core principle of the converged standards is 
that revenue should be recognized to “depict the transfer of promised 
goods or services to customers in an amount that reflects the consid-
eration to which the entity expects to be entitled in an exchange for 
those goods or services. ”
 ■ To achieve the core principle, the standard describes the application of 
five steps in recognizing revenue. The standard also specifies the treat -
ment of some related contract costs and disclosure requirements.
 ■ The general principles of expense recognition include a process to 
match expenses to revenue (e.g., cost of goods sold), to the period in 
which the expenditure occurs (e.g., administrative costs), or to the 
period of expected benefits of the expenditures (e.g., depreciation and 
amortization).
 ■ In expense recognition, choice of method (i.e., depreciation method 
and inventory cost method), as well as estimates (i.e., uncollectible 
accounts, warranty expenses, assets’ useful life, and salvage value) 
affect a company’s reported income. An analyst should identify differ -
ences in companies’ expense recognition methods and adjust reported 
financial statements where possible to facilitate comparability. In 
cases in which the available information does not permit adjustment, 
an analyst can characterize the policies and estimates as more or less 
conservative and thus qualitatively assess how differences in poli-
cies might affect financial ratios and judgments about companies’ 
performance.
 ■ To assess a company’s future earnings, it is helpful to separate those 
prior years’ items of income and expense that are likely to continue in 
the future from those items that are less likely to continue.
1
Revenue Recognition 39
 ■ Under IFRS, a company should present additional line items, headings, 
and subtotals beyond those specified when such presentation is rele-
vant to an understanding of the entity’s financial performance. Some 
items from prior years clearly are not expected to continue in future 
periods and are separately disclosed on a company’s income statement. 
Under US GAAP , unusual or infrequently occurring items, which are 
material, are presented separately within income from continuing 
operations.
 ■ Non-operating items are reported separately from operating items on 
the income statement. Under both IFRS and US GAAP , the income 
statement reports separately the effect of the disposal of a component 
operation as a “discontinued” operation, net of income taxes.
 ■ Basic EPS is the amount of income available to common shareholders 
divided by the weighted average number of common shares out -
standing over a period. The amount of income available to common 
shareholders is the amount of net income remaining after preferred 
dividends (if any) have been paid.
 ■ If a company has a simple capital structure (i.e., one with no poten-
tially dilutive securities), then its basic EPS is equal to its diluted EPS. 
If, however, a company has dilutive securities, its diluted EPS is no 
greater than its basic EPS.
 ■ Diluted EPS is calculated using the if-converted method for convert -
ible securities and the treasury stock method for options.
 ■ Common-size analysis of the income statement involves stating each 
line item on the income statement as a percentage of sales. Common-
size statements facilitate comparison across time periods and across 
companies of different sizes.
REVENUE RECOGNITION
describe general principles of revenue recognition, specific revenue 
recognition applications, and implications of revenue recognition 
choices for financial analysis
General Principles
A fundamental principle of accrual accounting is that revenue is recognized (reported 
on the income statement) when it is earned, so the company’s financial records reflect 
revenue from the sale when the risk and reward of ownership is transferred; this is 
often when the company delivers the goods or services. If the delivery was on credit, a 
related asset, such as trade or accounts receivable, is created. Later, when cash changes 
hands, the company’s financial records simply reflect that cash has been received to 
settle an account receivable. Similarly, in some situations, a company receives cash in 
advance and but delivers the product or service later, perhaps over a period of time. 
In this case, the company would record a liability for unearned revenue, or deferred 
2
Learning Module 2 Analyzing Income Statements40
revenue, when the cash is initially received, and revenue would be recognized over time 
as products and services are delivered. An example would be a subscription payment 
received in advance for cloud-based software delivered over a year.
Accounting Standards for Revenue Recognition
The converged accounting standards issued by the IASB and FASB in May 2014 intro-
duced some changes to the basic principles of revenue recognition. The content of the 
two standards is nearly identical, and this discussion pertains to both, unless specified 
otherwise. The converged standard aims to provide a principles-based approach to 
revenue recognition that can be applied to many types of revenue-generating activities.
The core principle of the converged standard is that revenue should be recognized 
to “depict the transfer of promised goods or services to customers in an amount that 
reflects the consideration to which the entity expects to be entitled in an exchange 
for those goods or services. ” To achieve the core principle, the standard describes the 
application of the following five steps in recognizing revenue:
1. identify the contract(s) with a customer,
2. identify the separate or distinct performance obligations in the contract,
3. determine the transaction price,
4. allocate the transaction price to the performance obligations in the contract, 
and
5. recognize revenue when (or as) the entity satisfies a performance obligation.
According to the standard, a contract is an agreement and commitment with 
commercial substance between the contacting parties. It establishes each party’s 
obligations and rights, including payment terms. In addition, a contract exists only if 
collectability is probable. Each standard uses the same wording, but the threshold for 
probable collectability differs. Under IFRS, probable means more likely than not, and 
under US GAAP , it means likely to occur. As a result, economically similar contracts 
may be treated differently under IFRS and US GAAP .
The performance obligations within a contract represent promises to transfer 
distinct good(s) or service(s). A good or service is distinct if the customer can benefit 
from it on its own or in combination with readily available resources and if the promise 
to transfer it can be separated from other promises in the contract. Each identified 
performance obligation is accounted for separately.
The transaction price is what the seller estimates will be received in exchange for 
transferring the good(s) or service(s) identified in the contract. The transaction price 
is then allocated to each identified performance obligation. Revenue is recognized 
when a performance obligation is fulfilled. Steps three and four address amounts, and 
step fi`,
    },
    {
      number: 3,
      title: `Analyzing Balance Sheets`,
      pages: 32,
      los: `Mastery The candidate should be able to:
explain the financial reporting and disclosures related to intangible
explain the financial reporting and disclosures related to goodwill
explain the financial reporting and disclosures related to financial
explain the financial reporting and disclosures related to non-current
calculate and interpret common-size balance sheets and related`,
      intro: `The balance sheet discloses what an entity owns (assets), what an entity owes (liabilities), 
and the owners’ interest in the net assets of a company (equity) at a specific point in 
time. While many balance sheet items are reported at historical cost, some items are 
measured differently, such as at fair value, and some events and transactions—perhaps 
contrary to analyst’s expectations—are not recognized at all. Analysts must be familiar 
with the different rules and practices for recognition, measurement, and disclosure of 
balance sheet items to evaluate the liquidity, solvency, and overall financial position 
of companies. To do so, analysts often compute ratios involving the balance sheet 
and other financial statements, such as the ratio of debt to operating income or cash 
flows, which can be compared to other companies and over time.`,
      overview: `■ Some assets and liabilities are measured at fair value and some 
are measured at amortized or historical cost. Notes to the 
financial statements provide information that is helpful in assessing 
the comparability of measurement bases across companies.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Some assets and liabilities are measured at fair value and some 
are measured at amortized or historical cost. Notes to the 
financial statements provide information that is helpful in assessing 
the comparability of measurement bases across companies.
1
LEARNING MODULE
3
The two major accounting 
standard setters are as follows:  
1) the International Accounting 
Standards Board (IASB) who 
establishes International 
Financial Reporting Standards 
(IFRS) and 2) the Financial 
Accounting Standards Board 
(FASB) who establishes US GAAP .  
Throughout this learning module 
both standards are referred to 
and many, but not all, of these 
two sets of accounting rules 
are identified. Note: changes 
in accounting standards as 
well as new rulings and/or 
pronouncements issued after 
the publication of this learning 
module may cause some of the 
information to become dated. 
Learning Module 3 Analyzing Balance Sheets92
 ■ Intangible assets refer to identifiable non-monetary assets without 
physical substance. Examples include patents, licenses, and trade-
marks. For each intangible asset, a company assesses whether its 
useful life is finite or indefinite.
 ■ An intangible asset with a finite useful life is amortized on a system-
atic basis over the best estimate of its useful life, with the amortization 
method and useful life estimate reviewed at least annually. Intangibles 
are subject to impairment as well, in a similar manner to tangible 
assets like property, plant, and equipment.
 ■ An intangible asset with an indefinite useful life is not amortized. 
Instead, it is tested for impairment at least annually.
 ■ For internally generated intangible assets, the International Financial 
Reporting Standards (IFRS) require that costs incurred during the 
research phase must be expensed. Costs incurred in the development 
stage can be capitalized as intangible assets if certain criteria are met, 
including technological feasibility, the ability to use or sell the result -
ing asset, and the ability to complete the project.
 ■ The most common intangible asset that is not a separately identifiable 
asset is goodwill, which arises in business combinations. Goodwill is 
not amortized; instead it is tested for impairment at least annually.
 ■ Financial instruments are contracts that give rise to both a financial 
asset of one entity and a financial liability or equity instrument of 
another entity. In general, financial instruments are measured in two 
ways: fair value or amortized cost. For financial instruments measured 
at fair value, the two basic alternatives in how net changes in fair value 
are recognized are (1) as profit or loss on the income statement, or 
(2) as other comprehensive income (loss) that bypasses the income 
statement.
 ■ Common long-term liabilities include loans (i.e., borrowings from 
banks), notes or bonds payable (i.e., fixed-income securities issued to 
investors), leases, and post-employment liabilities. Liabilities are usu-
ally reported at amortized cost or fair value on the balance sheet.
 ■ Vertical common-size analysis of the balance sheet involves expressing 
each balance sheet item as a percentage of total assets.
 ■ Balance sheet ratios include liquidity ratios (measuring the company’s 
ability to meet its short-term obligations) and solvency ratios (measur -
ing the company’s ability to meet long-term and other obligations).
INTANGIBLE ASSETS
explain the financial reporting and disclosures related to intangible 
assets
2
Intangible Assets 93
Intangible assets are identifiable non-monetary assets without physical substance. 1 
An identifiable asset can be acquired on a standalone basis (i.e., can be separated from 
the entity) or arises from contractual or legal rights and privileges. Common examples 
include patents, licenses, trademarks, and customer lists. The most common intangible 
that is not separately identifiable is goodwill, which arises in business combinations 
and is discussed further in the next lesson.
IFRS permits companies to report intangible assets using either a cost model or 
a revaluation model. The revaluation model can be selected only when there is an 
active market for an intangible asset. Both measurement models are essentially the 
same as described for property, plant, and equipment (PP&E). US GAAP permits 
only the cost model.
For each intangible asset, a company assesses whether the useful life of the asset 
is finite or indefinite. Amortization and impairment principles apply as follows:
 ■ An intangible asset with a finite useful life is amortized on a systematic basis 
over the best estimate of its useful life, with the amortization method and 
useful life estimate reviewed at least annually.
 ■ Impairment principles for an intangible asset with a finite useful life are the 
same as for PP&E.
 ■ An intangible asset with an indefinite useful life is not amortized. Instead, 
at least annually, the reasonableness of assuming an indefinite useful life for 
the asset is reviewed and the asset is tested for impairment.
Financial analysts traditionally view reported values of intangible assets - partic -
ularly goodwill - with caution. Consequently, in assessing financial statements, some 
analysts exclude the book value assigned to intangibles, reducing net equity by an 
equal amount (obtaining a “tangible book value”) and increasing pretax income by 
any amortization expense or impairment associated with the intangibles. An arbitrary 
assignment of zero value to intangibles is not advisable; instead, an analyst should 
examine each listed intangible and assess whether an adjustment should be made. 
Note disclosures about intangible assets may provide useful information to the ana-
lyst. These disclosures include information about useful lives, amortization rates and 
methods, and impairment losses recognized or reversed.
Further, a company may have developed intangible assets internally that can be 
recognized only in certain circumstances. Companies may also have assets that are 
never recorded on a balance sheet because they are non-identifiable and the company 
does not have sufficient control over their future economic benefits. These assets might 
include management and technical skills of employees, market share, name recogni-
tion, a good reputation among customers, and so forth. Such assets are valuable and 
are reflected, in theory, in the price at which the company’s equity securities trade 
in the market (and the price at which the entirety of the company’s equity would be 
sold in an acquisition transaction). Such assets may be recognized as goodwill by an 
acquirer if the company is sold.
Identifiable Intangibles
Under IFRS, identifiable intangible assets are recognized on the balance sheet if it is 
probable that future economic benefits will flow to the company and the cost of the asset 
can be measured reliably. Examples of identifiable intangible assets include patents, 
trademarks, copyrights, franchises, licenses, and other rights. Identifiable intangible 
assets may have been created internally or purchased by a company. Determining the 
1 International Accounting Standard 38, Intangible Assets, paragraph 8.
Learning Module 3 Analyzing Balance Sheets94
cost of internally created intangible assets can be difficult and subjective. For these 
reasons, under IFRS and US GAAP , the general requirement is that internally created 
identifiable intangibles are expensed rather than reported on the balance sheet.
IFRS provides that for internally created intangible assets, the company must 
separately identify its research phase and development phase. 2 The research phase 
includes activities that seek new knowledge or products. The development phase 
occurs after the research phase and includes design or testing of prototypes and 
models. IFRS requires that costs to internally generate intangible assets during the 
research phase must be expensed on the i`,
    },
    {
      number: 4,
      title: `Analyzing Statements of Cash Flows I`,
      pages: 32,
      los: `Mastery The candidate should be able to:
describe how the cash flow statement is linked to the income
statement and the balance sheet
describe the steps in the preparation of direct and indirect cash flow
statements, including how cash flows can be computed using income
statement and balance sheet data
demonstrate the conversion of cash flows from the indirect to direct
contrast cash flow statements prepared under International Financial
Reporting Standards (IFRS) and US generally accepted accounting
The two major accounting
standard setters are as follows:
1) the International Accounting`,
      intro: `The statement of cash flows provides important information about a company’s cash 
receipts and cash payments during an accounting period, reconciling the cash accounts 
between balance sheet dates. Although the income statement provides similar measures 
on an accrual basis, cash flows and their timing are crucial to valuation as payments to 
investors are made in cash. Investors also use statement of cash flows to evaluate the 
company’s liquidity, solvency, and financial flexibility. In this module, we discuss the 
components of the cash flow statement and its links to the other financial statements.`,
      overview: `■ Understanding the interrelationships among the balance sheet, 
income statement, and cash flow statement is useful not only 
in evaluating the company’s financial health but also in detecting 
accounting irregularities.
 ■ The income statement and statement of cash flows provide key link -
ages between the current assets and current liabilities sections of the 
balance sheet.
 ■ Companies can use either the direct or the indirect method for report -
ing their operating cash flow:
 ■ The direct method discloses operating cash inflows by source (e.g., 
cash received from customers, cash received from investment income) 
and operating cash outflows by use (e.g., cash paid to suppliers, cash 
paid for interest) in the operating activities section of the cash flow 
statement.
 ■ The indirect method reconciles net income to operating cash flow by 
adjusting net income for all non-cash items and the net changes in 
working capital accounts.
 ■ Although the indirect method is most common, an analyst may desire 
to review direct-format operating cash flow to review trends in cash 
receipts and payments, such as cash received from customers or cash 
paid to suppliers.
 ■ Cash flows from operating activities reported under the indirect 
method can generally be converted to an approximation of the direct 
format by following a simple three-step process.
 ■ Cash flows from investing activities and from financing activities are 
both reported using a direct method, regardless of the method used 
for reporting operating cash flows.
 ■ Compared with US GAAP , the International Financial Reporting 
Standards (IFRS) allow more flexibility in the classification of items 
as operating, investing, or financing activities, such as interest paid 
or received and dividends paid or received and in how income tax 
expense is classified.
1
Linkages between the Financial Statements 125`,
      body: `LEARNING MODULE OVERVIEW
 ■ Understanding the interrelationships among the balance sheet, 
income statement, and cash flow statement is useful not only 
in evaluating the company’s financial health but also in detecting 
accounting irregularities.
 ■ The income statement and statement of cash flows provide key link -
ages between the current assets and current liabilities sections of the 
balance sheet.
 ■ Companies can use either the direct or the indirect method for report -
ing their operating cash flow:
 ■ The direct method discloses operating cash inflows by source (e.g., 
cash received from customers, cash received from investment income) 
and operating cash outflows by use (e.g., cash paid to suppliers, cash 
paid for interest) in the operating activities section of the cash flow 
statement.
 ■ The indirect method reconciles net income to operating cash flow by 
adjusting net income for all non-cash items and the net changes in 
working capital accounts.
 ■ Although the indirect method is most common, an analyst may desire 
to review direct-format operating cash flow to review trends in cash 
receipts and payments, such as cash received from customers or cash 
paid to suppliers.
 ■ Cash flows from operating activities reported under the indirect 
method can generally be converted to an approximation of the direct 
format by following a simple three-step process.
 ■ Cash flows from investing activities and from financing activities are 
both reported using a direct method, regardless of the method used 
for reporting operating cash flows.
 ■ Compared with US GAAP , the International Financial Reporting 
Standards (IFRS) allow more flexibility in the classification of items 
as operating, investing, or financing activities, such as interest paid 
or received and dividends paid or received and in how income tax 
expense is classified.
1
Linkages between the Financial Statements 125
LINKAGES BETWEEN THE FINANCIAL STATEMENTS
describe how the cash flow statement is linked to the income 
statement and the balance sheet
Primary Financial Statements
Recall that the four primary financial statements are interrelated and each provides 
specific information to analysts about an entity. The primary financial statements are 
as follows:
1. Balance Sheet—shows the financial position of an entity at a point in time, 
reporting the balances of “permanent” or “stock” accounts showing the enti-
ty’s assets and how those assets are financed.
2. Income Statement—provides information about a company’s financial per -
formance between balance sheet dates. The income statement is made up of 
revenue, expense, gain, and loss accounts. In contrast to the balance sheet, 
the income statement is a “flow” statement as it captures income activity 
between two balance sheet dates. Income statements prepared under IFRS 
or US GAAP are based on accrual accounting, so they do not necessarily 
reflect cash inflows and outflows.
3. Statement of Cash Flows—reports the change in an entity’s cash, cash 
equivalents, and restricted cash between balance sheet dates. The statement 
classifies cash inflows and outflows during the period as operating, invest -
ing, or financing activities. Because the cash flow statement reports perfor -
mance over a period of time, it is also a “flow” statement, like the income 
statement.
4. Statement of Shareholder’s Equity—provides information about how a com-
pany’s equity has changed between balance sheet dates. The statement iden-
tifies the significant components of shareholders equity that are reported 
on the balance sheet (e.g., common stock and retained earnings) and the 
activities that occurred during the period that impacted these accounts 
(e.g., share issuance, net income or loss). Like the income statement and 
statement of cash flows, the statement of shareholders equity is also a “flow” 
statement.
Relationship between Financial Statements
As illustrated in Exhibit 1, the income statement, cash flow statement and statement 
of shareholders’ equity link the balance sheet from one period to the next.
2
Learning Module 4 Analyzing Statements of Cash Flows I126
Exhibit 1: Relationship between the Financial Statements
Balance Sheet
12/31/X1
Point in Time
Balance Sheet
12/31/X2
Point in Time
Income Statement
1/1/X2–12/31/X2
Period of Time
Cash Flow
Statement
1/1/X2–12/31/X2
Statement of S/H
Equity
1/1/X2–12/31/X2
For example, the beginning and ending balances of cash are shown on the company’s 
20X1 and 20X2 balance sheets, and the bottom of the 20X2 cash flow statement 
reconciles 20X1 cash to 20X2 cash. The relationship, stated in general terms, is as 
shown in Exhibit 2.
Exhibit 2: Beginning and Ending Balances
Balance Sheet at 
31 December 20X1
Statement of Cash Flows for Y ear 
Ended 31 December 20X2
Balance Sheet at 
31 December 20X2
Beginning cash  
(as of Year-end 31 December 
20x1)
Plus: Cash inflows (from oper -
ating, investing, and financing 
activities)
Less: Cash outflows (for oper -
ating, investing, and financing 
activities)
Ending cash 
(as of Year-end 31 
December 20x2)
Exhibit 3 adds greater detail to Exhibit 1, tracing specific linkages through the four 
financial statements.
Linkages between the Financial Statements 127
Exhibit 3: Interaction of Financial Statement Accounts
Income Statement
1/2/X2–12/31/X2
Revenue
–Cost of Goods Sold
Gross Margin
–Selling, G & A Expense
Operating Income
–Interest Expense
Taxable Income
–Taxes
Net Income
Income Statement
1/2/X2–12/31/X2
Revenue
–Cost of Goods Sold
Gross Margin
–Selling, G & A Expense
Operating Income
–Interest Expense
Taxable Income
–Taxes
Net Income
Balance Sheet
12/31/X2
Ending Cash
Ending Retained Earnings
Balance Sheet*
12/31/X1
Beginning Cash
Beginning Retainer
Earnings
Cash Flow Statement
1/2/X2–12/31/X2
Beginning Cash
+/– Operating CF
+/– Investing CF
+/– Financing CF
Ending Cash
Statement of S/H Equity
1/2/X2–12/31/X2
Beginning Retained Earnings
+Net Income
– Dividends
Ending Retained Earnings
For example, the 20X2 statement of shareholders’ equity reconciles the equity accounts 
reported on 20X1 balance sheet to the equity accounts reported on the 20X2 balance 
sheet, including additions (or subtractions) resulting from net income or loss reported 
on the income statement and dividends paid that are also reported on the statement 
of cash flows if made in cash.
Linkages Between Current Assets and Current Liabilities
The income statement and statement of cash flows also provide key linkages between 
the current assets and current liabilities sections of the balance sheet. Differences 
between the accrual and cash accounting recognition of operating activities result 
in an increase or decrease in a current asset or liability on the balance sheet. For 
example, accrual basis revenue in excess of cash collections will be accompanied by 
an increase in accounts receivable. If expenses reported using accrual accounting are 
lower than cash actually paid, the result will typically be a decrease in accounts pay -
able or another accrued liability account. Finally, in situations in which a company is 
paid in advance for the delivery of a service or product in the future, it will recognize 
the cash received as an asset, but it also must recognize a liability for its obligation to 
deliver service or product in the future, typically referred to as deferred revenue. A 
deferred revenue liability account is derecognized upon the recognition of revenue 
when the entity satisfies its performance obligations.
If an analyst knows beginning accounts receivable, revenues, and cash collected 
from customers, they can compute ending accounts receivable, as the accounts are 
linked as shown in Exhibit 4.
Learning Module 4 Analyzing Statements of Cash Flows I128
Exhibit 4: Ending Accounts Receivable
Beginning Balance Sheet at  
31 December 20X1
Income Statement for Y ear 
Ended 31 December 20X1
Statement of Cash Flows for 
Y ear 
Ended 31 December 20X1
Ending Balance Sheet at  `,
    },
    {
      number: 5,
      title: `Analyzing Statements of Cash Flows II`,
      pages: 18,
      los: `Mastery The candidate should be able to:
analyze and interpret both reported and common-size cash flow
calculate and interpret free cash flow to the firm, free cash flow to
equity, and performance and coverage cash flow ratios`,
      intro: `An analysis of a company’s statement of cash flows provides crucial information for 
evaluating a company’s financial position and for forecasting its future cash flows, 
which is foundational to the valuation of the company’s debt and equity securities. 
This module discusses tools and techniques for analyzing the statement of cash flows, 
including the analysis of sources and uses of cash and cash flow, common-size analysis, 
and the calculation of free cash flow measures and cash flow ratios.`,
      overview: `■ An evaluation of a cash flow statement involves an assessment 
of the sources and uses of cash and the main drivers of cash 
flow within operating, investing, and financing activities.
 ■ Analyst can use common-size statement analysis for the cash flow 
statement by expressing cash flow items as a percentage of total cash 
inflows/total cash outflows or as a percentage of net revenues.
 ■ The cash flow statement can be used to calculate free cash flow to the 
firm (FCFF) and free cash flow to equity (FCFE), which are important 
profit measures for investors.
 ■ The cash flow statement may also be used to calculate financial ratios 
that measure a company’s profitability, performance, and financial 
position. Analysts use these ratios to evaluate the company over time 
and to compare multiple companies.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ An evaluation of a cash flow statement involves an assessment 
of the sources and uses of cash and the main drivers of cash 
flow within operating, investing, and financing activities.
 ■ Analyst can use common-size statement analysis for the cash flow 
statement by expressing cash flow items as a percentage of total cash 
inflows/total cash outflows or as a percentage of net revenues.
 ■ The cash flow statement can be used to calculate free cash flow to the 
firm (FCFF) and free cash flow to equity (FCFE), which are important 
profit measures for investors.
 ■ The cash flow statement may also be used to calculate financial ratios 
that measure a company’s profitability, performance, and financial 
position. Analysts use these ratios to evaluate the company over time 
and to compare multiple companies.
1
LEARNING MODULE
5
The two major accounting 
standard setters are as follows:  
1) the International Accounting 
Standards Board (IASB) who 
establishes International 
Financial Reporting Standards 
(IFRS) and 2) the Financial 
Accounting Standards Board 
(FASB) who establishes US GAAP .  
Throughout this learning module 
both standards are referred to 
and many, but not all, of these 
two sets of accounting rules 
are identified. Note: changes 
in accounting standards as 
well as new rulings and/or 
pronouncements issued after 
the publication of this learning 
module may cause some of the 
information to become dated. 
Learning Module 5 Analyzing Statements of Cash Flows II156
EVALUATING SOURCES AND USES OF CASH
analyze and interpret both reported and common-size cash flow 
statements
Evaluation of the cash flow statement should involve an overall assessment of the 
sources and uses of cash between the three main categories as well as an assessment 
of the main drivers of cash flow within each category, as follows:
Step 1 Evaluate the major sources and uses of cash flow, including operating, 
investing, and financing activities.
Step 2 Evaluate the primary determinants of operating cash flow.
Step 3 Evaluate the primary determinants of investing cash flow.
Step 4 Evaluate the primary determinants of financing cash flow.
Step 1. Evaluate the major sources and uses of cash flow
The major sources of cash for a company can vary with its stage of growth. For a mature 
company, it is expected and desirable that operating activities are the primary source 
of cash flows. Over the long term, a company must generate cash from its operating 
activities. If operating cash flow were consistently negative, a company would need 
to borrow money or issue stock (financing activities) to fund the shortfall. Eventually, 
these providers of capital need to be repaid from operations or they will no longer 
be willing to provide capital. Cash generated from operating activities can be used in 
either investing or financing activities. If the company has value-creative investment 
opportunities, it is desirable to use the cash in investing activities. If the company 
does not have profitable investment opportunities, the cash should be returned to 
capital providers, a financing activity.
For a new or growth stage company, operating cash flow may be negative for some 
period of time as it invests in such assets as inventory and receivables (extending credit 
to new customers) to grow the business. This situation is not sustainable over the long 
term, so eventually the cash must start to come primarily from operating activities 
so that capital can be returned to the providers of capital. Lastly, it is desirable that 
operating cash flows are sufficient to cover capital expenditures (in other words, the 
company has free cash flow as discussed further in Lesson 3). In summary, major 
points to consider at this step are:
 ■ What are the major sources and uses of cash flow?
 ■ Is operating cash flow positive and sufficient to cover capital expenditures?
Step 2. Evaluate the primary determinants of operating cash flow
Turning to the operating section, analysts should examine the most significant deter-
minants of operating cash flow. Companies need cash for use in operations (e.g., to 
hold receivables and inventory and to pay employees and suppliers) and receive cash 
from operating activities (e.g., payments from customers). Increases and decreases 
in receivables, inventory, payables, and so on can be examined to determine whether 
the company is using or generating cash in operations and why.
2
Evaluating Sources and Uses of Cash 157
It is also useful to compare operating cash flow with net income. For a mature 
company, because net income includes non-cash expenses (depreciation and amor -
tization), it is expected and desirable that operating cash flow exceeds net income. 
The relationship between net income and operating cash flow is also an indicator of 
earnings quality. If a company has large net income but poor operating cash flow, 
it may be a sign of poor earnings quality. The company may be making aggressive 
accounting choices to increase net income but may not be generating cash for its 
business. Analysts also should examine the variability of both earnings and cash flow 
and consider the impact of this variability on the company’s risk as well as the ability 
to forecast future cash flows for valuation purposes. In summary:
 ■ What are the major determinants of operating cash flow?
 ■ Is operating cash flow higher or lower than net income? Why?
 ■ How consistent are operating cash flows?
Step 3. Evaluate the primary determinants of investing cash flow
Within the investing section, analysts should evaluate each line item. Each line item 
represents either a source or use of cash. This enables analysts to understand where 
the cash is being spent (or received). This section will reveal how much cash is being 
invested for the future in property, plant, and equipment; how much is used to acquire 
entire companies; and how much is put aside in liquid investments, such as stocks and 
bonds. It will also tell show how much cash is being raised by selling these types of 
assets. If the company is making major capital investments, analysts should consider 
where the cash is coming from to cover these investments (e.g., is the cash coming 
from excess operating cash flow or from the financing activities described in Step 4). 
If assets are being sold, it is important to determine why and to assess the effects on 
the company.
Step 4. Evaluate the primary determinants of financing cash flow
Within the financing section, analysts should examine each line item to understand 
whether the company is raising capital or repaying capital and what the nature of its 
capital sources are. If the company is borrowing each year, analysts should consider 
when repayment may be required. The financing section will also present dividend 
payments and repurchases of stock that are alternative means of returning capital to 
owners. It is important to assess why capital is being raised or repaid.
EXAMPLE 1
Analysis of the Cash Flow Statement
Derek Yee, CFA, is preparing to forecast cash flow for Groupe Danone as an 
input into his valuation model. He reviews the historical cash flow statement of 
Groupe Danon for 2016 and 2017, which is presented in Exhibit 1, and excerpts 
from Danone’s 2017 Registration Document, which is presented in Exhibit 2. 
Yee notes that Groupe Danone prepares its financial statements in conformity 
with International Financial Reporting Standards (IFRS).
Learning Module 5 Analyzing Statements of Cash Flows II158
 
Exhibit 1: Groupe Danone Consolidated Financial Statements 
Consolidated Statements of Cash Flows (in EUR millions)
 
 
Y ears Ended 31 December 2016 2017
Net income 1,827 2,563
Share of profits of associates net of dividends received 52 (54)
Depreciation, amortization, and impairment of tangible 
and intangible assets 786 974
Increases in (reversals of) provisions 51 153
Change in deferred taxes (65) (353)
(Gains) lo`,
    },
    {
      number: 6,
      title: `Analysis of Inventories`,
      pages: 38,
      los: `Mastery The candidate should be able to:
describe the measurement of inventory at the lower of cost and net
realisable value and its implications for financial statements and
calculate and explain how inflation and deflation of inventory costs
affect the financial statements and ratios of companies that use
different inventory valuation methods
describe the presentation and disclosures relating to inventories
and explain issues that analysts should consider when examining a
company’s inventory disclosures and other sources of information`,
      intro: `The choice of inventory valuation method (also known as the cost formula or cost flow 
assumption) can have a significant impact on inventory carrying amounts and cost 
of sales. These items in turn affect other financial statement items, such as current 
assets, total assets, gross profit, and net income. A company’s financial statements and 
accompanying notes provide important information about its inventory accounting 
policies that the analyst needs to correctly assess financial performance and compare 
it with that of other companies.`,
      overview: `■ Inventories are a major factor in the analysis of merchandising 
and manufacturing companies. Such companies generate their 
sales and profits through inventory transactions on a regular basis. An 
important consideration in determining profits for these companies is 
measuring the cost of sales when inventories are sold.
 ■ The choice of inventory method affects the financial statements and 
any financial ratios that are based on them. As a consequence, the 
analyst must carefully consider inventory valuation method differences 
when evaluating a company’s performance over time or in comparison 
to industry data or industry competitors.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Inventories are a major factor in the analysis of merchandising 
and manufacturing companies. Such companies generate their 
sales and profits through inventory transactions on a regular basis. An 
important consideration in determining profits for these companies is 
measuring the cost of sales when inventories are sold.
 ■ The choice of inventory method affects the financial statements and 
any financial ratios that are based on them. As a consequence, the 
analyst must carefully consider inventory valuation method differences 
when evaluating a company’s performance over time or in comparison 
to industry data or industry competitors.
1
LEARNING MODULE
6
The two major accounting 
standard setters are as follows:  
1) the International Accounting 
Standards Board (IASB) who 
establishes International 
Financial Reporting Standards 
(IFRS) and 2) the Financial 
Accounting Standards Board 
(FASB) who establishes US GAAP .  
Throughout this learning module 
both standards are referred to 
and many, but not all, of these 
two sets of accounting rules 
are identified. Note: changes 
in accounting standards as 
well as new rulings and/or 
pronouncements issued after 
the publication of this learning 
module may cause some of the 
information to become dated. 
Learning Module 6 Analysis of Inventories174
 ■ Under International Financial Reporting Standards (IFRS), invento-
ries are measured at the lower of cost and net realizable value. Net 
realizable value is the estimated selling price in the ordinary course 
of business less the estimated costs necessary to make the sale. Under 
US GAAP , inventories are measured at the lower of cost, market value, 
or net realizable value depending upon the inventory method used. 
Market value is defined as the current replacement cost subject to an 
upper limit of net realizable value and a lower limit of net realizable 
value less a normal profit margin. Reversals of previous write-downs 
are permissible under IFRS but not under US GAAP .
 ■ Reversals of inventory write-downs may occur under IFRS but are not 
allowed under US GAAP .
 ■ Changes in the carrying amounts within inventory classifications (such 
as raw materials, work-in-process, and finished goods) may provide 
signals about a company’s future sales and profits. Relevant informa-
tion with respect to inventory management and future sales may be 
found in the management discussion and analysis or similar section 
within the annual or quarterly reports, industry news and publica-
tions, and industry economic data.
 ■ The inventory turnover ratio, number of days of inventory ratio, and 
gross profit margin ratio are useful in evaluating the management of a 
company’s inventory.
 ■ Financial statement disclosures provide information regarding the 
accounting policies adopted in measuring inventories, the principal 
uncertainties regarding the use of estimates related to inventories, and 
details of the inventory carrying amounts and costs. This information 
can greatly assist analysts in their evaluation of a company’s inventory 
management.
INVENTORY VALUATION
describe the measurement of inventory at the lower of cost and net 
realisable value and its implications for financial statements and 
ratios
Significant financial risk can result from the holding of inventory. The cost of inventory 
may not be recoverable due to spoilage, obsolescence, or declines in selling prices. 
IFRS states that inventories shall be measured (and carried on the balance sheet) at 
the lower of cost and net realizable value.1Net realizable value is the estimated selling 
price in the ordinary course of business, less the estimated costs necessary to make 
the sale and estimated costs to get the inventory in condition for sale. The assessment 
of net realizable value is typically done item by item or by groups of similar or related 
items. In the event that the value of inventory declines below the carrying amount 
on the balance sheet, the inventory carrying amount must be written down to its net 
1 IAS 2, paragraphs 28–33, Inventories– Net realizable value.
2
Inventory Valuation 175
realizable value 2 and the loss (reduction in value) recognized as an expense on the 
income statement. This expense may be included as part of cost of sales or reported 
separately.
In each subsequent period, a new assessment of net realizable value is made. 
Reversal (limited to the amount of the original write-down) is required for a sub-
sequent increase in value of inventory previously written down. The reversal of any 
write-down of inventories is recognized as a reduction in cost of sales (reduction in 
the amount of inventories recognized as an expense).
US GAAP used to specify the lower of cost or market to value inventories. 3 For 
fiscal years beginning after 15 December 2016, inventories measured using other than 
last-in, first-out (LIFO) and retail inventory methods are measured at the lower of cost 
or net realizable value. This is broadly consistent with IFRS with one major difference: 
US GAAP prohibits the reversal of write-downs. For inventories measured using LIFO 
and retail inventory methods, market value is defined as current replacement cost 
subject to upper and lower limits. Market value cannot exceed net realizable value 
(i.e., the selling price less reasonably estimated costs of completion and disposal). The 
lower limit of market value is net realizable value less a normal profit margin. Any 
write-down to market value or net realizable value reduces the value of the inventory, 
and the loss in value (expense) generally is reflected in the income statement in the 
cost of goods sold.
An inventory write-down reduces both profit and the carrying amount of inventory 
on the balance sheet and thus has a negative effect on profitability, liquidity, and sol-
vency ratios. However, activity ratios (e.g., inventory turnover and total asset turnover) 
will be positively affected by a write-down because the asset base (denominator) is 
reduced. The negative impact on some key ratios, due to the decrease in profit, may 
result in the reluctance by some companies to record inventory write-downs unless 
evidence is strong that the decline in the value of inventory is permanent. This is 
especially true under US GAAP , in which case reversal of a write-down is prohibited.
International Accounting Standards 2 (IAS 2), Inventories, does not apply to the 
inventories of producers of agricultural and forest products and minerals and mineral 
products, nor to commodity broker–traders. These inventories may be measured at net 
realizable value (fair value less costs to sell and complete) according to well-established 
industry practices. If an active market exists for these products, the quoted market 
price in that market is the appropriate basis for determining the fair value of that 
asset. If an active market does not exist, a company may use market determined 
prices or values (such as the most recent market transaction price) when available for 
determining fair value. Changes in the value of inventory (increase or decrease) are 
recognized in profit or loss in the period of the change. US GAAP is similar to IFRS 
in its treatment of inventories of agricultural and forest products and mineral ores. 
Mark-to-market inventory accounting is allowed for bullion.
EXAMPLE 1
Accounting for Declines and Recoveries of Inventory 
Value
Hatsumei Enterprises, a hypothetical company, manufactures computers and 
prepares its financial statements in accordance with IFRS. In 2017, the cost of 
ending inventory was EUR5.2 million, but its net realizable value was EUR4.9 
2 Frequently, rather than writing down inventory directly, an inventory valuation allowance account is 
used. The allowance account is netted with the inventory accounts to arrive at the carrying amount that 
appears on the balance sheet.
3 Financial Accounting Standards Board (FASB), Accounting Standard`,
    },
    {
      number: 7,
      title: `Analysis of Long-Term Assets`,
      pages: 34,
      los: `Mastery The candidate should be able to:
compare the financial reporting of the following types of intangible
assets: purchased, internally developed, and acquired in a business
explain and evaluate how impairment and derecognition of property,
plant, and equipment and intangible assets affect the financial
statements and ratios
analyze and interpret financial statement disclosures regarding
property, plant, and equipment and intangible assets`,
      intro: `Long-term assets such as property, plant, and equipment and intangibles typically 
account for most issuers’ assets and are employed to generate economic benefits for 
many years. While an “economic” balance sheet would include a wide range of assets 
such as a company’s reputation and its trained, experienced workforce, “accounting” 
balance sheets prepared under IFRS and US GAAP permit the recognition of a narrow 
range of assets. Once a long-lived asset is recognized, either the cost or revaluation 
models are used for measurement, while US GAAP requires the cost model. The 
choice of different methods and varying accounting policies for long-lived assets can 
create challenges for analysts comparing companies.`,
      overview: `■ IFRS requires expensing research costs but allows development 
costs (not only software development costs) to be capitalized 
under certain conditions. Generally, US GAAP requires that both 
research and development costs be expensed; however, certain devel-
opment costs related to software must be capitalized.
 ■ When one company acquires another company, the transaction is 
accounted for using the acquisition method of accounting in which 
the company identified as the acquirer allocates the purchase price 
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ IFRS requires expensing research costs but allows development 
costs (not only software development costs) to be capitalized 
under certain conditions. Generally, US GAAP requires that both 
research and development costs be expensed; however, certain devel-
opment costs related to software must be capitalized.
 ■ When one company acquires another company, the transaction is 
accounted for using the acquisition method of accounting in which 
the company identified as the acquirer allocates the purchase price 
1
LEARNING MODULE
7
The two major accounting 
standard setters are as follows:  
1) the International Accounting 
Standards Board (IASB) who 
establishes International 
Financial Reporting Standards 
(IFRS) and 2) the Financial 
Accounting Standards Board 
(FASB) who establishes US GAAP .  
Throughout this learning module 
both standards are referred to 
and many, but not all, of these 
two sets of accounting rules 
are identified. Note: changes 
in accounting standards as 
well as new rulings and/or 
pronouncements issued after 
the publication of this learning 
module may cause some of the 
information to become dated. 
Learning Module 7 Analysis of Long-Term Assets212
to each asset acquired (and each liability assumed) on the basis of its 
fair value. Any excess of the purchase price over the fair value of net 
identifiable assets acquired is recorded as goodwill.
 ■ The capitalized costs of long-lived tangible assets and of intangible 
assets with finite useful lives are allocated to expense in subsequent 
periods over their useful lives. For tangible assets, this process is 
referred to as depreciation, and for intangible assets, it is referred to as 
amortization.
 ■ Long-lived tangible assets and intangible assets with finite useful lives 
are reviewed for impairment whenever changes in events or circum-
stances indicate that the carrying amount of an asset may not be 
recoverable.
 ■ Intangible assets with an indefinite useful life are not amortized. 
Instead, they are reviewed for impairment annually.
 ■ In contrast with depreciation and amortization charges, which serve 
to allocate the cost of a long-lived asset over its useful life, impairment 
charges reflect an unexpected decline in the fair value of an asset to an 
amount lower than its carrying amount.
 ■ IFRS permit impairment losses to be reversed, with the reversal 
reported in profit. US GAAP do not permit the reversal of impairment 
losses.
 ■ The gain or loss on the sale of long-lived assets is computed as the sale 
proceeds minus the carrying amount of the asset at the time of sale.
ACQUISITION OF INTANGIBLE ASSETS
compare the financial reporting of the following types of intangible 
assets: purchased, internally developed, and acquired in a business 
combination
Intangible assets are non-monetary assets lacking physical substance. Intangible assets 
include items that involve exclusive rights, such as patents, copyrights, trademarks, 
and franchises. Under IFRS, identifiable intangible assets must meet three definitional 
criteria. They must be (1) identifiable (either capable of being separated from the entity 
or arising from contractual or legal rights), (2) under the control of the company, and 
(3) expected to generate future economic benefits. In addition, two recognition crite -
ria must be met: (1) It is probable that the expected future economic benefits of the 
asset will flow to the company, and (2) the cost of the asset can be reliably measured. 
Goodwill, which is not considered an identifiable intangible asset, 1 arises when one 
company purchases another and the acquisition price exceeds the fair value of the 
net identifiable assets (both the tangible assets and the identifiable intangible assets, 
minus liabilities) acquired.
1 The IFRS definition of an intangible asset as an “identifiable non-monetary asset without physical 
substance” applies to intangible assets not specifically dealt with in standards other than International 
Accounting Standards (IAS) 38. The definition of intangible assets under US GAAP—“assets (other than 
financial assets) that lack physical substance”—includes goodwill in the definition of an intangible asset.
2
Acquisition of Intangible Assets 213
Accounting for an intangible asset depends on how it is acquired. The following 
sections describe accounting for intangible assets obtained in three ways: purchased 
in situations other than business combinations, developed internally, and acquired 
in business combinations.
Intangible Assets Purchased in Situations Other Than Business 
Combinations
Intangible assets purchased in situations other than business combinations, such as 
buying a patent, are treated at acquisition the same as long-lived tangible assets; they 
are recorded at their fair value when acquired, which is assumed to be equivalent to 
the purchase price. If several intangible assets are acquired as part of a group, the 
purchase price is allocated to each asset on the basis of its fair value.
In deciding how to treat individual intangible assets for analytical purposes, analysts 
are particularly aware that companies must use a substantial amount of judgment and 
numerous assumptions to determine the fair value of individual intangible assets. For 
analysis, therefore, understanding the types of intangible assets acquired can often 
be more useful than focusing on the values assigned to the individual assets. In other 
words, an analyst would typically be more interested in understanding what assets a 
company acquired (e.g., franchise rights) than in the precise portion of the purchase 
price a company allocated to each asset. Understanding the types of assets a company 
acquires can offer insights into the company’s strategic direction and future operating 
potential.
Intangible Assets Developed Internally
In contrast with the treatment of construction costs of tangible assets, the costs to 
internally develop intangible assets are generally expensed when incurred. In some 
situations, however, the costs incurred to internally develop an intangible asset are 
capitalized. The general analytical issues related to the capitalizing-versus-expensing 
decision apply here—namely, comparability across companies and the effect on an 
individual company’s trend analysis.
The general requirement that costs to internally develop intangible assets be 
expensed should be compared with capitalizing the cost of acquiring intangible assets 
in situations other than business combinations. Because costs associated with internally 
developing intangible assets are usually expensed, a company that has internally devel-
oped intangible assets, such as patents, copyrights, or brands through expenditures on 
R&D or advertising, will recognize a lower amount of assets than a company that has 
obtained intangible assets through external purchase. In addition, on the statement of 
cash flows, costs of internally developing intangible assets are classified as operating 
cash outflows whereas costs of acquiring intangible assets are classified as investing 
cash outflows. Differences in strategy (developing versus acquiring intangible assets) 
can thus impact financial ratios.
IFRS requires that expenditures on research (or during the research phase of an 
internal project) be expensed rather than capitalized as an intangible asset. 2 Research 
is defined as “original and planned investigation undertaken with the prospect of 
gaining new scientific or technical knowledge and understanding. ” 3 The “research 
phase of an internal project” refers to the period during which a company cannot 
demonstrate that an intangible asset is being created—for example, the search for 
alternative materials or systems to use in a production process. In contrast with the 
2 IAS 38, Intangible Assets.
3 IAS 38, Intangible Assets, paragraph 8, Definitions.
Learning Module 7 Analysis of Long-Term Assets214
treatment of research-`,
    },
    {
      number: 8,
      title: `Topics in Long-Term Liabilities and Equity`,
      pages: 36,
      los: `Mastery The candidate should be able to:
explain the financial reporting of leases from the perspectives of
explain the financial reporting of defined contribution, defined
benefit, and stock-based compensation plans
describe the financial statement presentation of and disclosures
relating to long-term liabilities and share-based compensation`,
      intro: `Non-current liabilities arise from different sources of financing and different types of 
creditors. While the financial reporting of bonds and loans is straightforward and is 
covered in the prerequisite materials, the reporting of leases and postemployment lia -
bilities is more complex. Leases are an alternative to asset ownership and have become 
a common means of financing real estate and capital equipment. Postretirement and 
stock-based compensation are a large and growing share of employee compensation 
and operating expenses. Given their importance, this learning module introduces the 
reporting of leases, pension plans, and stock-based compensation under International 
Financial Reporting Standards (IFRS) and US GAAP . It concludes by reviewing the 
presentation and disclosure requirements for these items.`,
      overview: `■ Leasing has several advantages over purchasing an asset 
outright: less upfront cash commitment, typically low 
financing costs, and lower risks associated with ownership, such as 
obsolescence.
 ■ Under IFRS and US GAAP , leases are classified as operating or finance 
leases. Finance leases resemble an asset purchase or sale while operat -
ing leases resemble a rental agreement.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Leasing has several advantages over purchasing an asset 
outright: less upfront cash commitment, typically low 
financing costs, and lower risks associated with ownership, such as 
obsolescence.
 ■ Under IFRS and US GAAP , leases are classified as operating or finance 
leases. Finance leases resemble an asset purchase or sale while operat -
ing leases resemble a rental agreement.
1
LEARNING MODULE
8
The two major accounting 
standard setters are as follows:  
1) the International Accounting 
Standards Board (IASB) who 
establishes International 
Financial Reporting Standards 
(IFRS) and 2) the Financial 
Accounting Standards Board 
(FASB) who establishes US GAAP .  
Throughout this learning module 
both standards are referred to 
and many, but not all, of these 
two sets of accounting rules 
are identified. Note: changes 
in accounting standards as 
well as new rulings and/or 
pronouncements issued after 
the publication of this learning 
module may cause some of the 
information to become dated. 
Learning Module 8 Topics in Long-Term Liabilities and Equity246
 ■ The financial reporting of a lease depends on whether the party is the 
lessee or lessor, whether the party reports with IFRS or US GAAP , and 
the classification of the lease as finance or operating.
 ■ US GAAP and IFRS share the same accounting treatment for lessors 
but differ slightly for lessees. IFRS has a single accounting model for 
both operating leases and finance lease lessees, while US GAAP has an 
accounting model for each.
 ■ Two types of pension plans are defined contribution plans and defined 
benefits plans. In a defined contribution plan, the amount of employer 
contribution into the plan is specified (i.e., defined) and the amount 
of pension that is ultimately paid by the plan (received by the retiree) 
depends on the performance of the plan’s assets. In a defined ben-
efit plan, the amount of pension that is ultimately paid by the plan 
(received by the retiree) is defined, usually according to a benefit 
formula.
 ■ In a defined contribution plan, employees bear investment risks (i.e., 
the potential for investment returns on plan assets to differ from 
expectations) and actuarial risks (i.e. the potential for retirement and 
death timing to differ from expectations). In a defined benefit plan, 
employers bear both investment and actuarial risks.
 ■ Under a defined contribution pension plan, the cash payment made 
into the plan is recognized as pension expense.
 ■ For defined benefit pension plans, companies must report the dif -
ference between the defined benefit pension obligation and the fair 
value of pension assets as an asset or liability on the balance sheet. An 
underfunded defined benefit pension plan is shown as a non-current 
liability. The change in the net asset or liability between balance sheet 
dates is recognized as a cost of the period, with service cost and net 
interest expense or income recognized in profit and loss and remea-
surement changes recognized in other comprehensive income. There 
are modest differences in accounting treatment under US GAAP .
 ■ Employee compensation packages are structured to fulfill various 
objectives, including satisfying employees’ needs for liquidity, retain-
ing employees, and providing incentives to employees.
 ■ Share-based compensation serves to align employees’ interests with 
those of the shareholders. It typically includes stock grants and stock 
options, which have the advantage of requiring no current-period cash 
outlays. Stock-based compensation is measured using fair value at the 
grant date and recognized as compensation expense over the vesting 
period.
 ■ The valuation technique, or option pricing model, that a company 
uses is an important choice in determining fair value of options used 
in a compensation agreement and is disclosed in the notes to financial 
statements. Key inputs into option pricing models include such items 
as exercise price, stock price volatility, estimated life of each award, 
estimated number of options that will be forfeited, dividend yield, and 
the risk-free rate of interest.
Leases 247
LEASES
explain the financial reporting of leases from the perspectives of 
lessors and lessees
Firms typically acquire the rights to use assets by outright purchase. As an alterna-
tive, a lease is a contract that conveys the right to use an asset for a period of time in 
exchange for consideration. The party who uses the asset and pays the consideration 
is the lessee, and the party who owns the asset, grants the right to use the asset, and 
receives consideration is the lessor.
Leasing is a way to obtain the benefits of the asset without purchasing it outright. 
From the perspective of a lessee, it is a form of financing that resembles acquiring 
an asset with a note payable. From the perspective of a lessor, a lease is a form of 
investment and can also be an effective selling strategy, because customers generally 
prefer to pay in installments.
After reviewing the contractual requirements for a lease, this lesson examines the 
advantages and classification of leases and their financial reporting.
Requirements for Lease Accounting
For a contract to be a lease or contain a lease, it must
 ■ identify a specific underlying asset;
 ■ give the customer the right to obtain largely all of the economic benefits 
from the asset over the contract term; and
 ■ give the customer, not the supplier, the ability to direct how and for what 
objective the underlying asset is used.
For example, a contract between a customer and a trucking company is a lease if 
the contract identifies a specific truck, allows the customer exclusive use of it during 
the contract term, and lets the customer direct its use. If, however, the customer 
contracts with a trucking company to ship goods for a fee, the contract would not be 
a lease, because a specific truck is not identified nor does the customer obtain largely 
all of the economic benefits from the truck over the contract term.
Examples of Leases
Leasing is among the most prevalent forms of financing. Most companies are lessees 
of real estate and information technology assets. In 2014, the International Accounting 
Standards Board found that more than 14,000 publicly listed companies were lessees 
and that they owed more than USD3.3 trillion in future lease payments in aggre-
gate.1Exhibit 1 illustrates several examples of these arrangements.
1 IFRS, “IASB Shines Light on Leases by Bringing Them onto the Balance Sheet, ” 13 January 2016, www  
.ifrs .org/ news -and -events/ 2016/ 01/ iasb -shines -light -on -leases -by -bringing -them -onto -the -balance -sheet.
2
Learning Module 8 Topics in Long-Term Liabilities and Equity248
Exhibit 1: Examples of Leases
Lessee Lease Disclosure Excerpt
Alibaba “The Company entered into operating lease agreements pri-
marily for shops and malls, offices, warehouses, and land. ”
Copa Airlines “The Company leases some aircraft under long-term lease 
agreements with an average duration of 10 years. Other 
leased assets include real estate, airport and terminal facili-
ties, sales offices, maintenance facilities, and general offices. ”
Meta (formerly Facebook) “We have entered into various non-cancelable operating 
lease agreements for certain of our offices, data center, land, 
colocations, and equipment. ”
Standard Bank “The group leases various offices, branch space, and ATM 
space. ”
Sources: Companies’ 2020 and 2019 annual reports.
Lessors are often real estate investment companies or banks, although there are inde-
pendent specialist leasing companies, such as AerCap Holdings N.V., which describes 
itself as “the global leader in aircraft leasing. ” As of 30 June 2022, the company owned 
1,557 passenger aircraft that are leased to airlines. 2
Advantages of Leasing
There are several advantages to leasing an asset compared with purchasing it:
 ■ Less cash is needed up front. Leases typically requ`,
    },
    {
      number: 9,
      title: `Analysis of Income Taxes`,
      pages: 36,
      los: `Mastery The candidate should be able to:
contrast accounting profit, taxable income, taxes payable, and
income tax expense and temporary versus permanent differences
between accounting profit and taxable income
explain how deferred tax liabilities and assets are created and the
factors that determine how a company’s deferred tax liabilities and
assets should be treated for the purposes of financial analysis
calculate, interpret, and contrast an issuer’s effective tax rate,
statutory tax rate, and cash tax rate
analyze disclosures relating to deferred tax items and the effective
tax rate reconciliation and explain how information included in these
disclosures affects a company’s financial statements and financial`,
      intro: `Differences between tax laws and financial accounting standards result in differences 
between accounting profit (i.e., income before taxes on the income statement) and 
taxable income, or income computed under the prevailing tax laws in a given juris -
diction. These differences can be temporary or permanent. Temporary differences 
result in deferred tax assets and liabilities on the balance sheet and are important 
for capturing the income tax effects of all current period activities, even if tax con-
sequences occur in the future. Current and deferred income tax expenses are used 
to calculate the effective tax rate, which is commonly used by analysts in estimating 
after-tax profitability measures like free cash flow. Given temporary and permanent 
differences, the effective tax rate typically differs from the statutory and cash tax rates 
for an issuer. Company disclosures of income tax related information in the notes to 
financial statements is typically one of the most extensive note disclosures.`,
      overview: `■ Accounting profit is reported on a company’s income state-
ment in accordance with prevailing accounting standards and 
does not include a provision for income tax expense.
 ■ A company’s taxable income is its income subject to income taxes 
under the tax laws of the relevant jurisdiction and is the basis for its 
income tax payable (a liability), which appears on its balance sheet.
 ■ Taxable and deductible temporary differences reverse in future periods 
while permanent differences do not.
 ■ Deferred tax assets and liabilities arise from temporary differences in 
accounting profit and taxable income.
 ■ Deferred tax assets represent taxes that have been paid but have not 
yet been recognized on the income statement, and deferred tax liabil-
ities occur when financial accounting income tax expense is greater 
than regulatory income tax expense.
 ■ The changes in deferred tax assets and liabilities are added to income 
tax payable to determine the company’s income tax expense as it is 
reported on the income statement.
 ■ Income taxes payable are primarily determined by the geographic 
composition of taxable income and the tax rates in each jurisdiction.
 ■ Three types of tax rates are relevant to analysts: the statutory tax rate, 
the effective tax rate, and the cash tax rate.
 ■ The notes in the financial statements disclose a reconciliation of the 
statutory tax rate to the effective rate and identify the items that sig-
nificantly contribute to a temporarily high or low effective tax rate.
 ■ Companies present and disclose income tax–related information 
through income statements, balance sheets, and income tax note 
disclosures.
 ■ Companies will disclose how the income tax provision was derived 
from the US federal statutory rate.
 ■ In the income tax note disclosure, companies will provide detailed 
information about the derivation of the deferred tax assets and 
deferred tax liabilities.
1
Differences between Accounting Profit and Taxable Income 283`,
      body: `LEARNING MODULE OVERVIEW
 ■ Accounting profit is reported on a company’s income state-
ment in accordance with prevailing accounting standards and 
does not include a provision for income tax expense.
 ■ A company’s taxable income is its income subject to income taxes 
under the tax laws of the relevant jurisdiction and is the basis for its 
income tax payable (a liability), which appears on its balance sheet.
 ■ Taxable and deductible temporary differences reverse in future periods 
while permanent differences do not.
 ■ Deferred tax assets and liabilities arise from temporary differences in 
accounting profit and taxable income.
 ■ Deferred tax assets represent taxes that have been paid but have not 
yet been recognized on the income statement, and deferred tax liabil-
ities occur when financial accounting income tax expense is greater 
than regulatory income tax expense.
 ■ The changes in deferred tax assets and liabilities are added to income 
tax payable to determine the company’s income tax expense as it is 
reported on the income statement.
 ■ Income taxes payable are primarily determined by the geographic 
composition of taxable income and the tax rates in each jurisdiction.
 ■ Three types of tax rates are relevant to analysts: the statutory tax rate, 
the effective tax rate, and the cash tax rate.
 ■ The notes in the financial statements disclose a reconciliation of the 
statutory tax rate to the effective rate and identify the items that sig-
nificantly contribute to a temporarily high or low effective tax rate.
 ■ Companies present and disclose income tax–related information 
through income statements, balance sheets, and income tax note 
disclosures.
 ■ Companies will disclose how the income tax provision was derived 
from the US federal statutory rate.
 ■ In the income tax note disclosure, companies will provide detailed 
information about the derivation of the deferred tax assets and 
deferred tax liabilities.
1
Differences between Accounting Profit and Taxable Income 283
DIFFERENCES BETWEEN ACCOUNTING PROFIT AND 
TAXABLE INCOME
contrast accounting profit, taxable income, taxes payable, and 
income tax expense and temporary versus permanent differences 
between accounting profit and taxable income
A company’s accounting profit is reported on its income statement in accordance 
with prevailing accounting standards. Accounting profit (also referred to as income 
before taxes or pretax income) does not include a provision for income tax expense. 1 
A company’s taxable income is its income subject to income taxes under the tax laws 
of the relevant jurisdiction. A company’s taxable income is the basis for its income 
tax payable (a liability) or recoverable (an asset), which appears on its balance sheet. 
Income tax paid in a period is the cash amount paid for income and reduces the 
income tax payable.
The tax base of an asset or liability is the amount at which the asset or liability 
is valued for tax purposes, whereas the carrying amount is the amount at which the 
asset or liability is recorded in the financial statements. 2 The tax bases and carrying 
amounts of assets and liabilities can differ based on differences in accounting standards 
and the relevant tax laws. Common differences are as follows:
 ■ Revenues and expenses may be recognized in one period for accounting 
purposes and a different period for tax purposes.
 ■ Specific revenues and expenses may be either recognized for accounting 
purposes and not at all for tax purposes, or vice versa.
 ■ The deductibility of gains and losses of assets and liabilities may vary for 
accounting and income tax purposes.
 ■ Subject to tax rules, tax losses in prior years might be used to reduce taxable 
income in later years, resulting in differences in accounting and taxable 
income (tax loss carryforward).
 ■ Adjustments of reported financial data from prior years might not be rec -
ognized equally for accounting and tax purposes or might be recognized in 
different periods.
A common example is accelerated depreciation of an asset for tax reporting (to 
increase expense and lower tax payments in the early years) while using the straight-line 
depreciation method on the financial statements. Although different on a year-to-year 
basis (e.g., depreciation of 10 percent on a straight-line basis may be used for accounting 
purposes, whereas 50 percent might be allowed for tax purposes in the first year) both 
approaches allow for the total cost of the asset to be depreciated over its useful life.
Differences between the tax base and carrying amount of liabilities (and, by 
extension, between taxable income and accounting profit) can either be temporary 
or permanent. Temporary differences, like the aforementioned accelerated versus 
straight-line depreciation example, reverse in future periods, whereas permanent 
differences do not.
1 As defined under International Accounting Standard 12 (IAS 12), paragraph 5.
2 The terms “tax base” and “tax basis” are interchangeable. “Tax basis” is more commonly used in the 
United States. Similarly, “carrying amount” and “book value” refer to the same concept.
2
Learning Module 9 Analysis of Income Taxes284
Taxable Temporary Differences
Temporary differences are further divided into two categories, namely taxable tem-
porary differences and deductible temporary differences. Taxable temporary dif -
ferences result from the carrying amount of an asset exceeding its tax base (like the 
aforementioned accelerated depreciation example at the end of Year 1) or when the 
tax base of a liability exceeds its carrying amount. Taxable temporary differences 
result in the recognition of deferred tax liabilities.
Deductible Temporary Differences
Deductible temporary differences are temporary differences that result in a reduc -
tion or deduction of taxable income in a future period when the balance sheet item 
is recovered or settled. Deductible temporary differences result in a deferred tax 
asset when the tax base of an asset exceeds its carrying amount and, in the case of a 
liability, when the carrying amount of the liability exceeds its tax base. The recognition 
of a deferred tax asset is allowed only to the extent there is a reasonable expectation 
of future profits against which the asset or liability (that gave rise to the deferred tax 
asset) can be recovered or settled.
To determine the probability of sufficient future profits for utilization, one must 
consider the following: (1) sufficient taxable temporary differences must exist that 
are related to the same tax authority and the same taxable entity; and (2) the taxable 
temporary differences that are expected to reverse in the same periods as expected 
for the reversal of the deductible temporary differences.
Taxable and Deductible Temporary Differences
Exhibit 1 summarizes how differences between the tax bases and carrying amounts 
of assets and liabilities give rise to deferred tax assets or deferred tax liabilities.
Exhibit 1: Treatment of Temporary Differences
Balance Sheet Item Carrying Amount vs. Tax Base
Results in Deferred Tax 
Asset/Liability
Asset Carrying amount > tax base Deferred tax liability
Asset Carrying amount < tax base Deferred tax asset
Liability Carrying amount > tax base Deferred tax asset
Liability Carrying amount < tax base Deferred tax liability
Example 1 and 2 illustrate the difference in the tax base and carrying amount of the 
assets and liabilities, whether they are temporary or permanent differences, and 
whether a deferred tax asset or liability will be recognized.
Differences between Accounting Profit and Taxable Income 285
EXAMPLE 1
Differences in Tax Base and Carrying Amount of Assets 
and Liabilities
 
Exhibit 2: Tax Base and Carrying Amounts
 
 
  Carrying 
Amount 
(euros)
Tax Base 
(euros)
Temporary 
Difference 
(euros)
Will Result in Deferred 
Tax Asset/Liability
1. Dividends 
receivable
1,000,000 1,000,000 0 N/A
2. Development 
costs
2,500,000 2,250,000 250,000 `,
    },
    {
      number: 10,
      title: `Financial Reporting Quality`,
      pages: 40,
      los: `Mastery The candidate should be able to:
compare financial reporting quality with the quality of reported
results (including quality of earnings, cash flow, and balance sheet
describe a spectrum for assessing financial reporting quality
explain the difference between conservative and aggressive
describe motivations that might cause management to issue financial
reports that are not high quality and conditions that are conducive to
issuing low-quality, or even fraudulent, financial reports
describe mechanisms that discipline financial reporting quality and
the potential limitations of those mechanisms
describe presentation choices, including non-GAAP measures, that
could be used to influence an analyst’s opinion`,
      intro: `Financial reporting quality varies across companies. The ability to assess the quality 
of a company’s financial reporting is an important skill for analysts. Indications of 
low-quality financial reporting can prompt an analyst to maintain heightened skepticism 
when reading a company’s reports, to review disclosures critically when undertaking 
financial statement analysis, and to incorporate appropriate adjustments in assessments 
of past performance and forecasts of future performance.`,
      overview: `■ Financial reporting quality can be thought of as spanning a 
continuum. Reporting of the highest quality contains infor -
mation that is relevant, correct, complete, and unbiased, whereas the 
lowest quality reporting contains information that is not just biased or 
incomplete but possibly pure fabrication.
 ■ Reporting quality, the focus of this module, pertains to the quality of 
the information disclosed. High-quality reporting represents the eco-
nomic reality of the company’s activities during the reporting period 
and the company’s financial condition at the end of the period.
 ■ Results quality (commonly referred to as earnings quality) pertains to 
the earnings and cash generated by the company’s actual economic 
activities and the resulting financial condition, relative to expecta-
tions of current and future financial performance. Quality earnings 
can be regarded as more sustainable, providing a sound platform for 
forecasts.
 ■ An aspect of financial reporting quality is the degree to which 
accounting choices are conservative or aggressive. “ Aggressive” typ-
ically refers to choices that aim to enhance the company’s reported 
performance and financial position by inflating the amount of rev -
enues, earnings, and/or operating cash flow reported in the period; 
or by decreasing expenses for the period and/or the amount of debt 
reported on the balance sheet.
 ■ Conservatism in financial reports can result from either (1) accounting 
standards that specifically require a conservative treatment of a trans -
action or an event or (2) judgments made by managers when applying 
accounting standards that result in conservative results.
 ■ Managers may be motivated to issue less-than-high-quality financial 
reports to mask poor performance, boost the company’s stock price, 
to increase personal compensation, and/or to avoid violation of debt 
covenants.
 ■ Conditions that are conducive to the issuance of low-quality finan-
cial reports include a cultural envi`,
      body: `LEARNING MODULE OVERVIEW
 ■ Financial reporting quality can be thought of as spanning a 
continuum. Reporting of the highest quality contains infor -
mation that is relevant, correct, complete, and unbiased, whereas the 
lowest quality reporting contains information that is not just biased or 
incomplete but possibly pure fabrication.
 ■ Reporting quality, the focus of this module, pertains to the quality of 
the information disclosed. High-quality reporting represents the eco-
nomic reality of the company’s activities during the reporting period 
and the company’s financial condition at the end of the period.
 ■ Results quality (commonly referred to as earnings quality) pertains to 
the earnings and cash generated by the company’s actual economic 
activities and the resulting financial condition, relative to expecta-
tions of current and future financial performance. Quality earnings 
can be regarded as more sustainable, providing a sound platform for 
forecasts.
 ■ An aspect of financial reporting quality is the degree to which 
accounting choices are conservative or aggressive. “ Aggressive” typ-
ically refers to choices that aim to enhance the company’s reported 
performance and financial position by inflating the amount of rev -
enues, earnings, and/or operating cash flow reported in the period; 
or by decreasing expenses for the period and/or the amount of debt 
reported on the balance sheet.
 ■ Conservatism in financial reports can result from either (1) accounting 
standards that specifically require a conservative treatment of a trans -
action or an event or (2) judgments made by managers when applying 
accounting standards that result in conservative results.
 ■ Managers may be motivated to issue less-than-high-quality financial 
reports to mask poor performance, boost the company’s stock price, 
to increase personal compensation, and/or to avoid violation of debt 
covenants.
 ■ Conditions that are conducive to the issuance of low-quality finan-
cial reports include a cultural environment that result in fewer or 
less transparent financial disclosures, book/tax conformity that shifts 
emphasis toward legal compliance and away from fair presentation, 
and limited capital markets regulation.
 ■ Mechanisms that discipline financial reporting quality include open 
capital markets and incentives for companies to minimize cost of cap-
ital, independent auditors, contract provisions specifically tailored to 
penalize misreporting, and enforcement by regulatory entities.
1
Conceptual Overview 319
 ■ Pro forma earnings (also commonly referred to as non-GAAP or 
non-IFRS earnings) adjust earnings as reported on the income state-
ment. Pro forma earnings that exclude negative items are a hallmark of 
aggressive presentation choices.
 ■ Companies are required to make additional disclosures when present -
ing any non-GAAP or non-IFRS metric.
 ■ Managers’ considerable flexibility in choosing their companies’ 
accounting policies and in formulating estimates provides opportuni-
ties for aggressive accounting.
 ■ Examples of accounting choices that affect earnings and balance sheets 
include inventory cost flow assumptions, estimates of uncollectible 
accounts receivable, estimated realizability of deferred tax assets, 
depreciation method, estimated salvage value of depreciable assets, 
and estimated useful life of depreciable assets.
 ■ Cash flow from operations is an important metric for investors that 
can be enhanced by management’s operating choices, such as stretch-
ing accounts payable, and potentially by classification choices.
CONCEPTUAL OVERVIEW
compare financial reporting quality with the quality of reported 
results (including quality of earnings, cash flow, and balance sheet 
items)
Ideally, analysts would always have access to financial reports that are based on 
sound financial reporting standards, such as those from the International Accounting 
Standards Board (IASB) and the Financial Accounting Standards Board (FASB), and 
that are free from manipulation. But, in practice, the quality of financial reports can 
vary greatly. High-quality financial reporting provides information that is useful to 
analysts in assessing a company’s performance and prospects. Low-quality financial 
reporting contains inaccurate, misleading, or incomplete information.
Extreme lapses in financial reporting quality have given rise to high-profile scan-
dals that resulted not only in investor losses but also in reduced confidence in the 
financial system. Financial statement users who were able to accurately assess financial 
reporting quality were better positioned to avoid losses. These lapses illustrate the 
challenges analysts face as well as the potential costs of failing to recognize practices 
that result in misleading or inaccurate financial reports. 1 Examples of misreporting 
can provide an analyst with insight into various signals that may indicate poor-quality 
financial reports.
This module addresses financial reporting quality, which pertains to the quality of 
information in financial reports, including disclosures in notes. High-quality reporting 
provides decision-useful information, which is relevant and faithfully represents the 
economic reality of the company’s activities during the reporting period as well as the 
company’s financial condition at the end of the period. A separate but interrelated 
1 In this module, the examples of misleading or inaccurate financial reports occurred in prior years—not  
because there are no current examples of questionable financial reporting, but rather because it has been 
conclusively resolved that misreporting occurred in the historical examples.
2
Learning Module 10 Financial Reporting Quality320
attribute of quality is quality of reported results or earnings quality , which pertains 
to the earnings and cash generated by the company’s actual economic activities and 
the resulting financial condition. The term “earnings quality” is commonly used in 
practice and will be used broadly to encompass the quality of earnings, cash flow, or 
balance sheet items. High-quality earnings result from activities that a company likely 
will be able to sustain in the future and provide a sufficient return on the company’s 
investment. The concepts of earnings quality and financial reporting quality are 
interrelated because a correct assessment of earnings quality is possible only when 
there is some basic level of financial reporting quality. Beyond this basic level, as the 
quality of reporting increases, the ability of financial statement users to correctly assess 
earnings quality and to develop expectations for future performance also increases.
After providing a conceptual overview of reporting quality, this module discusses 
motivations that might cause, and conditions that might enable, management to issue 
financial reports that are not high quality and mechanisms that aim to provide disci-
pline to financial reporting quality. We also describe choices made by management 
that can affect financial reporting quality—presentation choices, accounting methods, 
and estimates—as well as warning signs of poor-quality financial reporting.
Conceptual Overview
Financial reporting quality and results or earnings quality are interrelated attributes 
of quality. Exhibit 1 illustrates this interrelationship and its implications.
Exhibit 1: Relationships between Financial Reporting Quality and Earnings 
Quality
    Financial Reporting Quality
    Low High
Earnings 
(Results) 
Quality
High
LOW financial reporting 
quality impedes assessment of 
earnings quality and impedes 
valuation.
HIGH financial reporting  
quality enables assessment. 
HIGH earnings quality 
increases company value.
Low HIGH financial reporting  
quality enables assessment. 
LOW earnings quality 
decreases company value.
As shown in Exhibit 1, if financial reporting quality is low, the information provided 
is of little use in assessing the company’s `,
    },
    {
      number: 11,
      title: `Financial Analysis Techniques`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe tools and techniques used in financial analysis, including
their uses and limitations
calculate and interpret activity, liquidity, solvency, and profitability
describe relationships among ratios and evaluate a company using
demonstrate the application of DuPont analysis of return on equity
and calculate and interpret effects of changes in its components
describe the uses of industry-specific ratios used in financial analysis
describe how ratio analysis and other techniques can be used to
model and forecast earnings
The two major accounting
standard setters are as follows:`,
      intro: `Analysts convert financial statement and other data into metrics that assist in decision 
making and help answer questions such as the following: How successfully has a target 
company performed, relative to its own past performance and relative to its competi -
tors? How is the company likely to perform in the future? Based on expectations about 
future performance, what is the value of this company or the securities it issues? This 
module describes various techniques used to answer these and other questions. These 
financial analysis techniques are crucial to a wide range of analytical tasks, including 
valuing equity securities, assessing credit risk, conducting due diligence related to an 
acquisition, and evaluating business performance.`,
      overview: `■ There is no single approach to structuring the financial analysis 
process, but a general framework entails the following phases: 
articulate the purpose of the analysis, collect input data, process the 
data, analyze and interpret the processed data, develop and com-
municate conclusions and recommendations, follow-up periodically 
to determine if any changes are necessary to recommendations or 
holdings.
 ■ The purpose of analysis is not simply to compile information and 
do computations, but to integrate these into a cohesive result that 
addresses not just what happened, but why it happened and whether it 
created value. An analyst must be able to understand the “why” behind 
the numbers and ratios, not just what the numbers and ratios are.
 ■ Evaluations require comparisons. It is difficult to say that a company’s 
financial performance was “good” or “bad” without clarifying the basis 
for comparison. Cross-sectional analysis compares multiple companies 
at the same point in time or over the same range of time, and trend or 
time-series analysis compares measures for a single company over a 
period of time.
 ■ Ratios and common-size financial statements can remove size as a 
factor and enable more relevant comparisons. Financial statement 
ratios are helpful for valuing companies and securities, selecting 
investments, and predicting financial distress. The ratio is an indicator 
of some aspect of a company’s performance, telling what happened but 
not why it happened.
 ■ Common-size analysis involves expressing financial data, including 
entire financial statements, in relation to a single financial statement 
item, or base. A vertical common-size balance sheet divides each 
balance sheet item by the same period’s total assets and expresses 
the results as percentages. A vertical common-size income statement 
divides each income statement item by revenue or by total assets. A 
horizontal common-size balance sheet divides the quantity of each 
item by a base `,
      body: `LEARNING MODULE OVERVIEW
 ■ There is no single approach to structuring the financial analysis 
process, but a general framework entails the following phases: 
articulate the purpose of the analysis, collect input data, process the 
data, analyze and interpret the processed data, develop and com-
municate conclusions and recommendations, follow-up periodically 
to determine if any changes are necessary to recommendations or 
holdings.
 ■ The purpose of analysis is not simply to compile information and 
do computations, but to integrate these into a cohesive result that 
addresses not just what happened, but why it happened and whether it 
created value. An analyst must be able to understand the “why” behind 
the numbers and ratios, not just what the numbers and ratios are.
 ■ Evaluations require comparisons. It is difficult to say that a company’s 
financial performance was “good” or “bad” without clarifying the basis 
for comparison. Cross-sectional analysis compares multiple companies 
at the same point in time or over the same range of time, and trend or 
time-series analysis compares measures for a single company over a 
period of time.
 ■ Ratios and common-size financial statements can remove size as a 
factor and enable more relevant comparisons. Financial statement 
ratios are helpful for valuing companies and securities, selecting 
investments, and predicting financial distress. The ratio is an indicator 
of some aspect of a company’s performance, telling what happened but 
not why it happened.
 ■ Common-size analysis involves expressing financial data, including 
entire financial statements, in relation to a single financial statement 
item, or base. A vertical common-size balance sheet divides each 
balance sheet item by the same period’s total assets and expresses 
the results as percentages. A vertical common-size income statement 
divides each income statement item by revenue or by total assets. A 
horizontal common-size balance sheet divides the quantity of each 
item by a base year quantity of the same item to yield a percentage 
change in that item from the base year. Trend data generated by a 
horizontal common-size analysis can be compared across financial 
statements.
1
The Financial Analysis Process 389
 ■ Graphs facilitate comparison of performance and financial structure 
over time, provide a visual overview of changes and trends, and can 
be used to communicate the conclusions from financial analysis. 
Regression analysis can help identify relationships or correlation 
between variables.
 ■ Activity ratios measure the efficiency of a company’s operations, such 
as a collection of receivables or management of inventory. Major 
activity ratios include inventory turnover, days of inventory on hand, 
receivables turnover, days of sales outstanding, payables turnover, 
number of days of payables, working capital turnover, fixed asset turn-
over, and total asset turnover.
 ■ Liquidity ratios measure the ability of a company to meet short-term 
obligations. Major liquidity ratios include the current ratio, quick ratio, 
cash ratio, and defensive interval ratio. The cash conversion cycle is a 
measure of liquidity that is not a simple ratio.
 ■ Solvency ratios measure the ability of a company to meet long-term 
obligations. Major solvency ratios include debt ratios (including the 
debt-to-assets ratio, debt-to-capital ratio, debt-to-equity ratio, and 
financial leverage ratio) and coverage ratios (including interest cover -
age and fixed charge coverage).
 ■ Profitability ratios measure the ability of a company to generate profits 
from revenue and assets. Major profitability ratios include return on 
sales ratios (including gross profit margin, operating profit margin, 
pretax margin, and net profit margin) and return on investment ratios 
(including operating return on assets [ROA], ROA, return on total 
capital, return on equity [ROE], and return on common equity).
 ■ It is important to examine a variety of financial ratios—not a single 
ratio or category of ratios in isolation—to ascertain the overall posi-
tion and performance of a company.
 ■ DuPont analysis breaks ROE into components that are indicators of 
different aspects of company performance. Many levels of decomposi-
tion are possible.
 ■ The five-component DuPont decomposition expresses a company’s 
ROE as a function of its tax rate, interest burden, operating profitabil-
ity, efficiency, and leverage.
 ■ Because aspects of performance that are considered important in one 
industry may be irrelevant in another, industry-specific ratios are used 
that reflect these differences.
 ■ Techniques such as sensitivity analysis, scenario analysis, and simula-
tion are used to forecast future financial performance.
THE FINANCIAL ANALYSIS PROCESS
describe tools and techniques used in financial analysis, including 
their uses and limitations
2
Learning Module 11 Financial Analysis Techniques390
In financial analysis, it is essential to clearly identify and understand the final objective 
and the steps required to reach that objective. In addition, the analyst needs to know 
where to find relevant data, how to process and analyze the data (in other words, know 
the typical questions to address when interpreting data), and how to communicate 
the analysis and conclusions.
The Objectives of the Financial Analysis Process
Because of the variety of reasons for performing financial analysis, the numerous 
available techniques, and the often substantial amount of data, it is important that 
the analytical approach be tailored to the specific situation. Prior to beginning any 
financial analysis, the analyst should clarify the purpose and context, and clearly 
understand the following:
 ■ What is the purpose of the analysis? What questions will this analysis 
answer?
 ■ What level of detail will be needed to accomplish this purpose?
 ■ What data are available for the analysis?
 ■ What are the factors or relationships that will influence the analysis?
 ■ What are the analytical limitations, and will these limitations potentially 
impair the analysis?
Having clarified the purpose and context of the analysis, the analyst can select 
the set of techniques (e.g., ratios) that will best assist in making a decision. Although 
there is no single approach to structuring the analysis process, a general framework 
is set forth in Exhibit 1. The steps in this process were discussed in more detail in 
an earlier module; the primary focus of this module is on Phases 3 and 4, processing 
and analyzing data.
Exhibit 1: A Financial Statement Analysis Framework
Phase Sources of Information Output
1. Articulate the purpose and con-
text of the analysis.
 ■ The nature of the analyst’s function, 
such as evaluating an equity or debt 
investment or issuing a credit rating.
 ■ Communication with client or super -
visor on needs and concerns.
 ■ Institutional guidelines related to 
developing specific work product.
 ■ Statement of the purpose or objective 
of analysis.
 ■ A list (written or unwritten) of specific 
questions to be answered by the 
analysis.
 ■ Nature and content of report to be 
provided.
 ■ Timetable and budgeted resources for 
completion.
2. Collect input data.  ■ Financial statements, other financial 
data, questionnaires, and industry/
economic data.
 ■ Discussions with management, suppli-
ers, customers, and competitors.
 ■ Company site visits (e.g., to produc -
tion facilities or retail stores).
 ■ Organized financial statements.
 ■ Financial data tables.
 ■ Completed questionnaires, if 
applicable.
The Financial Analysis Process 391
Phase Sources of Information Output
3. Process data.  ■ Data from the previous phase.  ■ Adjusted financial statements.
 ■ Common-size statements.
 ■ Ratios and graphs.
 ■ Forecasts.
4. Analyze/interpret the processed 
data.
 ■ Input data as well as processed data.  ■ Analytical results.
5. Develop and communicate con-
clusions and recommendations 
(e.g., with a`,
    },
    {
      number: 12,
      title: `Introduction to Financial Statement Modeling`,
      pages: 40,
      los: `Mastery The candidate should be able to:
demonstrate the development of a sales-based pro forma company
explain how behavioral factors affect analyst forecasts and
recommend remedial actions for analyst biases
explain how the competitive position of a company based on a
Porter’s five forces analysis affects prices and costs
explain how to forecast industry and company sales and costs when
they are subject to price inflation or deflation
explain considerations in the choice of an explicit forecast horizon
and an analyst’s choices in developing projections beyond the
short-term forecast horizon
The two major accounting`,
      intro: `Financial statement modeling is a key step in the process of valuing companies and the 
securities they have issued. We begin our discussion with an overview of developing 
a revenue forecast. We then describe the general approach to forecasting each of the 
financial statements and demonstrate the construction of a financial statement model, 
including forecasted income statements, balance sheets, and statements of cash flows. 
Then, we describe key behavioral biases that can influence the modeling process and 
strategies to mitigate them. We then turn to several important topics on the effects 
of micro- and macroeconomic conditions on financial statement models: the impact 
of competitive factors on prices and costs, the effects of inflation and deflation, tech-
nological developments, and long-term forecasting considerations.
Most of the examples and exhibits used throughout the reading can be downloaded 
as a Microsoft Excel workbook . Each worksheet in the workbook is labeled with the 
corresponding example or exhibit number in the text.`,
      overview: `■ A financial statement model is the starting point for most valu-
ation models, and valuation estimates can be made based on a 
variety of metrics, including free cash flow, EPS, EBITDA, and EBIT.
 ■ Some balance sheet line items, such as retained earnings, flow directly 
from the income statement, whereas accounts receivable, accounts 
payable, and inventory are very closely linked to income statement 
projections.
 ■ Working capital accounts are modeled by projecting working capital 
ratios (e.g., days of inventory, days sales outstanding, days payable out -
standing) which are combined with the sales and cost of sales forecast 
to produce projected working capital accounts on the balance sheet.
 ■ Five key behavioral biases that influence analyst forecasts are over -
confidence, illusion of control, conservatism, representativeness, and 
confirmation bias.
 ■ Illusion of control, a bias linked to overconfidence, is a tendency to 
overestimate the ability to control what cannot be controlled and to 
take ultimately fruitless actions in pursuit of control.
 ■ A common manifestation of confirmation bias among investment 
analysts is to structure the research process in pursuit of only positive 
news or certain criteria, or with a narrow scope.
 ■ Competitive factors affect a company’s ability to negotiate lower input 
prices with suppliers and to raise prices for products and services. 
Porter’s five forces framework can be used as a basis for identifying 
such factors.
 ■ Porter’s five forces are Threat of substitutes, Rivalry, Bargaining power 
of suppliers, Bargaining power of buyers, and Threat of new entrants.
 ■ Return on invested capital, ROIC, defined as net operating profit less 
adjusted taxes divided by the difference between operating assets and 
operating liabilities, is an after-tax measure of profitability. High and 
persistent levels of ROIC are often associated with having a competi-
tive advantage.
 ■ Inflation and deflation can significantly affe`,
      body: `LEARNING MODULE OVERVIEW
 ■ A financial statement model is the starting point for most valu-
ation models, and valuation estimates can be made based on a 
variety of metrics, including free cash flow, EPS, EBITDA, and EBIT.
 ■ Some balance sheet line items, such as retained earnings, flow directly 
from the income statement, whereas accounts receivable, accounts 
payable, and inventory are very closely linked to income statement 
projections.
 ■ Working capital accounts are modeled by projecting working capital 
ratios (e.g., days of inventory, days sales outstanding, days payable out -
standing) which are combined with the sales and cost of sales forecast 
to produce projected working capital accounts on the balance sheet.
 ■ Five key behavioral biases that influence analyst forecasts are over -
confidence, illusion of control, conservatism, representativeness, and 
confirmation bias.
 ■ Illusion of control, a bias linked to overconfidence, is a tendency to 
overestimate the ability to control what cannot be controlled and to 
take ultimately fruitless actions in pursuit of control.
 ■ A common manifestation of confirmation bias among investment 
analysts is to structure the research process in pursuit of only positive 
news or certain criteria, or with a narrow scope.
 ■ Competitive factors affect a company’s ability to negotiate lower input 
prices with suppliers and to raise prices for products and services. 
Porter’s five forces framework can be used as a basis for identifying 
such factors.
 ■ Porter’s five forces are Threat of substitutes, Rivalry, Bargaining power 
of suppliers, Bargaining power of buyers, and Threat of new entrants.
 ■ Return on invested capital, ROIC, defined as net operating profit less 
adjusted taxes divided by the difference between operating assets and 
operating liabilities, is an after-tax measure of profitability. High and 
persistent levels of ROIC are often associated with having a competi-
tive advantage.
 ■ Inflation and deflation can significantly affect the accuracy of forecasts 
for a company’s future revenue, profit, and cash flow.
1
Building a Financial Statement Model 455
 ■ Forecasting revenue for a company faced with inflation in input costs 
requires an understanding of the price elasticity of the products, the 
different rates of cost inflation in the countries where the company is 
active, and the likely inflation in costs relevant to a company’s individ-
ual product categories.
 ■ Faced with rising input prices, a company might decide to preserve its 
margins by passing on the costs to its customers, or it might decide to 
accept some margin reduction to increase its market share.
 ■ The choice of the forecast time horizon can be influenced by certain 
factors, including the investment strategy for which the security is 
being considered, the cyclicality of the industry, company-specific 
factors, and the analyst’s employer’s preferences.
 ■ Normalized earnings are the expected level of mid-cycle earnings for 
a company in the absence of any unusual or temporary factors that 
affect profitability.
 ■ One of the greatest challenges facing the analyst is anticipating 
inflection points, such as from economic disruption, regulation, and 
technology, when the future will look significantly different from the 
recent past.
BUILDING A FINANCIAL STATEMENT MODEL
demonstrate the development of a sales-based pro forma company 
model
In this module, we apply the principles covered in earlier modules in Financial 
Statement Analysis and Corporate Issuers in a demonstration of building a financial 
statement model. The subject company is the Rémy Cointreau Group (Rémy), a French 
company that primarily sells spirits. After providing a brief overview of the company, 
we will focus primarily on the mechanics of constructing pro forma income state-
ments, statements of cash flows, and balance sheets. Data sources for this example 
include the company’s fiscal year ended 31 March 2021 and 2020 annual reports, the 
company’s interim reports, and corresponding investor presentations for additional 
information on the underlying results of the respective divisions. While forecasts are 
described in some detail here, later modules in company analysis in the Equity topic 
area will discuss forecasting in much greater detail.
Company Overview
Rémy, whose reporting year ends 31 March, operates and reports three business 
segments:
1. Cognac. This division, composed primarily of Rémy Martin brand cognac, 
represented approximately 73 percent of FY2021 (year-end 31 March 2021) 
revenue and 94 percent of total current operating profit. Current operating 
profit is a non-IFRS measure reported by Rémy equal to IFRS operating 
profit excluding items related to discontinued brands or items deemed infre-
quent or immaterial, such as impairment or litigation provisions.
2
Learning Module 12 Introduction to Financial Statement Modeling456
2. Liqueurs & Spirits. A diverse portfolio of spirits brands, the main brands in 
this segment are Cointreau, Metaxa, St-Rémy, Mount Gay, Bruichladdich, 
and The Botanist. The segment represented approximately 25 percent of 
FY2021 revenue and 14 percent of current operating profits.
3. Partner Brands. This segment includes other companies’ brands that are 
marketed through Rémy’s distribution network. They represented approx-
imately 3 percent of FY2021 revenue and just under 0 percent of current 
operating profit, earning a slight operating loss in FY2021 of –EUR0.8 mil-
lion. This division’s importance has declined significantly over time as the 
company discontinued distribution (“partner brand”) contracts.
Segment financial information is summarized in Exhibit 1. As shown, the compa-
ny’s largest business segment is also its most profitable: The Cognac segment earned 
a current operating profit margin of approximately 30 percent (= EUR221 million/
EUR735 million) in fiscal year 2021. Exhibits are in the downloadable Microsoft Excel 
workbook in a single worksheet titled “Rémy. ” We strongly recommend following along 
with the Excel workbook and exploring the model construction in detail.
Exhibit 1: Analysis of Rémy’s Turnover and Operating Profit
Revenue (euro millions) FY2019 FY2020 FY2021
Cognac 774 736 735
Liqueurs and spirits 264 262 248
Partner brands 87 28 27
     Total revenues 1,126 1,025 1,010
Current Operating Profit (euro millions)
Cognac 236 200 221
Liqueurs and spirits 39 38 33
Partner brands 5 –2 –1
Holding/Corporate-level costs –15 –20 –17
     Total current operating profit 264 215 236
Current Operating Profit Margins
Cognac 30.4% 27.1% 30.1%
Liqueurs and spirits 14.7% 14.3% 13.3%
Partner brands 5.6% –6.2% –3.0%
Holding/Corporate-level costs (percent of total 
revenue) –1.3% –2.0% –1.7%
     Total current operating margin 23.5% 21.0% 23.4%
Construction of pro forma income statements, as Exhibit 2 illustrates, is composed 
of four forecasting steps: revenue, COGS, other operating expenses, and, finally, 
non-operating items.
Building a Financial Statement Model 457
Exhibit 2: Income Statement Forecast Process
1.  Revenue forecast
i.  COGS forecast
ii.  SG&A forecast
2.  Operating
expense forecast
3.  Pro forma
EBIT forecast
5.  Pro forma
income statement
forecast
4.  Non-operating
expense forecast
Segments
forecast check
i.  Interest expense
forecast
ii.  Income tax
expense forecast
iii.  Shares outstanding
forecast
Revenue Forecast
For each segment, the change in revenue is driven by volume, price, and foreign cur -
rency estimates that are based on historical trends as adjusted for expected deviations 
from trend. Price changes refer not only to price changes for a single product but 
also to changes in mix, which are defined as changes resulting from selling varying 
quantities of higher- and lower-priced products. Changes in revenue attributable to 
volume or price/mix are organic growth and are shown separately from the impact 
of acquisitions and divestitures (scope chang`,
    },
  ],
  equity: [
    {
      number: 1,
      title: `Market Organization and Structure`,
      pages: 40,
      los: `Mastery The candidate should be able to:
explain the main functions of the financial system
describe classifications of assets and markets
describe the major types of securities, currencies, contracts,
commodities, and real assets that trade in organized markets,
including their distinguishing characteristics and major subtypes
describe types of financial intermediaries and services that they
compare positions an investor can take in an asset
calculate and interpret the leverage ratio, the rate of return on a
margin transaction, and the security price at which the investor
would receive a margin call
compare execution, validity, and clearing instructions`,
      intro: `Financial analysts gather and process information to make investment decisions, 
including those related to buying and selling assets. Generally, the decisions involve 
trading securities, currencies, contracts, commodities, and real assets such as real 
estate. Consider several examples:
 ■ Fixed income analysts evaluate issuer credit-worthiness and macroeconomic 
prospects to determine which bonds and notes to buy or sell to preserve 
capital while obtaining a fair rate of return.
 ■ Stock analysts study corporate values to determine which stocks to buy or 
sell to maximize the value of their stock portfolios.
 ■ Corporate treasurers analyze exchange rates, interest rates, and credit con -
ditions to determine which currencies to trade and which notes to buy or 
sell to have funds available in a needed currency.
 ■ Risk managers work for producers or users of commodities to calculate how 
many commodity futures contracts to buy or sell to manage inventory risks.
Financial analysts must understand the characteristics of the markets in which 
their decisions will be executed. This reading, by examining those markets from the 
analyst’s perspective, provides that understanding.
This reading is organized as follows. Section 2 examines the functions of the 
financial system. Section 3 introduces assets that investors, information-motivated 
traders, and risk managers use to advance their financial objectives and presents ways 
practitioners classify these assets into markets. Th`,
      overview: ``,
      body: `INTRODUCTION
Financial analysts gather and process information to make investment decisions, 
including those related to buying and selling assets. Generally, the decisions involve 
trading securities, currencies, contracts, commodities, and real assets such as real 
estate. Consider several examples:
 ■ Fixed income analysts evaluate issuer credit-worthiness and macroeconomic 
prospects to determine which bonds and notes to buy or sell to preserve 
capital while obtaining a fair rate of return.
 ■ Stock analysts study corporate values to determine which stocks to buy or 
sell to maximize the value of their stock portfolios.
 ■ Corporate treasurers analyze exchange rates, interest rates, and credit con -
ditions to determine which currencies to trade and which notes to buy or 
sell to have funds available in a needed currency.
 ■ Risk managers work for producers or users of commodities to calculate how 
many commodity futures contracts to buy or sell to manage inventory risks.
Financial analysts must understand the characteristics of the markets in which 
their decisions will be executed. This reading, by examining those markets from the 
analyst’s perspective, provides that understanding.
This reading is organized as follows. Section 2 examines the functions of the 
financial system. Section 3 introduces assets that investors, information-motivated 
traders, and risk managers use to advance their financial objectives and presents ways 
practitioners classify these assets into markets. These assets include such financial 
instruments as securities, currencies, and some contracts; certain commodities; 
and real assets. Financial analysts must know the distinctive characteristics of these 
trading assets.
Section 4 is an overview of financial intermediaries (entities that facilitate the 
functioning of the financial system). Section 5 discusses the positions that can be 
obtained while trading assets. You will learn about the benefits and risks of long and 
short positions, how these positions can be financed, and how the financing affects 
their risks. Section 6 discusses how market participants order trades and how mar -
kets process those orders. These processes must be understood to achieve trading 
objectives while controlling transaction costs.
Section 7 focuses on describing primary markets. Section 8 describes the struc -
tures of secondary markets in securities. Sections 9 and 10 close the reading with 
discussions of the characteristics of a well-functioning financial system and of how 
regulation helps make financial markets function better. A summary reviews the 
reading’s major ideas and points, and practice problems conclude.
THE FUNCTIONS OF THE FINANCIAL SYSTEM
explain the main functions of the financial system
The financial system includes markets and various financial intermediaries that help 
transfer financial assets, real assets, and financial risks in various forms from one entity 
to another, from one place to another, and from one point in time to another. These 
transfers take place whenever someone exchanges one asset or financial contract for 
another. The assets and contracts that people (people act on behalf of themselves, 
1
2
The Functions of the Financial System 5
companies, charities, governments, etc., so the term “people” has a broad definition 
in this reading) trade include notes, bonds, stocks, exchange-traded funds, currencies, 
forward contracts, futures contracts, option contracts, swap contracts, and certain 
commodities. When the buyer and seller voluntarily arrange their trades, as is usually 
the case, the buyer and the seller both expect to be better off.
People use the financial system for six main purposes:
1. to save money for the future;
2. to borrow money for current use;
3. to raise equity capital;
4. to manage risks;
5. to exchange assets for immediate and future deliveries; and
6. to trade on information.
The main functions of the financial system are to facilitate:
1. the achievement of the purposes for which people use the financial system;
2. the discovery of the rates of return that equate aggregate savings with aggre -
gate borrowings; and
3. the allocation of capital to the best uses.
These functions are extremely important to economic welfare. In a well-functioning 
financial system, transaction costs are low, analysts can value savings and investments, 
and scarce capital resources are used well.
Sections 2.1 through 2.3 expand on these three functions. The six subsections of 
Section 2.1 cover the six main purposes for which people use the financial system and 
how the financial system facilitates the achievement of those purposes. Sections 2.2 and 
2.3 discuss determining rates of return and capital allocation efficiency, respectively.
Helping People Achieve Their Purposes in Using the Financial 
System
People often arrange transactions to achieve more than one purpose when using the 
financial system. For example, an investor who buys the stock of an oil producer may 
do so to move her wealth from the present to the future, to hedge the risk that she 
will have to pay more for energy in the future, and to exploit insightful research that 
she conducted that suggests the company’s stock is undervalued in the marketplace. 
If the investment proves to be successful, she will have saved money for the future, 
managed her energy risk exposure, and obtained a return on her research.
The separate discussions of each of the six main uses of the financial system by 
people will help you better identify the reasons why people trade. Your ability to iden-
tify the various uses of the financial system will help you avoid confusion that often 
leads to poor financial decisions. The financial intermediaries that are mentioned in 
these discussions are explained further in Section 4.
Saving
People often have money that they choose not to spend now and that they want 
available in the future. For example, workers who save for their retirements need 
to move some of their current earnings into the future. When they retire, they will 
use their savings to replace the wages that they will no longer be earning. Similarly, 
companies save money from their sales revenue so that they can pay vendors when 
their bills come due, repay debt, or acquire assets (for example, other companies or 
machinery) in the future.
Learning Module 1 Market Organization and Structure6
To move money from the present to the future, savers buy notes, certificates of 
deposit, bonds, stocks, mutual funds, or real assets such as real estate. These alter -
natives generally provide a better expected rate of return than simply storing money. 
Savers then sell these assets in the future to fund their future expenditures. When 
savers commit money to earn a financial return, they commonly are called investors. 
They invest when they purchase assets, and they divest when they sell them.
Investors require a fair rate of return while their money is invested. The required 
fair rate of return compensates them for the use of their money and for the risk that 
they may lose money if the investment fails or if inflation reduces the real value of 
their investments.
The financial system facilitates savings when institutions create investment vehicles, 
such as bank deposits, notes, stocks, and mutual funds, that investors can acquire and 
sell without paying substantial transaction costs. When these instruments are fairly 
priced and easy to trade, investors will use them to save more.
Borrowing
People, companies, and governments often want to spend money now that they do 
not have. They can obtain money to fund projects that they wish to undertake now by 
borrowing it. Companies can also obtain funds by selling ownership or equity interests 
(covered in Section 2.1.3). Banks and other investors provide those requiring funds 
with money because they expect to be repaid with interest or because they expect to 
be compensated with future disburs`,
    },
    {
      number: 2,
      title: `Security Market Indexes`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe a security market index
calculate and interpret the value, price return, and total return of an
describe the choices and issues in index construction and
compare the different weighting methods used in index construction
calculate and analyze the value and return of an index given its
describe rebalancing and reconstitution of an index
describe uses of security market indexes
describe types of equity indexes
compare types of security market indexes
describe types of fixed-income indexes
describe indexes representing alternative investments`,
      intro: `Investors gather and analyze vast amounts of information about security markets on 
a continual basis. Because this work can be both time consuming and data intensive, 
investors often use a single measure that consolidates this information and reflects 
the performance of an entire security market.
Security market indexes were first introduced as a simple measure to reflect the 
performance of the US stock market. Since then, security market indexes have evolved 
into important multi-purpose tools that help investors track the performance of 
various security markets, estimate risk, and evaluate the performance of investment 
managers. They also form the basis for new investment products.
1`,
      overview: ``,
      body: `INTRODUCTION
Investors gather and analyze vast amounts of information about security markets on 
a continual basis. Because this work can be both time consuming and data intensive, 
investors often use a single measure that consolidates this information and reflects 
the performance of an entire security market.
Security market indexes were first introduced as a simple measure to reflect the 
performance of the US stock market. Since then, security market indexes have evolved 
into important multi-purpose tools that help investors track the performance of 
various security markets, estimate risk, and evaluate the performance of investment 
managers. They also form the basis for new investment products.
1
LEARNING MODULE
2
Learning Module 2 Security Market Indexes82
 
in·dex, noun ( pl.in·dex·es or in·di·ces) Latin indic-, index,  from indicare to 
indicate: an indicator, sign, or measure of something.
ORIGIN OF MARKET INDEXES
Investors had access to regularly published data on individual security prices 
in London as early as 1698, but nearly 200 years passed before they had access 
to a simple indicator to reflect security market information. To give readers a 
sense of how the US stock market in general performed on a given day, publish-
ers Charles H. Dow and Edward D. Jones introduced the Dow Jones Average, 
the world’s first security market index, in 1884. The index, which appeared in 
The Customers’ Afternoon Letter, consisted of the stocks of nine railroads and 
two industrial companies. It eventually became the Dow Jones Transportation 
Average. Convinced that industrial companies, rather than railroads, would 
be “the great speculative market” of the future, Dow and Jones introduced a 
second index in May 1896—the Dow Jones Industrial Average (DJIA). It had 
an initial value of 40.94 and consisted of 12 stocks from major US industries. 
Today, investors can choose from among thousands of indexes to measure and 
monitor different security markets and asset classes.
This reading is organized as follows. Section 2 defines a security market index and 
explains how to calculate the price return and total return of an index for a single 
period and over multiple periods. Section 3 describes how indexes are constructed 
and managed. Section 4 discusses the use of market indexes. Sections 5, 6, and 7 dis -
cuss various types of indexes, and the final section summarizes the reading. Practice 
problems follow the conclusions and summary.
INDEX DEFINITION AND CALCULATIONS OF VALUE 
AND RETURNS
describe a security market index
calculate and interpret the value, price return, and total return of an 
index
A security market index represents a given security market, market segment, or asset 
class. Most indexes are constructed as portfolios of marketable securities.
The value of an index is calculated on a regular basis using either the actual or 
estimated market prices of the individual securities, known as constituent securities, 
within the index. For each security market index, investors may encounter two versions 
of the same index (i.e., an index with identical constituent securities and weights): 
one version based on price return and one version based on total return. As the name 
suggests, a price return index, also known as a price index, reflects only the prices of 
the constituent securities within the index. A total return index, in contrast, reflects 
not only the prices of the constituent securities but also the reinvestment of all income 
received since inception.
2
Index Definition and Calculations of Value and Returns 83
At inception, the values of the price and total return versions of an index are 
equal. As time passes, however, the value of the total return index, which includes 
the reinvestment of all dividends and/or interest received, will exceed the value of the 
price return index by an increasing amount. A look at how the values of each version 
are calculated over multiple periods illustrates why.
The value of a price return index is calculated as:
   V  PRI   =   
 ∑ 
i=1
  
N
   n  i    P  i   
 _ D    (1)
where
 V PRI = the value of the price return index
 n i = the number of units of constituent security i held in the index portfolio
 N  = the number of constituent securities in the index
 Pi = the unit price of constituent security i
 D  = the value of the divisor
The divisor is a number initially chosen at inception. It is frequently chosen so 
that the price index has a convenient initial value, such as 1,000. The index provider 
then adjusts the value of the divisor as necessary to avoid changes in the index value 
that are unrelated to changes in the prices of its constituent securities. For example, 
when changing index constituents, the index provider may adjust the divisor so that 
the value of the index with the new constituents equals the value of the index prior 
to the changes.
Index return calculations, like calculations of investment portfolio returns, may 
measure price return or total return. Price return measures only price appreciation 
or percentage change in price. Total return measures price appreciation plus interest, 
dividends, and other distributions.
Calculation of Single-Period Returns
For a security market index, price return can be calculated in two ways: either the 
percentage change in value of the price return index, or the weighted average of price 
returns of the constituent securities. The price return of an index can be expressed as:
   PR  I   =   
 V  PRI1   −  V  PRI0  
 _  V  PRI0      (2)
where
 PR I = the price return of the index portfolio (as a decimal number, i.e., 12 per -
cent is 0.12)
 V PRI1 = the value of the price return index at the end of the period
 V PRI0 = the value of the price return index at the beginning of the period
Similarly, the price return of each constituent security can be expressed as: 
   PR  i   =   
 P  i1   −  P  i0  
 _  P  i0      (3)
Learning Module 2 Security Market Indexes84
where
 PR i = the price return of constituent security i (as a decimal number)
 P i1 = the price of constituent security i at the end of the period
 P i0 = the price of constituent security i at the beginning of the period
Because the price return of the index equals the weighted average of price returns of 
the individual securities, we can write: 
   PR  I   =  ∑ 
i=1
  
N
   w  i    PR  i    =  ∑ 
i=1
  
N
   w  i      (    
 P  i1   −  P  i0  
 _  P  i0     )      (4)
where:
 PR I = the price return of index portfolio (as a decimal number)
 PR i = the price return of constituent security i (as a decimal number)
 N  = the number of individual securities in the index
 w i = the weight of security i (the fraction of the index portfolio allocated to 
security i)
 P i1 = the price of constituent security i at the end of the period
 P i0 = the price of constituent security i at the beginning of the period
Equation 4 can be rewritten simply as: 
 PRI = w1PR1 + w2PR2 + … + w NPRN   (5)
where
 PR I = the price return of index portfolio (as a decimal number)
 PR i = the price return of constituent security i (as a decimal number)
 w i = the weight of security i (the fraction of the index portfolio allocated to 
security i)
 N  = the number of securities in the index
Total return measures price appreciation plus interest, dividends, and other dis -
tributions. Thus, the total return of an index is the price appreciation, or change in 
the value of the price return index, plus income (dividends and/or interest) over the 
period, expressed as a percentage of the beginning value of the price return index. 
The total return of an index can be expressed as:
   TR  I   =   
 V  PRI1   −  V  PRI0   + In  c  I  
  _______________  V  PRI0      (6)
where
 TR I = the total return of the index portfolio (as a decimal number)
 V PRI1= the value of the price return index at the end of the period
 V PRI0 = the value of the price return index at the beginning of the period
 Inc I = the total in`,
    },
    {
      number: 3,
      title: `Market Efficiency`,
      pages: 36,
      los: `Mastery The candidate should be able to:
describe market efficiency and related concepts, including their
importance to investment practitioners
contrast market value and intrinsic value
explain factors that affect a market’s efficiency
contrast weak-form, semi-strong-form, and strong-form market
explain the implications of each form of market efficiency for
fundamental analysis, technical analysis, and the choice between
active and passive portfolio management
describe market anomalies
describe behavioral finance and its potential relevance to
understanding market anomalies`,
      intro: `Market efficiency concerns the extent to which market prices incorporate available 
information. If market prices do not fully incorporate information, then opportunities 
may exist to make a profit from the gathering and processing of information. The 
subject of market efficiency is, therefore, of great interest to investment managers, 
as illustrated in Example 1.
1`,
      overview: ``,
      body: `INTRODUCTION
Market efficiency concerns the extent to which market prices incorporate available 
information. If market prices do not fully incorporate information, then opportunities 
may exist to make a profit from the gathering and processing of information. The 
subject of market efficiency is, therefore, of great interest to investment managers, 
as illustrated in Example 1.
1
LEARNING MODULE
3
Learning Module 3 Market Efficiency124
EXAMPLE 1
Market Efficiency and Active Manager Selection
1. The chief investment officer (CIO) of a major university endowment fund 
has listed eight steps in the active manager selection process that can be 
applied both to traditional investments (e.g., common equity and fixed-in-
come securities) and to alternative investments (e.g., private equity, hedge 
funds, and real assets). The first step specified is the evaluation of market 
opportunity:
What is the opportunity and why is it there? To answer this question, we 
start by studying capital markets and the types of managers operating 
within those markets. We identify market inefficiencies and try to under -
stand their causes, such as regulatory structures or behavioral biases. We 
can rule out many broad groups of managers and strategies by simply 
determining that the degree of market inefficiency necessary to support a 
strategy is implausible. Importantly, we consider the past history of active 
returns meaningless unless we understand why markets will allow those 
active returns to continue into the future. 1
The CIO’s description underscores the importance of not assuming that past 
active returns that might be found in a historical dataset will repeat them-
selves in the future. Active returns refer to returns earned by strategies that 
do not assume that all information is fully reflected in market prices.
Governments and market regulators also care about the extent to which market 
prices incorporate information. Efficient markets imply informative prices—prices that 
accurately reflect available information about fundamental values. In market-based 
economies, market prices help determine which companies (and which projects) obtain 
capital. If these prices do not efficiently incorporate information about a company’s 
prospects, then it is possible that funds will be misdirected. By contrast, prices that 
are informative help direct scarce resources and funds available for investment to 
their highest-valued uses. 2 Informative prices thus promote economic growth. The 
efficiency of a country’s capital markets (in which businesses raise financing) is an 
important characteristic of a well-functioning financial system.
The remainder of this reading is organized as follows. Section 2 provides specifics 
on how the efficiency of an asset market is described and discusses the factors affecting 
(i.e., contributing to and impeding) market efficiency. Section 3 presents an influential 
three-way classification of the efficiency of security markets and discusses its implica -
tions for fundamental analysis, technical analysis, and portfolio management. Section 
4 presents several market anomalies (apparent market inefficiencies that have received 
enough attention to be individually identified and named) and describes how these 
anomalies relate to investment strategies. Section 5 introduces behavioral finance and 
how that field of study relates to market efficiency. A summary concludes the reading.
1 The CIO is Christopher J. Brightman, CFA, of the University of Virginia Investment Management 
Company, as reported in Yau, Schneeweis, Robinson, and Weiss (2007 , pp. 481–482).
2 This concept is known as allocative efficiency.
The Concept of Market Efficiency 125
THE CONCEPT OF MARKET EFFICIENCY
describe market efficiency and related concepts, including their 
importance to investment practitioners
contrast market value and intrinsic value
The Description of Efficient Markets
An informationally efficient market (an efficient market) is a market in which asset 
prices reflect new information quickly and rationally. An efficient market is thus a 
market in which asset prices reflect all past and present information. 3
In this section we expand on this definition by clarifying the time frame required 
for an asset’s price to incorporate information as well as describing the elements of 
information releases assumed under market efficiency. We discuss the difference 
between market value and intrinsic value and illustrate how inefficiencies or discrep -
ancies between these values can provide profitable opportunities for active investment. 
As financial markets are generally not considered being either completely efficient or 
inefficient, but rather falling within a range between the two extremes, we describe a 
number of factors that contribute to and impede the degree of efficiency of a financial 
market. Finally, we conclude our overview of market efficiency by illustrating how the 
costs incurred by traders in identifying and exploiting possible market inefficiencies 
affect how we interpret market efficiency.
Investment managers and analysts, as noted, are interested in market efficiency 
because the extent to which a market is efficient affects how many profitable trading 
opportunities (market inefficiencies) exist. Consistent, superior, risk-adjusted returns 
(net of all expenses) are not achievable in an efficient market. 4 In an efficient market, 
a passive investment strategy (i.e., buying and holding a broad market portfolio) that 
does not seek superior risk-adjusted returns can be preferred to an active investment 
strategy because of lower costs (for example, transaction and information-seeking 
costs). By contrast, in a very inefficient market, opportunities may exist for an active 
investment strategy to achieve superior risk-adjusted returns (net of all expenses in 
executing the strategy) as compared with a passive investment strategy. In inefficient 
markets, an active investment strategy may outperform a passive investment strategy 
on a risk-adjusted basis. Understanding the characteristics of an efficient market and 
being able to evaluate the efficiency of a particular market are important topics for 
investment analysts and portfolio managers.
An efficient market is a market in which asset prices reflect information quickly. But 
what is the time frame of “quickly”? Trades are the mechanism by which information 
can be incorporated into asset transaction prices. The time needed to execute trades 
to exploit an inefficiency may provide a baseline for judging speed of adjustment. 5 
3 This definition is convenient for making several instructional points. The definition that most simply 
explains the sense of the word efficient in this context can be found in Fama (1976): “ An efficient capital 
market is a market that is efficient in processing information” (p. 134).
4 The technical term for superior in this context is positive abnormal in the sense of higher than expected 
given the asset’s risk (as measured, according to capital market theory, by the asset’s contribution to the 
risk of a well-diversified portfolio).
5 Although the original theory of market efficiency does not quantify this speed, the basic idea is that 
it is sufficiently swift to make it impossible to consistently earn abnormal profits. Chordia, Roll, and 
Subrahmanyam (2005) suggest that the adjustment to information on the New York Stock Exchange (NYSE) 
is between 5 and 60 minutes.
2
Learning Module 3 Market Efficiency126
The time frame for an asset’s price to incorporate information must be at least as long 
as the shortest time a trader needs to execute a transaction in the asset. In certain 
markets, such as foreign exchange and developed equity markets, market efficiency 
relative to certain types of information has been studied using time frames as short as 
one minute or less. If the time frame of price adjustment allows many traders to earn 
profits with `,
    },
    {
      number: 4,
      title: `Overview of Equity Securities`,
      pages: 38,
      los: ``,
      intro: ``,
      overview: ``,
      body: `Overview of Equity Securities
by Ryan C. Fuhrmann, CFA, and Asjeet S. Lamba, PhD, CFA.
Ryan C. Fuhrmann, CFA, is at Fuhrmann Capital LLC (USA). Asjeet S. Lamba, PhD, CFA, 
is at the University of Melbourne (Australia).
LEARNING OUTCOMES
Mastery The candidate should be able to:
describe characteristics of types of equity securities
describe differences in voting rights and other ownership 
characteristics among different equity classes
compare and contrast public and private equity securities
describe methods for investing in non-domestic equity securities
compare the risk and return characteristics of different types of 
equity securities
explain the role of equity securities in the financing of a company’s 
assets
contrast the market value and book value of equity securities
compare a company’s cost of equity, its (accounting) return on 
equity, and investors’ required rates of return
IMPORTANCE OF EQUITY SECURITIES
Equity securities represent ownership claims on a company’s net assets. As an asset 
class, equity plays a fundamental role in investment analysis and portfolio manage -
ment because it represents a significant portion of many individual and institutional 
investment portfolios.
The study of equity securities is important for many reasons. First, the decision 
on how much of a client’s portfolio to allocate to equities affects the risk and return 
characteristics of the entire portfolio. Second, different types of equity securities have 
different ownership claims on a company’s net assets, which affect their risk and return 
characteristics in different ways. Finally, variations in the features of equity securities 
are reflected in their market prices, so it is important to understand the valuation 
implications of these features.
1
LEARNING MODULE
4
Learning Module 4 Overview of Equity Securities160
This reading provides an overview of equity securities and their different features 
and establishes the background required to analyze and value equity securities in a 
global context. It addresses the following questions:
 ■ What distinguishes common shares from preference shares, and what pur -
poses do these securities serve in financing a company’s operations?
 ■ What are convertible preference shares, and why are they often used to raise 
equity for unseasoned or highly risky companies?
 ■ What are private equity securities, and how do they differ from public 
equity securities?
 ■ What are depository receipts and their various types, and what is the ratio -
nale for investing in them?
 ■ What are the risk factors involved in investing in equity securities?
 ■ How do equity securities create company value?
 ■ What is the relationship between a company’s cost of equity, its return on 
equity, and investors’ required rate of return?
The remainder of this reading is organized as follows. Section 2 provides an over -
view of global equity markets and their historical performance. Section 3 examines 
the different types and characteristics of equity securities, and Section 4 outlines 
the differences between public and private equity securities. Section 5 provides an 
overview of the various types of equity securities listed and traded in global markets. 
Section 6 discusses the risk and return characteristics of equity securities. Section 7 
examines the role of equity securities in creating company value and the relationship 
between a company’s cost of equity, its return on equity, and investors’ required rate 
of return. The final section summarizes the reading.
Equity Securities in Global Financial Markets
This section highlights the relative importance and performance of equity securities 
as an asset class. We examine the total market capitalization and trading volume of 
global equity markets and the prevalence of equity ownership across various geo -
graphic regions. We also examine historical returns on equities and compare them 
to the returns on government bonds and bills.
Exhibit 1  summarizes the contributions of selected countries and geographic 
regions to global gross domestic product (GDP) and global equity market capitaliza -
tion. Analysts may examine the relationship between equity market capitalization and 
GDP as a rough indicator of whether the global equity market (or a specific country’s 
or region’s equity market) is under, over, or fairly valued, particularly compared to 
its long-run average. 
Exhibit 1 illustrates the significant value that investors attach to publicly traded 
equities relative to the sum of goods and services produced globally every year. It 
shows the continued significance, and the potential over-representation, of US equity 
markets relative to their contribution to global GDP . That is, while US equity markets 
contribute around 51 percent to the total capitalization of global equity markets, their 
contribution to the global GDP is only around 25 percent. Following the stock market 
turmoil in 2008, however, the market capitalization to GDP ratio of the United States 
fell to 59 percent, which is significantly lower than its long-run average of 79 percent.
As equity markets outside the United States develop and become increasingly 
global, their total capitalization levels are expected to grow closer to their respective 
world GDP contributions. Therefore, it is important to understand and analyze equity 
securities from a global perspective.
Importance of Equity Securities 161
Exhibit 1: Country and Regional Contributions to Global GDP and Equity Market Capitalization (2017) 
Contribution to GDP 2017 Relative Sizes of World Stock Market 2017
USA
25%
Japan
6%
UK
4%
France
3%
Germany
5%China
15%
Canada
2%
Switzerland
1%
Australia
2%
Smaller Yearbook
9%
Other
28%
USA
51%
Japan
9%
UK
6%
France
3%
Germany
3%
China
3%
Canada
3%
Switzerland
3%
Australia
2%
Smaller Yearbook
7%
Other
9%
Source: The WorldBank Databank 2017, and Dimson, Marsh, and Staunton (2018) .
Exhibit 2  lists the top 10 equity markets at the end of 2017 based on total market 
capitalization (in billions of US dollars), trading volume, and the number of listed 
companies.1 Note that the rankings differ based on the criteria used. For example, 
the top three markets based on total market capitalization are the NYSE Euronext 
(US), NASDAQ OMX, and the Japan Exchange Group; however, the top three markets 
based on total US dollar trading volume are the Nasdaq OMX, NYSE Euronext (US), 
and the Shenzhen Stock Exchange, respectively. 2
Exhibit 2: Equity Markets Ranked by Total Market Capitalization at the End 
of 2017 (Billions of US Dollars)
Rank Name of Market
Total US 
Dollar Market 
Capitalization
Total US 
Dollar 
Trading 
Volume
Number 
of Listed 
Companies
1 NYSE Euronext (US) $22,081.4 $16,140.1 2,286
2 NASDAQ OMX $10,039.4 $33,407.1 2,949
3 Japan Exchange Groupa $6,220.0 $6,612.1 3,604
4 Shanghai Stock Exchange $5,084.4 $7,589.3 1,396
5 Euronextb $4,393.0 $1,981.6 1,255
6 Hong Kong Exchanges $4,350.5 $1,958.8 2,118
7 Shenzhen Stock Exchanges $3,617.9 $9,219.7 2,089
1 The market capitalization of an individual stock is computed as the share price multiplied by the number 
of shares outstanding. The total market capitalization of an equity market is the sum of the market capital-
izations of each individual stock listed on that market. Similarly, the total trading volume of an equity market 
is computed by value weighting the total trading volume of each individual stock listed on that market. Total 
dollar trading volume is computed as the average share price multiplied by the number of shares traded.
2 NASDAQ is the acronym for the National Association of Securities Dealers Automated Quotations.
Learning Module 4 Overview of Equity Securities162
Rank Name of Market
Total US 
Dollar Market 
Capitalization
Total US 
Dollar 
Trading 
Volume
Number 
of Listed 
Companies
8 National Stock Exchange of 
India
$2,351.5 $1,013.3 1,897
9 BSE Limitedc $2,331.6 $183.0 5,616
10 Deutsche Börse $2,262.2 $1,497.9 499
Notes:
a Japan Exch`,
    },
    {
      number: 5,
      title: `Company Analysis: Past and Present`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe the elements that should be covered in a thorough company
determine a company’s business model
evaluate a company’s revenue and revenue drivers, including pricing
evaluate a company’s operating profitability and working capital
evaluate a company’s capital investments and capital structure`,
      intro: `An insightful and well-written company research report helps investors understand 
a company and make better investment decisions about the company’s securities. 
This module is the first of three that will provide a framework to prepare a company 
research report by applying methods covered in previous modules to assess a com -
pany’s business model, financial performance, and financial position.`,
      overview: `■ Company research reports analyze a company’s past and pres -
ent financials, its industry and competitors, and forecast its 
future financial statements. Reports end with a valuation, an invest -
ment recommendation, and investment risks.
 ■ The first step of company analysis requires an understanding of the 
issuer’s business model, for which analysts rely on both issuer and 
third-party information sources.
 ■ An understanding of the issuer’s business model and analysis of histor -
ical financial statements will allow the analyst to identify key drivers of 
revenues, profitability, cash flows, and financial position.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Company research reports analyze a company’s past and pres -
ent financials, its industry and competitors, and forecast its 
future financial statements. Reports end with a valuation, an invest -
ment recommendation, and investment risks.
 ■ The first step of company analysis requires an understanding of the 
issuer’s business model, for which analysts rely on both issuer and 
third-party information sources.
 ■ An understanding of the issuer’s business model and analysis of histor -
ical financial statements will allow the analyst to identify key drivers of 
revenues, profitability, cash flows, and financial position.
1
LEARNING MODULE
5
Learning Module 5 Company Analysis: Past and Present198
 ■ Revenue analysis can be done using a bottom-up or top-down 
approach. A bottom-up approach breaks down revenues into driv -
ers such as sales volumes and prices, by product line or segment. A 
top-down approach expresses revenue as a function of drivers such as 
market share, market size, and GDP growth.
 ■ While a company can change its prices at will, its ability to do so 
successfully (i.e., not causing a loss of volume) and relative to costs is 
driven by the company’s pricing power. Pricing power is primarily a 
function of industry structure and competitive strategy.
 ■ Cost analysis assesses a company’s profitability and working capital 
management. Analysts calculate and interpret several cost and profit -
ability measures, including gross, operating, and net margins.
 ■ While a fixed versus variable cost analysis is useful, the analysis is 
often limited by issuer disclosures and accounting standards that 
emphasize cost reporting by function or nature.
 ■ The degree of operating leverage measures the sensitivity of operating 
profit to changes in sales. Operating leverage is primarily driven by the 
fixed and variable cost composition of the issuer’s operating expenses.
 ■ The degree of financial leverage measures the sensitivity of net income 
to changes in operating income. Financial leverage is primarily driven 
by the issuer’s capital structure.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Identify two elements that are common to all company research reports and 
two elements that are common to initial research reports.
Solution:
Common to all research reports:
 ■ Analyst’s investment recommendation and target buy or sell prices
 ■ Risks such as evaluation of material downside and upside risks
Common to initial research reports:
 ■ Discussion of issuer’s business model and strategy, and explanatory 
charts and figures that disaggregate revenues and profits by product or 
geography
 ■ Detailed financial analysis and models
 ■ Industry overview and competitive positioning such as industry size, 
growth rate, market share trends, and industry profitability. Evaluation 
of the company’s competitive position and strategy in each product 
line or segment is also common.
Introduction 199
2. Identify three information sources that analysts commonly use to determine 
and analyze a company’s business model.
Solution:
 ■ Regulatory filings if the issuer is public, especially the annual and 
quarterly reports
 ■ Investor events and presentations by the issuer
 ■ Visiting the company’s properties and/or websites
3. Last year, a distributor of dental care products earned EUR800 million in 
revenues. Management estimated that its market share was 10%. Based on 
management’s estimate, the market size for distribution of dental care prod-
ucts in this geography last year was closest to (in millions of EUR):
A. 80
B. 7,200
C. 8,000
Solution:
C is correct.
  Market share =    Revenue _ Market Size   
Which can be rearranged to:
  Market size =    Revenue _ Market Share   
  Market size =    EUR 800 million  _____________ 10%   
  Market size =  EUR 8, 000 million  ( 8 billion)  
4. A beverage manufacturer recently introduced a new line of healthy tea-
based drinks. The average selling price was USD20 a case last year and the 
company sold 2 million cases. This year, an analyst forecasts sales of 3 mil-
lion cases and an increase in the average selling price—from a reduction in 
discounts and promotions—of 5%. The analyst’s forecast for net sales growth 
this year over the prior year is closest to:
A. 50%
B. 55%
C. 58%
Solution:
C is correct.
 Net sales = average selling price × cases sold
 Net sales last year = USD20 × 2 million = USD40 million
 Net sales forecast this year = (USD20 × 1.05) × 3 million = USD63 million
 Forecasted net sales growth rate = 63/40 − 1 = 0.575 or 58%
5. Impression Ltd. is a fictional company that designs, manufactures, and sells 
skin care and beauty products. Identify whether each expense line below 
Learning Module 5 Company Analysis: Past and Present200
from Impression Ltd. ’s last annual income statement is most likely a fixed or 
variable cost.
 
I. Amortization of acquired intangible 
assets
Fixed Variable
II. Interest expense Fixed Variable
III. Costs of goods sold Fixed Variable
IV. General and administrative expenses Fixed Variable
V. Sales commissions Fixed Variable
 
Solution:
I. Fixed. Amortization expense generally does not change with levels of sales 
volume, as definite-lived intangible assets are amortized on a straight-line 
basis over the assets’ useful lives.
II. Fixed. Interest expense is a function of the quantity of debt and its inter-
est rate, not sales volume.
III. Variable. Costs of goods sold are incurred when sales are made.
IV. Fixed. General and administrative expenses are usually not related to 
sales volume each year.
V. Variable. Sales commissions, a form of performance-based compensation 
for salespeople, are a function of sales and are therefore variable.
6. Based on the data below, the degree of operating leverage for Company XYZ 
for the year ended 31 December 20X1 is closest to:
 
Company XYZ: Statement of Income for the Y ear Ended (in millions of EUR)
31 December  
20X1
31 December  
20X0
Revenue 9,707 9,256
Costs of goods sold 4,850 4,637
Selling, general, and administrative expenses 993 1,090
Research and development expenses 1,700 1,554
Other operating expenses 491 448
Interest expense 309 325
Other (income) expense 24 (71)
Income before income taxes 1,340 1,273
Provision for income taxes 295 255
Net income 1,045 1,018
 
A. 0.51
B. 1.08
C. 1.96
C is correct.
 20X1 Operating Income = 9,707 – 4,850 – 993 – 1,700 – 491 = 1,673
 20X0 Operating Income = 9,256 – 4,637 – 1,090 – 1,554 – 448 = 1,527
 DOL = % Δ Operating Income/% Δ Sales
 DOL = (1,673/1,527 – 1)/(9,707/9,256 − 1)
Company Research Reports 201
 DOL = 1.96
A is incorrect, as it inverts the equation; it is the ratio of the change in sales 
to the change in operating income.
B is incorrect; it is the ratio of the percentage change in pre-tax income, 
rather than operating income, to the percentage change in sales.
7. If a company reported trailing 12 months’ operating cash flow of USD150 
million, current assets excluding cash of USD40 million, and current liabili-
ties of USD60 million, the company most likely:
A. was inefficient in managing its financing.
B. used trade credit to manage working capital.
C. over-extended itself and is at risk of bankruptcy.
Solution:
B is correct. Negative net working capital typically indicates that the compa-
ny uses suppliers’ trade credit to lengthen days payable, while also efficiently 
managing inventory days and days sales outstanding.
A is incorrect. Negative working capital is a source rather than a use of 
financing and gives an issuer more financial flexibility, as capital is not tied 
up in working capital.
C is incorrect. There is not enough information here to determine bankrupt-
cy risk, but positive operating cash flows and negative net working capital 
are not bankruptcy risk indicators.
8. A company’s management may choose not to use financial leverage be`,
    },
    {
      number: 6,
      title: `Industry and Competitive Analysis`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe the purposes of, and steps involved in, industry and
describe industry classification methods and compare methods by
which companies can be grouped
determine an industry’s size, growth characteristics, profitability, and
analyze an industry’s structure and external influences using Porter’s
Five Forces and PESTLE frameworks
evaluate the competitive strategy and position of a company`,
      intro: `It is essential for analysts to understand the industry context for a company’s financial 
performance and its evaluation. For example, is a company’s revenue growth driven 
by a macroeconomic or industry-wide factor (such as an economic expansion) or a 
company-specific factor (such as increasing market share)? The answer has important 
implications for forecasting and valuation.
In this learning module, we discuss how an industry is defined and address the 
challenges associated with grouping companies that operate in multiple industries. 
Next, we introduce methods to survey an industry in terms of size, profitability, and 
market share trends. Further analysis includes frameworks to interpret a competitive 
environment using Porter’s Five Forces and external trends using PESTLE analysis. 
Finally, we combine these approaches to understand a company’s competitive strategy 
and its position relative to its industry peers.`,
      overview: `■ Analysts use industry and competitive analysis to understand 
an industry’s structural factors, relative competitive strengths 
and weaknesses, and their contribution to a company’s economic 
profits.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Analysts use industry and competitive analysis to understand 
an industry’s structural factors, relative competitive strengths 
and weaknesses, and their contribution to a company’s economic 
profits.
1
LEARNING MODULE
6
Learning Module 6 Industry and Competitive Analysis246
 ■ An analyst’s first step in an industry and competitive analysis is to 
define the boundaries of the industry in question and its constituents. 
Industries are commonly defined as companies that sell similar prod -
ucts or services. However, this definition can be challenging to apply 
in practice, as companies can sell diverse products or services across 
many industries and product similarity is subjective.
 ■ To define an industry, analysts can use third-party classification 
systems such as GICS but need to be aware of the methodologies and 
limitations of these systems.
 ■ After defining the industry, the analyst surveys the industry by esti -
mating its total annual sales, historical growth rate, and profitability 
metrics and then determining market shares and trends of key players.
 ■ Industry metrics can be compared against broader economic trends 
during recessions or expansions to determine the industry’s level of 
maturity, sensitivity to business cycles, and competitive rivalry.
 ■ Analysts use Porter’s Five Forces to understand an industry’s structure, 
as defined by the level of competitive rivalry, through an assessment of 
the threat of new entrants, the threat of substitutes, customer bargain -
ing power, and the bargaining power of suppliers.
 ■ To supplement this research, analysts use PESTLE analysis to under -
stand the external influences on and potential changes to an industry’s 
growth rate and market share dynamics.
 ■ To evaluate a company’s competitive strategy, an analyst should deter-
mine whether the strategy creates a defense against industry forces 
and is aligned with the external forces acting on the industry, and 
whether the company has the resources and capabilities necessary to 
execute it.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. When assigning a company to an industry, which of the following is a limita-
tion of using third-party industry classification schemes?
A. Currency differences
B. Single-product companies
C. Strictly hierarchical taxonomies
Solution:
C is correct. Commercial classification schemes such as GICS, IBC, and 
TRBC are examples of strictly hierarchical taxonomies that classify a com-
pany to a single group, regardless of whether the company sells multiple 
types of products or services.
2. A factor that determines sensitivity to the business cycle is most likely:
A. customer migration to substitute products.
B. interest rate exposure of the business model.
Introduction 247
C. growth rates in line with broader economic activity.
Solution:
B is correct. Factors that determine sensitivity to the business cycle include 
the degree to which sales are discretionary or necessary for consumers, 
pricing power, the interest rate exposure of the business model, and whether 
the product is a durable or capital good versus a recurring purchase such as 
consumables and subscription services.
A and C are incorrect, as they reflect features of a mature industry but are 
not necessarily more cyclical.
3. A common measure of industry concentration is:
A. Porter’s Five Forces.
B. the PESTLE framework.
C. the Herfindahl-Hirschman Index.
Solution:
C is correct. The Herfindahl-Hirschman Index (HHI) is a common measure 
of industry concentration that is calculated as the sum of the squares of 
competitor market shares. Porter’s Five Forces model evaluates an industry’s 
level of competitive rivalry and profitability. The PESTLE framework is more 
concerned with an industry’s growth rate and market share dynamics.
4. Identify the following statement as true or false. Justify your answer.
Some of the forces included in Porter’s Five Forces framework are the threat 
of new entrants, sensitivity to the business cycle, and the bargaining power 
of customers.
Solution:
False. Porter’s Five Forces model uses the threat of substitutes, the threat of 
new entrants, the bargaining power of customers, and the bargaining power 
of suppliers to determine the rivalry among existing competitors. Sensitivity 
to the business cycle is not one of the forces.
5. The price competition historically demonstrated by automakers and aircraft 
manufacturers is best described as an example of:
A. the threat of substitutes.
B. the bargaining power of suppliers.
C. the rivalry among existing competitors.
Solution:
C is correct. Despite relatively low risks from the other Five Forces, au-
tomakers and aircraft manufacturers compete fiercely on price, offering 
promotions and generous financing and warranty terms in an attempt to 
capture every sale.
6. Standardization of a product will ____________ (increase/decrease/have no 
effect on) the bargaining power of customers.
Solution:
Standardization of a product will increase the bargaining power of custom-
ers. For example, oil refiners pay for crude oil based on its grade, not on its 
specific oil producer; crude oil within a grade is interchangeable.
Learning Module 6 Industry and Competitive Analysis248
7. Impression Ltd. is a fictional company that designs, manufactures, and 
sells skin care and beauty products. A PESTLE analysis for Impression Ltd. 
would most likely identify which of the following?
A. A customer of Impression Ltd., a large e-commerce retailer, is acquir -
ing a private-label manufacturer of skin care products.
B. Increased discussion by legislatures around instituting an excise tax on 
disposable plastic packaging as part of a package of carbon taxes
C. An online, direct sales competitor has launched a suite of photo filters 
that integrate with leading social media apps based on its beauty 
products.
Solution:
B is correct. PESTLE analysis is concerned with identifying and evaluat-
ing external forces on an industry, which include political forces such as a 
packaging tax. A and C are incorrect, as they are competitor moves within 
the beauty industry.
8. As a venture capital investor, you are on the board of Ridge Inc., a fictional 
company that is entering the auto industry, which is characterized by high 
capital intensity, minimal switching costs for customers because regulations 
require standardization of many features, and price consciousness of cus-
tomers except among a relatively small percentage of affluent consumers.
Based on these observations, recommend and justify a competitive strategy 
to the rest of Ridge Inc. ’s board.
Solution:
A cost leadership strategy is one competitive strategy that might be suc-
cessful for Ridge Inc. Since most customers are price conscious and face 
minimal switching costs between automakers or models, a low selling price 
can be an effective way to gain market share. Combined with high capital in-
tensity, such a strategy might enable Ridge to operate at an economic profit 
if it produces and sells enough volume and maintains fixed-cost discipline 
to keep unit costs low. Other competitive strategies that might be successful 
for Ridge include a differentiation strategy aimed at luxury or performance 
customers.
USES OF INDUSTRY ANALYSIS
describe the purposes of, and steps involved in, industry and 
competitive analysis
The next step in our company and industry analysis framework (Exhibit 1), introduced 
in the last module, is industry and competitive analysis, which involves the study of 
the drivers of an industry’s size, profitability, and market shares and the evaluation 
of a company’s competitive positioning in its industry.
2
Uses of Industry Analysis 249
Exhibit 1: Company and Industry Analysis Framework
3) Company Analysis: Forecasting
• Determine forecast objects and approaches
• Forecast revenue
• Forecas`,
    },
    {
      number: 7,
      title: `Company Analysis: Forecasting`,
      pages: 40,
      los: `Mastery The candidate should be able to:
explain principles and approaches to forecasting a company’s
financial results and position
explain approaches to forecasting a company’s revenues
explain approaches to forecasting a company’s operating expenses
explain approaches to forecasting a company’s capital investments
and capital structure
describe the use of scenario analysis in forecasting`,
      intro: `Forecasts of companies’ financial statements are used by analysts in valuation and 
to make investment recommendations. Developing the forecasts or projections is 
an important aspect of an analyst’s job and is the focus of this module. In the first 
lesson, what to forecast, approaches to forecasting, and selecting a forecast horizon 
are discussed. The next three lessons focus on particular forecasts: revenues, operat -
ing expenses and working capital, and capital investments and capital structure. The 
final lesson discusses the use of scenario analysis in considering multiple outcomes.`,
      overview: `■ Four common types of forecast objects are drivers of financial 
statement lines, individual financial statement lines, summary 
measures, and ad hoc objects. An analyst’s choice of forecast object 
depends on available information, efficiency, accuracy, explanatory 
value, and verifiability.
 ■ Forecast approaches generally are based on historical results, historical 
base rates and convergence, management guidance, or analyst discre -
tion. An analyst’s choice of forecast approach depends on the compa -
ny’s industry structure, sensitivity to the business cycle, and business 
model, as well as the reliability and availability of information.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Four common types of forecast objects are drivers of financial 
statement lines, individual financial statement lines, summary 
measures, and ad hoc objects. An analyst’s choice of forecast object 
depends on available information, efficiency, accuracy, explanatory 
value, and verifiability.
 ■ Forecast approaches generally are based on historical results, historical 
base rates and convergence, management guidance, or analyst discre -
tion. An analyst’s choice of forecast approach depends on the compa -
ny’s industry structure, sensitivity to the business cycle, and business 
model, as well as the reliability and availability of information.
1
LEARNING MODULE
7
Learning Module 7 Company Analysis: Forecasting286
 ■ The choice of the forecast time horizon is determined by the invest -
ment strategy for which the security is being considered, the cyclicality 
of the industry, company-specific factors, and the analyst’s employer’s 
preferences.
 ■ Revenue forecasts may be based on top-down or bottom-up forecast 
objects, using any of the four forecast approaches. Using different 
forecast objects and approaches to project revenue can be useful in 
uncovering implicit assumptions or errors in any single approach.
 ■ Top-down revenue drivers include growth relative to GDP growth, 
and market growth and market share. Bottom-up revenue drivers 
include volumes and average selling prices; revenue by product line, 
geographic area, or reporting segment; capacity-based measures; and 
return-based measures.
 ■ Analysts often use aggregated forecast objects or summary measures 
to forecast operating expenses because of a lack of disaggregated infor -
mation. However, forecasts for operating expenses should be coherent 
with revenue forecasts. The choice of forecast object can vary depend -
ing on the forecast horizon.
 ■ Working capital forecasts typically use efficiency ratios combined 
with revenue and operating expense forecasts to project accounts 
receivable, inventory, accounts payable, and other current assets and 
liabilities.
 ■ Forecasts for capital expenditures may differentiate between mainte -
nance and growth capital expenditures. Maintenance capital expen -
diture forecasts are often based on depreciation and amortization 
expenses. Growth capital expenditure forecasts are tied to a company’s 
strategy, expansion plans, and revenue growth.
 ■ Forecasts about a company’s capital structure consider historical lever -
age ratios and capital structure, the company’s financial strategy, and 
capital expenditure forecasts.
 ■ Based on a company’s risk factors, an analyst may develop several 
forecast scenarios rather than develop a single forecast. The analyst 
will judge the likelihood of each scenario occurring.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. A benefit of using summary measures as forecast objects is most likely:
A. efficiency.
B. transparency.
C. explanatory value.
Solution:
A is correct. The benefit of using summary measures as a forecast object is 
efficiency, as fewer variables need to be forecast, but a disadvantage is less 
transparency. Forecasting financial statement lines or their drivers has the 
benefit of improved explanatory value.
Introduction 287
2. Which of the following approaches is most appropriate for forecasting annu-
al revenues for a company in a cyclical industry?
A. Historical results
B. Management guidance
C. Analyst’s discretionary forecast
Solution:
C is correct. An analyst’s discretionary forecast is most appropriate, because 
it allows the analyst to consider both the current phase and the expected 
future phase of the business cycle. Historical results are a less appropriate 
forecast approach for companies in cyclical industries, because a future pe -
riod is likely to be at a different point in the business cycle than the current 
or past period, and so results will differ. The use of guidance for companies 
that are highly sensitive to the business cycle is less appropriate, as manage-
ment does not have an informational advantage over investors in forecasting 
macroeconomic variables like GDP or the prices of commodities.
3. An example of a top-down driver for revenue is a company’s:
A. market share.
B. sales growth rate.
C. products’ average selling price.
Solution:
A is correct. Top-down drivers of revenue include the company’s market 
share and the industry’s market growth. The company’s sales growth rate 
and products’ average selling price are bottom-up drivers of revenue.
4. In developing a revenue forecast, non-recurring revenue most likely:
A. has the same drivers as recurring revenue.
B. will be disclosed by a company’s management.
C. is considered separately from recurring revenue.
Solution:
C is correct. Non-recurring items and effects should be considered separate-
ly. The non-recurring objects, such as changes in exchange rates or provi-
sions for legal costs, generally do not have the same drivers as the recurring 
objects. While management may disclose some non-recurring items and 
effects, there are also non-recurring items and effects that management 
does not disclose, which require analyst judgment.
5. An analyst should consider the effects of changing commodity prices when 
forecasting:
A. revenue only.
B. cost of sales only.
C. both revenue and cost of sales.
Solution:
C is correct. Both a company’s cost of sales through input prices and its rev-
enue may be affected by commodity prices. The effect on revenue depends 
on the company’s competitive positioning and the price elasticity of demand 
for the company’s products.
Learning Module 7 Company Analysis: Forecasting288
6. Working capital forecasts for a mature company with a unique business 
model are most likely made by:
A. increasing the current assets and liabilities by the sales growth rate.
B. using the company’s efficiency ratios combined with sales and operat -
ing forecasts.
C. using a historical base rate and convergence approach to develop fore -
casts of revenue, operating expenses, and efficiency ratios.
Solution:
B is correct. For a company with a unique business model, using a historical 
results approach is appropriate. Working capital forecasts are typically made 
by using efficiency ratios, which are combined with sales and operating cost 
forecasts to project accounts receivable, inventories, accounts payable, and 
other current assets and liabilities. The historical base rate and convergence 
approach is appropriate if the company is converging toward the norm for 
the industry. Adjusting current assets and liabilities by the sales growth rate 
is not appropriate, because changes in sales will affect each item differently.
7. Depreciation and amortization expenses are often used as the basis for:
A. growth capital expenditures only.
B. maintenance capital expenditures only.
C. both growth and maintenance capital expenditures.
Solution:
B is correct. Maintenance capital expenditure forecasts are often based on 
depreciation and amortization expenses. Growth capital expenditure fore-
casts are more discretionary and are tied to management’s expansion plans 
and revenue growth.
8. Which of the following generic risk factors is most likely to affect an estab-
lished company in the consumer staples sector?
A. Inflation or deflation
B. Technological developments
C. Changes in the business cycle
Solution:
A is correct. While all of these choices are generic risk factors, inflation or 
deflation is the one most likely to affect an established company in the con-
sumer staples sector. The consumer staples sector is not likely to experience 
significant technological developments and is generally not sensitive to 
changes in the business cycle.
FORECAST OBJECTS, PRINCIPLES, AND APPROACHES
explain principles and approaches to forecasting a company’s 
financial results and position
2
Forec`,
    },
    {
      number: 8,
      title: `Equity Valuation: Concepts and Basic Tools`,
      pages: 40,
      los: `Mastery The candidate should be able to:
evaluate whether a security, given its current market price and a
value estimate, is overvalued, fairly valued, or undervalued by the
describe major categories of equity valuation models
describe regular cash dividends, extra dividends, stock dividends,
stock splits, reverse stock splits, and share repurchases
describe dividend payment chronology
explain the rationale for using present value models to value equity
and describe the dividend discount and free-cash-flow-to-equity
explain advantages and disadvantages of each category of valuation
calculate the intrinsic value of a non-callable, non-convertible
calculate and interpret the intrinsic value of an equity security based`,
      intro: `Analysts gather and process information to make investment decisions, including 
buy and sell recommendations. What information is gathered and how it is processed 
depend on the analyst and the purpose of the analysis. Technical analysis uses such 
information as stock price and trading volume as the basis for investment decisions. 
Fundamental analysis uses information about the economy, industry, and company 
as the basis for investment decisions. Examples of fundamentals are unemployment 
rates, gross domestic product (GDP) growth, industry growth, and quality of and 
growth in company earnings. Whereas technical analysts use information to predict 
price movements and base investment decisions on the direction of predicted change 
in prices, fundamental analysts use information to estimate the value of a security 
and to compare the estimated value to the market price and then base investment 
decisions on that comparison.
This reading introduces equity valuation models used to estimate the intrinsic value 
(synonym: fundamental value) of a security; intrinsic value is based on an analysis 
of investment fundamentals and characteristics. The fundamentals to be considered 
depend on the analyst’s approach to valuation. In a top-down approach, an analyst 
examines the economic environment, identifies sectors that are expected to prosper 
in that environment, and analyzes securities of companies from previously identified 
attractive sectors. In a bottom-up approach, an ana`,
      overview: ``,
      body: `INTRODUCTION
Analysts gather and process information to make investment decisions, including 
buy and sell recommendations. What information is gathered and how it is processed 
depend on the analyst and the purpose of the analysis. Technical analysis uses such 
information as stock price and trading volume as the basis for investment decisions. 
Fundamental analysis uses information about the economy, industry, and company 
as the basis for investment decisions. Examples of fundamentals are unemployment 
rates, gross domestic product (GDP) growth, industry growth, and quality of and 
growth in company earnings. Whereas technical analysts use information to predict 
price movements and base investment decisions on the direction of predicted change 
in prices, fundamental analysts use information to estimate the value of a security 
and to compare the estimated value to the market price and then base investment 
decisions on that comparison.
This reading introduces equity valuation models used to estimate the intrinsic value 
(synonym: fundamental value) of a security; intrinsic value is based on an analysis 
of investment fundamentals and characteristics. The fundamentals to be considered 
depend on the analyst’s approach to valuation. In a top-down approach, an analyst 
examines the economic environment, identifies sectors that are expected to prosper 
in that environment, and analyzes securities of companies from previously identified 
attractive sectors. In a bottom-up approach, an analyst typically follows an industry or 
industries and forecasts fundamentals for the companies in those industries in order 
to determine valuation. Whatever the approach, an analyst who estimates the intrinsic 
value of an equity security is implicitly questioning the accuracy of the market price 
as an estimate of value. Valuation is particularly important in active equity portfolio 
management, which aims to improve on the return–risk trade-off of a portfolio’s 
benchmark by identifying mispriced securities.
This reading is organized as follows. Section 2 discusses the implications of dif -
ferences between estimated value and market price. Section 3 introduces three major 
categories of valuation model. Section 4 presents an overview of present value models 
with a focus on the dividend discount model. Section 5 describes and examines the 
use of multiples in valuation. Section 6 explains asset-based valuation and demon -
strates how these models can be used to estimate value. Section 7 states conclusions 
and summarizes the reading.
ESTIMATED VALUE AND MARKET PRICE
evaluate whether a security, given its current market price and a 
value estimate, is overvalued, fairly valued, or undervalued by the 
market
By comparing estimates of value and market price, an analyst can arrive at one of 
three conclusions: The security is undervalued, overvalued, or fairly valued  in the 
marketplace. For example, if the market price of an asset is $10 and the analyst esti -
mates intrinsic value at $10, a logical conclusion is that the security is fairly valued. 
If the security is selling for $20, the security would be considered overvalued. If the 
security is selling for $5, the security would be considered undervalued. Basically, by 
estimating value, the analyst is assuming that the market price is not necessarily the 
best estimate of intrinsic value. If the estimated value exceeds the market price, the 
1
2
Estimated Value and Market Price 337
analyst infers the security is undervalued. If the estimated value equals the market 
price, the analyst infers the security is fairly valued. If the estimated value is less than 
the market price, the analyst infers the security is overvalued.
In practice, the conclusion is not so straightforward. Analysts must cope with 
uncertainties related to model appropriateness and the correct value of inputs. An 
analyst’s final conclusion depends not only on the comparison of the estimated value 
and the market price but also on the analyst’s confidence in the estimated value (i.e., 
in the model selected and the inputs used in it). One can envision a spectrum running 
from relatively high confidence in the valuation model and the inputs to relatively 
low confidence in the valuation model and/or the inputs. When confidence is rela -
tively low, the analyst might demand a substantial divergence between his or her own 
value estimate and the market price before acting on an apparent mispricing. For 
instance, if the estimate of intrinsic value is $10 and the market price is $10.05, the 
analyst might reasonably conclude that the security is fairly valued and that the 1/2 
of 1 percent market price difference from the estimated value is within the analyst’s 
confidence interval.
Confidence in the convergence of the market price to the intrinsic value over the 
investment time horizon relevant to the objectives of the portfolio must also be taken 
into account before an analyst acts on an apparent mispricing or makes a buy, sell, 
or hold recommendation: The ability to benefit from identifying a mispriced security 
depends on the market price converging to the estimated intrinsic value.
In seeking to identify mispricing and attractive investments, analysts are treating 
market prices with skepticism, but they are also treating market prices with respect. For 
example, an analyst who finds that many securities examined appear to be overvalued 
will typically recheck models and inputs before acting on a conclusion of overvalu -
ation. Analysts also often recognize and factor into recommendations that different 
market segments—such as securities closely followed by analysts versus securities 
relatively neglected by analysts—may differ in how common or persistent mispricing 
is. Mispricing may be more likely in securities neglected by analysts.
EXAMPLE 1
Valuation and Analyst Response
1. An analyst finds that all the securities analyzed have estimated values higher 
than their market prices. The securities all appear to be:
A. overvalued.
B. undervalued.
C. fairly valued.
Solution to 1:
B is correct. The estimated intrinsic value for each security is greater than 
the market price. The securities all appear to be undervalued in the market. 
Note, however, that the analyst may wish to reexamine the model and inputs 
to check that the conclusion is valid.
2. An analyst finds that nearly all companies in a market segment have com-
mon shares which are trading at market prices above the analyst’s estimate 
of the shares’ values. This market segment is widely followed by analysts. 
Which of the following statements describes the analyst’s most appropriate 
first action?
A. Issue a sell recommendation for each share issue.
Learning Module 8 Equity Valuation: Concepts and Basic Tools338
B. Issue a buy recommendation for each share issue.
C. Reexamine the models and inputs used for the valuations.
Solution to 2:
C is correct. It seems improbable that all the share issues analyzed are over-
valued, as indicated by market prices in excess of estimated value—partic -
ularly because the market segment is widely followed by analysts. Thus, the 
analyst will not issue a sell recommendation for each issue. The analyst will 
most appropriately reexamine the models and inputs prior to issuing any 
recommendations. A buy recommendation is not an appropriate response 
to an overvalued security.
3. An analyst, using a number of models and a range of inputs, estimates a se-
curity’s value to be between ¥250 and ¥270. The security is trading at ¥265. 
The security appears to be:
A. overvalued.
B. undervalued.
C. fairly valued.
Solution to 3:
C is correct. The security’s market price of ¥265 is within the range estimat-
ed by the analyst. The security appears to be fairly valued.
Analysts often use a variety of models and inputs to achieve greater confidence 
in their estimates of intrinsic value. The use of more than one model and a range of 
inputs also helps the`,
    },
  ],
  fi: [
    {
      number: 1,
      title: `Fixed-Income Instrument Features`,
      pages: 20,
      los: `Mastery The candidate should be able to:
describe the features of a fixed-income security
describe the contents of a bond indenture and contrast affirmative
and negative covenants`,
      intro: `Fixed-income instruments, such as loans and bonds, are the most common means of 
financing. Fixed-income issuers include businesses, governments, and not-for-profits 
that promise to pay interest and repay borrowed principal to investors. Loans are 
commonly used between an individual or company and a bank. Bonds are more stan -
dardized fixed-income instruments designed to be more easily tradeable than loans 
and are commonly issued by larger companies, governments, and special purpose 
issuers. Bonds are a core holding for many investors, including mutual funds, pension 
plans, insurance companies, and central banks. This module introduces the features 
of fixed-income instruments and the legal contracts that govern them.`,
      overview: `■ Fixed-income instruments are debt instruments, such as loans 
and bonds, that represent a contractual agreement under 
which an issuer borrows money from investors in exchange for inter -
est and future repayment of principal.
 ■ Key features of fixed-income instruments include the issuer (bor -
rower), time to maturity, principal amount, coupon rate and fre-
quency, seniority, and contingency provisions. These features in turn 
define the cash flow structure of the instrument.
 ■ A fixed-income investor (lender) receives a return or yield based on 
the periodic cash flows paid by the bond issuer and the change in price 
of the bond. A bond’s price and yield vary inversely with one another.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Fixed-income instruments are debt instruments, such as loans 
and bonds, that represent a contractual agreement under 
which an issuer borrows money from investors in exchange for inter -
est and future repayment of principal.
 ■ Key features of fixed-income instruments include the issuer (bor -
rower), time to maturity, principal amount, coupon rate and fre-
quency, seniority, and contingency provisions. These features in turn 
define the cash flow structure of the instrument.
 ■ A fixed-income investor (lender) receives a return or yield based on 
the periodic cash flows paid by the bond issuer and the change in price 
of the bond. A bond’s price and yield vary inversely with one another.
1
LEARNING MODULE
1
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 Fix ed-Income Instrument Features4
 ■ Fixed-income investors are exposed to credit risk, the risk of loss 
resulting from the issuer failing to make full and timely payments of 
interest and/or to repay principal. Investors expect to earn the lowest 
yield on bonds that carry little or no credit risk and expect higher 
yields on lower-credit-quality instruments.
 ■ A fixed-income instrument’s credit quality is affected by the underly -
ing source of repayment, its seniority, credit provisions such as collat -
eral backing, and the issuer’s willingness to pay.
 ■ The legal contract describing the features and other terms of a 
fixed-income security is known as an indenture.
 ■ Indentures often contain covenants, or legally enforceable terms, 
agreed to at the time of issuance. These may either require the bond 
issuer to take an action or prohibit the issuer from performing some 
action.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. The annu
al coupon amount for a fixed-rate bond is calculated by:
A. multiply
ing its yield by the par value of the bond.
B. Multiply
ing its coupon rate by the price of the bond.
C. Multiply
ing its coupon rate by the par value of the bond.
Solution:
C is correct. On each interest payment date, a fixed-rate bond issuer pays 
investors a coupon payment equal to the bond’s coupon rate times its par 
value. For periods shorter than a year, the annual coupon amount is divided 
into smaller equal periodic payments. For example, a bond with a par value 
of 100 and a coupon rate of 6% paid quarterly would pay coupon payments 
of 0.06 × 100 = 60/4 = 15 four times per year.
2.
 Mat
ch each bond type in the left column with a description in the right 
column. 
 
A. Fixed-coupon bond I. The difference between its issuance price and par 
value at maturity represents a cumulative interest pay -
ment at maturity.
B. Floating-rate note II. Usually involves uniform payments that occur at 
monthly, quarterly, semi-annual, or annual intervals.
C. Zero-coupon bond III. Involves interest payments that reset periodically 
based on market factors.
 
Solution:
A. II i
s correct. Fixed-coupon bonds usually involve uniform payments 
that occur at monthly, quarterly, semi-annual, or annual intervals.
B. II
I is correct. Floating-rate notes (FRNs) involve interest payments that 
reset periodically based on market factors.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 5
C. I is correct. Zero-coupon bonds are typically issued at a discount to 
p
ar; the difference between the issuance price and par value represents 
a cumulative interest payment at maturity.
3. The coup
on rate for a floating rate note (FRN) is composed of a market 
reference rate and:
A. a cr
edit rating.
B. an issuer
-specific spread.
C. The yie
ld on a fixed-rate benchmark bond.
Solution:
B is correct. An FRN coupon rate comprises a market reference rate (MRR) 
and an issuer-specific spread that is usually constant and set at the time 
of issuance, while the MRR resets periodically based on market factors. 
As the MRR changes, the FRN coupon rate and interest payment change 
accordingly.
A is incorrect. While the issuer’s credit rating may be a determinant of an 
FRN’s spread over the MRR, a credit rating is a letter-grade assessment of 
credit risk and is not directly involved in the calculation of the coupon rate.
C is incorrect. The yield on a fixed-rate benchmark bond would reflect top-
down factors that determine interest rates, such as real growth and expected 
inflation, which are already considered in the MRR.
4.
 A sover
eign bond is usually a safer investment than a corporate bond of 
similar maturity issued within a country because:
A. cor
porate bonds are subject to inflation risk.
B. sover
eign bonds are backed by taxation and fiscal power of the issuing 
government.
C. sover
eign bonds are secured by high-quality collateral, such as prop-
erty and equipment.
Solution:
B is correct. Sovereign bonds are backed by a national government’s taxa-
tion and fiscal power and thus usually represent the highest-credit-quality 
bonds in each geographic market.
A is incorrect because sovereign bonds, unless specifically indexed to infla-
tion, are also subject to inflation risk.
C is incorrect because sovereign bonds are typically not secured by collat-
eral; this is more commonly a feature of corporate bonds and asset-backed 
securities.
5.
 Which of t
he following is the appropriate order of claims in liquidation, by 
type of bond, in order of highest to lowest?
A. Junior
, senior secured, senior unsecured
B. Senior uns
ecured, senior secured, junior
C. Senior s
ecured, senior unsecured, junior
Solution:
C is correct. Senior secured debts would be the highest-priority claims to 
be satisfied. Senior unsecured debts would be the next to receive allocations 
of the liquidated asset value, and junior debts would be the lowest-priority 
claims to be satisfied.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 Fix ed-Income Instrument Features6
6. Describe the purpose of a pari passu clause in a bond indenture.
S
olution:
A pari passu (“equal footing”) clause ensures that a debt obligation is treated 
the same as the borrower’s other senior debt instruments.
FEATURES OF FIXED-INCOME SECURITIES
describe the features of a fixed-income security
Fixed-income instruments are debt instruments, such as loans and bonds. Loans  
are debt instruments formed and governed by a private agreement usually between 
an individual or company and a financial intermediary, such as a bank. Bonds or 
fixed-income securities are more standardized contractual agreements between larger 
issuers and investors. A bond issuer borrows money most often to fund operations or 
capital expenditures. Bond investors are lenders who provide funds to the issuer in 
exchange for interest payments and future repayment of principal. While corporate 
issuers tend to have, at most, one or two types of equity securities outstanding, they 
often have many types of debt obligations outstanding, each with distinct features, 
such as time to maturity, seniority, and currency.
WHICH LIABILITIES ARE FIXED-INCOME INSTRUMENTS?
Earlier modules in corporate issuers and financial statement analysis discussed 
the balance sheets of corporate issuers composed of assets and the liabilities 
and equity that finance them. Liabilities are broadly defined by accounting 
standards as present obligations to transfer economic resources as a result of 
past events. This definition encompasses many types of obligations, including 
amounts that an issuer owes to suppliers, customers, employees, governments, 
retirees, lessors, and so on.
Not all liabilities are fixed-income instruments (or “debt”), but all fixed-in-
come instruments are liabilities. In these modules on fixed income, from the 
perspective of a corporate issuer, we are focused only on loans and bonds: 
instruments that can be settled in cash and for which the counterparty is an 
investor or a bank. Other `,
    },
    {
      number: 2,
      title: `Fixed-Income Cash Flows and Types`,
      pages: 32,
      los: `Mastery The candidate should be able to:
describe common cash flow structures of fixed-income instruments
and contrast cash flow contingency provisions that benefit issuers
describe how legal, regulatory, and tax considerations affect the
issuance and trading of fixed-income securities`,
      intro: `A fixed-income instrument’s cash flows are determined by its features. In this module, 
we discuss common fixed-income instrument cash flow structures and their implica-
tions for issuers and investors. The module’s final lesson discusses the legal, regulatory, 
and tax considerations across jurisdictions faced by fixed-income issuers and investors.`,
      overview: `■ In contrast to standard bullet bonds with full principal repay-
ment at maturity, amortizing bonds have a payment schedule 
that involves early repayment of principal. Sinking funds and waterfall 
structures represent special cases of amortizing bonds.
 ■ Other coupon payment structures include index-linked bonds that 
offer payments adjusted for changes in price indices and bonds with 
step-up coupons, with coupons that increase by specific amounts in 
the future based on a schedule or subject to specific provisions.
 ■ Fixed-income contingency provisions include call, put, and conversion 
features. A call feature grants an issuer the right to buy bonds back 
early at a fixed price, while a put feature grants an investor the right to 
sell bonds to the issuer at a fixed price prior to maturity. Convertible 
bonds grant investors the right to convert the bond into shares of the 
issuer’s stock at a pre-determined price.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ In contrast to standard bullet bonds with full principal repay-
ment at maturity, amortizing bonds have a payment schedule 
that involves early repayment of principal. Sinking funds and waterfall 
structures represent special cases of amortizing bonds.
 ■ Other coupon payment structures include index-linked bonds that 
offer payments adjusted for changes in price indices and bonds with 
step-up coupons, with coupons that increase by specific amounts in 
the future based on a schedule or subject to specific provisions.
 ■ Fixed-income contingency provisions include call, put, and conversion 
features. A call feature grants an issuer the right to buy bonds back 
early at a fixed price, while a put feature grants an investor the right to 
sell bonds to the issuer at a fixed price prior to maturity. Convertible 
bonds grant investors the right to convert the bond into shares of the 
issuer’s stock at a pre-determined price.
1
LEARNING MODULE
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 Fix ed-Income Cash Flows and Types24
 ■ Bonds can be classified as domestic, foreign, or Eurobonds. Domestic 
bonds are those issued in a country by an issuer incorporated in that 
same country, while foreign bonds are issued by entities incorporated 
elsewhere.
 ■ Eurobonds are issued internationally in a currency different from that 
country’s domestic currency (e.g. US dollar bonds issued in London) 
and are subject to fewer listing, disclosure, and regulatory require-
ments than domestic or foreign bonds.
 ■ Bond interest earned by an investor is usually taxed as ordinary 
income, although some bonds offer tax advantages. Some countries 
also apply a capital gains tax. Specific tax provisions often apply for 
bonds issued at a discount or purchased at a premium.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. An inve
stor that is more sensitive to an issuer’s credit risk than to reinvest-
ing risk would most likely invest in a:
A. bullet b
ond.
B. par
tially amortizing bond.
C. fully amor
tizing bond.
Solution:
C is correct. Investors receive higher near-term cash flows on amortizing 
debt versus bullet bonds and face lower credit risk because the borrower’s 
liability is reduced over time. However, investors also face the risk of rein-
vesting the higher near-term cash flows at prevailing market interest rates, 
which can fluctuate. This effect is larger for fully amortizing bonds versus 
partially amortizing bonds.
2.
 Mat
ch the term in the left column with its description in the right column.
 
A. Bullet bond I. A bond with a fixed periodic payment schedule 
that reduces the bond’s outstanding principal to a 
portion of the principal to be repaid on the matu-
rity date
B. Partially amortizing bond II. A bond with a coupon rate that increases by 
specified margins at one or more specified dates
C. Step-up coupon bond III. A bond that pays its face value and final interest 
payment at maturity
 
Solution:
A. II
I is correct. A bullet bond pays 100% of its face value plus a final 
interest payment at the bond’s maturity.
B. I is c
orrect. A bond characterized by a fixed periodic payment sched-
ule that reduces the bond’s outstanding principal to a portion of the 
principal to be repaid on the maturity date is known as a partially 
amortizing bond.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 25
C. II is correct. A bond with a coupon rate that increases by specified 
mar
gins at one or more specified dates is known as a step-up coupon 
bond.
3. A call pr
ovision embedded in a fixed-income security:
A. is a b
enefit to the issuer.
B. give
s the bondholder the right but not an obligation to sell the bond.
C. gran
ts the bondholder some degree of inflation protection.
Solution:
A is correct. A call provision gives the issuer the right to redeem all or part 
of the bond at a pre-determined price on specified dates. It is a benefit to the 
issuer because if market interest rates fall, the issuer can replace the call-
able bond with one with a lower interest rate. It also gives the issuer added 
flexibility if it has excess cash or wishes to change its capital structure in the 
future.
B is incorrect. This describes a putable bond, not a callable bond. If a call-
able bond is called, the bondholder is obliged to sell it to the issuer accord-
ing to the specified terms.
C is incorrect. A call provision does not grant the bondholder inflation pro-
tection. A call would be exercised by the issuer if interest rates fall.
4.
 A put prov
ision embedded in a fixed-income security:
A. is a b
enefit to the bondholders.
B. lead
s to a lower value compared to a bullet bond.
C. incr
eases the likelihood that its issuer will be acquired.
Solution:
A is correct. A put provision gives bondholders the right to sell the bonds 
back to the issuer at a pre-determined price on specified dates. The put pro-
vision is a benefit to bondholders because it can protect them from the risk 
of the price of the bond falling from, for example, rising interest rates.
B is incorrect. As put provisions are beneficial to investors, putable bonds 
are priced at a premium, not a discount, relative to option-free counterparts.
C is incorrect. Put provisions can deter acquirers because the exercise of 
putable bonds results in an immediate claim on cash, making the acquisition 
more expensive. Issuing bonds with put provisions is a strategy employed by 
some firms to deter unfriendly takeovers known as a “poison puts. ”
5.
 Mat
ch the term in the left column with its description in the right column.
 
A. Eurobond I. A bond issued outside the jurisdiction of any single country
B. Global bond II. A bond issued simultaneously in the Eurobond market 
and in at least one domestic bond market
 
Solution:
A. I is c
orrect. Eurobonds are issued outside the jurisdiction of any single 
country, are usually unsecured, and may be denominated in any cur -
rency, including the issuer’s domestic currency.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 Fix ed-Income Cash Flows and Types26
B. II is correct. A global bond is a bond issued simultaneously in the 
E
urobond market and in at least one domestic bond market, ensuring 
sufficient demand for large bond issues and access to all fixed-income 
investors regardless of location.
6.
 Comp
ared to a bond with an original issue discount (OID) tax provision, an 
otherwise identical bond without this provision would most likely have:
A. lower ta
xes due at maturity.
B. the same t
axes due at maturity.
C. higher t
axes due at maturity.
Solution:
C is correct. Under the OID tax provision, the investor will recognize 
a prorated portion of the OID as taxable income each year and pay no 
capital gains tax upon maturity. Investors without an OID tax provision 
will recognize no taxable income until maturity, upon which they will face 
capital gains tax on the OID (provided there is capital gains tax in their 
jurisdiction).
FIXED-INCOME CASH FLOW STRUCTURES
describe common cash flow structures of fixed-income instruments 
and contrast cash flow contingency provisions that benefit issuers 
and investors
The most common bond cash flow structure is that of a standard fixed-coupon bond, 
often referred to as a bullet bond. The bond issuer receives the principal at settle-
ment, makes periodic, fixed coupon payments, and repays the principal at maturity. 
Most government and corporate issuers use bullet bonds as their primary means of 
debt financing, and investors often prefer the associated fixed income stream and set 
maturity to fund known cash flows. Exhibit 1 shows the bullet bond structure of the 
five-year, USD300 million, 3.2% semiannual coupon BRWA bond introduced in the 
prior module.
2
© CFA Institute. For candidate use only. Not for distribution`,
    },
    {
      number: 3,
      title: `Fixed-Income Issuance and Trading`,
      pages: 22,
      los: `Mastery The candidate should be able to:
describe fixed-income market segments and their issuer and investor
describe types of fixed-income indexes
compare primary and secondary fixed-income markets to equity`,
      intro: `Fixed-income instruments and markets are often categorized by issuer type, credit 
quality, time to maturity, and, sometimes, additional features, such as currency, geog-
raphy, and environmental, social, and governance (ESG) characteristics. Fixed-income 
indexes are categorized in a similar manner and serve important functions, like the role 
of equity market indexes in stock markets. Like other financial markets, fixed-income 
markets are composed of primary markets in which issuers raise financing from 
investors with new issues and secondary markets where investors trade existing 
instruments with other investors. Given bonds’ finite maturities and other features, 
there are important distinctions in fixed-income markets from the primary and sec -
ondary markets for equities.`,
      overview: `■ Fixed-income instruments and markets are typically catego-
rized along three dimensions: issuer type (i.e., sector), credit 
quality, and time to maturity.
 ■ Fixed-income investors have corresponding positions along the credit 
and maturity spectrum as they seek exposures to certain risks and 
attempt to match the cash flows of known future obligations.
 ■ Similar to equity market indexes, fixed-income indexes track the 
returns of groups of securities that meet their inclusion criteria. 
Indexes are used to evaluate market performance, benchmark the per -
formance of investments and investment managers, and form the basis 
of indexed investment strategies.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Fixed-income instruments and markets are typically catego-
rized along three dimensions: issuer type (i.e., sector), credit 
quality, and time to maturity.
 ■ Fixed-income investors have corresponding positions along the credit 
and maturity spectrum as they seek exposures to certain risks and 
attempt to match the cash flows of known future obligations.
 ■ Similar to equity market indexes, fixed-income indexes track the 
returns of groups of securities that meet their inclusion criteria. 
Indexes are used to evaluate market performance, benchmark the per -
formance of investments and investment managers, and form the basis 
of indexed investment strategies.
1
LEARNING MODULE
3
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 Fix ed-Income Issuance and Trading56
 ■ Fixed-income indexes can be classified as broad-based, aggregate 
indexes with a vast number of constituents or narrower indexes 
that focus on criteria such as issuer type, credit quality, and time to 
maturity.
 ■ Primary bond markets are markets in which an issuer sells a new bond 
or bonds to investors to raise financing, whereas secondary bond mar -
kets are markets in which existing bonds are traded among investors.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Dis
cuss two ways that an investor could seek to increase her expected return 
on a fixed-income portfolio.
Solution:
Investors could increase credit risk with instruments with lower credit rat-
ings. Second, provided that the yield curve is upward sloping, investors may 
also increase expected returns with longer-term bonds.
2.
 Which of t
he following statements about fixed-income and equity indexes is 
correct?
A. There i
s more turnover in equity indexes than in fixed-income indexes.
B. Fi
xed-income indexes often have more constituent securities than 
equity indexes.
C. Fi
xed-income index constituents are typically equally weighted, while 
equity index constituents are typically weighted by issuers’ market 
capitalization.
Solution:
B is correct. Fixed-income indexes often have more constituent securities 
than equity indexes because issuers tend to have many types of instru-
ments outstanding, and governments issue large amounts of fixed-income 
securities but not equity securities. The finite maturity of bonds and the 
higher frequency of new issuance lead to far more turnover in fixed-income 
indexes than in equity indexes. Fixed-income index constituents are usually 
weighted by market value of debt outstanding, whereas equity indexes are 
weighted by issuers’ market capitalizations.
3.
 The Bloomb
erg Barclays Global Aggregate Index includes:
A. all issuer si
zes.
B. issuers in m
ultiple currencies.
C. high-
yield and unrated issuers.
Solution:
B is correct. The Bloomberg Barclays Global Aggregate Index includes 
fixed-coupon capital market securities from all major issuer types in 28 
developed and emerging markets that meet the inclusion criteria. However, 
the index excludes high-yield and unrated debt instruments and those that 
do not meet minimum issuance size.
© CFA Institute. For candidate use only. Not for distribution.
Fixed-Income Segments, Issuers, and Investors 57
4. A debut issuer seeking to sell its bonds only to a select group of investors 
w
ill most likely undertake a:
A. public offer
ing.
B. she
lf registration.
C. priv
ate placement.
Solution:
C is correct. Bonds can be sold via a private placement, in which only a 
select group of investors or a single investor purchases the bonds. Bonds can 
also be sold in a public offering in which any member of the public may buy 
the bonds. Frequent bond issuers use a shelf registration, which is updated 
regularly and may be used for a range of future bond issuances.
5.
 A fr
equent bond issuer that seeks flexibility to issue bonds opportunistically 
when market conditions are favorable would most likely use a:
A. re
opening.
B. she
lf offering.
C. priv
ate placement.
Solution:
B is correct. Frequent issuers of bonds have ready access to the bond market 
and often choose issuance timing on an opportunistic basis, when market 
conditions are most favorable. Frequent bond issuers use a shelf registration 
or a broad, all-encompassing offering circular that is updated regularly and 
may be used for a range of future bond issuances. A less common strategy 
is to increase the size of an existing bond with a price significantly different 
from par, which is referred to as the reopening of an existing bond. In a 
private placement, only a selected investor or group of investors may buy 
the bonds.
FIXED-INCOME SEGMENTS, ISSUERS, AND 
INVESTORS
describe fixed-income market segments and their issuer and investor 
participants
Fixed-income instruments and markets are typically categorized along three dimen-
sions: issuer type (often known as sector), credit quality, and time to maturity. 
Sometimes, instruments and markets are additionally classified by issuers’ geography, 
currency, and ESG characteristics.
In contrast to equities, where issuers typically issue just one or two instruments, 
issuers often have many  fixed-income instruments outstanding. For example, a cor -
porate issuer may have loans or both loans and bonds, either on a short-term basis 
to finance working capital or a long-term basis for capital investment. Some large 
companies also issue commercial paper, a type of short-term bond to finance work -
ing capital needs that can be collateralized by specific assets. These debt instruments 
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 Fix ed-Income Issuance and Trading58
may be in varying currencies to hedge exposures and broaden access to investors. For 
example, at the end of 2021, Apple Inc. had over 80 fixed-income instruments but a 
single equity instrument (common stock) outstanding.
Exhibit 1 illustrates typical issuers and instrument types across credit and 
time-to-maturity segments.
Exhibit 1: Issuers across the Credit and Maturity Spectrums: Issuers and 
Instrument Types
< 1y
Short-Term
1y–10y
Intermediate-Term
Years to
Maturity
Treasury bills Treasury notes Treasury bonds
Credit
Quality
“Default
Risk Free”
Investment
Grade
High
Yield
> 10y
Long-Term
Repo
Commercial
Paper
ABCP
Unsecured
Corporate
bonds
ABS
Unsecured
Corporate
bonds
MBS
Secured
Corporate
bonds
Leveraged
loans
Note: ABCP is asset-backed commercial paper.
Fixed-income investors have corresponding positions along the credit and maturity 
spectrums as they seek to gain exposures to certain risks and to match the cash flows 
of known future obligations. Near-term obligations and the desire for liquid cash 
alternatives are often met with money market securities, while investors may assume 
greater interest rate risk with long-term bonds to meet obligations further in the 
future or pursue higher expected returns. Pension funds and insurance companies 
with long investment time horizons favor fixed-income instruments with fixed peri-
odic coupon cash flows and a maturity profile that matches their long-term liabilities. 
Additionally, investors may take credit risk at any point on the maturity spectrum to 
augment returns. Exhibit 2 illustrates common investor positions across the credit 
and maturity spectrums.
© CFA Institute. For candidate use only. Not for distribution.
Fixed-Income Segments, Issuers, and Investors 59
Exhibit 2: Investors across the Credit and Maturity Spectrums: Investors
< 1y
Short-Term
1y–10y
Intermediate-Term
Years to
Maturity
Financial intermediaries
Money market
funds 
Pension funds
Credit
Quality
“Default
Risk Free”
Investment
Grade
High
Yield
> 10y
Long-Term
Corporate
issuers 
Bond funds and
ETFs 
Asset managers
Insurance
companies 
Hedge funds
Distressed debt
funds  
Central banks
A common measure of credit quality is a credit rating. Credit ratin`,
    },
    {
      number: 4,
      title: `Fixed-Income Markets for Corporate Issuers`,
      pages: 28,
      los: `Mastery The candidate should be able to:
compare short-term funding alternatives available to corporations
and financial institutions
describe repurchase agreements (repos), their uses, and their
contrast the long-term funding of investment-grade versus high-yield`,
      intro: `Previous modules described various types of fixed-income issuers and investors. In 
this module, we focus on the corporate fixed-income sector, composed of instru-
ments issued by financial institutions and non-financial corporate issuers across the 
time-to-maturity and credit spectrums. These instruments account for a significant 
portion of total debt issuance and debt outstanding globally.`,
      overview: `■ Non-financial corporations frequently use short-term external 
funding in the form of bank loans and securities, such as com-
mercial paper to meet cash needs.
 ■ Financial institutions rely on deposits, interbank markets, commercial 
paper, and repurchase agreements (repos) as primary sources of short-
term funding.
 ■ Commercial paper is a short-term unsecured promissory note issued 
by both financial institutions and non-financial corporations.
 ■ A repurchase agreement (repo) is a form of short-term secured lend-
ing that involves the sale and simultaneous agreement to buy back a 
security at a pre-agreed future price.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Non-financial corporations frequently use short-term external 
funding in the form of bank loans and securities, such as com-
mercial paper to meet cash needs.
 ■ Financial institutions rely on deposits, interbank markets, commercial 
paper, and repurchase agreements (repos) as primary sources of short-
term funding.
 ■ Commercial paper is a short-term unsecured promissory note issued 
by both financial institutions and non-financial corporations.
 ■ A repurchase agreement (repo) is a form of short-term secured lend-
ing that involves the sale and simultaneous agreement to buy back a 
security at a pre-agreed future price.
1
LEARNING MODULE
4
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Fix ed-Income Markets for Corporate Issuers78
 ■ An investment-grade bond has a significant proportion of its 
yield-to-maturity (YTM) attributed to the government benchmark 
yield due to its strong ability to meet promised interest and principal 
obligations from operating cash flows.
 ■ High-yield issuers are characterized by a higher expected likelihood 
of financial distress. Relative to investment-grade bonds, a higher pro-
portion of their bonds’ YTM is attributed to an issuer-specific spread 
over the government benchmark yield.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of t
he following financing instruments provides the most reliable 
source of short-term bank funding for a non-financial corporation?
A. Revolv
ing credit agreement
B. Committ
ed bank line of credit
C. Unc
ommitted bank line of credit
Solution:
A is correct. Revolving credit agreements, also referred to as revolvers, are 
the most reliable source of short-term bank funding.
B is incorrect. While committed lines of credit are a more reliable source 
of financing than uncommitted lines because they involve a formal written 
commitment, they are less reliable than revolvers. C is incorrect because 
uncommitted bank lines of credit are the least reliable form of bank borrow-
ing for a company.
2.
 Iden
tify the following statement as true or false. Justify your answer.
In an unsecured loan, the lender requires the company to provide collateral 
in the form of an asset that is pledged against the loan.
Solution:
False. Secured loans are loans in which the lender requires the company to 
provide collateral in the form of an asset, such as a fixed asset that the com-
pany owns or high-quality receivables or inventory. These assets are pledged 
against the loan, and the lender files a security interest against them. This 
pledge or lien is added to the borrowing company’s financial record and 
reflected on its credit report. Companies that lack sufficient credit quality to 
qualify for unsecured loans may attempt to obtain secured loans.
3.
 Rel
ative to long-term debt and equity, repo funding provides which of the 
following benefits to a financial institution?
A. Lower c
ost
B. Longer
-term financing
C. Gre
ater financial flexibility
Solution:
A is correct. Financial institutions must balance the low cost of repo funding 
with the greater financial flexibility of more costly longer-term financing al-
© CFA Institute. For candidate use only. Not for distribution.
Introduction 79
ternatives, such as long-term debt and equity. B and C are incorrect because 
they are both benefits of long-term debt and equity.
4. Ven
us, Inc., a financial institution, and Bank A, a large regional bank, enter 
into a repurchase agreement in which Venus is the security seller and Bank 
A is the security buyer. The repo is subject to a 102% initial margin. Which 
of the following statements is correct?
A.
 Bank A b
enefits from a long-term cash investment on a collateralized 
basis with minimal liquidity risk.
B. Bank A c
ould generate higher returns for longer repo terms and/or by 
accepting less liquid or lower-quality collateral.
C. The re
po transaction reduces Venus’s funding requirement for the 
security to a fraction of the bond’s purchase price.
Solution:
B is correct. Short-term repos with high-quality collateral (lowest risk) 
result in the lowest return; however, investors can expect higher returns for 
longer repo terms and/or by accepting less liquid or lower quality collateral.
A is incorrect because Bank A benefits from a short-term (not long-term) 
cash investment on a collateralized basis with minimal liquidity risk.
C is incorrect because the repo transaction reduces Bank A’s (not Venus’s) 
funding requirement for the security to a fraction of the bond’s purchase 
price due to the 102% initial margin.
5.
 An inve
stor is analyzing three bonds for a potential investment: a AA rated 
bond, a B rated bond, and a CCC rated bond. Which of the bonds is most 
appropriate if the investor is seeking safety with few issuer restrictions?
A.
 AA ra
ted bond
B. B rat
ed bond
C. CC
C rated bond
Solution:
A is correct. The AA rated bond is investment grade with low likelihood of 
default and minimal issuer restrictions. B and C are incorrect because the B 
rated and CCC rated bonds are considered high yield with equity-like risk 
attributes and often greater issuer restrictions.
6.
 A bond analy
st would most likely consider the probability of default and loss 
given default for:
A. an inve
stment-grade bond because of its equity-like cash flow.
B. a high-
yield bond because of its higher expected likelihood of financial 
distress.
C. an inve
stment-grade bond because of the importance of financial 
ratios and credit ratings to determine the issuer’s likelihood of default.
Solution:
B is correct. High-yield issuers are characterized by a higher expected 
likelihood of financial distress. Given the higher chance of default, these 
instruments are more equity-like in nature and analysts place a greater em-
phasis on the likelihood (probability) of default, potential loss given default, 
and the protections and secondary repayment sources that are available. A 
is incorrect because investment-grade bonds exhibit bond-like cash flows, 
for which there is a high probability of receiving the agreed-upon interest 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Fix ed-Income Markets for Corporate Issuers80
and principal payments. C is incorrect because investment-grade bond 
analysts use financial ratios and credit ratings to determine if and when an 
investment-grade issuer’s likelihood of default will change and don’t rely on 
probability of default or loss given default measures.
SHORT-TERM FUNDING ALTERNATIVES
compare short-term funding alternatives available to corporations 
and financial institutions
Both non-financial corporations and financial institutions rely on borrowed capital 
to support their short-term activities. As discussed in an earlier module in the cor -
porate issuers reading, corporations use external short-term financing to meet cash 
needs during their cash conversion cycle, preserve liquidity, and take advantage of 
supplier discounts.
Non-financial corporate sources and uses of short-term funding are summarized 
in Exhibit 1.
Exhibit 1: Sources and Uses of Short-Term Funding for Non-Financial 
Corporates
Cash
Short-Term
Assets
Long-Term
Assets
Short-Term
Liabilities
Ownership
Capital (Equity) 
Long-Term
Obligations 
Working Capital
Short-Term
Investments
Accounts
Receivable
Inventory
Accounts
Payable
Short-Term
Borrowing
External Loan Financing
Non-financial corporations often rely on financial intermediaries for short-term 
financing. Common instruments include
 ■ uncommitted bank lines of credit,
 ■ committed bank lines of credit, and
 ■ revolving credit agreements, or revolvers.
2
© CFA Institute. For candidate use only. Not for distribution.
Short-Term Funding Alternatives 81
These can be unsecured or secured, depending on a company’s financial strength, 
general credit situation, and j`,
    },
    {
      number: 5,
      title: `Fixed-Income Markets for Government Issuers`,
      pages: 20,
      los: `Mastery The candidate should be able to:
describe funding choices by sovereign and non-sovereign
governments, quasi-government entities, and supranational agencies
contrast the issuance and trading of government and corporate
fixed-income instruments`,
      intro: `In this module, we complete the review of major fixed-income sectors by focusing on 
public sector issuers, including sovereign and non-sovereign governments, and how 
they differ from private sector issuers. Sovereign governments are distinguished by 
their right to tax within a jurisdiction, while non-sovereign, quasi-government, and 
supranational issuers may rely on local taxes, fee-based revenue, or other sources of 
repayment. Sovereign debt issuance is usually conducted through scheduled public 
auctions, with a different role for financial intermediaries than in private sector issu-
ance. Sovereign debt securities are the most common benchmark securities used in 
pricing and valuation analyses for fixed-income instruments.`,
      overview: `■ National or sovereign government issuers are distinguished by 
their legal authority to establish and maintain a country’s pub-
lic goods and services, as well as their ability to tax economic activity 
in their jurisdictions. Developed market sovereign issues are charac -
terized by a strong, stable, well-diversified domestic economy, and 
emerging market sovereign issuers are usually characterized by higher 
growth but less stable and less well-diversified economies subject to 
greater fluctuations over the economic cycle.
 ■ Sovereign debt issues include short-term securities (with maturities 
ranging from 1 to 12 months), medium- and long-term notes and 
bonds, and bonds that are guaranteed but not directly issued by the 
sovereign government.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ National or sovereign government issuers are distinguished by 
their legal authority to establish and maintain a country’s pub-
lic goods and services, as well as their ability to tax economic activity 
in their jurisdictions. Developed market sovereign issues are charac -
terized by a strong, stable, well-diversified domestic economy, and 
emerging market sovereign issuers are usually characterized by higher 
growth but less stable and less well-diversified economies subject to 
greater fluctuations over the economic cycle.
 ■ Sovereign debt issues include short-term securities (with maturities 
ranging from 1 to 12 months), medium- and long-term notes and 
bonds, and bonds that are guaranteed but not directly issued by the 
sovereign government.
1
LEARNING MODULE
5
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 Fix ed-Income Markets for Government Issuers106
 ■ Issuance of sovereign debt usually takes the form of a public auction 
using standard procedures led by the national treasury or finance min-
istry, while corporate debt issuances are managed by investment bank 
underwriters on behalf of issuers. Sovereign governments designate a 
group of financial intermediaries as primary dealers that are required 
to participate in all auctions with competitive prices.
 ■ Once a government debt auction is announced, prospective investors 
submit competitive or non-competitive bids. Once issued, sovereign 
debt is usually traded in a manner similar to private sector debt securi-
ties, primarily in OTC markets through financial intermediary broker/
dealers.
 ■ The level and type of non-sovereign government funding vary widely 
among countries, depending on whether specific goods and services 
are provided and financed at the national, regional, or local level.
 ■ Agencies are quasi-government entities that issue debt in order to 
fund the government-sponsored provision of specific public goods or 
services based on sovereign or local law. Supranational organizations 
are created and supported by sovereign governments in pursuit of a 
common objective.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Comple
te the sentence by selecting the correct words from the options 
given.
A nation’s fiscal policy determines the (level/composition) of sovereign debt 
through central government spending, and government debt management 
policies address the (level/composition) of sovereign debt—that is, short 
term versus long term, as well as other features.
Solution:
A nation’s fiscal policy determines the level of sovereign debt through 
central government spending, and government debt management policies 
address the composition of sovereign debt—that is, short term versus long 
term, as well as other features.
2.
 The issuer rank
s bids by prices, choosing bids from highest to lowest until 
the desired issuance amount is reached, for:
A. single-
price auctions.
B. multiple-
price auctions.
C. single-
price and multiple-price auctions.
Solution:
C is correct. For both a single-price and a multiple-price auction, the issuer 
ranks bids by prices, choosing bids from highest to lowest until the desired 
issuance amount is reached.
© CFA Institute. For candidate use only. Not for distribution.
Sovereign Debt 107
3. Compare the role of financial intermediaries when engaging with sovereign 
i
ssuers versus corporate debt issuers.
Solution:
Sovereign issuers engage with financial intermediaries, like corporate debt 
issuers, but in a different form. Sovereign governments designate a group of 
financial intermediaries as primary dealers that are required to participate 
in all auctions with competitive prices, often serve as the central bank’s 
counterparty for open market operations, and facilitate the purchase and 
sale of government debt by foreign central banks and other indirect bidders. 
Corporate debt issuances, in contrast, are managed by investment bank 
underwriters on behalf of issuers.
4.
 The ability of _______________________ gover
nment issuers to access fund-
ing across maturities is affected by the predictability and stability of sources 
of repayment.
A.
 Sover
eign
B. Non-s
overeign
C. Bot
h sovereign and non-sovereign
Solution:
C is correct. Borrowing costs and access to financing for both sovereign and 
non-sovereign government issuers are affected by their credit quality.
5. Iden
tify the following statement as true or false. Justify your answer.
Sovereign agencies, such as the Airport Authority of Hong Kong (AAHK) 
and the Government National Mortgage Association (Ginnie Mae), benefit 
from the full liquidity premium associated with sovereign debt.
Solution:
False. While each of these sovereign agencies is typically able to borrow at a 
yield-to-maturity near that of their sovereign guarantor, neither will benefit 
from the full liquidity premium associated with sovereign debt.
SOVEREIGN DEBT
describe funding choices by sovereign and non-sovereign 
governments, quasi-government entities, and supranational agencies
National or sovereign government issuers are distinguished by their legal authority 
to establish and maintain a country’s public goods and services and their ability to 
tax economic activity in their jurisdiction. Additional sources of repayment for their 
debt obligations include tariffs, usage fees, and cash flows from government-owned 
enterprises. The size and scope of public goods and services provided by national, 
versus regional or local, governments vary widely among markets, as does the degree 
of government involvement in the economy. Similar to private sector issuers, a gov -
ernment’s “economic balance sheet” may be used to illustrate the sources and uses 
of funding, as shown in Exhibit 1, which also includes activities of the central bank.
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 Fix ed-Income Markets for Government Issuers108
Exhibit 1: Government “Balance Sheet”
Domestic Currency
Outstanding
Short-Term
DebtFixed Assets
– Infrastructure
– Land
– Government-
 Owned Firms
Short-Term Claims
and Assets
Commodity and
 Other Reserves
FX Reserves
Supranational and
External Obligations
Pension and Other
Domestic Obligations
Claims:
Expected
Future Tax
Revenues
Obligations:
Promised
Future
Expenditures
Economic
Balance
Sheet
Financial
Balance
Sheet
Borrowed
Capital
(Debt)
Long-Term Debt
– Domestic Currency
– Foreign Currency
While private issuers prepare and file periodic financial statements in accordance with 
generally accepted accounting principles (GAAP), public sector financial accounting 
standards vary widely and are often prepared using cash, rather than accrual-based, 
principles, typically excluding such items as the depreciation of fixed public goods, 
such as federal highways, or the accrual of unfunded liabilities, such as government 
pension obligations. In contrast, the economic balance sheet in Exhibit 1 includes 
expected future claims and obligations and is therefore of greater relevance for public 
versus private sector issuers.
The relative size of the government sector as a proportion of the domestic econ-
omy varies widely among nations, and the allocation of these activities between the 
national government itself, quasi-government agencies, and local governments also 
differs among countries. As a result, this gives rise to non-sovereign issuers based in 
the same jurisdiction as the sovereign issuer, a topic discussed in Lesson 3.
A key distinction among national government issuers is the difference between 
developed market and emerging market sovereign issuers.
 ■ Developed market (DM) sovereign issuers: DMs are characterized by a 
strong, stable, well-diversified domestic economy. DM national government 
budgets primarily comprise consistent, recurrent outlays financed with 
broad-based individual an`,
    },
    {
      number: 6,
      title: `Fixed-Income Bond Valuation: Prices and Yields`,
      pages: 30,
      los: `Mastery The candidate should be able to:
calculate a bond’s price given a yield-to-maturity on or between
identify the relationships among a bond’s price, coupon rate,
maturity, and yield-to-maturity
describe matrix pricing`,
      intro: `We will now use discounted cash flow analysis to calculate bond prices and show 
how the discount rate used as well as a bond’s features, such as its coupon rate and 
time-to-maturity, affect pricing. The price of a bond and its future cash flows can be 
used calculate an internal rate of return, known as the yield-to-maturity, which serves 
as a useful return measure for fixed-income investors under certain assumptions. One 
of these assumptions that applies to this learning module is that all bond interest and 
principal cash flows occur as promised. We will explore the relationship between 
bond prices and bond features, showing how different features affect a bond’s price, 
and demonstrate pricing both on and between bond coupon dates. Finally, we will 
introduce matrix pricing, which uses comparable bonds to estimate a bond’s price 
and yield-to-maturity when neither is known.
Most of the examples and exhibits used throughout the reading can be downloaded 
as a Microsoft Excel workbook. Each worksheet in the workbook is labeled with the 
corresponding example or exhibit number in the text.`,
      overview: `■ Bond pricing is an application of discounted cash flow analysis. 
Bond prices are a function of a bond’s features, including its 
cash flows and the interest rate(s) used to discount future cash flows.
 ■ By comparing a bond’s price to its face value or its coupon rate to the 
discount rate, we can identify whether a bond is trading at a discount, 
at par, or at a premium.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Bond pricing is an application of discounted cash flow analysis. 
Bond prices are a function of a bond’s features, including its 
cash flows and the interest rate(s) used to discount future cash flows.
 ■ By comparing a bond’s price to its face value or its coupon rate to the 
discount rate, we can identify whether a bond is trading at a discount, 
at par, or at a premium.
1
LEARNING MODULE
6
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 Fix ed-Income Bond Valuation: Prices and Yields126
 ■ If the market price of a bond is known, an internal rate of return 
on the cash flows can be calculated, known as the yield-to-maturity 
(YTM). The YTM is the single interest rate that equates the present 
value of future cash flows to the price of the bond.
 ■ A bond investor’s rate of return will equal the YTM if (1) the investor 
holds the bond to maturity, (2) the issuer makes full coupon and prin-
cipal payments on the scheduled dates, and (3) the investor reinvests 
all coupon payments at the same YTM.
 ■ When a bond is priced or traded in between coupon dates, an addi-
tional amount must be added for interest that has accrued since the 
last coupon payment, to compensate the seller, since the buyer will 
receive the entire next coupon payment.
 ■ To calculate a bond’s accrued interest on any date, we multiply the 
coupon by the fraction of days elapsed in the coupon period divided 
by the total days in the coupon period. There are various conventions 
for counting these days; two common conventions are actual/actual 
and 30/360.
 ■ A bond’s price changes inversely with changes in its YTM. A bond’s 
features determine price sensitivity to changes in YTM.
 ■ The lower the coupon rate on a fixed-coupon bond, the greater the 
percentage price change for a given change in the bond’s yield-to-ma-
turity. Generally, the longer a bond’s time-to-maturity, the greater its 
percentage price change for a given change in its yield-to-maturity.
 ■ Unlike listed equity securities, most bonds are thinly traded, which 
complicates price discovery.
 ■ Matrix pricing is a price estimation process for new or illiquid bonds 
that uses yields on securities with the same or similar features. Matrix 
pricing is widely used in price quotations for bonds.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. A cor
porate bond that matures on 1 January 2035 pays semiannual coupons 
of 3.25% per year and has a face value of 100. The market discount rate is 
4.0%. For a trade settlement date of 1 January 2030, the price of the bond as 
a percentage of par value, assuming a 30/360 day count, is closest to: 
A.
 96.632.
B. 96.661.
C. 103.436.
Solution:
A i
s correct. The bond price is the sum of the coupon and principal pay-
ments discounted at the market discount rate.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 127
 PV = PMT1/(1 + r)1 + PMT2/(1 + r)2 + … + (PMT N + FVN)/(1 + r)N,
where
PMT =1.625
r = 0.02
FV = 100
N = 10
   PV =   1.625 _  (1 + 0.02)   1    +   1.625 _  (1 + 0.02)   2    +   1.625 _  (1 + 0.02)   3    +   1.625 _  (1 + 0.02)   4    +   1.625 _  (1 + 0.02)   5   +       
 
   
    1.625 _  (1 + 0.02)   6    +   1.625 _  (1 + 0.02)   7    +   1.625 _  (1 + 0.02)   8    +   1.625 _  (1 + 0.02)   9    +   101.625 _  (1 + 0.02)   10    
  PV = 96.632. 
Note: Q
uantities in the calculation are not rounded, though they are shown 
with three decimal places for presentation purposes. Solutions are rounded 
to three decimal places.
The calculation can also be done using the PV or PRICE functions in Micro-
soft Excel and Google Sheets:
=-PV(rate, nper, pmt, [FV], type)
=-PV(0.02,10,1.625,100,0)
= 96.632
=PRICE(settlement, maturity, rate, yield, redemp-
tion, frequency, [basis])
=PRICE(DATE(2030,1,1),DATE(2035,1,1),0.0325,0.04,100,2)
= 96.632
2.
 Which of t
he following is not required for a bond investor’s rate of return on 
a bond investment to equal the bond’s YTM? 
A. The bond i
s held to maturity.
B. The issuer ma
y default on one, but only one, coupon payment.
C. Coupon p
ayments are reinvested at the same rate as the YTM.
Solution:
B is correct. For a bond investor to earn the YTM, the issuer must make all 
coupon and principal payments on their scheduled dates.
A is incorrect because a bond investor does have to hold the bond to matu-
rity to earn the YTM.
C is incorrect because a bond investor does have to reinvest coupons at the 
same rate as the YTM to earn the YTM.
3.
 A thr
ee-year sovereign bond issued on 1 January 2030 pays semiannual cou-
pons of 1.5% per year on 30 June and 31 December each year and has a face 
value of 100. The market discount rate is 2.0%. For a trade settlement date 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 Fix ed-Income Bond Valuation: Prices and Yields128
of 29 August 2031, the flat price of the bond as a percentage of par value, 
assuming an actual/actual day count, is closest to: 
A. 99.343.
B. 99.587.
C. 99.832.
Solution:
A i
s correct. The flat price is the full price less accrued interest. The full 
price is the present value as of the trade settlement date, which involves 
partial payment periods because we’re between coupon dates.
  P  V   Full  =   PMT _   (1 + r)    1−t/T    +   PMT _   (1 + r)    2−t/T    + ⋯ +   PMT + FV _   (1 + r)    N−t/T   . 
Here
,
PMT = 0.75
r = 0.01
t = 60 (days from 30 June 2031 to 29 August 2031)
T = 184 (days from 30 June 2031 to next coupon on 31 December 2031)
FV = 100
N = 3
  P  V  Full   =   0.75 _____________   (1 + 0.01)   1−60/184    +   0.75 _____________   (1 + 0.01)   2−60/184     100.75 _____________   (1 + 0.01)   3−60/184    
  P  V  Full   = 99.587. 
Ac
crued interest is the proportional share of the next coupon payment owed 
the seller.
  AI =   t _ T   × PMT, 
  AI =   60 _ 184   × 0.75 
  AI = 0.245. 
The fla
t price is 99.587 – 0.245 = 99.343.
The present value calculations can also be done easily on spreadsheet 
software. Additionally, the PRICE function in Microsoft Excel and Google 
Sheets can be used to directly solve for the flat price (note: not full prices).
=PRICE(settlement, maturity, rate, yield, redemp-
tion, frequency, [basis])
=PRICE(DATE(2031,8,29),DATE(2032,12,31),0.015,0.02,100,2)
= 99.343.
4.
 Tr
ue or false: A bond’s quoted price is also called its full price because it is 
the amount that the buyer pays the seller.
A. Tru
e
© CFA Institute. For candidate use only. Not for distribution.
Bond Pricing and the Time Value of Money 129
B. False
S
olution:
False. A bond is quoted by its flat price. The full price is the amount paid by 
the buyer to the seller, and it includes accrued interest if settlement does not 
occur on a coupon payment date.
5.
 Assume t
hat the Japanese government issues two non-callable fixed-coupon 
bonds on the same date with the same coupon rate. The bonds are identical 
except that one matures in 10 years and the other matures in 30 years. If the 
relevant market discount rates for both bonds rise by 65 bps, which of the 
following will be true? 
A.
 The 10-ye
ar bond will have a larger percentage price change than the 
30-year bond.
B. The 10-ye
ar bond will have a smaller percentage price change than the 
30-year bond.
C. The 10-ye
ar bond and the 30-year bond will have equal percentage 
price changes.
Solution:
B is correct. Generally, for the same coupon rate, a shorter-term bond will 
have a smaller percentage price change than a longer-term bond when their 
relevant market discount rates change by the same amount.
A is incorrect because generally a shorter-term bond will have a smaller per-
centage price change than a longer-term bond when their market discount 
rates change by the same amount.
C is incorrect because shorter-term bonds and longer-term bonds will not 
have the same percentage price changes when t`,
    },
    {
      number: 7,
      title: `Yield and Yield Spread Measures for Fixed-Rate Bonds`,
      pages: 30,
      los: `Mastery The candidate should be able to:
calculate annual yield on a bond for varying compounding periods in
compare, calculate, and interpret yield and yield spread measures for`,
      intro: `Earlier lessons demonstrated the relationship between bond prices and yields-to-maturity 
(YTMs), as well as other features, such as coupon rate and time-to-maturity. Two 
important considerations for interpreting and determining yields-to-maturity and 
other yield measures are the assumed frequency of compounding interest and the 
presence of embedded options that could affect cash flow amounts or timing. This 
module explores these considerations and extends the analysis of yields by introducing 
spread measures, which compare yields to benchmark rates to ascertain how much 
an investor would be compensated for taking certain risks.
Most of the examples and exhibits used throughout the reading can be downloaded 
as a Microsoft Excel workbook. Each worksheet in the workbook is labeled with the 
corresponding example or exhibit number in the text.`,
      overview: `■ Yields-to-maturity allow analysts to use a single measure to 
compare bonds with varying maturities and coupons. An 
important factor in yield determination and interpretation is the fre-
quency of compounding, known as periodicity.
 ■ All else equal, more frequent compounding results in greater future 
values or returns. Therefore, compounding more frequently at a lower 
rate can be equivalent to compounding less frequently at a higher rate; 
the more frequent compounding makes up for the lower rate.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Yields-to-maturity allow analysts to use a single measure to 
compare bonds with varying maturities and coupons. An 
important factor in yield determination and interpretation is the fre-
quency of compounding, known as periodicity.
 ■ All else equal, more frequent compounding results in greater future 
values or returns. Therefore, compounding more frequently at a lower 
rate can be equivalent to compounding less frequently at a higher rate; 
the more frequent compounding makes up for the lower rate.
1
LEARNING MODULE
7
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 Yield and Yield Spread Measures for Fixed-Rate Bonds156
 ■ Prices and yields of bonds with embedded options require adjustments 
to reflect the value of the option. The option-adjusted yield spread and 
yield-to-worst are measures that reflect option values.
 ■ Yield measures for a bond, as well as changes in them, can be decom-
posed into a benchmark rate and a spread over the benchmark rate. 
Benchmark rates reflect macroeconomic, “top-down” conditions that 
affect all bonds in a market, while spreads capture issuer-specific, 
“bottom-up” factors, such as credit risk, liquidity, and taxation.
 ■ Similar to how a yield curve graphically depicts the relationship 
between yields-to-maturity and times-to-maturity for securities with 
the same risk profile, benchmark rates and spreads can be graphed by 
time-to-maturity as well, to show the term structure of credit spreads.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. Comple
te the sentences by filling in the blanks using the following words: 
annualized
compounded
standardized
Both capital market securities’ yields and money market rates with maturity 
dates shorter than one year are _________________. However, money mar-
ket rates are not ________________.
Solution:
Both capital market securities’ yields and money market rates with maturity 
dates shorter than one year are annualized. However, money market rates 
are not compounded.
2.
 A thr
ee-year sovereign non-callable bond is priced at 106.24 per 100. The 
bond pays a 2% semiannual coupon. The annual yield-to-maturity for the 
bond is closest to: 
A.
 0.077%.
B. 0.039%.
C. 1.883%.
Solution:
A i
s correct. Given that the bond pays coupons semiannually, the semiannu-
al yield-to-maturity is calculated by solving for r in the following equation. 
Additionally, the IRR or YIELD functions in Microsoft Excel and Google 
Sheets can be used.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 157
   106.24 =   1 _  (1 + r)   1    +   1 _  (1 + r)   2    +   1 _  (1 + r)   3    +   1 _  (1 + r)   4    +   1 _  (1 + r)   5    +   101 _  (1 + r)   6   .       
r = − 0.00038596.
   
Given tha
t the yield is expressed in semiannual terms, it needs to be annual-
ized by multiplying by 2, which results in –0.000772, or –0.077%.
B is incorrect because it is the semiannual, not annual, yield.
C is incorrect because 1.883% is the bond’s current yield, not 
yield-to-maturity.
3.
 A fix
ed-income analyst obtains the following data for three corporate bonds 
with the same maturity dates. The relevant government bond benchmark 
rate, calculated on a semiannual bond equivalent basis, is 1.10%. Calculate 
the G-spread for each bond. 
 
Bond A Bond B Bond C
Yield-to-maturity 1.271% 1.213% 1.178%
Coupon frequency and 
assumed periodicity
Annual Semiannual Quarterly
 
Solution:
The G-spread for Bond B is (0.01271 – 0.011) = 173 bps.
Before computing the G-spreads for Bonds A and C, the yields-to-maturity 
must first be converted to a periodicity of two. The semiannual equivalent 
yield for Bond A is 1.267%:
   
  (1 +   
AP  R  m  
 _ m  )    
m
  =   (1 +   
AP  R  n  
 _ n  )    
n
 .
      (1 +   0.01271 _ 1  )    
1
  =   (1 +   
AP  R  2  
 _ 2  )    
2
 .    
AP  R  2   = 0.01267 = 1.267 % .
   
Thu
s, its G-spread is (0.01267 – 0.011) = 167 bps.
The semiannual equivalent yield for Bond C is 1.1797%:
   
  (1 +   
AP  R  m  
 _ m  )    
m
  =   (1 +   
AP  R  n  
 _ n  )    
n
 .
      (1 +   0.01178 _ 4  )    
4
  =   (1 +   
AP  R  2  
 _ 2  )    
2
 .    
AP  R  2   = 0.011797 = 1.1797 % .
   
Thu
s, its G-spread is (0.011797 – 0.011) = 8 bps.
4. If a bond ha
s an embedded call option and the value of the call option is 
positive, the option-adjusted price, compared to the flat price of the bond, is 
most likely: 
A. lower.
B. the same.
C. higher
.
Solution:
A is correct. The value of the call option is the price of the option-free bond 
minus the price of the callable bond. If the value of the call option is posi-
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 Yield and Yield Spread Measures for Fixed-Rate Bonds158
tive, then the option-adjusted price is lower compared to the flat price of the 
bond.
B is incorrect because if the value of the call option is positive, the op-
tion-adjusted price compared to the flat price of the bond is lower, not the 
same.
C is incorrect because if the value of the call option is positive, the op-
tion-adjusted price compared to the flat price of the bond is lower, not 
higher.
PERIODICITY AND ANNUALIZED YIELDS
calculate annual yield on a bond for varying compounding periods in 
a year
Investors analyzing bonds with various cash flow and maturity profiles seek a stan -
dardized yield measure to compare across different choices. Yield measures are usu-
ally annualized in order to allow a direct comparison. For capital market securities 
maturing in more than one year, investors want an annualized  and compounded  
yield-to-maturity. Conventions for instruments maturing in one year or less will be 
covered in a later lesson.
An annualized and compounded yield on a fixed-rate bond depends on the assumed 
number of interest periods in the year, which is called the periodicity of the annual 
rate. The periodicity typically matches the frequency of coupon payments. For exam-
ple, the fixed-coupon five-year bond issued by Bright Wheels Automotive (BRWA) 
from earlier lessons pays semiannual coupons with a stated annual yield-to-maturity 
of 3.2% for a periodicity of 2—the rate per semiannual period (1.6%) times 2. A bond 
that pays quarterly coupons has a stated annual yield for a periodicity of 4—the rate 
per quarter times 4.
Exhibit 1 shows how a 5% stated annual yield-to-maturity generates different 
amounts in one year with annual, semiannual, quarterly, monthly compounding based 
on a fixed-rate par bond priced at 100.
2
© CFA Institute. For candidate use only. Not for distribution.
Periodicity and Annualized Yields 159
Exhibit 1: Effective Annual Rate for Different Compounding Periods
Time
t = 0
Periodicity
(Rate per Period)
Bond interest at year end
(Price = 100)
t = 1
Annual
(5.00%)
5.00
Semi-annual
(2.50%)
5.0625
Quarterly
(1.25%)
5.0945
Monthly
(0.4167%)
5.1162
The bond interest amounts on the right-hand side of Exhibit 1 expressed as percentages 
are known as effective annual rates. An effective annual rate has a periodicity of 1 
because there is just one compounding period in the year. For example, for a quarterly 
coupon bond that pays 1.25% per period, or an annual coupon rate of (1.25% × 4) 
= 5%, each coupon received is assumed to be reinvested at the periodic rate—here, 
1.25%—for the remainder of the year. We can solve for the future value of these cash 
flows using the Excel or Google Sheets FV function:
 =FV(rate, nper, pmt, [pv], [type]),
where
 rate
 is the periodic reinvestment rate
 nper
 is the number of periods in a year
 pmt
 is the rate per period
 [pv
] is the present value
 [type
] indicates when payments occur, with 0 designating payment at the end 
of each period
For the quarterly coupon bond:
 =FV(0.0125,4,1.25,0,0) = 5.0945.
Theref
ore, assuming each coupon is reinvested at 1.25% through the end of the 
year, a qu`,
    },
    {
      number: 8,
      title: `Yield and Yield Spread Measures for Floating-Rate Instruments`,
      pages: 22,
      los: `Mastery The candidate should be able to:
calculate and interpret yield spread measures for floating-rate
calculate and interpret yield measures for money market instruments`,
      intro: `Prior lessons covered pricing, yields, and spreads for bonds with fixed coupon rates and 
times-to-maturity of one year or longer. The next two lessons broaden the discussion 
to include instruments with variable rather than fixed coupons, known as floating-rate 
instruments, and those with original maturities of one year or less, known as money 
market instruments. Both types of instrument are important for investors and issuers. 
Floating-rate instruments, by adjusting cash flows to changes in interest rates, bear 
less price risk than fixed-rate instruments and are used to hedge certain exposures 
and to match asset and liability cash flows. Most loans are floating-rate instruments. 
Money market instruments are a significant source of short-term financing for many 
types of issuers. A short time-to-maturity means that investors can reinvest and issuers 
can refinance relatively quickly, which reduces interest rate risk.
Most of the examples and exhibits used throughout the reading can be downloaded 
as a Microsoft Excel workbook. Each worksheet in the workbook is labeled with the 
corresponding example or exhibit number in the text.`,
      overview: `■ A floating-rate instrument is a debt instrument with interest 
determined by an observed market reference rate (MRR) plus 
a quoted margin. Interest payments are reset, capturing any change in 
the MRR, on predetermined dates.
 ■ The quoted margin is a specified spread over or under the reference 
rate. The required margin, also known as the discount margin, is the 
spread required by investors.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ A floating-rate instrument is a debt instrument with interest 
determined by an observed market reference rate (MRR) plus 
a quoted margin. Interest payments are reset, capturing any change in 
the MRR, on predetermined dates.
 ■ The quoted margin is a specified spread over or under the reference 
rate. The required margin, also known as the discount margin, is the 
spread required by investors.
1
LEARNING MODULE
8
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 8 Yield and Yield Spread Measures for Floating-Rate Instruments186
 ■ The required margin reflects “bottom-up” or issuer- and security-spe-
cific risks and is analogous to a yield spread for a fixed-rate bond 
discussed in prior lessons. If a floater trades at par, the quoted and 
required margins are equal.
 ■ Money market instruments have original maturities of one year or less 
and are quoted using different conventions from those of longer-dated 
securities. Quotes are made on a discount rate or add- on rate basis.
 ■ Money market discount rates are interest income divided by the face 
value (maturity value). They understate the investor’s rate of return if 
the purchase price is below the face value and vice versa.
 ■ Conventional money market measures can be converted to enhance 
comparability to longer-term securities.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. The follow
ing information relates to three floating-rate notes (FRNs) issued 
at par value that have the three-month MRR as their reference rate. 
 
Floating-Rate Note Quoted Margin Discount Margin
FRN 1 140 bps 128 bps
FRN 2 145 bps 145 bps
FRN 3 150 bps 165 bps
 
Based on the information provided, identify which FRN will be priced at a 
discount on the next reset date.
A. FRN 1
B. FRN 2
C. FRN 3
S
olution:
C is correct. FRN 3 will be priced at a discount on the next reset date since 
its quoted margin of 150 bps is less than its discount margin of 165 bps. The 
discount amount is the present value of the deficient future interest pay-
ments of 15 bps per quarter (150 bps – 165 bps).
B is incorrect because FRN 2 will be priced at par value on the next reset 
date since its quoted margin is equal to its discount margin.
A is incorrect because FRN 1 will be priced at a premium because its quoted 
margin of 140 bps is greater than its discount margin of 128 bps. The premi-
um amount is the present value of the extra, or “excess, ” interest payments of 
12 bps each quarter (140 bps – 128 bps).
2.
 On a re
set date, if the required margin falls to 30 bps because of a change 
in the issuer’s credit risk, an FRN that has a quoted margin of 50 bps will be 
priced at a: 
A.
 dis
count.
B. premium.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 187
C. discount or premium, depending on its duration.
S
olution:
B is correct. The required margin reflects the credit risk of the issuer. It de-
clined, meaning that the credit risk of the issuer improved; in other words, 
the market demands a lower spread. The required margin is below the quot-
ed margin, so this floater will be priced at a premium.
3.
 A 365-da
y year bank certificate of deposit has an initial principal amount of 
USD96.5 million and a redemption amount due at maturity of USD100 mil-
lion. The number of days between settlement and maturity is 270. The add-
on rate of the certificate of deposit is closest to: 
A.
 3.63%.
B. 4.82%.
C. 4.90%.
Solution:
C i
s correct. The add-on rate is closest to 4.90%. The add-on rate is calculat-
ed as
   
AOR =   Year _ Days   ×   FV − PV _ PV  .
   
 
  AOR =   365 _ 270   ×   100 − 96.5 _ 96.5  .    
 
  
AOR = 0.04903 = 4.90 % .
  
4. A 90-da
y commercial paper instrument is quoted at a discount rate of 
0.120%, assuming a 360-day year. Given that the price of the instrument is 
paid 100 per face value, its bond equivalent yield rate is closest to: 
A. 0.107%.
B. 0.120%.
C. 0.135%.
Solution:
B i
s correct. The bond equivalent yield is closest to 0.120%. First, we need to 
calculate the price of the instrument. Then, we can calculate the AOR or its 
bond equivalent yield.
The price (PV) of the commercial paper instrument is
   
PV = FV × (1 −   
Days
 _ Year   × DR ) .
    
 
  PV = 100 × (1 −   90 _ 360   × 0.0012 ) .    
 
  
PV = 99.97.
   
PV i
s used to calculate the add-on rate or bond equivalent yield:
   
AOR =   Year _ Days   ×   FV − PV _ PV  .
   
 
  AOR =   360 _ 90   ×   100 − 99.97 _ 99.97  .    
 
  
AOR = 0.0012 = 0.12 % .
  
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 8 Yield and Yield Spread Measures for Floating-Rate Instruments188
5. A fixed-income analyst is evaluating two instruments: 
 ■ A 180-day Thai bank certificate of deposit (CD) quoted at a discount 
rate of 5.95%, assuming a 360-day year and a bond equivalent yield of 
6.218%
 ■ A 180-day Thai corporate commercial paper (CP) quoted as an add-on 
rate of 6.10%, assuming a 365-day year and a bond equivalent yield of 
6.100%.
Assuming the six-month Thai T-bill is quoted at 4.36%, which instrument 
most likely has higher credit risk?
Solution:
The Thai CD. The spreads over the Thai T-bill for the CD and CP are 186 
bps and 174 bps, respectively. We use the bond equivalent yield measure to 
compare the return of each instrument and derive the spread of each one 
over the Thai T-bill.
The Thai bank CD has a spread of
 6.218% – 4.36% = 186 bps.
And the Thai c
orporate CP has a spread of
 6.10% – 4.36% = 174 bps.
Theref
ore, the Thai bank CD has a higher credit risk than the Thai corporate 
C P.
YIELD AND YIELD SPREAD MEASURES FOR 
FLOATING-RATE NOTES
calculate and interpret yield spread measures for floating-rate 
instruments
Yield and Yield Spread Measures for Floating-Rate Instruments
Floating-rate instruments, including floating-rate notes (FRNs or floaters) and most 
loans, are different from fixed-rate bonds. Rather than fixed coupon payments, they 
vary from period to period depending on the current level of a reference interest rate. 
The intent is to both automatically adjust a borrower’s base rate to market conditions 
and offer an investor or lender less price risk when market interest rates fluctuate. In 
principle, a floater has a stable price even in a period of volatile interest rates because 
cash flows adjust with changes in interest rates. With a traditional fixed-income security, 
constant future cash flows result in price changes in response to interest rate volatility.
Exhibit 1 shows the term sheet for four-year FRNs issued by Antelas AG, the 
German emerging technology company focused on manufacturing process design, 
introduced in an earlier lesson.
2
© CFA Institute. For candidate use only. Not for distribution.
Yield and Yield Spread Measures for Floating-Rate Notes 189
Exhibit 1: Antelas AG Floating-Rate Note Issue
Antelas AG Four-Y ear Floating-Rate Notes (the “Notes”) 
Prospectus Summary
Issuer: Antelas AG
Settlement Date: [T + 5 Business Days]
Maturity Date: [Four Years from Settlement Date]
Principal Amount: EUR250 million
Interest: 
Interest Payment:
MRR plus 250 bps p.a.  
MRR is reset quarterly and interest is paid quarterly  
Commencing three months from [Settlement Date] to be paid 
quarterly with final payment on [Maturity Date]
Seniority: The Notes are secured and unsubordinated obligations of Antelas 
AG and will rank pari passu with all other secured and unsubor -
dinated indebtedness
Business Days: Frankfurt
Notice how the interest is stated “MRR plus 250 bps p.a. ” The market reference rate 
(MRR) on an FRN or loan usually is a short-term money market rate. Typically, the 
reference rate is determined at the beginning of the period, and the interest payment 
is made at the end of the period. This payment structure is called “in arrears. ” The 
most common day-count conventions for calculating accru`,
    },
    {
      number: 9,
      title: `The Term Structure of Interest Rates: Spot, Par, and Forward Curves`,
      pages: 28,
      los: `Mastery The candidate should be able to:
define spot rates and the spot curve, and calculate the price of a
bond using spot rates
define par and forward rates, and calculate par rates, forward rates
from spot rates, spot rates from forward rates, and the price of a
bond using forward rates
compare the spot curve, par curve, and forward curve`,
      intro: `Prior lessons priced fixed-income instruments by discounting all future cash flows 
using a single interest rate, such as the yield-to-maturity or a market reference rate 
(MRR) plus a discount margin. The next three lessons relax this assumption by intro-
ducing the term structure of interest rates, or the fact that interest rates vary with 
time-to-maturity. The ideal data to use for term structure analysis are default-risk-free 
zero-coupon bonds, known as spot rates or the spot curve. Since these are generally 
not directly observable, various estimation techniques are used. The spot curve is used 
to derive two other important yield curves: the par curve and the forward curve. A 
par curve involves bond yields for hypothetical benchmark securities priced at par, 
while the forward curve involves rates for interest periods starting in the future. All 
three of these curves are fundamental to fixed-income analysis and other applications 
because they represent default-risk-free rates of return for time periods that start 
today and in the future. We show the pricing of bonds using these different rates and 
establish their relationships.`,
      overview: `■ Spot rates are market discount rates on default-risk-free 
zero-coupon bonds, sometimes referred to as zero rates. By 
using a sequence of spot rates in calculating bond prices, a no-arbi-
trage bond price is obtained.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Spot rates are market discount rates on default-risk-free 
zero-coupon bonds, sometimes referred to as zero rates. By 
using a sequence of spot rates in calculating bond prices, a no-arbi-
trage bond price is obtained.
1
LEARNING MODULE
9
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 9 The Term Structure of Interest Rates: Spot, Par, and Forward Curves208
 ■ A par rate is the market discount rate for a specific maturity that 
would result in a bond priced at par. A par rate is derived from the 
spot rates up to and including the maturity date.
 ■ Implied forward rates are calculated using spot rates and can be 
interpreted as an incremental, or marginal, return for extending the 
time-to-maturity for an additional time period. As such, they reflect a 
breakeven reinvestment rate.
 ■ Since par and forward rates can be derived from spot rates, the shape 
of the spot curve is closely related to the shape of the par and forward 
curves.
 ■ In upward-sloping term structures, par rates will be lower than their 
corresponding spot rates and forward rates will be greater than spot 
rates. In downward-sloping term structures, par rates will be greater 
than spot rates and forward rates will be lower than spot rates.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Calc
ulate the price and yield-to-maturity (YTM) of a 1% coupon, three-year 
bond with par value of 100 given the following spot rates:
 
1-year 1.0%
2-year 1.5%
3-year 2.0%
 
Solution:
The price is 97.135:
   
PV =   PMT _   (1 +  Z  1  )    1    +   PMT _   (1 +  Z  2  )    2    + ⋯ +   PMT + FV _   (1 +  Z  N  )    N   
        
PV =   1 _   (1 + 0.01)    1    +   1 _   (1 + 0.015)    2    +   101 _   (1 + 0.02)    3   
   
 PV = 97.135
The Y
TM is 1.993%:
   
PV =   PMT _   (1 + r)    1    +   PMT _   (1 + r)    2    + ⋯ +   PMT + FV _   (1 + r)    N   
        
97.135 =   1 _   (1 + r)    1    +   1 _   (1 + r)    2    +   101 _   (1 + r)    3   
   
 r = 0.01993 = 1.993%
2. Define wha
t a par rate represents in the context of bond pricing.
Solution:
The par rate is the yield-to-maturity that makes the present value of a bond’s 
cash flows (i.e., its price) equal to its par or face value.
© CFA Institute. For candidate use only. Not for distribution.
Maturity Structure of Interest Rates and Spot Rates 209
3. Calculate an implied one-year forward rate two years from now (i.e., 2y1y) 
g
iven the following spot rates, assuming annual compounding: 
 
1-year 1.0%
2-year 1.5%
3-year 2.0%
 
Solution:
 (1 + ZA)A × (1 + IFR A,B – A)B − A = (1 + Z B)B.
 (1 + 0.01)1 × (1 + IFR 2,1)2 = (1 + 0.02) 3.
 IFR2,1 = 3.01%.
4. Ex
plain the economic meaning of the forward rate result calculated in Ques-
tion 3. 
Solution:
The one-year forward rate two years from now (2y1y) of 3.01% implies that 
investors expect the one-year interest rate to be 3.01% at the end of two 
years. This reflects the rate at which reinvestment would yield the same 
results over a three-year horizon regardless of whether the investor initially 
bought a two-year bond versus a three-year bond.
5.
 Contra
st spot and forward rates. 
Solution:
Spot rates reflect borrowing and investing rates for funds immediately (or in 
the next few days) over the specified tenor, while forward rates reflect rates 
applicable to agreements to borrow or invest beginning on a future date for 
a specified tenor.
6.
 Tr
ue or false: One-year forward rates are higher compared to their corre-
sponding spot rates when the spot rate curve is downward sloping. 
A. Tru
e
B. Fal
se
Solution:
False. When the spot curve is downward sloping, the one-year forward 
rate curve will lie below the spot rate curve. Declining spot rates for longer 
maturities imply that investors should expect lower rates of reinvestment in 
future years, and the forward curve reflects these expectations.
MATURITY STRUCTURE OF INTEREST RATES AND 
SPOT RATES
define spot rates and the spot curve, and calculate the price of a 
bond using spot rates
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 9 The Term Structure of Interest Rates: Spot, Par, and Forward Curves210
Maturity Structure of Interest Rates
Suppose that the yield-to-maturity is higher on one bond compared to another bond. 
There are several possible reasons for the difference, including credit risk, different 
currencies, liquidity, tax differences, and the periodicity assumption used in the yield 
calculation. Credit risk and currency differences were demonstrated in earlier lessons 
where Romania’s (Ministry of Finance) 30-year euro-denominated bonds were issued 
at a 4.657% yield-to-maturity, a 411 bp spread over Federal Republic of Germany 
bonds. Another reason bonds may have different yields-to-maturity is that they have 
different times-to-maturity. This factor explaining the differences in yields is called 
the maturity structure of interest rates or term structure of interest rates.
Term structure is best analyzed using bonds that have all the same properties other 
than time-to-maturity; that is, the bonds should be denominated in the same currency 
and have the same credit risk, liquidity, tax status, and periodicity assumption and 
they should have the same coupon rate so that they each have the same degree of 
coupon reinvestment risk. This ideal dataset would be yields-to-maturity on a series 
of default-risk-free zero-coupon bonds, known as spot rates, for a full range of matur-
ities. Developed market sovereign bonds are typically used for this purpose, because 
they represent the lowest default risk among issuers in a given market. Collectively, 
this dataset is the government bond spot curve, sometimes called the zero or “strip” 
curve (because the coupon payments are “stripped” off the bonds).
The government bond spot curve is ideal for analyzing maturity structure because 
it best meets the “other things being equal” assumption. These government bonds 
presumably have the same currency, credit risk, liquidity, and tax status. Most impor-
tantly, as zero-coupon bonds, they have no coupon reinvestment risk. A government 
bond spot curve is illustrated in Exhibit 1 for maturities ranging from 1 to 30 years. 
The annual yields are stated on a semiannual bond basis, which facilitates comparison 
to coupon-bearing bonds that make semiannual payments, like corporate bonds in 
many markets.
Exhibit 1: Government Bond Spot (Zero) Curve
Yield-to-Maturity (%)
6
5
4
3
2
1
0
0 305 15 2010 25
Time-to-Maturity (years)
© CFA Institute. For candidate use only. Not for distribution.
Maturity Structure of Interest Rates and Spot Rates 211
The spot curve in Exhibit 1 is upward sloping and flattens for longer times-to-maturity, 
meaning that the longer-term government bonds have higher yields than the shorter-term 
bonds. This pattern is typical under normal market conditions. Sometimes, a spot 
curve is downward sloping in that shorter-term yields are higher than longer-term 
yields. Such downward-sloping spot curves are called inverted yield curves. Theories 
that attempt to explain the shape of the yield curve and its implications for future 
financial market conditions are covered later.
While a spot curve comprised of zero-coupon government bonds is ideal for 
analysis, there are several practical issues to contend with. First, most actively traded 
government bonds make coupon payments. These coupon bonds might not have the 
same liquidity and tax status. Older (“seasoned”) bonds tend to be less liquid than 
newly issued debt because they are owned by “buy-and-hold” institutional and retail 
investors. Governments issue new debt for regular times-to-maturity—for instance, 
5-year and 10-year bonds. The current 6-year bond could be a 10-year bond that was 
issued four years ago. Also, because interest rates fluctuate, older bonds can be`,
    },
    {
      number: 10,
      title: `Interest Rate Risk and Return`,
      pages: 28,
      los: `Mastery The candidate should be able to:
calculate and interpret the sources of return from investing in a
describe the relationships among a bond’s holding period return, its
Macaulay duration, and the investment horizon;
define, calculate, and interpret Macaulay duration.`,
      intro: `Prior lessons on yield measures established that a fixed-income investor’s rate of 
return will equal a bond’s yield-to-maturity (YTM) under certain assumptions. In 
these lessons, we explore the sources of return for fixed-income investments and 
demonstrate investment returns in different scenarios, including the one embedded in 
the YTM calculations. Prior lessons also established interest rate risk. We show how 
investment horizon, in relation to a bond’s features, is a key determinant of interest 
rate risk for investors and how different investors in the same fixed-income invest -
ment can have different returns and views on risk. Finally, we introduce Macaulay 
duration, a weighted-average measure of the time to receipt for a bond’s cash flows, 
and demonstrate how holding a bond for its Macaulay duration balances reinvestment 
and price risks.`,
      overview: `■ There are three sources of return for fixed-rate bond inves -
tors: (1) coupon and principal payments, (2) reinvestment of 
coupons, and (3) gain or loss on the sale of the bond if the bond is sold 
prior to maturity.
 ■ The rate of return on a fixed-rate bond investment is found by using 
the holding period, the future value of coupons received, the sale price, 
and the purchase price to calculate a compounded, annualized rate of 
return.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ There are three sources of return for fixed-rate bond inves -
tors: (1) coupon and principal payments, (2) reinvestment of 
coupons, and (3) gain or loss on the sale of the bond if the bond is sold 
prior to maturity.
 ■ The rate of return on a fixed-rate bond investment is found by using 
the holding period, the future value of coupons received, the sale price, 
and the purchase price to calculate a compounded, annualized rate of 
return.
1
LEARNING MODULE
10
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 10  Inter est Rate Risk and Return236
 ■ If all cash flows are received at scheduled dates, coupons are rein-
vested at the same rate as a bond’s YTM, and the bond is held to 
maturity, an investor’s annualized compounded rate of return will 
equal the bond’s YTM. If any of those assumptions do not hold, the 
investor’s rate of return will vary.
 ■ Reinvestment risk and price risk are types of interest rate risk and have 
an inverse relationship. Reinvestment risk is the risk of decreasing 
reinvestment returns on cash flows, which occurs when interest rates 
fall. Price risk refers to declining prices and occurs when interest rates 
rise.
 ■ The longer the investment horizon, the more important reinvestment 
risk is relative to price risk. If an investor’s investment horizon equals 
the Macaulay duration of a bond, the risks equally offset each other.
 ■ Macaulay duration is the weighted-average time to receipt of a bond’s 
cash flows, where the weights of each cash flow in the calculation are 
each cash flow’s share of the bond’s full price (i.e., present value).
 ■ When the investment horizon is greater than (less than, equal to) a 
bond’s Macaulay duration, coupon reinvestment risk is higher than 
(lower than, equal to) the bond’s price risk.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. A sour
ce of risk for a buy-and-hold fixed-income investor, ignoring credit 
risk, is from:
A. ca
pital gain/loss on sale only.
B. coup
on reinvestment only.
C. neither c
apital gain/loss on sale nor coupon reinvestment.
Solution:
B is correct. Changes in interest rates during the holding period of the bond 
will impact returns from reinvestment of coupons.
A is incorrect because for a buy-and-hold investor, there is no risk of capital 
gain or loss since the investor is not selling the bond prior to maturity and 
will get the par value of the bond at the maturity date.
C is incorrect because a buy-and-hold investor’s returns are impacted by the 
rate earned on the reinvestment of coupons, or reinvestment risk.
2.
 A family offic
e purchases a six-year, 5.8% annual coupon eurobond priced at 
par for settlement on 15 December 2031. The bond matures on 15 Decem-
ber 2037. Immediately after the purchase of the bond, interest rates rise to 
6.5%. The family office sells the bond after three years. The family office’s 
total annualized return on the investment was closest to:
A.
 5.28%.
B. 5.80%.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 237
C. 6.50%.
Solution:
A i
s correct. The total annualized return is composed of the (1) coupon 
payments, (2) reinvestment of coupons, and (3) gain/loss on the sale. This is 
equal to 5.28%, as shown below.
The future value of the coupons including reinvestment is
 = –
FV(0.065, 3, 5.8, 0, 0) = 18.556.
The sale price of the bond after three years is
 = –
PV(0.065, 3, 5.8, 100, 0) = 98.146.
The realized return, r, is
  r =   (  FV _ PV  )    
  1 _ T  
  − 1. 
  r =   (  18.556 + 98.146  ____________ 100  )    
  1 _ 3  
  − 1. 
 r=0.0528=5.28%
B is inc
orrect because it would be the return if interest rates remained at 
5.8%.
C is incorrect because 6.5% is the interest rate at which the coupons will be 
reinvested, not the rate of return for the family office on the investment.
3.
 The ri
sk to an investor who buys a bond at par value and intends to sell it 
before the receipt of the first coupon payment, ignoring credit risk, is most 
likely from:
A.
 pric
e risk.
B. rein
vestment risk.
C. neither pr
ice risk nor reinvestment risk.
Solution:
A is correct. Changes in interest rates can affect the price of the bond and, 
therefore, the returns for the investor.
B is incorrect because if the investor intends to sell the bond before the 
receipt of the first coupon, then reinvestment risk is irrelevant because no 
coupons will be reinvested.
C is incorrect because the investor faces price risk.
4.
 Reinve
stment risk and price risk of a bond offset one another if an investor’s 
investment horizon is:
A. equ
al to the bond’s time-to-maturity.
B. equ
al to the bond’s Macaulay duration.
C. less t
han the bond’s Macaulay duration.
Solution:
B is correct. When the investment horizon is equal to the Macaulay dura-
tion, the gain (loss) from coupon reinvestment is offset by the loss (gain) in 
the price of the bond from changes in interest rates.
A is incorrect because if an investor holds a bond to maturity (ignoring 
credit risk), the investor faces no price risk but does face reinvestment risk. 
Therefore, reinvestment risk will dominate price risk.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 10  Inter est Rate Risk and Return238
C is incorrect because if the investment horizon is less than the Macaulay 
duration, price risk dominates reinvestment risk.
5. High
test Capital purchases a 15-year, 6.8% annual coupon bond and has an 
investment horizon of 7.0 years. The Macaulay duration of the bond is 9.85 
years. The duration gap at the time of purchase is closest to:
A.
 2.85.
B. 5.15.
C. 8.00.
Solution:
A i
s correct. The duration gap for a bond is the difference between its Ma-
caulay duration and the investor’s investment horizon: 9.85 – 7.0 = 2.85.
B is incorrect because it is the difference between the bond’s maturity and 
its Macaulay duration (15 – 9.85 = 5.15).
C is incorrect because it is the difference between the bond’s maturity and 
the investor’s investment horizon (15 – 7 = 8.00).
6.
 Consider a bond t
hat has two years remaining to maturity, a coupon of 4% 
paid semiannually, and a yield-to-maturity of 4.60%. Assuming it is 63 days 
into the first coupon period and a 30/360 basis, the bond’s annualized Ma-
caulay duration is closest to:
A.
 0.9419 years
.
B. 1.7666 years
.
C. 1.9416 years
.
Solution:
B is correct.
 
Period
Time to 
Receipt Cash Flow PV Weight
Time to 
Receipt × 
Weight
1.0000 0.6500 2.0000 1.9707 0.0198 0.0129
2.0000 1.6500 2.0000 1.9264 0.0193 0.0319
3.0000 2.6500 2.0000 1.8830 0.0189 0.0501
4.0000 3.6500 102.0000 93.8759 0.9420 3.4383
99.6559 1.0000 3.5331
Annualized 
MacDur
1.7666
 
The first cash flow’s time-to-receipt is (180-63)/180 = 0.65 periods from now 
as it is 63 days into the period. Each subsequent cash flow is received one 
period later after the first, so time-to-receipt = 0.65 + 1, 0.65 + 2, and so on.
7.
 Consider a bond t
hat has five years remaining to maturity, a coupon of 0% 
paid annually, and a yield-to-maturity of –0.38%. Assuming it is the issuance 
date and a 30/360 basis, the bond’s annualized Macaulay duration is closest 
to:
A.
 3.5361 years
.
B. 5.0000 years
.
© CFA Institute. For candidate use only. Not for distribution.
Sources of Return from Investing in a Fixed-Rate Bond 239
C. 6.3412 years .
Solution:
B is correct. No calculation is required, because the Macaulay duration of a 
zero-coupon bond is its time-to-maturity unless it is between coupon dates. 
To demonstrate, however, see the following table:
 
Period
Time to 
Receipt Cash Flow PV Weight
Time to 
Receipt × 
Weight
1.0000 1.0000 0.0000 0.0000 0.0000 0.0000
2.0000 2.0000 0.0000 0.0000 0.0000 0.0000
3.0000 3.0000 0.0000 0.0000 0.0000 0.0000
4.0000 4.0000 0.0000 0.0000 0.0000 0.0000
5.0000 5.0000 100.0000 100.9554 1.0000 5.0000
100.9554 1.0000 5.0000
 
SOURCES OF RETURN FROM INVESTING`,
    },
    {
      number: 11,
      title: `Yield-Based Bond Duration Measures and Properties`,
      pages: 30,
      los: `Mastery The candidate should be able to:
define, calculate, and interpret modified duration, money duration,
and the price value of a basis point (PVBP)
explain how a bond’s maturity, coupon, and yield level affect its`,
      intro: `Prior lessons explored two sources of interest rate risk—reinvestment risk and price 
risk—and demonstrated how holding a bond for its Macaulay duration balances them. 
This lesson and those that follow extend that discussion by introducing measures of 
price risk. Two broad categories of such measures exist: those that assume underlying 
bond cash flows are certain and measure price sensitivity to changes in a bond’s own 
yield, which are covered in these lessons, and those that introduce the possibility of 
a bond default and that measure price sensitivity to changes in a benchmark yield 
curve, which are covered in later lessons. This lesson will illustrate how the interest 
rate risk of a bond is a function of its features, including its time-to-maturity, coupon 
rate, and yield.
Most of the examples and exhibits used throughout the reading can be downloaded 
as a Microsoft Excel workbook. Each worksheet in the workbook is labeled with the 
corresponding example or exhibit number in the text.`,
      overview: `■ Duration is a quantitative measure of interest rate risk. There 
are several duration measures, including those that measure 
a bond’s price sensitivity to changes in its own yield-to-maturity and 
assume underlying cash flows are certain (yield duration) and those 
that measure changes in a benchmark yield curve, with less certain 
underlying cash flows (curve duration).
 ■ Macaulay duration, modified duration, money duration, and the price 
value of a basis point (PVBP) are yield duration measures.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Duration is a quantitative measure of interest rate risk. There 
are several duration measures, including those that measure 
a bond’s price sensitivity to changes in its own yield-to-maturity and 
assume underlying cash flows are certain (yield duration) and those 
that measure changes in a benchmark yield curve, with less certain 
underlying cash flows (curve duration).
 ■ Macaulay duration, modified duration, money duration, and the price 
value of a basis point (PVBP) are yield duration measures.
1
LEARNING MODULE
11
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 11  Yield-Based Bond D uration Measures and Properties264
 ■ Modified duration is the slope or first derivative of the price of a bond 
with respect to its yield-to-maturity, measuring the sensitivity of a 
bond’s price to changes in its yield-to-maturity. Modified duration can 
be calculated using a bond’s Macaulay duration and yield or through 
approximation.
 ■ Money duration is an extension of modified duration and incorpo-
rates the size of the bond position in currency terms. Related to this 
measure is the price value of a basis point, which is an estimate of the 
change in the price of a bond for a 1 bp change in the bond’s yield.
 ■ Duration can be used to estimate the change in the price of a bond 
in response to a change in yield, but it assumes a linear relationship 
between price and yield even though, in fact, the relationship is non-
linear. This is most evident when estimating price changes for large 
changes in yield and for bonds with certain features.
 ■ A bond’s features, including its time-to-maturity, coupon rate, and 
yield-to-maturity, determine its duration. Duration, for a given bond, 
is not static and decreases as the bond approaches maturity.
 ■ All else equal, a longer (shorter) time-to-maturity, a lower (higher) 
coupon rate, or a lower (higher) yield-to-maturity results in higher 
(lower) duration or higher (lower) interest rate risk.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. Mat
ch each of the following descriptions with the appropriate term:
 
Description Term
Present-value-weighted average time-to-receipt of a 
bond’s cash flows
i. Money duration
Used to estimate the percentage change in a 
bond’s price for a given change in the bond’s 
yield-to-maturity
ii. Price value per basis point
The product of the annualized modified duration 
and the full price of a bond
iii. Macaulay duration
Change in the full price of a bond for a 1 bp change 
in yield
iv. Modified duration
 
Solution:
Present value weighted average time-to-receipt of a bond cash flows match-
es with iii. Macaulay duration.
Used to estimate the percentage change in a bond’s price for a given change 
in the bond’s yield-to-maturity matches with iv. Modified duration.
The product of the annualized modified duration and the full price of a bond 
matches with i. Money duration. 
Change in the full price of a bond for a 1 bp change in yield matches with ii. 
Price value per basis point.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 265
2. If all other characteristics of a bond are held constant, an increase in the 
b
ond’s yield-to-maturity will most likely result in:
A. a dec
rease in the bond’s modified duration.
B. no change in t
he bond’s modified duration.
C. an incr
ease in the bond’s modified duration.
Solution:
A is correct. An increase in the bond’s yield-to-maturity will result in a low-
er modified duration because future cash flows are discounted at a higher 
rate, which reduces the present-value-weighted average of their time to 
receipt.
B is incorrect because duration is affected by the present value of the bond’s 
cash flows, which, in turn, is affected by the bond’s yield.
C is incorrect because an increase in the bond’s yield-to-maturity reduces 
the present value of each cash flow and hence reduces the bond’s duration.
3.
 Consider a bond w
ith an annualized modified duration of 4, a coupon of 5%, 
and a price of 95. The expected change in the price of the bond, per 100 of 
par value, for a 50 bp increase in the bond’s yield-to-maturity is closest to:
A.
 4.75.
B. 3.80.
C. 1.90.
Solution:
C i
s correct. The money duration is 380:
 MoneyDur = 
AnnModDur × PVFull.
 MoneyDur = 4.0 × 95.
 MoneyDur = 308.
Thi
s results in a change in price of –1.90 for a 50 bp increase in the bond’s 
yield:
	ΔPVFull	≈	−MoneyDur	×	ΔY ield.
	ΔPVFull	≈	−308	×	0.005.
	ΔPVFull	≈	−1.90.
The change in pr
ice is negative for the increase in the yield-to-maturity.
4. Two b
onds, Bond X and Bond Y, are identical except that Bond X has a low-
er coupon rate than Bond Y. Therefore:
A. the b
onds will have identical modified duration.
B. Bond X w
ill have a lower modified duration compared to Bond Y.
C. Bond Y w
ill have a lower modified duration compared to Bond X.
Solution:
C is correct. If two bonds are identical in all other respects (e.g., time-to-ma-
turity, yield, etc.), the bond with the lower coupon rate will have the higher 
modified duration. This is because, compared to Bond Y, the present value 
of each of Bond X’s coupon cash flows will make up less of the bond’s price, 
while the contribution to the price of the bond from the face value will be 
greater.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 11  Yield-Based Bond D uration Measures and Properties266
5. Estimating the price value per basis point by dividing the difference in the 
pr
ice of a bond for a 0.0001 decrease and a 0.0001 increase by 2 ignores:
A. con
vexity of the bond’s price–yield relationship.
B. conc
avity of the bond’s price–yield relationship.
C. sy
mmetry in the bond’s price–yield relationship.
Solution:
A is correct. This formulation of the price value of a basis point does not 
include an adjustment for convexity. This is important because the price 
change for increases and decreases in yields is asymmetric, owing to the 
convex relationship between price and yield.
6.
 The change in t
he price of a bond when its yield increases by 100 bps is best 
described as:
A. less t
han the change in price for a decrease in its yield by 100 bps.
B. the same a
s the change in price for a decrease in its yield by 100 bps.
C. gr
eater than the change in price for a decrease in its yield by 100 bps.
Solution:
A is correct. The price–yield relationship for most bonds is convex, such 
that the increase in the price of a bond is greater for yield decreases than a 
decrease in the price for the same yield increase.
MODIFIED DURATION
define, calculate, and interpret modified duration, money duration, 
and the price value of a basis point (PVBP)
Recall from prior lessons that the price of a bond moves inversely with its yield. We 
can illustrate this by pricing bonds at varying yields-to-maturity. Exhibit 1 shows 
prices for three bonds introduced in prior lessons at yields ranging from 0% to 10%. 
Assume all the bonds are denominated in the same currency.
 ■ 1-year, zero-coupon Australian government bond,
 ■ 5-year, 3.2% semiannual coupon Bright Wheels Automotive Corporation 
(BRWA) bond, and
 ■ 30-year, 4.625% annual coupon Romanian government bond.
2
© CFA Institute. For candidate use only. Not for distribution.
Modified Duration 267
Exhibit 1: Three Bond Prices at Varying Yields-to-Maturity
Bond price (percent of par)
300
250
200
0% Coupon, 1-year
Australian bond
3.2% Coupon, 5-year
BRWA bond
4.625% Coupon, 30-year
Romanian bond
150
100
50
0 0% 10% 9% 8%
Yield-to-maturity
7% 6% 5% 4% 3% 2% 1%
Notice how each line shows a different price–yield relationship. The line for the 
zero-coupon, 1-year Australian government bond is nearly flat, while the line for the 
30-year Romanian bond is steep and downward sloping. If an investor held all three 
bonds and each bond’s yield increased from 2% to 3%, the changes in p`,
    },
    {
      number: 12,
      title: `Yield-Based Bond Convexity and Portfolio Properties`,
      pages: 24,
      los: `Mastery The candidate should be able to:
calculate and interpret convexity and describe the convexity
calculate the percentage price change of a bond for a specified
change in yield, given the bond’s duration and convexity
calculate portfolio duration and convexity and explain the limitations`,
      intro: `While duration is a linear approximation of the sensitivity of a bond’s price to changes 
in yield, the true relationship between a bond’s price and its yield-to-maturity is a 
curved (convex) line. We introduce convexity as a complementary risk measure to 
improve bond price change estimates based on modified duration alone to account 
for this non-linear relationship. The convexity adjustment becomes more important 
when considering larger moves in yield-to-maturity and longer-maturity bonds. These 
lessons will also show how to estimate duration and convexity for a portfolio of bonds, 
as well as highlight limitations due to underlying assumptions.
Most of the examples and exhibits used throughout the reading can be downloaded 
as a Microsoft Excel workbook. Each worksheet in the workbook is labeled with the 
corresponding example or exhibit number in the text.`,
      overview: `■ Convexity is a complementary risk metric that measures the 
second-order (non-linear) effect of yield changes on price for 
an option-free fixed-rate bond. The convexity adjustment adds to the 
linear price estimate provided by modified duration.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Convexity is a complementary risk metric that measures the 
second-order (non-linear) effect of yield changes on price for 
an option-free fixed-rate bond. The convexity adjustment adds to the 
linear price estimate provided by modified duration.
1
LEARNING MODULE
12
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 12  Yield-Based Bond C onvexity and Portfolio Properties294
 ■ Convexity is always positive for an option-free fixed-rate bond, such 
that estimated price increases from a decline in yields are higher than 
duration alone would suggest and estimated price decreases from 
an increase in yields are lower than duration alone would suggest. 
Therefore, convexity is valuable to investors.
 ■ Convexity has the same relationship with bond features as duration: a 
fixed-rate bond will have greater convexity the longer its time-to-ma-
turity, the lower its coupon rate, and the lower its yield-to-maturity.
 ■ Money convexity expresses convexity in terms of currency units or 
percent of par for a position in a bond because it is the product of a 
bond’s annual convexity and its full price.
 ■ Portfolio duration and convexity can be calculated (1) as the weighted 
average of time to receipt of the aggregate cash flows or (2) by using 
the weighted averages of the durations and convexities of the individ-
ual bonds that make up the portfolio.
 ■ While the first method is theoretically correct, it is difficult to use in 
practice. The second method is commonly used by portfolio managers 
but implicitly assumes parallel shifts in the yield curve, which are rare.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. The annu
alized convexity of a four-year, 2.8% (semiannual) coupon bond 
priced at par at issuance on 1 August 2035 and maturing on 1 August 2039 
is closest to:
A. 7.624.
B. 16.413.
C. 65.651.
Solution:
B i
s correct.
Four-Y ear, 2.8% Semiannual Bond at Issuance
 
Fixed Coupon (%) 2.80
Periods p.a. 2
Price (per 100 Par Value) 100
Yield-to-Maturity (%) 2.8000
 
 
© CFA Institute. For candidate use only. Not for distribution.
Introduction 295
 
(1) (2) (3) (4) (5) (6) = (2) × (5)
(7) = Col. 2 × (Col. 2 
+ 1) × Col. 5 × (1 + 
YTM/2)–2
Period
Time to 
Receipt Cash Flow
Present 
Value Weight
Time to Receipt 
× Weight
Convexity of Cash 
Flows
1 1.0 1.4 1.380671 0.01381 0.01381 0.02686
2 2.0 1.4 1.361608 0.01362 0.02723 0.07946
3 3.0 1.4 1.342809 0.01343 0.04028 0.15672
4 4.0 1.4 1.324269 0.01324 0.05297 0.25759
5 5.0 1.4 1.305985 0.01306 0.06530 0.38105
6 6.0 1.4 1.287954 0.01288 0.07728 0.52611
7 7.0 1.4 1.270171 0.01270 0.08891 0.69179
8 8.0 101.4 90.726533 0.90727 7.25812 63.53176
100.0000 1.00000 7.62391 65.65133
Annualized Macaulay Duration and Convexity 3.81195 16.41283
 
Annualized convexity is 16.41283 and results from the sum of Column 7 
(65.65133) divided by the square of the periods per year (two periods per 
year: 2
2 = 4).
2. Iden
tify which of the following statements is true. The convexity adjustment:
A. is alw
ays negative for an option-free fixed-rate bond.
B. acc
ounts for the first-order effect of yield changes on a bond.
C. is adde
d to the bond price change estimate provided by modified 
duration.
Solution:
C is correct. The convexity adjustment is added to the price change estimate 
provided by modified duration for a given change in yield-to-maturity:
  %ΔP  V   Full  ≈ (− AnnModDur × ΔYield ) +  [  1 _ 2   × AnnConvexity ×  (ΔYield)   2 ] . 
A is inc
orrect because convexity is always positive for an option-free fixed-
rate bond.
B is incorrect because convexity accounts for the second-order effect of 
yield changes on a bond’s price and duration accounts for the first-order 
effect.
Questions 3 and 4 relate to the following information.
An investor holds a GBP50,000,000 position in a 10-year, 3.50% fixed-cou -
pon bond (semiannual) trading at par value. Annualized modified duration is 
8.376, and annualized convexity is 81.701. The investor expects interest rates 
to decline by 100 bps.
3.
 The ex
pected percentage change in the price of the bond is closest to:
A. 7.97%.
B. 8.01%.
C. 8.78%.
Solution:
C i
s correct. The expected price change is calculated as follows:
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 12  Yield-Based Bond C onvexity and Portfolio Properties296
  %ΔP  V   Full  ≈  (− AnnModDur × ΔYield)  +  [  1 _ 2   × AnnConvexity ×   (ΔYield)    2 ] . 
  %ΔP  V   Full  ≈  (− 8.376 × − 0.01)  +  [  1 _ 2   × 81.701 ×   (− 0.01)    2 ] . 
	% ΔPVFull	≈	0.0878	=	8.78%
4. The addition of money c
onvexity to the estimated change in the value of the 
bond position using money duration alone is closest to:
A. GBP204,252.
B. GBP408,503.
C. GBP4,188,220.
Solution:
A i
s correct. This question is asking for the money convexity adjustment. 
First we calculate money convexity:
 MoneyCon = 
AnnConvexity × PV Full.
 MoneyCon = 81.701 × GBP50,000,000.
 MoneyCon = GBP4,085,033,604.
Then we c
alculate the money convexity adjustment:
  MoneyConv . Adjustment ≈  [  1 _ 2   × MoneyConvexity ×   (ΔYield)    2 ] . 
  MoneyConv . Adjustment ≈  [  1 _ 2   × GBP4 ,  085, 033, 604 ×   (− 0.01)    2 ] . 
 MoneyConv.Adjustment	≈	GBP204,252.
5. A EUR100 million b
ond portfolio contains the following bonds:
 
Bond
Maturity 
(yrs.) YTM (%) Market Value
Annualized 
Modified 
Duration
Annualized 
Convexity
A 3 2.80% EUR40,000,000 2.858 9.752
B 10 3.50% EUR60,000,000 8.376 81.701
 
The expected percentage price change of the bond portfolio given a 50 bp 
increase in yield-to-maturity is closest to:
A. 3.018%.
B. 3.085%.
C. 3.151%.
Solution:
A i
s correct. The weights of Bond A and Bond B are 40% and 60%, respec-
tively. As a result, the portfolio weighted-average duration and convexity 
measures are 6.169 and 52.921, respectively. The expected portfolio percent-
age price change given a 50 bp increase in YTM is calculated as follows:
  %ΔP  V   Full  ≈  (− AnnModDur × ΔYield)  +  [  1 _ 2   × AnnConvexity ×   (ΔYield)    2 ] . 
© CFA Institute. For candidate use only. Not for distribution.
Bond Convexity and Convexity Adjustment 297
  %ΔP  V   Full  ≈  (− 6.169 × 0.005)  +  [  1 _ 2   × 52.921 ×   (0.005)    2 ] . 
	% ΔPVFull	≈	−3.018%
6. Using weig
hted-average duration and convexity measures to estimate bond 
portfolio interest rate risk:
A. is diffic
ult in practice.
B. is t
he theoretically correct approach.
C. assume
s a parallel shift in the yield curve.
Solution:
C is correct. Using the weighted-average duration and convexity measures 
to estimate bond portfolio interest rate risk is easy in practice, but it is not 
the theoretically correct approach (using the weighted average of time to 
receipt of the aggregate cash flows is theoretically correct). It does, however, 
implicitly assume a parallel shift in the yield curve.
BOND CONVEXITY AND CONVEXITY ADJUSTMENT
calculate and interpret convexity and describe the convexity 
adjustment
Interest rate risk, or the sensitivity of a bond’s price to changes in yield, is an import-
ant concept used to analyze fixed-income exposures. As a key risk metric, modified 
duration measures the first-order (linear) effect on a bond’s price change given a 
yield-to-maturity change. Convexity is a complementary risk metric that measures 
the second-order (non-linear) effect of yield changes on price for an option-free 
fixed-rate bond, as shown in Exhibit 1.
Exhibit 1: Convexity of an Option-Free Fixed-Rate Bond
Price Convex price–yield curve
Estimated change due to convexity
Yield-to-maturity
Estimated change due to duration
Line tangent to
the price–yield curve
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 12  Yield-Based Bond C onvexity and Portfolio Properties298
The true relationship between a bond’s price and its yield-to-maturity is the curved 
(convex) line that shows the actua`,
    },
    {
      number: 13,
      title: `Curve-Based and Empirical Fixed-Income Risk Measures`,
      pages: 24,
      los: `Mastery The candidate should be able to:
explain why effective duration and effective convexity are the most
appropriate measures of interest rate risk for bonds with embedded
calculate the percentage price change of a bond for a specified
change in benchmark yield, given the bond’s effective duration and
define key rate duration and describe its use to measure price
sensitivity of fixed-income instruments to benchmark yield curve
describe the difference between empirical duration and analytical`,
      intro: `Having covered yield-based duration and convexity measures, we now introduce 
curve-based measures of a bond’s price sensitivity to changes in a benchmark yield 
curve and when cash flows are uncertain. We show how the change in a bond’s full 
price is estimated by combining curve-based duration and convexity sensitivity mea-
sures, discuss uses of these approximate measures by issuers and investors, and explain 
their benefits and limitations. We also introduce key rate duration as a measure of 
interest rate risk across the term structure. Finally, we show that benchmark yield 
changes and credit spreads for issuers of lower credit quality are negatively correlated, 
especially during periods of market distress, establishing the benefit of an empirical 
versus analytical approach.`,
      overview: `■ Yield duration and convexity estimates of interest rate risk are 
useful only for small changes in yields. Effective duration and 
effective convexity are valid for both small and large changes in yields.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Yield duration and convexity estimates of interest rate risk are 
useful only for small changes in yields. Effective duration and 
effective convexity are valid for both small and large changes in yields.
1
LEARNING MODULE
13
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 13  Curv e-Based and Empirical Fixed-Income Risk Measures318
 ■ Effective duration and effective convexity are useful for gauging the 
interest rate risk of bonds whose future cash flows are uncertain.
 ■ Effective duration and effective convexity can be used to estimate the 
percentage change in a bond’s full price for a given shift in the bench-
mark yield curve.
 ■ A key rate (or partial) duration is a measure of a bond’s sensitivity to a 
change in the benchmark yield at a specific maturity. Key rate dura-
tion data, along with forecasted shifts in the benchmark curve, allow a 
portfolio to be rebalanced to improve its return.
 ■ The sum of weighted key rate durations of the bonds in a portfolio are 
equal to the effective duration of the entire portfolio.
 ■ Analytical duration and convexity are estimated duration and con-
vexity statistics using mathematical formulas. Empirical duration and 
convexity are estimated using historical data that incorporate various 
factors affecting bond prices.
 ■ When deciding whether to use an empirical or analytical measure, 
the correlation between benchmark yields and credit spreads must be 
considered.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of the learning module.
1. For whic
h of the following-fixed income instruments would an investor most 
likely use yield duration and convexity to measure interest rate risk rather 
than effective duration and effective convexity?
A. 30-ye
ar fixed-rate bond
B. Call
able bond
C. Mor
tgage-backed security
Solution:
A is correct. The callable bond and mortgage-backed security have embed-
ded options, which yield duration and convexity cannot account for. The 
30-year fixed-rate bond does not, so either method could be applied.
2.
 Calc
ulate the effective duration of a bond given the following:
 ■ PV0 = 102.208.
 ■ Price with the benchmark yield curve shifted up 25 bps: PV+ = 
100.004.
 ■ Price with the benchmark yield curve shifted down by 25 bps: PV –  = 
103.891.
Solution:
  EffDur =   
 (P  V  −  )  −  (P  V  +  ) 
  ________________  2 ×  (ΔCurve)  ×  (P  V  0  )    
  EffDur =    (103.891)  −  (100.004)   __________________  2 ×  (0.0025)  ×  (102.208)    
 EffDur = 7.606
© CFA Institute. For candidate use only. Not for distribution.
Introduction 319
3. Calculate the effective convexity of a bond given the following:
 ■ PV0 = 102.208.
 ■ Price with the benchmark yield curve shifted up 25 bps: PV+ = 
100.004.
 ■ Price with the benchmark yield curve shifted down by 25 bps: PV –  = 
103.891.
Solution:
  EffCon =   
 [ (P  V  −  )  +  (P  V  +  ) ]  −  [2 ×  (P  V  0  ) ] 
   ______________________    (ΔCurve)    2  ×  (P  V  0  )    
  EffCon =    [ (103.891)  +  (100.004) ]  −  [2 ×  (102.208) ]    _____________________________      (0.0025)    2  ×  (102.208)    
	 EffCon	=	−815.592
4. If the b
enchmark yield curve shifted by 50 bps, what would be the percent-
age change in the full price of a bond if its effective duration is 6.094 and its 
effective convexity is –230.097?
Solution:
  %ΔP  V   Full  ≈  (− EffDur × ΔCurve)  +  [  1 _ 2   × EffCon ×   (ΔCurve)    2 ]  
  %ΔP  V   Full  ≈  (− 6.094 × 0.005)  +  [  1 _ 2   × − 230.097 ×   (0.005)    2 ]  
	% ΔPVFull	≈	3.33%
5. The ta
ble below contains forecasts of expected changes in the benchmark 
yield curve by tenor.
 
Maturity 1 year 5 years 10 years 20 years 30 years
Curve shift at 
maturity
+100 bps +150 bps +200 bps +250 bps +300 bps
 
Your portfolio contains equally sized positions in Bond A and Bond B, 
which have the following key rate durations.
 
Tenor Key Rate Duration
Bond A 5 years 1.706
Bond B 10 years 3.195
 
Given the information and expected changes in yields, identify the bond 
that could be sold to improve returns.
Solution:
Bond B, because its expected price decline from the expected change in 
benchmark yields is more than twice that of Bond A.
For Bond A, ∆PV/PV = –1.706 × 0.015 = –2.56%.
For Bond B, ∆PV/PV = –3.195 × 0.020 = –6.39%.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 13  Curv e-Based and Empirical Fixed-Income Risk Measures320
6. Explain why yield duration and convexity are less useful for bonds with con-
tingenc
y features, such as callable bonds.
Solution:
Yield duration and convexity assume cash flows are received on scheduled 
dates. Cash flows from bonds with contingency features may not be received 
on scheduled dates—if, for example, a callable bond is called by the issuer 
following a decrease in interest rates. Therefore, yield duration and convexi-
ty would not correctly measure the price sensitivity to interest rates.
7.
 When com
paring analytical duration versus empirical duration, which of 
the following statements is correct?
A. Analytic
al duration and convexity are estimated duration and convex -
ity statistics using mathematical formulas.
B. Empir
ical duration and convexity are estimated using historical data in 
non-statistical models that incorporate various factors affecting bond 
prices.
C.
 Bot
h A and B
Solution:
A is correct. Analytical duration and convexity are estimated duration and 
convexity statistics using mathematical formulas.
B is incorrect because statistical models are primarily used to determine 
empirical duration and convexity.
C is incorrect because B is incorrect.
8.
 Tr
ue or false: Analytical duration is superior to empirical duration for bonds 
with credit risk.
Solution:
False. If government bond yields are driven lower in a market stress scenar-
io, the “flight to safety” will also cause credit spreads to widen because of 
an increase in expected default risk. Since credit spreads and benchmark 
yields are negatively correlated under this scenario, wider credit spreads will 
partially or fully offset the decline in government benchmark yields, result-
ing in lower empirical duration estimates than analytical duration estimates. 
Therefore, empirical duration estimates are a more accurate method of 
forecasting bond price changes for bonds with credit risk.
CURVE-BASED INTEREST RATE RISK MEASURES
explain why effective duration and effective convexity are the most 
appropriate measures of interest rate risk for bonds with embedded 
options
Yield duration and convexity assume a bond’s cash flows are certain. However, if a 
bond has contingency features, such as embedded options, as with a callable (or put -
table) bond, then future cash flows are uncertain since option exercise depends on 
the level of market interest rates relative to coupon interest being paid (or received). 
2
© CFA Institute. For candidate use only. Not for distribution.
Curve-Based Interest Rate Risk Measures 321
For example, the duration of a callable bond does not reflect the sensitivity of the 
bond price to a change in the yield-to-worst, since this represents only one of several 
possible outcomes based on future interest rates.
Consequently, bonds with embedded options do not have well-defined 
yields-to-maturity, so Macaulay and modified durations are not appropriate interest 
rate risk measures for such bonds. Rather, the appropriate measure of interest rate 
risk is the sensitivity of the bond’s price to a change in a benchmark yield curve—for 
example, the government par curve—known as effective duration, a curve duration 
rather than a yield duration statistic.
Exhibit 1 shows the impact of an instantaneous change in the benchmark yield 
curve (ΔCurve) on the price of a callable bond compared with that on a comparable 
non-callable bond. The two bonds have the same features (i.e., coupon rate, payment 
frequency, `,
    },
    {
      number: 14,
      title: `Credit Risk`,
      pages: 38,
      los: `Mastery The candidate should be able to:
describe credit risk and its components, probability of default and
describe the uses of ratings from credit rating agencies and their
describe macroeconomic, market, and issuer-specific factors that
influence the level and volatility of yield spreads`,
      intro: `Credit analysis plays a critical role in fixed-income markets. Proper evaluation and 
pricing of credit risk facilitates the efficient allocation of capital. This is a dynamic 
process as credit risk components are continuously re-evaluated and fixed-income 
instruments repriced according to market conditions. This learning module covers 
the basic principles of credit analysis. First, we introduce the concepts of credit risk 
and expected loss and interpret what credit ratings mean. We compare bond issuer 
creditworthiness within a given industry as well as across industries, and we explore 
how financial markets price credit risk. This lesson focuses primarily on the analy -
sis of credit risk, while subsequent lessons discuss credit analysis of sovereign and 
non-sovereign government issuers as well as corporate debt`,
      overview: `■ Credit risk is the risk of economic loss resulting from borrower 
failure to make full and timely payments of interest and prin-
cipal. The key components of credit risk are the probability of default 
and the loss given default, and their product is expected loss.
 ■ Chief sources of credit risk include adverse macroeconomic condi-
tions, a financing mismatch between resources and obligations, and 
issuer-specific factors in corporate and sovereign debt markets.
 ■ Nearly every bond issue in developed debt markets carries credit rat -
ings classifying creditworthiness. Credit ratings enable comparisons of 
the credit risk of debt issues and issuers within and across industries.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Credit risk is the risk of economic loss resulting from borrower 
failure to make full and timely payments of interest and prin-
cipal. The key components of credit risk are the probability of default 
and the loss given default, and their product is expected loss.
 ■ Chief sources of credit risk include adverse macroeconomic condi-
tions, a financing mismatch between resources and obligations, and 
issuer-specific factors in corporate and sovereign debt markets.
 ■ Nearly every bond issue in developed debt markets carries credit rat -
ings classifying creditworthiness. Credit ratings enable comparisons of 
the credit risk of debt issues and issuers within and across industries.
1
LEARNING MODULE
14
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 14  Cr edit Risk342
 ■ Bonds or issuers with an investment-grade (IG) credit rating pose the 
lowest risk of default and are rated Baa3 by Moody’s and BBB– or 
higher by S&P and Fitch. In contrast, non-investment-grade or high-
yield (HY) bonds or issuers are rated BB+ or lower by S&P/Fitch and 
Ba1 or less by Moody’s and represent substantial to very high credit 
risk.
 ■ Pitfalls of relying solely on credit ratings in making investment deci-
sions include that rating agency decisions may lag market pricing of 
credit risk, overlook key financial risks, and/or involve miscalculations 
or unforeseen changes not fully captured in a rating agency’s for -
ward-looking analysis.
 ■ The premium, or yield spread, at which corporate bonds trade relative 
to default risk-free assets widens when credit risk rises and narrows if 
credit risk falls.
 ■ Credit spread changes affect holding period returns via two primary 
factors: a) the basis point spread change and b) the sensitivity of price 
to yield as reflected by end-of-period modified duration and convexity. 
Spread narrowing increases holding period returns.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Cre
dit risk is:
A. activ
ated upon a borrower’s default.
B. the spr
ead an investor receives above the risk-free rate.
C. ex
perienced in several ways by lenders.
Solution:
The correct answer is C. Lenders are impacted by credit risk in several 
ways, including failure to receive principal and interest payments in a timely 
manner, the inability to sell collateral at a market price sufficient to meet an 
issuer’s obligations in the case of secured debt, or the potential incurrence of 
legal or other costs to collect debt. A is incorrect because while a borrower 
default initiates a realized loss, expected loss exists prior to the occurrence 
of any actual loss. B is incorrect because it refers to the credit spread, which 
compensates investors for assuming credit risk.
2.
 A EUR500,000 lo
an has the following characteristics:
 ■ Probability of default 5%
 ■ Collateral EUR100,000
 ■ Recovery rate 90%
 ■ Expected exposure EUR400,000
The expected loss for this loan in event of default is:
A. EUR1,500
B. EUR2,000
© CFA Institute. For candidate use only. Not for distribution.
Introduction 343
C. EUR20,000
S
olution:
The correct answer is A. We solve for expected loss (EL) as follows:
 EL = POD × (EE – Collateral) × (1 – RR).
Sinc
e probability of default (POD) is 5%, expected exposure (EE) is 
EUR400,000, collateral is EUR100,000, and the recovery rate (RR) is 90%:
 EL = EUR1,500 = 0.05 × (400,000 – 100,000) × (1 – 0.9).
B i
s incorrect as it fails to reduce the expected exposure by the collateral, 
while C is incorrect as it simply multiplies EE and POD.
3. Cre
dit ratings are:
A. deve
loped on behalf of investors.
B. a sy
mbol-based measure of the potential default risk of a bond issue or 
issuer.
C. mea
sures of credit risk that are used to determine bond market 
pricing.
Solution:
The correct answer is B: Credit ratings are a symbol-based measure of the 
potential default risk of a bond issue or issuer. A is incorrect because credit 
ratings are developed on behalf of the issuer. C is incorrect because credit 
ratings are not used to determine bond prices.
4.
 Which of t
he following statements best describes risks that are difficult to 
capture in credit ratings?
A. Env
ironmental risks are captured by ESG ratings rather than credit 
ratings.
B. De
bt-financed acquisitions are usually captured in credit ratings.
C. Split ra
tings demonstrate that credit rating agencies may view complex 
risks very differently.
Solution:
The correct answer is C. A is incorrect as environmental risks may affect 
credit ratings. B is incorrect since debt-financed acquisitions are difficult to 
anticipate.
5.
 Deter
mine the correct answers to fill in the blanks: Spreads are __________ at 
or near the top of the credit cycle, when market participants perceive credit 
risk to be at its lowest; they are __________ at or near the bottom of the 
credit cycle, when financial markets believe credit risk has reached its peak.
Solution:
Spreads are narrowest (or lowest) at or near the top of the credit cycle, 
when market participants perceive credit risk to be at its lowest; they are 
widest (or highest) at or near the bottom of the credit cycle, when financial 
markets believe credit risk has reached its peak.
6.
 A por
tfolio manager assessing a downside case believes that HY bond 
spreads will rise 100 bps in a recession. If an observed HY bond has modi-
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 14  Cr edit Risk344
fied duration of 4.5 and reported convexity of 0.23, the expected change in 
the HY bond’s price under this scenario would be closest to:
A. –4.5%.
B. –4.385%.
C. –4.615%.
Solution:
The c
orrect answer is B. Bond price changes based upon modified duration, 
convexity, and the spread change are calculated as follows:
	 %∆PVFull	=	−(AnnModDur	×	∆Spread)	+	½AnnConvexity	×	(∆Spread)2.
With AnnModDur = 4.5 and reported convexity of 0.23, rescaling convexity 
to 23 and substituting values to solve for spread results in
	 ∆PVFull	=	−	(4.5	×	1.00%)	+	½	(23)	×	(1.00%)2
	 ∆PVFull	=	−4.385%.
SOURCES OF CREDIT RISK
describe credit risk and its components, probability of default and 
loss given default
Fixed-income investors face credit risk, a form of performance risk in a contractual 
relationship. A borrower that fails to meet its promised interest and/or principal pay -
ment obligations under a bond or loan contract is said to be in default. A fixed-income 
investor seeks compensation for the expected economic loss under a potential borrower 
default over the life of the contract known as credit risk.
Credit risk depends upon specific factors related to the borrower itself as well as 
general economic conditions and is subject to change over the life of the contract. 
Credit risk exposes the lender or investor to potential losses and underperformance.
Traditionally, many analysts evaluated creditworthiness based on what are often 
called the “Cs of credit analysis, ” as shown in Exhibit 1:
2
© CFA Institute. For candidate use only. Not for distribution.
Sources of Credit Risk 345
Exhibit 1: The Cs of Credit Analysis
 
Country Currency
Character
Covenants
Capacity
Conditions
Collateral
Capital
Top-Down Factors
Bottom-Up Factors
Cs of
Credit
Five of these criteria—capacity, capital, collateral, covenants, and character—are related 
to the specific bottom-up factors applicable to an individual borrower. Capacity refers 
to the ability of the borrower to make its debt payments on time. Capital addresses 
other company resources available that reduce reliance on debt. Collateral refers to the 
quality and value of the assets supporting the issuer’s indebtedness, while covenants 
are the legal terms of debt agreements that an issuer must comply with. Character  
refers to the quality of management and the willingness of repay indebtedness.
While capacity and capital are generally quantitati`,
    },
    {
      number: 15,
      title: `Credit Analysis for Government Issuers`,
      pages: 28,
      los: `Mastery The candidate should be able to:
explain special considerations when evaluating the credit of
sovereign and non-sovereign government debt issuers and issues`,
      intro: `This learning module explores special considerations for the credit evaluation of 
sovereign and other public issuers that often access fixed-income markets to finance 
their activities.
A major difference between corporate and sovereign issuers is the use of proceeds 
and source of repayment of debt obligations. In contrast to corporations that fund 
working capital and fixed assets to generate profits, sovereign and other government 
issuers use debt to conduct fiscal policy, supply public goods and services, and fund 
other government expenditures. While companies primarily rely on operating cash 
flow to repay debt, governments use tax revenues and other government revenues, 
such as tariffs and fees, to pay interest and principal.
We analyze sovereign bonds using a combination of qualitative and quantitative fac-
tors to assess their ability and willingness to pay. Sovereign defaults are not uncommon, 
particularly as countries transition from emerging to advanced economies. However, 
in contrast to corporate issuers, sovereign bondholders are generally unable to force 
governments to declare bankruptcy and liquidate assets. Non-sovereign issuers, such 
as certain local governments or quasi-government entities, also issue debt to finance 
their expenditures or develop infrastructure. This debt is backed by their ability to 
levy local taxes or generate specific project revenue.`,
      overview: `■ Governments borrow in public markets to conduct fiscal pol-
icy and meet budgetary needs, such as the provision of public 
goods.
 ■ A sovereign government’s ability to tax private economic activity 
causes these bonds to normally have the lowest credit risk of any 
issuer in a specific country. In advanced economies, sovereign debt is 
often considered default risk-free.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Governments borrow in public markets to conduct fiscal pol-
icy and meet budgetary needs, such as the provision of public 
goods.
 ■ A sovereign government’s ability to tax private economic activity 
causes these bonds to normally have the lowest credit risk of any 
issuer in a specific country. In advanced economies, sovereign debt is 
often considered default risk-free.
1
LEARNING MODULE
15
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 15  Cr edit Analysis for Government Issuers380
 ■ A combination of qualitative and quantitative factors is used to ana-
lyze a sovereign issuer’s ability and willingness to pay.
 ■ Greater central bank independence from the sovereign issuing entity 
reduces the likelihood that a national government will simply increase 
the money supply by purchasing domestic debt.
 ■ A key distinction for sovereign creditworthiness is whether its domes -
tic currency is considered to be a reserve currency, that is, one that is 
fully convertible and held by foreign central banks and other investors.
 ■ Non-sovereign government debt is issued by local governments or 
quasi-government entities, backed by their tax revenue or specific 
project revenue.
 ■ The credit analysis of non-sovereign debt backed by tax revenue has 
similar considerations to sovereign bonds, while project-based revenue 
bonds are typically evaluated based upon the cash flows associated 
with the underlying project.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Iden
tify the debt type that corresponds to the correct example:
A) sovereign debt, B) non-sovereign debt, C) corporate debt
 
1. Issued by an entity backed by cash 
flow from its business operations
2. Issued by a country’s government, 
backed by its ability and willingness 
to tax
3. Issued by a local government 
or entity, backed by its ability and 
willingness to tax, or revenue from a 
specific public project
 
Solution:
1. C is correct. Corporate debt is issued by non-government corporations 
to finance business operations, and payments are made from operating cash 
flow.
2. A is correct. Sovereign debt is issued by national governments to conduct 
fiscal policy and finance their budgets. This debt is paid based on the gov-
ernment’s ability and willingness to collect taxes from within a jurisdiction.
3. B is correct. Non-sovereign debt is issued by sub-sovereign or local gov-
ernments and related entities. These bonds are supported by the local taxing 
authority of the issuer or specific public project revenue.
2.
 The princ
iple of sovereign immunity is related to the sovereign 
government’s:
A. ability t
o pay.
B. ability t
o tax.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 381
C. willingness to pay.
S
olution:
C is correct. Under the principle of sovereign immunity, national laws 
limit investors’ ability to force a sovereign government into bankruptcy or 
liquidate its assets to settle debt claims as would be the case for a corporate 
issuer.
3.
 The cr
editworthiness of sovereign and other government borrowers is based 
upon qualitative and quantitative factors. Which of the following is not a 
quantitative factor?
A.
 Ex
ternal stability
B. Economic g
rowth and flexibility
C. Fi
scal strength
Solution:
B is correct. The quantitative factor is actually economic growth and stabili-
ty, not flexibility.
4. Which of t
he following statements best describes characteristics of external 
strength associated with higher credit quality?
A. A governmen
t that is able to impose and enforce capital controls
B. A governmen
t that has established free trade agreements with neigh-
boring countries
C. A governmen
t whose central bank issues a reserve currency
Solution:
C is correct. A key distinction for sovereign creditworthiness is whether 
its domestic currency is considered to be a reserve currency, fully convert-
ible and frequently held by foreign central banks and other investors. A is 
incorrect as capital controls may not support debt capacity. B is incorrect 
since free trade is a necessary, but not a sufficient, condition for establishing 
external strength.
5.
 Mat
ch the following debt issuances to the correct issuer type:
A) agency bonds, B) general obligation bonds, C) revenue bonds
 
1. Bonds issued for building a regional 
highway toll road
2. Bonds issued by the national 
mortgage finance corporation, under 
national law.
  
3. Bonds issued by a state government 
to fund a pension deficit   
 
Solution:
1. C is correct. Revenue bonds are issued to finance a specific public benefit 
project, mostly supported by the local/regional government. The revenue 
from the project supported by the economic base for utilization of the proj-
ect determines its credit worthiness.
2. A is correct. Agencies are quasi-government entities whose primary activ-
ities are to fulfill a government-sponsored mission to provide public services 
that are often based upon a specific sovereign law or statute. In many cases, 
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 15  Cr edit Analysis for Government Issuers382
either the law or statute creating the entity authorizes it to finance its activi-
ties using debt.
3. B is correct. General obligation (GO) bonds are unsecured bonds backed 
by the general revenues of the issuing non-sovereign government. These 
bonds are supported by the taxing authority of the issuer, rather than the 
revenue from a specific project.
6.
 Which of t
he following is a relevant qualitative factor for assessing the sov-
ereign rating for a country’s debt issue?
A. Na
tural resources
B. Trading p
artnership with a strong economy
C. Economic diversific
ation
Solution:
C is correct. One of the key factors for assessing the creditworthiness of a 
sovereign issuer’s debt is the degree of economic diversification, as well as 
growth potential. The economies in countries with the highest-rated sover-
eign borrowers typically have an advanced and highly diversified domestic 
economy with strong, sustainable growth prospects. Emerging or frontier 
market economies, on the other hand, often depend upon a single industry 
or commodity and/or fewer trading partners, causing the tax revenues avail-
able to these sovereign borrowers to be more susceptible to an economic 
downturn, key commodity price fluctuations, and/or trade interruptions.
SOVEREIGN CREDIT ANALYSIS
explain special considerations when evaluating the credit of 
sovereign and non-sovereign government debt issuers and issues
As outlined in earlier lessons, both sovereign and non-sovereign governments issue 
debt to finance their activities. In contrast to corporate debt, this debt is used to 
conduct fiscal policy and meet budgetary needs, such as providing public goods and 
services including infrastructure, health care, and education. The primary source of 
repayment for sovereign debt is usually taxes and other government revenue, which 
can include fees, tariffs, and in some cases the profits of state-owned enterprises. A 
sovereign government’s ability to tax all private economic activity under its jurisdiction 
is the primary reason why such bonds usually have the lowest credit risk of any issuer 
within a specific country. While sovereign bonds in the most advanced economies 
are often considered default risk-free, those issued by emerging and frontier market 
governments involve greater default risk.
Bond investors evaluate the creditworthiness of both corporate and public issuers 
by the stability and predictability of issuer cash flows, the sufficiency of those cash 
flows to meet required interest and principal payments, and the issuer’s relative reliance 
on debt financing versus other available resources. The creditworthiness of sovereign 
and other government borrowers is based upon qualitative an`,
    },
    {
      number: 16,
      title: `Credit Analysis for Corporate Issuers`,
      pages: 32,
      los: `Mastery The candidate should be able to:
describe the qualitative and quantitative factors used to evaluate a
corporate borrower’s creditworthiness
calculate and interpret financial ratios used in credit analysis
describe the seniority rankings of debt, secured versus unsecured
debt and the priority of claims in bankruptcy, and their impact on`,
      intro: `In this learning module, we focus on the relative creditworthiness of non-financial 
corporate borrowers, building on earlier learning modules on corporate issuers as well 
as the earlier fixed-income module on credit risk and its components.
In particular, we assess a company’s activities, or its business model, and how this 
affects the company’s ability to meet its debt obligations. While a company’s probability 
of default (POD) and loss given default (LGD) are not directly observable, in the first 
lesson we consider qualitative and quantitative factors that affect these credit risk 
components. Financial statement analysis and cash flow projections are important 
tools used to conduct corporate credit analysis. The second lesson applies these tools 
to calculate and interpret a variety of financial ratios, including profitability, lever -
age, and coverage metrics, to assess an issuer’s probability of default. The seniority 
rankings of specific debt issues and use of collateral are of particular importance in 
determining credit ratings for a corporate issue and assessing the LGD in an event of 
default, which is addressed in the third and final lesson.`,
      overview: `■ The credit risk of a borrower can be evaluated using qualitative 
and quantitative criteria that affect a company’s likelihood of 
default and the investor’s loss in the event of a default.
 ■ Qualitative factors important in gauging creditworthiness include a 
company’s business model, its industry, and its competitive position 
and business risks, as well as its corporate governance
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The credit risk of a borrower can be evaluated using qualitative 
and quantitative criteria that affect a company’s likelihood of 
default and the investor’s loss in the event of a default.
 ■ Qualitative factors important in gauging creditworthiness include a 
company’s business model, its industry, and its competitive position 
and business risks, as well as its corporate governance
1
LEARNING MODULE
16
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 16  Cr edit Analysis for Corporate Issuers408
 ■ Quantitative factors in measuring creditworthiness involve financial 
statement analysis and forecasts, which use profitability, liquidity, 
leverage, and coverage measures to gauge a company’s ability to meet 
its fixed debt obligations.
 ■ Financial ratios are a critical tool used to assess the financial health of 
a company, identify trends over time, and compare companies within 
and across industries.
 ■ Seniority rankings determine the priority of claims on an issuer’s 
assets and are important determinants of the loss given default for a 
specific issue. Rating agencies typically provide both issuer and issue 
ratings for corporate credit.
 ■ While an issuer credit rating captures the probability of default or 
expected loss of the issuer’s senior unsecured bonds, an issue rating 
refers to specific financial obligations of an issuer and takes such fac -
tors as seniority into account.
LEARNING MODULE SELF-ASSESSMENT
1.
 Which of t
he following is not a characteristic of higher corporate 
creditworthiness?
A. Lower le
verage
B. Higher c
overage
C. Lower liquidity
S
olution:
The correct answer is C. All else held equal, a company with higher liquidity 
has a greater ability to meet its short-term obligations, including debt inter-
est and principal.
2.
 All el
se being equal, a borrower will have higher capacity to repay its debt in 
an industry where the:
A. bar
riers to entry are higher.
B. thr
eat of substitutes is higher.
C. bar
gaining power of buyers is higher.
Solution:
The correct answer is A. An industry with higher barriers to entry tend to 
have lower threat of new entrants and lower competition. All else being 
equal, a borrower in such an industry has higher capacity to support its 
debt.
3.
 Iden
tify the key credit metrics used in credit analysis:
EBIT margin.
Debt/EBITDA.
EBIT/interest expense.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 409
 
1. Coverage metric
2. Leverage metric
3. Profitability metric
 
Solution:
 
1. Coverage metric C. EBIT/interest expense 
2. Leverage metric B. Debt/EBITDA
3. Profitability metric A. EBIT margin
 
4. Companies X, Y, and Z belong to the same industry with the following 
financ
ial ratios:
 
Company X Company Y Company Z
EBITDA margin 15% 18% 18%
Free cash flow (FCF) after dividends/
debt 10% 10% 8%
Debt/EBITDA 1.5 1.5 1.8
Debt/capital 35% 35% 38%
EBITDA/interest 5.6 6.2 6.2
 
Based on the following financial ratios only, which company has the lowest 
credit risk?
A. Comp
any X
B. Comp
any Y
C. Comp
any Z
Solution:
The correct answer is B. Compared to Company X, Company Y has similar 
leverage metrics but better profitability and coverage. Compared to Compa-
ny Z, Company Y has similar profitability and coverage but better leverage 
ratios. Also, when viewing all the metrics, Company Y has either the same 
value or better than the other two companies. Therefore, Company Y has 
the lowest credit risk among the three companies.
5.
 Rank t
he recovery rate of the following bonds in the capital structure of a 
company in bankruptcy from the highest to the lowest:
 ■ Junior subordinated debt
 ■ Senior unsecured debt
 ■ Subordinated debt
 ■ Second lien debt
 ■ First lien debt
Solution:
1. First lien de
bt
2. Se
cond lien debt
3. Senior uns
ecured debt
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 16  Cr edit Analysis for Corporate Issuers410
4. Subordinated debt
5. Junior sub
ordinated debt
6. Two s
enior unsecured bonds of the same issuer of different maturities have 
the same:
A. issue c
redit rating only.
B. issuer c
redit rating only.
C. issuer and i
ssue credit rating.
Solution:
The correct answer is C. An issuer rating usually applies to its senior unse-
cured debt and is meant to address an obligor’s overall creditworthiness.
All senior unsecured bonds are treated as one class and rank pari passu ir-
respective of maturity. Therefore, both the issuer and the issue credit ratings 
are the same.
ASSESSING CORPORATE CREDITWORTHINESS
describe the qualitative and quantitative factors used to evaluate a 
corporate borrower’s creditworthiness
A company’s creditworthiness depends primarily on its ability to generate profits and 
cash flow sufficient to meet interest and principal payments. Analysts rely on both 
qualitative and quantitative factors to evaluate both the likelihood of corporate default 
as well as an investor’s loss in the event of a default. While several different analytical 
models measure credit risk, here we focus on broad qualitative and quantitative factors.
Qualitative Factors
Earlier Corporate Issuer learning modules covered many of the key qualitative fac -
tors used to gauge a company’s ability to satisfy its debt obligations, which include a 
company’s business model and the industry within which it operates, as well as the 
competitive forces and business risks it faces. These factors are summarized in Exhibit 1.
2
© CFA Institute. For candidate use only. Not for distribution.
Assessing Corporate Creditworthiness 411
Exhibit 1: Qualitative Factors in Corporate Creditworthiness
Business Model
Demand/Revenue/Margin
Stability and Predictability
Asset Quality 
Structure/Concentration/
Competitive Forces/Long-Term Growth
and Demand 
Industry and Competition
Issuer-Specific
Demand/Revenue/Margin
Stability and Predictability 
Business Risk
Deviations from Expected
Demand/Revenue/Margin 
Industry-Specific
Cyclicality/Intra-Industry Rivalry/
Life Cycle
External
Macroeconomy/Technology/
Demographic/Government/
Geopolitics/ESG 
Appropriate Use of Proceeds/Treatment
of Debtholders/Legal, Tax, Accounting
and Covenant Compliance 
Corporate Governance
Financial analysts evaluating a company’s business model, its industry, and its competi-
tive position and business risks from a debtholder’s perspective must not only consider 
whether a firm generates an acceptable return over its cost of capital, but also whether 
the timing and size of cash flows are sufficient to adequately cover debt obligations.
Established firms with a business model characterized by stable and predictable cash 
flows, low business risk, and less-competitive pressures have a higher capacity to use 
debt in their capital structure and a lower likelihood of default than those firms with 
lower and less stable cash flows, higher business risk, and/or greater competition. In 
contrast to an equity analyst’s valuation of all future cash flows, fixed-income analysts 
often focus on how a company’s creditworthiness may change over time given the 
finite nature of short- and long-term debt claims, as shown in the following example.
EXAMPLE 1
Qualitative Factors Affecting BRWA Creditworthiness
Bright Wheel Automotive (BRWA), a hypothetical auto manufacturing firm 
mentioned in an earlier lesson, has a product line based on traditional internal 
combustion engine (“ICE”) technology. Having introduced its first electric vehicle 
(EV) two years ago, which comprises 5% of current revenue, BRWA’s manage-
ment has ambitious plans to convert over half of its models to all-electric over 
the coming decade, while adopting hybrid (ICE and electric) technology for its 
remaining fleet over the same period. BRWA’s debt profile as an investment-grade 
corporate issuer is as follows:
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 16  Cr edit Analysis for Corporate Issuers412
0.12% BRWA
`,
    },
    {
      number: 17,
      title: `Fixed-Income Securitization`,
      pages: 22,
      los: `Mastery The candidate should be able to:
explain benefits of securitization for issuers, investors, economies,
and financial markets
describe securitization, including the parties and the roles they play`,
      intro: `Asset-backed securities (ABS) are securities backed by and repaid from a pooled group 
of loans or receivables. Creating securities that are repaid from particular types of 
loans or receivables transfers risk, provides flexibility to issuers and investors, and 
efficiently allocates capital. In a securitization, cash flows from a designated pool of 
assets are redistributed by a special purpose issuer to pay interest and principal to 
investors in a predetermined manner. Thus, ABS transactions create an entire new 
subordination structure on the designated pool of assets. Securitization takes place 
around the world — in the Americas, Asia, and Europe. This first of three Fixed-Income 
Learning Modules describes the benefits of securitization, the securitization process, 
and typical securitization structures.`,
      overview: `■ Securitization benefits investors by redistributing payment 
risks, enhancing the predictability of payments, diminish-
ing the impact of unexpected changes in payment patterns (such as 
defaults, prepayments, or payment extensions), helping investors 
match risk, return and maturity needs, and reducing risk through vari-
ous credit enhancements.
 ■ Securitization enables issuers to operate more efficiently on a risk-ad-
justed basis by removing assets and lending risks from their balance 
sheets (thereby reducing their leverage), expanding their capacity to 
originate loans and to secure lower funding costs.
 ■ Securitization enhances financial market efficiency, improving overall 
liquidity in the financial system and reducing liquidity risk.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Securitization benefits investors by redistributing payment 
risks, enhancing the predictability of payments, diminish-
ing the impact of unexpected changes in payment patterns (such as 
defaults, prepayments, or payment extensions), helping investors 
match risk, return and maturity needs, and reducing risk through vari-
ous credit enhancements.
 ■ Securitization enables issuers to operate more efficiently on a risk-ad-
justed basis by removing assets and lending risks from their balance 
sheets (thereby reducing their leverage), expanding their capacity to 
originate loans and to secure lower funding costs.
 ■ Securitization enhances financial market efficiency, improving overall 
liquidity in the financial system and reducing liquidity risk.
1
LEARNING MODULE
17
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 17  Fix ed-Income Securitization440
 ■ Several parties participate in a securitization, including the original 
corporate issuers of the assets (for example, loans, receivables, leases, 
or debt) to be securitized; a special purpose entity (SPE) created to 
buy/own these corporate assets, create new assets from them, and 
sell the new assets to investors; the servicer of the underlying loans or 
debt; and other (third-party) entities (for example, accountants, attor -
neys, and underwriters).
 ■ When an original issuer elects to securitize assets, it first establishes 
an SPE to which it sells the assets. The SPE then issues and sells to 
investors securities backed by these assets. Interest and principal pay-
ments on the assets are used to pay the investors in the new securities.
 ■ The separate legal entity structure of the SPE is designed to protect 
the underlying assets from any claims by creditors of the issuer should 
the issuer go into financial distress. However, ABS investors should 
evaluate the legal considerations of the actual jurisdiction where they 
purchase an ABS, since legal frameworks vary by country.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of t
he following asset-backed securities (ABS) is most complex?
A. Covere
d bonds
B. Pa
ss-through securities
C. Colla
teralized mortgage obligations
Solution
C is correct. Collateralized mortgage obligations enhance the predictability 
of payment patterns of pass-through securities by redistributing the cash 
flows in the pool across the different tranches according to a preset sched-
ule. A is incorrect because covered bonds are the simplest securitization 
structure. The issuer segregates (but retains) the underlying loans/assets and 
then uses the segregated loans/assets as collateral for the covered bonds it 
issues. B is incorrect because pass-through securities, while true securitiza-
tions (meaning that the pool of assets is removed from the balance sheet and 
transferred into a separate and independent legal entity), are not as complex 
as collateralized mortgage obligations.
2.
 Which of t
he following legal documents in the securitization process de-
scribes the structure of the securitization, including the priority of payments 
and the credit enhancements to be used?
A.
 Pro
spectus
B. Note
s issued by the SPE
C. Purc
hase agreement between the seller of the collateral and the SPE
Solution
The correct answer is A. The prospectus describes the structure of the secu-
ritization, including the priority and amount of payments to be made to the 
servicer, administrators, and the ABS holders, as well as the credit enhance-
ments used in the securitization. B is incorrect because the notes issued by 
the SPE are the actual asset-backed-securities (ABS), not legal documents 
© CFA Institute. For candidate use only. Not for distribution.
Introduction 441
supporting the securitization process. C is incorrect because the purchase 
agreement between the seller of the collateral and the SPE outlines the rep-
resentations and warranties that the seller makes about the assets sold.
3.
 Iden
tify the role that corresponds to each of the following participants in a 
securitization:
 
1. Seller A. The entity that issues the ABS
2. Servicer B. The entity that wishes to increase liquidity, lower funding 
costs, and operate more efficiently on a risk-adjusted basis
3. SPE C. The entity that collects payments from borrowers
 
Solution
1. B is c
orrect. By removing assets and lending risks from their balance 
sheet, the seller can operate more efficiently on a risk-adjusted basis. 
And, by selling the assets to an SPE, investors can rely on the default 
risk associated with collecting payments from customers, rather than 
the seller’s credit quality and default risk. As a result, in aggregate, the 
funding cost of a securitization may be lower than that of a corporate 
bond issue.
2.
 C is c
orrect. Loan servicing refers to administering any aspect of a 
loan, including collecting payments from borrowers, notifying bor -
rowers who may be delinquent, and recovering and disposing of 
the underlying asset if the borrower does not make the payments as 
scheduled.
3.
 A is c
orrect. The SPE purchases the assets from the seller and then 
issues and sells ABS backed by the pool of securitized assets.
4. Iden
tify the benefit of securitization that corresponds most closely to each 
of the following parties: (A. Economies and Financial Markets, B. Issuers, C. 
Investors):
 
1. By removing assets and lending risks from their bal-
ance sheet, _________ can operate more efficiently on 
a risk adjusted basis. Ultimately, securitization enables 
___________ to expand lending origination beyond their 
balance sheets.
       
2. Securitization allows __________ to tailor interest rate 
and credit risk exposures to suit their specific risk, return, 
and maturity needs.
       
3. Securitization creates tradable securities with higher 
liquidity than that of the original, thereby making 
___________ more efficient, improving overall liquidity and 
reducing liquidity risk
       
 
Solution
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 17  Fix ed-Income Securitization442
 
1. By removing assets and lending risks from their bal-
ance sheet, _________ can operate more efficiently on 
a risk adjusted basis. Ultimately, securitization enables 
___________ to expand lending origination beyond their 
balance sheets.
A. Economies and 
Financial Markets
2. Securitization allows __________ to tailor interest rate 
and credit risk exposures to suit their specific risk, return, 
and maturity needs.
C. Investors
3. Securitization creates tradable securities with higher 
liquidity than that of the original, thereby making 
___________ more efficient, improving overall liquidity and 
reducing liquidity risk
B. Issuers
 
1. A is correct. Securitization creates tradable securities with higher 
liquidity t
han that of the original, thereby making economies and 
financial markets more efficient, improving overall liquidity and 
reducing liquidity risk
2.
 C is c
orrect. Securitization allows investors to tailor interest rate and 
credit risk exposures to suit their specific risk, return, and maturity 
needs.
3.
 B is c
orrect. By removing assets and lending risks from their balance 
sheet, issuers can operate more efficiently on a risk adjusted basis. 
Ultimately, securitization enables issuers to expand lending origination 
beyond their balance sheets.
THE BENEFITS OF SECURITIZATION
explain benefits of securitization for issuers, investors, economies, 
and financial markets
The securitization process pools and transfers the ownership of cash flow generating 
assets, such as loans or receivables, from the original lender into a specially created 
legal entity. The pool of assets are the securitized assets, also called the reference 
portfolio or collateral. In turn, that legal entity issues securities backed by these pool`,
    },
    {
      number: 18,
      title: `Asset-Backed Security (ABS) Instrument and Market Features`,
      pages: 32,
      los: `Mastery The candidate should be able to:
describe characteristics and risks of covered bonds and how they
differ from other asset-backed securities
describe typical credit enhancement structures used in
describe types and characteristics of non-mortgage asset-backed
securities, including the cash flows and risks of each type
describe collateralized debt obligations, including their cash flows`,
      intro: `Prior Learning Modules have shown the funding technique of securitization can 
be backed by diverse types of assets, including loans and receivables as well as res -
idential or commercial mortgages. A unifying principle in all asset-backed security 
(ABS) structures is that their underlying cash flows can be reconfigured into various 
tranches, each with its particular payment pattern to investors and associated risks. 
The advantage of this targeted partitioning includes a reduction in the variability of 
cash flows and the reallocation of risks, such as default and early repayment across 
specific tranches, with associated returns. Overall, ABS securitization provides risk 
transfer, flexibility to issuers and investors, and efficiency of capital allocation.`,
      overview: `■ Covered bonds are issued by financial institutions as senior 
debt obligations. Backed by a segregated pool of assets typ-
ically consisting of commercial or residential mortgages, or public 
sector assets, these assets remain on the issuer’s balance sheet.
 ■ Non-mortgage ABS are securitizations that remove the pool of assets 
from the original issuer’s balance sheet. They are generally collat -
eralized by non-amortizing loans, such as credit card receivables, 
that retain their original loan value during a specific period of their 
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Covered bonds are issued by financial institutions as senior 
debt obligations. Backed by a segregated pool of assets typ-
ically consisting of commercial or residential mortgages, or public 
sector assets, these assets remain on the issuer’s balance sheet.
 ■ Non-mortgage ABS are securitizations that remove the pool of assets 
from the original issuer’s balance sheet. They are generally collat -
eralized by non-amortizing loans, such as credit card receivables, 
that retain their original loan value during a specific period of their 
1
LEARNING MODULE
18
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 18  Asset-Back ed Security (ABS) Instrument and Market Features462
life before the stated maturity date, known as the lockout or revolv-
ing period. During this time, principal that is repaid is reinvested to 
replenish the collateral pool.
 ■ Collateralized debt obligation (CDO) is a generic term describing 
securitization backed by diversified collateral pools of non-mortgage 
debt (such as bonds or loans) that redistribute segmented cash flows 
to investors. The CDO’s tranches receive the cash flows according to 
an order of priority, with senior claims having lower bond-like pay -
outs and junior claims receiving potentially higher but more variable 
returns.
 ■ The most common CDO structure is a collateralized loan obligation 
(CLO) and is subject to uniquely complex non-linear risks in cases of 
collateral defaults.
 ■ Credit tranching, which involves creating distinct senior and subordi-
nated bond classes (“tranches”), offers credit protection for the more 
senior bond classes in a securitization. Senior bond classes are paid 
from the underlying asset pool before subordinated tranches; subordi-
nated bond classes absorb any cash flow losses resulting from defaults 
in the asset pool before senior tranches.
 ■ Creating a set of bond classes allows investors to choose the level of 
risk, expected maturity, and the associated returns they prefer. Each 
bond class created in a securitization is typically rated based on both 
the quality of the underlying collateral and the seniority of the class.
LEARNING MODULE SELF-ASSESSMENT
1.
 Which of t
he following types of descriptive information is typically 
excluded from an ABS term sheet?
A. Conditions for e
arly amortization
B. Mark
et values of the tranche notes
C. Aggr
egate amount of collateral pool assets
Solution:
The correct answer is B. The term sheet typically provides the face value of 
the tranche notes at the time of the transaction, not their market value. Both 
A and C are incorrect as these items are typically included in the term sheet.
2.
 Aft
er the lockout period for ABS with non-amortizing collateral, how are 
the cash flows for loan repayments directed?
A. All of the pr
incipal is reinvested to acquire additional loans.
B. Par
t of the principal is reinvested if the collateral pool is depleted.
C. No princ
ipal is reinvested, and all is distributed to different tranches.
Solution:
The correct answer is C. When the lockout period is over and the amortiza-
tion period starts, any principal that is repaid will not be reinvested in new 
loans but will be distributed to the different tranches.
3.
 The pre
vailing CDO structure is the:
A. CL
O.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 463
B. CMO.
C. Str
uctured finance CDO.
Solution:
The correct answer is A. Collateralized loan obligations (CLOs) have a col-
lateral pool composed of loans. B is incorrect because while similar, CMOs 
are based on mortgages. C is incorrect because it is based on a portfolio of 
other CDOs.
4.
 Which of t
he following statements about CLOs is accurate?
A. The CLO r
eplicates the firm’s capital structure.
B. Purc
hases of a CLO’s collateral are funded by issuing equity.
C. A CLO
’s junior tranche earns a potentially higher yield than compara-
ble corporate bonds.
Solution:
The correct answer is A. Fundamentally, a CLO replicates the capital 
structure of the firm. B is incorrect because CLO collateral purchases rely 
on funds obtained from the issuance of debt. C is incorrect because it is the 
senior of mezzanine tranches that earn a potentially higher yield than com-
parable corporate bonds.
5.
 Which of t
he following aspects of their transaction structures is most likely 
shared by solar ABS, CLOs, and covered bonds?
A. A pre-f
unding period
B. An unsta
ble collateral pool
C. A diversity of defa
ult exposures
Solution:
The correct answer is B. All these ABS lack a stable initial asset pool and re-
quire ongoing collateral management. A is incorrect because a pre-funding 
period is used by solar ABS post transaction to acquire additional qualifying 
assets that meet certain eligibility criteria. C is incorrect because covered 
bonds have only one bond class with its associated default exposure in its 
cover pool.
6.
 Which in
ternal credit enhancement involves creating bond classes that 
differ in how they share any losses resulting from defaults in the collateral 
pool?
A.
 Sub
ordination
B. Over
collateralization
C. Ca
sh collateral accounts
Solution:
The correct answer is A. Subordination or credit tranching in the securitiza-
tion transaction involves creating more than one bond class or tranche, and 
the bond classes differ in how they share any losses resulting from defaults 
in the collateral pool. B is incorrect because overcollateralization is an inter-
nal credit enhancement in which the collateral underlying the transaction is 
larger than the face value of the issued bonds, so that even if defaults are in 
the pool, the transaction has sufficient cushion to continue paying principal 
and interest payments on the bonds. C is incorrect because it is a type of 
external, not internal, credit enhancement.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 18  Asset-Back ed Security (ABS) Instrument and Market Features464
7. Which of the following statements about covered bonds is incorrect?
A. The LT
V on the mortgages included in the transactions must meet 
certain standards to be eligible for inclusion in the pool.
B. Covere
d bond transactions typically involve collateral underlying the 
transaction that is less than the face value of the issued bonds.
C. Redem
ption regimes exist to align the covered bond’s cash flows with 
the original maturity schedule in the event of default of a covered 
bond’s sponsor.
Solution:
The correct answer is B. Covered bond transactions typically involve collat-
eral underlying the transaction, which exceeds the face value of the issued 
bonds referred to as overcollateralization. A is incorrect because it is a 
correct statement. The loan to value (LTV) on the mortgages included in the 
transactions must meet certain standards to be eligible for inclusion in the 
pool. If a mortgage fails to meet the LTV criteria, it is replaced with another 
mortgage that meets the criteria. C is incorrect because it is a correct state-
ment. Redemption regimes exist to align the covered bond’s cash flows as 
closely as possible with the original maturity schedule in the event of default 
of a covered bond’s financial sponsor.
8.
 Which of t
he following bonds experiences a bond default and acceler-
ated bond payments if payments are not made according to the original 
schedule?
A.
 Sof
t-bullet covered bonds
B. Har
d-bullet covered bonds
C. Conditional pa
ss-through covered bonds
Solution:
The correct answer is B. For hard-bullet covered bonds, if payments do not 
occur according to the original schedule, a bond default is triggered and 
bond payments are accelerated. A is incorrect because soft-bullet covered 
bonds delay the bond default and payment acceleration of bond cash flows 
until a new final maturity date, which is usually up to a year after the origi-
nal maturity date. C is incorrect because conditional pass-through covered 
bonds convert to p`,
    },
    {
      number: 19,
      title: `Mortgage-Backed Security (MBS) Instrument and Market Features`,
      pages: 38,
      los: `Mastery The candidate should be able to:
define prepayment risk and describe time tranching structures in
securitizations and their purpose
describe fundamental features of residential mortgage loans that are
describe types and characteristics of residential mortgage-backed
securities, including mortgage pass-through securities and
collateralized mortgage obligations, and explain the cash flows and
describe characteristics and risks of commercial mortgage-backed`,
      intro: `This module builds on the prior ones that provided an overview of asset-backed secu-
rities (ABS) and described the benefits of securitization, the securitization process, 
and typical securitization structures. This module focuses on the largest ABS market 
in the world, mortgage-backed securities (MBS). It introduces mortgage loans and 
their characteristic features; discusses residential MBS (RMBS), including mort -
gage pass-through securities and collateralized mortgage obligations (CMOs); and 
describes commercial MBS (CMBS). It shows how to measure, mitigate, and share 
securitization-related risks across different tranches and their characteristics, and it 
examines MBS cash flows and risks.`,
      overview: `■ Prepayment risk is the risk that the borrower does not repay 
the principal (or a portion of the principal) as scheduled. 
Contraction risk occurs when the borrower repays the principal faster 
than anticipated, while extension risk occurs when the borrower 
repays the principal more slowly than planned.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Prepayment risk is the risk that the borrower does not repay 
the principal (or a portion of the principal) as scheduled. 
Contraction risk occurs when the borrower repays the principal faster 
than anticipated, while extension risk occurs when the borrower 
repays the principal more slowly than planned.
1
LEARNING MODULE
19
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 19  Mort gage-Backed Security (MBS) Instrument and Market Features494
 ■ Mortgage-backed securities (MBS) are bonds created from securi-
tizing mortgage loans. Mortgage loans provide borrowers the funds 
to purchase property and require borrowers to repay lenders on a 
mutually agreed schedule, otherwise the lender has the right to seize 
the property.
 ■ MBS can be created based on either residential or commercial mort -
gages. Bonds created from the securitization of mortgages backed 
by residential properties are residential mortgage-backed securities 
(RMBS).
 ■ Because both scheduled principal repayments and unscheduled pre-
payments are made over the life of an MBS, the contractual maturity 
for an MBS does not reveal its actual payments and prepayments. The 
weighted average life is a measure widely used to assess when an MBS 
can be expected to be paid off.
 ■ A mortgage pass-through security is a security created when mort -
gage lenders pool mortgages together and use them to back securities 
that they sell to investors. The cash flows of a mortgage pass-through 
security depend on the monthly cash flows of the underlying pool of 
mortgages.
 ■ Collateralized mortgage obligations (CMOs) securitize mortgage 
pass-through securities or multiple pools of loans and are structured 
to redistribute the cash flows to different bond classes or tranches, 
thereby creating securities that have different exposures to prepay -
ment risk.
 ■ The tranching structure of a CMO can redistribute prepayment risk 
across the different tranches; the more senior a tranche is, the less 
exposure it has to prepayment risk and default risk.
 ■ Commercial mortgage-backed securities (CMBS) can consist of just a 
few underlying commercial mortgages, and so one default in a CMBS 
pool may significantly impact the CMBS investors. Investors must 
evaluate this unique concentration risk by analyzing the individual 
loans and properties backing the CMBS, the owners of the commercial 
properties themselves, as well as the CMBS structure.
 ■ Unlike RMBS, CMBS offer investors call protection at either the struc -
tural or individual loan level and thus trade more like corporate bonds 
than RMBS. However, commercial mortgages often include a large 
balloon payment at maturity, making CMBS more vulnerable to a type 
of extension risk, balloon risk.
SELF-ASSESSMENT
1.
 Which of t
he following statements regarding the loan-to-value ratio 
(LTV) is most accurate?
A. The LT
V for a given mortgage remains static for the life of the loan.
B. The higher t
he LTV, the more protection a lender has in the event of 
default.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 495
C. LTV serves as a key measure in both residential and commercial 
mor
tgages.
Solution:
The correct answer is C. LTV serves as a key measure both in residential 
and commercial mortgages. LTV is calculated as the ratio of the amount of 
the mortgage to the property’s value. A is incorrect because over time, the 
LTV changes: As the borrower makes mortgage payments, including prin-
cipal repayments, the outstanding balance on the loan is reduced and also, 
fluctuations in the market value of the property cause the borrower’s equity 
to change. B is incorrect because the higher the LTV, the less protection a 
lender has in the event of default.
2.
 Which of t
he following statements regarding mortgage-backed securities 
(MBS) is most accurate? MBS:
A. mu
st be backed or guaranteed by a government or a quasi-government 
entity.
B. can b
e created by securitizing mortgages backed by residential or by 
commercial properties.
C. tha
t use credit enhancements to reduce credit risk for securities 
backed by residential mortgages typically are agency RMBS.
Solution:
The correct answer is B. The mortgages in MBS can either be residential 
mortgages or commercial mortgages. A is incorrect because MBS do not 
have to be guaranteed by the government or a quasi-government entity. But, 
when these mortgages or the securities issued backed by these mortgages 
are guaranteed by the government, there is a credit support. MBS backed by 
residential mortgages that are issued by private entities and not guaranteed 
by a federal agency or a government-sponsored enterprise (GSE) are called 
“non-agency RMBS. ” C is incorrect because non-agency RMBS, not agen-
cy RMBS, typically use credit enhancements, such as insurance, letters of 
credit, guarantees, or subordinated interests, to mitigate the credit risk and 
improve the overall quality of the mortgage pool. These securities include 
credit enhancements because they are not guaranteed or insured by a gov-
ernment agency or by a GSE.
3.
 When a mortg
age is used as collateral for a mortgage pass-through security, 
the mortgage is most likely said to be:
A. enhance
d.
B. se
curitized.
C. subor
dinated.
Solution:
The correct answer is B. When a mortgage is used as collateral for a 
mortgage pass-through security, the mortgage is said to be securitized. 
A and C are incorrect because a mortgage that is used as collateral for a 
mortgage pass-through security is said to be securitized, not enhanced or 
subordinated.
4.
 Which of t
he following structures is created through time tranching?
A. Z-tranc
hes
B. Floa
ting-rate tranches
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 19  Mort gage-Backed Security (MBS) Instrument and Market Features496
C. Principal-only (PO) securities
S
olution:
The correct answer is A. Z-tranches and residual tranches are created 
through time tranching, which means they do not pay interest payments 
until a pre-set date. B is incorrect because floating-rate tranches carry 
interest rates that are linked to an index or a market reference rate (MRR) 
and are used to hedge interest rate risk in portfolios. C is incorrect because 
principal-only (PO) securities pay only the principal repayments from the 
pool and can be created either from mortgage pass-throughs or as a tranche 
in a CMO.
5.
 Which of t
he following risks most likely explains why the maturity of an 
MBS declines when interest rates decline?
A. Ballo
on risk
B. Ex
tension risk
C. Contrac
tion risk
Solution:
The correct answer is C. Contraction risk is the risk that the borrower might 
pay back the money borrowed more quickly than anticipated, reducing the 
amount of future payments the investor receives. When interest rates de-
cline, actual prepayments will be higher than forecasted because homeown-
ers will be more likely to refinance their mortgages. A is incorrect because 
balloon risk occurs when the borrower fails to make the balloon payment at 
the maturity of a loan with a balloon payment; it is a form of extension risk. 
B is incorrect because extension risk is the risk that the borrower might pay 
back the money borrowed more slowly than anticipated, extending rather 
than shortening the time of repayment and the maturity of the bond.
6.
 Which of t
he following statements related to mortgage-backed securities 
(MBS) is true?
A. The con
tractual maturity for an MBS accurately predicts future pay-
ments and prepayments.
B. A me
asure widely used by market participants for MBS is the weighted 
average life, or simply the average life, of the MBS.
C. A 30-ye
ar, option-free corporate bond and an MBS with a 30-year 
legal maturity with the same coupon rate offer equivalent interest rate 
risk.
Solution:
The correct answer is B. A measure widely used by market participants for 
MBS is the weighted average life`,
    },
  ],
  deriv: [
    {
      number: 1,
      title: `Derivative Instrument and Derivative Market Features`,
      pages: 20,
      los: `Mastery The candidate should be able to:
define a derivative and describe basic features of a derivative
describe the basic features of derivative markets, and contrast
over-the-counter and exchange-traded derivative markets`,
      intro: `Earlier lessons described markets for financial assets related to equities, fixed income, 
currencies, and commodities. These markets are known as cash markets  or spot 
markets in which specific assets are exchanged at current prices referred to as cash 
prices or spot prices. Derivatives involve the future exchange of cash flows whose 
value is derived from or based on an underlying value. The following lessons define 
and describe features of derivative instruments and derivative markets.`,
      overview: `■ A derivative is a financial contract that derives its value from 
the performance of an underlying asset, which may represent a 
firm commitment or a contingent claim.
 ■ Derivative markets expand the set of opportunities available to market 
participants beyond the cash market to create or modify exposure to 
an underlying.
 ■ The most common derivative underlyings include equities, fixed 
income and interest rates, currencies, commodities, and credit.
 ■ Over-the-counter (OTC) derivative markets involve the initiation 
of customized, flexible contracts between derivatives end users and 
financial intermediaries.
 ■ Exchange-traded derivatives (ETDs) are standardized contracts traded 
on an organized exchange, which requires collateral on deposit to 
protect against counterparty default.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ A derivative is a financial contract that derives its value from 
the performance of an underlying asset, which may represent a 
firm commitment or a contingent claim.
 ■ Derivative markets expand the set of opportunities available to market 
participants beyond the cash market to create or modify exposure to 
an underlying.
 ■ The most common derivative underlyings include equities, fixed 
income and interest rates, currencies, commodities, and credit.
 ■ Over-the-counter (OTC) derivative markets involve the initiation 
of customized, flexible contracts between derivatives end users and 
financial intermediaries.
 ■ Exchange-traded derivatives (ETDs) are standardized contracts traded 
on an organized exchange, which requires collateral on deposit to 
protect against counterparty default.
1
LEARNING MODULE
1
Learning Module 1 Derivative Instrument and Derivative Market Features4
 ■ For derivatives that are centrally cleared, a central counterparty (CCP) 
assumes the counterparty credit risk of the derivative counterparties 
and provides clearing and settlement services.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements does not provide an argument for using a 
derivative instrument?
A. Issuers may offset the financial market exposure associated with a 
commercial transaction.
B. Derivatives typically have lower transaction costs than transacting 
directly in the underlying.
C. Large exposures to an underlying can be created with derivatives for a 
similar cash outlay.
Solution:
C is correct. Derivative contracts create an exposure to the underlying with 
a small cash outlay, so this is the statement that does not provide an argu-
ment for using a derivative instrument. Statements A and B are statements 
that are valid arguments for using derivatives.
2. Which of the following words makes the following statement correct? 
Market participants use derivative agreements to exchange cash flows in the 
future based on a(n) _________________. 
A. Underlying
B. Option
C. Hedge
Solution:
A is correct. Market participants use derivative agreements to exchange 
cash flows in the future based on an underlying.  B is incorrect because op-
tion refers to a specific derivative contract type. C is incorrect because hedge 
refers to a specific purpose of using a derivative contract.
3. Which of the following is a significant difference between exchange-traded 
derivative (ETD) and over the counter (OTC) derivative contracts?
A. ETDs create counterparty credit risk for derivative users, while OTC 
derivatives do not.
B. ETDs are standardized contracts, while OTC derivatives are 
customized.
C. ETDs have higher transaction costs compared to OTC derivatives.
Solution:
B is correct. Exchanges standardize contracts to facilitate trading volume. 
However, users often require specific customized features, and the OTC 
market can accommodate these needs. A is incorrect because exchanges 
bear the counterparty credit risk of derivatives. C is incorrect because ETDs 
have lower transaction costs compared to OTC derivatives. 
Derivative Features 5
4. If a corporate issuer enters into a centrally cleared OTC derivative contract, 
which of the following risks is likely of most concern to the issuer and other 
participants in this market?
A. Interest rate risk
B. Counterparty credit risk
C. Systemic risk
Solution:
C is correct. Because all the credit risk is taken on by the CCP , all partici-
pants in this market are most concerned that the CCP is able to satisfy its 
obligations to all contracts. A is incorrect because interest rate risk is an 
underlying risk that can be hedged or managed with certain OTC derivative 
contracts. B is incorrect because the CCP assumes the credit risk from all 
parties to the contracts. 
DERIVATIVE FEATURES
define a derivative and describe basic features of a derivative 
instrument
Definition and Features of a Derivative
A derivative is a financial instrument that derives its value from the performance of 
an underlying asset. The asset in a derivative is called the underlying. The underlying 
may not be an individual asset but rather a group of standardized assets or variables, 
such as interest rates or a credit index.
Market participants use derivative agreements to exchange cash flows in the future 
based on an underlying value. For example, Exhibit 1  shows the one-time future 
exchange of publicly traded shares of stock at a fixed price in a derivative known as 
a forward contract.
2
Learning Module 1 Derivative Instrument and Derivative Market Features6
Exhibit 1: Forward Contract
€30 per
share
1,000 Airbus
(AIR) shares
at ST
AMY
investments
Contract
Financial
intermediary
Time
t = 0t  = T
€30,000
1,000 AIR
shares where
ST = €25
AMY
investments 
Financial
intermediary 
A derivative does not directly pass through the returns of the underlying but trans -
forms the performance of the underlying. In Exhibit 1 , AMY Investments agrees 
today (t = 0) to deliver 1,000 shares of Airbus (AIR) at a fixed price of €30 per share 
on a future date (t = T), which in our example is in six months. The forward contract 
allows AMY to transfer the price risk of underlying AIR shares to a second party, or 
a counterparty, by entering into this derivative contract. If the spot price of AIR (ST) 
is €25 per share at time T in six months, AMY will either receive €30,000 from its 
counterparty, a financial intermediary, for 1,000 AIR shares now worth just €25,000, 
or simply settle with the intermediary the €5,000 difference in cash. Derivative trans -
actions usually involve at least one financial intermediary as a counterparty. As we 
will see later, counterparty credit risk, or the likelihood that a counterparty is unable 
to meet its financial obligations under the contract, is an important consideration for 
these instruments.
A derivative contract is a legal agreement between counterparties with a specific 
maturity, or length of time until the closing of the transaction, or settlement. The 
buyer of a derivative enters a contract whose value changes in a way similar to a long 
position in the underlying, and the seller has exposure similar to a short position. 
The contract size (sometimes referred to as notional principal or amount) is agreed 
upon at the outset and may remain constant or change over time.
Exhibit 1 is an example of a stand-alone derivative, a distinct derivative contract, 
such as a derivative on a stock or bond. An embedded derivative is a derivative within 
an underlying, such as a callable, puttable, or convertible bond. Exhibit 2 provides a 
sample term sheet that includes key features of AMY Investment’s stand-alone forward 
contract with a financial intermediary.
Exhibit 2: Sample Forward Contract Term Sheet
Contract Type: 
Firm commitment or contingent 
right to exchange future cash 
flows
Forward Transaction Term Sheet
Maturity: 
Final date upon which payment 
or settlement occurs
Start Date: [Spot start]
Maturity Date: [Six months from Start Date]
Derivative Features 7
Counterparties:  
Legal entities entering the deriv -
ative contract
Forward 
Purchaser:
[Financial Intermediary]
Forward Seller: AMY Investments
Underlying: 
Reference asset or variable used 
as source for contract value  
Contract Size:  
Amount(s) used for calculation 
to price and value the derivative
Forward 
Delivery:
1,000 shares of Airbus (AIR) com -
mon stock traded on the Frankfurt 
Stock Exchange
Underlying Price: 
Pre-agreed price for com -
mitment or contingent claim 
settlement
Forward Price: €30 per share
Contract Details Business Days: Frankfurt
Documentation: ISDA Agreement and credit terms 
acceptable to both parties
The derivative between AMY and the financial intermediary is a firm commitment, 
in which a pre-determined amount is agreed to be exchanged at settlement. Firm 
commitme`,
    },
    {
      number: 2,
      title: `Forward Commitment and Contingent Claim Features and Instruments`,
      pages: 30,
      los: `Mastery The candidate should be able to:
define forward contracts, futures contracts, swaps, options (calls and
puts), and credit derivatives and compare their basic characteristics
determine the value at expiration and profit from a long or a short
position in a call or put option
contrast forward commitments with contingent claims`,
      intro: `An earlier lesson established a derivative as a financial instrument that derives its 
performance from an underlying asset, index, or other financial variable, such as 
equity price volatility. Primary derivative types include a firm commitment in which 
a predetermined amount is agreed to be exchanged between counterparties at settle -
ment and a contingent claim in which one of the counterparties determines whether 
and when the trade will settle. The following lessons define and compare the basic 
features of forward commitments and contingent claims and explain how to calculate 
their values at maturity.`,
      overview: `■ Forwards, futures, and swaps represent firm commitments, or 
derivative contracts that require counterparties to exchange an 
underlying in the future based on an agreed-on price.
 ■ Forwards are a flexible over-the-counter (OTC) derivative instrument, 
while futures are standardized and traded on an exchange with a daily 
settlement of contract gains and losses.
 ■ Swap contracts are a firm commitment to exchange a series of cash 
flows in the future. Interest rate swaps are the most common type and 
involve the exchange of fixed interest payments for floating interest 
payments.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Forwards, futures, and swaps represent firm commitments, or 
derivative contracts that require counterparties to exchange an 
underlying in the future based on an agreed-on price.
 ■ Forwards are a flexible over-the-counter (OTC) derivative instrument, 
while futures are standardized and traded on an exchange with a daily 
settlement of contract gains and losses.
 ■ Swap contracts are a firm commitment to exchange a series of cash 
flows in the future. Interest rate swaps are the most common type and 
involve the exchange of fixed interest payments for floating interest 
payments.
1
LEARNING MODULE
2
CFA Institute would like to thank 
Don Chance, PhD, CFA, for his 
contribution to this section, 
which includes material derived 
from material that appeared 
in Derivative Markets and 
Instruments , featured in the 2022 
CFA® Program curriculum.
Learning Module 2 Forward Commitment and Contingent Claim Features and Instruments24
 ■ Option contracts are contingent claims in which one of the counter -
parties determines whether and when a trade will settle. The option 
buyer pays a premium to the seller for the right to transact the under -
lying in the future at a pre-agreed exercise price.
 ■ Option contract payoff and profit profiles are non-linear as the 
underlying price changes, as opposed to firm commitments, such as 
forwards, futures, and swaps, which are linear in underlying price 
changes.
 ■ Market participants often create similar exposures to an underlying 
using firm commitments and contingent claims, although these deriva -
tive instrument types involve different payoff and profit profiles.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements correctly describes a difference between 
a forward contract and a futures contract?
A. A forward contract sets an agreed-on price for buyer and seller, while 
a futures contract does not.
B. A forward contract sets an agreed-on transaction date for the seller to 
deliver the underlying to the buyer, while a futures contract does not.
C. A forward contract does not require daily settlement of gains and 
losses, while a futures contract does.
Solution:
C is correct. Futures contracts require daily settlement through the ex-
change clearinghouse mark-to-market process. Forward contracts are 
settled at their maturity date, although the two parties to the contract may 
customize alternative settlement procedures. A is incorrect because both 
forward and futures contracts set an agreed-on price for a future transac-
tion. B is incorrect because both forwards and futures contracts include a 
maturity date when the underlying will be exchanged.
2. Identify which example fits each of the following firm commitments:
 
A. Futures contract purchaser 1. Agrees to make a single exchange 
in the future at a pre-agreed price 
under an OTC contract
B. Forward contract seller 2. Agrees to a single exchange in the 
future based on standardized terms 
set by an exchange
C. Fixed-rate payer on an interest rate 
swap
3. Agrees to a series of exchanges 
of interest fixed for floating interest 
payments
 
Solution:
1. B is correct. A forward contract seller agrees to make a single exchange in 
the future at a pre-agreed price under an OTC contract.
2. A is correct. A futures contract purchaser agrees to a single exchange in 
the future based on standardized terms set by an exchange.
Introduction 25
3. C is correct. A fixed-rate payer on an interest rate swap agrees to a series 
of exchanges of fixed for floating interest payments.
3. Identify which example fits each of the following contingent claims:
 
A. Put option purchaser 1. Seeks to gain from an increase in the 
underlying price
B. Call option purchaser 2. Allows the option to expire at matu -
rity of the underlying price is above the 
exercise price
C. Both a put option purchaser and a 
call option purchaser
3. Pays an option premium to the option 
seller when the contract is agreed on
 
Solution:
1. B is correct. A call option purchaser seeks to gain from an increase in the 
underlying price.
2. A is correct. A put option purchaser will allow an option to expire at ma-
turity without exercise if the underlying price is above the exercise price.
3. C is correct. Both a put option purchaser and a call option purchaser will 
pay a premium to the option seller when the option contract is executed.
4. An option to buy an underlying security at an exercise price of USD45 in 
three months trades at a premium of USD6. After three months, the under-
lying trades at USD50. Which of the following responses correctly describes 
the profit/loss position of the option buyer and seller?
A. Option buyer earns USD5 profit, and option seller earns USD5 loss.
B. Option buyer earns USD1 loss, and option seller earns USD1 profit.
C. Option buyer earns USD5 profit, and option seller earns USD0.
Solution:
B is correct. The option buyer’s position generates a payoff of USD5, equal 
to max(0, 50 – 45). The option buyer paid USD6 to buy the option position, 
and this cash flow more than offsets the positive payoff. Thus, the option 
buyer’s overall profit is a loss of USD1 (i.e., 5 – 6). For the option seller, the 
option position creates a negative payoff of –USD5, equal to –max(0, 50 – 
45). However, the option seller received the option premium of USD6, so the 
overall profit is USD1 (i.e., 6 – 5). A is incorrect because the USD5 amount 
reflects the option payoff only, not profits and losses accounting for the op-
tion premium. C is incorrect because the buyer’s profit incorrectly states the 
payoff only to the option position, not the profit. The seller’s profit would be 
correct only if the underlying traded at 51, not 50.
5. A put option buyer earns a positive profit in which of the following 
conditions?
A. The price of the underlying at option expiration is less than the 
option’s exercise price.
B. The price of the underlying at option expiration is greater than the 
option’s exercise price.
Learning Module 2 Forward Commitment and Contingent Claim Features and Instruments26
C. The price of the underlying is less than the option’s exercise price 
minus the option’s premium.
Solution:
C is correct. For a put option buyer to earn a positive profit, the underlying 
price must be sufficiently below the put option’s exercise price such that (1) 
the put option can be exercised with a positive payoff and (2) the positive 
payoff is greater than the option premium paid. Thus, only if the underlying 
price falls below the exercise price minus the premium can this occur. A is 
incorrect because this condition only implies a positive payoff on the option 
but would include prices at which the payoff is not greater than the premi-
um. B is incorrect because the put option would be out of the money and 
would generate zero payoff.
6. Which of the following positions on the same underlying benefit from oppo-
site price movements in an underlying?
A. Long forward contract, short put option
B. Short forward contract, long put option
C. Short forward contract, short put option
Solution:
C is correct. A short forward position benefits as the underlying price 
declines, while a short put benefits only when the underlying price increas-
es. A is incorrect because both a long forward and a short put benefit from 
underlying price increases. B is incorrect because both a short forward and 
a long put option benefit from underlying price decreases.
FORWARDS, FUTURES, AND SWAPS
define forward contracts, futures contracts, swaps, options (calls and 
puts), and credit derivatives and compare their basic characteristics
Forwards, futures, and swaps are the most common derivative contracts which repre -
sent a firm commitment. This firm commitment is an obligation of both counterparties 
to perform under the terms of the derivative contract. Key c`,
    },
    {
      number: 3,
      title: `Derivative Benefits, Risks, and Issuer and Investor Uses`,
      pages: 24,
      los: `Mastery The candidate should be able to:
describe benefits and risks of derivative instruments
compare the use of derivatives among issuers and investors`,
      intro: `Earlier lessons described how derivatives expand the set of opportunities available to 
market participants to create or modify exposure or to hedge the price of an under -
lying. This learning module describes the benefits and risks of using derivatives and 
compares their use among issuers and investors.`,
      overview: `■ Derivatives allow market participants to allocate, manage, or 
trade exposure without exchanging an underlying in the cash 
market.
 ■ Derivatives also offer greater operational and market efficiency than 
cash markets and allow users to create exposures unavailable in cash 
markets.
 ■ Derivative instruments can involve risks such as a high degree of 
implicit leverage and less transparency in some cases than cash 
instruments, as well as basis, liquidity, and counterparty credit risks. 
Excessive risk taking in the past by market participants through the 
use of derivatives has contributed to market destabilization and sys -
temic risk.
 ■ Issuers typically use derivative instruments to offset or hedge mar -
ket-based underlying exposures that impact their assets, liabilities, and 
earnings.
 ■ Issuers usually seek hedge accounting treatment for derivatives to 
minimize income statement and cash flow volatility.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Derivatives allow market participants to allocate, manage, or 
trade exposure without exchanging an underlying in the cash 
market.
 ■ Derivatives also offer greater operational and market efficiency than 
cash markets and allow users to create exposures unavailable in cash 
markets.
 ■ Derivative instruments can involve risks such as a high degree of 
implicit leverage and less transparency in some cases than cash 
instruments, as well as basis, liquidity, and counterparty credit risks. 
Excessive risk taking in the past by market participants through the 
use of derivatives has contributed to market destabilization and sys -
temic risk.
 ■ Issuers typically use derivative instruments to offset or hedge mar -
ket-based underlying exposures that impact their assets, liabilities, and 
earnings.
 ■ Issuers usually seek hedge accounting treatment for derivatives to 
minimize income statement and cash flow volatility.
1
LEARNING MODULE
3
Learning Module 3 Derivative Benefits, Risks, and Issuer and Investor Uses54
 ■ Investors use derivatives to modify investment portfolio cash flows, 
replicate investment strategy returns in cash markets, and/or create 
exposures unavailable to cash market participants.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements does not describe a likely operational 
advantage of a futures market transaction as compared to a cash market 
transaction?
A. It is easier to take a short position in the futures market than in the 
cash market.
B. There is greater liquidity in the futures market than in the cash 
market.
C. Cash requirements to buy in the cash market are lower than margin 
requirements to buy in the futures market.
Solution:
C is correct. The opposite is true: Margin requirements of a futures contract 
are typically only a small percentage of the cash requirement to buy the 
same amount of underlying in the cash market. A and B are both incorrect 
because both of these statements describe operational advantages of futures 
markets over cash markets.
2. Identify which derivative risk fits each of the following statements: 
 
A. Basis risk 1. Potential divergence between the cash flow tim -
ing of a derivative versus an underlying or hedged 
transaction
B. Liquidity risk 2. Potential divergence between the expected 
value of a derivative versus an underlying or 
hedged transaction
C. Counterparty credit risk 3. Potential for a derivatives contract partici -
pant to fail to meet their obligations under an 
agreement
 
Solution
1. B is correct. Liquidity risk is the potential divergence between the cash 
flow timing of a derivative versus an underlying or hedged transaction.
2. A is correct. Basis risk is the potential divergence between the 
expected value of a derivative versus an underlying or hedged 
transaction.
3. C is correct. Counterparty credit risk is the potential for a deriva -
tives contract participant to fail to meet their obligations under an 
agreement.
Derivative Benefits 55
3. Identify which benefit of derivatives use fits each of the following examples: 
 
A. Price discovery function 1. Equity market participants monitor index futures 
prior to the market open for an indication of the 
direction of cash market prices in early trading.
B. Operational advantages 2. An issuer may wish to lock in its future debt 
costs in advance of the maturity of an outstanding 
debt issuance.
C. Ability to allocate, trans -
fer, and manage risk
3. Futures contracts in physical commodities 
eliminate the need to directly transport, insure, and 
store a physical asset in order to take a position in 
its underlying price.
 
Solution
1. A is correct. Equity market participants monitoring index futures prior 
to the market open for an indication of the direction of cash market 
prices in early trading is an example of the derivatives price discovery 
function.
2. C is correct. An issuer locking in its future debt costs in advance of the 
maturity of an outstanding debt issuance is an example of the ability to 
allocate, transfer, and manage risk.
3. B is correct. Futures contracts in physical commodities eliminating the 
need to directly transport, insure, and store a physical asset in order to 
take a position in its underlying price is an example of the operational 
advantages of a derivative.
4. Which of the following hedge accounting designations is appropriate for 
categorizing a corporate issuer’s use of an interest swap converting a float-
ing-rate debt into a fixed-rate debt?
A. Fair value hedge
B. Cash flow hedge
C. Net investment hedge
Solution:
B is correct. Cash flow hedge treatment is appropriate for instances in which 
a variable cash flow is converted to a fixed cash flow through the use of a de-
rivative. A is incorrect because a fair value hedge is appropriate accounting 
treatment for derivative contracts that offset fluctuations in the fair value 
of the underlying. C is incorrect because a net investment hedge offsets the 
foreign currency risk of the value of a foreign subsidiary.
DERIVATIVE BENEFITS
describe benefits and risks of derivative instruments
2
Learning Module 3 Derivative Benefits, Risks, and Issuer and Investor Uses56
Earlier lessons demonstrated how market participants use derivative instruments as 
an alternative to cash markets to hedge or offset commercial risk as well as create or 
modify exposure to the price of an underlying. We now take a more detailed look at 
these and other benefits of the use of derivatives, while also considering several risks 
unique to derivative instruments.
Derivative instruments provide users the opportunity to allocate, transfer, and/or 
manage risk without trading an underlying. Cash or spot market prices for financial 
instruments and commercial goods and services are a critical source of information 
for the decision to buy or sell. However, in many instances, issuers and investors 
face a timing difference between an economic decision and the ability to transact in 
a cash market.
For example, issuers face the following timing differences when making operational 
and financing decisions:
 ■ A manufacturer may need to order commodity inputs for its production 
process in advance of receiving finished-goods orders.
 ■ A retailer may await a shipment of goods priced in a foreign currency before 
selling domestic currency to make payment.
 ■ An issuer may wish to lock in its future debt costs in advance of the matu -
rity of an outstanding debt issuance.
Investors may face similar timing issues when making portfolio decisions that are 
separate from cash market transactions, as in the following cases:
 ■ An investor may seek to capitalize on a market view but lack the necessary 
cash on hand to transact in the spot market.
 ■ In anticipation of a future stock dividend, debt coupon, or principal repay -
ment, an investor may decide today how it will reinvest the proceeds in the 
future.
The ability to buy or sell a derivative instrument today at a pre-agreed price at a 
future date can bridge the timing gap between an economic decision and the ability 
to transact in underlying price risk under these scenarios. The use of forward com -
mitments or contingent claims to allocate or transfer risk across time and among 
market participants able and willing to accept those exposures is a consistent theme 
in derivative markets. Example 1 builds on an earlier illustration of how an issuer may 
benefit from the use of a derivative associated with a commercial contract.
EXAMPLE 1
Foreign Exchange Risk Transfer of an Export Contract
Recall Montau AG, the German capital goods producer introduced earlier, which 
signs a commercial contract with Jeon, Inc., a Korean manufacturer, to deliver 
a laser cutting machine at a price of KRW650,000,000 in 75 days. Montau has 
fixed domestic currency (EUR) costs and t`,
    },
    {
      number: 4,
      title: `Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives`,
      pages: 22,
      los: `Mastery The candidate should be able to:
explain how the concepts of arbitrage and replication are used in
explain the difference between the spot and expected future price
of an underlying and the cost of carry associated with holding the`,
      intro: `Earlier derivative lessons established the features of derivative instruments and markets 
and addressed both the benefits and risks associated with their use. Forward com -
mitments and contingent claims were distinguished by their different payoff profiles 
and other characteristics. We now turn our attention to the pricing and valuation of 
these instruments. As a first step, we explore how the price of a forward commitment 
is related to the spot price of an underlying asset in a way that does not allow for 
arbitrage opportunities. Specifically, the strategy of replication shows that identical 
payoffs to a forward commitment can be achieved from spot market transactions 
combined with borrowing or lending at the risk-free rate. Finally, the second lesson 
demonstrates how costs or benefits associated with owning an underlying asset affect 
the forward commitment price.`,
      overview: `■ Forward commitments are an alternative means of taking a 
long or short position in an underlying asset. A link between 
forward prices and spot prices exists to prevent investors from tak -
ing advantage of arbitrage opportunities across cash and derivative 
instruments.
 ■ A forward commitment may be replicated with a long or short spot 
position in the underlying asset and borrowing or lending at a risk-free 
rate. Investors can recreate a variety of positions by using appropriate 
combinations of spot, forward, and risk-free positions.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Forward commitments are an alternative means of taking a 
long or short position in an underlying asset. A link between 
forward prices and spot prices exists to prevent investors from tak -
ing advantage of arbitrage opportunities across cash and derivative 
instruments.
 ■ A forward commitment may be replicated with a long or short spot 
position in the underlying asset and borrowing or lending at a risk-free 
rate. Investors can recreate a variety of positions by using appropriate 
combinations of spot, forward, and risk-free positions.
1
LEARNING MODULE
4
CFA Institute would like to thank 
Don Chance, PhD, CFA, for his 
contribution to this section, 
which includes material derived 
from material that appeared 
in Derivative Markets and 
Instruments , featured in the 2022 
CFA® Program curriculum.
Learning Module 4 Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives78
 ■ The risk-free rate provides a fundamental link between spot and for -
ward prices for underlying assets with no additional costs or benefits 
of ownership.
 ■ The cost of carry is the net of the costs and benefits related to owning 
an underlying asset for a specific period and must be factored into 
the difference between the spot price and a forward price of a specific 
underlying asset.
 ■ The cost of carry may include costs, such as storage and insurance for 
physical commodities, or benefits of ownership, such as dividends for 
stocks and interest for bonds. Foreign exchange represents a special 
case in which the cost of carry is the interest rate differential between 
two currencies.
 ■ Forward prices may be greater than or less than the underlying spot 
price, depending on the specific cost of carry associated with owning 
the underlying asset.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements correctly describes how to replicate a 
long forward position?
A. Sell a risk-free bond, and buy a cash market position in the underlying.
B. Buy a risk-free bond, and buy a cash market position in the 
underlying.
C. Buy a risk-free bond, and sell a cash market position in the underlying.
Solution:
A is correct. Selling a risk-free bond provides the necessary cash to buy the 
underlying in the cash market. At the bond’s maturity, the underlying is 
sold at the future spot price, and the proceeds are used to pay off the bond. 
The profit on this transaction is dependent on the future spot price of the 
underlying compared to the underlying cash market price multiplied by one 
plus the risk-free rate, and this profit position is identical to that of a long 
forward position in the underlying. B is incorrect because buying the risk-
free bond creates a need for cash in addition to buying the underlying in the 
cash market. C is incorrect because this combination would replicate a short 
forward position.
2. Which of the following is closest to the arbitrage profit available to an 
investor who is able to buy an asset for a spot price of GBP50 at t = 0 and 
simultaneously sell a six-month forward commitment on the same asset at a 
forward price of GBP52.50? The risk-free rate of interest is 4%, and the asset 
has no additional costs or benefits.
A. GBP0.99
B. GBP0.48
Introduction 79
C. GBP1.51
Solution:
C is correct. The investor borrows at 4% for six months to buy the asset to-
day for GBP50. After six months, the investor pays the lender S0(1 + r)T, or 
GBP50.99 [= GBP50(1.04)0.5] in principal and interest and delivers the asset 
to satisfy the forward commitment to sell at GBP52.50. The investor’s ar-
bitrage profit is GBP1.51 (= GBP52.50 – GBP50.99). A is incorrect because 
this answer reflects the difference between the no-arbitrage forward price 
and the current spot price. B is incorrect because this answer reflects the 
difference between the forward price discounted back one year (rather than 
six months) and the current spot price. 
3. Which of the following statements correctly describes the relationship be-
tween a forward commitment price compared to the underlying spot price 
when the benefits of owning the underlying are greater than the costs of 
owning the underlying (including the opportunity interest costs)?
A. Forward commitment price > spot price.
B. Forward commitment price < spot price.
C. Forward commitment price = spot price.
Solution:
B is correct. Greater benefits associated with the underlying will be associat-
ed with a higher spot price relative to the forward commitment price, and if 
these benefits are greater than the costs of owning the underlying, then the 
spot price will be greater than the forward commitment price. A is incorrect 
because this inequality would be true in the case of the costs exceeding the 
benefits. C is incorrect because an equality between the two prices describes 
the rare circumstance in which costs and benefits are exactly equal.
4. Which of the following statements best defines a convenience yield?
A. Convenience yield reflects the preference that market participants 
exhibit for buying forward contracts to avoid having to pay cash up 
front.
B. Convenience yield reflects the preference that market participants 
exhibit for buying in the spot market to avoid having to pay for 
storage.
C. Convenience yield reflects the preference that market participants 
exhibit for buying in the spot market for non-cash reasons, including 
low inventories in the underlying cash market.  
Solution:
C is correct. The convenience yield is a non-cash benefit associated with 
owning an underlying physical commodity that arises under certain eco-
nomic conditions, including low inventories of the underlying. A is incorrect 
because the statement suggests convenience yield is a cost of owning the 
underlying. B is incorrect because the statement is contradictory in that it 
states that convenience yield causes market participants to prefer spot mar-
kets but incorrectly attributes this to a cost of owning the underlying.
Learning Module 4 Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives80
ARBITRAGE
explain how the concepts of arbitrage and replication are used in 
pricing derivatives
An earlier lesson on market efficiency established that market prices should not allow 
for the possibility of riskless profit or arbitrage in the absence of transaction costs. In 
its simplest form, an arbitrage opportunity arises if the “law of one price” does not 
hold, or an identical asset trades at the same time at different prices in different places.
In the case of a derivative contract whose value is derived from future cash flows 
associated with the price of an underlying asset, arbitrage opportunities arise either if 
two assets with identical future cash flows trade at different prices or if an asset with a 
known future price does not trade at the present value of its future price determined 
using an appropriate discount rate.
The first case of assets with identical future cash flows trading at different prices 
is illustrated in Exhibit 1.
Exhibit 1: Assets with Identical Future Cash Flows Trade at 
 Different Prices
EUR99 = S0
A < S0
B = EUR99.15
Buy A at S0
A, Sell B at S0
B
CF0 = (S0
B – S0
A) = (EUR99.15 – EUR99) + EUR0.15 > 0
0T ime T
ST
A = ST
B = EUR100
Sell A for ST
A, Buy B at ST
B
CFT = (ST
A – ST
B) = (EUR100 – EUR100) = 0
For example, assume the two assets are zero-coupon bonds with identical features 
and the same issuer. Both bonds mature on the same future date with a payoff of par 
and have the same risk of default between now and the maturity date.
1. Bond A has a price of EUR99 at time t = 0 (S0A = EUR99).
2. Bond B has a price of EUR99.15 at time t = 0 (S0B = EUR99.15).
3. Both bonds have an expected future price of EUR100 ( STA = STB = EUR100).
This scenario represents an arbitrage opportunity for an investor.
 ■ At time t = 0, the `,
    },
    {
      number: 5,
      title: `Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities`,
      pages: 30,
      los: `Mastery The candidate should be able to:
explain how the value and price of a forward contract are determined
at initiation, during the life of the contract, and at expiration
explain how forward rates are determined for interest rate forward
contracts and describe the uses of these forward rates.`,
      intro: `Earlier lessons introduced forward commitment features, payoff profiles, and concepts 
used in pricing these derivative instruments. In particular, the relationship between 
spot and forward commitment prices was established as the opportunity cost of own -
ing the underlying asset (represented by the risk-free rate) as well as any additional 
cost or benefit associated with holding the underlying asset. This price relationship 
both prevents arbitrage and allows a forward commitment to be replicated using spot 
market transactions and risk-free borrowing or lending.
In the first lesson, we explore the pricing and valuation of forward commitments 
on a mark-to-market basis from inception through maturity. This analysis is essential 
for issuers, investors, and financial intermediaries alike to assess the value of any asset 
or liability portfolio that includes these instruments. The second lesson addresses for-
ward pricing for the special case of underlying assets with different maturities such as 
interest rates, credit spreads, and volatility. The prices of these forward commitments 
across the so-called term structure are an important building block for pricing swaps 
and related instruments in later lessons.`,
      overview: `■ A forward commitment price agreed upon at contract incep -
tion remains fixed and establishes the basis on which the 
underlying asset (or cash) will be exchanged in the future versus the 
spot price at maturity.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ A forward commitment price agreed upon at contract incep -
tion remains fixed and establishes the basis on which the 
underlying asset (or cash) will be exchanged in the future versus the 
spot price at maturity.
1
LEARNING MODULE
5
Learning Module 5 Pricing and Valuation of Forward Contracts and for an Underlying with Varying 
Maturities
100
 ■ For an underlying asset that does not generate cash flows, the value of 
a long forward commitment prior to expiration equals the current spot 
price of the underlying asset minus the present value of the forward 
price discounted at the risk-free rate. The reverse is true for a short 
forward commitment. Foreign exchange represents a special case in 
which the spot versus forward price is a function of the difference 
between risk-free rates across currencies.
 ■ For an underlying asset with additional costs and benefits, the forward 
contract mark-to-market (MTM) value is adjusted by the sum of the 
present values of all additional cash flows through maturity.
 ■ Underlying assets with a term structure, such as interest rates, have 
different rates or prices for different times-to-maturity. These zero or 
spot and forward rates are derived from coupon bonds and market 
reference rates and establish the building blocks of interest rate deriv -
atives pricing.
 ■ Implied forward rates represent a breakeven reinvestment rate linking 
short-dated and long-dated zero-coupon bonds over a specific period.
 ■ A forward rate agreement (FRA) is a contract in which counterparties 
agree to apply a specific interest rate to a future period.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Match the following situations with their corresponding forward contract 
valuation for an asset with no additional costs or benefits.
 
1. At time t = 0, the spot price of 
the underlying asset rises instanta -
neously and other market parame -
ters remain unchanged.
A. The forward contract buyer has an 
MTM gain.
2. At time t, the present value of 
the forward price discounted at the 
risk-free rate (r) equals the current 
spot price (St).
B. The forward contract seller has an 
MTM gain.
3. At time T, the forward contract 
price, F0(T), is greater than the 
current spot price, ST.
C. The MTM value of the forward con -
tract is zero.
 
Solution:
1. A is correct. In order to satisfy the no-arbitrage condition, the original 
spot price, S0 at t = 0, must equal the present value of the forward price 
discounted at the risk-free rate, r. An immediate increase in the spot price to 
S0+ > S0 results in an MTM gain for the forward buyer.
2. C is correct. At any time t, the MTM value, Vt(T), is equal to the differ-
ence between the current spot price, St, and the present value of the forward 
price discounted at the risk-free rate, r, or F0(T)(1 + r)-(T-t). When St = F0(T)
(1 + r)-(T-t), then Vt(T) = 0.
3. B is correct. The MTM value to the forward contract seller upon settle-
ment at time T is equal to the settlement value of F0(T) − ST.
Introduction 101
2. An increase in the risk-free rate, r, following the inception of a forward con-
tract will cause which of the following to the forward contract’s MTM value 
to the forward seller if other parameters remain unchanged.
A. The forward contract’s MTM value to the forward seller will be 
unchanged.
B. The forward contract’s MTM value to the forward seller will increase.
C. The forward contract’s MTM value to the forward seller will decrease.
Solution:
C is correct. The mark-to-market value from the forward seller’s perspective 
is equal to Vt(T) in the following equation:
Vt(T) = F0(T)(1 + r)–( T– t) − St.
An increase in the risk-free rate, r, following the inception of a forward con-
tract will cause the present value of the forward price, F0(T), to fall, and this 
will reduce the MTM value from the contract seller’s perspective. 
3. Which of the following is closest to the two-year zero rate given a 3% annual 
coupon bond priced at 99 per 100 face value if a one-year annual coupon 
bond from the same issuer has a yield-to-maturity of 2.50%?
A. 3.5266%
B. 3.5000%
C. 3.5422%
Solution:
C is correct. The yield-to-maturity and the zero rate for a bond with a 
single cash flow at maturity in one period are identical, so the one-year zero 
rate, z1, equals 2.50%. Solve for the two-year zero rate (z2) in the following 
equation:
99 = 3/1.025 + 103/(1 + z2)2.
Solve for z2 to get 3.5422%. A is incorrect because 3.5266% is the internal 
rate of return (IRR) solved for cash flows of –99 at t = 0, 3 at t = 1, and 103 
at t = 2. This response assumes a flat term structure, which is not a correct 
assumption given the question. B is incorrect because this response implies 
that we can find the correct answer by assuming the coupon rate is the sim-
ple average of the one- and two-year zero rates. 
4. Which of the following is a correct description of a 2y3y forward rate?
A. The implied two-year rate beginning three years in the future.
B. The implied three-year rate beginning two years in the future.
C. The implied one-year rate beginning two years in the future.
Solution:
B is correct. In the terminology of forward rates, the first number reflects 
the point in time when a forward rate begins; thus, the forward rate stated 
above reflects a rate starting two years in the future. The second number 
reflects the maturity of the rate. Thus, the 2y3y forward rate reflects a three-
year rate starting in two years. A is incorrect because this is the description 
of the 3y2y forward rate. C is incorrect because this is the description of the 
2y1y rate.
Learning Module 5 Pricing and Valuation of Forward Contracts and for an Underlying with Varying 
Maturities
102
PRICING AND VALUATION OF FORWARD CONTRACTS
explain how the value and price of a forward contract are determined 
at initiation, during the life of the contract, and at expiration
Pricing versus Valuation of Forward Contracts
When counterparties enter into forward, futures, or swap contracts with one another, 
these contracts have an initial value of zero (ignoring trading and transaction costs as 
well as counterparty credit exposure). While forward commitments require no cash 
outlay at inception, their price incorporates the opportunity cost of a long cash posi -
tion as measured by the risk-free rate. The forward price or forward rate established 
at inception remains fixed and determines the basis on which the underlying asset (or 
cash) will be exchanged in the future versus the spot price at maturity.
As time passes and/or the underlying asset spot price and other parameters change, 
the value of a forward contract changes. This mark-to-market value of a contract reflects 
the change in the underlying price and other factors that would result in a gain or loss 
to a counterparty if the forward contract were to be settled immediately. The MTM 
gain of the forward seller will equal the MTM loss of the forward buyer and vice versa. 
Recall that a key difference between exchange-traded futures and over-the-counter 
forwards is that the futures clearinghouse settles these MTM changes in cash on a 
daily basis, while forward contract settlement typically occurs at maturity.
Pricing and Valuation of Forward Contracts at Initiation
The prior learning module established that a forward contract agreed at time t = 0 
occurs at a forward price, F0(T), that satisfies no-arbitrage conditions for the underly-
ing spot price (S0), the risk-free rate of return (r), and any additional costs or benefits 
associated with underlying asset ownership until the forward contract matures at time 
T. In an earlier example, AMY Investments agreed to purchase 1,000 Airbus (AIR) 
shares trading at the spot price ( ST) at maturity at an agreed upon forward price, 
F0(T), of EUR30 per share, as shown in Exhibit 1.
2
Pricing and Valuation of Forward`,
    },
    {
      number: 6,
      title: `Pricing and Valuation of Futures Contracts`,
      pages: 20,
      los: `Mastery The candidate should be able to:
compare the value and price of forward and futures contracts
explain why forward and futures prices differ`,
      intro: `Many of the pricing and valuation principles associated with forward commitments 
are common to both forward and futures contracts. For example, previous lessons 
demonstrated that forward commitments have a price that prevents market partici -
pants from earning riskless profit through arbitrage. It was also shown that long and 
short forward commitments may be replicated using a combination of long or short 
cash positions and borrowing or lending at the risk-free rate. Finally, both forward 
and futures pricing and valuation incorporate the cost of carry, or the benefits and 
costs of owning an underlying asset over the life of a derivative contract.
We now turn our attention to futures contracts. We discuss what distinguishes 
them from other forward commitments and how they are used by issuers and investors. 
We expand upon the daily settlement of futures contract gains and losses introduced 
earlier and explain the differences between forwards and futures. We also address 
and distinguish the interest rate futures market and its role in interest rate derivative 
contracts.`,
      overview: `■ Futures are standardized, exchange-traded derivatives (ETDs) 
with zero initial value and a futures price f0(T) established at 
inception. The futures price, f0(T), equals the spot price compounded 
at the risk-free rate as in the case of a forward contract.
 ■ The primary difference between forward and futures valuation is the 
daily settlement of futures gains and losses via a margin account. Daily 
settlement resets the futures contract value to zero at the current 
futures price ft(T). This process continues until contract maturity and 
the futures price converge to the spot price, ST.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Futures are standardized, exchange-traded derivatives (ETDs) 
with zero initial value and a futures price f0(T) established at 
inception. The futures price, f0(T), equals the spot price compounded 
at the risk-free rate as in the case of a forward contract.
 ■ The primary difference between forward and futures valuation is the 
daily settlement of futures gains and losses via a margin account. Daily 
settlement resets the futures contract value to zero at the current 
futures price ft(T). This process continues until contract maturity and 
the futures price converge to the spot price, ST.
1
LEARNING MODULE
6
CFA Institute would like to thank 
Don Chance, PhD, CFA, for his 
contribution to this section, 
which includes material derived 
from material that appeared 
in Derivative Markets and 
Instruments , featured in the 2022 
CFA® Program curriculum.
Learning Module 6 Pricing and Valuation of Futures Contracts130
 ■ The cumulative realized mark-to-market (MTM) gain or loss on a 
futures contract is approximately the same as for a comparable for -
ward contract.
 ■ Daily settlement and margin requirements give rise to different cash 
flow patterns between futures and forwards, resulting in a pricing 
difference between the two contract types. The difference depends on 
both interest rate volatility and the correlation between interest rates 
and futures prices.
 ■ The futures price for short-term interest rate futures is given by (100 
– yield), where yield is expressed in percentage terms. There is a price 
difference between interest rate futures and forward rate agreements 
(FRAs) due to convexity bias.
 ■ The emergence of derivatives central clearing has introduced futures-
like margining requirements for over-the-counter (OTC) derivatives, 
such as forwards. This arrangement has reduced the difference in the 
cash flow impact of ETDs and OTC derivatives and the price differ -
ence in futures versus forwards.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following responses is closest to the one-year futures price of 
a stock with a spot price (S0) of €125 and an annual dividend of €2.50 paid at 
maturity if the risk-free rate is 1%?
A. €123.75
B. €122.50
C. €126.25
Solution:
A is correct. The no arbitrage futures price for an underlying asset with 
known benefits, such as a dividend, may be determined using the following 
equation:
f0(T) = [S0 − PV 0(I)] (1 + r)T.
First, solve for the present value of the dividend PV0(I) as follows:
€2.48 = (€2.50 / 1.01).
Substitute PV0(I) into the original equation to solve for f0(T):
f0(T) = €123.75 = (€125 − €2.48)(1.01).
2. Which of the following statements regarding the gains or losses of a long 
forward contract position compared to a long futures contract position is 
most correct? Assume that the underlying is identical on both contracts and 
that both contracts have the same time until maturity.
A. The daily realized gain or loss of the forward contract position and the 
futures contract position are equivalent.
B. Before the contracts mature, the cumulative realized gains or losses 
of the forward contract position and the futures contract position are 
equivalent.
Introduction 131
C. At contract maturity, the cumulative realized gains or losses of the for -
ward contract position and the futures contract position are approxi -
mately equivalent.
Solution:
C is correct. The two contracts are similar in all respects except for the 
frequency with which contracts are marked to market. As a result, the cu-
mulative gain or loss is approximately the same when the contracts mature. 
A is incorrect because the futures contract’s daily mark-to-market (MTM) 
feature creates daily realized gains or losses while the forward contract’s 
gains or losses are realized only at contract maturity. B is incorrect because 
the response refers to realized gains or losses, and the contracts have not 
yet matured. Thus, the forward contract has generated no realized gains or 
losses yet.
3. Identify which of the following situations leads to which relationship be-
tween forward and futures prices for forward commitment contracts with 
otherwise identical terms.
 
1. Futures prices are positively correlated with 
interest rates, and interest rates change over 
the contract period.
A. Forward prices are above 
futures prices: F0(T) > f0(T).
2. Futures prices are negatively correlated with 
interest rates, and interest rates change over 
the contract period.
B. Forward and futures prices are 
the same: F0(T) = f0(T).
3. Interest rates are constant over the forward 
commitment contract period.
C. Futures prices are above for -
ward prices: f0(T) > F0(T).
 
Solution:
1. C is correct. If futures prices are positively correlated with interest rates, 
then higher prices lead to futures profits reinvested at rising rates, and lower 
prices lead to losses that may be financed at lower rates.
2. A is correct. If futures prices are negatively correlated with interest rates, 
then higher prices lead to futures profits reinvested at lower rates, and lower 
prices lead to losses that must be financed at higher rates.
3. B is correct. If interest rates are constant over the forward commitment 
contract period, then forward and futures prices are the same.
4. Which of the following statements most correctly describes a development 
that has helped reduce the difference in the cash flow impact between for-
ward and futures contracts? 
A. Futures exchanges have moved away from daily mark-to-market recog -
nition of gains and losses on futures contracts.
B. OTC derivatives have become increasingly subject to central clearing 
requirements.
C. Lower volatility in markets has reduced the magnitude of gains and 
losses in both types of contracts.
Solution:
B is correct. Under a central clearing framework for OTC derivatives, finan-
cial intermediaries that serve as counterparties are required to post daily 
margin or eligible collateral to the central counterparty (CCP) in a process 
very similar to futures margining. Dealers, therefore, often impose simi-
lar requirements on derivatives end users. A is incorrect because no such 
Learning Module 6 Pricing and Valuation of Futures Contracts132
change has occurred in exchange-traded futures markets. C is incorrect be-
cause volatility changes over time are hard to categorize as higher or lower.
PRICING OF FUTURES CONTRACTS AT INCEPTION
compare the value and price of forward and futures contracts
When a forward commitment is initiated, no cash is exchanged and the contract 
is neither an asset nor a liability to the buyer or seller. The value of both a forward 
contract and a futures contract at initiation is zero:
 V0(T) = 0.  (1)
An underlying asset with no cost or benefit has a futures price f0(T) at t = 0 of:
 f0(T) = S0(1 + r)T,  (2)
where r is the risk-free rate and T is the time to maturity. As in the case of a forward 
contract, the futures price is the spot price compounded at the risk-free rate over the 
life of the contract. This is shown in Exhibit 1, where the slope of the line is equal to 
the risk-free rate, r.
Exhibit 1: Futures Price at Initiation
S0
f0(T) = S0 (1+r)T
0T Time
As for forwards, we use discrete compounding as in Equation 2 for futures on indi -
vidual underlying assets. However, for underlying assets that are comprised of a 
portfolio—such as an equity, fixed-income, commodity, or credit index—or where 
the underlying involves foreign exchange with interest rates denominated in two cur-
rencies, continuous compounding is the preferred method, as shown in Equation 3:
 f0(T) = S0erT.  (3)
EXAMPLE 1
Procam Investments - Gold Futures Contract
As shown in a previous lesson, Procam Investments purchases a 100-ounce gold 
futures contract. The current spot price is $1,770.00 per ounce, the risk-free rate 
is 2.0%, and we assume `,
    },
    {
      number: 7,
      title: `Pricing and Valuation of Interest Rates and Other Swaps`,
      pages: 22,
      los: `Mastery The candidate should be able to:
describe how swap contracts are similar to but different from a series
contrast the value and price of swaps`,
      intro: `Swap contracts were introduced earlier as a firm commitment to exchange a series of 
cash flows in the future, with interest rate swaps where fixed cash flows are exchanged 
for floating payments being the most common type. Subsequent lessons addressed 
the pricing and valuation of forward and futures contracts across the term structure, 
which form the building blocks for swap contracts.
In this lesson, we will explore how swap contracts are related to these other forward 
commitment types. While financial intermediaries often use forward rate agreements 
or short-term interest rate futures contracts to manage interest rate exposure, issuers 
and investors usually prefer swap contracts, since they better match rate-sensitive 
assets and liabilities with periodic cash flows, such as fixed-coupon bonds, variable-rate 
loans, or known future commitments. It is important for these market participants 
not only to be able to match expected future cash flows using swaps but also to ensure 
that their change in value is consistent with existing or desired underlying exposures. 
The following lessons compare swap contracts with forward contracts and contrast 
the value and price of swaps.`,
      overview: `■ A swap contract is an agreement between two counterparties 
to exchange a series of future cash flows, whereas a forward 
contract is a single exchange of value at a later date.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ A swap contract is an agreement between two counterparties 
to exchange a series of future cash flows, whereas a forward 
contract is a single exchange of value at a later date.
1
LEARNING MODULE
7
Learning Module 7 Pricing and Valuation of Interest Rates and Other Swaps150
 ■ Interest rate swaps are similar to forwards in that both contracts are 
firm commitments with symmetric payoff profiles and no cash is 
exchanged at inception, but they differ in that the fixed swap rate is 
constant, whereas a series of forward contracts has different forward 
rates at each maturity.
 ■ A swap is priced by solving for the par swap rate, a fixed rate that sets 
the present value of all future expected floating cash flows equal to the 
present value of all future fixed cash flows.
 ■ The value of a swap at inception is zero (ignoring transaction and 
counterparty credit costs). On any settlement date, the value of a 
swap equals the current settlement value plus the present value of all 
remaining future swap settlements.
 ■ A swap contract’s value changes as time passes and interest rates 
change. For example, a rise in expected forward rates increases the 
present value of floating payments, causing a mark-to-market (MTM) 
gain for the fixed-rate payer (floating-rate receiver) and an MTM loss 
for the fixed-rate receiver (floating-rate payer).
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Identify which of the following characteristics matches which forward com-
mitment contract.
 
1. Involves periodic settlements based 
on the difference between a fixed 
rate established for each period and 
market reference rate (MRR)
A. Both an interest rate swap and a series 
of forward rate agreements
2. Has a symmetric payoff profile and 
a value of zero to both counterparties 
at inception
B. A series of forward rate agreements 
(FRAs)
3. Involves periodic settlements based 
on the difference between a constant 
fixed rate and the MRR
C. Interest rate swap
 
Solution:
1. B is correct. A series of FRAs involves periodic settlements based on 
the difference between a fixed rate established for each period and the 
MRR.
2. A is correct. Both an interest rate swap and a series of forward rate 
agreements have a symmetric payoff profile and a value of zero to both 
counterparties at inception.
3. C is correct. An interest rate swap involves periodic settlements based 
on the difference between a constant fixed rate and the MRR.
2. Which of the following transactions would allow a fixed-income portfolio 
manager to gain from falling interest rates?
A. Buy a floating-rate bond
B. Enter into a receive-fixed, pay-floating interest rate swap
Introduction 151
C. Enter into a pay-fixed, receive-floating interest rate swap
Solution:
B is correct. A fixed-income portfolio manager seeking to gain from falling 
interest rates may consider entering a receive-fixed, pay-floating interest rate 
swap rather than purchasing bonds. The fixed-rate payments become more 
valuable as interest rates decline A is incorrect as the floating-rate bond in-
terest rate payments decline as interest rates decline, thus the bond does not 
increase in value. C is incorrect as the fixed interest rate payments become 
more costly as interest rates decline.
3. Which of the following statements provides a correct description of a pay-
fixed, receive-floating interest rate swap position?
A. Long a floating-rate note priced at the MRR and short a fixed-rate 
bond with a coupon equal to the fixed swap rate
B. Long a fixed-rate bond with a coupon equal to the fixed swap rate and 
short a floating-rate note priced at the MRR
C. Long a floating-rate note priced at the MRR
Solution:
A is correct. An interest rate swap is economically equivalent to a long 
and short position in underlying debt securities. In the case of a pay-fixed, 
receive-floating swap, the cash flow received reflects the long position. 
In this case, the party receives floating payments, so this is like buying a 
floating-rate note. The pay-fixed portion of the swap is like selling a fixed-
rate bond and paying fixed coupons to the bond buyer. B is incorrect as 
this response is economically equivalent to entering into a receive-fixed, 
pay-floating swap. C is incorrect because the response does not reflect the 
short position.
4. 4. An investor enters into a 10-year, pay-fixed EUR100 million swap at a rate 
of 1.12% versus six-month EUR MRR. Assume six-month EUR MRR sets 
today at 0.25%. Which of the following is closest to the correct calculation of 
the periodic settlement value of the swap from the investor’s perspective in 
six months’ time?
A. EUR870,000
B. –EUR870,000
C. –EUR435,000
Solution:
C is correct. From the investor’s (fixed-rate payer’s) perspective, the periodic 
settlement value of the swap is equal to
Periodic settlement value = (MRR – sN) × Notional amount × Period
= –EUR435,000 = (0.25% – 1.12%) × EUR100 million × 0.5 years.
Since EUR MRR has set below the fixed swap rate, the fixed-rate payer must 
make a net payment to the fixed-rate receiver at the end of the interest 
period. Both A and B responses omit the period of the swap (0.5 years) so 
are incorrect. A is also incorrect because the reversed sign on the answer 
would properly reflect the counterparty’s periodic settlement value, not the 
investor’s.
Learning Module 7 Pricing and Valuation of Interest Rates and Other Swaps152
SWAPS VS. FORWARDS
describe how swap contracts are similar to but different from a series 
of forward contracts
A swap contract is an agreement between two parties to exchange a series of future 
cash flows, while a forward contract is an agreement for a single exchange of value 
at a later date. Although this lesson focuses on interest rate swaps, similar principles 
apply to other underlying variables where a series of cash flows are exchanged on a 
future date.
An earlier lesson showed how implied forward rates may be derived from spot 
rates. An implied forward rate for a given period in the future is equivalent to the 
forward rate agreement (FRA) fixed rate for that same period for which no riskless 
profit opportunities exist. The single cash flow of an FRA is similar to a single-period 
swap, as shown in Exhibit 1.
Exhibit 1: Swap and FRA Payoff Profile
Floating-Rate
Payer
Fixed-Rate
Payer
Fixed-Rate
× Notional
× Period
MRR ×
Notional ×
Period
In each case, the net difference between a fixed rate agreed on at inception and an 
MRR set in the future is used as the basis for determining cash settlement on a given 
notional principal over a specific time period. For example, a fixed-rate payer on a 
swap or FRA will realize a gain if the MRR sets at a rate higher than the agreed-on 
fixed rate and will receive a net payment from the floating-rate payer. However, as we 
saw in an earlier lesson, the FRA has a single settlement, which occurs at the beginning 
of an interest period, while a standard swap has periodic settlements, which occur at 
the end of each respective period.
Other similarities between interest rate forwards and swaps include the symmetric 
payoff profile and the fact that no cash flow is exchanged upfront. Both interest rate 
forward and swap contracts involve counterparty credit exposure.
Since interest rates are characterized by a term structure, different FRA fixed rates 
usually exist for different times to maturity. In contrast, a standard interest rate swap 
has a constant fixed rate over its life, which includes multiple periods. This relationship 
is shown visually in Exhibit 2 and numerically in Example 1, which extends an earlier 
spot and forward rate example.
2
Swaps vs. Forwards 153
Exhibit 2: Series of FRAs vs. Standard Interest Rate Swap
Series of Forward Rate Agreements (at Different Fixed 
Rates)
Contract
FRA Floating-
Rate Payer
FRA Fixed-
Rate Payer
FRA Floating-
Rate Pay`,
    },
    {
      number: 8,
      title: `Pricing and Valuation of Options`,
      pages: 26,
      los: `Mastery The candidate should be able to:
explain the exercise value, moneyness, and time value of an option
contrast the use of arbitrage and replication concepts in pricing
forward commitments and contingent claims
identify the factors that determine the value of an option and
describe how each factor affects the value of an option`,
      intro: `Option contracts are contingent claims in which one of the counterparties determines 
whether and when a trade will settle. Unlike a forward commitment with a value of zero 
to both counterparties at inception, an option buyer pays a premium to the seller for 
the right to transact the underlying in the future at a pre-agreed price. The contingent 
nature of options affects their price as well as their value over time.
In the first lesson, we explore three features unique to contingent claims related 
to an option’s value versus the spot price of the underlying: the exercise, or intrinsic, 
value; the relationship between an option’s spot price and its exercise price, referred 
to as “moneyness”; and the time value. We then turn to how the arbitrage and repli -
cation concepts introduced earlier for forward commitments differ when applied to 
contingent claims with an asymmetric payoff profile. Finally, we identify and describe 
factors that determine the value of an option. These lessons focus on European options, 
which can be exercised only at expiration.`,
      overview: `■ An option’s value comprises its exercise value and its time 
value. The exercise value is the option’s value if it were immedi-
ately exercisable, while the time value captures the possibility that the 
passage of time and the variability of the underlying price will increase 
the profitability of exercise at maturity.
 ■ Option moneyness expresses the relationship between the underlying 
price and the exercise price. A put or call option is “at the money” 
when the underlying price equals the exercise price. An option is more 
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ An option’s value comprises its exercise value and its time 
value. The exercise value is the option’s value if it were immedi-
ately exercisable, while the time value captures the possibility that the 
passage of time and the variability of the underlying price will increase 
the profitability of exercise at maturity.
 ■ Option moneyness expresses the relationship between the underlying 
price and the exercise price. A put or call option is “at the money” 
when the underlying price equals the exercise price. An option is more 
1
LEARNING MODULE
8
Learning Module 8 Pricing and Valuation of Options172
likely to be exercised if it is “in the money”—with an underlying price 
above (for a call) or below (for a put) the exercise price—and less likely 
to be exercised if it is “out of the money. ”
 ■ Due to their asymmetric payoff profile, options are characterized 
by no-arbitrage price bounds. The lower bound is a function of the 
present value of the exercise price and the underlying price, while the 
upper bound is the underlying price for a call and the exercise price 
for a put.
 ■ As in the case of forward commitments, the replication of option 
contracts uses a combination of long (for a call) or short (for a put) 
positions in an underlying asset and borrowing or lending cash. The 
replicating transaction for an option is based on a proportion of the 
underlying, which is closely associated with the moneyness of the 
option.
 ■ The underlying price, the exercise price, the time to maturity, the risk-
free rate, the volatility of the underlying price, and any income or cost 
associated with owning the underlying asset are key factors in deter -
mining the value of an option.
 ■ Changes in the volatility of the underlying price and the time to 
expiration will usually have the same directional effect on put and call 
option values. Changes to the exercise price, the risk-free rate, and any 
income or cost associated with owning the underlying asset have the 
opposite effect on call options versus put options.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements correctly describes the lower bound of a 
call option’s value? 
A. The underlying’s price minus the present value of the option’s exercise 
price
B. The underlying’s price minus the option’s exercise price or zero, 
whichever is greater
C. The underlying’s price minus the present value of the option’s exercise 
price or zero, whichever is greater
Solution:
C is correct. The lower bound of a call price is the underlying’s price minus 
the present value of its exercise price or zero, whichever is greater. A is 
incorrect as the response omits the fact that the lower bound is zero if the 
underlying’s price is less than the present value of the exercise price. B is 
incorrect as it omits the present value term.
Introduction 173
2. Match the following statements about replication strategies with their asso-
ciated derivative instrument(s):
 
1. At time t = 0, lend at the risk-free 
rate and sell the underlying at S0.
A. Neither a call option nor a put option 
replication strategy
2. The replication strategy is executed at 
inception and is settled at maturity with 
no adjustment over time.
B. A put option replication strategy
3. At time t = T, sell the underlying at 
ST and repay the loan of X.
C. A call option replication strategy if 
exercised
 
Solution:
1. B is correct. At time t = 0, a put option replication strategy involves 
lending at the risk-free rate and selling the underlying at S0.
2. A is correct. As both call and put options involve a non-linear payoff 
profile, their replication strategy requires adjustment over time as the 
likelihood of exercise changes.
3. C is correct. A call option replication strategy if exercised involves 
repaying the loan of X and selling the underlying at ST at time t = T.
3. A European call option with three months remaining to maturity on an un-
derlying stock with no additional cash flows has an exercise price (X) of GBP 
50, a risk-free rate of 2%, and a current underlying price (St) of GBP 57.50. If 
the current call option price is GBP 10, which response below most closely 
shows the correct exercise value and the time value of the option?
A. Exercise value = GBP 7.50; Time value = GBP 2.50
B. Exercise value = GBP 7.75; Time value = GBP 2.25
C. Exercise value = GBP 0; Time value = GBP 10
Solution:
B is correct. An option’s value comprises its exercise value plus its time val-
ue. The exercise value of a call option is Max (0, St − PV( X)) and is calculat-
ed as follows:
  Call Option Exercise Value = Max (0,    S  t   − X   (1 + r)    − (T−t)  )  
	 Max(0,	GBP	57.50	−	GBP	50(1.02)−0.25)
 = GBP 7.75
The exercise value is positive, as the current underlying price exceeds the 
present value of the exercise price. The time value is the difference between 
the option price and the exercise value, representing the possibility that the 
option payoff at maturity will exceed the current exercise value due to a 
favorable price change:
  Call Option Time Value =  c  t   − Max (0,    S  t   − X   (1 + r)    − (T−t)  )  
	 =	GBP	2.25	(=	GBP	10	−	GBP	7.75)
The time value is always positive and declines to zero at maturity (t = T). 
A is incorrect as the present value term is omitted from the exercise value 
calculation. C is incorrect as it implies the option has zero exercise value.
Learning Module 8 Pricing and Valuation of Options174
4. Match the following underlying price and exercise price relationships with 
their associated put option:
 
1. ST = 100, X = 100       A. An at-the-money put option
2. ST = 110, X = 100       B. An in-the-money put option
3. ST = 90, X = 100       C. An out-of-the-money put option
 
Solution:
Put options are in the money when ST < X, at the money when ST = X, and 
out of the money when ST > X. Therefore:
1. A is correct. Since ST = X = 100, this is an at-the-money put option.
2. C is correct. Since ST > X, this is an out-of-the-money put option.
3. B is correct. Since ST < X, this is an in-the-money put option.
5. Match the following changes in a factor affecting option value (holding oth-
er factors constant) with their corresponding option value change:
 
1. A higher exercise price ( X) A. Decreases the value of both a call 
option and a put option
2. A higher underlying price ( ST) B. Decreases the value of a call option
3. A decline in the volatility of the under -
lying price
C. Decreases the value of a put option
 
Solution:
1. B is correct. A higher exercise price decreases the value of a call 
option; for a given underlying price at maturity ( ST), the call option 
settlement value of Max (0, ST − X) will decrease for a higher X.
2. C is correct. A higher underlying price ( ST) will decrease the value of a 
put option. Since a put option is the right to sell an underlying, the put 
option settlement value of Max (0, X − ST) will fall as ST rises.
3. A is correct. A decline in the volatility of the underlying price will 
decrease the value of both a call option and a put option. Lower price 
variability of the underlying will reduce the probability of a higher 
positive exercise value for a call or a put option without affecting the 
downside case where the option expires unexercised.
6. Which of the following statements provides the correct description as to 
how a call option’s value changes if the income on the underlying declines 
unexpectedly, holding all else equal.
A. The call option value increases.
B. The call option value decreases.
C. The call option value does not change.
Solution:
A is correct. Income or other, non-cash benefits (such as convenience yield) 
accrue to the owner of an underlying asset but not to the owner of a deriva-
tive, whose value is based on the underlying. A call option on an underlying 
with income has lower value than an i`,
    },
    {
      number: 9,
      title: `Option Replication Using Put–Call Parity`,
      pages: 22,
      los: `Mastery The candidate should be able to:
explain put–call parity for European options
explain put–call forward parity for European options`,
      intro: `Previous lessons examined the payoff and profit profiles of call options and put options, 
the upper and lower bounds of an option’s value, and the factors impacting option 
values. In doing so, we contrasted the asymmetry of one-sided option payoffs with 
the linear or symmetric payoff of forwards and underlying assets.
We now extend this analysis further to show that there are ways to combine 
options to have an equivalent payoff to that of the underlying and a risk-free asset as 
well as a forward commitment. In the first lesson, we demonstrate that the value of 
a European call may be used to derive the value of a European put option with the 
same underlying details, and vice versa, under a no-arbitrage condition referred to as 
put–call parity. In the second lesson, we show how this may be extended to forward 
commitments and how the put–call parity relationship may be applied to option and 
other investment strategies. We will focus on European options on underlying assets 
with no income or benefit.`,
      overview: `■ Put–call parity establishes a relationship that allows the price 
of a call option to be derived from the price of a put option 
with the same underlying details and vice versa.
 ■ Put–call parity holds for European options with the same exercise 
price and expiration date, representing a no-arbitrage relationship 
between put option, call option, underlying asset, and risk-free asset 
prices.
 ■ If put–call parity does not hold, then riskless arbitrage profit opportu -
nities may be available to investors.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Put–call parity establishes a relationship that allows the price 
of a call option to be derived from the price of a put option 
with the same underlying details and vice versa.
 ■ Put–call parity holds for European options with the same exercise 
price and expiration date, representing a no-arbitrage relationship 
between put option, call option, underlying asset, and risk-free asset 
prices.
 ■ If put–call parity does not hold, then riskless arbitrage profit opportu -
nities may be available to investors.
1
LEARNING MODULE
9
Learning Module 9 Option Replication Using Put–Call Parity198
 ■ Put–call forward parity extends the put–call parity relationship to for -
ward contracts given the equivalence of an underlying asset position 
and a long forward contract plus a risk-free bond.
 ■ Under put–call forward parity, we may demonstrate that a purchased 
put option and a sold call option are equivalent to a long risk-free 
bond and short forward position, and a sold put and purchased call 
are equivalent to a long forward and short risk-free bond.
 ■ Put–call parity may be applied beyond option-based strategies in 
finance—for example, to demonstrate that equity holders have a posi -
tion equivalent to a purchased call option on the value of the firm with 
unlimited upside, while debtholders have a sold put option position on 
firm value with limited upside.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements correctly describes the equivalent to a 
long position in an underlying according to put–call parity?
A. Long a put option on the underlying, short a call option on the under -
lying, and long a risk-free bond
B. Short a put option on the underlying, long a call option on the under -
lying, and long a risk-free bond
C. Short a put option on the underlying, long a call option on the under -
lying, and short a risk-free bond
Solution:
B is correct. Put–call parity demonstrates that a long underlying position is 
equivalent to a sold put option, a purchased call option, and a long risk-free 
bond. This is shown in the following equation:
Put–call parity: S0 + p0 = c0 + X(1 + r)– T implies S0 = – p0 + c0 + X(1 + r)– T.
2. Identify which of the following positions has the same no-arbitrage value as 
which portfolio under put–call parity:
 
1. Long call option ( c0) A. Long underlying, short risk-free bond, 
and short call option
2. Short risk-free bond (– X(1 + r)– T) B. Long underlying, long put option, and 
short risk-free bond
3. Short put option (– p0) C. Short underlying, long call option, and 
short put option
 
Solution:
Recall that the put–call parity relationship may be expressed as
 S0 + p0 = c0 + X(1 + r)–T.
1. B is correct. A long call option position is the no-arbitrage equivalent of 
a long underlying position, a long put option, and a short risk-free bond 
position.
2. C is correct. A short risk-free bond position is equivalent to a short un-
derlying position, a long call option, and a short put option.
Put–Call Parity 199
3. A is correct. A short put option is equivalent to a long underlying posi-
tion, a short risk-free bond, and a short call option.
3. Which of the following statements correctly describes a synthetic protective 
put position according to put–call forward parity? 
A. A long forward contract on the underlying, a long put option on the 
underlying, and short a risk-free bond
B. A short forward contract on the underlying, a long put option on the 
underlying, and short a risk-free bond
C. A short forward contract on the underlying, a short put option on the 
underlying, and short a risk-free bond
Solution:
A is correct. The formula for put–call forward parity is as follows:
F0(T)(1 + r)– T + p0 = c0 + X(1 + r)– T.
Rearranging the terms as follows shows the synthetic protective put position 
on the left-hand side of the equation:
F0(T)(1 + r)– T + p0 – X(1 + r)– T = c0.
4. Which of the following statements best describes a shareholder’s claim in 
terms of an option payoff? 
A. Shareholder payoff resembles the payoff of a put option on firm value.
B. Shareholder payoff resembles the payoff of a covered call option on 
firm value.
C. Shareholder payoff resembles the payoff of a call option on firm value.
Solution:
C is correct. When considering shareholder claims in option terms, the 
shareholder payoff resembles a call option on firm value. 
PUT–CALL PARITY
explain put–call parity for European options
A prior lesson contrasted no-arbitrage pricing conditions and the replication of cash 
flows for forward commitments and contingent claims. Forwards have zero initial value 
and their certain payoff, which is replicated at inception by borrowing to purchase the 
underlying or selling the underlying and lending the sale proceeds. Option buyers pay 
an upfront premium, and their contingent payoff profiles lead us to establish upper and 
lower no-arbitrage price bounds. Option replication is similar to that of a forward but 
involves borrowing or lending to buy or sell a proportion of the underlying, which is 
adjusted as the moneyness of an option changes. We now extend this analysis using 
a combination of positions.
In this section, we show how combining cash and derivative instruments into a 
portfolio in a certain way enables us to price and value these positions without directly 
modeling them using no-arbitrage conditions. Consider an investor whose goal is to 
2
Learning Module 9 Option Replication Using Put–Call Parity200
benefit from upward movements in the value of an underlying but who wants to pro -
tect her investment from downward movements in the underlying’s value. Consider 
the following two portfolios, shown in Exhibit 1:
1. At t = 0, an investor purchases a call option ( c0) on an underlying with an 
exercise price of X and a risk-free bond today that pays X at t = T. The cost 
of this strategy is c0 + X(1 + r)– T, where we assume the option expires at 
time T.
2. At t = 0, an investor purchases an underlying unit ( S0) and a put option 
on the underlying ( p0) with an exercise price of X at t = T. The cost of this 
strategy is p0 + S0.
Exhibit 1 shows the payoff of the individual components of these two portfolios.
Exhibit 1: Payoffs at Time T for Two Portfolios
ST
X
Long put optionPayoff
0
Portfolio 2: Protective put
ST
Long underlying
X
0
Payoff
Portfolio 1: Fiduciary call
ST
Long risk-free bond
X
X
Payoff
X
Long call option
Payoff
0
ST
At first glance, these portfolios appear to offer the investor a similar opportunity to 
benefit from underlying asset appreciation without exposure to an underlying price 
decline below the exercise price.
In the first case (Portfolio 1), the investor buys a call option with a positive payoff  
if the underlying asset price rises above the exercise price ( ST > X) and invests cash 
in a risk-free bond. Since the risk-free asset pays X at time T, the investor pays c0 + 
X(1 + r)– T at time t = 0. This combination of a purchased call and a risk-free bond is 
known as a fiduciary call and is shown in Exhibit 2.
Put–Call Parity 201
Exhibit 2: Portfolio 1 (Fiduciary Call) Payoff at Time T
Payoff
Payoff
Payoff
Long call option
Long risk-free bond
Combined payoff
0
X
X
X
X
X
X
ST
If ST < X:
X
If ST > X:
ST
 max (0, ST – X)
ST
ST
In the second instance (Portfolio 2) in Exhibit 1, the investor pays S0 + p0 at inception 
and is hedged if the underlying price falls below X. This strategy of holding an under-
lying asset and purchasing a put on the same asset is sometimes called a protective 
put. The payoff for Portfolio 2 at time T is shown in Exhibit 3.
Exhibit 3: Portfolio 2 (Protective Put) Payoff at Time T
ST
If ST < X:
    ST 
If ST > X:
    X
X
X
Covered call
ST
ST
Long underlying
X
X
Sold call option
ST
X
0
Sold put option
ST0 X
X
Long risk-free bond
ST
If ST > X:
     X 
X
If ST < X:
    ST 
XX
Sold put + long risk`,
    },
    {
      number: 10,
      title: `Valuing a Derivative Using a One-Period Binomial Model`,
      pages: 21,
      los: `Mastery The candidate should be able to:
explain how to value a derivative using a one-period binomial model
describe the concept of risk neutrality in derivatives pricing`,
      intro: `Earlier lessons explained how the principle of no arbitrage and replication can be used 
to value and price derivatives. The put–call parity relationship linked put option, call 
option, underlying asset, and risk-free asset prices. This relationship was extended to 
forward contracts given the equivalence of an underlying asset position and a long 
forward contract plus a risk-free bond.
Forward commitments can be priced without making assumptions about the under-
lying asset’s price in the future. However, the pricing of options and other contingent 
claims requires a model for the evolution of the underlying asset’s future price. The 
first lesson introduces the widely-used binomial model to value European put and 
call options. A simple one-period version is introduced, which may be extended to 
multiple periods and used to value more complex contingent claims. In the second 
lesson, we demonstrate the use of risk-neutral probabilities in derivatives pricing.`,
      overview: `■ The one-period binomial model values contingent claims, 
such as options, and assumes the underlying asset will either 
increase by Ru (up gross return) or decrease by Rd (down gross return) 
over a single period that corresponds to the expiration of the deriva -
tive contract.
 ■ The binomial model combines an option with the underlying asset to 
create a risk-free portfolio where the proportion of the option to the 
underlying security is determined by a hedge ratio.
 ■ The hedged portfolio must earn the prevailing risk-free rate of return; 
otherwise, riskless arbitrage profit opportunities would be available.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ The one-period binomial model values contingent claims, 
such as options, and assumes the underlying asset will either 
increase by Ru (up gross return) or decrease by Rd (down gross return) 
over a single period that corresponds to the expiration of the deriva -
tive contract.
 ■ The binomial model combines an option with the underlying asset to 
create a risk-free portfolio where the proportion of the option to the 
underlying security is determined by a hedge ratio.
 ■ The hedged portfolio must earn the prevailing risk-free rate of return; 
otherwise, riskless arbitrage profit opportunities would be available.
1
LEARNING MODULE
10
CFA Institute would like to thank 
Don Chance, PhD, CFA, for his 
contribution to this section, 
which includes material derived 
from material that appeared 
in Derivative Markets and 
Instruments , featured in the 2022 
CFA® Program curriculum.
Learning Module 10 Valuing a Derivative Using a One-Period Binomial Model220
 ■ Valuing a derivative via risk-free hedging is equivalent to computing 
the discounted expected payoff of the option using risk-neutral proba-
bilities rather than actual probabilities.
 ■ Neither the actual (real-world) probabilities of underlying price 
increases or decreases nor the expected return of the underlying are 
required to price an option.
 ■ The one-period binomial model can be extended to multiple periods 
as well to value more complex contingent claims.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1. Which of the following statements most correctly describes the binomial 
model for valuing options? 
A. The model uses the actual probabilities associated with stock price 
moves up or down.
B. The model assumes that a risk-free portfolio can be created by com -
bining the option and the underlying according to a hedge ratio.
C. The model is similar to those used for valuing forward and futures 
contracts.
Solution:
B is correct. Unlike forward commitments, contingent claims, such as 
options, require that we model the future price behavior of the underlying 
asset because unlike forwards and futures, options have asymmetric payoffs. 
By modeling the future price behavior, the option and its underlying asset 
can be combined into a risk-free portfolio. The cost of this portfolio, where 
the proportion of the option and the underlying asset is set by a hedge ratio, 
determines the no-arbitrage price of the option. A is incorrect because the 
actual probabilities of up and down price moves do not factor into the mod-
el. C is incorrect because options have asymmetric payoffs, so they must be 
modeled differently than symmetric-payoff instruments like forward and 
futures contracts.
2. When using a one-period binomial model to price a call option, an increase 
in the actual probability of an upward move in the underlying asset will 
result in the call option price:
A. decreasing.
B. staying the same.
C. increasing.
Solution:
The correct answer is B. The call option price will stay the same. The actual 
(real-world) probabilities of an up or a down price movement in a binomial 
model do not influence the (no-arbitrage) price of an option.
Binomial Valuation 221
3. Identify which of the various factor changes has which effect on the no-arbi-
trage price of a put option based on the one-period binomial model:
 
1. The probability of an upward price 
movement, q, increases.
A. Put option price remains the same
2. The spread between the up and down 
factor, Ru − Rd, increases.
B. Put option price increases
3. The risk-neutral probability of price, 
π, increases.
C. Put option price decreases
 
Solution:
1. The correct answer is A. The probability of an upward price movement, 
q, has no impact on value in the one-period binomial option pricing model. 
Thus, this change would not have any impact on the price of a put option, 
and the price of the put option would remain the same.
2. The correct answer is B. The spread between the up and down factor, Ru 
– Rd, increases the range of potential prices, which increases the likelihood 
that the option ends up in the money. Thus, this change would increase the 
price of a put option.
3. The correct answer is C. The risk-neutral probability of price, π, captures 
the probability of the price of the underlying increasing. As π increases, the 
likelihood of the put option ending up in the money decreases.
4. A one-period binomial model assumes that the price of the underlying asset 
can change from $16.00 today to either $20.00 or $12.00 at the end of the 
period. If the risk-free rate of return over the period is 5%, which of the fol-
lowing choices is closest to the risk-neutral probability of a price increase?
A. 0.50
B. 0.60
C. 0.625
Solution:
B is correct. An increase from $16.00 to $20.00 or a decrease from $16.00 to 
$12.00 corresponds to:
Ru = $20.00/$16.00 = 1.25 and Rd = $12.00/$16.00 = 0.75.
Using the risk-neutral probability (π) of a price increase:
π = (1 + r – Rd)/(Ru – Rd)
= (1 + 0.05 – 0.75)/(1.25 – 0.75) = 0.3/0.5 = 0.60.
BINOMIAL VALUATION
explain how to value a derivative using a one-period binomial model
The law of one price states that if the payoffs from any two assets (or portfolio of 
assets) at a given future time are identical in all possible scenarios, then the value of 
these two assets must also be identical today. Forward commitments offer symmetric 
payoffs at a predetermined price in the future, the value of which are independent of 
the future price behavior of the underlying asset.
2
Learning Module 10 Valuing a Derivative Using a One-Period Binomial Model222
The asymmetric payoff profile of options and other contingent claims makes 
valuation of these instruments more challenging. Assumptions about future prices 
are an important component in option valuation given the different payoffs under 
different scenarios whose likelihood changes over time. Option valuation therefore 
requires the specification of a model for the future (random) price behavior of the 
option’s underlying asset.
The binomial model is a common tool used to determine the no-arbitrage value of 
an option. The simplicity of this model makes it attractive, as we only need to make 
an assumption about the magnitude of the potential upward and downward price 
changes of the underlying asset in a future time period.
THE BINOMIAL MODEL
explain how to value a derivative using a one-period binomial model
The binomial model builds on a simple idea: Over a given period of time, the asset’s 
price will either go up ( u) to S1u > S 0 or go down ( d) to S1d < S 0. We do not need 
to know the future price in advance, because it is determined by the outcome of a 
random variable. The movement from S0 to either S1u or S1d can be interpreted as 
the outcome of a Bernoulli trial.
Let us denote q as the probability of an upward price movement and 1 − q as the 
probability of a downward price movement. With only two possible outcomes—the 
price either goes up or down—the sum of probabilities must equal 1. We will also find 
it useful to define the gross return from an up or a down price move as:
 Ru = S1u/S0> 1  (1)
 Rd = S1d/S0< 1  (2)
At first glance, it would appear that knowing q is crucial in determining the value of an 
option on any underlying asset. However, knowing q is not required; only specifying 
the values of S1u and S1d is needed. The difference between S1u and S1d measures 
the “spread” of possible future price outcomes. Specifying S1u and S1d (or RuS0 and 
RdS0) determines the volatility of the underlying asset, an important factor in valuing 
options as shown earlier. Simply stated, the size of the up and down price movements 
should match the underlying asset volatility, as shown in Exhibit 1.
3
Pricing a European Call Option 223
Exhibit 1: Price Movement for the Underlying Asset
S0
0 T = 1
S1
u = RuS0
S1
d = RdS0
Time
Bin`,
    },
  ],
  alt: [
    {
      number: 1,
      title: `Alternative Investment Features, Methods, and Structures`,
      pages: 30,
      los: `Mastery The candidate should be able to:
describe features and categories of alternative investments
compare direct investment, co-investment, and fund investment
methods for alternative investments
describe investment ownership and compensation structures
commonly used in alternative investments`,
      intro: `Alternative Investments are grouped together not because they have similar features 
but instead because they have characteristics distinct from traditional investments. 
Investing in alternatives can be done through fund investing, co-investing, or direct 
investing. Alternative investments typically offer investors greater diversification and 
higher expected returns than traditional investments but often involve longer-term, 
illiquid investments in less efficient markets. Investing in alternatives requires special-
ized knowledge. Alternative investments typically rely on more complex and richer 
compensation structures than traditional investments in order to better align manager 
and investor incentives over longer periods.`,
      overview: `■ Alternative investments are investments other than ownership 
of traditional asset classes (public equity and fixed-income 
instruments and cash) and include private capital, real assets, and 
hedge funds.
 ■ Private capital includes private equity and private debt. Real assets 
include real estate, infrastructure, and natural resources. Hedge funds 
may invest across both traditional and alternative asset classes and 
are distinguished by their investment approach, which often includes 
leverage, derivatives, or other strategies.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Alternative investments are investments other than ownership 
of traditional asset classes (public equity and fixed-income 
instruments and cash) and include private capital, real assets, and 
hedge funds.
 ■ Private capital includes private equity and private debt. Real assets 
include real estate, infrastructure, and natural resources. Hedge funds 
may invest across both traditional and alternative asset classes and 
are distinguished by their investment approach, which often includes 
leverage, derivatives, or other strategies.
1
LEARNING MODULE
1
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 Alt ernative Investment Features, Methods, and Structures4
 ■ Investors often consider alternative investments in pursuit of greater 
portfolio diversification and/or increased expected returns. In doing 
so, they usually face longer investment periods, reduced liquidity, and 
less efficient markets than for more traditional assets.
 ■ Alternative investment fund investors fully outsource the control and 
management of investments in exchange for relatively high fees, while 
co-investment and direct investment methods involve greater inves -
tor effort and control over the selection and management of assets in 
exchange for relatively lower fees.
 ■ Another common type of alternative investment structure is a limited 
partnership in which responsibilities are flexibly allocated between 
investors and managers—with managers as general partners and 
investors as limited partners. Limited partnerships usually have more 
complex compensation structures, which include both management 
and performance fees.
 ■ Additional alternative investment structures include trusts and limited 
liability companies.
LEARNING MODULE SELF-ASSESSMENT
1.
 I
dentify which of the following choices is most likely an alternative 
investment:
A.
 An in
vestment in a hedge fund focused on traditional assets
B. Shar
es in a manufacturing firm traded on the Bursa Malaysia exchange
C.
 A e
uro foreign exchange future purchased on the Chicago Mercantile 
exchange
Solution:
The correct answer is A. An investment in a hedge fund, even one that 
purchases traditional exchange-traded assets, is considered an alternative 
investment. B is incorrect because shares traded on a public exchange, such 
as the Bursa Malaysia exchange, are considered traditional, not alternative, 
investments. C is incorrect because a euro foreign exchange future pur-
chased on a public exchange, such as the Chicago Mercantile exchange, is 
considered a traditional, not an alternative, investment.
2.
 An adv
antage of investing in alternative investments most likely is:
A.
 hig
h liquidity.
B. low in
vestment fees.
C.
 hig
her expected returns.
Solution:
The correct answer is C. Investors are often attracted to alternative invest-
ments seeking greater diversification and/or higher expected returns. A is 
incorrect because investors usually face longer investment periods, reduced 
liquidity, and less efficient markets with alternative investments than with 
more traditional assets. B is incorrect because alternative investments often 
carry higher fees, including performance and/or incentive fees.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 5
3. In vestors with limited experience most likely enter into alternative invest-
ments through:
A.
 c
o-investing.
B. f
und investing.
C.
 dir
ect investing.
Solution:
The correct answer is B. Investors with limited resources and/or experience 
generally enter into alternative investments through fund investing, where 
the investor contributes capital to a fund and the fund identifies, selects, and 
makes investments on the investor’s behalf. A is incorrect because co-in-
vesting is more appropriate for investors who already have some experience 
investing in funds; in co-investing, the investor invests in assets indirectly 
through the fund but also possesses rights (known as co-investment rights) 
to invest directly in the same assets. C is incorrect because direct invest-
ing, which occurs when an investor makes a direct investment in an asset 
without the use of an intermediary, is typically reserved for larger and more 
sophisticated investors.
4.
 When an in
vestor invests in an asset without the use of an intermediary, it is 
called:
A.
 c
o-investing.
B. f
und investing.
C.
 dir
ect investing.
Solution:
The correct answer is C. In direct investing, an investor makes a direct 
investment in an asset without the use of an intermediary. A is incorrect 
because in co-investing, an investor invests in assets indirectly through a 
fund but also possesses rights (known as co-investment rights) to invest 
directly in the same assets. B is incorrect because for fund investing, an in-
vestor contributes capital to a fund and the fund, not the investor, identifies, 
selects, and makes investments on the investor’s behalf.
5.
 Whic
h statement regarding alternative investment partnership structures is 
most accurate?
A.
 The f
und manager has limited liability for anything that goes wrong.
B. The f
und manager is a limited partner, and investors are general 
partners.
C.
 In
vestors’ upfront cash outflow can be a small portion of their total 
commitment to the partnership.
Solution:
The correct answer is C. Limited partners (LPs) are outside investors who 
own a fractional interest in the partnership based on the amount of their 
initial investment and the terms set out in the partnership documentation. 
LPs commit to future investments, and their upfront cash outflow can be a 
small portion of their total commitment to the fund. A is incorrect because 
the fund manager is the fund’s general partner (GP) who runs the business 
and theoretically bears unlimited liability for anything that goes wrong. B 
is incorrect because the fund manager is the fund’s general partner, not a 
limited partner, and the investors are the limited partners.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 Alt ernative Investment Features, Methods, and Structures6
6. Af ter failing to meet the hurdle rate, which of the following would a general 
partner still most likely receive as compensation?
A.
 C
arried interest
B. Managemen
t fee
C.
 Commit
ted capital
Solution:
The correct answer is B. Alternative investment funds are usually structured 
with a management fee typically ranging from 1% to 2% of assets under 
management (e.g., for hedge funds) or 1% to 2% of committed capital (e.g., 
for private equity funds). (Committed capital is the total amount of money 
that the limited partners have committed to the fund’s future investments.) 
A performance fee (also referred to as an incentive fee, carried interest, or 
carry) is applied based on excess returns. The partnership agreement usually 
specifies that the performance fee is earned only after the fund achieves a 
return known as a “hurdle rate. ” The hurdle rate is a minimum rate of return 
that the general partner must exceed in order to earn the performance fee. 
A is incorrect because “carried interest” is another name for a performance 
fee, which is earned only after the fund achieves its hurdle rate. C is in-
correct because committed capital is the total amount of money that the 
limited partners have committed to the fund’s future investments, not a fee 
to the general partner.
ALTERNATIVE INVESTMENT FEATURES
describe features and categories of alternative investments
Alternative investments are investments other than ownership of public equity secu-
rities, fixed-income instruments, or cash that represent the more traditional asset 
classes. These investments are referred to as alternatives to traditional asset classes 
because of their characteristics and the way they are structured. Investors are often 
attracted to alternative investments when seeking greater diversification and/or higher 
expected returns in excha`,
    },
    {
      number: 2,
      title: `Alternative Investment Performance and Returns`,
      pages: 32,
      los: `Mastery The candidate should be able to:
describe the performance appraisal of alternative investments
calculate and interpret alternative investment returns both before`,
      intro: `Investment performance measurement on common asset classes, such as public 
equity and debt, is relatively straightforward. In alternative investments, there are 
unique features that make this asset class somewhat complicated when it comes to 
measurement of investment risk and return. In this learning module, we first discuss 
these unique characteristics and the challenges they pose to performance appraisal. 
Then we explain the various features in the complex fee arrangement in alternative 
investments and the nuances when it comes to calculating investor returns.`,
      overview: `■ Alternative investments differ from traditional asset classes in 
that they involve longer time horizons, unique patterns of cash 
flows, the use of leverage, illiquid positions, more complex fee struc -
tures, different tax and accounting treatment, and so on. In addition, 
returns are usually less normally distributed for alternative invest -
ments than for traditional investments.
 ■ The investment life cycle is usually longer and involves three phases: 
capital commitment, capital deployment, and capital distribution.
 ■ Internal rate of return (IRR) is often the preferred measure for alter -
native investment returns. The multiple of invested capital (MOIC) 
is often used as a shortcut measure, but it ignores the timing of cash 
flows.
 ■ Customized and complex compensation arrangements seek to align 
manager and investor incentives. Special provisions also exist for the 
lockup and redemption of capital from investors.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Alternative investments differ from traditional asset classes in 
that they involve longer time horizons, unique patterns of cash 
flows, the use of leverage, illiquid positions, more complex fee struc -
tures, different tax and accounting treatment, and so on. In addition, 
returns are usually less normally distributed for alternative invest -
ments than for traditional investments.
 ■ The investment life cycle is usually longer and involves three phases: 
capital commitment, capital deployment, and capital distribution.
 ■ Internal rate of return (IRR) is often the preferred measure for alter -
native investment returns. The multiple of invested capital (MOIC) 
is often used as a shortcut measure, but it ignores the timing of cash 
flows.
 ■ Customized and complex compensation arrangements seek to align 
manager and investor incentives. Special provisions also exist for the 
lockup and redemption of capital from investors.
1
LEARNING MODULE
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 Alt ernative Investment Performance and Returns34
 ■ In addition to a base management fee, alternative investments often 
charge additional performance fees based on a percentage of peri-
odic fund returns. When calculating fees and investors’ net returns, 
different features have to be considered, such as founder share class, 
either/or fee structure, hurdle rate, and high-water mark and clawback 
clauses.
 ■ It is difficult to generalize performance appraisal for these investments 
because returns may vary depending on how and when a particular 
investor invested in a particular vehicle.
LEARNING MODULE SELF-ASSESSMENT
1.
 In whic
h part of the investment life cycle of a private equity invest-
ment should investors generally expect a positive cash flow?
A.
 C
apital commitment
B. C
apital deployment
C.
 C
apital distribution
Solution:
C is correct. In the initial capital commitment phase, fees and expenses are 
immediately incurred prior to capital deployment, and assets may generate 
little or no income during this first phase. In the capital deployment phase, 
cash outflows typically exceed inflows as funds are deployed. Only in the 
capital distribution phase can excess income be generated from the invested 
properties and substantial capital gains be realized upon the sale of assets.
2.
 Wh
y is IRR preferred for performance measurement for alternative 
investments?
A.
 I
RR is commonly used for other asset classes.
B. I
RR is easy and intuitive to calculate.
C.
 I
RR takes into account the timing of cash flows in long-lived alterna-
tive investments.
Solution:
C is correct. IRR is seldom used to measure investment performance of 
other asset classes with publicly quoted market prices. Although IRR is 
complicated to calculate and involves assumptions on opportunity costs and 
reinvestment rates, it is the best metric to evaluate long-lived alternative 
investments because it takes into account the unique timing of cash flows in 
the investment life cycle of alternative investments.
3.
 Whic
h of the following statements regarding hedge fund fee structure is 
correct?
A.
 The p
eriodic returns of all investors in the same fund must be 
identical.
B. H
edge funds usually charge a performance fee based on a percentage 
of periodic return above a certain threshold.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 35
C. The managemen t and performance fee rates are always the same for all 
investors in the same fund.
Solution:
B is correct. A hedge fund usually charges both a flat management fee 
and an additional performance fee based on a percentage of periodic fund 
returns. Periodic performance results may vary based on which investor has 
invested and when the investor invested into the fund. Besides, a particu-
lar investor may face significantly lower incentive fees if she invests more 
capital in a fund at an earlier phase or is willing to accept greater restrictions 
on redemptions.
4.
 A $100 million he
dge fund charges all its investors a 2% management fee 
and a 20% performance fee if the periodic return, net of management fee, 
exceeds a 5% hard hurdle rate. All fees are deducted based on the end-of-
year value. If the fund makes a gross return (before fees) of 8% for the year, 
what is the investor’s return, net of fees, closest to (ignoring any high-water 
mark provisions)?
A.
 4.67%
B. 5.67%
C.
 5.84%
S
olution:
B is correct. If the hedge fund makes 8% gross return for the year, its net 
asset value has grown to $108 million before any fees are deducted.
Management fee = $108 × 2% = $2.16 million.
Performance fee = [($108 – $2.16) – ($100 × $1.05%)] × 20% = $0.168 
million.
Net asset value after fee deduction = $108 – $2.16 – $0.168 = $105.672 
million.
Net investor return = ($105.672 – $100)/$100 
 ≈
 
 
5.67%.
5.
 A €100 million pr
ivate equity fund has a preferred return of 5% per annum, 
20% carried interest with full catch-up, and standard clawback clauses. The 
fund realizes a gross gain of 50% in two years before it distributes all its capi-
tal back to its LPs. Ignoring management fees, the total carried interest to 
the GP for the two years is closest to:
A.
 €8 million.
B. €10 million.
C.
 €16 million.
S
olution:
B is correct. After two years, the net asset value of the fund has grown to 
€100 million × 150% = €150 million shortly before distribution. The pre-
ferred return to the LPs for the two years totaled €100 million × 5% × 2 = 
€10 million. (Note that annual preferred return is typically not compound-
ed.) Next, the GP is allowed full catch-up until the GP’s carried interest has 
caught up to the 20% of the total profit accounted for so far, or €2.5 million 
(€10 million/0.8 × 0.2). The remaining profit of 50 – 10 – 2.5 = €37.5 million 
is then split 80/20 between the LPs and GP; that is, the GP will get another 
€7.5 million (€37.5 million × 20%). Therefore, the total carried interest to the 
GP is 2.5 + 7.5 = €10 million, which is exactly 20% of the €50 million gain.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 Alt ernative Investment Performance and Returns36
ALTERNATIVE INVESTMENT PERFORMANCE
describe the performance appraisal of alternative investments
The unique features, form, and structure of alternative investments must be considered 
when evaluating the relative performance between alternative investments and when 
comparing their performance to that of more common asset classes over time. In 
particular, such features as staggered capital commitments over time, longer required 
investment horizons, reduced liquidity, and less efficient markets highlighted in prior 
lessons must be factored into the performance appraisal for alternative investments. 
Alternative investment returns are usually less normally distributed and therefore 
require different measures of risk and return than those used for more traditional 
asset classes.
Alternative Investment Performance Appraisal
Appraising the performance of alternative investments requires more scrutiny in 
certain areas than traditional asset classes do.
Comparability with Traditional Asset Classes
Public equity and debt securities share several characteristics that facilitate the compar-
ison of their performance over a particular period. These standardized claims involve 
no further required capital commitments and provide identical claims to periodic cash 
flows, such as dividends in the case of shareholders or contractual bond coupons and 
principal for debtholders. Prices of publicly traded securities are often continuously 
quoted, with large peer groups of similar investments available and common indexes 
used to benchmark returns. Performance appraisal of publicly traded securities is thus 
straightforward to implement and evaluate.
In contrast, alternative investments are customized investments whose distinctive 
features complicate perfor`,
    },
    {
      number: 3,
      title: `Investments in Private Capital: Equity and Debt`,
      pages: 28,
      los: `Mastery The candidate should be able to:
explain features of private equity and its investment characteristics
explain features of private debt and its investment characteristics
describe the diversification benefits that private capital can provide`,
      intro: `This Learning Module and the subsequent four Learning Modules explain the invest-
ment characteristics of specific alternative asset types, starting with private equity and 
private debt. The subsequent Learning Modules focus on real assets, natural resources, 
hedge funds, and digital assets. Each Learning Module introduces core characteristics, 
distinguishing features, and risk–return characteristics for the specific asset class. 
Alternative assets differ from the traditional asset classes—debt and equity—due to 
their unique return, risk, and information profiles and historically show low levels 
of correlation with debt and equity. Moreover, alternative assets often require highly 
specialized knowledge to select, manage, and divest these assets. Since these alter -
native assets are generally considered to be less liquid than traditional asset classes, 
understanding the valuation and return characteristics is a specialized skill.`,
      overview: `■ Private equity is a form of private capital funding sourced from 
outside public markets through non-traditional sources, such 
as venture capital and leveraged buyout firms. It can be injected at 
various stages of business development, from initial idea to final tran-
sition to public company status.
 ■ The duration of a private equity investment also varies, with funds 
conducting their exits typically by the strategies of trade sales to 
strategic buyers or public listings through IPOs or special acquisition 
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Private equity is a form of private capital funding sourced from 
outside public markets through non-traditional sources, such 
as venture capital and leveraged buyout firms. It can be injected at 
various stages of business development, from initial idea to final tran-
sition to public company status.
 ■ The duration of a private equity investment also varies, with funds 
conducting their exits typically by the strategies of trade sales to 
strategic buyers or public listings through IPOs or special acquisition 
1
LEARNING MODULE
3
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 In vestments in Private Capital: Equity and Debt66
companies (SPACs). Other strategies include recapitalizations, second-
ary sales, and liquidations, with all the strategies having their unique 
advantages and drawbacks.
 ■ Compared to traditional investments, private equity can offer better 
returns combined with higher risks. This contrast is a function of 
private equity’s distinct choice set, greater management control, and 
greater leverage. Data ambiguities make it challenging to reliably mea-
sure the benefits of private equity investing.
 ■ Private debt primarily refers to the various forms of debt provided 
by investors directly to private entities. Its four major categories are 
direct lending, mezzanine loans, venture debt, and distressed debt, 
and it also includes unitranche debt of blended loans and other spe-
cialty loans.
 ■ As in private equity investment, private debt can be arranged on a 
direct or indirect basis, with funds deployed over the corporate life 
cycle straight from an investor or intermediated through a fund. 
Investors receive interest payments and the return of principal after a 
designated term, with debt typically secured and having protections/
covenants.
 ■ Private debt has potentially higher returns and risks than traditional 
fixed income, with its investors needing specialized knowledge to 
adjust exposures for differences across company funding stages, debt 
structures, and underlying assets.
 ■ Private debt and equity are distinct in terms of risks and performance 
from their public counterparts due to illiquidity and concentration 
risk and to the often-greater uncertainties of both their underlying 
businesses and the means to hedge away their risks. And a fundamen-
tal timing characteristic for private capital is its vintage year, with the 
valuation and economic environment at the origin of a private equity 
fund having a potentially substantial effect on realized results over the 
fund’s set lifespan.
 ■ To offset the potentially adverse performance effects of an ill-timed 
fund launch at an unfavorable stage of the business cycle, investors can 
diversify exposure across fund vintage years.
 ■ Investments in private capital vary in terms of risk and return across 
the corporate capital structure hierarchy, with a diversified mix of pri-
vate equity and debt investments potentially balancing private capital 
risks and returns. And when combined with public stocks and bonds, 
investments in private capital funds can add a moderate diversification 
benefit with opportunities for excess returns due to private capital’s 
additional leverage, market, and liquidity risks.
SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1.
 A
t the conclusion of a public company’s leveraged buyout, the amount of its 
market-traded stock is substantially:
A.
 r
educed.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 67
B. inc reased.
C.
 unaff
ected.
Solution:
A is correct. After the transaction, the target company becomes or remains 
a privately owned company. Leveraged buyouts are sometimes called “go-
ing-private” transactions because after the acquisition of a publicly traded 
company, the target company’s equity is substantially no longer publicly 
traded.
2.
 Whic
h of the following financing tools would most likely be used at the later 
stage of venture capital investment?
A.
 Common st
ock
B. Pr
eferred stock
C.
 Con
vertible debt
Solution:
B is correct. Preferred stock can be deployed as late into a company’s ma-
turity as later-stage venture capital, when preferred stock can offer more 
protection to venture investors as a company transitions toward an IPO. A 
and C are incorrect because these instruments are more typically used in the 
earlier pre-seed and seed stages.
3.
 Whic
h of the following transaction features is associated with mezzanine 
debt?
A.
 W
arrants
B. L
ines of credit
C.
 F
ixed payment schedules
Solution:
A is correct. Mezzanine debt often comes with additional features, such as 
warrants or conversion rights. These provide equity participation to lenders/
investors. B is incorrect because lines of credit are associated with venture 
debt, which entrepreneurs may seek to obtain additional financing without 
further diluting shareholder ownership. C is incorrect because fixed pay-
ment schedules are associated with direct lending, in which, as with typical 
bank loans, payments are usually received on a fixed schedule.
4.
 In u
sing private debt for a syndicated leveraged mortgage portfolio, the 
financial ratio of loan to value (LTV) is important at:
A.
 or
igination and to the real estate fund sponsor.
B. s
yndication and to the private debt fund lender.
C.
 b
oth transaction phases and to each of the parties.
Solution:
C is correct. LTV plays a significant role in both legs of this transaction. 
For a sponsor to be able to borrow and for a lender to be able syndicate the 
loans, the aggregate LTV ratio cannot be breached, and any deviation from 
LTV on an individual property level needs to be cured. As the loan amortiz-
es, its outstanding principal declines, increasing LTV. However, if the value 
of the real estate were to drop, then the sponsor will be required to raise 
additional collateral to maintain the LTV level.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 In vestments in Private Capital: Equity and Debt68
5. V intage diversification is an advisable policy for implementation by private 
capital:
A.
 f
unds.
B. in
vestors.
C.
 u
sers, such as company managers.
Solution:
B is correct. The vintage year, the time when fund deployment begins, is 
important for comparing PE and VC investments with other funds in the 
same year. Because of changing business and valuation environments, funds 
of a certain vintage have a relative advantage based on their start-up timing. 
That is why investors are encouraged to pursue vintage diversification by 
investing in multiple vintage years. A is incorrect because once capital 
commitments from a fund begin, all subsequent transactions are classi-
fied as part of the same vintage year. C is incorrect because the terms and 
conditions of capital use are more a function of the circumstances of their 
company than of the origin point of their fund source.
6.
 The p
otential diversification benefits from private capital investment are 
most likely related to its:
A.
 w
ide range of exit strategies.
B. v
arious types of fee structures.
C.
 lower c
orrelation with public asset returns.
Solution:
C is correct. Investments in private capital funds can add a moderate diver-
sification benefit to a portfolio of publicly traded stocks and bonds. Cor-
relations with public market indexes vary from 0.63 to 0.83. A is incorrect 
because different exit strategies can offer funds the opportunity to maximize 
returns but do not necessarily reduce the volatility of returns over time. B is 
incorrect because while different fee structures may more effectively align 
the interests of funds and their investors, they do not necessarily change the 
risks of the underlying investments.
PRIVATE EQUITY INVESTMENT CHARACTERISTICS
explain features of private equity and its investment characteristics`,
    },
    {
      number: 4,
      title: `Real Estate and Infrastructure`,
      pages: 28,
      los: `Mastery The candidate should be able to:
explain features and characteristics of real estate
explain the investment characteristics of real estate investments
explain features and characteristics of infrastructure
explain the investment characteristics of infrastructure investments`,
      intro: `Broadly defined, real estate comprises land and buildings. Real estate investments 
involve developed land, including commercial and industrial real estate and resi -
dential real estate. Real estate has some unique features, including heterogeneity (no 
two properties are identical), long lives, and fixed geographical or physical location.
Raw land and less developed land used in agriculture and forestry are categorized 
as natural resource investments, while infrastructure involves land, buildings, and other 
fixed assets developed by public entities or public–private partnerships for economic 
use. Investments in real estate and infrastructure are included in many portfolios 
because they tend to exhibit low correlations with traditional asset classes and provide 
risk and return combinations across a broad spectrum. Here, as in other alternative 
assets, investors need specialized knowledge in selecting, acquiring, managing, and 
divesting these assets.`,
      overview: `■ Real estate includes two major sectors: residential and com-
mercial. Residential real estate is the largest sector, totaling 
75% of the global market. Commercial real estate includes office build-
ings, shopping centers, and warehouses.
 ■ Real estate investing has some unique features, including heterogene-
ity (no two properties are identical), fragmentation, price discovery 
challenges, and costly and time-consuming transactions.
 ■ Real estate investments can be direct or indirect, in the public market 
(e.g., REITs) or private transactions, and in equity.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Real estate includes two major sectors: residential and com-
mercial. Residential real estate is the largest sector, totaling 
75% of the global market. Commercial real estate includes office build-
ings, shopping centers, and warehouses.
 ■ Real estate investing has some unique features, including heterogene-
ity (no two properties are identical), fragmentation, price discovery 
challenges, and costly and time-consuming transactions.
 ■ Real estate investments can be direct or indirect, in the public market 
(e.g., REITs) or private transactions, and in equity.
1
LEARNING MODULE
4
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 R eal Estate and Infrastructure94
 ■ The return on real estate investments comes from income or asset 
appreciation or a combination of both. More than half of the returns 
commercial real estate investors earn are derived from income, and 
throughout an economic market cycle, real estate income is a more 
consistent source of return than capital appreciation.
 ■ Investing in real estate can generate either lower-risk, bond-like cash 
flows from leases or higher-risk, equity-like speculative returns from 
realizing value from development projects or price appreciation.
 ■ Real estate offers diversification benefits to portfolios. However, during 
certain market conditions, equity REIT correlations with market 
benchmarks increase, particularly during steep market downturns.
 ■ Infrastructure consists of assets that are capital intensive and long 
lived and that are intended to provide essential services for public use.
 ■ Infrastructure investments can take many forms, both direct and indi-
rect. They can be broadly categorized as either economic (e.g., trans -
portation, utility, and energy assets) or social (e.g., educational assets). 
They can also be categorized based on the underlying asset’s stage of 
development as greenfield, secondary stage, or brownfield. The green-
field investment life cycle common among public–private partnerships 
is called the build-operate-transfer (BOT) life cycle.
 ■ Most infrastructure assets are financed, owned, and operated by gov -
ernments, and infrastructure is increasingly being financed privately 
through public–private partnerships by local, regional, and national 
governments. Investments in construction and development of new 
infrastructure are made with expectations to generate cash from either 
income or capital appreciation.
 ■ Of the three stages of infrastructure investments, greenfield invest -
ments offer the highest expected return and have the highest expected 
risk, and secondary stage investments offer the lowest expected return 
and have the lowest expected risk.
 ■ Infrastructure investors primarily expect the assets to generate stable 
long-term cash flows that also adjust for economic growth and infla-
tion and secondarily expect capital appreciation, depending on the 
type and timing of their investment.
 ■ Infrastructure investments provide an income stream, increase port -
folio diversification by adding an asset class with typically low cor -
relation with other public investments, provide some protection for 
changes in GDP growth, and offer some protection against inflation.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1.
 The two c
ategories of real property are: 
A.
 r
esidential and commercial.
B. pr
ivately held and publicly traded.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 95
C. indiv idual market and institutional market.
Solution:
The correct answer is A. The two categories of real property are residential 
and commercial.
2.
 The pr
eferred investment vehicles for public investors to own income-pro-
ducing real estate are:
A.
 r
eal estate funds.
B. mor
tgage-backed securities.
C.
 r
eal estate investment trusts.
Solution:
The correct answer is C. Real estate investment trusts (REITs) are the pre-
ferred investment vehicles for owning income-producing real estate for both 
private and public investors.
3.
 Whic
h of the following entails the least risk?
A.
 V
alue-add real estate
B. In
vestment-grade commercial mortgage-backed securities
C.
 Re
sidential real estate with long-term leases and many lessors
Solution:
The correct answer is B. Of these three, investment-grade commercial 
mortgage-backed securities (CMBS) entail the least risk, and value-add real 
estate investments entail the most.
4.
 Whic
h of the following entails the most risk?
A.
 M
ezzanine debt
B. Cor
e-plus real estate strategies
C.
 Re
development of an existing property
Solution:
The correct answer is A. Of these three, mezzanine debt entails the most 
risk, and core-plus strategies entail the least.
5.
 The first st
age of development of an infrastructure asset is typically called:
A.
 blue
sky.
B. g
reenfield.
C.
 e
arly stage.
Solution:
The correct answer is B. The first stage of development of an infrastructure 
asset is typically called greenfield. Greenfield investing involves developing 
new assets and new infrastructure with the intention either to lease or sell 
the assets to the government after construction or to hold and operate the 
assets. Greenfield investors typically invest alongside strategic investors or 
developers that specialize in developing the underlying assets. The sub-
sequent stages of development of infrastructure assets are typically called 
secondary stage and brownfield.
6.
 Dir
ect infrastructure investment involves assets that are:
A.
 illiquid.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 R eal Estate and Infrastructure96
B. s ecuritized.
C.
 e
xchange traded.
Solution:
The correct answer is A. Like real estate, direct investment in existing in-
frastructure involves acquiring unique, illiquid assets with distinct location, 
features, and uses. Investors concerned about liquidity and diversification 
may invest indirectly using publicly traded infrastructure securities.
7.
 Whic
h of the following types of infrastructure investments has the highest 
expected return?
A.
 Gr
eenfield
B. Br
ownfield
C.
 S
econdary stage
Solution:
The correct answer is A. Greenfield investments offer the highest expected 
return of the three. They also entail the highest expected risk. Secondary 
stage offers the lowest expected return and the lowest expected risk.
8.
 Whic
h of the following tends to make the largest allocations to the infra-
structure asset class?
A.
 P
ension funds
B. S
overeign wealth funds
C.
 L
ife insurance companies
Solution:
The correct answer is B. Sovereign wealth funds tend to make the largest 
allocations to the infrastructure asset class—around 5%–6% of total AUM, 
according to Preqin.
REAL ESTATE FEATURES
explain features and characteristics of real estate
Both individuals and institutions invest in real property: either in residential or com-
mercial real estate. Residential real estate, or the housing market, consists of individual 
single-family detached homes and multi-family attached units, which share at least one 
wall with another unit, such as condominiums, cooperatives, townhouses, or terraced 
housing. Commercial real estate includes primarily office buildings, retail shopping 
centers, commercial and residential rental properties, and warehouses. In contrast to 
the owner-occupied market, rental properties are leased to tenants.
Residential real estate is by far the largest market sector by value and size. Savills 
World Research estimated in July 2018 that residential real estate accounted for more 
than 75% of global real estate values. Although the average value of a home is less than 
the average value of an office building, the aggregate space required to house people 
is much larger than that needed to accommodate office use and retail shopping.
2
© CFA Institute. For candidate use on`,
    },
    {
      number: 5,
      title: `Natural Resources`,
      pages: 26,
      los: `Mastery The candidate should be able to:
explain features of raw land, timberland, and farmland and their
investment characteristics
describe features of commodities and their investment
analyze sources of risk, return, and diversification among natural`,
      intro: `Natural resources comprise commodities and raw land used for agricultural purposes, 
specifically farming and timber. Managing this asset class requires specialized knowl -
edge of the features of natural resources. An increasing number of portfolios include 
natural resources, which justifies a separate examination of the sector. There has 
been rapid development in offering indirect investment in natural resources through 
exchange-traded funds (ETFs), limited partnerships, REITs, swaps, and futures.
Commodities, such as crude oil, soybeans, copper, and gold, are seen as investments. 
Investments in commodities can be either “hard” (those mined, such as copper, or 
extracted, such as oil) or “soft” (those grown over a period of time, such as livestock, 
grains, and cash crops, such as coffee).
Timberland investment involves ownership of raw land and the harvesting of its 
trees for lumber, thus generating an income stream and the potential for capital gain, 
and timberland has been included in large institutional portfolios for decades. Farmland 
as an investment is a more recent phenomenon, with only a few dedicated funds 
involved. With population growth, weather, and water management becoming more 
topical, however, investors may turn to these assets to actively address sustainability.`,
      overview: `■ Investments in farmland and timberland are similar in certain 
respects to real estate investments but also exhibit several 
important differences.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Investments in farmland and timberland are similar in certain 
respects to real estate investments but also exhibit several 
important differences.
1
LEARNING MODULE
5
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 Na tural Resources122
 ■ While raw land’s investment returns occur strictly from price changes 
of the asset, both farmland and timberland generate returns from the 
assets’ income stream in addition to price changes of the assets.
 ■ Timberland’s income stream differs from that of farmland in that the 
harvest time of timber can be chosen while crops from farmland are 
harvested on a regular cycle.
 ■ Commodity investments are typically entered into via derivative mar -
kets, although some investors may find value in investment in physical 
commodities directly or through specialized funds.
 ■ The prices available on commodities through derivative markets must 
be related to the prices on the same commodities in physical markets 
to prevent arbitrage opportunities.
 ■ The forward price of a commodity will be greater than the spot price 
on the same commodity only if the carrying costs of owning the phys -
ical commodity are greater than the non-cash benefits of owning the 
physical commodity.
 ■ Investing in commodities is motivated by its potential for high 
expected return, its potential for diversifying a portfolio of traditional 
assets, and inflation protection. Commodities exhibit high correlation 
with inflation over the last 30 years, suggesting that commodities are 
an effective inflation hedge.
 ■ Farmland and timberland investments trade infrequently and in 
non-public markets. As a result, they are likely to appear as less vola-
tile than commodities and other publicly traded risky assets (such as 
stocks), despite the fact that both asset classes face significant risks, 
such as weather-related threats.
 ■ Farmland and timberland provide diversification potential to portfo-
lios consisting primarily of traditional assets (i.e., stocks and bonds). 
Historical correlations between these asset classes and traditional 
assets have been close to zero.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1.
 Whic
h of the following asset characteristics is shared by both farmland and 
real estate investments?
A.
 B
oth are liquid investments.
B. B
oth are illiquid investments.
C.
 P
hysical improvements are a primary focus of the investment value for 
both.
Solution:
B is correct. Farmland and real estate share a feature of illiquidity: It is costly 
to find a buyer when sale of the investment is desired. A is incorrect given 
that both are illiquid investments. C is incorrect because physical improve-
ments are a focus of value only for real estate investments, not for farmland 
investments.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 123
2. Whic h of the following natural resource investments is least likely to use the 
real estate investment trust (REIT) ownership structure?
A.
 F
armland
B. R
aw land
C.
 T
imberland
Solution:
B is correct. Raw land is typically acquired through direct ownership or a 
partnership structure. Also, raw land has no inherent income stream and 
returns accrue purely from price appreciation, making the income pass-
through REIT structure less relevant. Both A and C are incorrect because 
both farmland and timberland investments are included in REIT structures, 
as well as other ownership forms.
3.
 Whic
h type of investor is likely to prefer investing in commodities using 
exchange-traded products?
A.
 Tho
se seeking simplified trading through a brokerage account
B. Tho
se seeking to gain access to dynamic commodity trading strategies
C.
 Tho
se seeking expertise in a specific commodity sector
Solution:
A is correct. Exchange-traded products allow investors to gain commodity 
exposure through a simple exchange-traded instrument that can be accessed 
via a brokerage account. B is incorrect because it describes investors who 
choose to use commodity trading advisors. C is incorrect because this type 
of investor will choose a specialized commodity fund for its expertise.
4.
 Whic
h of the following describes a non-cash benefit of holding a physical 
commodity rather than a derivative contract on the same commodity?
A.
 In
terest
B. Con
venience yield
C.
 S
torage
Solution:
B is correct. In market environments in which physical inventories of a 
commodity become low, investors in that commodity will prefer to hold the 
physical asset rather than a derivative contract with the asset as an underly-
ing. The premium on the spot price resulting from this preference is called 
the convenience yield. A and B are both incorrect because interest and stor-
age reflect costs associated with owning the physical commodity.
5.
 Whic
h of the following statements most correctly reflects commodity sup-
ply and demand fundamentals?
A.
 S
upply of commodities adjusts equally to demand for commodities.
B. S
upply of commodities adjusts more rapidly than does demand for 
commodities.
C.
 S
upply of commodities adjusts more slowly than does demand for 
commodities.
Solution:
C is correct. Commodity supply adjusts slowly to demand because of long 
production times; for example, agricultural crops require a growing cycle.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 Na tural Resources124
6. Whic h of the following measures is best used to assess the potential for 
portfolio diversification when adding farmland or timberland to a portfolio 
of traditional assets?
A.
 Re
turns of other asset classes
B. V
olatility of other asset classes
C.
 Cor
relation between other asset classes
Solution:
C is correct. Correlation between asset classes best reflects the potential 
for portfolio diversification. An asset class that exhibits lower (i.e., closer to 
zero) correlation with traditional asset classes (such as stocks and bonds) 
has better diversification potential compared to an asset class exhibiting 
higher (i.e., closer to one) correlation. A and B are incorrect because returns 
and volatility strictly reflect reward and risk for the asset class without 
consideration as to how the asset class performs compared to other asset 
classes.
NATURAL RESOURCES INVESTMENT FEATURES
explain features of raw land, timberland, and farmland and their 
investment characteristics
Natural resources comprise different production inputs that are basic to the economy 
and everyday life: plants and animals (i.e., soft commodities); energy and minerals 
(hard commodities); and metals and industrial goods used to manufacture goods and 
produce services. A notable proportion of natural resource investments are directly 
through farmland, raw land with exploration and mining rights, and timberland. Direct 
ownership spans a broad spectrum: from farmers producing grain to institutional 
investors building solar farms.
Many large institutional investors create exposure to natural resources outright 
by purchasing land with rights to farm agricultural commodities; to extract oil and 
gas; to build facilities for alternative energy generation, such as solar and wind farms; 
or to mine commodities, such as iron, coal, and other industrial metals. By investing 
in these assets, institutional investors often seek to fulfil their environmental, social, 
and governance (ESG) objectives, such as sustainability, water conservation, and other 
environmental goals.
Land Investments vs. Real Estate
Farmland, timberland, and raw land are similar to real estate investments in that they 
are unique, illiquid assets with distinct geographic location and features, where the 
latter two characteristics have an influence on the value of the resource itself. They 
involve forms of ownership capital (claims to residual cash flows). In the case of devel`,
    },
    {
      number: 6,
      title: `Hedge Funds`,
      pages: 30,
      los: `Mastery The candidate should be able to:
explain investment features of hedge funds and contrast them with
describe investment forms and vehicles used in hedge fund
analyze sources of risk, return, and diversification among hedge fund`,
      intro: `Hedge funds originally started as an equity investment vehicle in which offsetting 
short and long positions protected the overall portfolio against major stock market 
moves. Today, the name hedge funds is a misnomer. They are not restricted to equities 
or just hedging strategies. Hedge funds are private pooled investment vehicles that 
can invest in a wide variety of products, including equities, fixed income, derivatives, 
foreign exchange, private capital, and real assets. It is the investment approach rather 
than the underlying investments that distinguish hedge funds. Many hedge funds 
operate in all kinds of financial markets by using leverage, short selling, or using 
financial instruments that are not often used by other similar commingled funds, 
such as mutual funds. This may result in a very different risk and return profile than 
owning underlying assets themselves.
The hedge fund industry is in a state of constant change as several hundred new 
funds are launched each year, with a similar number of funds exiting or being liqui-
dated. While several jurisdictions around the world regulate hedge funds, often they 
are lightly regulated compared with other investment vehicles.`,
      overview: `■ Hedge funds are private investment vehicles with pooled funds 
from institutions and high-net-worth (HNW) investors. Hedge 
funds typically have more flexible investment strategies than other 
options, such as mutual funds and ETFs.
1`,
      body: `LEARNING MODULE OVERVIEW
 ■ Hedge funds are private investment vehicles with pooled funds 
from institutions and high-net-worth (HNW) investors. Hedge 
funds typically have more flexible investment strategies than other 
options, such as mutual funds and ETFs.
1
LEARNING MODULE
6
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 H edge Funds148
 ■ Hedge funds are not an asset class but are a variety of investment 
vehicles driven by a set of disparate investment strategies. Most hedge 
funds utilize some form of leverage to enhance potential returns.
 ■ Hedge funds are typically classified by strategy. A variety of classi-
fications are possible, which helps in the selection of appropriate 
investment strategies and appropriate performance benchmarks and in 
reviewing aggregate performance.
 ■ Most hedge funds are set up as limited partnerships, with the portfolio 
manager acting as a general partner (GP) and the institutional inves -
tors acting as limited partners (LPs). This is the direct form of hedge 
fund setup. For smaller and retail investors, indirect forms, such as 
funds of funds, help obtain a hedge fund exposure.
 ■ The legal and contractual relationship between the GPs and LPs is gov -
erned by the fund offering documents. In addition, a manager could 
draft a “side letter” applicable to some investors only, with different 
legal, regulatory, tax, operational, or reporting requirements.
 ■ Hedge funds use several strategies, such as market-neutral, relative 
value, and event-driven strategies, to obtain diversification benefits 
and to attempt to outperform equity markets on a risk-adjusted basis.
 ■ Hedge fund strategies are classified by a combination of the instru-
ments in which they are invested, the trading philosophy followed, and 
the types of risks assumed.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1.
 Whic
h statement about hedge funds is most accurate?
A.
 H
edge funds are investment products offered to the public and are 
traded daily on the OTC market.
B. H
edge funds are benchmarked to an index or industry/sector, and 
managers use complex strategies to mimic the index or industry/
sector.
C.
 H
edge funds are private pooled funds, applying strategies with a goal 
of maximizing returns while reducing risk.
Solution:
C is correct. A hedge fund is a pooled investment vehicle that uses complex 
trading (using leverage, short selling, using derivatives, etc.) and risk man-
agement techniques to enhance performance for a private group of accredit-
ed investors.
A is incorrect. Mutual funds, not hedge funds, are regulated investment 
products offered to the public and available for daily trading.
B is incorrect. Exchange-traded funds (ETFs) are normally benchmarked to 
an index or industry/sector and typically track a specific industry or index. 
Hedge funds are benchmarked to either a hedge fund index or performance 
measured in absolute returns.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 149
2. Whic h of the following statements about relative value strategies is least 
accurate?
A.
 Re
lative value strategies seek to profit from a price or return discrep-
ancy between securities based on a short-term relationship.
B. Re
lative value funds are inherently structured to minimize net market 
risk and credit risks.
C.
 The in
vestments made under a relative value strategy are all within a 
single asset class or sector, using assets with a sufficient price differen-
tial to arbitrage their movements to equilibrium prices.
Solution:
C is correct because it is the least accurate statement. Relative value strate-
gies often involve investments in different asset classes. A and B are true.
3.
 Whic
h of the following statements is least accurate about hedge funds?
A.
 M
erger arbitrage strategies generally assume that an acquirer will be 
overpaying for the target.
B. E
vent-driven hedge funds flourish in a stable market environ-
ment, where minor deviations in asset prices quickly converge to 
equilibrium.
C.
 An ac
tivist strategy expects to realize higher returns due to the man-
ager being more effective in driving the corporate policies or strategic 
direction of the investment.
Solution:
B is correct because it is the least accurate statement. Event-driven hedge 
funds thrive in a rising market environment with a high level of corporate 
activity in a strong economy. These are the times that accelerate merger and 
acquisition activity. A and C are accurate statements.
4.
 Whic
h of the following is not a characteristic of hedge funds?
A.
 H
edge funds are mostly illiquid, with little trading possibilities.
B. H
edge fund managers use leverage; however, the overall risk is lower.
C.
 H
edge funds are a different asset class, with a distinct risk/reward 
profile.
D. Managers demand hig
her remuneration and have more discretionary 
freedom in the choice of investments.
Solution:
C is correct. Hedge funds invest in traditional asset classes but use a specific 
investment strategy. They are not a distinct asset class.
5.
 In J
anuary, HedgeAway, a new hedge fund, started operations with an initial 
amount of USD100 million. The fund charges a management fee of 1.6% 
based on end-of-year value and a performance fee of 18% on gross returns 
payable on the excess over a hurdle rate of 8% after fees. The fund ended the 
year with assets under management (AUM) of USD120 million. What was 
the investors’ return during the year?
A.
 16.38%
B. 18.08%
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 H edge Funds150
C. 18.19%
S
olution:
A is correct.
 Management fee = 1.6% of 120 million = 1.92 million.
 Growth during the year = 20 million, excess over the hurdle
 = 20 million – (100 million × 0.08) – 1.92 million = 10.08 million.
 Performance fee = 10.08 million × 0.18 = 1.81 million.
 T
otal fees = 1.92 million + 1.81 million = 3.72 million.
 Return to the investors = 20 million – 3.72 million = 16.38 million.
 Investors’
 return = 16.38%.
HEDGE FUND INVESTMENT FEATURES
explain investment features of hedge funds and contrast them with 
other asset classes
As private investment vehicles, hedge funds are distinguished by their investment 
approach rather than the underlying investments. Hedge funds combine traditional 
debt and equity instruments with leverage, derivatives, short selling, and other 
strategies to generate and enhance their returns. The objective of a hedge fund is to 
generate high returns, either in an absolute sense or on a risk-adjusted basis relative 
to its portfolio-level volatility. The strategies hedge funds use can make benchmarking 
their performance relative to traditional index performance benchmarks difficult. 
Thus, many hedge funds evaluate their performance using an absolute return standard 
instead of tracking a benchmark. Hedge funds are attractive for their diversification 
effects because their returns typically demonstrate low correlation with traditional 
asset investing.
Hedge funds normally apply common principles that seemingly increase portfolio 
risk, such as borrowing money to invest, using leverage (derivatives), and short sell-
ing. On their own, they do not hedge risky positions against a market move; on the 
contrary, they seem to amplify the risks. It may seem like the name hedge funds is a 
misnomer. However, the investment strategy splits a portfolio such that each com-
ponent helps hedge the risks from the other. Thus, by internally neutralizing market 
risk and by managing the portfolio components, the hedge fund manager can obtain 
enhanced risk-adjusted returns.
While mutual funds and hedge funds seem similar, in that they both invest clients’ 
money to achieve a better risk/reward profile, there are some major differences. Mutual 
funds managers are paid a fixed compensation and may not n`,
    },
    {
      number: 7,
      title: `Introduction to Digital Assets`,
      pages: 34,
      los: `Mastery The candidate should be able to:
describe financial applications of distributed ledger technology
explain investment features of digital assets and contrast them with
describe investment forms and vehicles used in digital asset
analyze sources of risk, return, and diversification among digital`,
      intro: `As introduced in Alternatives Learning Module 1, digital assets are a relatively new 
investment class that covers assets that can be created, stored, and transmitted elec -
tronically and have associated ownership or use rights. This class includes a wide 
variety of digital assets, including cryptocurrencies, tokens, and digital collectables. 
Based on the innovative distributed ledger technology (DLT), or blockchain technology, 
digital assets utilize advanced encryption techniques that assure the authenticity of 
digital assets. While cryptocurrencies have their own blockchains, crypto-tokens are 
built on an existing blockchain.
As with other types of alternative investments, digital assets have characteristics 
distinct from traditional investments. Since the advent of Bitcoin in 2009, when it was 
a niche concept in the technology world, digital assets have gradually become more 
mainstream alternative investments for investors worldwide. We will give an overview 
of the common forms of digital asset investments and discuss the key concepts and 
pitfalls in this space.
Despite their special features and technological characteristics, digital assets offer 
investors diversification while providing higher expected returns than traditional 
investments provide. However, their risks are also higher. We will discuss the sources 
of risks in digital assets to provide a better understanding of this evolving asset class.
1`,
      overview: `■ Blockchain and distributed ledger technology might offer a 
new way to store, record, and track digital assets on a secure, 
distributed basis. Additionally, DLT could bring efficiencies to post-
trade and compliance processes through automation, smart contracts, 
and identity verification.
 ■ DLT can take the form of either permissionless or permissioned 
networks.
 ■ A consensus protocol is a set of rules that govern how blocks are cryp-
tographically chained together in a blockchain network for the verifi-
cation of the complete and immutable history of transaction records. 
Two broad types of consensus protocols are “proof of work” (PoW) 
and “proof of stake” (PoS).
 ■ Digital assets are frequently seen as an alternative asset class. As 
digital assets become more developed, institutional investors may 
continue to seek some exposure to these assets for their higher returns 
and possible diversification benefits.
 ■ Digital assets differ from traditional financial assets in terms of 
their inherent value, transaction validation approach, uses as a legal 
medium of exchange, and legal and regulatory protection.
 ■ The most common digital assets are cryptocurrencies, including 
Bitcoin and altcoins (including stablecoins and meme coins). There 
are also digitalized tokens that include non-fungible tokens, security 
tokens, utility tokens, and governance tokens.
 ■ Many cryptocurrencies are designed with self-imposed limits on the 
total supply through complex computer algorithms. Such limits could 
help maintain a value from a technical perspective, yet there is no 
economic consensus on how they should be valued. Cryptocurrency 
exchanges are classified into centralized exchanges and decentralized 
exchanges. Both centralized and decentralized exchanges face prob-
lems with fraud and manipulation because they are not subject to rig-
orous oversight and are generally not regulated as financial exchanges.
 ■ Investment in digital assets can take the form of direc`,
      body: `LEARNING MODULE OVERVIEW
 ■ Blockchain and distributed ledger technology might offer a 
new way to store, record, and track digital assets on a secure, 
distributed basis. Additionally, DLT could bring efficiencies to post-
trade and compliance processes through automation, smart contracts, 
and identity verification.
 ■ DLT can take the form of either permissionless or permissioned 
networks.
 ■ A consensus protocol is a set of rules that govern how blocks are cryp-
tographically chained together in a blockchain network for the verifi-
cation of the complete and immutable history of transaction records. 
Two broad types of consensus protocols are “proof of work” (PoW) 
and “proof of stake” (PoS).
 ■ Digital assets are frequently seen as an alternative asset class. As 
digital assets become more developed, institutional investors may 
continue to seek some exposure to these assets for their higher returns 
and possible diversification benefits.
 ■ Digital assets differ from traditional financial assets in terms of 
their inherent value, transaction validation approach, uses as a legal 
medium of exchange, and legal and regulatory protection.
 ■ The most common digital assets are cryptocurrencies, including 
Bitcoin and altcoins (including stablecoins and meme coins). There 
are also digitalized tokens that include non-fungible tokens, security 
tokens, utility tokens, and governance tokens.
 ■ Many cryptocurrencies are designed with self-imposed limits on the 
total supply through complex computer algorithms. Such limits could 
help maintain a value from a technical perspective, yet there is no 
economic consensus on how they should be valued. Cryptocurrency 
exchanges are classified into centralized exchanges and decentralized 
exchanges. Both centralized and decentralized exchanges face prob-
lems with fraud and manipulation because they are not subject to rig-
orous oversight and are generally not regulated as financial exchanges.
 ■ Investment in digital assets can take the form of direct ownership 
of cryptocurrencies and other digital assets on the blockchains or 
indirect investment in exchange-traded products, hedge funds, trusts, 
futures, and thematic stocks.
 ■ Asset-backed tokens are digital claims on physical assets, financial 
assets, or financial instruments and are collateralized by these under -
lying assets.
 ■ The push for financial decentralized applications based on open-
source codes and smart contracts has grown into a movement known 
as decentralized finance, or DeFi. DeFi seeks to design, combine, and 
develop decentralized financial applications as building blocks for 
sophisticated financial products and services.
 ■ The price of Bitcoin and other digital assets are driven by expectations 
on future asset appreciation rather than any underlying cash flow. The 
market demand for the limited supply of cryptocurrencies is a signifi-
cant driver of prices.
© CFA Institute. For candidate use only. Not for distribution.
Introduction 179
 ■ The performance of the first widely traded digital asset, Bitcoin, has 
been characterized by high return, high volatility, and low correlations 
with traditional asset classes.
 ■ Due to the historically low correlations with other asset classes, digital 
assets offer potential diversification benefits to a well-diversified port -
folio. But the correlations are observed to have risen, especially during 
periods of high market uncertainty.
LEARNING MODULE SELF-ASSESSMENT
These initial questions are intended to help you gauge your current level 
of understanding of this learning module.
1.
 The c
onsensus protocol on a distributed ledger technology network refers 
to:
A.
 t
he standardized approach that governs how digital assets generated 
from a blockchain network should be valued.
B. pr
ograms embedded in electronic transaction records that are coded 
to self-execute according to predetermined conditions.
C.
 t
he set of rules governing how blocks are cryptographically linked to 
the chain to become immutable on the distributed ledger network.
Solution:
The correct answer is C. When transactions enter a node of the distributed 
ledger, they are bundled into “blocks” and cryptographically “chained” to-
gether to facilitate verification of the prior history. How blocks are chained 
together is determined by the consensus protocol, a set of rules governing 
how blocks can join the chain and become the immutable “truth. ” The con-
sensus protocols are designed to resist attempts at malicious manipulation 
up to a certain level of security.
2.
 Cr
yptocurrencies are a common form of digital asset that:
A.
 c
an be mined only through “proof of work” on blockchain networks.
B. e
xist both in physical forms and electronic records with rights to use, 
buy, or sell by owners.
C.
 c
an be used to transfer or store value, which allows time-efficient 
transactions between parties without the need for an intermediary.
Solution:
The correct answer is C. Cryptocurrencies are used to transfer or store 
value, which allows near-real-time transactions between parties without the 
need for an intermediary. As electronic mediums of exchange, cryptocur-
rencies lack physical form and exist only as electronic records on distributed 
ledgers. Depending on the particular consensus protocols used, cryptocur-
rencies can be generated either by “proof of work” or “proof of stake” by 
miners or validators on networks.
3.
 Dig
ital assets differ from traditional financial securities in that:
A.
 dig
ital assets are subject to a broader legal protection framework.
B. dig
ital assets are not valued based on their expected future cash flow.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 7 Intr oduction to Digital Assets180
C. transac tion records of digital assets require a centralized intermediary.
Solution:
The correct answer is B. Most digital assets do not have a fundamental value 
based on underlying assets or on the potential cash flow or earnings they 
are expected to generate. To date, the legal and regulatory frameworks for 
digital assets are still evolving, and there is generally less legal protection 
compared to traditional financial securities. Digital asset transactions are re-
corded on a distributed ledger, and no centralized intermediary is required 
in the process.
4.
 A sp
ecial type of cryptocurrency that is backed by and pegged to a fiat cur-
rency is called:
A.
 alt
coin.
B. st
ablecoin.
C.
 meme c
oin.
Solution:
The correct answer is B. A stablecoin is designed to maintain a stable value 
by pegging its value to another asset and is collateralized by a basket of as-
sets, typically a fiat currency, precious metals, or other cryptocurrencies.
5.
 An indir
ect investment in digital assets can be made through:
A.
 en
tering into cryptocurrency futures.
B. pur
chasing Bitcoins on cryptocurrency wallets.
C.
 p
articipating in the initial coin offering of a new digital token.
Solution:
The correct answer is A. Investors interested in an indirect investment in 
digital assets can trade cryptocurrency futures on established exchang-
es, such as the Chicago Mercantile Exchange. However, the purchase of 
Bitcoins and buying new tokens through an initial coin offering are direct 
forms of investment.
6.
 A c
ryptocurrency ETF seeks to:
A.
 g
ain exposure to cryptocurrencies through cash and cryptocurrency 
derivatives.
B. r
eplicate digital asset investment returns by investing directly in 
cryptocurrencies.
C.
 g
ain exposure to the cryptocurrency theme by investing in public 
equities related to the digital asset sector.
Solution:
The correct answer is A. A cryptocurrency ETF seeks to replicate digital 
asset investment returns by cash and cryptocurrency derivatives.
7.
 Bit
coin as an alternative investment has historically exhibited:
A.
 low r
eturn, low risk, and high correlations with traditional assets.
B. hig
h return, high risk, and low correlations with traditional as`,
    },
  ],
  pm: [
    {
      number: 1,
      title: `Portfolio Risk and Return: Part I`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe characteristics of the major asset classes that investors
consider in forming portfolios
explain risk aversion and its implications for portfolio selection
explain the selection of an optimal portfolio, given an investor’s
utility (or risk aversion) and the capital allocation line
calculate and interpret the mean, variance, and covariance (or
correlation) of asset returns based on historical data
calculate and interpret portfolio standard deviation
describe the effect on a portfolio’s risk of investing in assets that are
less than perfectly correlated
describe and interpret the minimum-variance and efficient frontiers`,
      intro: `Construction of an optimal portfolio is an important objective for an investor. In this 
reading, we will explore the process of examining the risk and return characteristics of 
individual assets, creating all possible portfolios, selecting the most efficient portfolios, 
and ultimately choosing the optimal portfolio tailored to the individual in question.
During the process of constructing the optimal portfolio, several factors and invest-
ment characteristics are considered. The most important of those factors are risk and 
return of the individual assets under consideration. Correlations among individual 
assets along with risk and return are important determinants of portfolio risk. Creating 
a portfolio for an investor requires an understanding of the risk profile of the investor. 
Although we will not discuss the process of determining risk aversion for individuals 
or institutional investors, it is necessary to obtain such information for making an 
informed decision. In this reading, we will explain the broad types of investors and 
how their risk–return preferences can be formalized to select the optimal portfolio 
from among the infinite portfolios contained in the investment opportunity set.
1`,
      overview: ``,
      body: `INTRODUCTION
Construction of an optimal portfolio is an important objective for an investor. In this 
reading, we will explore the process of examining the risk and return characteristics of 
individual assets, creating all possible portfolios, selecting the most efficient portfolios, 
and ultimately choosing the optimal portfolio tailored to the individual in question.
During the process of constructing the optimal portfolio, several factors and invest-
ment characteristics are considered. The most important of those factors are risk and 
return of the individual assets under consideration. Correlations among individual 
assets along with risk and return are important determinants of portfolio risk. Creating 
a portfolio for an investor requires an understanding of the risk profile of the investor. 
Although we will not discuss the process of determining risk aversion for individuals 
or institutional investors, it is necessary to obtain such information for making an 
informed decision. In this reading, we will explain the broad types of investors and 
how their risk–return preferences can be formalized to select the optimal portfolio 
from among the infinite portfolios contained in the investment opportunity set.
1
LEARNING MODULE
1
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 P ortfolio Risk and Return: Part I4
The reading is organized as follows: Sections 2–3 discuss the investment character-
istics of assets. Sections 4–6 discuss risk aversion and how indifference curves, which 
incorporate individual preferences, can be constructed. The indifference curves are 
then applied to the selection of an optimal portfolio using two risky assets. Sections 
7–9 provide an understanding and computation of portfolio risk. The role of cor -
relation and diversification of portfolio risk are examined in detail. Sections 10–12 
begins with the risky assets available to investors and constructs a large number of 
risky portfolios. It illustrates the process of narrowing the choices to an efficient set 
of risky portfolios before identifying the optimal risky portfolio. The risky portfolio is 
combined with investor risk preferences to generate the investor’s optimal portfolio. 
A summary concludes this reading.
HISTORICAL RETURN AND RISK
describe characteristics of the major asset classes that investors 
consider in forming portfolios
Before examining historical data, it is useful to distinguish between the historical mean 
return and expected return, which are very different concepts but easy to confuse. 
Historical return is what was actually earned in the past, whereas expected return is 
what an investor anticipates to earn in the future.
Expected return is the nominal return that would cause the marginal investor 
to invest in an asset based on the real risk-free interest rate (r
rF), expected inflation 
[E(π)], and expected risk premium for the risk of the asset [E (RP)]. The real risk-free 
interest rate is expected to be positive as compensation for postponing consumption. 
Similarly, the risk premium is expected to be positive in most cases.
1 The expected 
inflation rate is generally positive, except when the economy is in a deflationary state 
and prices are falling. Thus, expected return is generally positive. The relationship 
between the expected return and the real risk-free interest rate, inflation rate, and 
risk premium can be expressed by the following equation:
 1 
+ E(R) = (1 + r rF) × [1 + E (π)] × [1 + E(RP)]
The historical mean return for investment in a particular asset, however, is obtained 
from the actual return that was earned by an investor. Because the investment is 
risky, there is no guarantee that the actual return will be equal to the expected return. 
In fact, it is very unlikely that the two returns are equal for a specific time period 
being considered. Given a long enough period of time, we can expect that the future 
(expected) return will equal the average historical return. Unfortunately, we do not 
know how long that period is—10 years, 50 years, or 100 years. As a practical matter, 
we often assume that the historical mean return is an adequate representation of the 
expected return, although this assumption may not be accurate. For example, Exhibit 
1 shows that the historical equity returns in the last eight years (2010–2017) for large 
US company stocks were positive whereas the actual return was negative the prior 
decade, but nearly always positive historically. Nonetheless, longer-term returns 
(1926–2017) were positive and could be consistent with expected return. Though it 
is unknown if the historical mean returns accurately represent expected returns, it is 
an assumption that is commonly made.
1 Ther e are exceptions when an asset reduces overall risk of a portfolio. We will consider those exceptions 
in Section 9.
2
© CFA Institute. For candidate use only. Not for distribution.
Historical Return and Risk 5
Exhibit 1: Risk and Return for US Asset Classes by Decade (%)
    1930s 1940s 1950s 1960s 1970s 1980s 1990s 2000s 2010s*
1926–
2017
Large com-
pany stocks
Return −0.1 9.2 19.4 7.8 5.9 17.6 18.2 −1.0 13.9 10.2
Risk 41.6 17.5 14.1 13.1 17.2 19.4 15.9 16.3 13.6 19.8
Small com-
pany stocks
Return 1.4 20.7 16.9 15.5 11.5 15.8 15.1 6.3 14.8 12.1
Risk 78.6 34.5 14.4 21.5 30.8 22.5 20.2 26.1 19.4 31.7
Long-term 
corporate 
bonds
Return 6.9 2.7 1 1.7 6.2 13 8.4 7.7 8.3 6.1
Risk 5.3 1.8 4.4 4.9 8.7 14.1 6.9 11.7 8.8 8.3
Long-term 
government 
bonds
Return 4.9 3.2 −0.1 1.4 5.5 12.6 8.8 7.7 6.8 5.5
Risk 5.3 2.8 4.6 6 8.7 16 8.9 12.4 10.8 9.9
Treasury 
bills
Return 0.6 0.4 1.9 3.9 6.3 8.9 4.9 2.8 0.2 3.4
Risk 0.2 0.1 0.2 0.4 0.6 0.9 0.4 0.6 0.1 3.1
Inflation Return −2.0 5.4 2.2 2.5 7.4 5.1 2.9 2.5 1.7 2.9
Risk 2.5 3.1 1.2 0.7 1.2 1.3 0.7 1.6 1.1 4.0
* Through 31 December 2017
Note: Returns are measured as annualized geometric mean returns.
Risk is measured by annualizing monthly standard deviations.
Source: 2018 SBBI Yearbook (Exhibits 1.2,1.3, 2.3 and 6.2).
Going forward, be sure to distinguish between expected return and historical mean 
return. We will alert the reader whenever historical returns are used to estimate 
expected returns.
Nominal Returns of Major US Asset Classes
We focus on three major asset categories in Exhibit 1: stocks, bonds, and T-bills. The 
mean nominal returns for US asset classes are reported decade by decade since the 
1930s. The total for the 1926–2017 period is in the last column. All returns are annual 
geometric mean returns. Large company stocks had an overall annual return of 10.2 
percent during the 92-year period. The return was negative in the 1930s and 2000s, 
and positive in all remaining decades. The 1950s and 1990s were the best decades for 
large company stocks. Small company stocks fared even better. The nominal return 
was never negative for any decade, and had double-digit growth in all decades except 
two, leading to an overall 92-year annual return of 12.1 percent.
Long-term corporate bonds and long-term government bonds earned overall 
returns of 6.1 percent and 5.5 percent, respectively. The corporate bonds did not have 
a single negative decade, although government bonds recorded a negative return in 
the 1950s when stocks were doing extremely well. Bonds also had some excellent 
decades, earning double-digit returns in the 1980s and 2000s.
Treasury bills (short-term government securities) did not earn a negative return 
in any decade. In fact, Treasury bills earned a negative return only in 1938 (–0.02 
percent) when the inflation rate was –2.78 percent. Consistently positive returns for 
Treasury bills are not surprising because nominal interest rates are almost never 
negative and the Treasury bills suffer from little interest rate or inflation risk. Since 
the Great Depression, there has been no deflation in any decade, although inflation 
rates were highly negative in 1930 (–6.03 percent), 1931 (–9.52 percent), and 1932 
(`,
    },
    {
      number: 2,
      title: `Portfolio Risk and Return: Part II`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe the implications of combining a risk-free asset with a
portfolio of risky assets
explain the capital allocation line (CAL) and the capital market line
explain systematic and nonsystematic risk, including why an
investor should not expect to receive additional return for bearing
explain return generating models (including the market model) and
calculate and interpret beta
explain the capital asset pricing model (CAPM), including its
assumptions, and the security market line (SML)
calculate and interpret the expected return of an asset using the
describe and demonstrate applications of the CAPM and the SML`,
      intro: `Our objective in this reading is to identify the optimal risky portfolio for all investors 
by using the capital asset pricing model (CAPM). The foundation of this reading is 
the computation of risk and return of a portfolio and the role that correlation plays 
in diversifying portfolio risk and arriving at the efficient frontier. The efficient fron-
tier and the capital allocation line consist of portfolios that are generally acceptable 
to all investors. By combining an investor’s individual indifference curves with the 
market-determined capital allocation line, we are able to illustrate that the only opti-
mal risky portfolio for an investor is the portfolio of all risky assets (i.e., the market).
1`,
      overview: ``,
      body: `INTRODUCTION
Our objective in this reading is to identify the optimal risky portfolio for all investors 
by using the capital asset pricing model (CAPM). The foundation of this reading is 
the computation of risk and return of a portfolio and the role that correlation plays 
in diversifying portfolio risk and arriving at the efficient frontier. The efficient fron-
tier and the capital allocation line consist of portfolios that are generally acceptable 
to all investors. By combining an investor’s individual indifference curves with the 
market-determined capital allocation line, we are able to illustrate that the only opti-
mal risky portfolio for an investor is the portfolio of all risky assets (i.e., the market).
1
LEARNING MODULE
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 P ortfolio Risk and Return: Part II64
Additionally, we discuss the capital market line, a special case of the capital allo-
cation line that is used for passive investor portfolios. We also differentiate between 
systematic and nonsystematic risk, and explain why investors are compensated for 
bearing systematic risk but receive no compensation for bearing nonsystematic risk. 
We discuss in detail the CAPM, which is a simple model for estimating asset returns 
based only on the asset’s systematic risk. Finally, we illustrate how the CAPM allows 
security selection to build an optimal portfolio for an investor by changing the asset 
mix beyond a passive market portfolio.
The reading is organized as follows. In Section 2, we discuss the consequences of 
combining a risk-free asset with the market portfolio and provide an interpretation 
of the capital market line. Section 3 decomposes total risk into systematic and non-
systematic risk and discusses the characteristics of and differences between the two 
kinds of risk. We also introduce return-generating models, including the single-index 
model, and illustrate the calculation of beta. In Section 4, we introduce the capital 
asset pricing model and the security market line. Our focus on the CAPM does not 
suggest that the CAPM is the only viable asset pricing model. Although the CAPM 
is an excellent starting point, more advanced readings expand on these discussions 
and extend the analysis to other models that account for multiple explanatory factors. 
Section 5 covers several post-CAPM developments in theory. Section 6 covers mea-
sures for evaluating the performance of a portfolio which take account of risk. Section 
7 covers some applications of the CAPM in portfolio construction. A summary and 
practice problems conclude the reading.
CAPITAL MARKET THEORY: RISK-FREE AND RISKY 
ASSETS
describe the implications of combining a risk-free asset with a 
portfolio of risky assets
explain the capital allocation line (CAL) and the capital market line 
(CML)
You have learned how to combine a risk-free asset with one risky asset and with many 
risky assets to create a capital allocation line. In this section, we will expand our dis -
cussion of multiple risky assets and consider a special case of the capital allocation 
line, called the capital market line. While discussing the capital market line, we will 
define the market and its role in passive portfolio management. Using these concepts, 
we will illustrate how leveraged portfolios can enhance both risk and return.
Portfolio of Risk-Free and Risky Assets
Although investors desire an asset that produces the highest return and carries the 
lowest risk, such an asset does not exist. As the risk–return capital market theory 
illustrates, one must assume higher risk in order to earn a higher return. We can 
improve an investor’s portfolio, however, by expanding the opportunity set of risky 
assets because this allows the investor to choose a superior mix of assets.
Similarly, an investor’s portfolio improves if a risk-free asset is added to the mix. 
In other words, a combination of the risk-free asset and a risky asset can result in a 
better risk–return trade-off than an investment in only one type of asset because the 
2
© CFA Institute. For candidate use only. Not for distribution.
Capital Market Theory: Risk-Free and Risky Assets 65
risk-free asset has zero correlation with the risky asset. The combination is called the 
capital allocation line (and is depicted in Exhibit 2). Superimposing an investor’s indif-
ference curves on the capital allocation line will lead to the optimal investor portfolio.
Investors with different levels of risk aversion will choose different portfolios. 
Highly risk-averse investors choose to invest most of their wealth in the risk-free asset 
and earn low returns because they are not willing to assume higher levels of risk. Less 
risk-averse investors, in contrast, invest more of their wealth in the risky asset, which 
is expected to yield a higher return. Obviously, the higher return cannot come without 
higher risk, but the less risk-averse investor is willing to accept the additional risk.
Combining a Risk-Free Asset with a Portfolio of Risky Assets
We can extend the analysis of one risky asset to a portfolio of risky assets. For con-
venience, assume that the portfolio contains all available risky assets (N) , although 
an investor may not wish to include all of these assets in the portfolio because of the 
investor’s specific preferences. If an asset is not included in the portfolio, its weight 
will be zero. The risk–return characteristics of a portfolio of N  risky assets are given 
by the following equations:
   
E   (   R  p   )     =  ∑ 
i=1
  
N
   w  i   E   (   R  i   )     
   
 σ  p  2  =    (    ∑ 
i=1,j=1
  
N
   w  i    w  j   Cov    (  i, j )      )    ,  and   ∑ 
i=1
  
N
   w  i   = 1 
  
The e
xpected return on the portfolio, E (Rp), is the weighted average of the expected 
returns of individual assets, where wi is the fractional weight in asset i and Ri is the 
expected return of asset i . The risk of the portfolio (σ p), however, depends on the 
weights of the individual assets, the risk of the individual assets, and their interrela-
tionships. The covariance between assets i and j, Cov(i,j), is a statistical measure of the 
interrelationship between each pair of assets in the portfolio and can be expressed as 
follows, where ρ ij is the correlation between assets i  and j and σi is the risk of asset i:
 Cov(
i,j) = ρijσiσj
Note from the equation below that the correlation of an asset with itself is 1; therefore:
 Cov(i,i) = ρiiσiσi =   σ  i  2  
By sub
stituting the above expressions for covariance, we can rewrite the portfolio 
variance equation as
   σ  p  2  =    (   ∑ 
i=1
  
N
   w  i  2   σ  i  2   +   ∑ 
i,j=1,i≠j
  
N
   w  i    w  j     ρ  ij    σ  i    σ  j   )     
The sugge
stion that portfolios have lower risk than the assets they contain may seem 
counterintuitive. These portfolios can be constructed, however, as long as the assets 
in the portfolio are not perfectly correlated. As an illustration of the effect of asset 
weights on portfolio characteristics, consider a simple two-asset portfolio with zero 
weights in all other assets. Assume that Asset 1 has a return of 10 percent and a stan-
dard deviation (risk) of 20 percent. Asset 2 has a return of 5 percent and a standard 
de
viation (risk) of 10 percent. Furthermore, the correlation between the two assets is 
zero. Exhibit 1 shows risks and returns for Portfolio X with a weight of 25 percent in 
Asset 1 and 75 percent in Asset 2, Portfolio Y with a weight of 50 percent in each of 
the two assets, and Portfolio Z with a weight of 75 percent in Asset 1 and 25 percent 
in Asset 2.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 P ortfolio Risk and Return: Part II66
Exhibit 1: Portfolio Risk and Return
Portfolio
Weight in 
Asset 1 
(%)
Weight in 
Asset 2 
(%)
Portfolio 
Return 
(%)
Portfolio 
Standard 
Deviation (%)
X 25.0 75.0 6.25 9.01
Y 50.0 50.0 7.50 11.18
Z 75.0 25.0 8.75 15.21
        `,
    },
    {
      number: 3,
      title: `Portfolio Management: An Overview`,
      pages: 38,
      los: `Mastery The candidate should be able to:
describe the portfolio approach to investing
describe the steps in the portfolio management process
describe types of investors and distinctive characteristics and needs
describe defined contribution and defined benefit pension plans
describe aspects of the asset management industry
describe mutual funds and compare them with other pooled`,
      intro: `This reading provides an overview of portfolio management and the asset management 
industry, including types of investors and investment plans and products. A portfolio 
approach is important to investors in achieving their financial objectives. We outline 
the steps in the portfolio management process in managing a client’s investment port-
folio. We next compare the financial needs of different types of investors: individual 
and institutional investors. We then describe both defined contribution and defined 
benefit pension plans. The asset management
1 industry, which serves as a critical 
link between providers and seekers of investment capital around the world, is broadly 
discussed. Finally, we describe mutual funds and other types of pooled investment 
products offered by asset managers.
1 Not e that both “investment management” and “asset management” are commonly used throughout the 
CFA Program curriculum. The terms are often used interchangeably in practice. 
1`,
      overview: ``,
      body: `INTRODUCTION
This reading provides an overview of portfolio management and the asset management 
industry, including types of investors and investment plans and products. A portfolio 
approach is important to investors in achieving their financial objectives. We outline 
the steps in the portfolio management process in managing a client’s investment port-
folio. We next compare the financial needs of different types of investors: individual 
and institutional investors. We then describe both defined contribution and defined 
benefit pension plans. The asset management
1 industry, which serves as a critical 
link between providers and seekers of investment capital around the world, is broadly 
discussed. Finally, we describe mutual funds and other types of pooled investment 
products offered by asset managers.
1 Not e that both “investment management” and “asset management” are commonly used throughout the 
CFA Program curriculum. The terms are often used interchangeably in practice. 
1
LEARNING MODULE
3
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 P ortfolio Management: An Overview124
PORTFOLIO PERSPECTIVE: DIVERSIFICATION AND 
RISK REDUCTION
describe the portfolio approach to investing
One of the biggest challenges faced by individuals and institutions is to decide how to 
invest for future needs. For individuals, the goal might be to fund retirement needs. 
For such institutions as insurance companies, the goal is to fund future liabilities in 
the form of insurance claims, whereas endowments seek to provide income to meet 
the ongoing needs of such institutions as universities. Regardless of the ultimate 
goal, all face the same set of challenges that extend beyond just the choice of what 
asset classes to invest in. They ultimately center on formulating basic principles that 
determine how to think about investing. One important question is: Should we invest 
in individual securities, evaluating each in isolation, or should we take a portfolio 
approach? By “portfolio approach, ” we mean evaluating individual securities in rela-
tion to their contribution to the investment characteristics of the whole portfolio. In 
the following section, we illustrate a number of reasons why a diversified portfolio 
perspective is important.
Historical Example of Portfolio Diversification: Avoiding 
Disaster
Portfolio diversification helps investors avoid disastrous investment outcomes. This 
benefit is most convincingly illustrated by examining what may happen when indi-
viduals have not diversified.
We are usually not able to observe how individuals manage their personal invest -
ments. However, in the case of US 401(k) individual retirement portfolios,
2 it is pos-
sible to see the results of individuals’ investment decisions. When we examine their 
retirement portfolios, we find that some individual participants make sub-optimal 
investment decisions.
During the 1990s, Enron Corporation was one of the most admired corporations 
in the United States. A position in Enron shares returned over 27 percent per year 
from 1990 to September 2000, compared to 13 percent for the S&P 500 Index for the 
same time period.
2 In t he United States, 401(k) plans are employer-sponsored individual retirement savings plans. They allow 
individuals to save a portion of their current income and defer taxation until the time when the savings and 
earnings are withdrawn. In some cases, the sponsoring firm will also make matching contributions in the 
form of cash or shares. Individuals within certain limits have control of the invested funds and consequently 
can express their preferences as to which assets to invest in.
2
© CFA Institute. For candidate use only. Not for distribution.
Portfolio Perspective: Diversification and Risk Reduction 125
Exhibit 1: Value of US$1 Invested from January 1990 to September 2000 
Enron vs. S&P 500 Composite Index (01/01/1990 = US$1.00) 
$18.00
$16.00
$14.00
$12.00
$10.00
$8.00
$6.00
$4.00
$2.00
$0.00
Enron
S&P 500
Jan-90
Oct-90
Jul-91
Apr-92
Jan-93
Oct-93
Jul-94
Apr-95
Jan-96
Oct-96
Jul-97
Apr-98
Jan-99
Oct-99
Jul-00
Source: Thomson Reuters Datastream.
During this time period, thousands of Enron employees participated in the company’s 
401(k) retirement plan. The plan allowed employees to set aside some of their earnings 
in a tax-deferred account. Enron participated by matching the employees’ contribu-
tions. Enron made the match by depositing required amounts in the form of Enron 
shares. Enron restricted the sale of its contributed shares until an employee turned 
50 years old. In January 2001, the employees’ 401(k) retirement accounts were valued 
at over US$2 billion, of which US$1.3 billion (or 62 percent) was in Enron shares. 
Although Enron restricted the sale of shares it contributed, less than US$150 million 
of the total of US$1.3 billion in shares had this restriction. The implication was that 
Enron employees continued to hold large amounts of Enron shares even though they 
were free to sell them and invest the proceeds in other assets.
A typical individual was Roger Bruce,
3 a 67-year-old Enron retiree who held all 
of his US$2 million in retirement funds in Enron shares. Between January 2001 and 
January 2002, Enron’s share price fell from about US$90 per share to zero.
3 Sing letary (2001).
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 P ortfolio Management: An Overview126
Exhibit 2: Value of US$1 Invested from January 1990 to January 2002 Enron vs. S&P 500 Composite Index 
(1/1/1990 = US$1.00)
18
16
14
12
10
8
6
4
2
0
Enron
S&P 500
01/01/1990
01/09/1990
01/05/1991
01/01/1992
01/09/1992
01/05/1993
01/01/1994
01/09/1994
01/05/1995
01/01/1996
01/09/1996
01/05/1997
01/01/1998
01/09/1998
01/05/1999
01/01/2000
01/09/2000
01/05/2001
01/01/2002
Source: Thomson Reuters Datastream.
Employees and retirees who had invested all or most of their retirement savings in 
Enron shares, just like Mr. Bruce, experienced financial ruin. The hard lesson that the 
Enron employees learned from this experience was to “not put all your eggs in one 
basket. ”4 Unfortunately, the typical Enron employee did have most of his or her eggs 
in one basket. Most employees’ wages and financial assets were dependent on Enron’s 
continued viability; hence, any financial distress on Enron would have a material impact 
on an employee’s financial health. The bankruptcy of Enron resulted in the closing 
of its operations, the dismissal of thousands of employees, and its shares becoming 
worthless. Hence, the failure of Enron was disastrous to the typical Enron employee.
Enron employees were not the only ones to be victims of over-investment in 
a single company’s shares. In the defined contribution retirement plans at Owens 
Corning, Northern Telecom, Corning, and ADC Telecommunications, employees 
all held more than 25 percent of their assets in the company’s shares during a time 
(March 2000 to December 2001) in which the share prices in these companies fell by 
almost 90 percent. The good news in this story is that the employees participating in 
employer-matched 401(k) plans since 2001 have significantly reduced their holdings 
of their employers’ shares.
Thus, by taking a diversified portfolio approach, investors can spread away some 
of the risk. Rational investors are concerned about the risk–return trade-off of their 
investments. The portfolio approach provides investors with a way to reduce the risk 
associated with their wealth without necessarily decreasing their expected rate of return.
Portfolios: Reduce Risk
In addition to avoiding a potential disaster associated with over investing in a single 
security, portfolios also generally offer equivalent expected returns with lower overall 
volatility of returns—as represented by a measure such as standard deviation. Consider 
4 Thi s expression, which most likely originated in England in the 1700s, has a timeless sense of wisdom. 
© CFA In`,
    },
    {
      number: 4,
      title: `Basics of Portfolio Planning and Construction`,
      pages: 40,
      los: `Mastery The candidate should be able to:
describe the reasons for a written investment policy statement (IPS)
describe the major components of an IPS
describe risk and return objectives and how they may be developed
explain the difference between the willingness and the ability
(capacity) to take risk in analyzing an investor’s financial risk
describe the investment constraints of liquidity, time horizon, tax
concerns, legal and regulatory factors, and unique circumstances and
their implications for the choice of portfolio assets
explain the specification of asset classes in relation to asset allocation
describe the principles of portfolio construction and the role of asset
allocation in relation to the IPS`,
      intro: `To build a suitable portfolio for a client, investment advisers should first seek to 
understand the client’s investment goals, resources, circumstances, and constraints. 
Investors can be categorized into broad groups based on shared characteristics with 
respect to these factors (e.g., various types of individual investors and institutional 
investors). Even investors within a given type, however, will invariably have a number 
of distinctive requirements. In this reading, we consider in detail the planning for 
investment success based on an individualized understanding of the client.
1`,
      overview: ``,
      body: `INTRODUCTION
To build a suitable portfolio for a client, investment advisers should first seek to 
understand the client’s investment goals, resources, circumstances, and constraints. 
Investors can be categorized into broad groups based on shared characteristics with 
respect to these factors (e.g., various types of individual investors and institutional 
investors). Even investors within a given type, however, will invariably have a number 
of distinctive requirements. In this reading, we consider in detail the planning for 
investment success based on an individualized understanding of the client.
1
LEARNING MODULE
4
CFA Institute would like to thank 
Hardik Sanjay Shah, CFA, for his 
contributions to the 2022 update 
of this reading.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Basics of P ortfolio Planning and Construction162
This reading is organized as follows: Section 2 discusses the investment policy 
statement, a written document that captures the client’s investment objectives and 
the constraints. Section 3 discusses the portfolio construction process, including the 
first step of specifying a strategic asset allocation for the client. Section 4 concludes 
and summarizes the reading.
THE INVESTMENT POLICY STATEMENT
describe the reasons for a written investment policy statement (IPS)
describe the major components of an IPS
Portfolio planning can be defined as a program developed in advance of constructing 
a portfolio that is expected to define the client’s investment objectives. The written 
document governing this process is the investment policy statement (IPS). The IPS is 
sometimes complemented by a document outlining policy on responsible investing—
the broadest (umbrella) term used to describe principles that typically address one 
or more environmental, social, and governance themes that an investor requires to 
be considered when evaluating whether to invest in a particular company, as well as 
during the period of ownership. Sustainable investing, a term used in a similar con-
text to responsible investing, focuses on factoring in sustainability issues during the 
investment process. Policies on responsible investing may also be integrated within 
the IPS itself. In the remainder of this reading, the integration of responsible investing 
within the IPS will be our working assumption.
The Investment Policy Statement
The IPS is the starting point of the portfolio management process. Without a full 
understanding of the client’s situation and requirements, it is unlikely that successful 
results will be achieved. “Success” can be defined as a client achieving his important 
investment goals using means that he is comfortable with (in terms of risks taken and 
other concerns). The IPS essentially communicates a plan for achieving investment 
success.
The IPS is typically developed following a fact-finding discussion with the client. 
This discussion can include the use of a questionnaire designed to articulate the client’s 
risk tolerance as well as address expectations in connection with specific circum-
stances. In the case of institutional clients, the fact finding may involve asset–liability 
management reviews, identification of liquidity needs, and a wide range of tax, legal, 
and other considerations.
The IPS can take a variety of forms.
1 A typical format will include the client’s 
investment objectives and the constraints that apply to the client’s portfolio.
The client’s objectives are specified in terms of risk tolerance and return require-
ments. These elements must be consistent with each other: a client is unlikely to be 
able to find a portfolio that offers a relatively high expected return without taking 
1 In t his reading, an IPS is assumed to be a document governing investment management activities covering 
all or most of a client’s financial wealth. In many practical contexts, investment professionals work with 
investment mandates that cover only parts of a client’s wealth or financial risk. Governance documents such 
as “Limited Partnership Agreements” and “Investment Management Agreements” will govern such mandates. 
Their contents are to a large degree comparable to the contents of the IPS as described in this reading.
2
© CFA Institute. For candidate use only. Not for distribution.
The Investment Policy Statement 163
on a relatively high level of expected risk. As part of their financial planning, clients 
may specify specific spending goals, which need to be considered when setting risk 
tolerance and return requirements.
The constraints section covers factors that need to be taken into account when 
constructing a portfolio for the client that meets the objectives. The typical categories 
are liquidity requirements, time horizon, regulatory requirements, tax status, and 
unique needs. The constraints may be either internal (i.e., set by the client) or external 
(i.e., set by law or regulation), as we discuss in detail later.
Having a well-constructed IPS for all clients should be standard procedure for an 
investment manager. The investment manager should build the portfolio with refer -
ence to the IPS and be able to refer to it to assess a particular investment’s suitability 
for the client. In some cases, the need for the IPS goes beyond simply being a matter 
of standard procedure. In certain countries, the IPS (or an equivalent document) is 
a legal or regulatory requirement. For example, UK pension schemes must have a 
statement of investment principles under the Pensions Act 1995 (Section 35), and 
this statement is in essence an IPS. The UK Financial Services Authority also has 
requirements for investment firms to “know their customers. ” The European Union’s 
Markets in Financial Instruments Directive (“MiFID”) requires firms to assign clients 
to categories (eligible counterparties, institutional clients, or retail clients), with the 
category type determining the types of protections and limitations relevant for the 
client by law.
In the case of an institution, such as a pension plan or university endowment, the 
IPS may set out the governance arrangements that apply to the investment portfolio. 
For example, this information could cover the investment committee’s approach to 
appointing and reviewing investment managers for the portfolio, and the discretion 
that those managers have.
The IPS should be reviewed on a regular basis to ensure that it remains consistent 
with the client’s circumstances and requirements. For example, the UK Pensions 
Regulator suggests that a pension scheme’s statements of investment principles—a 
form of IPS—should be reviewed at least every three years. The IPS should also be 
reviewed if the manager becomes aware of a material change in the client’s circum-
stances, as well as on the initiative of the client when her objectives, time horizon, 
or liquidity needs change.
Major Components of an IPS
There is no single standard format for an IPS. Many IPS and investment governance 
documents with a similar purpose (as noted previously), however, include the fol-
lowing sections:
 ■ Introduction. This section describes the client.
 ■ Statement of Purpose. This section states the purpose of the IPS.
 ■ Statement of Duties and Responsibilities. This section details the duties and 
responsibilities of the client, the custodian of the client’s assets, and the 
investment managers.
 ■ Procedures. This section explains the steps to take to keep the IPS current 
and the procedures to follow to respond to various contingencies.
 ■ Investment Objectives. This section explains the client’s objectives in 
investing.
 ■ Investment Constraints. This section presents the factors that constrain the 
client in seeking to achieve the investment objectives.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Basics of P ortfolio Planning and Construction164
 ■ Investment Guidelines. This section provides information ab`,
    },
    {
      number: 5,
      title: `The Behavioral Biases of Individuals`,
      pages: 36,
      los: `Mastery The candidate should be able to:
compare and contrast cognitive errors and emotional biases
discuss commonly recognized behavioral biases and their
implications for financial decision making
describe how behavioral biases of investors can lead to market
characteristics that may not be explained by traditional finance`,
      intro: `Research has demonstrated that when people face complex decisions, they often 
rely on basic judgments and preferences to simplify the situation rather than acting 
completely rationally. Although such approaches are quick and intuitively appealing, 
they may lead to suboptimal outcomes. In contrast to this body of research, traditional 
economic and financial theory generally assumes that individuals act rationally by 
considering all available information in the decision-making process, leading them 
to optimal outcomes and supporting the efficiency of markets. Behavioral finance 
challenges these assumptions by incorporating research on how individuals and mar -
kets actually behave. In this reading, we explore a foundational concept of behavioral 
finance: behavioral biases. Investment professionals may be able to improve economic 
outcomes by understanding these biases, recognizing them in themselves and others, 
and learning strategies to mitigate them.
The reading proceeds as follows. Section 2 describes and broadly characterizes 
behavioral biases. Sections 3 and 4 discuss specific behavioral biases within two broad 
categories: cognitive errors and emotional biases. The discussion includes a descrip-
tion of each bias, potential consequences, and guidance on detecting and mitigating 
the effects of the bias. Section 5 discusses market anomalies, which are essentially 
aggregate expressions of individual biases among financial market participants. A 
summary and pract`,
      overview: ``,
      body: `INTRODUCTION
Research has demonstrated that when people face complex decisions, they often 
rely on basic judgments and preferences to simplify the situation rather than acting 
completely rationally. Although such approaches are quick and intuitively appealing, 
they may lead to suboptimal outcomes. In contrast to this body of research, traditional 
economic and financial theory generally assumes that individuals act rationally by 
considering all available information in the decision-making process, leading them 
to optimal outcomes and supporting the efficiency of markets. Behavioral finance 
challenges these assumptions by incorporating research on how individuals and mar -
kets actually behave. In this reading, we explore a foundational concept of behavioral 
finance: behavioral biases. Investment professionals may be able to improve economic 
outcomes by understanding these biases, recognizing them in themselves and others, 
and learning strategies to mitigate them.
The reading proceeds as follows. Section 2 describes and broadly characterizes 
behavioral biases. Sections 3 and 4 discuss specific behavioral biases within two broad 
categories: cognitive errors and emotional biases. The discussion includes a descrip-
tion of each bias, potential consequences, and guidance on detecting and mitigating 
the effects of the bias. Section 5 discusses market anomalies, which are essentially 
aggregate expressions of individual biases among financial market participants. A 
summary and practice problems conclude the reading.
1
LEARNING MODULE
5
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 T he Behavioral Biases of Individuals206
BEHAVIORAL BIAS CATEGORIES
compare and contrast cognitive errors and emotional biases
In general, behavioral biases come in two forms: faulty cognitive reasoning, known 
as cognitive errors, and those based on feelings or emotions, known as emotional 
biases. Both forms of bias, regardless of their source, may cause decisions to deviate 
from what is assumed by traditional finance theory.
Cognitive errors can often be corrected or eliminated through better information, 
education, and advice. Emotional biases, on the other hand, are harder to correct 
because they stem from impulses and intuitions. They arise spontaneously rather 
than through conscious effort and may even be undesired to the individual feeling 
them. Thus, it is often possible only to recognize an emotional bias and adapt to it. 
The cognitive–emotional distinction will help us determine when and how to adjust 
for behavioral biases in financial decision making.
Researchers have identified numerous behavioral biases. This reading does not 
attempt to catalog all of them. Rather, it discusses some of the more publicized and 
recognized biases within the cognitive–emotional framework. Additionally, we limit 
our focus to gauging the presence or absence—not the magnitude—of each bias dis -
cussed. That is, we will not try to measure how strongly the bias is exhibited, but rather 
we will describe the behavioral bias, its potential consequences, and the detection of 
and correction for the behavioral bias. In detecting a bias, we will identify statements 
or thought processes that may indicate the bias. Diagnostic tests of varying degrees 
of complexity are available to detect biases but are beyond the scope of this reading.
Finally, the individuals of interest in this reading are “financial market participants” 
(FMPs) engaged in financial decision making. These include both individual investors 
and financial services professionals.
COGNITIVE ERRORS
discuss commonly recognized behavioral biases and their 
implications for financial decision making
We classify cognitive errors into two categories: “belief perseverance biases” and 
“processing errors. ”
Belief perseverance is the tendency to cling to one’s previously held beliefs by 
committing statistical, information-processing, or memory errors. The belief perse-
verance biases discussed are conservatism, confirmation, representativeness, illusion 
of control, and hindsight.
Processing errors describe how information may be processed and used illogi-
cally or irrationally in financial decision making. The processing errors discussed are 
anchoring and adjustment, mental accounting, framing, and availability.
2
3
© CFA Institute. For candidate use only. Not for distribution.
Cognitive Errors 207
Belief Perseverance Biases
Belief perseverance biases result from the mental discomfort that occurs when new 
information conflicts with previously held beliefs or cognitions, known as cognitive 
dissonance. To resolve this discomfort, people may ignore or modify conflicting infor-
mation and consider only information that confirms their existing beliefs or thoughts.
Conservatism Bias
Conservatism bias is a belief perseverance bias in which people maintain their 
prior views or forecasts by inadequately incorporating new, conflicting information. 
In Bayesian terms, they tend to overweight their prior probability of the event and 
underweight the new information, resulting in revised beliefs about probabilities and 
outcomes that underreact to the new information.
Consequences of Conservatism Bias
As a result of conservatism bias, FMPs may do the following:
 ■ Maintain or be slow to update a view or a forecast, even when presented 
with new information; and
 ■ Maintain a prior belief rather than deal with the mental stress of updating 
beliefs given complex data. This behavior relates to an underlying difficulty 
in processing new information.
Detection of and Guidance for Overcoming Conservatism Bias
The effect of conservatism bias may be corrected for or reduced by properly analyzing 
and weighting new information. The first step is to be aware that a bias exists, especially 
about information that is technical, abstract, and/or statistical, because the cognitive 
cost involved in processing those forms of information is higher than for other types.
When new information is presented, the FMP should ask such questions as, “How 
does this information change my forecast?” or “What effect does this information have 
on my forecast?” FMPs should conduct careful analysis incorporating the new infor -
mation and then respond appropriately. This updating of prior beliefs in light of new 
information is consistent with the tenets of Bayes’ Rule, in which updated probabilities 
are derived by systematically combining previous estimates and new information.
If information is difficult to interpret or understand, FMPs should seek guidance 
from someone who can either explain how to interpret the information or can explain 
its implications.
Confirmation Bias
Confirmation bias refers to the tendency to look for and notice what confirms prior 
beliefs and to ignore or undervalue whatever contradicts them. A response to cog-
nitive dissonance, confirmation bias reflects a predisposition to justify to ourselves 
what we want to believe.
Most experienced private wealth advisers have dealt with a client who conducts 
some research and insists on adding a particular investment to the portfolio. The client 
may insist on continuing to hold the investment, even when the adviser recommends 
otherwise, because the client’s follow-up research seeks only information that con-
firms his belief that the investment is still a good value. The confirmation bias is not 
limited to individual investors; all FMPs should be wary of the potential confirmation 
biases within themselves.
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 T he Behavioral Biases of Individuals208
EXAMPLE 1
Confirmation Bias
A portfolio manager at Sarter Investment Advisors recommended shares of 
Real Media Inc., a hypothetical television production and distribution company, 
largely on the basis of compelling analytical and valuation work from a top 
equity research analyst. Sarter’s clients have owned the s`,
    },
    {
      number: 6,
      title: `Introduction to Risk Management`,
      pages: 40,
      los: `Mastery The candidate should be able to:
define risk management
describe features of a risk management framework
define risk governance and describe elements of effective risk
explain how risk tolerance affects risk management
describe risk budgeting and its role in risk governance
identify financial and non-financial sources of risk and describe how
describe methods for measuring and modifying risk exposures and
factors to consider in choosing among the methods`,
      intro: `Risk—and risk management—is an inescapable part of economic activity. People 
generally manage their affairs to be as happy and secure as their environment and 
resources will allow. But regardless of how carefully these affairs are managed, there is 
risk because the outcome, whether good or bad, is seldom predictable with complete 
certainty. There is risk inherent in nearly everything we do, but this reading will focus 
on economic and financial risk, particularly as it relates to investment management.
All businesses and investors manage risk, whether consciously or not, in the 
choices they make. At its core, business and investing are about allocating resources 
and capital to chosen risks. In their decision process, within an environment of 
uncertainty, these organizations may take steps to avoid some risks, pursue the risks 
that provide the highest rewards, and measure and mitigate their exposure to these 
risks as necessary. Risk management processes and tools make difficult business and 
financial problems easier to address in an uncertain world. Risk is not just a matter 
of fate; it is something that organizations can actively manage with their decisions, 
1`,
      overview: ``,
      body: `INTRODUCTION
Risk—and risk management—is an inescapable part of economic activity. People 
generally manage their affairs to be as happy and secure as their environment and 
resources will allow. But regardless of how carefully these affairs are managed, there is 
risk because the outcome, whether good or bad, is seldom predictable with complete 
certainty. There is risk inherent in nearly everything we do, but this reading will focus 
on economic and financial risk, particularly as it relates to investment management.
All businesses and investors manage risk, whether consciously or not, in the 
choices they make. At its core, business and investing are about allocating resources 
and capital to chosen risks. In their decision process, within an environment of 
uncertainty, these organizations may take steps to avoid some risks, pursue the risks 
that provide the highest rewards, and measure and mitigate their exposure to these 
risks as necessary. Risk management processes and tools make difficult business and 
financial problems easier to address in an uncertain world. Risk is not just a matter 
of fate; it is something that organizations can actively manage with their decisions, 
1
LEARNING MODULE
6
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 6 Intr oduction to Risk Management242
within a risk management framework. Risk is an integral part of the business or 
investment process. Even in the earliest models of modern portfolio theory, such as 
mean–variance portfolio optimization and the capital asset pricing model, investment 
return is linked directly to risk but requires that risk be managed optimally. Proper 
identification and measurement of risk, and keeping risks aligned with the goals of 
the enterprise, are key factors in managing businesses and investments. Good risk 
management results in a higher chance of a preferred outcome—more value for the 
company or portfolio or more utility for the individual.
Portfolio managers need to be familiar with risk management not only to improve 
the portfolio’s risk–return outcome, but also because of two other ways in which 
they use risk management at an enterprise level. First, they help to manage their own 
companies that have their own enterprise risk issues. Second, many portfolio assets 
are claims on companies that have risks. Portfolio managers need to evaluate the 
companies’ risks and how those companies are addressing them.
This reading takes a broad approach that addresses both the risk management 
of enterprises in general and portfolio risk management. The principles underlying 
portfolio risk management are generally applicable to the risk management of financial 
and non-financial institutions as well.
The concept of risk management is also relevant to individuals. Although many 
large organizations formally practice risk management, most individuals practice 
it more informally and some practice it haphazardly, oftentimes responding to risk 
events after they occur. Although many individuals do take reasonable precautions 
against unwanted risks, these precautions are often against obvious risks. The more 
subtle risks are often ignored. Unfortunately, many individuals do not view risk man-
agement as a formal, systematic process that would help them achieve not only their 
financial goals but also the ultimate goal, or maximum utility as economists like to 
call it, but they should.
Although the primary focus of this reading is on institutions, we will also cover 
risk management as it applies to individuals. We will show that many common themes 
underlie risk management—themes that are applicable to both organizations and 
individuals.
Although often viewed as defensive, risk management is a valuable offensive weapon 
in the manager’s arsenal. In the quest for preferred outcomes, such as higher profit, 
returns, or share price, management does not usually get to choose the outcomes but 
does choose the risks it takes in pursuit of those outcomes. The choice of which risks 
to undertake through the allocation of its scarce resources is the key tool available 
to management. An organization with a comprehensive risk management culture in 
place, in which risk is integral to every key strategy and decision, should perform 
better in the long-term, in good times and bad, as a result of better decision making.
The fact that all businesses and investors engage in risky activities (i.e., activities 
with uncertain outcomes) raises a number of important questions. The questions that 
this reading will address include the following:
 ■ What is risk management, and why is it important?
 ■ What risks does an organization (or individual) face in pursuing its 
objectives?
 ■ How are an organization’s goals affected by risk, and how does it make risk 
management decisions to produce better results?
 ■ How does risk governance guide the risk management process and risk bud-
geting to integrate an organization’s goals with its activities?
 ■ How does an organization measure and evaluate the risks it faces, and what 
tools does it have to address these risks?
© CFA Institute. For candidate use only. Not for distribution.
Risk Management Process 243
The answers to these questions collectively help to define the process of risk man-
agement. This reading is organized along the lines of these questions. Sections 2 and 3 
describe the risk management process, and Sections 4–6 discuss risk governance and 
risk tolerance. Sections 7 and 8 cover the identification of various risks, and Sections 
9–11 addresses the measurement and management of risks. 
RISK MANAGEMENT PROCESS
define risk management
Risk, broadly speaking, is exposure to uncertainty. Risk is also the concept used to 
describe all of the uncertain environmental variables that lead to variation in and 
unpredictability of outcomes. More colloquially, risk is about the chance of a loss or 
adverse outcome as a result of an action, inaction, or external event.
This last view may make it sound as if risk is something to be avoided. But that 
is not at all the case. Risk is a key ingredient in the recipe for business or investment 
success; return without risk is generally a false hope and usually a prescription for 
falling short of one’s goals. Risks taken must be carefully chosen, understood, and 
well-managed to have a chance at adding value through decisions. Risk and return 
are the interconnected forces of the financial universe. Many decision makers focus 
on return, which is not something that is easily controlled, as opposed to risk, or 
exposure to risk, which may actually be managed or controlled.
Risk exposure is the extent to which the underlying environmental or market 
risks result in actual risk borne by a business or investor who has assets or liabilities 
that are sensitive to those risks. It is the state of being exposed or vulnerable to a 
risk. Risk exposure results from the decisions of an organization or investor to take 
on risk-sensitive assets and liabilities.
Suppose there is an important announcement in Japan that will result in the yen 
either appreciating or depreciating by 1%. The range of possible outcomes in real sit -
uations is clearly not as simple as the up-or-down 1% case used here, but we will use 
a simplified example to make an important point. The risk is the uncertain outcome 
of this event, and the currency risk to a non-Japanese business is the uncertain return 
or variation in return in domestic currency terms that results from the event. The risk 
can be described as the range of resulting outcomes and is often thought of in terms 
of a probability distribution of future returns. Suppose that the underlying amount is 
¥1,000,000. The risk exposure of a business may be zero or it could be sizable, depending 
on whether the business has assets or liabilities tied to this risk—in this case, exposure 
to that currency. One million yen would, in this example, result i`,
    },
  ],
  ethics: [
    {
      number: 1,
      title: `Ethics and Trust in the Investment Profession`,
      pages: 30,
      los: `Mastery The candidate should be able to:
describe the role of a code of ethics in defining a profession
describe professions and how they establish trust
describe the need for high ethical standards in investment
explain professionalism in investment management
identify challenges to ethical behavior
compare and contrast ethical standards with legal standards
describe a framework for ethical decision making`,
      intro: `As a candidate in the CFA Program, you are both expected and required to meet 
high ethical standards. This reading introduces ideas and concepts that will help you 
understand the importance of ethical behavior in the investment industry. You will 
be introduced to various types of ethical issues within the investment profession and 
learn about the CFA Institute Code of Ethics. 
The readings covering ethics and professional standards demonstrate that ethi-
cal behavior is central to creating trust. Professional behavior is equally important. 
Professions help maintain trust in an industry by establishing codes and setting 
1`,
      overview: ``,
      body: `INTRODUCTION
As a candidate in the CFA Program, you are both expected and required to meet 
high ethical standards. This reading introduces ideas and concepts that will help you 
understand the importance of ethical behavior in the investment industry. You will 
be introduced to various types of ethical issues within the investment profession and 
learn about the CFA Institute Code of Ethics. 
The readings covering ethics and professional standards demonstrate that ethi-
cal behavior is central to creating trust. Professional behavior is equally important. 
Professions help maintain trust in an industry by establishing codes and setting 
1
LEARNING MODULE
1
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 1 Ethics and Trust in the Investment Profession4
standards that put a framework around ethical behavior and technical competence. 
Professions also set the wider goal of gaining and maintaining the trust of society as 
a whole. In this regard, professions have a sense of purpose that society values.
Imagine that you are employed in the research department of a large financial 
services firm. You and your colleagues spend your days researching, analyzing, and 
valuing the shares of publicly traded companies and sharing your investment recom-
mendations with clients. You love your work and take great satisfaction in knowing 
that your recommendations can help the firm’s investing clients make informed invest-
ment decisions that will help them meet their financial goals and improve their lives.
Several months after starting at the firm, you learn that an analyst at the firm has 
been terminated for writing and publishing research reports that misrepresented the 
fundamental risks of some companies to investors. You learn that the analyst wrote 
the reports with the goal of pleasing the management of the companies that were 
the subjects of the research reports. He hoped that these companies would hire your 
firm’s investment banking division for its services and he would be rewarded with 
large bonuses for helping the firm increase its investment banking fees. Some clients 
bought shares based on the analyst’s reports and suffered losses. They posted stories 
on the internet about their losses and the misleading nature of the reports. When 
the media investigated and published the story, the firm’s reputation for investment 
research suffered. Investors began to question the firm’s motives and the objectivity of 
its research recommendations. The firm’s investment clients started to look elsewhere 
for investment advice, and company clients begin to transfer their business to firms 
with untarnished reputations. With business declining, management is forced to trim 
staff. Along with many other hard-working colleagues, you lose your job—through 
no fault of your own.
Imagine how you would feel in this situation. Most people would feel upset and 
resentful that their hard and honest work was derailed by someone else’s unethical 
behavior. Yet, this type of scenario is not uncommon. Around the world, unsuspecting 
employees at such companies as SAC Capital, Stanford Financial Group, Everbright 
Securities, Enron, Satyam Computer Services, Arthur Andersen, and other large com -
panies have experienced such career setbacks when someone else’s actions destroyed 
trust in their companies and industries.
Businesses and financial markets thrive on trust—defined as a strong belief in the 
reliability of a person or institution. In a 2016 study on trust, investors indicated that 
to earn their trust, the top two attributes of an investment manager should be that it 
(1) has transparent and open business practices, and (2) has ethical business practices.1 
Although these attributes are valued by customers and clients in any industry, this 
reading will explore why they are of particular importance to the investment industry.
People may think that ethical behavior is simply about following laws, regulations, 
and other rules, but throughout our lives and careers we will encounter situations in 
which there is no definitive rule that specifies how to act, or the rules that exist may be 
unclear or even in conflict with each other. Responsible people, including investment 
professionals, must be willing and able to identify potential ethical issues and create 
solutions to them even in the absence of clearly stated rules.
1 C FA Institute From Trust to Loyalty: A Global Survey of What Investors Want (2013): http://  www 
.cfapubs .or g/  doi/  p df/ 10  .2469/  cc b .v2013  .n14  .1  .(2016): https:// www .c fainstitute  .or g/  re search/ sur vey -r eports/ 
from - trust  - to  -loy alty
© CFA Institute. For candidate use only. Not for distribution.
Ethics 5
ETHICS
explain ethics
Through our individual actions, each of us can affect the lives of others. Our decisions 
and behavior can harm or benefit a variety of stakeholders—individuals or groups 
of individuals who could be affected either directly or indirectly by a decision and 
thus have an interest, or stake, in the decision. Examples of stakeholders in decisions 
made by investment industry professionals include our colleagues, our clients, our 
employers, the communities in which we live and work, the investment profession, 
trade associations, regulators, and other financial market participants. In some cases, 
our actions may benefit all of these stakeholder groups; in other cases, our actions 
may benefit only some stakeholder groups; and in still other cases, our actions may 
benefit some stakeholder groups and harm others. For example, recall the research 
analyst in the introduction who wrote misleading research reports with the aim of 
increasing the financial benefit to himself and his employer. In the very short term, 
his conduct seemed to directly benefit some stakeholders (certain clients, himself, 
and his employer) and to harm other stakeholders (clients who invested based on his 
reports). Over a longer time period, his conduct resulted in harm to himself and many 
other stakeholders—his employer, his employer’s clients, his colleagues, investors, 
and through loss of trust when the story was published, the larger financial market.
Ethics encompasses a set of moral principles and rules of conduct that provide 
guidance for our behavior. The word “ethics” comes from the Greek word “ethos, ” 
meaning character, used to describe the guiding beliefs or ideals characterizing a 
society or societal group. Beliefs are assumptions or thoughts we hold to be true. A 
principle is defined as a belief or fundamental truth that serves as the foundation for 
a system of belief or behavior or a chain of reasoning. Our beliefs form our values—
those things we deem to have worth or merit.
Moral principles or ethical principles are beliefs regarding what is good, accept-
able, or obligatory behavior and what is bad, unacceptable, or forbidden behavior. 
Ethical principles may refer to beliefs regarding behavior that an individual expects of 
himself or herself, as well as shared beliefs regarding standards of behavior expected 
or required by a community or societal group.
The study of ethics examines the role of consequences and personal character in 
defining what is considered good, or ethical, conduct.
Ethical conduct is behavior that follows moral principles and balances self-interest 
with both the direct and the indirect consequences of the behavior on others. Ethical 
actions are those actions that are perceived as beneficial and conforming to the ethi-
cal expectations of society. An action may be considered beneficial if it improves the 
outcomes or consequences for stakeholders affected by the action. Telling the truth 
about the risks or costs associated with a recommended investment, for example, is 
an ethical action—that is, one that conforms to the ethical expectations of society in 
general and clients in particular. Telling the truth is also beneficial; tellin`,
    },
    {
      number: 2,
      title: `Code of Ethics and Standards of Professional Conduct`,
      pages: 20,
      los: ``,
      intro: ``,
      overview: ``,
      body: `Code of Ethics and Standards 
of Professional Conduct
LEARNING OUTCOMES
Mastery The candidate should be able to:
describe the structure of the CFA Institute Professional Conduct 
Program and the process for the enforcement of the Code and 
Standards
identify the six components of the Code of Ethics and the seven 
Standards of Professional Conduct
explain the ethical responsibilities required by the Code and 
Standards, including the sub-sections of each Standard
PREFACE
describe the structure of the CFA Institute Professional Conduct 
Program and the process for the enforcement of the Code and 
Standards
The Standards of Practice Handbook ( Handbook) provides guidance to the people 
who grapple with real ethical dilemmas in the investment profession on a daily basis; 
the Handbook addresses the professional intersection where theory meets practice 
and where the concept of ethical behavior crosses from the abstract to the concrete. 
The Handbook is intended for a diverse and global audience: CFA Institute members 
navigating ambiguous ethical situations; supervisors and direct/indirect reports 
determining the nature of their responsibilities to each other, to existing and poten-
tial clients, and to the broader financial markets; and candidates preparing for the 
Chartered Financial Analyst (CFA) examinations.
Events in global financial markets test the ethical mettle of financial market par -
ticipants, including CFA Institute members and candidates. The standards taught in 
the CFA Program and by which CFA Institute members and candidates must abide 
represent timeless ethical principles and professional conduct for all market conditions. 
Through adherence to these standards, which continue to serve as the model for eth-
ical behavior in the investment profession globally, each market participant does his 
or her part to improve the integrity and efficient operations of the financial markets.
1
LEARNING MODULE
2
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 2 C ode of Ethics and Standards of Professional Conduct34
The Handbook provides guidance for understanding the interconnectedness of 
the aspirational and practical principles and provisions of the Code of Ethics and 
Standards of Professional Conduct (Code and Standards). The Code contains high-level 
aspirational ethical principles that drive members and candidates to create a positive 
and reputable investment profession. The Standards contain practical ethical prin-
ciples of conduct that members and candidates must follow to achieve the broader 
industry expectations. However, applying the principles individually may not capture 
the complexity of ethical requirements related to the investment industry. The Code 
and Standards should be viewed and interpreted as an interwoven tapestry of ethical 
requirements. Through members’ and candidates’ adherence to these principles as a 
whole, the integrity of and trust in the capital markets are improved.
Evolution of the CFA Institute Code of Ethics and Standards of 
Professional Conduct
The Code and Standards are regularly reviewed and updated so that they remain effec-
tive and continue to represent the highest ethical standards in the global investment 
industry. CFA Institute strongly believes that revisions of the Code and Standards are 
undertaken not for cosmetic purposes but to add value by addressing legitimate con-
cerns and improving comprehension. In 2023, the CFA Institute Board of Governors 
approved revisions to the Code and Standards that are fully described later in this 
learning module.
Changes to the Code and Standards have far-reaching implications for the CFA 
Institute membership, the CFA Program, and the investment industry as a whole. CFA 
Institute members and candidates are required to adhere to the Code and Standards. 
In addition, the Code and Standards are often adopted, in whole or in part, by firms 
and regulatory authorities. Their relevance goes well beyond CFA Institute members 
and candidates.
Standards of Practice Handbook
The periodic revisions of the Standards of Practice Handbook have come in conjunction 
with updates of the Code and Standards. The Handbook is the fundamental element 
of the ethics education effort of CFA Institute and the primary resource for guidance 
in interpreting and implementing the Code and Standards. The Handbook seeks to 
educate members and candidates on how to apply the Code and Standards to their 
professional lives and thereby benefit their clients, employers, and the investing public 
in general. The Handbook explains the purpose of the Code and Standards and how 
they apply in a variety of situations. The sections discuss and amplify each standard 
and suggest procedures for compliance.
Examples in the “ Application of the Standard” sections are meant to illustrate how 
the standard applies to hypothetical but factual situations. The names contained in the 
examples are fictional and are not meant to refer to any actual person or entity. Unless 
otherwise stated (e.g., one or more people are specifically identified), individuals in 
each example are subject to the requirements of the Code and Standards. Because 
factual circumstances vary so widely and often involve gray areas, the explanatory 
material and examples are not intended to be all inclusive. Many examples set forth 
in the application sections involve standards that have legal counterparts; members 
are strongly urged to discuss with their supervisors and legal and compliance 
departments the content of the Code and Standards and the members’ general 
obligations under the Code and Standards.
© CFA Institute. For candidate use only. Not for distribution.
Preface 35
CFA Institute recognizes that the presence of any set of ethical standards may 
create a false sense of security unless the documents are fully understood, enforced, 
and made a meaningful part of everyday professional activities. The Handbook is 
intended to provide a useful frame of reference that outlines ethical professional 
conduct for the organization’s members and candidates. The Handbook cannot cover 
every contingency or circumstance, however, and it does not attempt to do so. The 
development and interpretation of the Code and Standards are evolving processes; 
the Code and Standards will be subject to continuing refinement.
Summary of the 2023 Revisions to the Code and Standards
In 2023, the CFA Institute Board of Governors revised the Standards of Professional 
Conduct in three areas, resulting in the inclusion of one new standard and revisions 
to two existing standards. The following is a summary of the changes:
1.
 W
ithin Standard I: Professionalism, the Board approved a new standard 
requiring members to act with and maintain the competence necessary to 
fulfill their professional responsibilities, thus reinforcing the principle set 
forth in the Code of Ethics.
2.
 W
ithin Standard V: Investment Analysis, Recommendations, and Actions, 
the Board revised Standard V(B) Communication with Clients and 
Prospective Clients to require disclosures about the nature of the services 
provided by members and candidates and the costs to the client associated 
with those services.
3.
 W
ithin Standard VI: Conflicts of Interest, the Board changed the name of 
Standard VI(A) to “Standard VI(A) Avoid or Disclose Conflicts” and revised 
the standard to require members and candidates to either avoid conflicts 
of interest or disclose those conflicts. Previously, there was no mention of 
avoiding conflicts of interest in the standard.
New guidance and examples have been added to the Handbook to fully explain 
these new requirements.
New and Revised Standards of Professional Conduct
Competence Standard
I. PROFESSIONALISM
E. Competence
Members and Candidates must:
1.
 A
ct with and maintain the competence necessary to fulfill their profes -
sional responsibilities.
Given the diverse range of professional services engag`,
    },
    {
      number: 3,
      title: `Guidance for Standards I–VII`,
      pages: 40,
      los: ``,
      intro: ``,
      overview: ``,
      body: `Guidance for Standards I–VII
LEARNING OUTCOMES
Mastery The candidate should be able to:
demonstrate the application of the Code of Ethics and Standards of 
Professional Conduct to situations involving issues of professional 
integrity
recommend practices and procedures designed to prevent violations 
of the Code of Ethics and Standards of Professional Conduct
identify conduct that conforms to the Code and Standards and 
conduct that violates the Code and Standards
STANDARD I: PROFESSIONALISM
Standard I(A) Knowledge of the Law
Members and Candidates must understand and comply with all applicable laws, 
rules, and regulations (including the CFA Institute Code of Ethics and Standards 
of Professional Conduct) of any government, regulatory organization, licensing 
agency, or professional association governing their professional activities. In the 
event of conflict, Members and Candidates must comply with the more strict law, 
rule, or regulation. Members and Candidates must not knowingly participate or 
assist in and must dissociate from any violation of such laws, rules, or regulations. 
Guidance
Highlights:
 ■ Relationship between the Code and Standards and Applicable Law
 ■ Participation in or Association with Violations by Others
 ■ Investment Products and Applicable Laws
1
LEARNING MODULE
3
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 3 Guidance f or Standards I–VII54
Members and candidates must understand the applicable laws and regulations of 
the countries and jurisdictions where they engage in professional activities. These 
activities may include, but are not limited to, trading of securities or other financial 
instruments, providing investment advice, conducting research, or performing other 
investment services. On the basis of their reasonable and good faith understanding, 
members and candidates must comply with the laws and regulations that directly 
govern their professional activities and resulting outcomes and that protect the 
interests of the clients. 
When questions arise, members and candidates should know their firm’s policies 
and procedures for accessing compliance guidance. This standard does not require 
members and candidates to become experts, however, in compliance. Additionally, 
members and candidates are not required to have detailed knowledge of or be experts 
on all the laws that could potentially govern their activities.
During times of changing regulations, members and candidates must remain vigilant 
in maintaining their knowledge of the requirements for their professional activities. 
New financial products and processes, along with uncovered ethical missteps, create an 
environment for recurring and potentially wide-ranging regulatory changes. Members 
and candidates are also continually provided improved and enhanced methods of 
communicating with both clients and potential clients, such as mobile applications 
and web-based social networking platforms. As new local, regional, and global 
requirements are updated to address these and other changes, members, candidates, 
and their firms must adjust their procedures and practices to remain in compliance.
Relationship between the Code and Standards and Applicable Law
Some members or candidates may live, work, or provide investment services to clients 
living in a country that has no law or regulation governing a particular action or that 
has laws or regulations that differ from the requirements of the Code and Standards. 
When applicable law and the Code and Standards require different conduct, mem-
bers and candidates must follow the more strict of the applicable law or the Code 
and Standards.
“ Applicable law” is the law that governs the member’s or candidate’s conduct. 
Which law applies will depend on the particular facts and circumstances of each 
case. The “more strict” law or regulation is the law or regulation that imposes greater 
restrictions on the action of the member or candidate or calls for the member or 
candidate to exert a greater degree of action that protects the interests of investors. 
For example, applicable law or regulation may not require members and candidates 
to disclose referral fees received from or paid to others for the recommendation of 
investment products or services. Because the Code and Standards impose this obli-
gation, however, members and candidates must disclose the existence of such fees.
Members and candidates must adhere to the following principles:
 ■ Members and candidates must comply with applicable laws or regulations 
related to their professional activities. 
 ■ Members and candidates must not engage in conduct that constitutes a vio-
lation of the Code and Standards, even though it may otherwise be legal.
 ■ In the absence of any applicable law or regulation or when the Code and 
Standards impose a higher degree of responsibility than applicable laws 
and regulations, members and candidates must adhere to the Code and 
Standards. Applications of these principles are outlined in Exhibit 1.
The applicable laws governing the responsibilities of a member or candidate should 
be viewed as the minimal threshold of acceptable actions. When members and can-
didates take actions that exceed the minimal requirements, they further support the 
conduct required of Standard I(A).
© CFA Institute. For candidate use only. Not for distribution.
Standard I: Professionalism 55
CFA Institute members are obligated to abide by the CFA Institute Articles of 
Incorporation, Bylaws, Code of Ethics, Standards of Professional Conduct, Rules of 
Procedure, Membership Agreement, and other applicable rules promulgated by CFA 
Institute, all as amended periodically. CFA candidates who are not members must 
also abide by these documents (except for the Membership Agreement) as well as 
rules and regulations related to the administration of the CFA
® exam, the Candidate 
Responsibility Statement, and the Candidate Pledge.
Participation in or Association with Violations by Others
Members and candidates are responsible for violations in which they knowingly par -
ticipate or assist. Although members and candidates are presumed to have knowledge 
of all applicable laws, rules, and regulations, CFA Institute acknowledges that mem-
bers may not recognize violations if they are not aware of all the facts giving rise to 
the violations. Standard I(A) applies when members and candidates know or should 
know that their conduct may contribute to a violation of applicable laws, rules, or 
regulations or the Code and Standards.
If a member or candidate has reasonable grounds to believe that imminent or 
ongoing client or employer activities are illegal or unethical, the member or candi-
date must dissociate, or separate, from the activity. In extreme cases, dissociation 
may require a member or candidate to leave his or her employment. Members and 
candidates may take the following intermediate steps to dissociate from ethical vio-
lations of others when direct discussions with the person or persons committing the 
violation are unsuccessful. The first step should be to attempt to stop the behavior by 
bringing it to the attention of the employer through a supervisor or the firm’s compli-
ance department. If this attempt is unsuccessful, then members and candidates have 
a responsibility to step away and dissociate from the activity. Dissociation practices 
will differ on the basis of the member’s or candidate’s role in the investment industry. 
It may include removing one’s name from written reports or recommendations, asking 
for a different assignment, or refusing to accept a new client or continue to advise a 
current client. Inaction combined with continuing association with those involved 
in illegal or unethical conduct may be construed as participation or assistance in the 
illegal or unethical conduct.
CFA Institute strongly encourages members and candidates to report potential 
violations of the Code and Stan`,
    },
    {
      number: 4,
      title: `Introduction to the Global Investment Performance Standards (GIPS)`,
      pages: 10,
      los: `Mastery The candidate should be able to:
explain why the GIPS standards were created, who can claim
compliance, and who benefits from compliance
describe the key concepts of the GIPS Standards for Firms
explain the purpose of composites in performance reporting
describe the fundamentals of compliance, including the
recommendations of the GIPS standards with respect to the
definition of the firm and the firm’s definition of discretion
describe the concept of independent verification`,
      intro: `The objective of this reading is to provide candidates with an orientation to the GIPS 
standards. It explains why the GIPS standards were created, who can claim com-
pliance, and who benefits from compliance. It also covers key concepts of the GIPS 
standards—composites, the definition of the firm, and the definition of investment 
discretion. Finally, the reading briefly discusses the purpose and benefits of verifica-
tion. Upon completion of this reading, candidates should appreciate the benefits of an 
industry-wide set of standards for calculating and presenting investment performance 
based on the principles of fair representation and full disclosure.
The 2020 edition of the GIPS standards has three chapters:
1.
 GI
PS Standards for Firms
2.
 GI
PS Standards for Asset Owners
3.
 GI
PS Standards for Verifiers
Organizations that compete for business must comply with the GIPS Standards 
for Firms. 
Candidates are also responsible for reading the sections of the GIPS Standards 
for Firms specifically referenced in this reading. A complete copy of the 2020 GIPS 
Standards for Firms can be found here: https:// www .c fainstitute  .or g/  en/  e thics/  c odes/ 
gips - standards/  fir ms. 
1`,
      overview: ``,
      body: `INTRODUCTION
The objective of this reading is to provide candidates with an orientation to the GIPS 
standards. It explains why the GIPS standards were created, who can claim com-
pliance, and who benefits from compliance. It also covers key concepts of the GIPS 
standards—composites, the definition of the firm, and the definition of investment 
discretion. Finally, the reading briefly discusses the purpose and benefits of verifica-
tion. Upon completion of this reading, candidates should appreciate the benefits of an 
industry-wide set of standards for calculating and presenting investment performance 
based on the principles of fair representation and full disclosure.
The 2020 edition of the GIPS standards has three chapters:
1.
 GI
PS Standards for Firms
2.
 GI
PS Standards for Asset Owners
3.
 GI
PS Standards for Verifiers
Organizations that compete for business must comply with the GIPS Standards 
for Firms. 
Candidates are also responsible for reading the sections of the GIPS Standards 
for Firms specifically referenced in this reading. A complete copy of the 2020 GIPS 
Standards for Firms can be found here: https:// www .c fainstitute  .or g/  en/  e thics/  c odes/ 
gips - standards/  fir ms. 
1
LEARNING MODULE
4
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Intr oduction to the Global Investment Performance Standards (GIPS)242
WHY WERE THE GIPS STANDARDS CREATED, WHO 
CAN CLAIM COMPLIANCE, & WHO BENEFITS FROM 
COMPLIANCE?
explain why the GIPS standards were created, who can claim 
compliance, and who benefits from compliance 
describe the key concepts of the GIPS Standards for Firms
The mission of the GIPS standards is to promote ethics and integrity and instill trust 
through the use of the GIPS standards by achieving universal demand for compliance 
by asset owners, adoption by asset managers, and support from regulators for the 
ultimate benefit of the global investment community.
Institutions and individuals are constantly scrutinizing past investment perfor -
mance returns in search of the best manager to achieve their investment objectives.
In the past, the investment community had great difficulty making meaningful 
comparisons on the basis of accurate investment performance data. Several perfor -
mance measurement practices hindered the comparability of performance returns from 
one firm to another, while others called into question the accuracy and credibility of 
performance reporting overall. Misleading practices included:
 ■ Representative Accounts: Selecting a top-performing portfolio to represent 
the firm’s overall investment results for a specific mandate.
 ■ Survivorship Bias: Presenting an “average” performance history that excludes  
portfolios whose poor performance was weak enough to result in termina-
tion of the firm.
 ■ Varying Time Periods: Presenting performance for a selected time period 
during which the mandate produced excellent returns or out-performed 
its benchmark—making comparison with other firms’ results difficult or 
impossible.
Making a valid comparison of investment performance among even the most 
ethical investment management firms was problematic. For example, a pension 
fund seeking to hire an investment management firm might receive proposals from 
several firms, possibly from different countries, all using different methodologies for 
calculating their results.
The GIPS standards are a practitioner-driven set of ethical principles that establish 
a standardized, industry-wide approach for investment firms to follow in calculating 
and presenting their historical investment results to prospective clients. The GIPS 
standards ensure fair representation and full disclosure of investment performance. 
In other words, the GIPS standards lead investment management firms to avoid 
misrepresentations of performance and to communicate all relevant information 
that prospective clients and investors should know in order to evaluate past results. 
The objectives of the GIPS standards are as follows:
 ■ Promote investor interests and instill investor confidence.
 ■ Ensure accurate and consistent data.
 ■ Obtain worldwide acceptance of a single standard for calculating and pre-
senting performance.
 ■ Promote fair, global competition among investment firms.
 ■ Promote industry self-regulation on a global basis.
2
© CFA Institute. For candidate use only. Not for distribution.
Why Were the GIPS Standards Created, Who Can Claim Compliance, & Who Benefits from Compliance? 243
Who Can Claim Compliance?
Any firm that managesactualassets may choose to comply with the GIPS standards. 
Consultants cannot make a claim of compliance unless they actually manage the assets 
for which they are making a claim of compliance. They can claim to endorse the GIPS 
standards and/or require that their investment managers comply with the GIPS stan-
dards. Similarly, software (and the vendors who supply software) cannot be “compliant. ” 
Software can assist firms in achieving compliance with the GIPS standards (e.g., by 
calculating performance in a manner consistent with the calculation requirements of 
the GIPS standards), but only a firm managing assets can claim compliance once the 
firm has satisfied all applicable requirements of the GIPS standards.
Asset owners may comply with the GIPS standards in the same way as firms if they 
compete for business. If they don’t compete for business but report their performance 
to an oversight body, asset owners may choose to comply with the GIPS Standards 
for Asset Owners.
Compliance is a firm-wide process that cannot be achieved on a single product 
or composite. A firm has only two options with regard to compliance with the GIPS 
standards:
1. fully comply with all requirements of the GIPS standards and claim compliance 
through the use of the GIPS Compliance Statement; or
2. not comply with all requirements of the GIPS standards and not claim compli-
ance with, or make any reference to, the GIPS standards.
Complying with the GIPS standards is voluntary. Compliance with the GIPS 
standards is not typically required by legal or regulatory authorities.
Who Benefits from Compliance?
The GIPS standards benefit firms and their prospective clients and investors, as well 
as asset owners and their oversight bodies.
 ■ By choosing to comply with the GIPS standards, firms assure prospective 
clients and investors that the historical track record they report is both 
complete and fairly presented. Compliance enables the GIPS-compliant firm 
to participate in competitive bids against other compliant firms throughout 
the world. Achieving and maintaining compliance may also strengthen the 
firm’s internal controls over performance-related policies and procedures.
 ■ Prospective clients and investors have a greater level of confidence in the 
integrity of performance presentations of a GIPS-compliant firm and can 
more easily compare performance presentations from different investment 
management firms. The GIPS standards certainly do not eliminate the need 
for in-depth due diligence on the part of the client or investor, but compli-
ance with the Standards enhances the credibility of investment management 
firms that have chosen to undertake this responsibility.
 ■ Asset owners provide performance information to their oversight bod-
ies that allows them to make investment decisions and evaluate the per -
formance of the funds under their supervision. Particularly where asset 
owners require their external managers to comply with the GIPS standards, 
reporting to the oversight body using the same principles facilitates the 
understanding of the sources of risk and excess return in the funds under 
supervision.
 ■ Key Concepts 
 ■ Key concepts of the GIPS standards that apply to firms include the 
following:
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 4 Intr oduction to the Global Investment Performance Standards (GIPS)244
 ■ T`,
    },
    {
      number: 5,
      title: `Ethics Application`,
      pages: 38,
      los: `Mastery The candidate should be able to:
evaluate practices, policies, and conduct relative to the CFA Institute
Code of Ethics and Standards of Professional Conduct
explain how the practices, policies, and conduct do or do not violate
the CFA Institute Code of Ethics and Standards of Professional`,
      intro: `This reading presents a number of short vignettes, or scenarios, inspired by real-world 
situations and events. 1 After reading the facts of each scenario, use your knowledge 
of the CFA Institute Code of Ethics and Standards of Professional Conduct to choose 
the best response to the multiple-choice question. After making your choice, be sure 
to review the correct response and case analysis, which discusses the rationale for 
why or why not a violation of the Code and Standards might have taken place and 
conduct that would comply with the Code and Standards.`,
      overview: ``,
      body: `INTRODUCTION
This reading presents a number of short vignettes, or scenarios, inspired by real-world 
situations and events. 1 After reading the facts of each scenario, use your knowledge 
of the CFA Institute Code of Ethics and Standards of Professional Conduct to choose 
the best response to the multiple-choice question. After making your choice, be sure 
to review the correct response and case analysis, which discusses the rationale for 
why or why not a violation of the Code and Standards might have taken place and 
conduct that would comply with the Code and Standards.
PROFESSIONALISM
evaluate practices, policies, and conduct relative to the CFA Institute 
Code of Ethics and Standards of Professional Conduct
explain how the practices, policies, and conduct do or do not violate 
the CFA Institute Code of Ethics and Standards of Professional 
Conduct
1 B ased on cases from CFA Institute, “Ethics in Practice: Ethics in Investment Management Casebook” 
(2019). www .c fainstitute  .or g/  -/  me dia/  do cuments/  e thics -in  - practice/  e thics -in  - practice  -c asebook -2nd  -e dition 
-web .p df. 
1
2
LEARNING MODULE
5
© CFA Institute. For candidate use only. Not for distribution.
Learning Module 5 Ethics Applic ation252
Knowledge of the Law
Members and Candidates must understand and comply with all applicable 
laws, rules, and regulations (including the CFA Institute Code of Ethics 
and Standards of Professional Conduct) of any government, regulatory 
organization, licensing agency, or professional association governing their 
professional activities. In the event of conflict, Members and Candidates 
must comply with the more strict law, rule, or regulation. Members and 
Candidates must not knowingly participate or assist in and must dissociate 
from any violation of such laws, rules, or regulations.
Mandracken
SBS Bank (SBS) serves as a custody bank for a wide range of clients. SBS offers a variety 
of services to its clients, including custody, clearing, payment, settlement, and record 
keeping. SBS charges its clients an asset-based fee for these services. Pursuant to the 
bank’s client agreement, custody clients agree to reimburse the bank for out-of-pocket 
expenses for items paid by the custodian on their behalf. The majority of these 
expenses are for messages sent via the Society for Worldwide Interbank Financial 
Telecommunication (SWIFT), a secure messaging network used by banks and other 
financial institutions. Although SBS charges custody clients an established rate for 
SWIFT messages, the rate is greater than the actual cost of providing this service.
Mandracken, CFA, a vice president at SBS who oversees client service responsi-
bilities, recognizes this discrepancy and brings it to the attention of his supervisor. 
In an email, Mandracken states that “although disclosure of charging for SWIFT fees 
is noted in the clients’ fee schedules, the fees have always included an increase over 
actual cost, so the charge to clients is not a true pass-through because we add a mar -
gin. ” Mandracken’s supervisor instructs him to reduce the SWIFT fee rate for new 
clients and to revisit the rate for existing clients when their contracts are renewed.
To meet his obligations under the CFA Institute Code and Standards, Mandracken 
should
A.
 im
plement the corrective procedures as directed by his supervisor.
B. im
plement the corrective procedures as directed by his supervisor but 
report his objections to the bank’s board of directors.
C.
 r
efuse to participate in any client interactions using the fee schedule until 
the bank revises the SWIFT rate to reflect the actual cost of the service.
Analysis
C is correct. This case involves how to appropriately address the misconduct of others 
in carrying out your professional responsibilities. Standard I(A) Knowledge of the 
Law prohibits CFA Institute members and candidates from knowingly participating 
or assisting in legal or ethical violations and requires them to dissociate from any 
such activity. SBS is misrepresenting its reimbursable expenses to its custody clients 
and overcharging them. Although Mandracken brings the issue to the attention of 
his supervisor, his supervisor’s corrective measures are inadequate because they (1) 
address the issue only for new clients, (2) do not immediately address the issue for 
existing clients, and (3) do not address the misrepresentation and overcharges to past 
clients. Mandracken must thus refuse to participate in any client interactions that use 
the fee schedule until the bank revises the SWIFT fees charged to custody clients to 
reflect actual out-of-pocket costs.
© CFA Institute. For candidate use only. Not for distribution.
Professionalism 253
A is incorrect. Under the Code and Standards, Mandracken cannot continue 
to participate in or be associated with this misconduct. Inaction by a member and 
continuing association with those involved in illegal or unethical conduct might be 
viewed as participation or assistance in the illegal or unethical conduct.
B is incorrect. Mandracken might need to take drastic measures to dissociate from 
the activity and to protect client interests, such as leaving the bank or reporting the 
misconduct to the bank’s board of directors or regulators. Several interim steps should 
be considered before this action, such as talking to his supervisor or the bank’s com-
pliance department about the inadequacy of the proposed corrective measures, but 
Mandracken cannot continue to interact with clients using a fraudulent fee schedule.
Pellie
Pellie, CFA, is CEO of Kwaume Investment Group (KIG), an investment adviser that 
is a wholly owned subsidiary of Kwaume Bank. A longtime bank customer that Pellie 
and some of the bank’s board members know personally recently opened an invest -
ment account at KIG with a stated investment objective of earning income. The client 
made a few investments over the course of the next year, but most of the activity in 
the account involved several hundred bank transactions that totaled $90 million in 
deposits and $84 million in withdrawals.
The transactions included electronic transfers to and from individuals and entities 
located in bank secrecy havens and countries identified by the government as at risk 
for money-laundering activity. Pellie knew that the client was engaged in international 
business pursuits involving transactions with a higher risk potential for corruption and 
bribery. Given the client’s longstanding relationship with the bank, Pellie assumes the 
transactions have a legitimate business purpose and accepts vague descriptions, such 
as “for services provided, ” “consulting fees, ” and “commissions. ” When he receives the 
daily anti-money-laundering (AML) reports, which are required by law when trans -
actions trigger red flags of potentially suspicious activity, he approves them without 
further inquiry.
Pellie’s actions are
A.
 a v
iolation of the CFA Institute Code and Standards.
B. a
ppropriate because Pellie is protecting the confidentiality of client 
information.
C.
 a
ppropriate because Pellie can rely on the account’s clearing firm to report 
suspicious activity for the account.
Analysis
A is correct. Pellie’s actions violate Standard I(A) Knowledge of the Law, which states 
that CFA Institute members and candidates “must understand and comply with all 
applicable laws, rules, and regulations . . . governing their professional activities. ” The 
facts presented should have raised questions regarding the legitimacy of the client’s 
account. The high volume of deposits and withdrawals combined with the low number 
of investment transactions is inconsistent with an investment account having a stated 
objective of earning income. The transactions in the account appeared to be high-risk 
transactions for money-laundering activity and should have received a greater level of 
scrutiny by Pellie. But rather than investigate as required by law, Pellie did not `,
    },
  ],
};
