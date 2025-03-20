import React from "react";

const DownloadApp = () => {
  return (
    <div className="max-w-5xl mx-auto text-center py-12">
      <h2 className="text-3xl font-semibold mb-8">
        Get Missive on all your devices
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Desktop Image */}
        <img
          src="/path-to-your-desktop-image.jpg"
          alt="Missive Desktop"
          className="rounded-lg shadow-md"
        />
        {/* Mobile Image */}
        <img
          src="/path-to-your-mobile-image.jpg"
          alt="Missive Mobile"
          className="rounded-lg shadow-md"
        />
      </div>
      
      {/* Download Options */}
      <div className="mt-10 grid md:grid-cols-2 gap-6 text-left text-lg">
        <div>
          <p className="font-medium flex items-center gap-2">
            🌴 macOS
          </p>
          <button className="bg-gray-200 px-4 py-2 rounded mt-2">Download</button>
        </div>
        <div>
          <p className="font-medium flex items-center gap-2">
            💻 Windows
          </p>
          <button className="bg-gray-200 px-4 py-2 rounded mt-2">Download</button>
        </div>
        <div>
          <p className="font-medium flex items-center gap-2">
            🌐 Web app
          </p>
          <button className="bg-gray-200 px-4 py-2 rounded mt-2">Open</button>
        </div>
        <div>
          <p className="font-medium flex items-center gap-2">
            🌟 iOS & iPadOS
          </p>
          <button className="bg-gray-200 px-4 py-2 rounded mt-2">Open store</button>
        </div>
        <div>
          <p className="font-medium flex items-center gap-2">
            🎮 Android
          </p>
          <button className="bg-gray-200 px-4 py-2 rounded mt-2">Open store</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
