import React, { useState, useEffect, useRef } from "react";

const EnterCommandModal = ({ isOpen, onClose }) => {
  const actions = [
    { name: "Reply", shortcut: "Ctrl+1" },
    { name: "Archive from my Inbox", shortcut: "Ctrl+2" },
    { name: "Trash", shortcut: "Ctrl+3" },
    { name: "Label as...", shortcut: "Ctrl+4" },
    { name: "Move to...", shortcut: "↵" },
    { name: "Snooze...", shortcut: "Ctrl+6" },
    { name: "Share with...", shortcut: "Ctrl+7" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const modalRef = useRef(null);

  // Focus on modal when it opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % actions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + actions.length) % actions.length);
      } else if (e.key === "Enter") {
        alert(`Selected: ${actions[selectedIndex].name}`);
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, onClose, actions.length]);

  if (!isOpen) return null;

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modal-title"
        className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevents modal close when clicking inside
      >
        <h2 id="modal-title" className="text-lg font-semibold">
          What would you like to do?
        </h2>

        <ul className="mt-3">
          {actions.map((action, index) => (
            <li
              key={index}
              onClick={() => {
                alert(`Selected: ${action.name}`);
                onClose();
              }}
              className={`flex justify-between items-center px-4 py-2 rounded-md cursor-pointer transition-colors ${
                selectedIndex === index ? "bg-blue-500 text-white" : "hover:bg-gray-700"
              }`}
            >
              {action.name}
              <span className="text-sm text-gray-400">{action.shortcut}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex justify-between text-gray-400 text-sm">
          <span>⬆⬇ to navigate</span>
          <span>Enter to select</span>
          <span>Esc to cancel</span>
        </div>
      </div>
    </div>
  );
};

export default EnterCommandModal;
