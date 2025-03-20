export default function Appearance() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white mx-auto">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Display</h3>
  
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Text size</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Default</option>
            </select>
          </div>
  
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Scroll bars</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Custom</option>
            </select>
          </div>
  
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Emoji style</span>
            <span>😄 👍 🚀</span>
          </div>
  
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">Theme</span>
            <div className="flex space-x-2">
              <button className="bg-gray-700 px-2 py-1 rounded text-sm">Auto</button>
              <button className="bg-gray-700 px-2 py-1 rounded text-sm">Light</button>
              <button className="bg-gray-700 px-2 py-1 rounded text-sm">Dark</button>
            </div>
          </div>
        </div>
  
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Left sidebar</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Show recent searches</span>
          <input type="number" className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm w-12" value="3" />
        </div>
  
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Right sidebar</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Display style</span>
          <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
            <option>Floating</option>
          </select>
        </div>
      </div>
    );
  }
  