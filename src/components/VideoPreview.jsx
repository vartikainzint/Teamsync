import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ScreenFrame from "../components/ScreenFrame";
import Screenimage from "../assets/images/img-sharedinbox.png";

const VideoPreview = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-12 py-16 bg-gray-100">
      {/* Left - Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>
          Inbox collaboration made easy
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Say goodbye to messy email threads and hello to a unified team inbox. 
          Collaborate seamlessly and keep all communications in one place.
        </p>
      </div>

      {/* Right - Video Preview */}
      <div className="md:w-1/2 relative">
        {isPlaying ? (
          <iframe
            className="w-full h-64 md:h-80 rounded-lg shadow-lg"
            src="https://player.vimeo.com/video/76979871?autoplay=1"
            title="Video"
            allow="autoplay; fullscreen"
          ></iframe>
        ) : (
          <div
            className="w-full h-64 md:h-80 bg-black relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setIsPlaying(true)}
          >
                 <ScreenFrame imageUrl={Screenimage} alt="Demo Image" />

            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <FaPlay className="text-white text-5xl bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700 transition" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoPreview;
