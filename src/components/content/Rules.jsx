import React, { useState } from "react";

const Rules = () => {
  const [selectedTab, setSelectedTab] = useState("personal");
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [modal, setModal] = useState({ open: false, platform: "" });

  const toggleDropdown = (type) => {
    setDropdownOpen(dropdownOpen === type ? null : type);
  };
  const openModal = (platform) => {
    setModal({ open: true, platform });
    setDropdownOpen(null); // Close dropdown after clicking
  };

  const closeModal = () => {
    setModal({ open: false, platform: "" });
  };
  const rulesSections = [
    { title: "Incoming messages", desc: "Rules that apply to shared messages arriving in an inbox.", type: "incoming" },
    { title: "Outgoing messages", desc: "Rules that apply to shared messages sent from Missive.", type: "outgoing" },
    { title: "User actions", desc: "Rules that apply to user actions in shared conversations.", type: "actions" },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <input
          type="text"
          placeholder="Search rules..."
          className="w-full p-2 mb-4 bg-gray-700 text-sm rounded focus:outline-none"
        />

        {/* Personal Rules */}
        <div className="mb-4">
          <h3 className="text-xs text-gray-400">Personal rules</h3>
          <div
            className={`mt-2 p-2 flex items-center rounded cursor-pointer ${
              selectedTab === "personal" ? "bg-blue-600 text-white" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("personal")}
          >
            <div className="w-8 h-8 rounded-full bg-gray-600 mr-2"></div>
            <div>
              <p className="text-sm font-medium">You</p>
              <p className="text-xs text-gray-300">0 rules</p>
            </div>
          </div>
        </div>

        {/* Organization Rules */}
        <div>
          <h3 className="text-xs text-gray-400">Organization rules</h3>
          <div
            className={`mt-2 p-2 flex items-center rounded cursor-pointer ${
              selectedTab === "organization" ? "bg-blue-600 text-white" : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedTab("organization")}
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-600 text-white font-semibold">
              E
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">eve3ve</p>
              <p className="text-xs text-gray-300">0 rules</p>
            </div>
          </div>
        </div>

        <button className="mt-4 text-blue-400 text-sm hover:underline">
          Create rule
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-900">
        {/* Header */}
        <div className="bg-gray-800 p-4 rounded flex items-center space-x-4">
          {selectedTab === "personal" ? (
            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
          ) : (
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-600 text-white font-semibold">
              E
            </div>
          )}
          <div>
            <p className="text-sm font-medium">
              {selectedTab === "personal" ? "You" : "eve3ve"}
            </p>
            <p className="text-xs text-gray-400">Rules</p>
          </div>
        </div>

        {/* Notification Banner (Only for Organization) */}
        {selectedTab === "organization" && (
          <div className="mt-4 p-3 bg-yellow-600 text-sm text-gray-900 rounded">
            ⚠ You may trial rules for <strong>30 days</strong>, after which they will be disabled unless you upgrade to the <strong>Productive</strong> plan.
          </div>
        )}

        {/* Info Box */}
        <div className="mt-4 p-3 bg-gray-800 text-sm rounded">
          <p>
            {selectedTab === "personal"
              ? "Personal rules apply only to your private messages."
              : "Organization rules apply to shared conversations. Use personal rules for private conversations."}
          </p>
          <a href="#" className="text-blue-400 hover:underline">Learn more</a>
        </div>

        {/* Rules Sections */}
        {rulesSections.map((section) => (
          <div key={section.title} className="mt-6 relative">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <p className="text-xs text-gray-400">{section.desc}</p>
              </div>
              
              {/* Dropdown Button */}
              {(section.type === "incoming" || section.type === "outgoing") ? (
                <div className="relative">
                  <button
                    className="text-blue-400 text-sm flex items-center hover:underline"
                    onClick={() => toggleDropdown(section.type)}
                  >
                    ➕ New {section.title.toLowerCase()} rule
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen === section.type && (
                    <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-10">
                      {["WhatsApp", "Instagram", "Twitter"].map((platform) => (
                        <button
                          key={platform}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                          onClick={() => {
                            console.log(`Creating ${section.title} rule for ${platform}`);
                            setDropdownOpen(null);
                          }}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button className="text-blue-400 text-sm flex items-center hover:underline">
                  ➕ New {section.title.toLowerCase()} rule
                </button>
              )}
            </div>

            <div className="mt-2 p-3 bg-gray-800 text-sm rounded">
              No rules
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
