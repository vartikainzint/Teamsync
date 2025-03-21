import { CheckCircle } from "lucide-react";

export default function WhatsNew({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md text-gray-900">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold flex items-center gap-1 text-white">
            v11.4.0 <span className="text-xl">🎉</span>
          </h2>
          <p className="text-sm text-gray-100">March 12, 2025</p>
        </div>

        {/* Content */}
        <div className="bg-gray-900 p-3 rounded-md mt-3 text-gray-100 text-sm">
          <p>
            As you may know, Missive’s growth is 100% organic and based on word
            of mouth. We’re very thankful for everyone sharing Missive so far
            and invite you to become an affiliate to earn back when you refer
            someone. Read more about our
            <a href="#" className="text-blue-500 hover:underline"> referral program </a>
            and
            <a href="#" className="text-blue-500 hover:underline"> grab your referral link </a>
            now. 🌟
          </p>
          <p className="mt-2">
            Reviews and ratings also go a long way, thanks to everyone
            <a href="#" className="text-blue-500 hover:underline"> leaving a review</a>. 🙌
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">New</div>
            <p className="text-sm text-gray-100">March 13, 2025</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="text-white font-semibold px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}