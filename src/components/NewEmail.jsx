import { useState } from "react";
import { Send, Paperclip, Trash2, MoreHorizontal, Clock, Smile, Link,Bell, Archive, UserPlus, Check } from "lucide-react";

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
    alert("Email sent (demo only!)");
  };
 // Example action handler
 const handleAction = (action) => {
  console.log(`${action} clicked`);
};
  // Icon Actions
  const handleBold = () => alert("Bold action triggered (demo)!");
  const handleItalic = () => alert("Italic action triggered (demo)!");
  const handleUnderline = () => alert("Underline action triggered (demo)!");
  const handleStrikethrough = () => alert("Strikethrough action triggered (demo)!");
  const handleColor = () => alert("Text color action triggered (demo)!");
  const handleEmoji = () => alert("Emoji picker opened (demo)!");
  const handleLink = () => alert("Insert link action triggered (demo)!");
  const handleAttachment = () => alert("Attach file action triggered (demo)!");
  const handleDeleteDraft = () => alert("Draft deleted (demo)!");
  const handleSchedule = () => alert("Schedule send (demo)!");
  const handleMoreOptions = () => alert("More options opened (demo)!");

  return (
    <div className="flex-1 flex flex-col bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
      {/* Header */}
        {/* Toolbar Buttons */}
        <div className="flex items-center space-x-3 ml-4 shrink-0 pt-6 justify-end p-2">
          <button
            onClick={() => handleAction('Assign')}
            className="text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200 text-sm"
          >
            Assign to me
          </button>
          <button
            onClick={() => handleAction('Mark as Done')}
            className="text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          >
            <Check className="h-5 w-5" />
          </button>
          <UserPlus
            onClick={() => handleAction('Add User')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <Bell
            onClick={() => handleAction('Snooze')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <Archive
            onClick={() => handleAction('Archive')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <Trash2
            onClick={() => handleAction('Delete')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
          <MoreHorizontal
            onClick={() => handleAction('More Options')}
            className="h-5 w-5 cursor-pointer text-white-600 dark:text-white-400 hover:text-white-800 dark:hover:text-white-200"
          />
        </div>
      <div className="flex justify-between items-center px-6 pt-6">
        <h2 className="text-xl font-medium">{subject || "No subject"}</h2>
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
          <button onClick={handleBold} className="hover:text-white font-bold">B</button>
          <button onClick={handleItalic} className="hover:text-white italic">I</button>
          <button onClick={handleUnderline} className="hover:text-white underline">U</button>
          <button onClick={handleStrikethrough} className="hover:text-white line-through">S</button>
          <button onClick={handleColor} className="hover:text-white">A</button>
          <button onClick={handleEmoji} className="hover:text-white"><Smile size={16} /></button>
          <button onClick={handleLink} className="hover:text-white"><Link size={16} /></button>
          <button onClick={handleAttachment} className="hover:text-white"><Paperclip size={16} /></button>
          <button onClick={handleDeleteDraft} className="hover:text-white"><Trash2 size={16} /></button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSend}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            <Send size={16} /> Send
          </button>
          <button onClick={handleSchedule} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
            <Clock size={16} />
          </button>
          <button onClick={handleMoreOptions} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
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
