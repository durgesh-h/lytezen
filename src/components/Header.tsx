"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#2a1a3d] to-[#4b2e6f] text-white py-4 md:py-5 px-6 md:px-12 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-wide">
          Lytezen
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#"
            className="text-base font-medium hover:text-[#a9a1e1] transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-base font-medium hover:text-[#a9a1e1] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="text-base font-medium hover:text-[#a9a1e1] transition-colors duration-200"
          >
            Resources
          </a>
          <button className="ml-4 bg-[#a9a1e1] text-[#2a1a3d] px-5 py-2 rounded-full font-semibold hover:bg-[#7e69c0] transition-all duration-200 shadow hover:shadow-lg">
            Log In
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#2a1a3d] bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <a
          href="#"
          className="text-2xl font-semibold hover:text-[#a9a1e1] transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          How It Works
        </a>
        <a
          href="#"
          className="text-2xl font-semibold hover:text-[#a9a1e1] transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#"
          className="text-2xl font-semibold hover:text-[#a9a1e1] transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          Resources
        </a>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-[#a9a1e1] text-[#2a1a3d] px-6 py-2 rounded-full font-semibold hover:bg-[#7e69c0] transition-all duration-200 shadow hover:shadow-lg"
        >
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
