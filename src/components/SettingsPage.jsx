import {
  Bell,
  Download,
  Globe,
  Laptop,
  Search,
  ShieldCheck,
  User,
  Wallet,
} from "lucide-react"
import SettingsToggle from "./UI/SettingsToggle"

const securityToggles = [
  {
    title: "Two-factor authentication",
    description: "Require a second verification step when signing in.",
    enabled: true,
  },
  {
    title: "Biometric unlock",
    description: "Allow device biometrics to confirm high-risk actions.",
    enabled: true,
  },
  {
    title: "New device approval",
    description: "Manually approve each new device before access is granted.",
    enabled: false,
  },
]

const preferenceToggles = [
  {
    title: "Compact dashboard mode",
    description: "Reduce spacing and show denser financial summaries.",
    enabled: false,
  },
  {
    title: "Weekly summary email",
    description: "Receive a weekly digest of account health and spending trends.",
    enabled: true,
  },
  {
    title: "Auto-categorize spend",
    description: "Use smart rules to classify transactions automatically.",
    enabled: true,
  },
]

const integrations = [
  {
    name: "Google Workspace",
    description: "Calendar sync for payment reminders",
    status: "Connected",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Plaid Connector",
    description: "Live sync with external financial institutions",
    status: "Healthy",
    badgeClass: "bg-sky-100 text-sky-700",
  },
  {
    name: "Slack Alerts",
    description: "Route selected account alerts to finance workspace",
    status: "Paused",
    badgeClass: "bg-zinc-100 text-zinc-700",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const inputClass =
  "w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 outline-none transition focus:border-zinc-400 focus:bg-white"

const SettingsPage = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              Workspace Settings
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Fine-tune security, profile, and preferences
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Keep your workspace aligned with how you review accounts, manage
              alerts, and protect sensitive financial activity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Search size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-200">
              <Download size={16} />
              Export Data
            </button>
            <button className="inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
              Save Changes
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <div className={sectionCardClass}>
            <div className="mb-5 flex items-start gap-3">
              <div className="rounded-full bg-zinc-100 p-3 text-zinc-700">
                <User size={18} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Profile Details
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Personal details shown across the dashboard and reports.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-700">
                  Full name
                </span>
                <input className={inputClass} defaultValue="John Doe" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-700">
                  Role
                </span>
                <input
                  className={inputClass}
                  defaultValue="Software Engineer"
                />
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-medium text-zinc-700">
                  Email address
                </span>
                <input
                  className={inputClass}
                  defaultValue="john.doe@cashflow.app"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-700">
                  Phone number
                </span>
                <input className={inputClass} defaultValue="+62 812 5555 9898" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-zinc-700">
                  Time zone
                </span>
                <select className={inputClass} defaultValue="Asia/Jakarta">
                  <option>Asia/Jakarta</option>
                  <option>UTC</option>
                  <option>America/Los_Angeles</option>
                </select>
              </label>
            </div>
          </div>

          <div className={sectionCardClass}>
            <div className="mb-5 flex items-start gap-3">
              <div className="rounded-full bg-sky-50 p-3 text-sky-700">
                <Laptop size={18} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Workspace Preferences
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Appearance, summaries, and intelligent automation.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {preferenceToggles.map((item) => (
                <SettingsToggle key={item.title} {...item} />
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white p-3 text-sky-700 shadow-sm">
                    <Globe size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">
                      Regional format
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      English - USD - 24 hour time
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white p-3 text-zinc-700 shadow-sm">
                    <Wallet size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">
                      Default account
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Main Checking for outgoing transfers
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={sectionCardClass}>
            <div className="mb-5 flex items-start gap-3">
              <div className="rounded-full bg-emerald-50 p-3 text-emerald-700">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Security & Privacy
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Add friction only where it matters most.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {securityToggles.map((item) => (
                <SettingsToggle key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className={sectionCardClass}>
            <div className="mb-5 flex items-start gap-3">
              <div className="rounded-full bg-orange-50 p-3 text-orange-700">
                <Bell size={18} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  Connected Services
                </h2>
                <p className="mt-1 text-sm text-zinc-500">
                  Integrations and communication routes linked to the workspace.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {integrations.map((item) => (
                <article
                  key={item.name}
                  className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-950">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${item.badgeClass}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SettingsPage
