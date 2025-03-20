export default function SnoozesSettings() {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white mx-auto w-full max-w-3xl">
        <h3 className="text-sm font-medium bg-gray-700 p-2 rounded">Defaults</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Later today +</span>
            <input type="number" className="border border-gray-600 px-2 py-1 rounded bg-gray-800 text-white text-sm w-16" defaultValue={3} />
            <span className="text-sm text-gray-300">hours</span>
          </div>
          
          {[
            { label: "This afternoon", time: "01:00 PM" },
            { label: "This evening", time: "07:00 PM" },
            { label: "Tomorrow", time: "08:00 AM" },
            { label: "This weekend", time: "10:00 AM" },
            { label: "Next week", time: "08:00 AM" }
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-300">{item.label}</span>
              <input type="text" className="border border-gray-600 px-2 py-1 rounded bg-gray-800 text-white text-sm w-24" defaultValue={item.time} />
              <input type="checkbox" className="toggle-switch" defaultChecked />
            </div>
          ))}
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Sometime</span>
            <input type="checkbox" className="toggle-switch" />
          </div>
        </div>
      </div>
    );
}
