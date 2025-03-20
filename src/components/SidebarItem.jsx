export default function SidebarItem({ text, icon, count, active, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer relative transition-colors
        ${active ? "bg-gray-700 text-white font-semibold" : "hover:bg-gray-700 text-gray-300"}
      `}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {icon} {/* ✅ Icon renders here */}
        <span className="text-sm">{text}</span>
      </div>
      {count > 0 && (
        <span className="text-xs bg-gray-600 text-gray-100 px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}