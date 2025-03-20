import React from "react";
import { Settings } from "lucide-react";

const IntegrationSettings = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-800 p-8 rounded-2xl text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mx-auto">
          <Settings className="text-2xl text-gray-500" />
        </div>
        <h3 className="text-sm font-semibold mt-4">You have no integrations</h3>
        <p className="text-gray-500 mt-1">Create or activate integrations with a few clicks</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
        Add an integration
        </button>
      </div>
    </div>
  );
};

export default IntegrationSettings;
