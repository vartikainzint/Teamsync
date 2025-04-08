import React, { useState } from "react";
import { Settings, Briefcase, MessageSquare, ShoppingCart, Database, Cloud } from "lucide-react";

const integrations = [
  { category: "Project Management", name: "Asana", details: "Manage tasks and projects easily.", icon: <Briefcase /> },
  { category: "Project Management", name: "ClickUp", details: "All-in-one productivity tool.", icon: <Briefcase /> },
  { category: "Communication", name: "Slack", details: "Team communication and collaboration.", icon: <MessageSquare /> },
  { category: "CRM", name: "HubSpot", details: "Customer relationship management.", icon: <Database /> },
  { category: "CRM", name: "Pipedrive", details: "Sales CRM and pipeline management.", icon: <Database /> },
  { category: "eCommerce", name: "Shopify", details: "Build and manage online stores.", icon: <ShoppingCart /> },
  { category: "Storage", name: "Google Drive", details: "Cloud storage for files and documents.", icon: <Cloud /> },
  { category: "Automation", name: "Zapier", details: "Automate workflows and connect apps.", icon: <Cloud /> },
  { category: "AI", name: "OpenAI", details: "AI-driven solutions for various applications.", icon: <Cloud /> },
  { category: "Social & Fun", name: "Giphy", details: "Find and share GIFs easily.", icon: <Cloud /> },
  { category: "Meetings", name: "Zoom", details: "Video conferencing and online meetings.", icon: <Cloud /> },
  { category: "Payments", name: "Stripe", details: "Payment processing platform.", icon: <Cloud /> }
];

const categories = ["All", "Project Management", "Communication", "CRM", "eCommerce", "Storage", "Automation", "AI", "Social & Fun", "Meetings", "Payments"];

const IntegrationSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const filteredIntegrations = integrations.filter(
    (integration) =>
      (selectedCategory === "All" || integration.category === selectedCategory) &&
      integration.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="bg-gray-900 p-8 rounded-2xl text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 mx-auto">
          <Settings className="text-2xl text-gray-400" />
        </div>
        <h3 className="text-sm font-semibold mt-4">You have no integrations</h3>
        <p className="text-gray-400 mt-1">Create or activate integrations with a few clicks</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Add an integration
        </button>
      </div>
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-opacity-20 backdrop-blur-md z-50 flex justify-center items-center px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative bg-gray-800 text-white w-full h-full md:w-[90%] md:h-[90%] rounded-none md:rounded-xl shadow-2xl flex flex-col md:flex-row border border-gray-600 overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing on click inside
          >
            <div className="w-1/6 bg-gray-700 p-4 overflow-y-auto">
              <h2 className="text-white text-lg font-semibold mb-4">Integrations</h2>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left p-2 text-sm text-gray-300 hover:bg-gray-600 rounded-md ${
                    selectedCategory === category ? "bg-gray-600" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="w-2/6 bg-gray-800 p-4 overflow-y-auto border-l border-gray-600">
              <input
                type="text"
                placeholder="Search integrations..."
                className="w-full p-2 rounded bg-gray-700 text-white mb-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="grid grid-cols-1">
                {filteredIntegrations.map((integration) => (
                  <div
                    key={integration.name}
                    className={`text-sm p-2 text-white rounded-md cursor-pointer flex items-center gap-3 ${
                      selectedIntegration?.name === integration.name ? "bg-gray-600" : ""
                    }`}
                    onClick={() => setSelectedIntegration(integration)}
                  >
                    <span className="text-xl">{integration.icon}</span> {integration.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/6 bg-gray-900 p-6 text-white flex flex-col items-center justify-center border-l border-gray-600 shadow-lg">
              {selectedIntegration ? (
                <>
                  <div className="text-4xl mb-4 text-green-400">{selectedIntegration.icon}</div>
                  <h2 className="text-lg font-semibold">{selectedIntegration.name}</h2>
                  <p className="mt-2 text-center max-w-xs text-gray-400">{selectedIntegration.details}</p>
                  <a href="#" className="mt-4 text-blue-400 font-semibold hover:underline">Learn More</a>
                </>
              ) : (
                <p className="text-gray-400">Select an integration to see details</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationSettings;
