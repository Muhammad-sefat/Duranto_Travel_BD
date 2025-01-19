import React from "react";
import SingleCard from "./SingleCard";
import image1 from "../assets/barishal.jpg";
import image2 from "../assets/dhaka.jpeg";
import image3 from "../assets/dhaka2.jpg";
import image4 from "../assets/dhaka3.jpeg";
import image5 from "../assets/dhaka4.jpg";
import image6 from "../assets/dhaka5.jpg";
import image7 from "../assets/dhaka6.jpg";
import image8 from "../assets/dhaka7.jpeg";
const CardSection = () => {
  return (
    <div className="my-5">
      <div className="text-center border-2 rounded p-3 w-[70%] mx-auto">
        <p className="text-3xl font-bold text-orange-500">
          যে সকল বিশ্ববিদ্যালয়ের আমাদের বাস সার্ভিস চলমান।
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-10">
        <SingleCard image1={image1} text={"BUET (Up-Down)"} />
        <SingleCard
          image1={image2}
          text={"Dhaka University (DU) Exam center (Up-Down)"}
        />
        <SingleCard
          image1={image3}
          text={"Jagannath University(JU)(Up-Down)"}
        />
        <SingleCard
          image1={image4}
          text={"Chattagoang University(CU) (Up-Down)"}
        />
        <SingleCard image1={image5} text={"RUET (Up-Down)"} />
        <SingleCard image1={image6} text={"CUET (Up-Down)"} />
        <SingleCard image1={image7} text={"BUET (Up-Down)"} />
        <SingleCard image1={image8} text={"BUET (Up-Down)"} />
      </div>
    </div>
  );
};

export default CardSection;
