import CannyLogo from "../assets/images/asset-logos-canny.png";
import Maplelogo from "../assets/images/asset-logos-maple.png";

const TrustedCompanies = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4 bg-gray-100">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4" style={{ fontFamily: '"Tiempos Headline", "Times New Roman", sans-serif' }}>
      4000+ companies rely on <span className="text-blue-600">Missive</span> every day
      </h2>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-4xl mx-auto mt-4">
        <img src={CannyLogo} alt="Company 1" className="h-12 mx-auto" />
        <img src={Maplelogo} alt="Company 2" className="h-12 mx-auto" />
        <img src={CannyLogo} alt="Company 1" className="h-12 mx-auto" />
        <img src={Maplelogo} alt="Company 2" className="h-12 mx-auto" />
        <img src={CannyLogo} alt="Company 1" className="h-12 mx-auto" />
        <img src={Maplelogo} alt="Company 2" className="h-12 mx-auto" />
        <img src={Maplelogo} alt="Company 2" className="h-12 mx-auto" />
        <img src={CannyLogo} alt="Company 1" className="h-12 mx-auto" />
        <img src={Maplelogo} alt="Company 2" className="h-12 mx-auto" />
        <img src={Maplelogo} alt="Company 2" className="h-12 mx-auto" />

        <img src={CannyLogo} alt="Company 1" className="h-12 mx-auto" />
        <img src={CannyLogo} alt="Company 1" className="h-12 mx-auto" />

      </div>
    </section>
  );
};

export default TrustedCompanies;
