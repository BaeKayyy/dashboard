const BudgetProgressCard = ({
  title,
  spending,
  total,
  percent,
  icon: Icon,
  iconClass,
  badgeClass,
  progressClass,
}) => {
  return (
    <article className="rounded-2xl bg-zinc-50/90 p-4 ring-1 ring-zinc-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/60">
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-base font-semibold text-zinc-900">{title}</h4>
              <p className="text-sm text-zinc-500">
                Spending: ${spending} / ${total}
              </p>
            </div>

            <span
              className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
            >
              {percent}% Used
            </span>
          </div>

          <div className="mt-3 h-2 rounded-full bg-white">
            <div
              className={`h-full rounded-full ${progressClass}`}
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default BudgetProgressCard
