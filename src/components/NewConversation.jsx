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
        <h2 className="text-xl font-medium">New conversation</h2>
        <button className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-600">
          Assign to me
        </button>
      </div>

      {/* Draft Info */}
      <h2 className="px-6 mt-2  text-gray-400 text-xl font-semibold">This is a new conversation where you can collaborate with your team, write notes, or start a new email. You can also snooze, label, and archive it as you do with email conversations.
      </h2>

    </div>
  );
}
