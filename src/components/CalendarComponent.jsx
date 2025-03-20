import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [events, setEvents] = useState([
    {
      title: "Event on March 4",
      start: new Date(2025, 2, 4),
      end: new Date(2025, 2, 4),
      allDay: true,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDate, setNewEventDate] = useState(new Date());

  const handleAddEvent = () => {
    if (newEventTitle.trim() !== "") {
      setEvents([
        ...events,
        { title: newEventTitle, start: newEventDate, end: newEventDate, allDay: true },
      ]);
      setModalOpen(false);
      setNewEventTitle("");
    }
  };

  return (
    <div className="relative p-4 md:p-6 bg-gray-900 min-h-screen text-white">
      {/* Add Event Button */}
      <div className="flex justify-end mb-4">
        <button
          className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition"
          onClick={() => setModalOpen(true)}
        >
          + Add Event
        </button>
      </div>

      {/* Calendar */}
      <div className="calendar-wrapper bg-gray-800 p-3 md:p-5 rounded-xl shadow-lg">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={date}
          views={["month", "week", "day", "agenda"]}
          defaultView="month"
          view={view}
          onView={(newView) => setView(newView)}
          onNavigate={(newDate) => setDate(newDate)}
          selectable
          style={{
            minHeight: "60vh",
            maxHeight: "75vh",
            width: "100%",
            color: "white",
            backgroundColor: "#111827",
            padding: "10px",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Modal for Adding Event */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 px-4">
          <div className="bg-gray-800 p-5 md:p-6 rounded-lg shadow-xl w-full max-w-md border border-gray-700">
            <h2 className="text-lg font-semibold mb-4 text-white">Add New Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded mb-4 focus:outline-none"
            />
            <DatePicker
              selected={newEventDate}
              onChange={(date) => setNewEventDate(date)}
              className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded focus:outline-none"
              calendarClassName="dark-datepicker"
            />
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="text-gray-400 font-semibold px-4 py-2 bg-gray-700 border border-gray-600 rounded hover:bg-gray-600 transition"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="text-blue-400 font-semibold px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:bg-gray-700 transition"
                onClick={handleAddEvent}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive & Dark Mode Styling */}
      <style jsx>{`
        :global(.react-datepicker) {
          background-color: #1f2937 !important;
          border: 1px solid #374151;
          color: white;
        }
        :global(.react-datepicker__header) {
          background-color: #374151 !important;
          border-bottom: 1px solid #4b5563;
        }
        :global(.react-datepicker__day) {
          color: white;
        }
        :global(.react-datepicker__day--selected) {
          background-color: #2563eb !important;
        }
        :global(.react-datepicker__day--keyboard-selected) {
          background-color: #1d4ed8 !important;
        }

        @media (max-width: 768px) {
          .calendar-wrapper {
            padding: 10px;
          }
        }

        @media (max-width: 640px) {
          .calendar-wrapper {
            padding: 5px;
          }

          :global(.rbc-calendar) {
            font-size: 12px;
          }

          :global(.rbc-toolbar) {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default CalendarComponent;
