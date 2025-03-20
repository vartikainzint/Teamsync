import { useState } from "react";

export default function SetStatusModal({ isOpen, onClose }) {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [customStatus, setCustomStatus] = useState("");
  const [outOfOffice, setOutOfOffice] = useState(false);

  const statusOptions = [
    { label: "Available", icon: "✅" },
    { label: "Busy", icon: "⛔" },
    { label: "Do not disturb", icon: "🚫" },
    { label: "Be right back", icon: "🕒" },
    { label: "Appear away", icon: "🌙" },
    { label: "Appear offline", icon: "⚪" },
    { label: "Custom", icon: "✍️" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-md text-white">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">Set your status</h2>

        {/* Status options - no scroll, fixed height */}
        <div className="space-y-2 mb-6">
          {statusOptions.map((status, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedStatus(status.label)}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition ${
                selectedStatus === status.label ? "bg-gray-800" : "bg-gray-700"
              }`}
            >
              <span className="text-lg">{status.icon}</span>
              <span className="font-medium">{status.label}</span>
            </div>
          ))}
        </div>

        {/* Custom status input */}
        {selectedStatus === "Custom" && (
          <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 mb-6 bg-gray-800">
            <input
              type="text"
              placeholder="Enter custom status..."
              value={customStatus}
              onChange={(e) => setCustomStatus(e.target.value)}
              className="w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>
        )}

        {/* Out of office toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Out of office</span>
            <span
              className="text-gray-400 text-sm cursor-help"
              title="Let others know you are out of office."
            >
              ?
            </span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={outOfOffice}
              onChange={() => setOutOfOffice(!outOfOffice)}
            />
            <div className="w-11 h-6 bg-gray-600 peer-checked:bg-blue-500 rounded-full transition-all duration-300"></div>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              const finalStatus = selectedStatus === "Custom" ? customStatus : selectedStatus;
              console.log("Selected Status:", finalStatus, "Out of office:", outOfOffice);
              onClose(); // Trigger close
            }}
            className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
