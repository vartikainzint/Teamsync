import React from "react";
import { Star, Bell, Pin, Smile, Paperclip, Send } from "lucide-react";

const MessageDisplay = ({ selectedConversation, messages, newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="flex flex-col h-full bg-[#0F0F0F] text-gray-300">
      {/* Header */}
      <div className="p-4 bg-[#161616] flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{selectedConversation.title}</h2>
          <p className="text-sm text-gray-400">{selectedConversation.subtitle}</p>
        </div>
        <div className="flex space-x-4">
          <Star size={18} className="text-gray-500 cursor-pointer hover:text-white" />
          <Bell size={18} className="text-gray-500 cursor-pointer hover:text-white" />
          <Pin size={18} className="text-gray-500 cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-4">
            <p className="text-gray-400 text-xs">{msg.user}</p>
            <p className="bg-[#1E1E1E] px-4 py-2 rounded-lg text-gray-300">{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.time}</span>
          </div>
        ))}
      </div>
      <div className="p-3 bg-[#161616] flex items-center">
        <input
          type="text"
          className="flex-1 bg-transparent text-gray-300 p-2 rounded-lg focus:outline-none"
          placeholder="Write private comment..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <div className="flex items-center space-x-3 ml-3">
          <Smile size={18} className="text-gray-500 cursor-pointer hover:text-white" />
          <Paperclip size={18} className="text-gray-500 cursor-pointer hover:text-white" />
          <Send size={18} className="text-blue-500 cursor-pointer" onClick={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default MessageDisplay;
