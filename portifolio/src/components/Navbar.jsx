import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a
          href="#hero"
          className="text-white text-2xl font-bold hover:text-teal-400 transition duration-300"
        >
          Your Name
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none focus:text-teal-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#hero"
            className="text-white text-lg hover:text-teal-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-lg hover:text-teal-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white text-lg hover:text-teal-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white text-lg hover:text-teal-400 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-lg hover:text-teal-400 transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-4">
          <div className="flex flex-col items-center space-y-4">
            <a
              onClick={() => setIsOpen(false)}
              href="#hero"
              className="block text-white text-lg hover:text-teal-400 transition duration-300"
            >
              Home
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#about"
              className="block text-white text-lg hover:text-teal-400 transition duration-300"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#skills"
              className="block text-white text-lg hover:text-teal-400 transition duration-300"
            >
              Skills
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#projects"
              className="block text-white text-lg hover:text-teal-400 transition duration-300"
            >
              Projects
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="block text-white text-lg hover:text-teal-400 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
