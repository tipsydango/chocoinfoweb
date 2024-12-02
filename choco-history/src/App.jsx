import React, { useState, useEffect } from "react";
import Timeline from "./timeline";
import Header from "./Header";
import FunFacts from "./Facts";
import Hero from "./Hero";
import Footer from "./Footer";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <section id="Hero">
        <Hero />
      </section>
      <section id="Timeline">
        <Timeline />
      </section>
      <section id="Facts">
        <FunFacts />
      </section>
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </div>
  );
}