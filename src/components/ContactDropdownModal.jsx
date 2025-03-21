import React, { useState, useEffect, useRef } from "react";

const ContactDropdownModal = ({ isOpen, onClose }) => {
  const actions = [{ name: "Create a contact book", image: "/mnt/data/image.png" }];
  const modalRef = useRef(null);
  const [isNewBookModalOpen, setIsNewBookModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Enter") {
        alert(`Selected: ${actions[0].name}`);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50" onClick={handleOutsideClick}>
        <div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modal-title"
          className="bg-gray-800 text-black p-6 rounded-lg shadow-lg h-full md:w-[80%] md:h-[90%] flex flex-col items-center justify-center text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-xl">
            📖
          </div>
          <h2 className="text-lg font-semibold mt-4 text-gray-100">You have no contact books</h2>
          <p className="text-gray-200 text-sm">Create a private or shared contact book</p>
          <button
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            onClick={() => setIsNewBookModalOpen(true)}
          >
            Create a contact book
          </button>
        </div>
      </div>

      {/* New Contact Book Modal */}
      {isNewBookModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50" onClick={() => setIsNewBookModalOpen(false)}>
          <div className="bg-gray-800 w-full max-w-sm rounded-lg shadow-lg p-6 relative text-center" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-semibold text-gray-300">New contact book</h2>
            
            <label className="block text-sm text-gray-100 mt-4 text-left">Name</label>
            <input type="text" placeholder="e.g. Sales" className="w-full p-2 border rounded mt-1 bg-gray-700 text-white" />
            
            <label className="block text-sm text-gray-100 mt-4 text-left">Share this contact book with others?</label>
            <select className="w-full p-2 border rounded mt-1 bg-gray-700 text-white">
              <option>Choose users</option>
            </select>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-100">Exclude contacts from search results?</span>
              <input type="checkbox" className="toggle" />
            </div>

            <div className="flex justify-center mt-6 gap-2">
              <button className="px-4 py-2 border rounded text-gray-100" onClick={() => setIsNewBookModalOpen(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactDropdownModal;