import React from "react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import cocoGradingProcess from "./assets/choco-grind.jpg";
import meltingChocolateSwirl from "./assets/choco-swirl.webp";
import chocolateSwanSculpture from "./assets/choco-swan.jpg";
import contemporaryChocolateInnovations from "./assets/choco-ball.jpg";

const Section = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.9, // Trigger when 90% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out ${
        inView ? animationClass : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-full bg-[#d38021] bg-[url('./assets/bubbles.svg')] bg-repeat">
      {/* Section 1: Origins of Chocolate */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 ">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
            The Origins of Chocolate
          </h2>
          <p className="text-lg text-[#4E342E]">
          Discover how chocolate was first cultivated in ancient Mesoamerica, 
          where it was seen as a divine gift and treasured delicacy. 
          Learn about its journey from the cacao trees to the cultural centerpiece it has become today.
          </p>
        </div>
        <Section animationClass="fade-in-fwd">
          <img
            src={cocoGradingProcess}
            alt="Coco Grading Process"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </Section >
    
      </section  >
    
 

      {/* Section 2: Modern Impact of Chocolate */}
      <section className="h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20">
        <div className="w-full md:w-1/2 text-right">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
            Modern Impact of Chocolate
          </h2>
          <p className="text-lg text-[#4E342E]">
          Chocolate has become more than a treat; it’s a global phenomenon shaping economies, 
          inspiring culinary arts, and creating moments of joy worldwide. 
          Dive into how chocolate has evolved into a multi-billion-dollar industry.
          </p>
        </div>
        <Section animationClass="swirl-in-bck">
          <img
            src={meltingChocolateSwirl}
            alt="Melting Chocolate Swirl"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </Section>
      </section>

      {/* Section 3: Chocolate in Culture */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
            Chocolate in Culture
          </h2>
          <p className="text-lg text-[#4E342E]">
          From sacred rituals to festive celebrations, chocolate has been a symbol of love, luxury, and
           creativity across cultures. Explore its profound cultural significance and the traditions it has inspired.
          </p>
        </div>
        <Section animationClass="slit-in-diagonal-1">
          <img
            src={chocolateSwanSculpture}
            alt="Chocolate Swan Sculpture"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </Section>
      </section>

      {/* Section 4: Contemporary Chocolate Innovations */}
      <section className="h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20">
        <div className="w-full md:w-1/2 text-right">
          <h2 className="text-4xl font-bold text-[#4E342E] mb-4">
            Contemporary Chocolate Innovations
          </h2>
          <p className="text-lg text-[#4E342E]">
          Modern-day chocolatiers are pushing boundaries with sustainable practices, innovative flavors, and stunning designs. 
          Discover how chocolate continues to evolve and inspire in the contemporary world.
          </p>
        </div>
        <Section animationClass="tilt-in-fwd-br">
          <img
            src={contemporaryChocolateInnovations}
            alt="Contemporary Chocolate Innovations"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </Section>
      </section>
    </div>
  );
};

export default Hero;