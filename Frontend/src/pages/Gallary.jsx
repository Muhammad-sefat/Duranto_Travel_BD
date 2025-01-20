import React from "react";
import image1 from "../assets/barishal.jpg";
import image2 from "../assets/blog.jpg";
import image3 from "../assets/dhaka.jpeg";
import image4 from "../assets/dhaka2.jpg";
import image5 from "../assets/dhaka3.jpeg";
import image6 from "../assets/dhaka4.jpg";
import image7 from "../assets/dhaka5.jpg";
import image8 from "../assets/dhaka6.jpg";
import image9 from "../assets/dhaka7.jpeg";
import image10 from "../assets/house-02.jpg";

const Gallary = () => {
  return (
    <div className="my-8 grid md:grid-cols-2 lg:grid-cols-4 mx-8 gap-6">
      {[
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
      ].map((image, index) => (
        <div key={index} className="overflow-hidden rounded group">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="rounded h-full w-full transform transition duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallary;
