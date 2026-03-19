const SupportChannelCard = ({
  title,
  description,
  actionLabel,
  icon: Icon,
  iconClass,
}) => {
  return (
    <article className="rounded-3xl border border-zinc-200/80 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-zinc-200/70">
      <div
        className={`flex size-12 items-center justify-center rounded-full ${iconClass}`}
      >
        <Icon size={20} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>

      <button className="mt-5 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-900 hover:text-white">
        {actionLabel}
      </button>
    </article>
  )
}

export default SupportChannelCard
