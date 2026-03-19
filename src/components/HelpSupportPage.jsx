import {
  BookOpen,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
} from "lucide-react"
import SupportChannelCard from "./UI/SupportChannelCard"

const supportChannels = [
  {
    title: "Live Chat",
    description: "Reach a product specialist for billing, sync, or access issues.",
    actionLabel: "Start Chat",
    icon: MessageSquare,
    iconClass: "bg-sky-100 text-sky-700",
  },
  {
    title: "Email Support",
    description: "Best for longer explanations, screenshots, or account review.",
    actionLabel: "Send Email",
    icon: Mail,
    iconClass: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Help Center",
    description: "Browse setup guides, workflow tips, and troubleshooting notes.",
    actionLabel: "Browse Guides",
    icon: BookOpen,
    iconClass: "bg-violet-100 text-violet-700",
  },
]

const openTickets = [
  {
    id: "CF-1834",
    title: "Travel wallet sync delay",
    status: "Investigating",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    id: "CF-1802",
    title: "Need VAT receipt for March",
    status: "Waiting on reply",
    badgeClass: "bg-zinc-100 text-zinc-700",
  },
  {
    id: "CF-1768",
    title: "Review notification routing",
    status: "Resolved",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
]

const resources = [
  "How to connect a new bank account",
  "Understanding spending categories and budgets",
  "Exporting statements and transaction history",
  "Managing notification quiet hours",
]

const faqItems = [
  {
    question: "How long does bank synchronization usually take?",
    answer:
      "Most institutions refresh within a few minutes, but some external banks can take up to 24 hours depending on their update window.",
  },
  {
    question: "Can I recover a removed account connection?",
    answer:
      "Yes. Reconnect the institution from Accounts, and the workspace will attempt to match the previous account history automatically.",
  },
  {
    question: "How do I export a monthly statement?",
    answer:
      "Open Transactions or Accounts, choose the export action, and select the month plus the preferred format such as CSV or PDF.",
  },
  {
    question: "Where can I update billing details?",
    answer:
      "Billing and connected services are managed from Settings, where you can adjust payment methods and see integration health.",
  },
]

const sectionCardClass =
  "rounded-[30px] border border-zinc-200/80 bg-white p-5 shadow-[0_28px_60px_-50px_rgba(15,23,42,0.45)] sm:p-6"

const HelpSupportPage = () => {
  return (
    <div className="space-y-8 pb-8">
      <section className="rounded-[34px] border border-zinc-200/80 bg-white p-5 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.55)] sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Help & Support
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Find answers quickly and reach the right support path
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500 sm:text-base">
              Use self-serve guides for the fast path, or open a ticket when
              you need help with billing, sync, or access issues.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
              <Search size={18} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800">
              <HelpCircle size={16} />
              Open Ticket
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_360px]">
        <div className="space-y-6">
          <div className={sectionCardClass}>
            <div className="mb-5">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Support Channels
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Pick the fastest route based on what you need.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {supportChannels.map((channel) => (
                <SupportChannelCard key={channel.title} {...channel} />
              ))}
            </div>
          </div>

          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Popular Guides
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Common topics users look up before opening a ticket.
            </p>

            <div className="mt-5 space-y-3">
              {resources.map((item) => (
                <article
                  key={item}
                  className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white p-3 text-zinc-700 shadow-sm">
                      <BookOpen size={18} />
                    </div>
                    <p className="text-sm font-semibold leading-6 text-zinc-900">
                      {item}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Open Requests
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Track your latest support conversations.
            </p>

            <div className="mt-5 space-y-3">
              {openTickets.map((ticket) => (
                <article
                  key={ticket.id}
                  className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                        {ticket.id}
                      </p>
                      <h3 className="mt-2 text-sm font-semibold text-zinc-950">
                        {ticket.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${ticket.badgeClass}`}
                    >
                      {ticket.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={sectionCardClass}>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Support Availability
            </h2>
            <p className="mt-1 text-sm text-zinc-500">
              Reach us through your preferred channel during these windows.
            </p>

            <div className="mt-5 space-y-3">
              <article className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white p-3 text-sky-700 shadow-sm">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">
                      Live chat
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Mon - Fri, 08:00 - 18:00
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white p-3 text-emerald-700 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">
                      Email support
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Replies typically within 4 business hours
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white p-3 text-violet-700 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-950">
                      Phone callback
                    </p>
                    <p className="mt-1 text-sm text-zinc-500">
                      Available for billing and enterprise plans
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionCardClass}>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Short answers to the questions that come up most often.
        </p>

        <div className="mt-6 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-zinc-950">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HelpSupportPage
