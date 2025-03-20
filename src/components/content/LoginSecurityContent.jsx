import { FaGoogle, FaApple, FaTrashAlt, FaLock, FaCloudDownloadAlt } from "react-icons/fa";

export default function LoginSecurityContent() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white mx-auto w-full max-w-3xl">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Login & Security</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg flex items-center">
            <FaLock className="text-gray-400 mr-2" />
            <div>
              <h3 className="text-sm font-semibold">Login email</h3>
              <p className="text-sm text-gray-300">test@gmail.com</p>
              <div className="mt-2 flex items-center">
                <span className="text-sm text-gray-300">Connected with Google</span>
                <button className="text-blue-400 text-sm ml-auto">Set a password</button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-semibold">Change OAuth login provider</h3>
            <div className="flex space-x-4 mt-2">
              <button className="bg-white text-black px-4 py-2 rounded flex items-center">
                <FaGoogle className="mr-2" /> Sign in with Google
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded flex items-center">
                <FaApple className="mr-2" /> Sign in with Apple
              </button>
            </div>
            <div className="mt-2 flex items-center">
              <input type="checkbox" defaultChecked className="mr-2" />
              <span className="text-sm text-gray-300">Log out all other sessions</span>
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-semibold">Other active sessions</h3>
            <p className="text-sm text-gray-300">No other active sessions.</p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-semibold">Export your data</h3>
            <p className="text-sm text-gray-300">Export your data in a machine-readable format. You will receive a notification once it's ready.</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Comments", "Contacts", "Conversations", "Email addresses", "Phone numbers", "Responses", "Rules"
              ].map((item, index) => (
                <button key={index} className="bg-gray-700 text-white px-3 py-1 rounded text-sm flex items-center">
                  <FaCloudDownloadAlt className="mr-2" /> {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-sm font-semibold">Delete Missive account</h3>
            <p className="text-sm text-gray-300">Delete your Missive account and all data associated with it.</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-2 flex items-center">
              <FaTrashAlt className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    );
}