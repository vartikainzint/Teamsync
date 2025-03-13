import React from "react";
import { Search } from "lucide-react";

const ChatLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-200 bg-white flex flex-col shadow-md">
        {/* Search bar */}
        <div className="flex items-center p-2">
              <div className="flex items-center px-4 py-2 rounded-lg bg-gray-100 w-full">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 w-full outline-none bg-transparent"
                />
              </div>
            </div>

        {/* Rooms/Chats List */}
        <div className="flex-1 overflow-y-auto">
          <ul>
            {/* Active Chat */}
            <li className="p-4 cursor-pointer bg-blue-100 hover:bg-blue-200 transition">
              <div className="font-semibold text-gray-800">Org name</div>
              <div className="text-sm text-gray-600">General room</div>
            </li>

            {/* Drafts */}
            <li className="p-4 cursor-pointer hover:bg-gray-100 transition">
              <div className="font-medium text-gray-700">No subject <span className="text-xs text-gray-500">(Draft)</span></div>
              <p className="text-xs text-gray-400 truncate">This message has no content</p>
            </li>
            <li className="p-4 cursor-pointer hover:bg-gray-100 transition">
              <div className="font-medium text-gray-700">New conversation</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Chat Content */}
      <div className="w-2/3 flex flex-col bg-gray-50">
        {/* Header */}
        <div className="p-6 border-b bg-white shadow-sm">
          <h2 className="text-xl font-bold text-gray-800">General room</h2>
          <p className="text-sm text-gray-500 mt-1">
            Welcome to the general chat room for Org name! Connect, share, and engage
            with your team beyond emails. Enjoy the conversation!
          </p>
        </div>

        {/* Chat messages area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Example Messages */}
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 px-4 py-2 rounded-lg shadow-sm">
              <p className="text-gray-800">Hello team! Let's start the discussion here.</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 justify-end">
            <div className="bg-green-100 px-4 py-2 rounded-lg shadow-sm">
              <p className="text-gray-800">Sure! I’m excited to collaborate.</p>
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="p-4 border-t bg-white">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Write a message..."
              className="flex-1 px-4 py-2  rounded focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <button className="p-2 bg-blue-500  rounded-full hover:bg-blue-600 transition shadow">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-9.6-5.6a1 1 0 00-1.505.874v11.116a1 1 0 001.505.874l9.6-5.6a1 1 0 000-1.732z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
