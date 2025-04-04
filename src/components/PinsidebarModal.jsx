import React from "react";
import { Plus, Mail, Users, Tag, Calendar, MessageCircle } from "lucide-react";

const PinsidebarModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-md z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-gray-900 text-white w-80 p-2 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Pin to sidebar..."
          className="text-sm w-full px-3 py-2 mb-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Menu Items */}
        <div className="space-y-1">
          <MenuItem icon={<Mail size={16} />} label="Main section" />
          <MenuItem icon={<Users size={16} />} label="Team spaces" />
          <MenuItem icon={<Tag size={16} />} label="Labels" />
          <MenuItem icon={<Calendar size={16} />} label="Calendars" />
          <MenuItem icon={<MessageCircle size={16} />} label="Chatrooms" />

          {/* Highlighted "Add custom section" */}
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, highlight }) => (
  <div
    className={`flex items-center px-3 py-2 rounded-md cursor-pointer text-sm ${
      highlight ? "bg-blue-600 text-white text-sm" : "hover:bg-gray-700"
    }`}
  >
    {icon}
    <span className="ml-2 text-sm">{label}</span>
  </div>
);

export default PinsidebarModal;
