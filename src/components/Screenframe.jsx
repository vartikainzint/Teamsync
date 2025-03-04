const Screenframe = ({ imageUrl, alt }) => {
    return (
      <div className="flex justify-center items-center py-10 bg-gray-200">
<div className="relative bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-800 w-full max-w-[1100px] h-[500px] mx-auto">
{/* Screen Border */}
          <div className="absolute inset-0 bg-gray-800 rounded-lg border border-gray-700"></div>
  
          {/* Screen Display */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-md">
            <img
              src={imageUrl}
              alt={alt || "Displayed Content"}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
  
          {/* Bottom Stand */}
          <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gray-700 rounded-b-lg shadow-md"></div>
        </div>
      </div>
    );
  };
  
  export default Screenframe;
  