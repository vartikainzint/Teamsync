import { useState } from "react";
import { Search, MessageCircle } from "lucide-react";

export default function InboxPanel({ isNewMail, setIsNewMail }) {
  const [conversations, setConversations] = useState([
    { id: 1, user: "You", message: "New conversation", date: "Tuesday" },
    { id: 2, user: "You", message: "New conversation", date: "Tuesday" },
  ]);

  return (
    <div className="flex flex-col h-screen bg-white">
      {isNewMail ? (
        <div className="p-4 overflow-auto">
          <h2 className="text-lg font-semibold mb-4">New Email</h2>
          <p className="text-sm text-gray-500">Add an email account first</p>
          <div className="mt-4 border p-4 rounded-lg space-y-3">
            <input
              type="text"
              placeholder="To"
              className="w-full border-b p-2 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-b p-2 outline-none"
            />
            <textarea
              className="w-full p-2 border rounded-md h-40 resize-none"
              placeholder="Write your email..."
            ></textarea>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded">
              Send
            </button>
            <button
              className="block w-full text-center text-sm text-gray-500 hover:underline"
              onClick={() => setIsNewMail(false)}
            >
              Back to Inbox
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col md:flex-row h-full">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3 border-r border-gray-200 flex flex-col max-h-full">
            <div className="flex items-center p-2">
              <div className="flex items-center px-4 py-2 rounded-lg bg-gray-100 w-full">
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-auto">
              <div className="welcome-mail text-center py-4 px-4">
                <h2 className="text-xl font-semibold">Welcome to TeamSync</h2>
                <p className="text-sm text-gray-500 mt-2 mb-2">
                  Connect an account to start managing your email, SMS, or social media.
                </p>
                <a
                  href="#"
                  className="mt-4 text-blue-600 font-semibold hover:underline block"
                >
                  Connect an account
                </a>
                <p className="mt-2 text-gray-500 text-sm cursor-pointer hover:underline">
                  I prefer just chatting with my team
                </p>
              </div>

              <div className="bg-gray-100">
                <p className="text-sm font-semibold px-4 py-2">This Week</p>
              </div>

              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-3 border-b hover:bg-gray-100 cursor-pointer"
                >
                  <p className="font-semibold">{conv.user}</p>
                  <p className="text-sm text-gray-600 truncate">{conv.message}</p>
                  <p className="text-xs text-gray-400">{conv.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 text-gray-500 max-h-full overflow-auto">
            <MessageCircle size={48} className="mb-4 text-gray-300" />
            <h2 className="text-xl font-semibold">Inbox</h2>
            <p className="text-sm">What goes into the Inbox?</p>
            <button className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded">
              Learn more
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
