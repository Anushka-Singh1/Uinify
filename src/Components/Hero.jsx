import React from "react";
import image from "../assets/Hero/Hero.png";

function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <img
        src={image}
        alt="Floating Element"
        className="absolute top-14 right-5 w-[25%] sm:w-[20%] md:w-[18%] lg:w-[15%] transform rotate-12 sm:translate-x-4 sm:-translate-y-4 opacity-80"
        style={{ zIndex: 10 }}
      />
      <div
        className="w-[90%] sm:w-[80%] h-[80%] md:h-[70%] bg-gradient-to-b from-black to-blue-900 opacity-90 shadow-3xl rounded-lg flex items-center justify-center p-4 md:p-8 relative"
        style={{ zIndex: 5 }}
      >
        <div className="text-white font-serif text-center space-y-4">
          <div className="text-2xl sm:text-3xl">
            Build stunning React interfaces in seconds with ready-made,
            customizable components
          </div>
          <div className="text-xl sm:text-2xl">
            your complete toolkit for faster, smarter web development.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
