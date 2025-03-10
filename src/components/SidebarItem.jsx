export default function SidebarItem({ text, icon, count, active, onClick }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer relative ${
        active ? "bg-gray-200 font-bold z-20" : "hover:bg-gray-100 z-10"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-2">
        {icon} {/* ✅ Icon renders here */}
        <span className="text-sm">{text}</span>
      </div>
      {count > 0 && (
        <span className="text-xs bg-gray-300 px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
}
