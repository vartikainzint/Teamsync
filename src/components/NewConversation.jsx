import { useState } from "react";
import { Bell, Archive, Trash2, MoreHorizontal, UserPlus, Check } from "lucide-react";

export default function EmailConversationCard() {
  const [subject, setSubject] = useState("Conversation");

  // Example action handler
  const handleAction = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="flex flex-col bg-gray dark:bg-gray-900 text-white-800 dark:text-white-200 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm max-w-3xl mx-auto">
      
      {/* Toolbar Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        
        {/* Subject Input */}
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject"
          className="text-lg font-medium focus:outline-none bg-transparent flex-grow dark:text-white-100"
        />

        {/* Toolbar Buttons */}
        <div className="flex items-center space-x-3 ml-4 shrink-0">
          <button
            onClick={() => handleAction('Assign')}
            className="text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200 text-sm"
          >
            Assign to me
          </button>
          <button
            onClick={() => handleAction('Mark as Done')}
            className="text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          >
            <Check className="h-5 w-5" />
          </button>
          <UserPlus
            onClick={() => handleAction('Add User')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <Bell
            onClick={() => handleAction('Snooze')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <Archive
            onClick={() => handleAction('Archive')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <Trash2
            onClick={() => handleAction('Delete')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <MoreHorizontal
            onClick={() => handleAction('More Options')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
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

        </div>
      </div>
    </div>
  );
}
