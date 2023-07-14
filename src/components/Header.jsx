import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="flex items-center justify-between bg-gray-800 py-4 pt-8">
            <div className="flex items-center">
                <a href="" className="text-black text-lg font-bold">
                    James Darrigo
                </a>
                </div>
                <div className="flex items-center">
                <div className="hidden md:block">
                    {/* Render navigation links for larger screens */}
                    <a href="" className="text-black px-4">
                    Home
                    </a>
                    <a href="" className="text-black px-4">
                    About
                    </a>
                    <a href="" className="text-black px-4">
                    Services
                    </a>
                    <a href="" className="text-black px-4">
                    Contact
                    </a>
                </div>
                <div className="md:hidden">
                    {/* Render burger menu icon for smaller screens */}
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none"
                    >
                    {isMenuOpen ? (
                        <FiX className="text-2xl" />
                    ) : (
                        <FiMenu className="text-2xl" />
                    )}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    {/* Render dropdown menu for smaller screens */}
                    <div className="bg-dark py-2 px-4">
                    <a href="" className="block text-black py-2">
                        Home
                    </a>
                    <a href="" className="block text-black py-2">
                        About
                    </a>
                    <a href="" className="block text-black py-2">
                        Services
                    </a>
                    <a href="" className="block text-black py-2">
                        Contact
                    </a>
                    </div>
                </div>
            )}
        </nav>
    );
  }