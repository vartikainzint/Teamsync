import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-white shadow-lg fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Left - Logo */}
          <Link to="/" className="text-xl font-bold mr-8">TeamSync</Link>

          {/* Mobile - Login & Signup Links */}
          <ul className="md:hidden flex space-x-4">
            <li>
              <Link to="/login" className="text-gray-700">Log in</Link>
            </li>
            <li>
              <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Sign up
              </Link>
            </li>
          </ul>

          {/* Desktop Menu */}
          <ul className="hidden md:flex md:space-x-8">
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>

            <li><Link to="/features" className="hover:text-gray-400">Features</Link></li>
            <li><Link to="/customer" className="hover:text-gray-400">Customers</Link></li>
            <li><Link to="/pricing" className="hover:text-gray-400">Pricing</Link></li>
            <li><Link to="/help" className="hover:text-gray-400">Help</Link></li>
          </ul>

          {/* Right - Desktop Links */}
          <ul className="hidden md:flex items-center space-x-6 ml-auto">
            <li><Link to="/login" className="hover:text-gray-400">Log in</Link></li>
            <li><a href="#" className="hover:text-gray-400">Book a demo</a></li>
            <li>
              <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
                Try for free
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        <div className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen p-4" : "max-h-0"}`}>
          <ul className="flex flex-col items-center space-y-4">
          <li><Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/features" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Features</Link></li>
            <li><Link to="/pricing" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Customers</Link></li>
            <li><Link to="/customer" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li><Link to="/help" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Help</Link></li>
            <li><Link to="#" className="hover:text-gray-400">Book a demo</Link></li>
            <li>
              <Link
                to="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center w-full block shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Try for free
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}

export default Navbar;
