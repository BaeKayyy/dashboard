const OverviewStatCard = ({
  title,
  value,
  detail,
  icon: Icon,
  gradientClass,
  iconClass,
}) => {
  return (
    <article
      className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${gradientClass} p-5 shadow-[0_24px_50px_-32px_rgba(15,23,42,0.35)] ring-1 ring-white/70 sm:p-6`}
    >
      <div className="absolute inset-y-0 right-0 w-24 bg-white/20 blur-3xl" />

      <p className="relative text-sm font-medium text-zinc-600">{title}</p>

      <div className="relative mt-8 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-zinc-950">
            {value}
          </h3>
          {detail ? (
            <p className="mt-1 text-sm text-zinc-500">{detail}</p>
          ) : null}
        </div>

        <div
          className={`flex size-12 items-center justify-center rounded-full bg-white/90 shadow-sm ${iconClass}`}
        >
          <Icon size={22} />
        </div>
      </div>
    </article>
  )
}

export default OverviewStatCard
