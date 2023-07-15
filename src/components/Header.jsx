import React, { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 px-4 lg:px-10">
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-semibold">
              James Darrigo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex text-xl sm:items-center">
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:bg-gray-700 px-3 py-2 rounded-md font-medium"
            >
              Services
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'h-auto' : 'h-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
        </div>
      </div>
    </nav>
  );
};
