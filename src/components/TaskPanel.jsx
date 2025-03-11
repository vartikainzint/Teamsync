import { useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";

export default function TaskPanel() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Test Task", status: "To do" },
    { id: 2, text: "Another Task", status: "In Progress" },
    { id: 3, text: "Completed Task", status: "Closed" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    "To do": true,
    "In Progress": true,
    "Closed": true,
  });
  const [newTasks, setNewTasks] = useState({
    "To do": "",
    "In Progress": "",
    "Closed": "",
  });
  const [showInput, setShowInput] = useState({
    "To do": false,
    "In Progress": false,
    "Closed": false,
  });

  const statusColors = {
    "To do": "#9CA3AF",
    "In Progress": "#3B82F6",
    "Closed": "#10B981",
  };

  const addTask = (status) => {
    if (newTasks[status].trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, text: newTasks[status], status },
      ]);
      setNewTasks({ ...newTasks, [status]: "" });
      setShowInput({ ...showInput, [status]: false });
    }
  };

  const toggleSection = (status) => {
    setExpandedSections((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    setOpenDropdown(null);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderTasks = (status) =>
    filteredTasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          className="flex items-center space-x-2 py-2 bg-gray-100 p-3 rounded-lg mb-2 relative"
        >
          {/* Status Dot and Dropdown */}
          <div className="relative">
            <div
              className="w-4 h-4 rounded-full cursor-pointer"
              style={{ backgroundColor: statusColors[task.status] }}
              onClick={() =>
                setOpenDropdown((prev) => (prev === task.id ? null : task.id))
              }
            ></div>

            {/* Status Change Dropdown */}
            {openDropdown === task.id && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg z-10 w-40">
                {Object.keys(statusColors).map((s) => (
                  <div
                    key={s}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleStatusChange(task.id, s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Task Text */}
          <span className="text-gray-800 text-sm">{task.text}</span>
        </div>
      ));

  return (
    <div className="mx-auto p-6">
      {/* Search Input */}
      <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="ml-2 w-full outline-none bg-transparent"
        />
      </div>

      {/* Task Sections */}
      {Object.keys(statusColors).map((status) => (
        <div key={status} className="mb-6">
          {/* Section Header */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(status)}
          >
            <div className="flex items-center space-x-2">
              <p className="text-sm font-semibold">{status}</p>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                {filteredTasks.filter((task) => task.status === status).length}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-500 transform transition-transform ${
                  expandedSections[status] ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Add Task Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInput({ ...showInput, [status]: !showInput[status] });
              }}
              className="p-1 rounded-full bg-blue-500 hover:bg-blue-600"
            >
              <Plus size={16} color="white" />
            </button>
          </div>

          {/* Task List */}
          {expandedSections[status] && (
            <div className="mt-2 pl-4">
              {renderTasks(status)}

              {/* Add Task Input */}
              {showInput[status] && (
                <div className="mt-2 flex space-x-2">
                  <input
                    type="text"
                    value={newTasks[status]}
                    onChange={(e) =>
                      setNewTasks({ ...newTasks, [status]: e.target.value })
                    }
                    placeholder="Enter task..."
                    className="w-full px-3 py-2 border rounded-lg outline-none"
                    autoFocus
                  />
                  <button
                    onClick={() => addTask(status)}
                    className="px-3 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600"
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
