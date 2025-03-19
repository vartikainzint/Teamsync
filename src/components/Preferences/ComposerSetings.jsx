export default function ComposerSettings() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white mx-auto">
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2">Formatting</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Font</span>
            <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm">
              <option>Default</option>
            </select>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Size</span>
            <input type="number" className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm" defaultValue={14} />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Line Height</span>
            <input type="number" className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm" defaultValue={1.4} step={0.1} />
          </div>
        </div>
  
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2 mt-2">Appearance</h3>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Always expand CC / BCC fields</span>
          <input type="checkbox" className="toggle-switch" />
        </div>
  
        <h3 className="text-sm font-medium bg-gray-700 p-2 mb-2 mt-2">Defaults</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Default sender</span>
            <span className="text-gray-400 text-sm">Add an email account first</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Always send replies from selected address above</span>
            <input type="checkbox" className="toggle-switch" />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Always create new drafts from selected address above</span>
            <input type="checkbox" className="toggle-switch" />
          </div>
  
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Create new drafts in selected mailbox</span>
            <input type="checkbox" className="toggle-switch" />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Add new drafts to my Inbox</span>
            <input type="checkbox" className="toggle-switch" />
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Automatically discard blank drafts</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
        </div>
      </div>
    );
  }
  