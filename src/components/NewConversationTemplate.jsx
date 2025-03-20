import React, { useState } from "react";
import { Smile, CheckCircle, Plus } from "lucide-react";

const NewConversationTemplate = () => {
  const [comment, setComment] = useState("");

  return (
    <div className="flex flex-col h-full p-6 bg-[#151617] text-gray-300">
      {/* Header */}
      <h2 className="text-2xl font-semibold">New conversation</h2>
      <p className="mt-2 text-gray-400">
        This is a new conversation where you can collaborate with your team, write notes, or
        start a new email. You can also snooze, label, and archive it as you do with email conversations.
      </p>

      {/* Spacer to push input box to bottom */}
      <div className="flex-grow"></div>

      {/* Private Comment Input */}
      <div className="p-3 bg-[#232425] rounded-lg flex items-center border border-gray-700">
        <input
          type="text"
          placeholder="Write private comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-grow bg-transparent outline-none text-gray-300 placeholder-gray-500 px-2"
        />
        
        {/* Icons */}
        <Smile size={20} className="text-gray-500 mx-2 cursor-pointer hover:text-gray-300" />
        <CheckCircle size={20} className="text-gray-500 mx-2 cursor-pointer hover:text-gray-300" />
        <Plus size={20} className="text-gray-500 mx-2 cursor-pointer hover:text-gray-300" />
      </div>
    </div>
  );
};

export default NewConversationTemplate;
