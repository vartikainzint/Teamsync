export default function SidebarItem({ text, icon, count, active, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors
        ${active ? "bg-[#1B1C1D] text-white font-semibold" : "hover:bg-[#303136] text-gray-400"}
      `}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {icon} {/* ✅ Icon renders here */}
        <span className="text-sm">{text}</span>
      </div>
      {count > 0 && (
        <span className="text-xs bg-[#44474B] text-white px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}
