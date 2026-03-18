const RecentTransactionCard = ({
  name,
  category,
  amount,
  tone,
  icon: Icon,
  accentClass,
}) => {
  const amountClass =
    tone === "positive" ? "text-emerald-500" : "text-rose-500"
  const amountPrefix = tone === "positive" ? "+" : "-"

  return (
    <article className="flex items-center gap-4 rounded-2xl bg-zinc-50/90 p-4 ring-1 ring-zinc-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/60">
      <div
        className={`flex size-11 shrink-0 items-center justify-center rounded-full ${accentClass}`}
      >
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-base font-semibold text-zinc-900">
          {name}
        </h4>
        <p className="text-sm text-zinc-500">{category}</p>
      </div>

      <p className={`text-lg font-semibold ${amountClass}`}>
        {amountPrefix}${amount}
      </p>
    </article>
  )
}

export default RecentTransactionCard
