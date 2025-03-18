import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskPanel from "../components/TaskPanel";
import InBox from "../components/InBox";
import CalendarComponent from "../components/CalendarComponent";
import Room from "../components/Room";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Inbox");
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [isNewMail, setIsNewMail] = useState(false); // ✅ Add this line
  const [newConversation, setNewConversation] = useState(null);
  return (
    <div className="flex h-screen overflow-hidden min-w-screen">
      
      {/* Sidebar */}
      <div className="hidden md:block md:w-1/4 lg:w-1/5  overflow-y-auto">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setCalendarVisible={setCalendarVisible}
          setIsNewMail={setIsNewMail}
          className="h-full"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Mobile Sidebar (Dropdown / Off-canvas) */}
        <div className="block md:hidden mb-4 border-b pb-2">
          <Sidebar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setCalendarVisible={setCalendarVisible}
            setIsNewMail={setIsNewMail}
            setNewConversation={setNewConversation}
            className=""
          />
        </div>

        {/* Render Selected Tab Content */}
        {selectedTab === "Inbox" && <InBox newConversation={newConversation} />}
        {selectedTab === "Tasks" && <TaskPanel />}
        {selectedTab === "Room" && <Room />} 
        {selectedTab === "Calendars" && <CalendarComponent />}
        {selectedTab === "All" && (
          <div className="space-y-4">
            <InBox />
          </div>
        )}
      </div>

    </div>
  );
};

export default Dashboard;
