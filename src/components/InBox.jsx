// components/InBox.jsx
import { MessageCircle } from "lucide-react";

export default function InBox() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-gray-400 max-h-full overflow-auto">
      <MessageCircle size={48} className="mb-4 text-gray-600" />
      <h2 className="text-xl font-semibold text-gray-200">Inbox</h2>
      <p className="text-sm">What goes into the Inbox?</p>
      <button className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded">
        Learn more
      </button>
    </div>
  );
}
