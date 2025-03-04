function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="container mx-auto px-6">
        
        {/* Grid Layout for Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Left - Brand & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white">TeamSync</h2>
            <p className="mt-3 text-gray-400 text-sm">
              Simplifying team collaboration and workflow efficiency with powerful tools.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <a href="/about" className="hover:text-gray-400">About</a>
            <a href="/pricing" className="hover:text-gray-400">Pricing</a>
            <a href="/features" className="hover:text-gray-400">Features</a>
            <a href="/help" className="hover:text-gray-400">Help</a>
            <a href="" className="hover:text-gray-400">Book a demo</a>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-gray-400">support@teamsync.com</p>
            <p className="text-gray-400">+1 (123) 456-7890</p>
            <p className="text-gray-400">123 Main St, City, Country</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-left text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} TeamSync. All rights reserved.</p>
          <p className="text-gray-400">Designed & Developed by <a href="https://inzint.com" className="text-white hover:underline" target="_blank">Inzint</a></p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
