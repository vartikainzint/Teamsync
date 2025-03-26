import { useState } from "react";
import { Bell, Archive, Trash2, MoreHorizontal, UserPlus, Check } from "lucide-react";
import PrivateComments from "./PrivateComments";
export default function EmailConversationCard() {
  const [subject, setSubject] = useState("Conversation");
  const [showMenu, setShowMenu] = useState(false); // Toggle state for dropdown

  // Example action handler
  const handleAction = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="flex flex-col bg-gray dark:bg-gray-900 text-white-800 dark:text-white-200 rounded-md  border-gray-300 dark:border-gray-700 shadow-sm max-w-3xl mx-auto">
      
      {/* Toolbar Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 sm:px-4 py-2 border-b border-gray-200 dark:border-gray-700 space-y-2 sm:space-y-0">
  
  {/* Subject Input */}
  <input
    type="text"
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    placeholder="Enter subject"
    className="text-base sm:text-lg font-medium focus:outline-none bg-transparent w-full sm:flex-grow dark:text-white"
  />

  {/* Toolbar Buttons */}
  <div className="flex items-center space-x-2 sm:space-x-3 ml-0 sm:ml-4 shrink-0 flex-wrap">
    <button
      onClick={() => handleAction('Assign')}
      className="text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-xs sm:text-sm"
    >
      Assign to me
    </button>
    <button
      onClick={() => handleAction('Mark as Done')}
      className="text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    >
      <Check className="h-4 w-4 sm:h-5 sm:w-5" />
    </button>
    <UserPlus
      onClick={() => handleAction('Add User')}
      className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    />
    <Bell
      onClick={() => handleAction('Snooze')}
      className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    />
    <Archive
      onClick={() => handleAction('Archive')}
      className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    />
    <Trash2
      onClick={() => handleAction('Delete')}
      className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    />
    <MoreHorizontal
      onClick={() => handleAction('More Options')}
      className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer text-gray-100 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
    />
  </div>
</div>


      {/* Body Description */}
      <div className="px-4 py-5 space-y-6">
        <p className="text-white-700 dark:text-white-300 leading-relaxed">
          This is a new conversation where you can collaborate with your team, write notes, or start a new email. You can also snooze, label, and archive it as you do with email conversations.
        </p>

        {/* Snooze and Unsnoozed Notes */}
        <div className="space-y-6">
          
          {/* Snoozed Note */}
          <div className="flex justify-center">
            <div className="space-y-1 text-center">
              <div className="text-xs text-white-500 dark:text-white-400">Mar 12, 12:45 PM</div>
              <div className="flex items-center  border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 space-x-2">
                <img
                  src="https://placehold.co/24x24"
                  alt="User Avatar"
                  className="w-5 h-5 rounded-full"
                />
                <span className="text-sm dark:text-white-200">You snoozed until</span>
                <span className="text-white-800 dark:text-white-100 text-xs px-2 py-0.5 rounded-md font-medium">
                  Wed Mar 12, 1:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Unsnoozed Note */}
          <div className="flex justify-center">
            <div className="space-y-1 text-center">
              <div className="text-xs text-white-500 dark:text-white-400">Mar 12, 1:00 PM</div>
              <div className="flex items-center  border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 space-x-2">
                <span className="text-sm dark:text-white-200">Conversation was unsnoozed for</span>
                <div className="flex items-center space-x-1">
                  <img
                    src="https://placehold.co/24x24"
                    alt="User Avatar"
                    className="w-5 h-5 rounded-full"
                  />
                  <span className=" text-white-800 dark:text-white-100 text-xs px-2 py-0.5 rounded-md font-medium">
                    You
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Private message */}
          <div className="flex items-start gap-2 p-4 relative">
      {/* User Avatar */}
      <img
        src="https://placehold.co/40x40"
        alt="User Avatar"
        className="w-8 h-8 rounded-full object-cover"
      />

      {/* Message + Options */}
      <div className="relative max-w-xs">
        {/* Message Bubble */}
        <div className="bg-blue-100 text-gray-800 px-4 py-2 rounded-lg rounded-bl-none">
          hii
        </div>

        {/* Emoji, Reply, and Options (Interactive icons) */}
        <div className="absolute top-0 right-0 flex items-center gap-1 translate-x-full ml-2">
          <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200">
            😊
          </button>
          <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200">
            ↩️
          </button>
          <button
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200"
            onClick={() => setShowMenu((prev) => !prev)} // Toggle dropdown on click
          >
            ⋯
          </button>
        </div>

        {/* Dropdown Menu (Conditional rendering) */}
        {showMenu && (
          <div className="absolute right-0 mt-8 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="py-1 text-sm text-gray-700">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Edit</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Copy</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Share</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Add task</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Delete</a>
              </li>
            </ul>
            {/* Timestamp */}
            <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
              Mar 17, 2025, 2:32 PM
            </div>
          </div>
        )}
      </div>
    </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col mt-35">
      {/* Your other conversation components and UI */}

      {/* Private Comments Component */}
      <PrivateComments />
    </div>
    </div>
  );
}
