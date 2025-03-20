import React, { useState } from 'react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: '🎉',
      description: 'All you need to setup your team, from importing emails to @mentioning coworkers.',
    },
    {
      id: 'email-sharing',
      title: 'Email sharing configuration',
      icon: '👥',
      description: 'Automatically share team emails to boost your productivity.',
    },
    {
      id: 'triage-assign',
      title: 'How to triage and assign?',
      icon: '🧭',
      description: 'Use the assignment flow to improve your customer service.',
    },
    {
      id: 'glossary',
      title: 'Glossary',
      icon: '📖',
      description: 'teamsync terms and definitions.',
    },
    {
      id: 'team-inboxes',
      title: 'Take advantage of Team inboxes',
      icon: '📥',
      description: 'Team Inboxes offer a powerful workflow for all of your shared accounts, learn how to use them.',
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: '🙋🏻‍♀️',
      description: 'Hundreds of questions and answers covering every aspect of teamsync, from labels to pricing to assignment, etc.',
    },
    {
      id: 'aliases-signatures',
      title: 'Aliases & signatures',
      icon: '✍️',
      description: 'Learn how to perfectly setup your aliases and signatures.',
    },
    {
      id: 'teamsync-tips',
      title: 'teamsync Tips & Tricks',
      icon: '🏓',
      description: 'Improve your email and chat game using these simple tricks.',
    },
    {
      id: 'calendar',
      title: 'Learn everything about the calendar',
      icon: '📅',
      description: 'Quickly schedule meetings, video calls, get reminders about upcoming activities and more.',
    },
    {
      id: 'internal-chat',
      title: 'Internal chat',
      icon: '🗣️',
      description: 'Learn how you can chat with coworkers in rooms and around emails, SMS, etc.',
    },
    {
      id: 'google-setup',
      title: 'Configuring Google',
      icon: '🔧',
      description: 'Learn how to best setup Google to work with teamsync.',
    },
    {
      id: 'learn-fast',
      title: 'Learn to be fast',
      icon: '💨',
      description: 'Be more productive by learning the Command bar and teamsync shortcuts.',
    },
    {
      id: 'video-tutorials',
      title: 'Video tutorials',
      icon: '🎥',
      description: 'Short-format video resources to swiftly become a teamsync pro.',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: '📱',
      description: 'Connect with your customers on the world’s most popular messaging app through our Twilio integration.',
    },
    {
      id: 'live-chat',
      title: 'teamsync Live Chat',
      icon: '💬',
      description: 'teamsync Live Chat is the perfect way to interact with visitors from your website without creating additional silos of communication.',
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: '📈',
      description: 'Learn how to measure the key performance metrics of your team.',
    },
    {
      id: 'labels',
      title: 'Labels',
      icon: '🏷️',
      description: 'The perfect way to organize your team’s conversations.',
    },
    {
      id: 'rules',
      title: 'Rules',
      icon: '📏',
      description: 'Learn how to automate your business workflows with rules.',
    },
    {
      id: 'canned-responses',
      title: 'Canned responses',
      icon: '📝',
      description: 'Learn how to create canned responses and share them with everyone at your company.',
    },
    {
      id: 'single-sign-on',
      title: 'Single Sign-On',
      icon: '🔐',
      description: 'Manage your employees’ access to teamsync via your Single Sign-On identity provider.',
    },
    {
      id: 'microsoft-setup',
      title: 'Configuring Microsoft',
      icon: '🔧',
      description: 'Learn how to best setup Microsoft to work with teamsync.',
    },
    {
      id: 'developer-docs',
      title: 'Developer documentation',
      icon: '👨🏻‍💻',
      description: 'Enrich your teamsync experience with our APIs.',
    },
    {
      id: 'custom-channels',
      title: 'Custom channels',
      icon: '⚙️',
      description: 'Learn how to integrate any source of messages.',
    },
    {
      id: 'gdpr',
      title: 'teamsync and GDPR',
      icon: '🇪🇺',
      description: 'teamsync is fully compliant with the European Union GDPR privacy law.',
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8">
      {/* Header */}
      <div className="text-center mb-4 w-full max-w-lg">
        <h1 className="text-4xl font-semibold text-gray-800" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Help Center</h1>
        <p className="text-lg text-gray-600 mt-2">How can we help?</p>
      </div>

      {/* Search Box */}
      <div className="w-full max-w-lg mb-6 relative">
        <input
          type="text"
          className="w-full p-4 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search guides and FAQ"
          value={searchQuery}
          onChange={handleSearch}
        />
        {/* Search Icon */}
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <i className="fas fa-search"></i>
        </span>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {filteredSections.length > 0 ? (
          filteredSections.map((section) => (
            <div key={section.id} className="flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
              <p className="text-gray-600 text-center">{section.description}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            <p>No articles found for your search. Please try a different query.</p>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="w-full max-w-lg mt-12 text-center">
        <p className="text-lg text-gray-600 mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>Can’t find your answer?</p>
        <p className="text-lg text-blue-600">
          Contact us at{' '}
          <a href="mailto:support@teamsyncapp.com" className="font-semibold hover:underline">
            support@teamsyncapp.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Help;
