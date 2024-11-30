import React, { useState, useEffect } from "react";
import timebg from "./assets/timebg.avif";

const years = ["500 BC", "1000 AD", "1500 AD", "1800 AD", "2024 AD"]; // Example years
const content = [
  "Chocolate served as currency in ancient Mesoamerica, especially among the Mayans and Aztecs. Cacao beans were more valuable than gold, traded for goods like food and tools. Beyond its economic role, cacao was used to make a sacred beverage called xocolatl, mixed with chili and believed to possess divine qualities. This drink was reserved for royalty, warriors, and religious ceremonies, emphasizing its spiritual and cultural importance. The use of cacao demonstrates its significance in daily life and traditions, marking it as a symbol of wealth, power, and divine connection in ancient civilizations.",
  "Spanish explorers brought cacao to Europe in the early 16th century, introducing it as a bitter beverage. Initially consumed by the elite, it was sweetened with sugar and spices like cinnamon to suit European tastes. Chocolate houses emerged in cities like London and Paris, becoming social hubs for the wealthy. The adaptation of cacao into sweetened drinks transformed it into a luxurious commodity, shaping culinary traditions and fueling a growing fascination with this exotic product. This marked the start of Europe’s enduring love affair with chocolate.",
  "The creation of the first solid chocolate bar revolutionized how people consumed chocolate. In 1847, Joseph Fry mixed cacao butter with sugar and cocoa powder, creating a moldable paste that led to the modern chocolate bar. This innovation made chocolate more accessible, paving the way for companies like Cadbury and Nestlé to expand production. Solid chocolate bars inspired countless variations, from milk chocolate to confections filled with nuts or caramel. This milestone shaped the chocolate industry, making it a treat loved by millions worldwide",
  "The Industrial Revolution transformed chocolate production. New machinery, like the steam-powered press, allowed for efficient extraction of cacao butter, leading to smoother and creamier chocolates. Mass production lowered costs, making chocolate affordable to a broader audience. Iconic brands like Hershey's and Lindt emerged, introducing innovative recipes and creative marketing. Chocolate evolved from an exclusive luxury to a widely enjoyed treat, becoming a symbol of comfort and indulgence in households across Europe and North America.",
  "Today, the chocolate industry blends innovation with sustainability. Artisanal chocolatiers craft bold flavors, combining chocolate with ingredients like sea salt, chili, or lavender. Single-origin chocolate highlights regional cacao profiles, while ruby chocolate offers a natural pink hue and fruity flavor. Sustainability efforts focus on fair trade, reducing carbon footprints, and supporting cacao farmers. From health-focused creations to edible art, modern chocolate reflects a balance of creativity and ethical responsibility, ensuring its legacy for generations to come",
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
    <div className="relative w-full h-screen bg-rose-950 -mt-20">
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
  className="w-full h-[75%] mt-28 overflow-x-scroll flex space-x-8 px-10 scroll-smooth bg-rose-950"
  style={{ scrollSnapType: "x mandatory" }}
>
  {content.map((text, index) => (
    <div
      key={index}
      className="w-[60%] min-w-[300px] bg-cover bg-center shadow-lg rounded-lg flex-shrink-0 flex flex-col items-center justify-start text-center text-white p-6"
      style={{
        backgroundImage: `url(${timebg})`,
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Overlay for contrast
        backgroundBlendMode: "overlay",
        scrollSnapAlign: "start",
      }}
    >
     <p className="text-sm sm:text-4xl font-semibold break-words leading-tight text-[rgb(203,175,62)] font-lato sm:font-sevillana">
        {text}
      </p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Timeline;