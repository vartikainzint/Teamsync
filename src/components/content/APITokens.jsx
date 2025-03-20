import React, { useState } from "react";
import { PlusCircle, RefreshCcw, Clipboard } from "lucide-react";

const APITokens = () => {
  const [activeTab, setActiveTab] = useState("tokens");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(text);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen bg-gray-800">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-2 shadow-md">
        <ul>
          <li
            className={`mb-2 p-2 text-sm rounded-lg cursor-pointer ${activeTab === "tokens" ? "bg-blue-900 text-white" : "hover:bg-gray-200"}`}
            onClick={() => setActiveTab("tokens")}
          >
            Tokens
          </li>
          <li
            className={`mb-2 p-2 rounded-lg text-sm cursor-pointer ${activeTab === "resourceIds" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            onClick={() => setActiveTab("resourceIds")}
          >
            Resource IDs
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-0">
        {activeTab === "tokens" ? (
          <div>
            {/* Tokens View */}
            <div className="bg-gray-800 p-4 rounded-2xl shadow-md mb-6">
              <h2 className="text-sm font-semibold">Tokens</h2>
              <p className="text-gray-500 text-sm">API</p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 bg-gray-800">
                <p className="text-gray-100 text-sm">
                  The API lets you enrich applications with external integrations.
                </p>
                <a href="#" className="text-blue-500 font-medium">Documentation</a>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium mb-2">Personal API tokens</h3>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 border rounded-lg hover:bg-gray-800 transition">
                    <RefreshCcw size={16} /> Refresh
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
                    onClick={() => setIsModalOpen(true)}
                  >
                    New token
                  </button>
                </div>
              </div>
              <div className="p-2 bg-gray-800 rounded-lg text-gray-100 border">
                No API tokens.
              </div>
            </div>
          </div>
        ) : (
          <div>
            {/* Resource IDs View */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
              <h2 className="font-semibold text-sm">Resource IDs</h2>
              <p className="text-gray-500 text-sm">API</p>
              <div className="mt-4">
                {[ 
                  { label: "Organizations", id: "746cd57f-b9b6-4dd3-87db-3cd396a7aebd", name: "eve3ve" },
                  { label: "Users", id: "7940c809-0bf0-4f63-a542-f1c06e50c6a4", name: "Test two" },
                  { label: "Teams", id: "e050c0e2-9ff9-423e-97e6-22f408c46088", name: "team one" },
                  { label: "Organization labels", id: "79a554ff-8ac6-471c-ad23-d106b598c76e", name: "test" }
                ].map((item) => (
                  <div key={item.id} className="mb-4">
                    <h3 className="text-sm font-medium mb-2">{item.label}</h3>
                    <div 
                      className="flex items-center p-2 bg-gray-800 border rounded-md cursor-pointer hover:bg-gray-900 relative"
                    >
                      <Clipboard 
                        size={16} 
                        className="mr-2 cursor-pointer" 
                        onClick={() => handleCopy(item.id)}
                      />
                      {item.id} {item.name}
                      {copiedId === item.id && (
                        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded-md">Copied!</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-96">
            <h2 className="text-lg font-semibold">New token</h2>
            <input
              type="text"
              placeholder="Description"
              className="w-full mt-3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APITokens;