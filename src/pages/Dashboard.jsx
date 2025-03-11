import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskPanel from "../components/TaskPanel";
import InBox from "../components/InBox";
import CalendarComponent from "../components/CalendarComponent";
import ChatLayout from "../components/ChatLayout";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Inbox");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [isNewMail, setIsNewMail] = useState(false);
  const [organizations, setOrganizations] = useState(["Default Organization"]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const addOrganization = (orgName) => {
    setOrganizations((prev) => {
      const updated = [...prev, orgName];
      console.log("Updated Organizations: ", updated);
      return updated;
    });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900 text-gray-200">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5 border-r border-gray-700 overflow-y-auto bg-gray-800">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setCalendarVisible={setCalendarVisible}
          setIsNewMail={setIsNewMail}
          organizations={organizations}
          addOrganization={addOrganization}
          selectedOrganization={selectedOrganization}
          setSelectedOrganization={setSelectedOrganization}
          className="h-full"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        
        {/* Mobile Sidebar */}
        <div className="block md:hidden mb-4 border-b border-gray-700 pb-2 bg-gray-800 rounded-lg">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setCalendarVisible={setCalendarVisible}
            setIsNewMail={setIsNewMail}
            organizations={organizations}
            addOrganization={addOrganization}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            className=""
          />
        </div>

        {/* Render Selected Tab Content */}
        {selectedTab === "Inbox" && <InBox />}
        {selectedTab === "Tasks" && <TaskPanel />}
        {selectedTab === "Calendars" && <CalendarComponent />}
        {selectedTab === "All" && (
          <div className="space-y-4">
            <ChatLayout />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
