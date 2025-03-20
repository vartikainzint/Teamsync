import { useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";

export default function TaskPanel() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Development", status: "To do" },
    { id: 2, text: "Tyuui", status: "To do" },
    { id: 3, text: "Backend", status: "To do" },
    { id: 4, text: "Completed Task", status: "Closed" },
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

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    "To do": "#9CA3AF",
    "In Progress": "#3B82F6",
    "Closed": "#10B981",
  };

  const handleStatusChange = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    setOpenDropdown(null);
  };

  const renderTasks = (status) =>
    filteredTasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div
          key={task.id}
          className="flex items-center py-2 px-4 hover:bg-gray-800 rounded-lg mb-1 relative"
        >
          <div className="relative mr-3">
            <div
              className="w-4 h-4 rounded-full cursor-pointer"
              style={{ backgroundColor: statusColors[task.status] }}
              onClick={() =>
                setOpenDropdown((prev) => (prev === task.id ? null : task.id))
              }
            ></div>

            {openDropdown === task.id && (
              <div className="absolute left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg z-10 w-36">
                {Object.keys(statusColors).map((s) => (
                  <div
                    key={s}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-sm text-gray-300"
                    onClick={() => handleStatusChange(task.id, s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          <span className="text-gray-300 text-sm">{task.text}</span>
          
          {/* Add assignee avatars for some tasks */}
          {status === "To do" && (
            <div className="ml-auto flex">
              <div className="w-6 h-6 rounded-full bg-gray-600 text-xs flex items-center justify-center text-white">
                {task.id === 3 && <span>v</span>}
              </div>
              {task.id === 3 && (
                <div className="ml-1 text-xs text-gray-400">Apr 24</div>
              )}
            </div>
          )}
        </div>
      ));

  const countTasksByStatus = (status) => {
    return filteredTasks.filter((task) => task.status === status).length;
  };

  return (
    <div className="mx-auto !bg-[#050607] text-white p-4 min-h-screen">
      {/* Search Box */}
      <div className="flex items-center bg-gray-800 p-2 rounded-lg mb-4">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="ml-2 w-full outline-none bg-transparent text-gray-300"
        />
      </div>

      {/* User Filter */}
      <div className="mb-4 flex">
        <div className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center">
          <span>You</span>
          <button className="ml-1 text-gray-400">×</button>
        </div>
      </div>

      {/* Task Lists */}
      {Object.keys(statusColors).map((status) => (
        <div key={status} className="mb-6">
          <div className="flex justify-between items-center cursor-pointer py-2" onClick={() => toggleSection(status)}>
            <div className="flex items-center">
              <p className="text-sm font-medium text-gray-300">{status}</p>
              <span className="text-xs bg-gray-800 px-2 py-1 rounded-full ml-2 text-gray-400">
                {countTasksByStatus(status)}
              </span>
              <ChevronDown
                size={14}
                className={`text-gray-500 ml-1 transform transition-transform ${
                  expandedSections[status] ? "rotate-180" : ""
                }`}
              />
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowInput({ ...showInput, [status]: !showInput[status] });
              }}
              className="p-1 rounded-full hover:bg-gray-700"
            >
              <Plus size={16} className="text-gray-400" />
            </button>
          </div>

          {expandedSections[status] && (
            <div className="mt-1">
              {renderTasks(status)}

              {showInput[status] && (
                <div className="mt-2 flex space-x-2">
                  <input
                    type="text"
                    value={newTasks[status]}
                    onChange={(e) =>
                      setNewTasks({ ...newTasks, [status]: e.target.value })
                    }
                    placeholder="Enter task..."
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg outline-none text-gray-300"
                    autoFocus
                  />
                  <button
                    onClick={() => addTask(status)}
                    className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600"
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