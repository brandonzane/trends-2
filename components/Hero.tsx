import React from "react";
import Banner from "../public/2.png";

function Hero() {
  return (
    <div className="flex justify-between items-center bg-lime-50 border-black py-10">
      <div className="px-10 py-20 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            African Trends
          </span>{" "}
          is a place to read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic an connect with
          milllions of readers
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
