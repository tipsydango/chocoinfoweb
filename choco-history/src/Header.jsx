import React, { useState } from "react";
import darkChocoHead from "./assets/dark-choco-head.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="w-full h-[300px] md:h-[350px] lg:h-[400px] py-5 px-5 md:px-10 shadow-md bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${darkChocoHead})`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#4E342E]/70"></div>

      {/* Header Content */}
      <div className="relative z-10 flex justify-between items-center h-full">
        {/* Title (Left) */}
        <div className="text-left">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brown to-white animate-flicker-in"
          >
            History of Chocolate
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="relative">
          {/* Hamburger Icon (Visible on Small Screens) */}
          <button
            className="block md:hidden text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>

          {/* Links (Hidden on Small Screens, Visible on Desktop) */}
          <nav
            className={`absolute top-full right-0 bg-[#4E342E]/90 md:bg-transparent md:relative md:top-0 md:flex md:space-x-8 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#timeline"
              className="block md:inline-block text-white text-sm md:text-lg font-medium relative group px-4 py-2 hover:bg-gold hover:bg-opacity-75"
            >
              Timeline
              <span className="hidden md:block absolute left-0 bottom-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
            <hr className="border-t border-gold opacity-50 md:hidden" /> {/* Line below Timeline */}

            <a
              href="#facts"
              className="block md:inline-block text-white text-sm md:text-lg font-medium relative group px-4 py-2 hover:bg-gold hover:bg-opacity-75"
            >
              Fun Facts
              <span className="hidden md:block absolute left-0 bottom-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
            <hr className="border-t border-gold opacity-50 md:hidden" /> {/* Line below Fun Facts */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;