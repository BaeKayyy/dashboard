const SettingsToggle = ({ title, description, enabled }) => {
  return (
    <div className="flex items-start justify-between gap-4 rounded-3xl border border-zinc-200/80 bg-zinc-50/90 p-4">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-zinc-950">{title}</p>
        <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
      </div>

      <button
        type="button"
        className={`relative mt-1 h-7 w-12 shrink-0 rounded-full transition ${
          enabled ? "bg-zinc-900" : "bg-zinc-200"
        }`}
      >
        <span
          className={`absolute top-1 size-5 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  )
}

export default SettingsToggle
