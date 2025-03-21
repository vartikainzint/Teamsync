import { useEffect, useRef, useState } from "react";
import SettingsModal from "./SettingsModal";
import SetStatusModal from "./SetStatusModal"; // Import modal
import EnterCommandModal from "./EnterCommandModal";
import AnalyticsModal from "./AnalyticsModal";
import ContactDropdownModal from "./ContactDropdownModal";
import ResponsesComponent from "./ResponsesComponent";
import UpdateNotification from "./UpdateNotification";
import WhatsNew from "./WhatsNew";
export default function ProfileDropdown({ onClose }) {
  const dropdownRef = useRef(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false); // State for Set Status modal
  const [iscommandModalOpen, setcommandModalOpen] = useState(false);
  const [isanalyticsModalOpen, setanalyticsModalOpen] = useState(false);
  const [iscontactsModalOpen, setcontactsModalOpen] = useState(false);
  const [isresponseModalOpen, setresponseModalOpen] = useState(false);
  const [isnotificationModalOpen, setnotificationModalOpen] = useState(false);
  const [isnewModalOpen, setnewModalOpen] = useState(false);


  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // Close dropdown, but don't open other modals
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  

  const menuItems = [
    { text: "Set a status", shortcut: "Ctrl + Shift + Y" },
    { text: "Enter a command", shortcut: "Ctrl + K" },
    { text: "Settings", shortcut: "Ctrl + ," },
    { text: "Analytics", shortcut: "Ctrl + Shift + A" },
    { text: "Contacts", shortcut: "Ctrl + Shift + ." },
    { text: "Responses", shortcut: "Ctrl + Shift + O" },
    { separator: true },
    { text: "Sync" },
    { text: "Check for updates..." },
    { text: "What’s new?" },
    { separator: true },
    { text: "Log out", danger: true },
  ];

  // Handle item click
  const handleItemClick = (item) => {
    if (item.text === "Settings") {
      setIsSettingsOpen(true);
    } else if (item.text === "Set a status") {
      setIsStatusModalOpen(true); // Open Set Status modal
    }
    else if (item.text === "Enter a command") {
      setcommandModalOpen(true); // Open Set Status modal
    } 
    else if (item.text === "Analytics") {
      setanalyticsModalOpen(true); // Open Set Status modal
    } 
    else if (item.text === "Contacts") {
      setcontactsModalOpen(true); // Open Set Status modal
    } 
    else if (item.text === "Responses") {
      setresponseModalOpen(true); // Open Set Status modal
    } 
    else if (item.text === "Check for updates...") {
      setnotificationModalOpen(true);
    }
    else if (item.text === "What’s new?") {
      setnewModalOpen(true);
    }
    else {
      onClose(); // Close dropdown for other items
    }
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className="w-64 bg-gray-800 border border-gray-700 shadow-xl rounded-lg p-2 z-50 setting-sidebar"
      >
        {menuItems.map((item, index) =>
          item.separator ? (
            <hr key={index} className="my-2 border-gray-700" />
          ) : (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                item.danger
                  ? "text-red-500 hover:bg-red-600/20"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <span className="text-sm">{item.text}</span>
              {item.shortcut && (
                <span className="text-xs text-gray-400">{item.shortcut}</span>
              )}
            </div>
          )
        )}
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Set a Status Modal */}
      <SetStatusModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
      />
      <EnterCommandModal isOpen={iscommandModalOpen} onClose={() => setcommandModalOpen(false)} />
      <AnalyticsModal isOpen={isanalyticsModalOpen} onClose={() => setanalyticsModalOpen(false)} />
      <ContactDropdownModal isOpen={iscontactsModalOpen} onClose={() => setcontactsModalOpen(false)} />
      <ResponsesComponent isOpen={isresponseModalOpen} onClose={() => setresponseModalOpen(false)} />
      <UpdateNotification isOpen={isnotificationModalOpen} onClose={() => setnotificationModalOpen(false)} />
      <WhatsNew isOpen={isnewModalOpen} onClose={() => setnewModalOpen(false)} />

    </>
  );
}
