import React from "react";
import image from "../assets/duranto-banner.png";

const Banner = () => {
  return (
    <div className="w-full h-[80vh] md:flex justify-between gap-8 bg-[#F7F7F7]">
      <div className="px-10 my-10">
        <p className="text-3xl font-bold my-10">
          বিশ্ববিদ্যালয়ে ভর্তি পরীক্ষার্থীদের <br />
          <span className="text-orange-600">জন্য এডমিশন বাসের সিট বুকিং</span>
        </p>
        <p className="text-xl font-bold mt-8 leading-8 text-gray-600">
          সব পরীক্ষার্থী একসাথে চলি স্বপ্নের ক্যাম্পাসে” দুরন্ত ট্রাভেলস” <br />
          এডমিশন বাস সার্ভিস-এ
        </p>
      </div>
      <div className="w-[35%]">
        <img className="h-full" src={image} alt="Transparent banner" />
      </div>
    </div>
  );
};

export default Banner;
