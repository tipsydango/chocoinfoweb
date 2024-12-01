import React, { useState } from "react";
import napo from "./assets/Napo.webp";
import aztec from "./assets/Aztec trading.webp";
import bigchoco from "./assets/big choco.webp";
import darkchoco from "./assets/dark choco mem.webp";
import swizz from "./assets/swizz.webp";
import coo from "./assets/made coo.webp";

const funFacts = [
  {
    fact: "Napoleon always carried chocolate with him during military campaigns.",
    image: napo,
  },
  {
    fact: "The largest chocolate bar ever made weighed over 12,000 pounds!",
    image: bigchoco,
  },
  {
    fact: "Switzerland has the highest chocolate consumption per capita in the world!",
    image: swizz,
  },
  {
    fact: "Dark chocolate improves brain function and memory.",
    image: darkchoco,
  },
  {
    fact: "Chocolate was once used as currency by the Aztecs.",
    image: aztec,
  },
  {
    fact: "The first chocolate chip cookie was invented by accident in 1938 by Ruth Wakefield.",
    image: coo,
  },
];

const FunFacts = () => {
  const [revealedFacts, setRevealedFacts] = useState([]);

  const toggleFact = (index) => {
    setRevealedFacts((prevRevealed) =>
      prevRevealed.includes(index)
        ? prevRevealed.filter((i) => i !== index)
        : [...prevRevealed, index]
    );
  };

  return (
    <div className="w-full bg-rose-950 py-10 px-4">
      {/* Title Section */}
      <div className="relative mb-8">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown to-white text-center">
          Fun Facts About Chocolate
        </h2>
        {/* Gold Underline */}
        <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[rgb(203,175,62)]"></div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="bg-brown rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => toggleFact(index)}
          >
            <div className="relative w-full h-30 overflow-hidden group">
              <img
                src={fact.image}
                alt={`Chocolate Fun Fact ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="p-4">
              <p
                className={`text-lg font-semibold text-gray-800 transition-colors duration-300 ${
                  revealedFacts.includes(index)
                    ? "text-gray-900"
                    : "hover:text-yellow-400 cursor-pointer"
                }`}
              >
                {revealedFacts.includes(index)
                  ? fact.fact
                  : "Click to reveal the fun fact!"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFacts;