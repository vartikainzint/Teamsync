import { useState } from "react";
import { Copy, RefreshCcw } from "lucide-react";

export default function RewardComponent() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://teamsyncapp.com/?ref_id=AA5288C3CD02";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 bg-gray-800 shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold">eve3ve</h2>
      <p className="text-gray-500">Rewards</p>
      <div className="bg-gray-100 p-3 rounded-lg mt-3">
        <p className="text-sm text-gray-600">
          TeamSync’s rewards program lets you get discounts on your monthly bill
          or receive cash for referring TeamSync.
        </p>
        <a href="#" className="text-blue-600 text-sm font-medium">Documentation</a>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 text-sm">Referral link</p>
        <div className="flex items-center bg-gray-200 p-2 rounded-lg">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="bg-transparent text-gray-700 w-full outline-none"
          />
          <button onClick={handleCopy} className="ml-2 text-gray-500 hover:text-gray-700">
            <Copy size={18} />
          </button>
        </div>
        {copied && <p className="text-green-500 text-xs mt-1">Copied!</p>}
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">Rewards</p>
          <button className="text-blue-600 text-sm flex items-center gap-1">
            <RefreshCcw size={14} /> Refresh
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2">You have not referred anyone yet.</p>
      </div>
    </div>
  );
}
