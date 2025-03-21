import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function UpdateNotification({ isOpen, onClose }) {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-6 w-full max-w-md text-white">
        {/* Title */}
        <h2 className="text-lg font-semibold flex items-center justify-center gap-1">
          Up-to-date <CheckCircle size={18} className="text-green-500" />
        </h2>
        <p className="text-sm text-center text-gray-100 mt-2">
          v11.4.0 is the latest version.
        </p>
 


        {/* Buttons */}
        <div className="flex justify-center space-x-3 mt-4">
          <button
            onClick={onClose}
            className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
