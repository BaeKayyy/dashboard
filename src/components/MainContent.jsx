
import {
  ArrowUpRight,
  Bell,
  CircleDollarSign,
  Droplets,
  Film,
  GraduationCap,
  HandCoins,
  House,
  Landmark,
  Laptop,
  Search,
  ShoppingBasket,
  ShoppingCart,
  TrendingDown,
  UtensilsCrossed,
} from "lucide-react"
import OverviewStatCard from "./UI/OverviewStatCard"
import RecentTransactionCard from "./UI/RecentTransactionCard"
import BudgetProgressCard from "./UI/BudgetProgressCard"
import ScheduledPaymentRow from "./UI/ScheduledPaymentRow"

const summaryCards = [
  {
    title: "Spent This Month",
    value: "$1,850",
    detail: "+12% from last month",
    icon: TrendingDown,
    gradientClass: "from-rose-100 via-pink-100 to-white",
    iconClass: "text-rose-500",
  },
  {
    title: "Budget Remaining",
    value: "$450",
    detail: "4 categories still on track",
    icon: HandCoins,
    gradientClass: "from-sky-100 via-blue-100 to-white",
    iconClass: "text-sky-500",
  },
  {
    title: "Highest Category",
    value: "Groceries",
    detail: "32% of monthly spend",
    icon: ShoppingBasket,
    gradientClass: "from-emerald-100 via-teal-100 to-white",
    iconClass: "text-emerald-500",
  },
]

const recentTransactions = [
  {
    name: "Supermarket Run",
    category: "Groceries",
    amount: "85.00",
    tone: "negative",
    icon: ShoppingCart,
    accentClass: "bg-emerald-100 text-emerald-600",
  },
  {
    name: "Online Subscription",
    category: "Software",
    amount: "19.99",
    tone: "negative",
    icon: Laptop,
    accentClass: "bg-violet-100 text-violet-600",
  },
  {
    name: "ATM Withdrawal",
    category: "Cash",
    amount: "100.00",
    tone: "negative",
    icon: Landmark,
    accentClass: "bg-amber-100 text-amber-600",
  },
  {
    name: "Paycheck Deposit",
    category: "Income",
    amount: "3,500.00",
    tone: "positive",
    icon: CircleDollarSign,
    accentClass: "bg-sky-100 text-sky-600",
  },
]

const budgetItems = [
  {
    title: "Groceries",
    spending: "450",
    total: "600",
    percent: 75,
    icon: ShoppingBasket,
    iconClass: "bg-emerald-100 text-emerald-600",
    badgeClass: "bg-rose-100 text-rose-600",
    progressClass: "bg-rose-400",
  },
  {
    title: "Restaurants",
    spending: "120",
    total: "300",
    percent: 40,
    icon: UtensilsCrossed,
    iconClass: "bg-amber-100 text-amber-600",
    badgeClass: "bg-emerald-100 text-emerald-600",
    progressClass: "bg-emerald-400",
  },
  {
    title: "Utilities",
    spending: "200",
    total: "200",
    percent: 100,
    icon: Droplets,
    iconClass: "bg-blue-100 text-blue-600",
    badgeClass: "bg-rose-100 text-rose-600",
    progressClass: "bg-rose-500",
  },
  {
    title: "Entertainment",
    spending: "50",
    total: "150",
    percent: 33,
    icon: Film,
    iconClass: "bg-fuchsia-100 text-fuchsia-600",
    badgeClass: "bg-blue-100 text-blue-600",
    progressClass: "bg-blue-400",
  },
]

const scheduledPayments = [
  {
    payee: "Loan Payment",
    amount: "350.00",
    date: "Today, 15:00",
    status: "Approved",
    icon: Landmark,
    accentClass: "bg-zinc-100 text-zinc-700",
  },
  {
    payee: "Home Credit",
    amount: "1,200.00",
    date: "Tomorrow, 18:30",
    status: "Pending",
    icon: House,
    accentClass: "bg-amber-100 text-amber-600",
  },
  {
    payee: "Student Loan",
    amount: "150.00",
    date: "Fri, 10:00",
    status: "Declined",
    icon: GraduationCap,
    accentClass: "bg-rose-100 text-rose-600",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const MainContent = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-violet-700 uppercase">
              Dashboard Overview
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Welcome back, Jane
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Track your spending, manage your budgets, and control your cash
              flow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Search size={18} />
            </button>
            <button className="relative flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Bell size={18} />
              <span className="absolute right-3 top-3 size-2 rounded-full bg-rose-500" />
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {summaryCards.map((card) => (
            <OverviewStatCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)]">
        <div className={sectionCardClass}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Recent Spending
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Latest outgoing and incoming cash flow.
              </p>
            </div>

            <button className="hidden rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-200 sm:inline-flex">
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <RecentTransactionCard
                key={transaction.name}
                {...transaction}
              />
            ))}
          </div>
        </div>

        <div className={sectionCardClass}>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                My Budgets
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Categories and monthly usage at a glance.
              </p>
            </div>

            <button className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100">
              Manage All
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="space-y-3">
            {budgetItems.map((budget) => (
              <BudgetProgressCard key={budget.title} {...budget} />
            ))}
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Scheduled Payments
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Upcoming bills and their approval status.
            </p>
          </div>
        </div>

        <div className="mt-6 hidden grid-cols-[minmax(0,1.35fr)_170px_180px_140px] gap-4 px-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400 md:grid">
          <p>Payee</p>
          <p>Amount</p>
          <p>Date</p>
          <p>Status</p>
        </div>

        <div className="mt-4 space-y-4">
          {scheduledPayments.map((payment) => (
            <ScheduledPaymentRow key={payment.payee} {...payment} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default MainContent
