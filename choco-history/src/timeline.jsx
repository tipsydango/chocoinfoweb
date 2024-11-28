import React, { useState, useEffect } from "react";
import timebg from "./assets/timebg.avif"

const years = ["500 BC", "1000 AD", "1500 AD", "1800 AD", "2024"]; // Example years
const content = [
  "Chocolate used as currency in Mesoamerica.",
  "Cacao introduced to Europe by Spanish explorers.",
  "The creation of the first solid chocolate bar.",
  "Industrial revolution boosts chocolate production.",
  "Chocolate innovations and sustainability practices.",
]; // Example historical content

const Timeline = () => {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  // Update arrow position based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const timelineContainer = document.getElementById("timeline-content");
      const { scrollLeft, scrollWidth, clientWidth } = timelineContainer;

      const progress = scrollLeft / (scrollWidth - clientWidth);
      const newIndex = Math.round(progress * (years.length - 1));
      setCurrentYearIndex(newIndex);
    };

    const timeline = document.getElementById("timeline-content");
    timeline.addEventListener("scroll", handleScroll);
    return () => timeline.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center -mt-20"
      style={{
        backgroundImage: `url('timebg')`, // Placeholder for background image
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Timeline Bar */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-3/4 flex items-center">
        {/* Horizontal Line */}
        <div className="w-full h-1 bg-gold relative">
          {/* Arrow */}
          <div
            className="absolute top-[-15px] left-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-gold transition-all duration-300"
            style={{
              left: `${(currentYearIndex / (years.length - 1)) * 100}%`,
            }}
          ></div>
        </div>

        {/* Year Markers */}
        <div className="absolute top-[-30px] left-0 w-full flex justify-between text-white text-sm">
          {years.map((year, index) => (
            <span
              key={year}
              className={`${
                currentYearIndex === index ? "font-bold text-gold" : ""
              }`}
            >
              {year}
            </span>
          ))}
        </div>
      </div>

      {/* Scrolling Content */}
      <div
        id="timeline-content"
        className="w-full h-2/3 mt-20 overflow-x-scroll whitespace-nowrap flex space-x-8 px-10"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {content.map((text, index) => (
          <div
            key={index}
            className="w-1/3 h-full bg-white shadow-lg rounded-lg flex-shrink-0 flex items-center justify-center text-center text-xl p-5"
            style={{ scrollSnapAlign: "start" }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;