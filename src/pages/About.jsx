import React from "react";
import sharedInboxImg from "../assets/images/img-sharedinbox.png"; // Importing the custom image

const About = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>About Us</h2>
        <p className="text-lg text-gray-600">
          We are a passionate team committed to delivering innovation and excellence.
        </p>
      </div>

      {/* Split Section - Our Mission */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mt-16 max-w-6xl mx-auto">
        <img
          src={sharedInboxImg}
          alt="Our Mission"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower businesses with innovative technology and creative solutions. 
            We focus on quality, innovation, and customer success.
          </p>
        </div>
      </div>

      {/* Split Section - Our Values */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mt-16 max-w-6xl mx-auto">
        <img
          src={sharedInboxImg}
          alt="Our Values"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Our Values</h2>
          <ul className="text-gray-600 list-disc list-inside space-y-2">
            <li>🚀 Innovation & Creativity</li>
            <li>🎯 Customer-First Approach</li>
            <li>💡 Commitment to Excellence</li>
            <li>⚡ Integrity & Transparency</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Join Us</h2>
        <p className="text-gray-600 mb-6">
          Want to be a part of our journey? We’d love to hear from you!
        </p>
        <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
          Book a demo
        </a>
      </div>
    </div>
  );
};

// Team members with RandomUser API images
const teamMembers = [
  { name: "Alice Johnson", role: "CEO", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Bob Smith", role: "Lead Developer", image: "https://randomuser.me/api/portraits/men/44.jpg" },
  { name: "Charlie Brown", role: "Designer", image: "https://randomuser.me/api/portraits/men/45.jpg" }
];

export default About;
