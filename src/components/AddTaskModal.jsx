import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AddTaskModal({ onClose, onSave }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [createMore, setCreateMore] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [showAssignees, setShowAssignees] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [dueDate, setDueDate] = useState(null);

  const teamOptions = [
    { value: "team-one", label: "Team One" },
    { value: "team-two", label: "Team Two" },
  ];

  const assigneeOptions = [
    { value: "assignee-1", label: "Assignee 1" },
    { value: "assignee-2", label: "Assignee 2" },
    { value: "assignee-3", label: "Assignee 3" },
  ];

  const closeAllDropdowns = () => {
    setShowTeams(false);
    setShowAssignees(false);
    setShowCalendar(false);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 p-2 pt-20"
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className="bg-[#1e1e1e] rounded-xl shadow-lg w-full max-w-2xl p-2 relative text-white"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Task Input */}
        <input
          type="text"
          placeholder="New task @assignee tomorrow"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-2 rounded-lg border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 bg-[#2a2a2a] text-base mb-1"
        />

        {/* Description */}
        <textarea
          placeholder="Add a description..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          rows="3"
          className="w-full p-2 rounded-lg border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 bg-[#2a2a2a] text-sm resize-none mb-1"
        ></textarea>

        {/* Selection Row */}
        <div className="flex flex-wrap gap-2 mb-1 relative">
          {/* Team Selection */}
          <div
            onClick={() => {
              closeAllDropdowns();
              setShowTeams(!showTeams);
            }}
            className="flex items-center px-3 py-1.5 bg-[#333] text-gray-300 rounded-full cursor-pointer text-sm hover:bg-[#444]"
          >
            👥 {selectedTeams.length > 0 ? selectedTeams.map(t => t.label).join(", ") : "Team"}
          </div>
          {showTeams && (
            <div className="absolute left-0 top-full mt-2 bg-[#2a2a2a] border-gray-600 rounded-md shadow-lg w-64 p-2 z-10 text-white">
             <Select
  options={teamOptions}
  isMulti
  placeholder="Select teams..."
  value={selectedTeams}
  onChange={(selected) => setSelectedTeams(selected)}
  classNamePrefix="custom-select"
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "#2a2a2a",
      borderColor: "#444",
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2a2a2a",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#444" : "#2a2a2a",
      color: "white",
    }),
  }}
/>

            </div>
          )}

          {/* Assignee Selection */}
          <div
            onClick={() => {
              closeAllDropdowns();
              setShowAssignees(!showAssignees);
            }}
            className="flex items-center px-3 py-1.5 bg-[#333] text-gray-300 rounded-full cursor-pointer text-sm hover:bg-[#444]"
          >
            👤 {selectedAssignees.length > 0 ? selectedAssignees.map(a => a.label).join(", ") : "Assignees"}
          </div>
          {showAssignees && (
            <div className="absolute left-0 top-full mt-2 bg-[#2a2a2a]  border-gray-600 rounded-md shadow-lg w-64 p-2 z-10 text-white">
              <Select
  options={assigneeOptions}
  isMulti
  placeholder="Select assignees..."
  value={selectedAssignees}
  onChange={(selected) => setSelectedAssignees(selected)}
  classNamePrefix="custom-select"
  styles={{
    control: (base) => ({
      ...base,
      backgroundColor: "#2a2a2a",
      borderColor: "#444",
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#2a2a2a",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? "#444" : "#2a2a2a",
      color: "white",
    }),
  }}
/>

            </div>
          )}

          {/* Due Date Selection with Calendar */}
          <div
            onClick={() => {
              closeAllDropdowns();
              setShowCalendar(!showCalendar);
            }}
            className="flex items-center px-3 py-1.5 bg-[#333] text-gray-300 rounded-full cursor-pointer text-sm hover:bg-[#444]"
          >
📅 {dueDate ? dueDate.toLocaleDateString() : "Due Date"}
</div>
          {showCalendar && (
            <div className="absolute left-0 top-full mt-2 rounded-md shadow-lg w-64 p-3 z-10">
              <DatePicker
  selected={dueDate}
  onChange={(date) => {
    setDueDate(date);
    setShowCalendar(false);
  }}
  dateFormat="yyyy/MM/dd"
  inline
/>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between items-center mt-4">
          <label className="flex items-center space-x-2 cursor-pointer text-gray-400">
            <input
              type="checkbox"
              checked={createMore}
              onChange={(e) => setCreateMore(e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600 bg-[#2a2a2a] border-gray-600"
            />
            <span className="text-sm">Create more</span>
          </label>
          <button
            onClick={() =>
              onSave({ taskName, taskDescription, selectedTeams, selectedAssignees, dueDate })
            }
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold"
          >
            Create task
          </button>
        </div>
      </div>
    </div>
  );
}
