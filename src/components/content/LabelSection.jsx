import React, { useState } from "react";

const LabelSection = () => {
  const [showModal, setShowModal] = useState(false); // Create modal state
  const [teams, setLabels] = useState([
    { name: "Development Label", activeMembers: 5, observers: 2, status: "Active" },
    { name: "Marketing Label", activeMembers: 3, observers: 1, status: "Inactive" },
  ]);
  const [editingLabel, setEditingLabel] = useState(null); // Edit team state

  const openModal = () => {
    setShowModal(true);
    setEditingLabel(null); // Reset editing mode
  };
  const closeModal = () => setShowModal(false);

  const handleDeleteLabel = (index) => {
    const updatedLabels = [...teams];
    updatedLabels.splice(index, 1);
    setLabels(updatedLabels);
  };

  const openEditModal = (team, index) => {
    setEditingLabel({ ...team, index });
    setShowModal(true);
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      {/* Heading and Button */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-xl font-semibold text-white">
          I
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Organisation</h2>
          <p className="text-sm text-gray-400">Labels</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-8 leading-relaxed">
        Organization profiles are mostly used to populate variables in signatures. Please fill out the form below to update your organization's details.
      </p>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Labels</h1>
        <button
          onClick={openModal}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Create Label
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto rounded-lg border border-gray-700 shadow-sm">
        <table className="min-w-full bg-gray-800">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Label Name</th>
              <th className="px-6 py-3 text-center text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="px-6 py-4">{team.name}</td>
                <td className="px-6 py-4 flex gap-1 justify-center">
                  <button
                    onClick={() => openEditModal(team, index)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteLabel(index)}
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
          <div className="w-full max-w-xl bg-gray-800 border border-gray-600 rounded-xl p-8 space-y-6 relative shadow-lg">
            <h2 className="text-2xl font-semibold">
              {editingLabel ? "Edit Label" : "Create New Label"}
            </h2>

            {/* Active Members and Observers */}
              <div className="mb-2">
                <label className="block text-sm mb-2">Location</label>
                <select className="w-full p-1 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <option value="">Location</option>
                  <option>Location 1</option>
                  <option>Location 2</option>
                </select>
              </div>
                {/* Inactivity and Mention */}
              <div className="mb-2">
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full p-1 bg-gray-700 border border-gray-600 rounded-lg text-white"
                />
              </div>
              <div  className="mb-2">
                <label className="block text-sm mb-2">Description</label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full p-1 bg-gray-700 border border-gray-600 rounded-lg text-white"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm mb-2">Nested Number</label>
                <select className="w-full p-1 bg-gray-700 border border-gray-600 rounded-lg text-white">
                  <option></option>
                  <option>Add active and observers</option>
                </select>
              </div>

     
            {/* Assignment */}
            <div className="mb-2">
              <label className="block text-sm mb-2">Label is visible to</label>
              <select className="w-full p-1 bg-gray-700 border border-gray-600 rounded-lg text-white">
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
                {editingLabel ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LabelSection;
