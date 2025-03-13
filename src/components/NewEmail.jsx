import { useState } from "react";
import { Send, Paperclip, Trash2, MoreHorizontal, Clock, Smile, Link } from "lucide-react";

export default function NewEmail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [ccBccVisible, setCcBccVisible] = useState(false);
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [privateComment, setPrivateComment] = useState("");

  const handleSend = () => {
    console.log("Sending email:", { to, cc, bcc, subject, body });
    alert("Email sent (not really, this is a demo!)");
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-6">
        <h2 className="text-xl font-medium">No subject</h2>
        <button className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-600">
          Assign to me
        </button>
      </div>

      {/* Draft Info */}
      <div className="px-6 mt-2 text-xs text-gray-400">3:28 PM &bull; You created a draft</div>

      {/* Form Fields */}
      <div className="px-6 space-y-4 mt-4 flex-1 overflow-auto">
        {/* Email Account Notice */}
        <div className="text-sm text-gray-400">Add an email account first</div>

        {/* To Field */}
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="bg-transparent w-full focus:outline-none placeholder-gray-500"
          />
          <span
            onClick={() => setCcBccVisible(!ccBccVisible)}
            className="text-blue-400 text-sm cursor-pointer hover:underline"
          >
            {ccBccVisible ? "Hide Cc, Bcc" : "Cc, Bcc"}
          </span>
        </div>

        {/* CC/BCC Fields */}
        {ccBccVisible && (
          <>
            <div className="border-b border-gray-700 pb-2">
              <input
                type="text"
                placeholder="Cc"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                className="bg-transparent w-full focus:outline-none placeholder-gray-500"
              />
            </div>
            <div className="border-b border-gray-700 pb-2">
              <input
                type="text"
                placeholder="Bcc"
                value={bcc}
                onChange={(e) => setBcc(e.target.value)}
                className="bg-transparent w-full focus:outline-none placeholder-gray-500"
              />
            </div>
          </>
        )}

        {/* Subject Field */}
        <div className="border-b border-gray-700 pb-2">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-transparent w-full focus:outline-none placeholder-gray-500"
          />
        </div>

        {/* Email Body */}
        <div className="min-h-[180px]">
          <textarea
            placeholder="Write your message..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="bg-transparent w-full h-full focus:outline-none resize-none placeholder-gray-500"
          />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between border-t border-gray-700 px-6 py-3">
        <div className="flex gap-3 text-gray-400">
          <button className="hover:text-white font-bold">B</button>
          <button className="hover:text-white italic">I</button>
          <button className="hover:text-white underline">U</button>
          <button className="hover:text-white line-through">S</button>
          <button className="hover:text-white">A</button>
          <button className="hover:text-white"><Smile size={16} /></button>
          <button className="hover:text-white"><Link size={16} /></button>
          <button className="hover:text-white"><Paperclip size={16} /></button>
          <button className="hover:text-white"><Trash2 size={16} /></button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSend}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            <Send size={16} /> Send
          </button>
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Clock size={16} />
          </button>
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {/* Private Comment */}
      <div className="border-t border-gray-700 px-6 py-3">
        <input
          type="text"
          placeholder="Write private comment..."
          value={privateComment}
          onChange={(e) => setPrivateComment(e.target.value)}
          className="w-full bg-gray-800 rounded px-4 py-2 focus:outline-none placeholder-gray-500"
        />
      </div>
    </div>
  );
}
