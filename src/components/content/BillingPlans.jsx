import { useState } from "react";

export default function BillingPlans() {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [showModal, setShowModal] = useState(false);
  const [planToUpgrade, setPlanToUpgrade] = useState(null);

  const plans = [
    { id: "free", name: "Free", monthly: "$0", yearly: "$0", users: "Up to 3", history: "15 days", sharedAccounts: "2" },
    { id: "starter", name: "Starter", monthly: "$14", yearly: "$134", users: "Up to 5", history: "Unlimited", sharedAccounts: "5 per user" },
    { id: "productive", name: "Productive", monthly: "$24", yearly: "$230", users: "Up to 50", history: "Unlimited", sharedAccounts: "5 per user" },
    { id: "business", name: "Business", monthly: "$36", yearly: "$345", users: "Unlimited", history: "Unlimited", sharedAccounts: "5 per user" },
  ];

  const handlePlanClick = (plan) => {
    if (plan.id !== selectedPlan) {
      setPlanToUpgrade(plan);
      setShowModal(true);
    }
  };

  const confirmUpgrade = () => {
    setSelectedPlan(planToUpgrade.id);
    setShowModal(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg relative">
      <h2 className="text-sm font-semibold">Billing</h2>

      {/* Billing Cycle Toggle */}
      <div className="flex justify-end space-x-2 mt-4">
        <button
          className={`px-3 py-1 rounded ${billingCycle === "monthly" ? "bg-blue-500 text-white" : "bg-gray-900"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-3 py-1 rounded ${billingCycle === "yearly" ? "bg-blue-500 text-white" : "bg-gray-900"}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly <span className="bg-yellow-400 text-black px-2 rounded text-sm">Save 20%</span>
        </button>
      </div>

      {/* Plan Selection */}
      <div className="mt-4 grid grid-cols-4 gap-4 border p-4 rounded-lg">
        {plans.map((plan) => (
          <button
            key={plan.id}
            className={`p-3 border rounded-md text-center ${selectedPlan === plan.id ? "border-blue-500 bg-gray-800" : "border-gray-300"}`}
            onClick={() => handlePlanClick(plan)}
          >
            <h3 className="text-sm font-semibold">{plan.name}</h3>
            <p className="text-sm">{billingCycle === "monthly" ? plan.monthly : plan.yearly}</p>
            <p className="text-sm text-gray-500">per user/{billingCycle}</p>
          </button>
        ))}
      </div>

      {/* Feature Table */}
      <div className="mt-6 border rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-sm text-left text-sm  p-2">Pricing</th>
              {plans.map((plan) => (
                <th key={plan.id} className="text-sm  p-2">{plan.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="text-sm  p-2">Price</td>
              {plans.map((plan) => (
                <td key={plan.id} className="text-sm  p-2 text-center">
                  {billingCycle === "monthly" ? plan.monthly : plan.yearly}
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="text-sm  p-2">Users</td>
              {plans.map((plan) => (
                <td key={plan.id} className="text-sm  p-2 text-center">{plan.users}</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="text-sm  p-2">History</td>
              {plans.map((plan) => (
                <td key={plan.id} className="text-sm  p-2 text-center">{plan.history}</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="text-sm  p-2">Shared Accounts</td>
              {plans.map((plan) => (
                <td key={plan.id} className="text-sm  p-2 text-center">{plan.sharedAccounts}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50 w-full">
          <div className="bg-gray-800 rounded-lg p-6 w-96 shadow-lg">
            <h3 className="text-sm font-semibold">
              Upgrade to the <span className="text-blue-600">{planToUpgrade.name} {billingCycle}</span> plan?
            </h3>
            <p className="text-sm text-gray-100 mt-2">
              Are you sure you want to change your plan from <strong>{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}</strong> to <strong>{planToUpgrade.name} {billingCycle}</strong>?
            </p>
            <div className="bg-yellow-100 p-3 mt-4 rounded-md border border-yellow-300">
              <p className="text-yellow-800 text-sm">
                This {billingCycle} plan provides a <strong className="text-red-600">20% discount</strong> compared to the monthly pricing.
              </p>
              <p className="text-yellow-600 text-sm mt-1">
                Please note that this is a non-refundable, one-time payment.
              </p>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button className="px-4 py-2 border rounded" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={confirmUpgrade}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
