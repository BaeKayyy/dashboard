const statusStyles = {
  Completed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Review: "bg-rose-100 text-rose-700",
}

const TransactionsTableRow = ({
  title,
  category,
  date,
  amount,
  direction,
  account,
  status,
  icon: Icon,
  iconClass,
}) => {
  const amountClass =
    direction === "in" ? "text-emerald-600" : "text-rose-600"
  const amountPrefix = direction === "in" ? "+" : "-"

  return (
    <article className="grid gap-4 rounded-3xl border border-zinc-200/80 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-200/70 sm:grid-cols-2 sm:items-start xl:grid-cols-[minmax(0,2.3fr)_minmax(120px,0.8fr)_minmax(120px,0.85fr)_minmax(0,1fr)_110px] xl:items-center xl:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-zinc-950">
            {title}
          </p>
          <p className="text-sm text-zinc-500">{category}</p>
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Date
        </p>
        <p className="text-sm font-medium text-zinc-600">{date}</p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Amount
        </p>
        <p className={`text-base font-semibold ${amountClass}`}>
          {amountPrefix}${amount}
        </p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Account
        </p>
        <p className="truncate text-sm font-medium text-zinc-500">{account}</p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Status
        </p>
        <span
          className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
    </article>
  )
}

export default TransactionsTableRow
