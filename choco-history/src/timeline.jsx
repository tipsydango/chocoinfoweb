import React, { useState, useEffect } from "react";
import timebg from "./assets/timebg.avif";

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
      const newIndex = Math.round(progress * (content.length - 1));
      setCurrentYearIndex(newIndex);
    };

    const timeline = document.getElementById("timeline-content");
    timeline.addEventListener("scroll", handleScroll);
    return () => timeline.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen  bg-rose-950 -mt-20">
   <h2
  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown to-white text-center mt-10 mb-5 relative"
>
  Timeline of Chocolate
  {/* Gold Underline */}
  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-gold"></div>
</h2>

      {/* Timeline Bar */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 flex flex-col items-center">
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

        {/* Horizontal Line */}
        <div className="w-full h-1 bg-gold relative mt-4">
          {/* Arrow */}
          <div
            className="absolute top-[-15px] left-0 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-gold transition-all duration-300"
            style={{
              left: `${(currentYearIndex / (content.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div
        id="timeline-content"
        className="w-full h-[75%] mt-28 overflow-x-scroll whitespace-nowrap flex space-x-8 px-10 scroll-smooth  bg-rose-950"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {content.map((text, index) => (
          <div
            key={index}
            className="w-[60%] h-full bg-cover bg-center shadow-lg rounded-lg flex-shrink-0 flex items-center justify-center text-center text-xl text-white p-8"
            style={{
              backgroundImage: `url(${timebg})`,
              backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay for contrast
              backgroundBlendMode: "overlay",
              scrollSnapAlign: "start",
            }}
          >
            <p className="text-2xl font-bold font-sevillana">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;