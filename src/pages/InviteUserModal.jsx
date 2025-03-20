import React from "react";
import { X, User } from "lucide-react";

const InviteUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-20 backdrop-blur-md z-50">
      <div className="bg-[#1B1C1D] p-6 rounded-lg shadow-lg w-[400px] text-white relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-200">
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold mb-1">
          Invite new user to <span className="font-bold">inzint</span>
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          An email will be sent with a link to join your organization.
        </p>

        {/* User Icon */}
        <div className="flex items-center mb-3">
          <User size={18} className="text-gray-400 mr-2" />
        </div>

        {/* Input Fields */}
        <div className="bg-[#232425] p-3 rounded-lg mb-3">
          <div className="flex space-x-2">
            <input type="text" placeholder="First name" className="flex-1 bg-transparent border-b border-gray-600 text-white outline-none p-1 text-sm placeholder-gray-400" />
            <input type="text" placeholder="Last name" className="flex-1 bg-transparent border-b border-gray-600 text-white outline-none p-1 text-sm placeholder-gray-400" />
          </div>
          <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-600 text-white outline-none p-1 mt-3 text-sm placeholder-gray-400" />
        </div>

        {/* Toggle Options */}
        <div className="bg-[#232425] p-3 rounded-lg mb-3 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-sm">Copy settings from another user</p>
            <span className="text-gray-500 text-xs">Can be customized in next steps.</span>
          </div>
          <input type="checkbox" className="toggle-checkbox" />
        </div>

        <div className="bg-[#232425] p-3 rounded-lg mb-3 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-sm">Give admin permissions</p>
            <span className="text-gray-500 text-xs">
              Admins can manage all organization settings.{" "}
              <a href="#" className="text-blue-400">Learn more</a>
            </span>
          </div>
          <input type="checkbox" className="toggle-checkbox" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 text-gray-400 bg-[#232425] rounded-md">
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Send invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteUserModal;