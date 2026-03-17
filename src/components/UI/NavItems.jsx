const NavItems = ({
  icon: Icon,
  label,
  tabName,
  onTabClick,
  activeTab,
  notifications,
}) => {
  const isActive = activeTab === tabName;
  const baseClasses =
    "flex w-full items-center space-x-3 rounded-lg p-3 text-left transition-colors group";
  const inactiveClasses = "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900";
  const activeClasses = "bg-zinc-900 text-white";

  return (
    <button
      type="button"
      onClick={() => onTabClick(tabName)}
      className={`${baseClasses} ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Icon
        size={20}
        className={
          isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-700"
        }
      />
      <span className="flex-1 text-sm font-medium">{label}</span>
      {notifications && (
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
            isActive
              ? "bg-orange-400 text-zinc-900"
              : "bg-orange-500 text-white"
          }`}
        >
          {notifications}
        </span>
      )}
    </button>
  );
};

export default NavItems;
