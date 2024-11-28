import React, { useState } from "react";
import darkChocoHead from "./assets/dark-choco-head.jpeg";
import rib2 from "./assets/rib-2.png"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative ">
      {/* Header Background */}
      <div
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center "
        style={{
          backgroundImage: `url(${darkChocoHead})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#4E342E]/70 border-b-yellow-400 border-b-4"></div>

        {/* Header Content */}
        <div className="relative z-10 flex justify-between items-center h-full px-5 md:px-10">
          {/* Title */}
          <h1
              className="relative text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brown to-white animate-flicker-in pb-4 before:absolute before:content-[''] before:w-[50px] before:h-1 before:bg-gold before:left-0 before:bottom-0"
          >
            History of Chocolate
          </h1>

          {/* Navigation */}
          <div className="relative">
            {/* Hamburger Icon (Small Screens) */}
            <button
              className="block md:hidden text-white text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              ☰
            </button>

            {/* Navigation Links */}
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
              <hr className="border-t border-gold opacity-50 md:hidden" />

              <a
                href="#facts"
                className="block md:inline-block text-white text-sm md:text-lg font-medium relative group px-4 py-2 hover:bg-gold hover:bg-opacity-75"
              >
                Fun Facts
                <span className="hidden md:block absolute left-0 bottom-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
              <hr className="border-t border-gold opacity-50 md:hidden" />
            </nav>
          </div>
        </div>
      </div>

      {/* Ribbon Border */}
      <div className="relative">
        <img
          src={rib2}
          alt="Gold Ribbon Border"
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[70px] md:w-[100px] lg:w-[70px] object-contain"
        />
      </div>
    </header>
  );
};

export default Header;