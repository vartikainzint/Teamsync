import React, { useState } from "react";
import { X, User } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { inviteUser } from '../Redux/features/slice/inviteSlice';
import { toast } from 'react-toastify';
const InviteUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const dispatch = useDispatch();
  const { loading, successMessage, error } = useSelector((state) => state.invite);
  const selectedOrganizationId = useSelector((state) => state.org.selectedOrganizationId);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = () => {
    if (!email) return alert("Please enter an email.");
    dispatch(inviteUser({ email, organizationId: selectedOrganizationId, role: isAdmin ? "admin" : "user" }))
      .then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          toast.success("Invitation sent successfully!");
          setEmail("");
          setFirstName("");
          setLastName("");
          setIsAdmin(false);
          setTimeout(() => {
            onClose();
          }, 1500);
        } else {
          toast.error("Failed to send invite. Please try again.");
        }
      });
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-md z-50">
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
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 bg-transparent border-b border-gray-600 text-white outline-none p-1 text-sm placeholder-gray-400"
            />
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 bg-transparent border-b border-gray-600 text-white outline-none p-1 text-sm placeholder-gray-400"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-gray-600 text-white outline-none p-1 mt-3 text-sm placeholder-gray-400"
          />
        </div>

        {/* Admin Permissions Toggle */}
        <div className="bg-[#232425] p-3 rounded-lg mb-3 flex justify-between items-center cursor-pointer">
          <div>
            <p className="text-sm">Give admin permissions</p>
            <span className="text-gray-500 text-xs">
              Admins can manage all organization settings.{" "}
              <a href="#" className="text-blue-400">Learn more</a>
            </span>
          </div>
          <input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
            className="toggle-checkbox"
          />
        </div>

        {/* Display success or error */}
        {successMessage && <p className="text-green-500 text-sm mb-2">{successMessage}</p>}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 text-gray-400 bg-[#232425] rounded-md">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {loading ? 'Sending...' : 'Send invite'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteUserModal;
