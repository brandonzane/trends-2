import React from "react";
import Banner from "../public/2.png";

function Hero() {
  return (
    <div className="flex justify-between items-center bg-lime-50 border-y border-black py-10 lg:py-0">
      <div className="px-10 space-y-5 text-center md:text-left">
        <h1 className="text-6xl max-w-xl font-serif -tracking-wide">
          <span className="font-bold underline decoration-black decoration-4">
            African Trends
          </span>{" "}
          is a place to learn about business in Africa
        </h1>
        <h2>
          Make the most informed decisions about potential investments on the
          African continent.
        </h2>
      </div>

      <img
        className="hidden md:inline-flex h-32 lg:h-full px-10"
        src={Banner.src}
        alt=""
      />
    </div>
  );
}

export default Hero;
