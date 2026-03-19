import {
  ArrowDownLeft,
  ArrowUpRight,
  Calendar,
  CircleDollarSign,
  CreditCard,
  Download,
  Droplets,
  Filter,
  Landmark,
  Search,
  ShoppingCart,
  Wallet,
} from "lucide-react"
import OverviewStatCard from "./UI/OverviewStatCard"
import TransactionsTableRow from "./UI/TransactionsTableRow"

const transactionSummary = [
  {
    title: "Total Inflow",
    value: "$18,420",
    detail: "37 credits processed this month",
    icon: ArrowDownLeft,
    gradientClass: "from-emerald-100 via-teal-100 to-white",
    iconClass: "text-emerald-500",
  },
  {
    title: "Total Outflow",
    value: "$9,845",
    detail: "Top expense: household and utilities",
    icon: ArrowUpRight,
    gradientClass: "from-rose-100 via-pink-100 to-white",
    iconClass: "text-rose-500",
  },
  {
    title: "Recurring Payments",
    value: "12 Active",
    detail: "3 renewals due in the next 7 days",
    icon: Calendar,
    gradientClass: "from-sky-100 via-blue-100 to-white",
    iconClass: "text-sky-500",
  },
]

const transactions = [
  {
    title: "Salary Deposit",
    category: "Income",
    date: "Mar 18, 09:45",
    amount: "3,500.00",
    direction: "in",
    account: "Main Checking",
    status: "Completed",
    icon: CircleDollarSign,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Neighborhood Market",
    category: "Groceries",
    date: "Mar 18, 08:10",
    amount: "84.22",
    direction: "out",
    account: "Main Checking",
    status: "Completed",
    icon: ShoppingCart,
    iconClass: "bg-amber-100 text-amber-600",
  },
  {
    title: "Design Software",
    category: "Subscription",
    date: "Mar 17, 19:30",
    amount: "19.00",
    direction: "out",
    account: "Rewards Credit",
    status: "Completed",
    icon: CreditCard,
    iconClass: "bg-violet-100 text-violet-600",
  },
  {
    title: "Utility Bill",
    category: "Home",
    date: "Mar 16, 17:15",
    amount: "120.50",
    direction: "out",
    account: "Main Checking",
    status: "Completed",
    icon: Droplets,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    title: "Travel Wallet Top Up",
    category: "Transfer",
    date: "Mar 16, 10:40",
    amount: "600.00",
    direction: "out",
    account: "Travel Wallet",
    status: "Pending",
    icon: Wallet,
    iconClass: "bg-fuchsia-100 text-fuchsia-600",
  },
  {
    title: "Dividend Payout",
    category: "Investments",
    date: "Mar 14, 11:20",
    amount: "64.30",
    direction: "in",
    account: "Family Savings",
    status: "Review",
    icon: Landmark,
    iconClass: "bg-sky-100 text-sky-600",
  },
]

const spendingBreakdown = [
  { label: "Housing", amount: "$2,140", percent: 38, barClass: "bg-zinc-900" },
  { label: "Groceries", amount: "$850", percent: 24, barClass: "bg-emerald-500" },
  { label: "Subscriptions", amount: "$320", percent: 14, barClass: "bg-violet-500" },
  { label: "Transport", amount: "$280", percent: 11, barClass: "bg-sky-500" },
  { label: "Utilities", amount: "$210", percent: 13, barClass: "bg-amber-500" },
]

const scheduledTransfers = [
  {
    title: "Mortgage Payment",
    subtitle: "Tomorrow, 08:00",
    amount: "$1,200.00",
    status: "Ready",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Travel Wallet Refill",
    subtitle: "Fri, 12:30",
    amount: "$450.00",
    status: "Pending",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    title: "Team Dinner Split",
    subtitle: "Sat, 19:15",
    amount: "$92.40",
    status: "Awaiting",
    badgeClass: "bg-zinc-100 text-zinc-700",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const TransactionsPage = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700">
              Transactions Ledger
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Review every transaction with clarity
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Scan inflow, outflow, transfers, and recurring payments across
              all linked accounts from a single timeline.
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
              <Download size={16} />
              Export CSV
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {transactionSummary.map((item) => (
            <OverviewStatCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_360px]">
        <div className={sectionCardClass}>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Transaction History
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Your latest cash flow across cards, wallets, and bank accounts.
              </p>
            </div>

            <button className="inline-flex w-fit rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
              View All
            </button>
          </div>

          <div className="mb-4 hidden grid-cols-[minmax(0,2.3fr)_minmax(120px,0.8fr)_minmax(120px,0.85fr)_minmax(0,1fr)_110px] gap-4 px-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:grid">
            <p className="truncate">Transaction</p>
            <p className="truncate">Date</p>
            <p className="truncate">Amount</p>
            <p className="truncate">Account</p>
            <p className="truncate">Status</p>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <TransactionsTableRow key={transaction.title} {...transaction} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Spending Breakdown
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              This month by category and budget pressure.
            </p>

            <div className="mt-6 space-y-4">
              {spendingBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-zinc-500">
                      {item.amount}
                    </p>
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
              Upcoming Transfers
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Scheduled movement due soon.
            </p>

            <div className="mt-5 space-y-3">
              {scheduledTransfers.map((transfer) => (
                <article
                  key={transfer.title}
                  className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-950">
                        {transfer.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {transfer.subtitle}
                      </p>
                    </div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${transfer.badgeClass}`}
                    >
                      {transfer.status}
                    </span>
                  </div>

                  <p className="mt-4 text-lg font-semibold text-zinc-900">
                    {transfer.amount}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TransactionsPage
