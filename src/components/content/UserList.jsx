import { useState } from "react";

export default function UserList() {
  const [activeTab, setActiveTab] = useState("Users");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    {
      name: "Test",
      email: "test@gmail.com",
      login: "Google",
      role: "Owner",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=faces&fit=crop&h=40&w=40",
    },
  ];

  const invites = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Pending",
    },
  ];

  const handleDelete = (name) => {
    alert(`Delete clicked for ${name}`);
  };

  const handleAddUser = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-lg font-semibold">
            E
          </div>
          <div>
            <h1 className="text-xl font-semibold">Org name</h1>
            <p className="text-gray-400 text-sm">Users</p>
          </div>
        </div>

        {/* Tabs and Add User */}
        <div className="flex items-center justify-between my-8">
          <div className="flex bg-gray-700/50 rounded-full p-1 border border-gray-600 for-users">
            {["Users", "Invites"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-300 hover:bg-gray-600/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={handleAddUser}
            className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition flex items-center gap-2  px-4 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add User
          </button>
        </div>

        {/* Table */}
        <div className="rounded-lg border border-gray-700 overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3 px-4 text-left text-gray-400">Name</th>
                <th className="py-3 px-4 text-left text-gray-400">Status</th>
                <th className="py-3 px-4 text-left text-gray-400">
                  {activeTab === "Users" ? "Login" : "Email"}
                </th>
                <th className="py-3 px-4 text-left text-gray-400">Role</th>
                <th className="py-3 px-4 text-right text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === "Users" ? users : invites).map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700/50"
                >
                  <td className="py-3 px-4 flex items-center gap-3">
                    {activeTab === "Users" ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center text-white">
                        {item.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-white">
                        {item.name}{" "}
                        {index === 0 && activeTab === "Users" && (
                          <span className="text-gray-400">(You)</span>
                        )}
                      </p>
                      {activeTab === "Users" && (
                        <p className="text-gray-400 text-sm">{item.email}</p>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.status === "Active"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        }`}
                      />
                      <span className="text-white">{item.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-white">
                    {activeTab === "Users" ? (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="Google"
                        className="w-5 h-5"
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td className="py-3 px-4 text-white">{item.role}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDelete(item.name)}
                      className="hover:text-red-600"
                      title="Delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m5 0H6"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
    <div className="relative bg-gray-900 text-white rounded-xl shadow-2xl w-full max-w-md mx-4">
      
      {/* Modal Header */}
      <div className="flex justify-between items-center border-b border-gray-700 px-6 py-4">
        <h2 className="text-lg font-semibold">
          Invite new user to 
          <span className="bg-gray-700 text-white text-sm font-medium px-2 py-1 rounded-full ml-2">Org name</span>
        </h2>
        <button
          onClick={handleCloseModal}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-6 space-y-5">
        <p className="text-gray-400 text-sm">
          An email will be sent with a link to join your organization.
        </p>

        <div className="space-y-4">
          {/* First and Last Name */}
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
          />

          {/* Copy Settings Toggle */}
          <div className="flex items-center justify-start border border-gray-700 rounded-lg px-4 py-3">
          <label className="relative inline-flex items-center cursor-pointer mr-4">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-500 peer-checked:bg-blue-600"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
            </label>
            <div>
              <p className="font-medium">Copy settings from another user</p>
              <p className="text-sm text-gray-400">Can be customized in next steps.</p>
            </div>
           
          </div>

          {/* Admin Permission Toggle */}
          <div className="flex items-center justify-start border border-gray-700 rounded-lg px-4 py-3">
          <label className="relative inline-flex items-center cursor-pointer mr-4">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-500 peer-checked:bg-blue-600"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
            </label>
            <div>
              <p className="font-medium">Give admin permissions</p>
              <p className="text-sm text-gray-400">Admins can manage all organization settings. <a href="#" className="text-blue-400 underline">Learn more</a></p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="flex justify-end space-x-3 border-t border-gray-700 px-6 py-4">
        <button
          onClick={handleCloseModal}
          className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition"
        >
          Cancel
        </button>
        <button
          onClick={() => alert('User Added!')}
          className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 transition"
        >
          Send invite
        </button>
      </div>
    </div>
  </div>
)}



    </div>
  );
}
