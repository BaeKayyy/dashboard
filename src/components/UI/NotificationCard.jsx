const NotificationCard = ({
  title,
  message,
  time,
  tag,
  unread,
  icon: Icon,
  iconClass,
}) => {
  return (
    <article
      className={`rounded-3xl border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-200/60 ${
        unread
          ? "border-zinc-200 bg-white shadow-sm"
          : "border-zinc-100 bg-zinc-50/90"
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full ${iconClass}`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-zinc-950">
                  {title}
                </h3>
                {unread ? (
                  <span className="size-2 rounded-full bg-blue-500" />
                ) : null}
              </div>
              <p className="mt-1 text-sm leading-6 text-zinc-500">{message}</p>
            </div>

            <div className="sm:text-right">
              <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                {tag}
              </span>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
                {time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default NotificationCard
