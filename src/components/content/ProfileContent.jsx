import { useState } from "react";
import { Mail, Phone, StickyNote } from "lucide-react";

export default function ProfileContent() {
  const [notes, setNotes] = useState([""]); // Initialize with one notes field

  // Function to add new empty note field
  const addNoteField = () => {
    setNotes([...notes, ""]);
  };

  // Function to handle change in specific note field
  const handleNoteChange = (index, value) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = value;
    setNotes(updatedNotes);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-800 rounded-2xl shadow-xl border border-gray-700">
      {/* Organization Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-xl font-semibold text-white">
          I
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">Organisation</h2>
          <p className="text-sm text-gray-400">Profile</p>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-2 leading-relaxed">
        Organization profiles are mostly used to populate variables in signatures. Please fill out the form below to update your organization's details.
      </p>

      <form className="space-y-6">
        {/* First and Last Name */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-xs text-gray-400 mb-2">First name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-xs text-gray-400 mb-2">Last name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Pronouns */}
        <div>
          <label className="block text-xs text-gray-400 mb-2">Pronouns</label>
          <input
            type="text"
            placeholder="They/Them"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="block text-xs text-gray-400 mb-2">Job title</label>
          <input
            type="text"
            placeholder="Job Title"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="flex items-center text-xs text-gray-400 mb-2">
            <Mail className="h-4 w-4 mr-2 text-gray-500" /> Work Email
          </label>
          <input
            type="email"
            placeholder="example@domain.com"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Phone */}
        <div>
          <label className="flex items-center text-xs text-gray-400 mb-2">
            <Phone className="h-4 w-4 mr-2 text-gray-500" /> Mobile Phone
          </label>
          <input
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Notes Section (Dynamic Fields) */}
        {notes.map((note, index) => (
          <div key={index}>
            <label className="flex items-center text-xs text-gray-400 mb-2">
              <StickyNote className="h-4 w-4 mr-2 text-gray-500" /> Notes {index + 1}
            </label>
            <textarea
              placeholder={`Add notes here...`}
              rows="3"
              value={note}
              onChange={(e) => handleNoteChange(index, e.target.value)}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        ))}

        {/* Add More Fields Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={addNoteField}
            className="flex items-center text-blue-400 text-sm hover:underline hover:text-blue-500 transition"
          >
            <span className="mr-1">+</span> Add more fields
          </button>
        </div>
      </form>
    </div>
  );
}
