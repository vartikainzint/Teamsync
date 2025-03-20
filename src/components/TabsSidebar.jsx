export default function TabsSidebar({ activeTab, setActiveTab }) {
  const sections = [
    {
      title: "Me",
      tabs: ["Profile", "Preferences", "Login & Security"],
    },
    {
      title: "Connect",
      tabs: ["Accounts", "Calendars", "Integrations", "API"],
    },
    {
      title: "Work",
      tabs: ["Organizations", "Users", "Teams", "Labels", "Rules", "Signatures"],
    },
    {
      title: null,
      tabs: ["Billing"],
    },
    {
      title: null,
      tabs: ["Rewards 🪙", "Download apps", "Help & Feedback"],
    },
  ];

  return (
    <div className="p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 h-full">
      {sections.map((section, idx) => (
        <div key={idx} className="mb-4">
          {section.title && (
            <div className="text-gray-500 uppercase text-xs mb-2 px-2">
              {section.title}
            </div>
          )}
          {section.tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-2 rounded-lg cursor-pointer mb-1 ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              } flex items-center justify-between`}
            >
              {tab}
              {tab === "Users" && (
                <span className="text-gray-400 ml-2">+</span> // Icon for "Users"
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
