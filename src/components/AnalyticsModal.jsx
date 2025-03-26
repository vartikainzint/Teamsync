import React, { useState } from "react";
import { X } from "lucide-react";

const AnalyticsModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-md z-50">
      <div className="bg-gray-900 text-white w-full sm:w-3/4 h-auto sm:h-5/6 rounded-lg shadow-lg flex flex-col sm:flex-row p-0">
        {/* Sidebar */}
        <aside className="w-full sm:w-1/4 bg-gray-800 p-4 border-b sm:border-r border-gray-700">
          <h2 className="text-sm font-bold mb-4">Analytics</h2>
          <ul className="space-y-2">
            {["Overview", "Users", "Teams", "Accounts", "Labels"].map((tab) => (
              <li
                key={tab}
                className={`p-1 rounded-md cursor-pointer text-sm ${
                  activeTab === tab ? "bg-blue-500" : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{activeTab}</h2>
            <button onClick={onClose} className="text-gray-400 text-sm hover:text-gray-200">
              <X size={24} />
            </button>
          </div>

          {/* Filters */}
          <div className="mt-4 flex justify-between items-center bg-gray-800 p-3 rounded-md text-sm">
            <span>Last 7 days</span>
            <div className="flex items-center space-x-3">
              <button className="border px-3 py-1 rounded-md border-gray-600 bg-gray-700 hover:bg-gray-600">
                Everyone
              </button>
              <button className="border px-3 py-1 rounded-md border-gray-600 bg-gray-700 hover:bg-gray-600">
                Team inboxes
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-6">
            {activeTab === "Overview" && (
              <div>
                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-gray-400 text-sm">First Reply Time</h3>
                    <p className="text-3xl font-bold">0s</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-gray-400 text-sm">Reply Time</h3>
                    <p className="text-3xl font-bold">0s</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-gray-400 text-sm">Handle Time</h3>
                    <p className="text-3xl font-bold">0s</p>
                  </div>
                </div>

                {/* Messages Stats */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-gray-400 text-sm">Messages Received</h3>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-md">
                    <h3 className="text-gray-400 text-sm">Messages Sent</h3>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Users" && (
              <div className="bg-gray-800 p-6 rounded-md">
                <h3 className="text-sm font-semibold">User Analytics</h3>
                <p className="text-gray-400 text-sm mt-2">No user data available yet.</p>
              </div>
            )}

            {activeTab === "Teams" && (
              <div className="bg-gray-800 p-6 rounded-md">
                <h3 className="text-sm font-semibold">Team Analytics</h3>
                <p className="text-gray-400 text-sm mt-2">No team data available yet.</p>
              </div>
            )}

            {activeTab === "Accounts" && (
              <div className="bg-gray-800 p-6 rounded-md">
                <h3 className="text-sm font-semibold">Account Analytics</h3>
                <p className="text-gray-400 text-sm mt-2">No account data available yet.</p>
              </div>
            )}

            {activeTab === "Labels" && (
              <div className="bg-gray-800 p-6 rounded-md">
                <h3 className="text-sm font-semibold">Label Analytics</h3>
                <p className="text-gray-400 text-sm mt-2">No label data available yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Parent Component to trigger modal
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Open Analytics
      </button>
      <AnalyticsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AnalyticsModal;
