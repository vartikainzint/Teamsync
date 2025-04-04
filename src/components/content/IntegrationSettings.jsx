import React, { useState } from "react";
import { Settings, Briefcase, MessageSquare, ShoppingCart, Database, Cloud } from "lucide-react";

const integrations = [
  { category: "Project Management", name: "Asana", details: "Manage tasks and projects easily.", icon: <Briefcase /> },
  { category: "Project Management", name: "ClickUp", details: "All-in-one productivity tool.", icon: <Briefcase /> },
  { category: "Communication", name: "Slack", details: "Team communication and collaboration.", icon: <MessageSquare /> },
  { category: "CRM", name: "HubSpot", details: "Customer relationship management.", icon: <Database /> },
  { category: "CRM", name: "Pipedrive", details: "Sales CRM and pipeline management.", icon: <Database /> },
  { category: "eCommerce", name: "Shopify", details: "Build and manage online stores.", icon: <ShoppingCart /> },
  { category: "Storage", name: "Google Drive", details: "Cloud storage for files and documents.", icon: <Cloud /> }
];

const categories = ["All", "Project Management", "Communication", "CRM", "eCommerce", "Storage"];

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
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-800 p-8 rounded-2xl text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mx-auto">
          <Settings className="text-2xl text-gray-500" />
        </div>
        <h3 className="text-sm font-semibold mt-4">You have no integrations</h3>
        <p className="text-gray-500 mt-1">Create or activate integrations with a few clicks</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
          onClick={() => setIsModalOpen(true)}
        >
          Add an integration
        </button>
      </div>
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="w-4/5 max-w-5xl bg-gray-900 rounded-lg flex shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-1/5 bg-gray-900 p-4 overflow-y-auto">
              <h2 className="text-white text-lg font-semibold mb-4">Integrations</h2>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left p-2 text-sm text-white hover:bg-gray-700 rounded-md ${
                    selectedCategory === category ? "bg-gray-700" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="w-2/5 bg-gray-800 p-4 overflow-y-auto border-l border-gray-700">
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
                    className={`text-sm p-2 text-white rounded-md cursor-pointer  flex items-center gap-3 ${
                      selectedIntegration?.name === integration.name ? "bg-gray-600" : ""
                    }`}
                    onClick={() => setSelectedIntegration(integration)}
                  >
                    <span className="text-xl">{integration.icon}</span> {integration.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-2/5 bg-gray-900 p-6 text-white flex flex-col items-center justify-center border-l border-gray-700">
              {selectedIntegration ? (
                <>
                  <div className="text-4xl mb-4">{selectedIntegration.icon}</div>
                  <h2 className="text-lg font-semibold">{selectedIntegration.name}</h2>
                  <p className="mt-2 text-center max-w-xs">{selectedIntegration.details}</p>
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
