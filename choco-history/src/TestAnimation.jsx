import React, { useState } from "react";
import "./assets/animista.css";

const TestAnimation = () => {
  const [animate, setAnimate] = useState(false);

  const handleAnimation = () => {
    // Trigger animation
    setAnimate(true);
    // Reset animation after it finishes (1s duration)
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <button
        onClick={handleAnimation}
        className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Click to Animate
      </button>
      <div
        className={`mt-6 bg-red-500 text-white p-6 rounded-lg shadow-lg ${
          animate ? "fade-in-fwd" : ""
        }`}
      >
        This is a test for Animista animation.
      </div>
    </div>
  );
};

export default TestAnimation;