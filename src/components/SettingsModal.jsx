import { useState } from "react";
import { Settings } from "lucide-react";

export default function SettingsPopup() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Modal */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        <Settings className="w-5 h-5" />
        Settings
        <span className="ml-auto text-xs text-gray-400">Ctrl + ,</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg w-4/5 max-w-4xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex">
              {/* Sidebar */}
              <aside className="w-1/4 border-r border-gray-700 pr-4">
                <nav className="flex flex-col space-y-2">
                  <button className="text-left px-2 py-2 hover:bg-gray-700 rounded">Profile</button>
                  <button className="text-left px-2 py-2 hover:bg-gray-700 rounded">Preferences</button>
                  <button className="text-left px-2 py-2 hover:bg-gray-700 rounded">Login & Security</button>
                  <button className="text-left px-2 py-2 hover:bg-gray-700 rounded">Accounts</button>
                </nav>
              </aside>

              {/* Main Content */}
              <main className="w-3/4 pl-4">
                <h2 className="text-lg font-semibold">Profile</h2>
                <p className="text-sm text-gray-400">
                  Updating your profile will update it across all organizations.
                </p>

                <div className="mt-4 flex gap-4">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Profile"
                    className="w-12 h-12 rounded-full border border-gray-600"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">First name</p>
                    <p className="text-lg">Sunny</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-400">Last name</p>
                    <p className="text-lg">Patel</p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
