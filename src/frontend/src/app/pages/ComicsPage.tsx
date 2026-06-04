import { BookOpenCheck, ExternalLink } from 'lucide-react';

const COMICS = [
  {
    subject: 'Quantitative Methods',
    description: 'Formula-heavy Quant concepts explained as a quick visual comic.',
    href: `${import.meta.env.BASE_URL}comics/cfa_quant_comics.html`,
    accent: 'border-sky-200 bg-sky-50 text-sky-700',
  },
  {
    subject: 'Ethics',
    description: 'CFA Ethics standards and decision points in comic format.',
    href: `${import.meta.env.BASE_URL}comics/cfa_ethics_comics.html`,
    accent: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  {
    subject: 'Economics',
    description: 'Markets, policy, trade, and FX revised as visual story panels.',
    href: `${import.meta.env.BASE_URL}comics/cfa_economics_comics.html`,
    accent: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  {
    subject: 'Corporate Issuers',
    description: 'Governance, capital allocation, liquidity, and business models in comic format.',
    href: `${import.meta.env.BASE_URL}comics/cfa_corporate_issuers_comics.html`,
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  {
    subject: 'Financial Statement Analysis',
    description: 'Statements, accounting choices, quality, and ratios as quick comic panels.',
    href: `${import.meta.env.BASE_URL}comics/cfa_fsa_comics.html`,
    accent: 'border-blue-200 bg-blue-50 text-blue-700',
  },
  {
    subject: 'Equity Investments',
    description: 'Market structure, indexes, efficiency, company analysis, and valuation.',
    href: `${import.meta.env.BASE_URL}comics/cfa_equity_comics.html`,
    accent: 'border-red-200 bg-red-50 text-red-700',
  },
  {
    subject: 'Fixed Income',
    description: 'Bond features, yields, curves, duration, convexity, and credit risk.',
    href: `${import.meta.env.BASE_URL}comics/cfa_fixed_income_comics.html`,
    accent: 'border-violet-200 bg-violet-50 text-violet-700',
  },
  {
    subject: 'Derivatives',
    description: 'Forwards, futures, swaps, options, parity, and binomial intuition.',
    href: `${import.meta.env.BASE_URL}comics/cfa_derivatives_comics.html`,
    accent: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
  {
    subject: 'Alternative Investments',
    description: 'Private capital, real assets, hedge funds, and digital assets.',
    href: `${import.meta.env.BASE_URL}comics/cfa_alternative_investments_comics.html`,
    accent: 'border-purple-200 bg-purple-50 text-purple-700',
  },
  {
    subject: 'Portfolio Management',
    description: 'Risk, return, portfolio planning, behavioral biases, and risk control.',
    href: `${import.meta.env.BASE_URL}comics/cfa_portfolio_management_comics.html`,
    accent: 'border-teal-200 bg-teal-50 text-teal-700',
  },
];

export function ComicsPage() {
  return (
    <div className="min-h-full p-6 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
            <BookOpenCheck size={24} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">CFA Comics</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Subject-wise visual revision comics for CFA Level I.
          </p>
        </div>

        <section className="rounded-lg border bg-background p-5 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Comic Section</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Pick a subject and open its comic study guide.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {COMICS.map((comic) => (
              <a
                key={comic.href}
                href={comic.href}
                target="_blank"
                rel="noreferrer"
                className={`group flex min-h-32 flex-col justify-between rounded-lg border p-4 transition hover:-translate-y-0.5 hover:shadow-md ${comic.accent}`}
              >
                <div>
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <BookOpenCheck size={17} className="shrink-0" />
                      <h4 className="text-base font-semibold text-foreground">{comic.subject}</h4>
                    </div>
                    <ExternalLink size={17} className="mt-0.5 shrink-0 opacity-70 group-hover:opacity-100" />
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{comic.description}</p>
                </div>
                <span className="mt-4 text-sm font-semibold">Open comic</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
