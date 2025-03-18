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
      setEvents([...events, { title: newEventTitle, start: newEventDate, end: newEventDate, allDay: true }]);
      setModalOpen(false);
      setNewEventTitle("");
    }
  };

  return (
    <div className="relative bg-black min-h-screen p-4 text-white">
      {/* Add Event Button */}
      <button
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        onClick={() => setModalOpen(true)}
      >
        + Add Event
      </button>

      {/* Calendar */}
      <div className="mt-4 bg-black rounded-lg shadow-lg">
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
            height: "80vh",
            backgroundColor: "#000",
            color: "#b3b3b3",
            border: "none",
          }}
          components={{
            toolbar: (props) => (
              <div className="flex justify-between bg-[#151617] text-white p-4 rounded-t-lg">
                <button
                  onClick={() => props.onNavigate("PREV")}
                  className="px-4 py-2 text-gray-400 hover:text-white transition"
                >
                  ←
                </button>
                <h2 className="text-lg font-semibold">{props.label}</h2>
                <button
                  onClick={() => props.onNavigate("NEXT")}
                  className="px-4 py-2 text-gray-400 hover:text-white transition"
                >
                  →
                </button>
              </div>
            ),
            month: {
              dateHeader: ({ date }) => {
                const currentMonth = moment(date).month() === moment(date).month();
                const isToday = moment(date).isSame(new Date(), "day");

                return (
                  <div
                    className={`relative flex justify-center items-center h-12 ${
                      currentMonth ? "bg-black text-gray-300" : "bg-[#151617] text-gray-500"
                    }`}
                  >
                    {isToday ? (
                      <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                        {moment(date).date()}
                      </span>
                    ) : (
                      moment(date).date()
                    )}
                  </div>
                );
              },
            },
          }}
        />
      </div>

      {/* Modal for Adding Event */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#151617] p-6 rounded-lg shadow-xl w-96 text-white">
            <h2 className="text-lg font-semibold mb-4">Add New Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              className="w-full p-2 border rounded bg-[#232425] text-white mb-3"
            />
            <DatePicker
              selected={newEventDate}
              onChange={(date) => setNewEventDate(date)}
              className="w-full p-2 border rounded bg-[#232425] text-white"
            />
            <div className="flex justify-end space-x-3 mt-4">
              <button
                className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600 transition"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                onClick={handleAddEvent}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
