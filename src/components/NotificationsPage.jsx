import {
  Bell,
  CircleDollarSign,
  CreditCard,
  Filter,
  Receipt,
  Search,
  ShieldCheck,
  Wallet,
} from "lucide-react"
import NotificationCard from "./UI/NotificationCard"
import SettingsToggle from "./UI/SettingsToggle"

const notificationStats = [
  {
    label: "Unread Alerts",
    value: "5",
    detail: "2 require action today",
    tone: "from-zinc-100 to-white",
  },
  {
    label: "Payment Updates",
    value: "3",
    detail: "New confirmations and reminders",
    tone: "from-emerald-100 to-white",
  },
  {
    label: "Security Notices",
    value: "2",
    detail: "Fresh device and login activity",
    tone: "from-rose-100 to-white",
  },
]

const todayNotifications = [
  {
    title: "Card payment approved",
    message:
      "Your Rewards Credit transaction for $240.00 was approved and settled.",
    time: "9 min ago",
    tag: "Payments",
    unread: true,
    icon: CreditCard,
    iconClass: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "New deposit received",
    message:
      "Salary deposit of $3,500.00 arrived in Main Checking earlier than expected.",
    time: "26 min ago",
    tag: "Income",
    unread: true,
    icon: CircleDollarSign,
    iconClass: "bg-sky-100 text-sky-600",
  },
  {
    title: "Login from a trusted device",
    message:
      "A successful sign in from your Jakarta workstation was recorded today.",
    time: "1 hr ago",
    tag: "Security",
    unread: false,
    icon: ShieldCheck,
    iconClass: "bg-rose-100 text-rose-600",
  },
]

const weeklyNotifications = [
  {
    title: "Transfer completed",
    message:
      "Travel Wallet received a top up of $600.00 from Main Checking.",
    time: "Yesterday",
    tag: "Transfers",
    unread: false,
    icon: Wallet,
    iconClass: "bg-violet-100 text-violet-600",
  },
  {
    title: "Statement ready",
    message:
      "Your March credit card statement is ready to review and export.",
    time: "Yesterday",
    tag: "Statements",
    unread: false,
    icon: Receipt,
    iconClass: "bg-amber-100 text-amber-600",
  },
  {
    title: "Weekly digest prepared",
    message:
      "Your weekly cash flow summary is available with the latest inflow and outflow trends.",
    time: "Mon",
    tag: "Digest",
    unread: false,
    icon: Bell,
    iconClass: "bg-zinc-100 text-zinc-600",
  },
]

const preferenceToggles = [
  {
    title: "Payment activity",
    description: "Instant alerts for approved, declined, and refunded payments.",
    enabled: true,
  },
  {
    title: "Security alerts",
    description: "Device login, password, and suspicious activity notices.",
    enabled: true,
  },
  {
    title: "Marketing updates",
    description: "Product tips, new features, and optional platform updates.",
    enabled: false,
  },
]

const digestSchedule = [
  {
    title: "Morning digest",
    description: "07:30 local time on weekdays",
  },
  {
    title: "Weekly review",
    description: "Every Friday at 18:00",
  },
  {
    title: "Quiet hours",
    description: "22:00 - 07:00, except security alerts",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const NotificationsPage = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
              Notifications Center
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Stay on top of what needs your attention
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Payment alerts, security notices, statements, and account updates
              all flow into one organized inbox.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Search size={18} />
            </button>
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Filter size={18} />
            </button>
            <button className="inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
              Mark All Read
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {notificationStats.map((item) => (
            <article
              key={item.label}
              className={`rounded-[28px] border border-zinc-200/80 bg-gradient-to-br ${item.tone} p-5 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.45)]`}
            >
              <p className="text-sm font-medium text-zinc-600">{item.label}</p>
              <h3 className="mt-5 text-3xl font-semibold text-zinc-950">
                {item.value}
              </h3>
              <p className="mt-2 text-sm text-zinc-500">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_360px]">
        <div className="space-y-6">
          <div className={sectionCardClass}>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Today
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                The newest activity across accounts and security.
              </p>
            </div>

            <div className="space-y-4">
              {todayNotifications.map((notification) => (
                <NotificationCard
                  key={notification.title}
                  {...notification}
                />
              ))}
            </div>
          </div>

          <div className={sectionCardClass}>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Earlier This Week
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Recent updates you may want to revisit.
              </p>
            </div>

            <div className="space-y-4">
              {weeklyNotifications.map((notification) => (
                <NotificationCard
                  key={notification.title}
                  {...notification}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Alert Preferences
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Choose what should interrupt your day.
            </p>

            <div className="mt-5 space-y-3">
              {preferenceToggles.map((item) => (
                <SettingsToggle key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Delivery Schedule
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Digest timing and notification windows.
            </p>

            <div className="mt-5 space-y-3">
              {digestSchedule.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4"
                >
                  <h3 className="text-sm font-semibold text-zinc-950">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {item.description}
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

export default NotificationsPage
