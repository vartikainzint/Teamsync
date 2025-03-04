import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Hero from "../components/Hero";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const [openFAQ, setOpenFAQ] = useState(null);

  const plans = [
    {
      name: "Starter",
      price: { yearly: "$14", monthly: "$19" },
      features: [
        "Email, SMS, social accounts",
        "Team spaces and inboxes",
        "SOC 2 compliance",
        "5GB Storage",
        "Basic Customer Support",
        "Limited Integrations (ChatGPT, Trello)",
        "Basic Analytics",
      ],
    },
    {
      name: "Productive",
      price: { yearly: "$24", monthly: "$29" },
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Rules & automation",
        "50GB Storage",
        "Priority Support",
        "CRM Integrations (Pipedrive, HubSpot)",
        "Advanced Role-based Access",
        "Multi-language Support (English, Spanish)",
      ],
    },
    {
      name: "Business",
      price: { yearly: "$36", monthly: "$49" },
      features: [
        "Everything in Productive",
        "Personalized onboarding",
        "API access",
        "Unlimited Storage",
        "AI-driven Automation",
        "White-label Custom Branding",
        "Premium Security (IP Restrictions, SAML SSO)",
        "24/7 Dedicated Support",
        "Live Training Sessions",
      ],
    },
  ];
  
  const comparisonData = [
    { feature: "Workspace Users", starter: "Up to 5 users", productive: "Up to 50 users", business: "Unlimited" },
    { feature: "SOC 2", starter: "✓", productive: "✓", business: "✓" },
    { feature: "Rules & Automation", starter: "✗", productive: "✓", business: "✓" },
    { feature: "Integrations", starter: "ChatGPT, Trello", productive: "ChatGPT, Trello, Pipedrive", business: "All integrations" },
    { feature: "Analytics", starter: "Basics", productive: "Advanced", business: "Advanced + Reports" },
    { feature: "API Access", starter: "✗", productive: "✗", business: "✓" },
    { feature: "SAML SSO", starter: "✗", productive: "✗", business: "✓ (Okta, Azure AD, etc.)" },
    { feature: "IP Restrictions", starter: "✗", productive: "✗", business: "✓" },
    { feature: "Personalized Onboarding", starter: "✗", productive: "✗", business: "✓ (Live sessions)" },
    { feature: "Customer Support", starter: "Email support", productive: "Priority support", business: "24/7 Dedicated support" },
    { feature: "Custom Branding", starter: "✗", productive: "✓", business: "✓ (White-labeling)" },
    { feature: "Role-based Access", starter: "Basic roles", productive: "Advanced roles", business: "Custom roles & permissions" },
    { feature: "Multi-language Support", starter: "English only", productive: "English, Spanish", business: "All supported languages" },
    { feature: "Storage Limit", starter: "5GB", productive: "50GB", business: "Unlimited" },
  ];
  

  const faqs = [
    { question: "Can I try it for free?", answer: "Yes! We offer a 30-day free trial." },
    { question: "Can I import more than one account?", answer: "Yes, you can link multiple accounts." },
    { question: "What happens if I cancel?", answer: "You will have access until the end of the billing period." },
  ];

  return (
    <>
    <Hero />
    <div className="p-6 max-w-5xl mx-auto">
      {/* Pricing Header */}
      <h2 className="text-3xl font-bold text-center" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Choose Your Plan</h2>
      <div className="flex justify-center my-4">
        <button 
          className={`px-4 py-2 mx-2 rounded ${billingCycle === "yearly" ? "bg-blue-500 text-gray border" : "bg-gray-200"}`}
          onClick={() => setBillingCycle("yearly")}>Billed Yearly</button>
        <button 
          className={`px-4 py-2 mx-2 rounded ${billingCycle === "monthly" ? "bg-blue-500 text-gray" : "bg-gray-200"}`}
          onClick={() => setBillingCycle("monthly")}>Billed Monthly</button>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            className="border p-6 rounded-xl shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold my-2">{plan.price[billingCycle]}<span className="text-lg">/mo</span></p>
            <ul className="mt-3 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-600">✓ {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <h2 className="text-3xl font-bold text-center mt-12" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Compare Plans</h2>
      <div className="overflow-x-auto mt-6">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Starter</th>
              <th className="p-3 border">Productive</th>
              <th className="p-3 border">Business</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-3 border">{item.feature}</td>
                <td className="p-3 border">{item.starter}</td>
                <td className="p-3 border">{item.productive}</td>
                <td className="p-3 border">{item.business}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ Section */}
      <h2 className="text-3xl font-bold text-center mt-12" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="">
            <button 
              className="flex justify-between items-center w-full text-left"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
              <span className="text-lg font-semibold">{faq.question}</span>
              <FaChevronDown className={`${openFAQ === index ? "rotate-180" : ""} transition-transform`} />
            </button>
            {openFAQ === index && <motion.p className="text-gray-600 py-4 px-2 border border-gray-300 border-t-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{faq.answer}</motion.p>}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Pricing;
