import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-fuchsia-50 to-purple-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 md:flex md:justify-between md:items-start gap-10">
        
        {/* Logo & Description */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">🐾</span>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              PawMart
            </h1>
          </div>
          <p className="text-gray-600">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
        </div>

        {/* Useful Links */}
        <div className="md:w-1/4">
          <h2 className="text-lg font-semibold mb-3">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-pink-500 transition-colors">Home</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500 transition-colors">Contact</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-pink-500 transition-colors">Terms</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mx-6"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PawMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
