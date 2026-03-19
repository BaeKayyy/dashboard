const InvestmentHoldingRow = ({
  asset,
  type,
  allocation,
  value,
  returnLabel,
  returnClass,
  note,
  noteClass,
  icon: Icon,
  iconClass,
}) => {
  return (
    <article className="grid gap-4 rounded-3xl border border-zinc-200/80 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-200/70 sm:grid-cols-2 sm:items-start xl:grid-cols-[minmax(0,2.2fr)_minmax(110px,0.8fr)_minmax(130px,0.95fr)_minmax(120px,0.85fr)_minmax(110px,0.85fr)] xl:items-center xl:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-base font-semibold text-zinc-950">
            {asset}
          </p>
          <p className="text-sm text-zinc-500">{type}</p>
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Allocation
        </p>
        <p className="text-sm font-semibold text-zinc-700">{allocation}</p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Value
        </p>
        <p className="text-base font-semibold text-zinc-900">{value}</p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Return
        </p>
        <p className={`text-sm font-semibold ${returnClass}`}>{returnLabel}</p>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 xl:hidden">
          Strategy
        </p>
        <span
          className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${noteClass}`}
        >
          {note}
        </span>
      </div>
    </article>
  )
}

export default InvestmentHoldingRow
