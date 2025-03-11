import { useState } from "react";

export default function OrganizationSettings() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#ff0000");
  const [assignment, setAssignment] = useState("keep");
  const [emailOption, setEmailOption] = useState("copy");
  const [inactivity, setInactivity] = useState({ days: 0, hours: 0, minutes: 0 });

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-10 space-y-10 text-white">

      {/* General */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">General</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Organization Name"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Avatar</label>
            <button className="text-blue-400 font-medium px-2 py-1 hover:underline">
              Upload Image
            </button>
          </div>
        </div>
      </div>

      {/* Personal Options */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Personal Options</h2>
        <p className="text-gray-400 text-sm">These options are personal and only affect you.</p>

        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-2">Conversations Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-16 h-12 rounded-lg border border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Assignment</label>
            <div className="space-y-2">
              {["keep", "remove"].map((option) => (
                <label key={option} className="flex items-center gap-2">
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
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Organization Options</h2>
        <p className="text-gray-400 text-sm">These settings affect all users.</p>

        <div className="space-y-2">
          <label className="block font-medium">Emails Sent to Multiple Teams</label>
          <div className="space-y-2">
            {["copy", "single"].map((option) => (
              <label key={option} className="flex items-center gap-2">
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
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Schedule</h2>

        <div>
          <label className="block font-medium mb-2">Business Hours</label>
          <p className="text-gray-500 italic text-sm">[Business hours selector coming soon]</p>
        </div>

        <div>
          <label className="block font-medium mb-3">Inactivity Period</label>
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
        <h2 className="text-2xl font-semibold text-red-500">Delete Organization</h2>
        <p className="text-gray-400">Permanently remove this organization and all its data.</p>
        <button className="text-blue-400 font-medium px-2 py-1 hover:underline">
          Delete Organization
        </button>
      </div>
    </div>
  );
}
