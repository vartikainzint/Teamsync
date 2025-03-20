import { useState } from "react";
import { Bell, Volume2, Mail, CheckCircle } from "lucide-react";

export default function NotificationSettings() {
  const [allowNotifications, setAllowNotifications] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [dismissNewMessages, setDismissNewMessages] = useState(true);
  const [dismissMentions, setDismissMentions] = useState(false);
  const [mobileNotifications, setMobileNotifications] = useState("Always");
  const [emailNotifications, setEmailNotifications] = useState("Once every 15 minutes");
  const [notifyEmails, setNotifyEmails] = useState(true);
  const [notifyMentions, setNotifyMentions] = useState(true);
  const [notifyComments, setNotifyComments] = useState(true);
  const [notifyAssignments, setNotifyAssignments] = useState(false);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white space-y-6">
      {/* Desktop Section */}
      <h3 className="text-sm font-medium bg-gray-700 p-2 rounded">Desktop</h3>
      <div className="space-y-4 p-4 bg-gray-800 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300 flex items-center">
            <Bell className="w-4 h-4 mr-2" /> Allow notifications
          </span>
          <button className="text-blue-400 text-sm">Request permission</button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300 flex items-center">
            <Volume2 className="w-4 h-4 mr-2" /> Play a sound
          </span>
          <input type="checkbox" className="toggle-switch" checked={playSound} onChange={() => setPlaySound(!playSound)} />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" /> Automatically dismiss new messages
          </span>
          <input type="checkbox" className="toggle-switch" checked={dismissNewMessages} onChange={() => setDismissNewMessages(!dismissNewMessages)} />
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300 flex items-center">
            <CheckCircle className="w-4 h-4 mr-2" /> Automatically dismiss @mentions
          </span>
          <input type="checkbox" className="toggle-switch" checked={dismissMentions} onChange={() => setDismissMentions(!dismissMentions)} />
        </div>
      </div>

      {/* Mobile Section */}
      <h3 className="text-sm font-medium bg-gray-700 p-2 rounded">Mobile</h3>
      <div className="p-4 bg-gray-800 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Send notifications to mobile device(s)</span>
          <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm" value={mobileNotifications} onChange={(e) => setMobileNotifications(e.target.value)}>
            <option>Always</option>
            <option>Never</option>
          </select>
        </div>
      </div>

      {/* Email Notifications Section */}
      <h3 className="text-sm font-medium bg-gray-700 p-2 rounded">Email Notifications</h3>
      <div className="p-4 bg-gray-800 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300">Send email notifications for missed mentions and assignments</span>
          <select className="border border-gray-600 p-1 rounded bg-gray-800 text-white text-sm" value={emailNotifications} onChange={(e) => setEmailNotifications(e.target.value)}>
            <option>Once every 15 minutes</option>
            <option>Hourly</option>
            <option>Daily</option>
          </select>
        </div>
      </div>

      {/* Notify Section */}
      <h3 className="text-sm font-medium bg-gray-700 p-2 rounded">Notify</h3>
      <div className="p-4 bg-gray-800 rounded-lg">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr>
              <th className="text-left">Type</th>
              <th>Desktop</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emails</td>
              <td><input type="checkbox" checked={notifyEmails} onChange={() => setNotifyEmails(!notifyEmails)} /></td>
              <td><input type="checkbox" checked={notifyEmails} onChange={() => setNotifyEmails(!notifyEmails)} /></td>
            </tr>
            <tr>
              <td>@mentions</td>
              <td><input type="checkbox" checked={notifyMentions} onChange={() => setNotifyMentions(!notifyMentions)} /></td>
              <td><input type="checkbox" checked={notifyMentions} onChange={() => setNotifyMentions(!notifyMentions)} /></td>
            </tr>
            <tr>
              <td>Comments</td>
              <td><input type="checkbox" checked={notifyComments} onChange={() => setNotifyComments(!notifyComments)} /></td>
              <td><input type="checkbox" checked={notifyComments} onChange={() => setNotifyComments(!notifyComments)} /></td>
            </tr>
            <tr>
              <td>Assignments</td>
              <td><input type="checkbox" checked={notifyAssignments} onChange={() => setNotifyAssignments(!notifyAssignments)} /></td>
              <td><input type="checkbox" checked={notifyAssignments} onChange={() => setNotifyAssignments(!notifyAssignments)} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
