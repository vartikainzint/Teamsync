import { useState } from "react";

export default function OrganizationSettings() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ff0000");
  const [assignment, setAssignment] = useState("keep");
  const [emailOption, setEmailOption] = useState("copy");
  const [inactivity, setInactivity] = useState({ days: 0, hours: 0, minutes: 0 });

  return (
    <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-2 sm:p-3 md:p-4 space-y-10 text-white w-full">

      {/* General */}
      <div className="space-x-4">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">General</h3>
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-sm mb-2 text-sm">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Organization Name"
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-2 text-sm">Avatar</label>
            <button className="text-blue-400 font-medium px-2 py-1 hover:underline text-sm">
              Upload Image
            </button>
          </div>
        </div>
      </div>

      {/* Personal Options */}
      <div className="space-x-4">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Personal Options</h3>
        <p className="text-gray-400 text-sm">These options are personal and only affect you.</p>

        <div className="space-y-4">
          <div>
            <label className="block font-medium text-sm mb-2 text-sm">Conversations Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-16 h-12 rounded-lg border border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium text-sm">Assignment</label>
            <div className="space-y-2">
              {["keep", "remove"].map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value={option}
                    checked={assignment === option}
                    onChange={() => setAssignment(option)}
                  />
                  {option === "keep" ? "Keep in my Inbox" : "Remove from my Inbox"}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Organization Options */}
      <div className="space-x-4">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Organization Options</h3>
        <p className="text-gray-400 text-sm">These settings affect all users.</p>

        <div className="space-y-2">
          <label className="block font-medium text-sm">Emails Sent to Multiple Teams</label>
          <div className="space-y-2">
            {["copy", "single"].map((option) => (
              <label key={option} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value={option}
                  checked={emailOption === option}
                  onChange={() => setEmailOption(option)}
                />
                {option === "copy"
                  ? "Copy in each team inbox (duplicate conversations)"
                  : "Single conversation in one team inbox"}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="space-x-4">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Schedule</h3>

        <div>
          <label className="block font-medium text-sm mb-2 text-sm">Business Hours</label>
          <p className="text-gray-500 italic text-sm">[Business hours selector coming soon]</p>
        </div>

        <div>
          <label className="block font-medium text-sm mb-3">Inactivity Period</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="number"
              min="0"
              value={inactivity.days}
              onChange={(e) => setInactivity({ ...inactivity, days: e.target.value })}
              placeholder="Days"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500"
            />
            <input
              type="number"
              min="0"
              value={inactivity.hours}
              onChange={(e) => setInactivity({ ...inactivity, hours: e.target.value })}
              placeholder="Hours"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500"
            />
            <input
              type="number"
              min="0"
              value={inactivity.minutes}
              onChange={(e) => setInactivity({ ...inactivity, minutes: e.target.value })}
              placeholder="Minutes"
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="space-y-4 border-t border-gray-700 pt-6">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2 text-red-500">Delete Organization</h3>
        <p className="text-gray-400">Permanently remove this organization and all its data.</p>
        <button className="text-blue-400 font-medium px-2 py-1 hover:underline">
          Delete Organization
        </button>
      </div>
    </div>
  );
}
