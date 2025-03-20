import { useState } from "react";
import { X } from "lucide-react";

export default function SignaturesUI() {
  const [selectedUser, setSelectedUser] = useState("You");
  const [isOpen, setIsOpen] = useState(false);

  const users = [
    { name: "You", image: "https://via.placeholder.com/40", signatures: 1 },
    { name: "eve3ve", image: "", signatures: 0 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 border-r p-4">
        <input
          type="text"
          placeholder="Search signatures..."
          className="w-full p-2 border rounded mb-4 text-sm"
        />
        <h3 className="text-xs text-gray-100 mb-2">Personal signatures</h3>
        {users.map((user) => (
          <div
            key={user.name}
            className={`flex items-center p-2 rounded cursor-pointer ${
              selectedUser === user.name ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedUser(user.name)}
          >
            {user.image ? (
              <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
            ) : (
              <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-full mr-2">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-medium text-sm">{user.name}</span>
              <span className="text-xs text-gray-400">{user.signatures} signature(s)</span>
            </div>
          </div>
        ))}
  <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mt-10"
      >
        Create signature
      </button>      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-800">
        <h2 className="text-lg font-semibold text-sm">{selectedUser} - Signatures</h2>
        <div className="mt-4 bg-gray-800 border p-4 rounded">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-100">Reusable signatures</span>
            <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Create signature
      </button>

          </div>
          <div className="mt-2 text-gray-400 text-sm">There are no reusable signatures.</div>
        </div>
      </div>
        {/* Modal Overlay */}
        {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 w-full">
          {/* Modal Content */}
          <div className="bg-gray-800 w-[600px] rounded-lg shadow-lg p-6 relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold">New Signature</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-100">
                <X size={20} />
              </button>
            </div>

            {/* User Info */}
            <div className="flex items-center mt-4">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">You</p>
                <p className="text-sm text-gray-100">New personal signature</p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="mt-4">
              <label className="text-sm text-gray-600">Description</label>
              <input
                type="text"
                placeholder='e.g. "Personal signature"'
                className="w-full p-2 border rounded mt-1"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Content</label>
              <textarea className="w-full p-2 border rounded mt-1" rows="4"></textarea>
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Options</label>
              <select className="w-full p-2 border rounded mt-1">
                <option>All sent emails</option>
              </select>
            </div>

            {/* Signature Preview */}
            <div className="mt-4 bg-gray-800 border p-3 rounded">
              <p className="text-gray-100">Message body.</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-100 px-4 py-2"
              >
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
