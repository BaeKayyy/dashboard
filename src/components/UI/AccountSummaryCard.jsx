const AccountSummaryCard = ({
  label,
  balance,
  number,
  change,
  icon: Icon,
  gradientClass,
  iconClass,
}) => {
  return (
    <article
      className={`relative overflow-hidden rounded-[30px] border border-white/70 bg-gradient-to-br ${gradientClass} p-5 shadow-[0_26px_60px_-38px_rgba(15,23,42,0.35)]`}
    >
      <div className="absolute inset-y-0 right-0 w-28 bg-white/30 blur-3xl" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-zinc-600">{label}</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
            {balance}
          </h3>
        </div>

        <div
          className={`flex size-12 items-center justify-center rounded-full bg-white/90 shadow-sm ${iconClass}`}
        >
          <Icon size={20} />
        </div>
      </div>

      <div className="relative mt-7 flex items-end justify-between gap-3">
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
          {number}
        </span>
        <p className="text-sm font-medium text-zinc-600">{change}</p>
      </div>
    </article>
  )
}

export default AccountSummaryCard
