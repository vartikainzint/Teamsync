import React from "react";

// Customer Story component with quote and link
const CustomerStory = ({ quote, link }) => (
  <div className="bg-white shadow-md rounded-xl p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
    <blockquote className="italic text-gray-700">
      <p>“{quote}”</p>
    </blockquote>
    <a href={link} className="text-blue-600 font-semibold hover:underline mt-4 block">
      Read story →
    </a>
  </div>
);

const CustomerList = ({ customers }) => (
  <div className="mt-12 max-w-2xl mx-auto">
    <div className="text-center">
      <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>📖 All Customer Stories</h3>
    </div>
    {customers.map((customer, index) => (
      <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h4 className="text-xl font-semibold">{customer.name}</h4>
        <p className="text-gray-500">{customer.services}</p>
        <div className="text-right">
          <a href={customer.link} className="text-blue-500 font-semibold hover:underline">
            Read more
          </a>
        </div>
      </div>
    ))}
  </div>
);



// Main Customers Page Component
const Customer = () => {
  const customerStories = [
    { quote: "We no longer have to ask ourselves, where did that PDF go?", link: "#" },
    { quote: "How Jeremy finally found a shared inbox his team was willing to adopt", link: "#" },
    { quote: "How David finally unified communication across his team and external stakeholders", link: "#" },
    { quote: "I would hate going back to Gmail because I would lose so many superpowers", link: "#" },
    { quote: "From customer support tool to foundation for the whole business", link: "#" },
    { quote: "From endless email forwarding to increased productivity", link: "#" }
  ];

  const customers = [
    { name: "Avenue Systems", services: "Services, Audiovisual", link: "#" },
    { name: "Canny", services: "Software, SaaS", link: "#" },
    { name: "Create", services: "Services, Advertising", link: "#" },
    { name: "DataChef", services: "Services", link: "#" },
    { name: "Gigatronix", services: "Manufacturing", link: "#" },
    { name: "Growth Alliance", services: "Services, Marketing", link: "#" },
    { name: "Hexany Audio", services: "Media and Entertainment", link: "#" },
    { name: "Italic", services: "Retail, e-commerce", link: "#" },
    { name: "Landr", services: "Software, SaaS", link: "#" },
    { name: "Lionize", services: "Software, SaaS", link: "#" },
    { name: "Nixa", services: "Services, IT", link: "#" },
    { name: "Pipedrive", services: "Software, SaaS", link: "#" },
    { name: "Senders", services: "Services, IT", link: "#" },
    { name: "Smplrspace", services: "Services, Software", link: "#" },
    { name: "Tomahawk", services: "Finance, Venture capital", link: "#" },
    { name: "Uncute", services: "Retail, e-commerce", link: "#" }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* 🚀 Banner Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-12 rounded-lg mb-12 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>📢 Hear from customers like you</h1>
        <p className="text-lg md:text-xl mb-6">Learn what led them to Missive, what else they tried, and how their work improved.</p>
        <button className="bg-white text-blue-600 py-3 px-6 rounded-md font-semibold text-lg hover:bg-gray-100 transition">
          Get Started 🚀
        </button>
      </div>

      {/* 🏗️ Masonry Grid Layout for First 3 Stories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {customerStories.slice(0, 3).map((story, index) => (
          <CustomerStory key={index} quote={story.quote} link={story.link} />
        ))}
      </div>

      {/* 🔥 Second Section - Masonry Layout */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {customerStories.slice(3).map((story, index) => (
          <CustomerStory key={index} quote={story.quote} link={story.link} />
        ))}
      </section>

      {/* 📖 Customer List without images */}
      <CustomerList customers={customers} />
    </div>
  );
};

export default Customer;
