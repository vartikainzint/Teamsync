import React, { useState } from "react";
import { FaLock, FaUsers } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Rules = () => {
    const [isOpen, setIsOpen] = useState(false);

  const [selectedTab, setSelectedTab] = useState("personal");
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [modal, setModal] = useState({ open: false, platform: "" });
  const [conditions, setConditions] = useState([{ field: "From", operator: "is", value: "" }]);
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("shared"); // Default to "Shared"


  const toggleDropdown = (type) => {
    setDropdownOpen(dropdownOpen === type ? null : type);
  };
  const openModal = (platform) => {
    setModal({ open: true, platform });
    setDropdownOpen(null);
  };

  const closeModal = () => {
    setModal({ open: false, platform: "" });
  };
  const updateCondition = (index, key, value) => {
    const newConditions = [...conditions];
    newConditions[index][key] = value;
    setConditions(newConditions);
  };

  const addCondition = () => {
    setConditions([...conditions, { field: "From", operator: "is", value: "" }]);
  };

  const removeCondition = (index) => {
    const newConditions = conditions.filter((_, i) => i !== index);
    setConditions(newConditions);
  };
  const rulesSections = [
    { title: "Incoming messages", desc: "Rules that apply to shared messages arriving in an inbox.", type: "incoming" },
    { title: "Outgoing messages", desc: "Rules that apply to shared messages sent from TeamSync.", type: "outgoing" },
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

        <div className="text-center mt-10">
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Create Rule
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-gray-800 w-[500px] rounded-lg shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose size={20} />
            </button>

            {/* Modal Content */}
            <h2 className="text-lg font-semibold text-center mb-4">
              Should this rule trigger on shared or personal conversations?
            </h2>

            {/* Options (Radio Buttons) */}
            <div className="space-y-3">
              <label className="border text-left  rounded-lg p-3 flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="conversationType"
                  value="personal"
                  checked={selectedOption === "personal"}
                  onChange={() => setSelectedOption("personal")}
                  className="w-5 h-5 text-blue-600"
                />
                <FaLock className="text-gray-600" />
                <div>
                  <h3 className="font-semibold">Personal conversations</h3>
                  <p className="text-sm text-gray-100">
                    Rule will only trigger on private conversations.
                  </p>
                </div>
              </label>

              <label className="border text-left  rounded-lg p-3 flex items-center gap-3 cursor-pointer bg-gray-800">
                <input
                  type="radio"
                  name="conversationType"
                  value="shared"
                  checked={selectedOption === "shared"}
                  onChange={() => setSelectedOption("shared")}
                  className="w-5 h-5 text-blue-600"
                />
                <FaUsers className="text-gray-600" />
                <div>
                  <h3 className="font-semibold">Shared conversations</h3>
                  <p className="text-sm text-gray-100">
                    Rule will trigger on conversations linked to your
                    organization (shared).
                  </p>
                </div>
              </label>
            </div>

            {/* Dropdown */}
            <div className="mt-4">
              <label className="text-sm text-gray-100">
                When should rule trigger?
              </label>
              <select className="w-full mt-1 border px-3 py-2 rounded-md">
                <option value="-">Trigger on: -</option>
              </select>
            </div>

            {/* Button */}
            <button
              className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
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
                        onClick={() => openModal(platform)}
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
      {modal.open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 w-full">
        <div className="bg-gray-800 w-[500px] p-6 rounded-lg w-96 shadow-lg relative z-50">
            <h2 className="text-lg font-bold text-white">Incoming email rule for {modal.platform}</h2>
            <input
              type="text"
              placeholder="A few words describing this rule..."
              className="w-full p-2 mt-2 bg-gray-700 text-sm rounded focus:outline-none text-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-white">Conditions</h3>
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center mt-2 space-x-2">
                  <select
                    className="bg-gray-700 text-white p-2 rounded"
                    value={condition.field}
                    onChange={(e) => updateCondition(index, "field", e.target.value)}
                  >
                    <option>From</option>
                  </select>
                  <select
                    className="bg-gray-700 text-white p-2 rounded"
                    value={condition.operator}
                    onChange={(e) => updateCondition(index, "operator", e.target.value)}
                  >
                    <option>is</option>
                  </select>
                  <input
                    type="text"
                    className="bg-gray-700 text-white p-2 rounded flex-1"
                    value={condition.value}
                    onChange={(e) => updateCondition(index, "value", e.target.value)}
                  />
                  <button className="bg-red-600 text-white px-2 py-1 rounded" onClick={() => removeCondition(index)}>-</button>
                </div>
              ))}
              <button className="bg-green-600 text-white px-4 py-2 mt-2 rounded" onClick={addCondition}>Add Condition</button>
              {conditions.length > 1 && (
                <p className="text-sm text-gray-400 mt-2">And</p>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold text-white">Actions</h3>
              <select className="bg-gray-700 text-white p-2 rounded w-full mt-2">
                <option>Add label(s)</option>
              </select>
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rules;
