const statusStyles = {
  Approved: "bg-emerald-100 text-emerald-600",
  Pending: "bg-amber-100 text-amber-600",
  Declined: "bg-rose-100 text-rose-600",
}

const ScheduledPaymentRow = ({
  payee,
  amount,
  date,
  status,
  icon: Icon,
  accentClass,
}) => {
  return (
    <article className="grid gap-3 rounded-3xl border border-zinc-200/80 bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-200/70 md:grid-cols-[minmax(0,1.35fr)_170px_180px_140px] md:items-center md:gap-4 md:px-6">
      <div className="flex items-center gap-3">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-full ${accentClass}`}
        >
          <Icon size={18} />
        </div>

        <div>
          <p className="text-base font-semibold text-zinc-900">{payee}</p>
          <p className="text-sm text-zinc-500 md:hidden">{date}</p>
        </div>
      </div>

      <p className="text-xl font-semibold text-zinc-700">-${amount}</p>

      <p className="hidden text-base font-medium text-zinc-500 md:block">
        {date}
      </p>

      <div>
        <span
          className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-semibold ${statusStyles[status]}`}
        >
          <span className="mr-2 size-2 rounded-full bg-current" />
          {status}
        </span>
      </div>
    </article>
  )
}

export default ScheduledPaymentRow
