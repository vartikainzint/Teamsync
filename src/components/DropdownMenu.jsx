import { Mail, MessageCircle, CheckSquare, Calendar, ChevronRight, AtSign } from "lucide-react";

export default function DropdownMenu({ setDropdownOpen }) {
  const menuItems = [
    { text: "New email", icon: Mail },
    { text: "New conversation", icon: MessageCircle},
    { text: "New task", icon: CheckSquare},
    { text: "New event", icon: Calendar },
    { text: "Email accounts", icon: AtSign, submenu: true }, // Submenu
  ];

  return (
    <div className="absolute top-8  left-12 right-0 w-60 bg-white rounded-md p-2">
      <ul className="space-y-1">
        {menuItems.map(({ text, icon: Icon, shortcut, submenu }) => (
          <li
            key={text}
            className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer rounded-md"
            onClick={() => setDropdownOpen(false)}
          >
            <div className="flex items-center space-x-2">
              <Icon size={18} className="text-gray-600" />
              <span>{text}</span>
            </div>
            {submenu ? (
              <ChevronRight size={18} className="text-gray-400" />
            ) : (
              <span className="text-sm text-gray-400">{shortcut}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
