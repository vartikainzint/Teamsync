import { useState, useEffect, useRef } from "react";
import { Inbox, CheckSquare, Calendar, List, Plus } from "lucide-react";
import profileImage from "../assets/images/img-sharedinbox.png";
import SidebarItem from "./SidebarItem";
import ProfileDropdown from "./ProfileDropdown";
import CreateOrganizationModal from "./CreateOrganizationModal";
import DropdownMenu from "./DropdownMenu";

export default function Sidebar({
  selectedTab,
  setSelectedTab,
  setCalendarVisible,
  organizations,
  addOrganization,
  selectedOrganization,
  setSelectedOrganization,
}) {
  const [dropdowns, setDropdowns] = useState({
    profile: false,
    plus: false,
  });
  const [showOrgModal, setShowOrgModal] = useState(false);

  const profileDropdownRef = useRef(null);
  const plusDropdownRef = useRef(null);

  // ✅ Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setDropdowns((prev) => ({ ...prev, profile: false }));
      }
      if (
        plusDropdownRef.current &&
        !plusDropdownRef.current.contains(event.target)
      ) {
        setDropdowns((prev) => ({ ...prev, plus: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { text: "Inbox", icon: Inbox, count: 3 },
    { text: "Tasks", icon: CheckSquare, count: 1 },
    { text: "Calendars", icon: Calendar, count: 0 },
    { text: "All", icon: List, count: 0 },
  ];

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSelectTab = (text) => {
    setSelectedTab(text);
    if (text === "Calendars" && setCalendarVisible) {
      setCalendarVisible(true);
    }
  };

  return (
    <aside className="w-64 p-4 bg-gray-900 min-h-screen flex flex-col shadow-lg relative overflow-visible text-white">
      
      {/* Header Section */}
      <div className="relative flex items-center mb-6 justify-end space-x-2">
        {/* Profile Dropdown */}
        <div className="relative" ref={profileDropdownRef}>
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-700"
            onClick={() => toggleDropdown("profile")}
          />
          {dropdowns.profile && (
            <ProfileDropdown
              onClose={() =>
                setDropdowns((prev) => ({ ...prev, profile: false }))
              }
            />
          )}
        </div>
        {/* Plus Dropdown */}
        <div className="relative" ref={plusDropdownRef}>
          <Plus
            className="cursor-pointer bg-gray-800 border border-gray-600 rounded p-1 text-white"
            onClick={() => toggleDropdown("plus")}
          />
          {dropdowns.plus && (
            <DropdownMenu
              setDropdownOpen={(value) =>
                setDropdowns((prev) => ({ ...prev, plus: value }))
              }
            />
          )}
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map(({ text, icon: Icon, count }) => (
          <SidebarItem
            key={text}
            text={text}
            icon={<Icon size={20} />}
            count={count}
            active={selectedTab === text}
            onClick={() => handleSelectTab(text)}
            className="hover:bg-gray-700 rounded"
            activeClass="bg-gray-800 text-white font-semibold"
          />
        ))}
      </nav>

      {/* Organizations List */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <h3 className="text-sm font-semibold text-gray-400 mb-2">
          Organizations
        </h3>
        {organizations.length > 0 ? (
          organizations.map((org, index) => (
            <div
              key={index}
              onClick={() => setSelectedOrganization(org)}
              className={`px-2 py-1 rounded cursor-pointer ${
                selectedOrganization === org
                  ? "bg-blue-600 text-white font-semibold"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              {org}
            </div>
          ))
        ) : (
          <div className="text-gray-500 italic text-sm">
            No organizations found.
          </div>
        )}
      </div>

      {/* Create Organization Button */}
      <div className="mt-auto pt-4">
        <button
          onClick={() => setShowOrgModal(true)}
          className="text-blue-400 font-medium px-2 py-1 hover:underline"
        >
          + Create an organization
        </button>
      </div>

      {/* Create Organization Modal */}
      {showOrgModal && (
        <CreateOrganizationModal
          isOpen={showOrgModal}
          onClose={() => setShowOrgModal(false)}
          onAddOrganization={addOrganization}
        />
      )}
    </aside>
  );
}
