import React, { useState } from "react";
import { X } from "lucide-react";

const ResponsesComponent = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [responses, setResponses] = useState({
    All: ["All Response 1", "All Response 2"],
    Personal: ["Personal Response 1", "Personal Response 2"],
  });

  const handleDelete = (response) => {
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses };
      updatedResponses[activeTab] = updatedResponses[activeTab].filter(
        (res) => res !== response
      );
      return updatedResponses;
    });
    setSelectedResponse(null);
  };

  return (
    <div 
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 ${isOpen ? 'block' : 'hidden'}`}
      onClick={onClose}
    >
      <div 
        className="w-full max-w-6xl h-[90vh] overflow-hidden bg-gray-900 text-white shadow-lg relative rounded-lg flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon */}
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Sidebar with Tabs */}
        <div className="w-1/5 bg-gray-800 p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-2">Responses</h2>
          <div className="flex flex-col mb-2">
            <button 
              className={`p-2 mb-2 text-left ${activeTab === "All" ? "bg-blue-600 text-white" : "text-gray-300"}`}
              onClick={() => setActiveTab("All")}
            >
              All
            </button>
            <button 
              className={`p-2 text-left ${activeTab === "Personal" ? "bg-blue-600 text-white" : "text-gray-300"}`}
              onClick={() => setActiveTab("Personal")}
            >
              Personal
            </button>
          </div>
          <button 
            className="mt-auto bg-blue-500 p-2 rounded text-white text-sm"
            onClick={() => setSelectedResponse(null)}
          >
            Create new response
          </button>
        </div>

        {/* Response List */}
        <div className="w-1/4 bg-gray-700 p-4 flex flex-col overflow-y-auto">
          <h3 className="text-lg font-semibold mb-2">Response List</h3>
          <ul className="flex-1 overflow-y-auto">
            {responses[activeTab].map((response, index) => (
              <li 
                key={index} 
                className={`p-2 cursor-pointer flex justify-between items-center ${selectedResponse === response ? "bg-blue-600 text-white" : "text-gray-300"}`}
                onClick={() => setSelectedResponse(response)}
              >
                <span>{response}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mail Composer */}
        <div className="w-1/2 bg-gray-700 p-6 flex flex-col">
          {selectedResponse ? (
            <h3 className="text-lg font-semibold mb-3">{selectedResponse}</h3>
          ) : (
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 mb-3 bg-gray-800 text-white border border-gray-600 rounded"
            />
          )}

          <div className="bg-gray-800 p-3 flex flex-col">
            <label className="text-gray-400 mb-1">Personal</label>
            <select
              className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded"
              value={selectedRecipient}
              onChange={(e) => setSelectedRecipient(e.target.value)}
            >
              <option value="">Select Member or Team</option>
              <option value="member1">Member 1</option>
              <option value="member2">Member 2</option>
              <option value="team1">Team 1</option>
            </select>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 mt-2 bg-gray-900 text-white border border-gray-600 rounded"
            />

            {/* Replacing Editor with a normal textarea */}
            <textarea
              className="w-full p-2 mt-3 h-40 bg-gray-900 text-white border border-gray-600 rounded resize-none"
              placeholder="Type your message..."
            ></textarea>

            <div className="flex justify-end mt-3">
              <button className="bg-blue-500 p-2 rounded text-white">Send</button>
            </div>
          </div>

          {/* Action Buttons */}
          {selectedResponse && (
            <div className="flex justify-end mt-3 space-x-2">
              <button className="bg-yellow-500 p-2 rounded text-black">Edit</button>
              <button className="bg-red-500 p-2 rounded text-white" onClick={() => handleDelete(selectedResponse)}>Delete</button>
              <button className="bg-green-500 p-2 rounded text-white">Add</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsesComponent;
