import React from "react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import cocoGradingProcess from "./assets/choco-grind.jpg";
import meltingChocolateSwirl from "./assets/choco-swirl.webp";
import chocolateSwanSculpture from "./assets/choco-swan.jpg";
import contemporaryChocolateInnovations from "./assets/choco-ball.jpg";

const Section = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: window.innerWidth < 768 ? 0.4 : 0.9, // Set threshold dynamically based on screen width
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
   {/* Section 1: The Origins of Chocolate */}
<section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pb-16 relative">
  <div className="w-full md:w-1/2 text-left">
    <h2 className="text-5xl md:text-6xl font-bold text-[#4E342E] mb-6">
      The Origins of Chocolate
    </h2>
    <p className="text-xl md:text-2xl text-[#4E342E] leading-relaxed max-w-[600px]">
      Chocolate’s story begins over 3,000 years ago in the lush rainforests of Mesoamerica. The ancient Olmecs, Mayans, and Aztecs revered cacao as the "food of the gods," using it in sacred rituals and as currency. From the cacao tree’s beans, they crafted a bitter beverage, believed to bring wisdom, vitality, and divine favor. This mystical elixir was so valued that it was reserved for royalty and warriors. Journey back to the origins of chocolate and discover how a humble tropical seed became a revered cultural treasure.
    </p>
  </div>
  <Section animationClass="fade-in-fwd">
    <img
      src={cocoGradingProcess}
      alt="Coco Grading Process"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </Section>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-black"></div>
</section>

{/* Section 2: Modern Impact of Chocolate */}
<section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20 pb-16 relative">
  <div className="w-full md:w-1/2 text-right">
    <h2 className="text-5xl md:text-6xl font-bold text-[#4E342E] mb-6">
      Modern Impact of Chocolate
    </h2>
    <p className="text-xl md:text-2xl text-[#4E342E] leading-relaxed max-w-[600px] ml-auto">
      Chocolate today is a global phenomenon, touching every corner of the world. From bustling marketplaces to gourmet kitchens, chocolate has transcended its ancient roots to become a symbol of indulgence, luxury, and joy. Its production fuels economies, employs millions, and drives innovation in industries like food, cosmetics, and medicine. Whether as a comforting cup of cocoa or a decadent dessert, chocolate has cemented its place as a beloved global treat, creating connections and sweet memories wherever it is enjoyed.
    </p>
  </div>
  <Section animationClass="swirl-in-bck">
    <img
      src={meltingChocolateSwirl}
      alt="Melting Chocolate Swirl"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </Section>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-black"></div>
</section>

{/* Section 3: Chocolate in Culture */}
<section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pb-16 relative">
  <div className="w-full md:w-1/2 text-left">
    <h2 className="text-5xl md:text-6xl font-bold text-[#4E342E] mb-6">
      Chocolate in Culture
    </h2>
    <p className="text-xl md:text-2xl text-[#4E342E] leading-relaxed max-w-[600px]">
      Few foods have influenced human culture as profoundly as chocolate. In literature, art, and film, chocolate symbolizes passion, celebration, and creativity. Across continents, it has woven itself into the fabric of festivals, from Mexico's Day of the Dead to Switzerland’s chocolate expos. Historical figures like Marie Antoinette and Napoleon celebrated chocolate, adding to its cultural allure. Discover how chocolate continues to inspire artists, chefs, and dreamers, and how it has become a timeless icon of human expression and creativity.
    </p>
  </div>
  <Section animationClass="slit-in-diagonal-1">
    <img
      src={chocolateSwanSculpture}
      alt="Chocolate Swan Sculpture"
      className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </Section>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-black"></div>
</section>

{/* Section 4: Contemporary Chocolate Innovations */}
<section className="min-h-screen flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-20 pb-16 relative">
  <div className="w-full md:w-1/2 text-right">
    <h2 className="text-5xl md:text-6xl font-bold text-[#4E342E] mb-6">
      Contemporary Chocolate Innovations
    </h2>
    <p className="text-xl md:text-2xl text-[#4E342E] leading-relaxed max-w-[600px] ml-auto">
      Today, the chocolate world is undergoing a renaissance. 
      Artisanal chocolatiers are redefining what chocolate can be with bold new flavors, cutting-edge techniques, 
      and sustainable sourcing. From ruby chocolate to single-origin bars, the focus is on quality, ethical production, 
      and unique sensory experiences. Imagine edible chocolate sculptures, zero-waste production, 
      and chocolate paired with unexpected ingredients like seaweed or truffles. 
      Contemporary innovations are not just about taste but about shaping a more sustainable and imaginative future for chocolate.
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