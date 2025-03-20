import { useState, useEffect, useRef } from "react";
import {
  Inbox,
  CheckSquare,
  Calendar,
  List,
  Plus,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import profileImage from "../assets/images/img-sharedinbox.png";
import SidebarItem from "./SidebarItem";
import ProfileDropdown from "./ProfileDropdown";
import CreateOrganizationModal from "./CreateOrganizationModal";
import DropdownMenu from "./DropdownMenu";
import AddTaskModal from "./AddTaskModal";
import AddCalendarModal from "./AddCalenderModal";

export default function Sidebar({
  selectedTab,
  setSelectedTab,
  setCalendarVisible,
  organizations,
  addOrganization,
  selectedOrganization,
  setSelectedOrganization,
  setSidebarOpen,
}) {
  const [dropdowns, setDropdowns] = useState({ profile: false, plus: false });
  const [showOrgModal, setShowOrgModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showCalendar, setShowCalendarModal] = useState(false);
  const [openTeams, setOpenTeams] = useState({});
  const [openTeamInboxes, setOpenTeamInboxes] = useState({});

  const profileDropdownRef = useRef(null);
  const plusDropdownRef = useRef(null);

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

  const handleSelectTab = (text) => {
    setSelectedTab(text);
    setCalendarVisible(text === "Calendars");
    if (setSidebarOpen) setSidebarOpen(false);
  };

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTeam = (teamName) => {
    setOpenTeams((prev) => ({ ...prev, [teamName]: !prev[teamName] }));
  };

  const toggleTeamInbox = (teamName) => {
    setOpenTeamInboxes((prev) => ({ ...prev, [teamName]: !prev[teamName] }));
  };

  const handlePlusAction = (action) => {
    setDropdowns({ ...dropdowns, plus: false });
    if (action === "new-task") setShowTaskModal(true);
    if (action === "new-organization") setShowOrgModal(true);
    if (action === "new-email") setSelectedTab("NewEmail");
    if (action === "new-conversation") setSelectedTab("NewConversation");
    if (action === "new-event") setShowCalendarModal(true);
  };

  return (
    <aside className="w-64 p-4 bg-gray-950 min-h-screen flex flex-col shadow-xl rounded-r-2xl text-white relative">
      <div className="relative flex items-center mb-6">
        <div className="relative mr-2" ref={profileDropdownRef}>
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-700 hover:ring-2 hover:ring-blue-400"
            onClick={() => toggleDropdown("profile")}
          />
          {dropdowns.profile && (
            <div className="fixed top-14 left-16 w-60 rounded-lg text-white shadow-lg z-50">
              <ProfileDropdown
                onClose={() =>
                  setDropdowns((prev) => ({ ...prev, profile: false }))
                }
              />
            </div>
          )}
        </div>

        <div className="relative" ref={plusDropdownRef}>
          <Plus
            size={24}
            className="cursor-pointer bg-gray-800 border border-gray-700 rounded p-1 hover:bg-gray-700"
            onClick={() => toggleDropdown("plus")}
          />
          {dropdowns.plus && (
            <div className="fixed top-14 left-20 w-65 rounded-lg text-white shadow-lg z-50">
              <DropdownMenu
                setDropdownOpen={(value) =>
                  setDropdowns((prev) => ({ ...prev, plus: value }))
                }
                onAction={handlePlusAction}
              />
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map(({ text, icon: Icon, count }) => (
          <SidebarItem
            key={text}
            text={text}
            icon={<Icon size={20} />}
            count={count}
            active={selectedTab === text}
            onClick={() => handleSelectTab(text)}
          />
        ))}

        <div className="p-2">
          <div className="text-gray-500 text-xs flex items-center cursor-pointer hover:text-white">
            <Plus size={14} />
            <span className="ml-1">Pin to sidebar</span>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase">
            Team Spaces
          </h3>
          {["Marketing Team", "Development Team"].map((team) => (
            <div key={team} className="mb-2">
              <div
                onClick={() => toggleTeam(team)}
                className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-800 text-gray-300"
              >
                <span className="text-sm">{team}</span>
                {openTeams[team] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </div>

              {openTeams[team] && (
                <div className="ml-4 mt-1 space-y-1">
                  <div
                    onClick={() => toggleTeamInbox(team)}
                    className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-800"
                  >
                    <div className="flex items-center text-gray-400">
                      <Inbox size={16} className="mr-2" /> Inbox
                    </div>
                    {openTeamInboxes[team] ? (
                      <ChevronDown size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                  </div>
                  {openTeamInboxes[team] &&
                    ["Assigned to me", "All"].map((subItem) => (
                      <SidebarItem
                        key={`${team}-Inbox-${subItem}`}
                        text={subItem}
                        icon={<Inbox size={14} />}
                        active={selectedTab === `${team}-Inbox-${subItem}`}
                        onClick={() =>
                          handleSelectTab(`${team}-Inbox-${subItem}`)
                        }
                      />
                    ))}

                  <SidebarItem
                    text="Task"
                    icon={<CheckSquare size={16} />}
                    active={selectedTab === `${team}-Task`}
                    onClick={() => handleSelectTab(`${team}-Task`)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <button
        onClick={() => setShowOrgModal(true)}
        className="w-full text-center text-blue-500 font-medium py-2 hover:underline text-sm border-t border-gray-700 mt-4"
      >
        + Create an organization
      </button>

      {showOrgModal && (
        <CreateOrganizationModal
          isOpen={showOrgModal}
          onClose={() => setShowOrgModal(false)}
          onAddOrganization={addOrganization}
        />
      )}
      {showTaskModal && (
        <AddTaskModal
          onClose={() => setShowTaskModal(false)}
          onSave={(taskData) => {
            console.log("Task saved:", taskData);
            setShowTaskModal(false);
          }}
        />
      )}
      {showCalendar && (
        <AddCalendarModal
          showCalendar={showCalendar}
          setShowCalendarModal={setShowCalendarModal}
          onAddCalendar={() => alert("Add calendar clicked!")}
        />
      )}
    </aside>
  );
}