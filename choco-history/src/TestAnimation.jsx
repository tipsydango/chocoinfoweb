import React from "react";
import "./assets/animista.css";

const TestAnimation = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="fade-in-fwd bg-red-500 text-white p-6 rounded-lg shadow-lg">
        This is a test for Animista animation.
      </div>
    </div>
  );
};

export default TestAnimation;