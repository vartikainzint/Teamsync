import { useState } from "react";
import { X, Menu } from "lucide-react";
import TabsSidebar from "./TabsSidebar";

// Import content components
import ProfileContent from "./content/ProfileContent";
import PreferencesContent from "./content/PreferencesContent";
import LoginSecurityContent from "./content/LoginSecurityContent";
import OrganizationSettings from "./content/OrganizationSettings";
import UserList from "./content/UserList";
import CreateTeamSection from "./content/CreateTeamSection";
import LabelSection from "./content/LabelSection";
// Placeholder for tabs not yet implemented
const Placeholder = ({ tab }) => (
  <div className="text-center text-gray-400 text-lg p-4">Content for "{tab}" coming soon!</div>
);

export default function SettingsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Profile");
  const [showSidebar, setShowSidebar] = useState(false); // Mobile sidebar toggle

  if (!isOpen) return null; // Don't render if modal is closed

  // Function to render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileContent />;
      case "Preferences":
        return <PreferencesContent />;
      case "Login & Security":
        return <LoginSecurityContent />;
      case "Organizations":
        return <OrganizationSettings />;
      case "Accounts":
      case "Calendars":
      case "Integrations":
      case "API":
      case "Users":
        return <UserList />;
      case "Teams":
        return <CreateTeamSection />;
      case "Labels":
        return <LabelSection />;
      case "Rules":
      case "Signatures":
      case "Billing":
      case "Rewards 🪙":
      case "Download apps":
      case "Help & Feedback":
        return <Placeholder tab={activeTab} />;
      default:
        return <div className="text-center text-red-500">Unknown Tab: {activeTab}</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-0 md:p-4">
      <div className="relative bg-gray-900 text-gray-200 w-full h-full md:w-[80%] md:h-[90%] rounded-none md:rounded-xl shadow-2xl flex flex-col md:flex-row border border-gray-700 overflow-hidden">

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-50"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Mobile Sidebar Toggle Button */}
        <button
          className="md:hidden absolute top-4 left-4 text-gray-400 hover:text-white transition z-50 mobile-toggle"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Menu size={24} />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 border-r border-gray-700 overflow-y-auto z-40 transform ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:w-1/4 w-3/4 max-h-full`}
        >
          <TabsSidebar
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setShowSidebar(false); // Close sidebar on mobile after tab click
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 max-h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}