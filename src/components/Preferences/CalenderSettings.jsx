export default function CalenderSettings() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white mx-auto">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Invites</h3>
  
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Show calendar in invite emails</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
  
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Automatically collapse invite emails</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
        </div>
  
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2 mt-2">Defaults</h3>
  
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Start week on</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Sunday</option>
            </select>
          </div>
  
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Time format</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>1:00 PM</option>
            </select>
          </div>
  
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Default calendar</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Import a calendar account first</option>
            </select>
          </div>
  
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Open map links in</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Google Maps</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  