import { ChevronRight } from "lucide-react"

const AccountDetailRow = ({
  name,
  type,
  balance,
  accountNumber,
  status,
  icon: Icon,
  iconClass,
}) => {
  return (
    <article className="grid gap-4 rounded-3xl border border-zinc-200/80 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-200/70 sm:grid-cols-2 sm:items-start xl:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(110px,0.9fr)_40px] xl:items-center xl:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-zinc-950">
            {name}
          </p>
          <p className="text-sm text-zinc-500">{type}</p>
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Balance
        </p>
        <p className="text-base font-semibold text-zinc-900">{balance}</p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Number
        </p>
        <p className="truncate text-sm font-medium text-zinc-500">
          {accountNumber}
        </p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Status
        </p>
        <span className="inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
          {status}
        </span>
      </div>

      <button className="hidden size-9 items-center justify-center self-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-zinc-900 hover:text-white xl:flex">
        <ChevronRight size={16} />
      </button>
    </article>
  )
}

export default AccountDetailRow
