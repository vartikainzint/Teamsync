import { useState } from "react";
import GeneralSettings from "../Preferences/GeneralSettings";
import Appearance from "../Preferences/Appearance";
import CalenderSettings from "../Preferences/CalenderSettings"
import { Component } from "react";
import ComposerSettings from "../Preferences/ComposerSetings";
import ContactSettings from "../Preferences/ContactSettings";
import NotificationSettings from "../Preferences/NotificationSettings";
import ShortcutSettings from "../Preferences/ShortcutSettings";
import SnoozesSettings from "../Preferences/SnoozesSettings";
import SwipeSettings from "../Preferences/SwipeSettings";
export default function PreferencesContent() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General" },
    { id: "appearance", label: "Appearance" },
    { id: "calendars", label: "Calendars" },
    { id: "composer", label: "Composer" },
    { id: "contacts", label: "Contacts" },
    { id: "notifications", label: "Notifications" },
    { id: "shortcuts", label: "Shortcuts" },
    { id: "snoozes", label: "Snoozes" },
    { id: "swipes", label: "Swipes" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "general":
        return <GeneralSettings />;
      case "appearance":
        return <Appearance />;
      case "calendars":
        return <CalenderSettings />;
      case "composer":
        return <ComposerSettings />;
      case "contacts":
        return <ContactSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "shortcuts":
        return <ShortcutSettings />;
      case "snoozes":
        return <SnoozesSettings />;
      case "swipes":
        return <SwipeSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-gray-800 p-0 rounded-lg shadow-md">
      <div className="w-1/4 bg-gray-700 p-4 rounded-lg shadow-md">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`p-2 cursor-pointer rounded-lg text-white-700 text-sm ${
                activeTab === tab.id ? "bg-blue-500 text-white" : "hover:bg-blue-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-0 bg-gray-800">{renderContent()}</div>
    </div>
  );
}
