const CalendarDay = ({ day, date, isActive }) => {
  return (
    <div
      className={`flex h-12 w-9 cursor-pointer flex-col items-center justify-center rounded-lg ${
        isActive
          ? "bg-zinc-900 text-white"
          : "text-zinc-600 hover:bg-zinc-100"
      }`}
    >
      <span className="text-xs font-medium">{day}</span>
      <span className="text-sm font-semibold">{date}</span>
    </div>
  )
}

export default CalendarDay
