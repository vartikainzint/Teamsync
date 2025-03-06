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
    <div className="flex h-screen">
  {/* Sidebar */}
  <Sidebar 
    selectedTab={selectedTab} 
    setSelectedTab={setSelectedTab} 
    setCalendarVisible={setCalendarVisible} 
    setIsNewMail={setIsNewMail} 
    className="w-1/4 min-w-[250px] border-r"
  />

  {/* Main Content */}
  <div className="flex-1 py-4 overflow-auto">

    {/* Render Selected Tab Content */}
    {selectedTab === "Inbox" && <InBox />}
    {selectedTab === "Tasks" && <TaskPanel />}
    {selectedTab === "Calendars" && <CalendarComponent />}
    {selectedTab === "All" && (
      <>
        <InBox />
        <TaskPanel />
        <CalendarComponent />
      </>
    )}
  </div>
</div>

  );
};

export default Dashboard;
