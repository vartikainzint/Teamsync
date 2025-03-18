import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {
  Search,
  Menu,
  UserCircle,
  CheckCircle,
  Calendar,
  MoreVertical,
  ChevronLeft,
} from "lucide-react";
import MessageDisplay from "./Conversation";
import NewConversationTemplate from "./NewConversationTemplate";
import Sidebar from "./Sidebar";
const socket = io("http://localhost:5001");

const EmailInterface = ({ newConversation }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  // const [newConversation, setNewConversation] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  const months = {
    March: [
      {
        id: 1,
        text: "Hey team, let's discuss the project!",
        type: "room",
        title: "General Room",
        subtitle: "Team Discussion",
        date: "Mar 4",
        avatar: "Y",
        messages: [
          {
            id: 101,
            text: "Let's start the discussion!",
            time: "10:30 AM",
            user: "Alice",
          },
          {
            id: 102,
            text: "Sure! What are the main points?",
            time: "10:35 AM",
            user: "Bob",
          },
        ],
      },
      {
        id: 2,
        text: "Sure! What are the main points?",
        type: "user",
        title: "Vansh",
        subtitle: "Vansh Bhardwaj",
        date: "Mar 4",
        avatar: "V",
        messages: [
          {
            id: 201,
            text: "Hey, are you available?",
            time: "11:15 AM",
            user: "Vansh",
          },
        ],
      },
    ],
    February: [
      {
        id: 3,
        type: "activity",
        title: "Activity Log",
        subtitle: "System Updates",
        date: "Feb 26",
        messages: [],
      },
    ],
  };

  useEffect(() => {
    if (selectedConversation) {
      socket.emit("joinConversation", selectedConversation.id);

      socket.on("loadMessages", (data) => {
        setMessages((prev) => ({
          ...prev,
          [selectedConversation.id]: data,
        }));
      });

      socket.on("newMessage", (message) => {
        setMessages((prev) => ({
          ...prev,
          [selectedConversation.id]: [
            ...(prev[selectedConversation.id] || []),
            message,
          ],
        }));
      });
    }

    return () => {
      socket.off("loadMessages");
      socket.off("newMessage");
    };
  }, [selectedConversation]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const message = {
      id: Date.now(),
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      user: "You",
    };

    socket.emit("sendMessage", {
      message,
      conversationId: selectedConversation.id,
    });

    setMessages((prev) => ({
      ...prev,
      [selectedConversation.id]: [
        ...(prev[selectedConversation.id] || []),
        message,
      ],
    }));

    setNewMessage("");
  };
  useEffect(() => {
    if (newConversation) {
      console.log("Opening new conversation:", newConversation);
      // Add logic to display the new conversation
    }
  }, [newConversation]);

  return (
    <div className="flex h-screen text-gray-300">
      {/* Left Sidebar */}
      <div className="w-80 border-r border-gray-800 overflow-y-auto bg-[#151617]">
        <div className="flex items-center p-3 border-b border-gray-800 bg-[#151617]">
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none text-gray-300 outline-none w-full"
          />
          <Menu size={18} className="text-gray-500 ml-auto" />
        </div>

        {/* Email List */}
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {Object.entries(months).map(([month, items]) => (
            <div key={month}>
              <div className="px-3 py-2 text-sm text-gray-500">{month}</div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`px-3 py-2 hover:bg-gray-800 cursor-pointer flex ${
                    selectedConversation?.id === item.id ? "bg-gray-800" : ""
                  }`}
                  onClick={() => {
                    setSelectedConversation(item);
                    setMessages((prev) => ({
                      ...prev,
                      [item.id]: item.messages || [],
                    }));
                  }}
                >
                  <div className="mr-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-800 flex items-center justify-center text-xs">
                      {item.avatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.date}</div>
                    </div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right Content Area - Chat */}
      <div className="flex-1 flex flex-col bg-[#232425]">
        {/* <Sidebar setNewConversation={setNewConversation} /> */}
        {newConversation ? (
          <NewConversationTemplate
            newConversation={newConversation}
            setNewConversation={setNewConversation}
          />
        ) : selectedConversation ? (
          <MessageDisplay
            selectedConversation={selectedConversation}
            messages={messages[selectedConversation.id] || []}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            handleSendMessage={handleSendMessage}
          />
        ) : (
          <div className="flex flex-col justify-center items-center h-full text-gray-500 text-sm">
            <h2 className="text-xl font-bold mb-2">Select a Conversation</h2>
            <p>
              A complete archive of every conversation you have access to,
              excluding Trash and Spam.
            </p>
          </div>
        )}
      </div>

      <div className="w-10 border-l border-gray-800 flex flex-col items-center py-4 space-y-4 bg-[#232425]">
        <ChevronLeft size={20} className="text-gray-500" />
      </div>
    </div>
  );
};

export default EmailInterface;
