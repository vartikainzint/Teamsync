export default function ShortcutSettings() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white mx-auto w-full max-w-3xl">
        <h3 className="text-sm font-medium bg-gray-700 p-2 rounded">Options</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Preset</span>
            <select className="border border-gray-600 px-2 py-1 rounded bg-gray-800 text-white text-sm">
              <option>TeamSync</option>
            </select>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Autofocus comment box when typing</span>
            <input type="checkbox" className="toggle-switch" defaultChecked />
          </div>
        </div>
        
        <div className="mt-6">
          <input type="text" placeholder="Search" className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
        </div>
        
        <table className="w-full mt-4 text-sm border border-gray-700">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="p-2 text-left">Command</th>
              <th className="p-2 text-left">Keybinding</th>
              <th className="p-2 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {[
              { command: "Add to my Inbox", keybinding: "n/a", category: "Actions" },
              { command: "Archive or Remove label", keybinding: "Backspace / Delete", category: "Actions" },
              { command: "Assign", keybinding: "Ctrl + Shift + K", category: "Actions" },
              { command: "Assign to me", keybinding: "Ctrl + D", category: "Actions" },
              { command: "Close", keybinding: "Shift + Backspace / Shift + Del", category: "Actions" },
              { command: "Collapse entire conversation", keybinding: "Ctrl + Shift + Left", category: "Actions" },
              { command: "Discard snooze", keybinding: "Ctrl + J", category: "Actions" },
              { command: "Expand entire conversation", keybinding: "Ctrl + Shift + Right", category: "Actions" },
              { command: "Forward", keybinding: "Ctrl + Shift + F", category: "Actions" }
            ].map((item, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-2">{item.command}</td>
                <td className="p-2 text-gray-400">
                  {item.keybinding.split(" / ").map((key, i) => (
                    <span key={i} className="inline-block bg-gray-800 px-2 py-1 rounded text-white mx-1">{key}</span>
                  ))}
                </td>
                <td className="p-2">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
