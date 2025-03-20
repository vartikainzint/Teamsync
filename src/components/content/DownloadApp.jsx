import React from "react";
import DesktopImage from "../../assets/images/img-sharedinbox.png";

const DownloadApp = () => {
  return (
    <div className="max-w-5xl mx-auto text-center py-12">
      <h2 className="text-3xl font-semibold mb-8">
        Get TeamSync on all your devices
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Desktop Image */}
        <img
          src={DesktopImage}
          alt="TeamSync Desktop"
          className="rounded-lg shadow-md"
        />
        {/* Mobile Image */}
        <img
          src={DesktopImage}
          alt="TeamSync Mobile"
          className="rounded-lg shadow-md"
        />
      </div>
      
      {/* Download Options */}
      <div className="mt-10 grid md:grid-cols-2 gap-6 text-left text-lg">
        <div className="text-center">
          <p className="text-sm font-medium flex items-center gap-2 justify-center">
            🌴 macOS
          </p>
          <button className="bg-gray-800 px-4 py-2 rounded mt-2 border text-sm">Download</button>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium flex items-center gap-2 justify-center">
            💻 Windows
          </p>
          <button className="bg-gray-800 px-4 py-2 rounded mt-2 border text-sm">Download</button>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium flex items-center gap-2 justify-center">
            🌐 Web app
          </p>
          <button className="bg-gray-800 px-4 py-2 rounded mt-2 border text-sm">Open</button>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium flex items-center gap-2 justify-center">
            🌟 iOS & iPadOS
          </p>
          <button className="bg-gray-800 px-4 py-2 rounded mt-2 border text-sm">Open store</button>
        </div>
        <div className="text-center">
          <p className="text-sm font-medium flex items-center gap-2 justify-center">
            🎮 Android
          </p>
          <button className="bg-gray-800 px-4 py-2 rounded mt-2 border text-sm">Open store</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
