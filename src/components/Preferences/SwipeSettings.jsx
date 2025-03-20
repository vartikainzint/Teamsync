export default function SwipeSettings() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white mx-auto w-full max-w-3xl">
        <h3 className="text-sm font-medium bg-gray-700 p-2 rounded mt-4 mb-4">Options</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Multi-conversation swipe</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Enable on desktop</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
        </div>
        
        <h3 className="text-sm font-medium bg-gray-700 p-2 rounded mt-4 mb-4">Left-to-right swipe actions</h3>
        <div className="bg-gray-800 p-4 rounded-lg mt-4 mb-4">
          {[{ label: "Remove from mailbox", color: "green" }, { label: "Trash", color: "red" }].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 border-b border-gray-700">
              <span className={`text-sm text-${item.color}-400`}>{item.label}</span>
              <button className="text-red-500 text-sm">Remove</button>
            </div>
          ))}
          <button className="text-blue-400 text-sm mt-2">Add an action</button>
        </div>
        
        <h3 className="text-sm font-medium bg-gray-700 p-2 rounded mt-4 mb-4">Right-to-left swipe actions</h3>
        <div className="bg-gray-800 p-4 rounded-lg mt-4 mb-4">
          {[{ label: "Snooze", color: "orange" }, { label: "More options", color: "black" }].map((item, index) => (
            <div key={index} className="flex justify-between items-center p-2 border-b border-gray-700">
              <span className={`text-sm text-${item.color}-400`}>{item.label}</span>
              <button className="text-red-500 text-sm">Remove</button>
            </div>
          ))}
        </div>
      </div>
    );
}
