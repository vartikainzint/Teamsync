import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskPanel from "../components/TaskPanel";
import InBox from "../components/InBox";
import CalendarComponent from "../components/CalendarComponent";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Inbox");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [isNewMail, setIsNewMail] = useState(false); // ✅ Add this line

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5 border-r border-gray-300 overflow-y-auto">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setCalendarVisible={setCalendarVisible}
          setIsNewMail={setIsNewMail}
          className="h-full"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Mobile Sidebar (Dropdown / Off-canvas) */}
        <div className="block md:hidden mb-4 border-b pb-2">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setCalendarVisible={setCalendarVisible}
            setIsNewMail={setIsNewMail}
            className=""
          />
        </div>

        {/* Render Selected Tab Content */}
        {selectedTab === "Inbox" && <InBox />}
        {selectedTab === "Tasks" && <TaskPanel />}
        {selectedTab === "Calendars" && <CalendarComponent />}
        {selectedTab === "All" && (
          <div className="space-y-4">
            <InBox />
            <TaskPanel />
            <CalendarComponent />
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;
