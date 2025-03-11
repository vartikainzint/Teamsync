export default function TabsSidebar({ activeTab, setActiveTab }) {
    const tabs = [
      "Profile",
      "Preferences",
      "Login & Security",
      "Accounts",
      "Calendars",
      "Integrations",
      "API",
      "Organizations",
      "Users",
      "Teams",
      "Labels",
      "Rules",
      "Signatures",
    ];
  
    return (
      <div className="w-1/4 border-r p-4 overflow-y-auto">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 rounded cursor-pointer mb-1 ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
    );
  }
  