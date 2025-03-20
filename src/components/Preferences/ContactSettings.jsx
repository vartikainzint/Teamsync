import { useState } from "react";
import { X } from "lucide-react";

export default function ContactModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewBookModalOpen, setIsNewBookModalOpen] = useState(false);
  const countryCodes = [
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "India", code: "+91" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "China", code: "+86" },
    { name: "Brazil", code: "+55" },
    { name: "South Africa", code: "+27" }
  ];

  return (
    <div className="bg-gray-900 p-6 min-h-screen flex flex-col text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Defaults Header */}
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2 mt-2">Defaults</h3>

        {/* Settings List */}
        <div className="bg-gray-800 rounded-lg  p-4">
          {/* Default Contact Book */}
          <div className="flex justify-between items-center pb-3">
            <span className="text-sm text-gray-300">Default contact book</span>
            <select className="border p-1 rounded bg-gray-800 text-sm">
              <option value="">Create a contact book first</option>
            </select>
          </div>

          {/* Default Phone Area Code */}
          <div className="flex justify-between items-center pt-3">
            <span className="text-sm text-gray-300">Default phone area code</span>
            <select className="border border-gray-300 p-1 rounded bg-gray-800 text-sm">
              {countryCodes.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code} ({country.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Open Modal Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 mt-4"
        >
          Open Contacts
        </button>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-gray-800 w-full max-w-md rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-3">
              <h2 className="text-lg font-semibold text-gray-00">Contacts</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contact Book Content */}
            <div className="flex flex-col items-center text-center mt-6">
              {/* Book Icon */}
              <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-xl">
                📖
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-00 mt-4">
                You have no contact books
              </h2>

              {/* Description */}
              <p className="text-sm text-gray-300">
                Create a private or shared contact book
              </p>

              {/* Create Contact Book Button */}
              <button
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                onClick={() => setIsNewBookModalOpen(true)}
              >
                Create a contact book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Contact Book Modal */}
      {isNewBookModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setIsNewBookModalOpen(false)}
        >
          <div
            className="bg-gray-800 w-full max-w-sm rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold text-gray-300">New contact book</h2>
            <label className="block text-sm text-gray-100 mt-4">Name</label>
            <input type="text" placeholder="e.g. Sales" className="w-full p-2 border rounded mt-1" />
            <label className="block text-sm text-gray-100 mt-4">Share this contact book with others?</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Choose users</option>
            </select>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-100">Exclude contacts from search results?</span>
              <input type="checkbox" className="toggle" />
            </div>
            <div className="flex justify-end mt-6 gap-2">
              <button
                className="px-4 py-2 border rounded text-gray-100"
                onClick={() => setIsNewBookModalOpen(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}