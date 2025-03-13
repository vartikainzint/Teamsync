import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskPanel from "../components/TaskPanel";
import InBox from "../components/InBox";
import EmailList from "../components/EmailList";
import CalendarComponent from "../components/CalendarComponent";
import ChatLayout from "../components/ChatLayout";
import NewConversation from "../components/NewConversation";
import NewEmail from "../components/NewEmail"; // Ensure this component exists and is working
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Inbox");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [isNewMail, setIsNewMail] = useState(false); // To show "New Email" form
  const [organizations, setOrganizations] = useState(["Default Organization"]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Manage conversations
  const [conversations, setConversations] = useState([
    { id: 1, user: "You", message: "New conversation", date: "Tuesday" },
    { id: 2, user: "You", message: "Another conversation", date: "Wednesday" },
  ]);

  // Add organization
  const addOrganization = (orgName) => {
    setOrganizations((prev) => {
      const updated = [...prev, orgName];
      console.log("Updated Organizations: ", updated);
      return updated;
    });
  };

  // Tab selection handler
  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    setIsNewMail(false); // Close NewEmail when switching tabs
    setMobileSidebarOpen(false); // Close mobile sidebar if open
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-gray-200 relative">
      
      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 transform ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={handleTabSelect}
          setCalendarVisible={setCalendarVisible}
          setIsNewMail={setIsNewMail}
          organizations={organizations}
          addOrganization={addOrganization}
          selectedOrganization={selectedOrganization}
          setSelectedOrganization={setSelectedOrganization}
          className="h-full"
        />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5 border-r border-gray-700 bg-gray-800 overflow-y-auto">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={handleTabSelect}
          setCalendarVisible={setCalendarVisible}
          setIsNewMail={setIsNewMail}
          organizations={organizations}
          addOrganization={addOrganization}
          selectedOrganization={selectedOrganization}
          setSelectedOrganization={setSelectedOrganization}
          className="h-full"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative">
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-800 sticky top-0 z-10">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="text-gray-200"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold capitalize">
            {isNewMail ? "New Email" : selectedTab}
          </h1>
          <div></div>
        </div>

        {/* Main Content Rendering */}
        <div className="p-4 space-y-4">
          {isNewMail ? (
            // ✅ Render New Email component
            <NewEmail setIsNewMail={setIsNewMail} />
          ) : (
            // ✅ Render tab-based content
            <>
            {selectedTab === "Inbox" && (
  <div className="flex h-[calc(100vh-80px)]">
    <EmailList
      conversations={conversations}
      setIsNewMail={setIsNewMail}
    />
    <InBox />
  </div>
)}

{selectedTab === "NewEmail" && (
  <div className="flex h-[calc(100vh-80px)] w-full">
        <EmailList
      conversations={conversations}
      setIsNewMail={setIsNewMail}
    />
    <NewEmail />
  </div>
)}
{selectedTab === "NewConversation" && (
  <div className="flex h-[calc(100vh-80px)] w-full">
        <EmailList
      conversations={conversations}
      setIsNewMail={setIsNewMail}
    />
    <NewConversation />
  </div>
)}

              {selectedTab === "Tasks" && <TaskPanel />}
              {selectedTab === "Calendars" && <CalendarComponent />}
              {selectedTab === "All" && (
                <div className="space-y-4">
                  <ChatLayout />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
