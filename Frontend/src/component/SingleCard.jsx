import React from "react";

const SingleCard = ({ bus, handleBookClick }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[80%] transition-transform duration-300 ease-in-out hover:shadow-md ">
        <figure>
          <img
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
            src={bus.image}
            alt="Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bus.name}</h2>
          <div className="card-actions my-2">
            <button
              onClick={() => handleBookClick(bus)}
              className="btn bg-green-700 text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
