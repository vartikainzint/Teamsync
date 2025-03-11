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
    <div className="w-64 border-r p-4 overflow-y-auto h-screen space-y-4">
      {sections.map((section, idx) => (
        <div key={idx}>
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
                  : "hover:bg-gray-100 text-gray-700"
              } flex items-center justify-between`}
            >
              {tab}
              {tab === "Users" && (
                <span className="text-gray-400">+</span> // Icon as seen in Users
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
