import {
  ArrowDownLeft,
  ArrowUpRight,
  CreditCard,
  Filter,
  Landmark,
  PiggyBank,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react"
import AccountSummaryCard from "./UI/AccountSummaryCard"
import AccountDetailRow from "./UI/AccountDetailRow"

const accountCards = [
  {
    label: "Everyday Checking",
    balance: "$12,460.89",
    number: "•••• 2847",
    change: "+2.4% this month",
    icon: Landmark,
    gradientClass: "from-sky-100 via-cyan-50 to-white",
    iconClass: "text-sky-600",
  },
  {
    label: "High Yield Savings",
    balance: "$28,950.00",
    number: "•••• 1142",
    change: "+$420 interest",
    icon: PiggyBank,
    gradientClass: "from-emerald-100 via-teal-50 to-white",
    iconClass: "text-emerald-600",
  },
  {
    label: "Credit Card Balance",
    balance: "$1,284.10",
    number: "•••• 9908",
    change: "Due in 8 days",
    icon: CreditCard,
    gradientClass: "from-rose-100 via-pink-50 to-white",
    iconClass: "text-rose-600",
  },
  {
    label: "Travel Wallet",
    balance: "$3,680.55",
    number: "USD + EUR",
    change: "Ready for transfers",
    icon: Wallet,
    gradientClass: "from-violet-100 via-purple-50 to-white",
    iconClass: "text-violet-600",
  },
]

const accountRows = [
  {
    name: "Main Checking",
    type: "Personal Account",
    balance: "$8,420.18",
    accountNumber: "•••• 2847",
    status: "Primary",
    icon: Landmark,
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    name: "Family Savings",
    type: "Shared Savings",
    balance: "$28,950.00",
    accountNumber: "•••• 1142",
    status: "Growing",
    icon: PiggyBank,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Rewards Credit",
    type: "Credit Line",
    balance: "$1,284.10",
    accountNumber: "•••• 9908",
    status: "Statement Open",
    icon: CreditCard,
    iconClass: "bg-rose-100 text-rose-600",
  },
  {
    name: "Travel Wallet",
    type: "Multi-currency",
    balance: "$3,680.55",
    accountNumber: "USD / EUR",
    status: "Active",
    icon: Wallet,
    iconClass: "bg-violet-100 text-violet-600",
  },
]

const distributionItems = [
  {
    label: "Checking",
    amount: "$12,460",
    share: 34,
    barClass: "bg-sky-500",
  },
  {
    label: "Savings",
    amount: "$28,950",
    share: 48,
    barClass: "bg-emerald-500",
  },
  {
    label: "Credit",
    amount: "$1,284",
    share: 8,
    barClass: "bg-rose-500",
  },
  {
    label: "Wallet",
    amount: "$3,680",
    share: 10,
    barClass: "bg-violet-500",
  },
]

const quickActions = [
  {
    title: "Transfer Funds",
    description: "Move money between accounts",
    icon: ArrowUpRight,
    toneClass: "bg-zinc-900 text-white",
  },
  {
    title: "Request Money",
    description: "Generate a payment request link",
    icon: ArrowDownLeft,
    toneClass: "bg-sky-50 text-sky-700",
  },
  {
    title: "Open Account",
    description: "Add a new wallet or savings pot",
    icon: Plus,
    toneClass: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Refresh Sync",
    description: "Update balances from connected banks",
    icon: RefreshCw,
    toneClass: "bg-violet-50 text-violet-700",
  },
]

const recentActivities = [
  {
    title: "Incoming payroll",
    subtitle: "Main Checking",
    time: "Today, 09:45",
    amount: "+$3,500.00",
    amountClass: "text-emerald-500",
    icon: ArrowDownLeft,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Card payment cleared",
    subtitle: "Rewards Credit",
    time: "Yesterday, 18:10",
    amount: "-$240.00",
    amountClass: "text-rose-500",
    icon: CreditCard,
    iconClass: "bg-rose-100 text-rose-600",
  },
  {
    title: "Transfer to savings",
    subtitle: "Family Savings",
    time: "Yesterday, 10:25",
    amount: "-$600.00",
    amountClass: "text-zinc-700",
    icon: ArrowUpRight,
    iconClass: "bg-sky-100 text-sky-600",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const AccountsExample = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Accounts Center
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Manage all your accounts in one place
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Review balances, monitor account health, and move money faster
              across your checking, savings, cards, and wallets.
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
              Add Account
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
          {accountCards.map((card) => (
            <AccountSummaryCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
        <div className={sectionCardClass}>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Linked Accounts
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Active balances and account status across your portfolio.
              </p>
            </div>

            <button className="inline-flex w-fit items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200">
              <RefreshCw size={15} />
              Sync Accounts
            </button>
          </div>

          <div className="mb-4 hidden grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(110px,0.9fr)_40px] gap-4 px-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:grid">
            <p className="truncate">Account</p>
            <p className="truncate">Balance</p>
            <p className="truncate">Number</p>
            <p className="truncate">Status</p>
            <span />
          </div>

          <div className="space-y-4">
            {accountRows.map((account) => (
              <AccountDetailRow key={account.name} {...account} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className={sectionCardClass}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Allocation
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Balance distribution across your accounts.
                </p>
              </div>

              <div className="rounded-full bg-emerald-50 p-3 text-emerald-600">
                <TrendingUp size={18} />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {distributionItems.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-zinc-900">
                      {item.label}
                    </p>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-zinc-900">
                        {item.amount}
                      </p>
                      <p className="text-xs text-zinc-500">{item.share}%</p>
                    </div>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-100">
                    <div
                      className={`h-full rounded-full ${item.barClass}`}
                      style={{ width: `${item.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-zinc-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-white p-3 text-emerald-600 shadow-sm">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    All linked institutions are healthy
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">
                    Last security sync completed 12 minutes ago.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Quick Actions
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Frequent shortcuts for your accounts workflow.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {quickActions.map((action) => {
                const Icon = action.icon

                return (
                  <button
                    key={action.title}
                    className={`rounded-3xl p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${action.toneClass}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-white/80 p-2.5 text-current shadow-sm">
                        <Icon size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">{action.title}</p>
                        <p className="mt-1 text-sm opacity-80">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Recent Account Activity
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              The latest money movement tied to your accounts.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {recentActivities.map((activity) => {
            const Icon = activity.icon

            return (
              <article
                key={activity.title}
                className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className={`flex size-11 items-center justify-center rounded-full ${activity.iconClass}`}
                  >
                    <Icon size={18} />
                  </div>

                  <p className={`text-lg font-semibold ${activity.amountClass}`}>
                    {activity.amount}
                  </p>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-zinc-950">
                  {activity.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {activity.subtitle}
                </p>
                <p className="mt-4 text-sm font-medium text-zinc-400">
                  {activity.time}
                </p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default AccountsExample
