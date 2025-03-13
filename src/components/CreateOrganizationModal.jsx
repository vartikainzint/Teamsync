import { useState } from "react";
import { X } from "lucide-react";

export default function CreateOrganizationModal({ isOpen, onClose, onCreate }) {
  const [step, setStep] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [businessHours, setBusinessHours] = useState({
    Mon: { active: true, from: "09:00", to: "17:00" },
    Tue: { active: true, from: "09:00", to: "17:00" },
    Wed: { active: true, from: "09:00", to: "17:00" },
    Thu: { active: true, from: "09:00", to: "17:00" },
    Fri: { active: true, from: "09:00", to: "17:00" },
    Sat: { active: false, from: "09:00", to: "17:00" },
    Sun: { active: false, from: "09:00", to: "17:00" },
  });
  const [inactivity, setInactivity] = useState({ days: 7, hours: 0, minutes: 0 });

  const handleCreateOrganization = () => {
    onCreate({
      companyName,
      businessHours,
      inactivity: {
        days: Number(inactivity.days),
        hours: Number(inactivity.hours),
        minutes: Number(inactivity.minutes),
      },
    });
    onClose();
  };

  const handleCheckboxChange = (day) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], active: !prev[day].active },
    }));
  };

  const handleBusinessHourChange = (day, field, value) => {
    setBusinessHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleInactivityChange = (field, value) => {
    setInactivity((prev) => ({
      ...prev,
      [field]: value.replace(/[^0-9]/g, ""),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 dark:bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg md:max-w-2xl relative p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-300 transition"
        >
          <X size={22} />
        </button>

        {/* Step 1: Company Name */}
        {step === 1 && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-white">
              Create Organization
            </h2>
            <input
              type="text"
              placeholder="Enter organization name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full border border-gray-600 bg-gray-700 text-gray-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            />
            <div className="flex justify-center">
              <button
                disabled={!companyName.trim()}
                onClick={() => setStep(2)}
                className="text-blue-400 font-semibold px-6 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition w-full sm:w-auto"
              >
                Next
              </button>
            </div>
          </>
        )}

        {/* Step 2: Business Hours & Inactivity */}
        {step === 2 && (
          <>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center text-white">
              Business Hours
            </h2>

            {/* Weekdays */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-48 sm:max-h-56 overflow-y-auto border border-gray-600 p-3 rounded-lg mb-4 sm:mb-6">
              {Object.keys(businessHours).map((day) => (
                <div key={day} className="space-y-1">
                  <label className="flex items-center gap-2 font-medium text-gray-300">
                    <input
                      type="checkbox"
                      checked={businessHours[day].active}
                      onChange={() => handleCheckboxChange(day)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                    {day}
                  </label>
                  {businessHours[day].active && (
                    <div className="flex gap-2">
                      <input
                        type="time"
                        value={businessHours[day].from}
                        onChange={(e) =>
                          handleBusinessHourChange(day, "from", e.target.value)
                        }
                        className="w-1/2 border rounded-md px-2 py-1 bg-gray-700 border-gray-600 text-gray-100"
                      />
                      <input
                        type="time"
                        value={businessHours[day].to}
                        onChange={(e) =>
                          handleBusinessHourChange(day, "to", e.target.value)
                        }
                        className="w-1/2 border rounded-md px-2 py-1 bg-gray-700 border-gray-600 text-gray-100"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Inactivity Period */}
            <div className="mt-3">
              <h3 className="font-semibold mb-2 text-white text-center sm:text-left">
                Inactivity Period (Auto Logout)
              </h3>
              <div className="flex gap-3 flex-wrap justify-center sm:justify-start">
                {["days", "hours", "minutes"].map((field) => (
                  <input
                    key={field}
                    type="number"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={inactivity[field]}
                    onChange={(e) => handleInactivityChange(field, e.target.value)}
                    className="w-24 border rounded-md px-2 py-1 bg-gray-700 border-gray-600 text-gray-100"
                    min="0"
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => setStep(1)}
                className="text-blue-400 font-semibold px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition w-full"
              >
                Back
              </button>
              <button
                onClick={handleCreateOrganization}
                className="text-blue-400 font-semibold px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition w-full"
              >
                Create Organization
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
