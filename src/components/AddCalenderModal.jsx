import React from "react";

const AddCalendarModal = ({ showCalendar, setShowCalendarModal, onAddCalendar }) => {
  if (!showCalendar) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-20 backdrop-blur-md z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white text-center">
          Can’t create event
        </h2>

        {/* Message */}
        <p className="text-gray-300 text-center mt-2">
          You have no calendar account, add one to create new events.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setShowCalendarModal(false)}
            className="px-4 py-2 border border-gray-500 rounded-md text-gray-300 hover:bg-gray-700 transition"
          >
            Cancel
          </button>
          <button
            onClick={onAddCalendar}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add calendar account
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCalendarModal;
