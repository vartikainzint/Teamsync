import React, { useState } from "react";

const SupportPanel = () => {
  // Define tab states
  const [activeTab, setActiveTab] = useState("support");

  // ✅ Define roadmap tab state (Fixing the issue)
  const [roadmapTab, setRoadmapTab] = useState("feature_requests");

  // Content based on the active tab
  const tabContent = {
    support: (
      <div>
        <h3 className="text-sm font-semibold">Support</h3>
        <p className="text-gray-500">Help & Feedback</p>

        <div className="mt-4 p-3 border border-gray-300 rounded-lg bg-gray-800">
          <p>
            For frequently asked questions and general information, visit our{" "}
            <a href="#" className="text-blue-600">Help Center</a>.
          </p>
        </div>

        <div className="mt-4 p-3 border border-gray-300 rounded-lg bg-gray-800">
          <p>
            For any questions or issues,{" "}
            <a href="#" className="text-blue-600">email us</a>.
          </p>
        </div>

        <div className="mt-4 p-3 border border-gray-300 rounded-lg bg-gray-800">
          <p className="font-semibold text-gray-100">Current version</p>
          <p className="text-gray-200">v11.4.0</p>
        </div>
      </div>
    ),
    guides: (
      <div>
        <h3 className="text-sm font-semibold">Guides</h3>
        <p className="text-gray-500">Help & Feedback</p>

        {/* Guides Section */}
        <div className="mt-4 bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-700  font-semibold mb-2 text-sm">LEARN THE BASICS</p>
          <div className="grid grid-cols-2 gap-4">
            {/* Getting Started */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <span className="text-2xl mr-3">🎉</span>
              <p className="text-gray-700 font-medium text-sm">Getting Started</p>
            </div>

            {/* Email Sharing Configuration */}
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <span className="text-2xl mr-3">👥</span>
              <p className="text-gray-700 font-medium text-sm">Email Sharing Configuration</p>
            </div>
          </div>
        </div>
      </div>
    ),
    roadmap: (
      <div>
        <h3 className="text-sm font-semibold">Roadmap</h3>
        <p className="text-gray-500">Help & Feedback</p>

        {/* Roadmap Sub-Tabs */}
        <div className="flex mt-4 space-x-4 bg-gray-800 p-2 rounded-lg w-fit">
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              roadmapTab === "feature_requests"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 shadow"
            }`}
            onClick={() => setRoadmapTab("feature_requests")}
          >
            Feature requests
          </button>
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              roadmapTab === "integration_requests"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 shadow"
            }`}
            onClick={() => setRoadmapTab("integration_requests")}
          >
            Integration requests
          </button>
        </div>

        {/* Roadmap Content */}
        <div className="mt-4 bg-gray-800  border p-4 rounded-lg shadow-md">
          {roadmapTab === "feature_requests" ? (
            <p className="text-gray-500">List of Feature Requests...</p>
          ) : (
            <p className="text-gray-500">List of Integration Requests...</p>
          )}
        </div>
      </div>
    ),
  };

  return (
    <div className="flex min-h-screen bg-gray-800">
      {/* Sidebar (Tabs) */}
      <aside className="w-64 bg-gray-800 shadow-md p-4 border-r">
        {["support", "guides", "roadmap"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`block w-full text-left p-2 rounded-lg  text-sm
                        ${activeTab === tab ? "bg-blue-500 text-white" : "text-gray-100"}`}
          >
            {tab === "support" ? "Support" : tab === "guides" ? "Guides" : "Roadmap"}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-800 rounded-lg shadow-md p-6">
        {tabContent[activeTab]}
      </main>
    </div>
  );
};

export default SupportPanel;
