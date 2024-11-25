import React from "react";
import darkChocoHead from "./assets/dark-choco-head.jpeg"; // Import the image

const Header = () => {
  return (
    <header
      className="w-full py-5 px-10 shadow-md bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${darkChocoHead})`,
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#4E342E]/70"></div>

      {/* Header Content */}
      <div className="relative z-10 flex justify-center items-center">
        <h1
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brown to-white 
          animate-flicker-in"
        >
          History of Chocolate
        </h1>
        <div className="ml-3 animate-flicker-in">🍫</div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mt-5 flex justify-center space-x-8">
        <a
          href="#timeline"
          className="text-white text-lg font-medium relative group"
        >
          Timeline
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
        <a
          href="#facts"
          className="text-white text-lg font-medium relative group"
        >
          Fun Facts
          <span className="absolute left-0 bottom-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
      </nav>
    </header>
  );
};

export default Header;