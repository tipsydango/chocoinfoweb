import React from "react";
import darkChocolateImage from "./assets/dark-choco-head.jpeg";

const Header = () => {
  return (
    <header className="w-full py-5 px-10 shadow-md ">
      {/* Title */}
      <div className="flex justify-center items-center">
        <h1
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brown to-white 
          animate-flicker-in"
        >
          History of Chocolate
        </h1>
        {/* Cocoa Pod Animation */}
        <div className="ml-3 animate-flicker-in">
          🍫
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-5 flex justify-center space-x-8">
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