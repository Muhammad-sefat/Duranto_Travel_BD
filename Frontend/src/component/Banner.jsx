import React from "react";
import image from "../assets/duranto-banner.png";

const Banner = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col md:flex-row justify-between items-center gap-8 bg-[#F7F7F7] px-6 md:px-10">
      {/* Left Content */}
      <div className="text-center md:text-left my-10 max-w-2xl">
        <p className="text-2xl md:text-3xl font-bold my-6 md:my-10 leading-snug">
          বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষার্থীদের <br />
          <span className="text-orange-400">জন্য এডমিশন বাসের সিট বুকিং</span>
        </p>
        <p className="text-lg md:text-xl font-bold mt-6 md:mt-8 leading-7 md:leading-8 text-gray-600">
          সব পরীক্ষার্থী একসাথে চলি স্বপ্নের ক্যাম্পাসে” দুরন্ত ট্রাভেলস” <br />
          এডমিশন বাস সার্ভিস-এ
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[35%] flex justify-center">
        <img
          className="w-full md:h-full object-cover"
          src={image}
          alt="Transparent banner"
        />
      </div>
    </div>
  );
};

export default Banner;
