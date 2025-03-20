import React, { useState } from "react";

const CreateTeamSection = () => {
  const [showModal, setShowModal] = useState(false); // Create modal state
  const [teams, setTeams] = useState([
    { name: "Development Team", activeMembers: 5, observers: 2, status: "Active" },
    { name: "Marketing Team", activeMembers: 3, observers: 1, status: "Inactive" },
  ]);
  const [editingTeam, setEditingTeam] = useState(null); // Edit team state

  const openModal = () => {
    setShowModal(true);
    setEditingTeam(null); // Reset editing mode
  };
  const closeModal = () => setShowModal(false);

  const handleDeleteTeam = (index) => {
    const updatedTeams = [...teams];
    updatedTeams.splice(index, 1);
    setTeams(updatedTeams);
  };

  const openEditModal = (team, index) => {
    setEditingTeam({ ...team, index });
    setShowModal(true);
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      {/* Heading and Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-sm font-semibold">Teams</h1>
        <button
          onClick={openModal}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm"
        >
          Create Team
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg border border-gray-700 shadow-sm">
        <table className="min-w-full bg-gray-800">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-sm text-left">Team Name</th>
              <th className="px-6 py-3 text-sm font-semibold text-sm text-left">Active Members</th>
              <th className="px-6 py-3 text-sm font-semibold text-sm text-left">Observers</th>
              <th className="px-6 py-3 text-sm font-semibold text-sm text-left">Status</th>
              <th className="px-6 py-3 text-sm font-semibold text-sm text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="px-6 py-4 text-sm">{team.name}</td>
                <td className="px-6 py-4 text-sm">{team.activeMembers}</td>
                <td className="px-6 py-4 text-sm">{team.observers}</td>
                <td className="px-6 py-4 text-sm">{team.status}</td>
                <td className="px-6 py-4 text-sm flex gap-3 justify-center">
                  <button
                    onClick={() => openEditModal(team, index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTeam(index)}
                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Overlay and Content */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="w-full max-w-4xl bg-gray-800 border border-gray-600 rounded-xl p-8 space-y-6 relative shadow-lg">
            <h2 className="text-2xl font-semibold">
              {editingTeam ? "Edit Team" : "Create New Team"}
            </h2>

            {/* Active Members and Observers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Active Members</label>
                <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <option value="">Select Active Members</option>
                  <option>Member 1</option>
                  <option>Member 2</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Observers</label>
                <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <option value="">Select Observers</option>
                  <option>Observer 1</option>
                  <option>Observer 2</option>
                </select>
              </div>
            </div>

            {/* Team Inbox and Chat Room */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Team Inbox", "Chat Room"].map((label, idx) => (
                <div key={idx}>
                  <label className="block text-sm mb-2">{label}</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="radio" name={label} className="accent-blue-500" /> Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" name={label} className="accent-blue-500" /> No
                    </label>
                  </div>
                </div>
              ))}
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Sidebar Customization</label>
                <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <option>Show team space (Default)</option>
                  <option>Only show team inbox</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Business Hours</label>
                <input
                  type="text"
                  placeholder="Use organization business hours"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                />
              </div>
            </div>

            {/* Inactivity and Mention */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Inactivity Period</label>
                <input
                  type="text"
                  placeholder="Use organization inactivity period"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Mention Options</label>
                <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <option>Add only active members</option>
                  <option>Add active and observers</option>
                </select>
              </div>
            </div>

            {/* Assignment */}
            <div>
              <label className="block text-sm mb-2">Assignment Options</label>
              <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white">
                <option>Assign to user</option>
                <option>Leave in inbox</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={closeModal}
                className="px-5 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                {editingTeam ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTeamSection;
