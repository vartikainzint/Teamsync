import { useState } from "react";
import { Inbox, CheckSquare, Calendar, List, Plus } from "lucide-react";
import profileImage from "../assets/images/img-sharedinbox.png";
import SidebarItem from "./SidebarItem.JSX";
import DropdownMenu from "./DropdownMenu";

export default function Sidebar({ selectedTab, setSelectedTab, setCalendarVisible }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { text: "Inbox", icon: Inbox, count: 3 },
    { text: "Tasks", icon: CheckSquare, count: 1 },
    { text: "Calendars", icon: Calendar, count: 0 },
    { text: "All", icon: List, count: 0 },
  ];

  return (
    <aside className="w-64 p-4 bg-gray-100 min-h-screen flex flex-col shadow-lg relative">
      {/* Profile Section */}
      <div className="relative flex items-center mb-6 justify-end">
        <img src={profileImage} alt="Profile" className="w-10 h-10 rounded-full" />
        <Plus
          className=" cursor-pointer bg-white border rounded p-1 ml-2"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        
        {/* Dropdown Menu - Shows when Plus is clicked */}
        {dropdownOpen && (
          <div className="absolute top-12 right-0 w-48 rounded-lg p-2">
            <DropdownMenu setDropdownOpen={setDropdownOpen} />
          </div>
        )}
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1">
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

      {/* Create Organization Button */}
      <div className="mt-auto">
        <button className="text-blue-600 font-medium px-2 py-1">+ Create an organization</button>
      </div>
    </aside>
  );
}
