import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {
  MoreHorizontal,
  MessageSquare,
  Pencil,
  Star,
  Eye,
  Users,
  Smile,
  Plus,
} from "lucide-react";
import InviteUserModal from "./InviteUserModal";

const socket = io("http://localhost:5001"); // Adjust for your backend

const Room = () => {
  const [comment, setComment] = useState("");
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  const sendMessage = () => {
    if (comment.trim()) {
      const newMessage = { user: "You", text: comment };
      socket.emit("sendMessage", newMessage);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setComment("");
    }
  };

  return (
    <div className="flex flex-col h-screen text-gray-300">
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-[#1B1C1D]">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white mr-3">
            I
          </div>
          <div className="text-xl text-white font-medium">General room</div>
        </div>
        <div className="flex items-center">
          <button className="p-2 rounded-md hover:bg-gray-800">
            <Pencil size={18} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-800">
            <Star size={18} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-800">
            <Eye size={18} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-800">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-[#232425]">
        <p className="text-gray-400 mb-4">
          Welcome to the general chat room for inzint! Connect, share, and
          engage with your team beyond emails. Enjoy the conversation!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center text-blue-400 hover:text-blue-300"
        >
          <Users size={16} className="mr-2" />
          <span>Invite people to join inzint</span>
        </button>

        {/* Chat Messages */}
        <div className="mt-4">
          {messages.map((msg, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white">
                {msg.user[0].toUpperCase()}
              </div>
              <div className="bg-[#1B1C1D] p-2 rounded-md text-sm">
                <span className="font-semibold">{msg.user}:</span> {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Input Section */}
      <div className="p-2 bg-[#232425]">
        <div className="flex items-center !bg-[#1B1C1D] rounded-md px-3 py-2 ">
          <input
            type="text"
            placeholder="Write a message..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 bg-[#1B1C1D] outline-none text-gray-300 placeholder-gray-500"
          />
          <button className="p-1 rounded-md hover:bg-gray-700 ml-1">
            <Smile size={20} className="text-gray-500" />
          </button>
          <button className="p-1 rounded-md hover:bg-gray-700 ml-1">
            <MessageSquare size={20} className="text-gray-500" />
          </button>
          <button onClick={sendMessage} className="p-1 rounded-md hover:bg-gray-700 ml-1">
            <Plus size={20} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Invite User Modal */}
      <InviteUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Room;
 