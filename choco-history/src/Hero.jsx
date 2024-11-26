import React from "react";
import cocoGradingProcess from "./assets/choco-grind.jpg";
import meltingChocolateSwirl from "./assets/choco-swirl.webp";
import chocolateSwanSculpture from "./assets/choco-swan.jpg";
import contemporaryChocolateInnovations from "./assets/choco-ball.jpg";
import "./assets/animista.css";

const Hero = () => {
  return (
    <div className="w-full bg-[#ffefdd] bg-[url('./assets/bubbles.svg')] bg-repeat">
      {/* Origins of Chocolate */}
      <section
        id="origins"
        className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20"
      >
        {/* Text */}
        <div className="w-full md:w-1/2 text-left animate-fade-in">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">The Origins of Chocolate</h2>
          <p className="text-lg text-[#4E342E]">
            Discover how chocolate was first cultivated in ancient Mesoamerica, where it was seen as
            a divine gift and treasured delicacy.
          </p>
        </div>
        {/* Image */}
        <div
          className="w-full md:w-1/2 animate-fade-in"
          style={{ animationDuration: "1s" }}
        >
          <img
            src={cocoGradingProcess}
            alt="Coco Grading Process"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Modern Impact of Chocolate */}
      <section
        id="modern-impact"
        className="h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20"
      >
        {/* Text */}
        <div className="w-full md:w-1/2 text-right animate-fade-in">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">Modern Impact of Chocolate</h2>
          <p className="text-lg text-[#4E342E]">
            Chocolate today is a global phenomenon, influencing economies, diets, and industries
            worldwide with its irresistible allure.
          </p>
        </div>
        {/* Image */}
        <div
          className="w-full md:w-1/2 animate-swirl-in-bck"
          style={{ animationDuration: "1s" }}
        >
          <img
            src={meltingChocolateSwirl}
            alt="Melting Chocolate Swirl"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Chocolate in Culture */}
      <section
        id="culture"
        className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20"
      >
        {/* Text */}
        <div className="w-full md:w-1/2 text-left animate-fade-in">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">Chocolate in Culture</h2>
          <p className="text-lg text-[#4E342E]">
            From art to festivals, chocolate has left an indelible mark on culture and continues to
            inspire creativity worldwide.
          </p>
        </div>
        {/* Image */}
        <div
          className="w-full md:w-1/2 animate-slit-in-diagonal-1"
          style={{ animationDuration: "1s" }}
        >
          <img
            src={chocolateSwanSculpture}
            alt="Chocolate Swan Sculpture"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contemporary Chocolate Innovations */}
      <section
        id="innovations"
        className="h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20"
      >
        {/* Text */}
        <div className="w-full md:w-1/2 text-right animate-fade-in">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">Contemporary Chocolate Innovations</h2>
          <p className="text-lg text-[#4E342E]">
            Explore cutting-edge chocolate creations, from sculptural designs to sustainable and
            novel confections.
          </p>
        </div>
        {/* Image */}
        <div
          className="w-full md:w-1/2 animate-tilt-in-fwd-br"
          style={{ animationDuration: "1s" }}
        >
          <img
            src={contemporaryChocolateInnovations}
            alt="Contemporary Chocolate Innovations"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;