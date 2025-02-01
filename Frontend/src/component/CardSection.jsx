import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const [buses, setBuses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/buses")
      .then((response) => response.json())
      .then((data) => setBuses(data))
      .catch((error) => console.error("Error fetching bus data:", error));
  }, []);

  const handleBookClick = (busData) => {
    navigate("/sit-plan", { state: { busData } });
  };
  return (
    <div className="my-5">
      <div className="text-center border-2 rounded p-3 w-[70%] mx-auto">
        <p className="text-3xl font-bold text-orange-500">
          যে সকল বিশ্ববিদ্যালয়ের আমাদের বাস সার্ভিস চলমান।
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10 mx-10">
        {buses.slice(0, 8).map((bus, index) => (
          <SingleCard key={index} bus={bus} handleBookClick={handleBookClick} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
