import React from "react";
import { useInView } from "react-intersection-observer";
import cocoGradingProcess from "./assets/choco-grind.jpg";
import meltingChocolateSwirl from "./assets/choco-swirl.webp";
import chocolateSwanSculpture from "./assets/choco-swan.jpg";
import contemporaryChocolateInnovations from "./assets/choco-ball.jpg";
import "./assets/animista.css";

const Section = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, // Animation triggers when 20% of the section is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ease-out ${
        inView ? animationClass : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full bg-[#ffefdd] bg-[url('./assets/bubbles.svg')] bg-repeat">
      {/* Origins of Chocolate */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        <Section animationClass="fade-in-fwd">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
              The Origins of Chocolate
            </h2>
            <p className="text-lg text-[#4E342E]">
              Discover how chocolate was first cultivated in ancient
              Mesoamerica, where it was seen as a divine gift and treasured
              delicacy.
            </p>
          </div>
        </Section>
        <Section animationClass="opacity-100 translate-y-0">
          <div className="w-full md:w-1/2">
            <img
              src={cocoGradingProcess}
              alt="Coco Grading Process"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </Section>
      </section>

      {/* Modern Impact of Chocolate */}
      <section className="h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20">
        <Section animationClass="opacity-100 translate-y-0">
          <div className="w-full md:w-1/2 text-right">
            <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
              Modern Impact of Chocolate
            </h2>
            <p className="text-lg text-[#4E342E]">
              Chocolate today is a global phenomenon, influencing economies,
              diets, and industries worldwide with its irresistible allure.
            </p>
          </div>
        </Section>
        <Section animationClass="opacity-100 translate-y-0 rotate-6">
          <div className="w-full md:w-1/2">
            <img
              src={meltingChocolateSwirl}
              alt="Melting Chocolate Swirl"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </Section>
      </section>

      {/* Chocolate in Culture */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        <Section animationClass="opacity-100 translate-y-0">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
              Chocolate in Culture
            </h2>
            <p className="text-lg text-[#4E342E]">
              From art to festivals, chocolate has left an indelible mark on
              culture and continues to inspire creativity worldwide.
            </p>
          </div>
        </Section>
        <Section animationClass="opacity-100 translate-y-0 skew-y-3">
          <div className="w-full md:w-1/2">
            <img
              src={chocolateSwanSculpture}
              alt="Chocolate Swan Sculpture"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </Section>
      </section>

      {/* Contemporary Chocolate Innovations */}
      <section className="h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20">
        <Section animationClass="opacity-100 translate-y-0">
          <div className="w-full md:w-1/2 text-right">
            <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
              Contemporary Chocolate Innovations
            </h2>
            <p className="text-lg text-[#4E342E]">
              Explore cutting-edge chocolate creations, from sculptural designs
              to sustainable and novel confections.
            </p>
          </div>
        </Section>
        <Section animationClass="opacity-100 translate-y-0 scale-110">
          <div className="w-full md:w-1/2">
            <img
              src={contemporaryChocolateInnovations}
              alt="Contemporary Chocolate Innovations"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </Section>
      </section>
    </div>
  );
};

export default Hero;