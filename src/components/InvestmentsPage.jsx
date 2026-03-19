import {
  CircleDollarSign,
  Filter,
  Landmark,
  Plus,
  Search,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react"
import OverviewStatCard from "./UI/OverviewStatCard"
import InvestmentHoldingRow from "./UI/InvestmentHoldingRow"

const portfolioStats = [
  {
    title: "Portfolio Value",
    value: "$124,860",
    detail: "+$8,240 since last quarter",
    icon: TrendingUp,
    gradientClass: "from-emerald-100 via-lime-100 to-white",
    iconClass: "text-emerald-600",
  },
  {
    title: "Monthly Return",
    value: "+8.4%",
    detail: "Outperforming target by 1.6%",
    icon: ShieldCheck,
    gradientClass: "from-sky-100 via-cyan-100 to-white",
    iconClass: "text-sky-600",
  },
  {
    title: "Cash Ready",
    value: "$14,200",
    detail: "Available for rebalancing",
    icon: Wallet,
    gradientClass: "from-violet-100 via-purple-100 to-white",
    iconClass: "text-violet-600",
  },
]

const holdings = [
  {
    asset: "S&P 500 ETF",
    type: "Equity ETF",
    allocation: "32%",
    value: "$38,200",
    returnLabel: "+6.4%",
    returnClass: "text-emerald-600",
    note: "Core",
    noteClass: "bg-zinc-100 text-zinc-700",
    icon: Landmark,
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    asset: "Tech Growth Fund",
    type: "Mutual Fund",
    allocation: "18%",
    value: "$21,400",
    returnLabel: "+12.1%",
    returnClass: "text-emerald-600",
    note: "Growth",
    noteClass: "bg-emerald-100 text-emerald-700",
    icon: TrendingUp,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    asset: "Green Energy ETF",
    type: "Sector ETF",
    allocation: "14%",
    value: "$16,900",
    returnLabel: "+9.3%",
    returnClass: "text-emerald-600",
    note: "Trending",
    noteClass: "bg-lime-100 text-lime-700",
    icon: ShieldCheck,
    iconClass: "bg-lime-100 text-lime-700",
  },
  {
    asset: "Bond Ladder",
    type: "Fixed Income",
    allocation: "22%",
    value: "$26,300",
    returnLabel: "+2.1%",
    returnClass: "text-sky-600",
    note: "Defensive",
    noteClass: "bg-sky-100 text-sky-700",
    icon: Wallet,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    asset: "Cash Reserve",
    type: "Liquidity",
    allocation: "14%",
    value: "$16,060",
    returnLabel: "+0.6%",
    returnClass: "text-zinc-600",
    note: "Flexible",
    noteClass: "bg-violet-100 text-violet-700",
    icon: CircleDollarSign,
    iconClass: "bg-violet-100 text-violet-600",
  },
]

const allocationItems = [
  { label: "US Equities", percent: 44, amount: "$54,900", barClass: "bg-zinc-900" },
  { label: "Funds", percent: 28, amount: "$34,300", barClass: "bg-emerald-500" },
  { label: "Fixed Income", percent: 22, amount: "$26,300", barClass: "bg-sky-500" },
  { label: "Cash", percent: 6, amount: "$9,360", barClass: "bg-violet-500" },
]

const watchlist = [
  { symbol: "NVDA", change: "+3.8%", price: "$948.24", tone: "text-emerald-600" },
  { symbol: "TSLA", change: "-1.1%", price: "$183.40", tone: "text-rose-600" },
  { symbol: "BTC", change: "+4.5%", price: "$68,520", tone: "text-emerald-600" },
]

const strategyCards = [
  {
    title: "Rebalance Candidates",
    detail: "Large cap tech now exceeds target allocation by 3.4%.",
    badge: "Review",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    title: "Income Window",
    detail: "Dividend and coupon income of $740 expected this month.",
    badge: "Healthy",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Risk Snapshot",
    detail: "Portfolio volatility remains inside your preferred range.",
    badge: "Stable",
    badgeClass: "bg-sky-100 text-sky-700",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const InvestmentsPage = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-lime-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-lime-700">
              Investment Hub
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Monitor performance and protect long-term growth
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Keep portfolio allocation, returns, and available cash in view so
              you can rebalance with confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Search size={18} />
            </button>
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Filter size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
              <Plus size={16} />
              Add Position
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portfolioStats.map((item) => (
            <OverviewStatCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_360px]">
        <div className={sectionCardClass}>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Current Holdings
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Allocation, current value, and return for every major position.
              </p>
            </div>

            <button className="inline-flex w-fit rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
              Portfolio Report
            </button>
          </div>

          <div className="mb-4 hidden grid-cols-[minmax(0,2.2fr)_minmax(110px,0.8fr)_minmax(130px,0.95fr)_minmax(120px,0.85fr)_minmax(110px,0.85fr)] gap-4 px-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:grid">
            <p className="truncate">Asset</p>
            <p className="truncate">Allocation</p>
            <p className="truncate">Value</p>
            <p className="truncate">Return</p>
            <p className="truncate">Strategy</p>
          </div>

          <div className="space-y-4">
            {holdings.map((holding) => (
              <InvestmentHoldingRow key={holding.asset} {...holding} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Allocation Mix
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Distribution across your core investment buckets.
            </p>

            <div className="mt-6 space-y-4">
              {allocationItems.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.label}
                    </p>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-zinc-900">
                        {item.amount}
                      </p>
                      <p className="text-xs text-zinc-500">{item.percent}%</p>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-100">
                    <div
                      className={`h-full rounded-full ${item.barClass}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Watchlist
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Assets worth checking this session.
            </p>

            <div className="mt-5 space-y-3">
              {watchlist.map((item) => (
                <article
                  key={item.symbol}
                  className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-base font-semibold text-zinc-950">
                        {item.symbol}
                      </p>
                      <p className="mt-1 text-sm text-zinc-500">{item.price}</p>
                    </div>
                    <p className={`text-sm font-semibold ${item.tone}`}>
                      {item.change}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Strategy Notes
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Highlights to support your next portfolio move.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {strategyCards.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.badgeClass}`}
                >
                  {item.badge}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default InvestmentsPage
