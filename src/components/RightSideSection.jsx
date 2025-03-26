 import BufferLogo from "../assets/images/logo-buffer-light-.png";
 import CannyLogo from "../assets/images/logo-canny-light.png";
 import ItalicLogo from "../assets/images/logo-italic-light.png";
 import LionizeLogo from "../assets/images/logo-lionize-light.png";
 import Screenimage from "../assets/images/img-sharedinbox.png";
 {/* Right Section - Fixed */}
 const RightSideSection = () => {
    return (
  <div className="hidden md:flex w-1/2 h-screen flex-col justify-center items-center px-6 bg-gray-900 pt-12">
    {/* Review Section */}
    <div className="m-auto flex w-full max-w-[580px] flex-col px-6">
      <div className="flex flex-col gap-12 py-2">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center gap-4 text-xl text-yellow-400">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current text-yellow-400">
                  <use xlinkHref="#icon-ic_solid_star"></use>
                </svg>
              ))}
            </div>
            <span>4.9 → Over 200 reviews</span>
          </div>

          <div className="flex flex-col gap-2 text-center">
            <div className="text-3xl font-medium text-white">
              With TeamSync, we noticed more and better cooperation within the team.
            </div>
            <div className="text-xl text-gray-400">Daniel Picón, Pipedrive</div>
          </div>
        </div>
      </div>
    </div>

    {/* Logos Section */}
    <div className="flex flex-col items-center px-6">
      <div className="mx-auto mt-12 flex max-w-[580px] flex-col gap-3">
        <div className="text-xl text-gray-300 text-center">
          A reliable partner for world-class SMB teams
        </div>
        <div className="flex gap-4 justify-center  logo-white">
          {[BufferLogo, CannyLogo, ItalicLogo, LionizeLogo].map((logo, index) => (
            <div key={index} className="flex aspect-[3/1] w-[20%] flex-shrink items-center">
              <img src={logo} className="max-w-[100%]" alt={`Logo ${index}`} draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Background Image */}
    <div className="mt-6 hidden md:block h-[250px] w-[750px] max-w-[100%] rounded-xl bg-cover bg-no-repeat shadow-xl translate-x-10"
      style={{ backgroundImage: `url(${Screenimage})` }}></div>
  </div>
    );
};

export default RightSideSection;
