import React from "react";
import { Calendar } from "lucide-react";

const CalenderSettingsModal = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-800 p-8 rounded-2xl text-center">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mx-auto">
          <Calendar className="text-2xl text-gray-500" />
        </div>
        <h3 className="text-sm font-semibold mt-4">You have no calendar accounts</h3>
        <p className="text-gray-500 mt-1">Import a calendar account with one click</p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition">
          Add a Calender account
        </button>
      </div>
    </div>
  );
};

export default CalenderSettingsModal;
