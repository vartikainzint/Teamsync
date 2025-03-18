import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Inbox,
  CheckSquare,
  Calendar,
  List,
  Plus,
  Settings,
  LogOut,
  User,
  Command,
  BarChart,
  BookOpen,
  MessageCircle,
  RefreshCw,
  Gift,
  HelpCircle,
  Mail,
  MessageSquare,
} from "lucide-react";
import profileImage from "../assets/images/img-sharedinbox.png";
import SidebarItem from "./SidebarItem";
import SettingsModal from "./SettingsModal";
import NewConversationTemplate from "./NewConversationTemplate";
export default function Sidebar({
  selectedTab,
  setSelectedTab,
  setCalendarVisible,
  setNewConversation, 
}) {
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [plusDropdownOpen, setPlusDropdownOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.clear();
    setProfileDropdownOpen(false);
    navigate("/login");
  };

  const handleNewConversation = () => {
    if (typeof setNewConversation === "function") {
      setNewConversation({ id: "new", title: "New Conversation" });
      setPlusDropdownOpen(false);
    } else {
      console.error("setNewConversation is not a function");
    }
  };
  

  const menuItems = [
    { text: "Inbox", icon: Inbox, count: 3 },
    { text: "Tasks", icon: CheckSquare, count: 1 },
    { text: "Calendars", icon: Calendar, count: 0 },
    { text: "All", icon: List, count: 0 },
  ];

  return (
    <div className="w-68 p-2 !bg-[#232529] min-h-screen flex flex-col relative">
      {/* Profile & Plus Icon Section */}
      <div className="relative flex items-center mb-6">
        {/* ✅ Profile Icon */}
        <div className="relative mr-2">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => {
              setProfileDropdownOpen(!profileDropdownOpen);
              setPlusDropdownOpen(false);
            }}
          />
          {profileDropdownOpen && (
            <div className="fixed top-14 left-16 w-60 rounded-lg bg-[#26292E] text-white shadow-lg z-50">
              {[
                { text: "Set a status", icon: User, shortcut: "Ctrl + Shift + Y" },
                { text: "Enter a command", icon: Command, shortcut: "Ctrl + K" },
                { text: "Settings", icon: Settings, shortcut: "Ctrl + ," },
                { divider: true },
                { text: "Analytics", icon: BarChart, shortcut: "Ctrl + Shift + A" },
                { text: "Contacts", icon: BookOpen, shortcut: "Ctrl + Shift + C" },
                { text: "Responses", icon: MessageCircle, shortcut: "Ctrl + Shift + O" },
                { divider: true },
                { text: "Sync", icon: RefreshCw },
                { text: "Check for updates...", icon: RefreshCw },
                { text: "Rewards", icon: Gift },
                { text: "What's new?", icon: HelpCircle },
                { text: "Help & Feedback", icon: HelpCircle },
                { divider: true },
                { text: "Log out", icon: LogOut, className: "text-red-400", action: handleLogout },
              ].map((item, index) =>
                item.divider ? (
                  <hr key={index} className="border-gray-600 my-1" />
                ) : (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-2 hover:bg-[#32363D] cursor-pointer ${
                      item.className || ""
                    }`}
                    onClick={item.action ? item.action : () => alert(`${item.text} clicked!`)}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon size={18} />
                      <span>{item.text}</span>
                    </div>
                    {item.shortcut && (
                      <span className="text-gray-400 text-xs">{item.shortcut}</span>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>

        {/* ✅ Plus Icon */}
        <div className="relative">
          <Plus
            className="cursor-pointer bg-white border rounded p-1"
            onClick={() => {
              setPlusDropdownOpen(!plusDropdownOpen);
              setProfileDropdownOpen(false);
            }}
          />
          {/* Plus Dropdown */}
          {plusDropdownOpen && (
            <div className="fixed top-14 left-20 w-65 rounded-lg bg-[#26292E] text-white shadow-lg z-50">
              {[
                { text: "New email", icon: Mail, shortcut: "Ctrl + N" },
                { text: "New conversation", icon: MessageSquare, shortcut: "Ctrl + Shift + N", action: handleNewConversation },
                { text: "New task", icon: CheckSquare, shortcut: "Ctrl + T" },
                { text: "New event", icon: Calendar, shortcut: "Ctrl + Y", selected: true },
                { divider: true },
                { text: "Email accounts", icon: User },
              ].map((item, index) =>
                item.divider ? (
                  <hr key={index} className="border-gray-600 my-1" />
                ) : (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-2 hover:bg-[#32363D] cursor-pointer ${
                      item.selected ? "bg-[#32363D]" : ""
                    }`}
                    onClick={item.action ? item.action : () => alert(`${item.text} clicked!`)}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon size={18} />
                      <span>{item.text}</span>
                    </div>
                    {item.shortcut && (
                      <span className="text-gray-400 text-xs">{item.shortcut}</span>
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="">
        {menuItems.map(({ text, icon: Icon, count }) => (
          <SidebarItem
            key={text}
            text={text}
            icon={<Icon size={20} />}
            count={count}
            active={selectedTab === text}
            onClick={() => {
              setSelectedTab(text);
              if (text === "Calendars" && setCalendarVisible) {
                setCalendarVisible(true);
              }
            }}
          />
        ))}
      </nav>

      <div className="mt-4 text-gray-400 text-sm">Team spaces</div>
      <div className="mt-2">
        <div className="flex items-center space-x-2 text-white font-semibold">
          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">!</span>
          <span>inzint</span>
        </div>
        <div className="ml-6 mt-2">
          <SidebarItem
            text="Tasks"
            icon={<CheckSquare size={18} />}
            active={selectedTab === "Tasks"}
            onClick={() => setSelectedTab("Tasks")}
          />
          <SidebarItem
            text="Room"
            icon={<MessageSquare size={18} />}
            active={selectedTab === "Room"}
            onClick={() => setSelectedTab("Room")}
          />
        </div>
      </div>

      {/* Create Organization Button */}
      <div className="mt-auto">
        <button className="text-blue-600 font-medium px-2 py-1">+ Create an organization</button>
      </div>
    </div>
  );
}
