import React, { useState } from "react";
import Logo from "./assets/images/image 64.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={Logo} className="h-8 w-8 mr-2" alt="Logo" />
        <p className="text-lg font-bold">Livestock</p>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="font-bold text-gray-700 hover:text-black">
          How it works
        </a>
        <a href="#" className="font-bold text-gray-700 hover:text-black">
          About
        </a>
        <a href="#" className="font-bold text-gray-700 hover:text-black">
          Contact us
        </a>
      </div>

      <button className="px-4 py-2 rounded-lg bg-black text-white">
        Download the App
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white shadow-md rounded-md p-4">
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-2"
            onClick={toggleMobileMenu}
          >
            How it works
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-2"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-black mb-2"
            onClick={toggleMobileMenu}
          >
            Contact us
          </a>
          <button
            className="px-4 py-2 rounded-lg bg-black text-white"
            onClick={toggleMobileMenu}
          >
            Download the App
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
