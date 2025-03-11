import { useState } from "react";
import { X } from "lucide-react";
import TabsSidebar from "./TabsSidebar";

// Import content components
import ProfileContent from "./content/ProfileContent";
import PreferencesContent from "./content/PreferencesContent";
import LoginSecurityContent from "./content/LoginSecurityContent";
import OrganizationSettings from "./content/OrganizationSettings";
import UserList from "./content/UserList";

// Placeholder for tabs not yet implemented
const Placeholder = ({ tab }) => (
  <div className="text-center text-gray-400 text-lg">Content for "{tab}" coming soon!</div>
);

export default function SettingsModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Profile");

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
      // Other placeholders
      case "Accounts":
      case "Calendars":
      case "Integrations":
      case "API":
      case "Users":
        return <UserList />;
      case "Teams":
      case "Labels":
      case "Rules":
      case "Signatures":
        return <Placeholder tab={activeTab} />;
      // Debugging unknown tab
      default:
        return (
          <div className="text-center text-red-500">Unknown Tab: {activeTab}</div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-gray-200 w-[80%] h-[90%] rounded-xl shadow-2xl flex relative border border-gray-700">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        {/* Left Sidebar */}
        <TabsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Right Content */}
        <div className="w-3/4 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
