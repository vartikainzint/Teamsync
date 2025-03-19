export default function GeneralSettings() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
        
        <div className="border-b border-gray-700 pb-2">
          <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">App</h3>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Set TeamSync as your default email client</p>
            <button className="text-blue-400">Request permission</button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">Remember location when quitting app</p>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">Open conversation links</p>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Ask</option>
              <option>Always</option>
              <option>Never</option>
            </select>
          </div>
        </div>
        
        <div className="border-b border-gray-700 pb-2 mt-4">
          <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Actions</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">Mark conversations as read upon opening</p>
            <input type="checkbox" className="toggle-checkbox" checked />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">Mark conversations as read upon archiving, closing or trashing</p>
            <input type="checkbox" className="toggle-checkbox" checked />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">Show undo banner</p>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>10 seconds</option>
              <option>5 seconds</option>
              <option>15 seconds</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">On conversation double-click</p>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Open in new window</option>
              <option>Open in same window</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">When archiving a conversation</p>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Move depending on previous direction</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">When dragging a conversation</p>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Move</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm text-gray-300">Open conversations on</p>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>First unread entry</option>
            </select>
          </div>
        </div>
      </div>
    );
}
