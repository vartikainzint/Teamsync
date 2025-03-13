// components/DropdownMenu.js
import {
  Mail,
  MessageCircle,
  CheckSquare,
  Calendar,
  AtSign,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function DropdownMenu({ setDropdownOpen, onAction }) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { text: "New email", icon: Mail, action: "new-email" },
    { text: "New conversation", icon: MessageCircle, action: "new-conversation" },
    { text: "New task", icon: CheckSquare, action: "new-task" },
    { text: "New event", icon: Calendar, action: "new-event" },
    { text: "Email accounts", icon: AtSign, submenu: true },
  ];

  const emailAccounts = [
    { text: "Account 1", action: "account-1" },
    { text: "Account 2", action: "account-2" },
  ];

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setShowSubMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setDropdownOpen]);

  return (
    <div
      ref={menuRef}
      className="w-60 bg-gray-800 z-50 rounded-md p-2 shadow-lg border border-gray-700 relative sidebar-div text-sm"
    >
      <ul className="space-y-1">
        {menuItems.map(({ text, icon: Icon, submenu, action }) => (
          <li
            key={text}
            className="flex justify-between items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md text-gray-300 relative"
            onClick={(e) => {
              e.stopPropagation();
              if (submenu) {
                setShowSubMenu((prev) => !prev);
              } else {
                onAction(action);
                setDropdownOpen(false);
              }
            }}
          >
            <div className="flex items-center space-x-2">
              <Icon size={18} className="text-gray-400" />
              <span>{text}</span>
            </div>
            {submenu && <ChevronRight size={18} className="text-gray-400" />}
          </li>
        ))}
      </ul>

      {/* Submenu */}
      {showSubMenu && (
        <div className="absolute left-full top-0 ml-1 w-52 bg-gray-800 rounded-md p-2 shadow-lg border border-gray-700 z-50">
          <ul className="space-y-1">
            {emailAccounts.map(({ text, action }) => (
              <li
                key={text}
                className="p-2 hover:bg-gray-700 cursor-pointer rounded-md text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onAction(action);
                  setDropdownOpen(false);
                  setShowSubMenu(false);
                }}
              >
                {text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
