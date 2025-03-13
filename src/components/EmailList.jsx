// components/EmailList.jsx
import { useState } from "react";
import { Search } from "lucide-react";

export default function EmailList({ conversations, setIsNewMail }) {
  return (
    <div className="w-full md:w-1/3 border-r border-gray-700 flex flex-col max-h-full">
      {/* Search Bar */}
      <div className="flex items-center p-2">
        <div className="flex items-center px-4 py-2 rounded-lg bg-gray-800 w-full">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full outline-none bg-transparent text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Welcome Message */}
      <div className="flex-1 overflow-auto">
        <div className="welcome-mail text-center py-4 px-4">
          <h2 className="text-xl font-semibold">Welcome to TeamSync</h2>
          <p className="text-sm text-gray-400 mt-2 mb-2">
            Connect an account to start managing your email, SMS, or social media.
          </p>
          <a
            href="#"
            className="mt-4 text-blue-500 font-semibold hover:underline block"
          >
            Connect an account
          </a>
          <p className="mt-2 text-gray-400 text-sm cursor-pointer hover:underline">
            I prefer just chatting with my team
          </p>
        </div>

        {/* Email List */}
        <div className="bg-gray-800">
          <p className="text-sm font-semibold px-4 py-2">This Week</p>
        </div>

        {conversations.map((conv) => (
          <div
            key={conv.id}
            className="p-3 border-b border-gray-700 hover:bg-gray-800 cursor-pointer"
          >
            <p className="font-semibold">{conv.user}</p>
            <p className="text-sm text-gray-400 truncate">{conv.message}</p>
            <p className="text-xs text-gray-500">{conv.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
