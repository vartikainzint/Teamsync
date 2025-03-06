import { useState } from "react";
import { Search } from "lucide-react";

export default function TaskPanel() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Test Task", status: "To do" },
    { id: 2, text: "Another Task", status: "In Progress" },
    { id: 3, text: "Completed Task", status: "Closed" },
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskStatus, setNewTaskStatus] = useState("To do");
  const [showInput, setShowInput] = useState(null); // To show input for a specific status
  const [searchQuery, setSearchQuery] = useState(""); // Search query for tasks

  const addTask = () => {
    if (newTaskText.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTaskText, status: newTaskStatus },
      ]);
      setNewTaskText(""); // Reset task input field
      setShowInput(null); // Hide the input field after task is added
    }
  };

  // Filter tasks by search query
  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render tasks filtered by status
  const renderTasks = (status) =>
    filteredTasks
      .filter((task) => task.status === status)
      .map((task) => (
        <div key={task.id} className="flex p-3 rounded shadow-sm bg-gray-50 mb-4">
          <span className="text-gray-800">{task.text}</span>
        </div>
      ));

  return (
    <div className="mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Task Panel</h2>

      {/* Search bar with icon */}
      <div className="flex items-center px-4 py-2 rounded-lg bg-gray-100 w-[30%] max-w-[30%] mb-6">
      <Search size={18} className="text-gray-500" />
        <input
          type="text"
          value={searchQuery} // Bind search query state
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state on input change
          placeholder="Search tasks..."
          className="ml-2 w-full outline-none bg-transparent"
        />
      </div>

      {/* Task categories: To do, In Progress, Closed */}
      <div className="flex flex-col space-y-6">
        {["To do", "In Progress", "Closed"].map((status) => (
          <div key={status} className="p-2  rounded shadow-md bg-white">
            <div className="flex justify-start items-center mb-3">
              <p className="font-semibold text-sm">{status}</p>

              {/* Plus button to add task */}
              <button
                className="bg-green-500 border rounded-full text-lg ml-2"
                onClick={() => {
                  setShowInput(status); // Show input for the clicked status
                  setNewTaskStatus(status); // Set the new task status
                }}
              >
                +
              </button>
            </div>

            {/* Show input to add a new task */}
            {showInput === status && (
              <div className="flex mb-3">
                <input
                  type="text"
                  value={newTaskText}
                  onChange={(e) => setNewTaskText(e.target.value)}
                  placeholder="Enter new task..."
                  className="border p-2 rounded w-full shadow-md rounded-lg bg-gray-100 w-[70%] max-w-[70%]"
                />
                <button
                  className="ml-3 px-4 py-2 bg-blue-600 border rounded-full rounded-lg bg-gray-100 w-[15%] max-w-[15%]"
                  onClick={addTask}
                >
                  Add Task
                </button>
              </div>
            )}

            {renderTasks(status)}
          </div>
        ))}
      </div>
    </div>
  );
}
