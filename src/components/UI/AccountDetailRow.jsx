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
    <article className="grid gap-4 rounded-3xl border border-zinc-200/80 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-200/70 md:grid-cols-[minmax(0,1.5fr)_130px_150px_110px_36px] md:items-center md:px-6">
      <div className="flex items-center gap-3">
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

      <p className="text-base font-semibold text-zinc-900">{balance}</p>

      <p className="text-sm font-medium text-zinc-500">{accountNumber}</p>

      <span className="inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
        {status}
      </span>

      <button className="hidden size-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-zinc-900 hover:text-white md:flex">
        <ChevronRight size={16} />
      </button>
    </article>
  )
}

export default AccountDetailRow
