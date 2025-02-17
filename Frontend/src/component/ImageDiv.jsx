import React from "react";
import cityImage from "../assets/about2.png";
const ImageDiv = () => {
  return (
    <div className="relative h-[80vh] mt-8 mb-28">
      {/* Image */}
      <img
        src={cityImage}
        alt="City View"
        className="w-full h-full object-cover"
      />

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 bg-[#072a3e] text-white p-6 md:p-10 w-full md:w-3/5 rounded-t-xl">
        <div className="h-[4px] w-16 bg-green-400 mb-4"></div>
        <h1 className="text-2xl md:text-4xl font-bold leading-snug my-5">
          Smile and enjoy Paris. Take a long walk around and talk to people.
        </h1>
        <p className="leading-7 mt-3 text-sm md:text-base">
          Traveling opens your heart, broadens your mind, and fills your life
          with stories to tell. Every destination offers something unique—a new
          perspective, a new adventure, and memories that last a lifetime. Step
          out of your comfort zone, explore new places, meet new people, and let
          the beauty of the world inspire you.
        </p>
      </div>
    </div>
  );
};

export default ImageDiv;
