import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [buses, setBuses] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://duranto-backend.vercel.app/api/buses")
      .then((response) => response.json())
      .then((data) => setBuses(data))
      .catch((error) => console.error("Error fetching bus data:", error));
  }, [buses]);

  const handleBookClick = (busData) => {
    console.log(busData);
    navigate("/sit-plan", { state: { busData } });
  };

  return (
    <div className="my-5">
      <div className="text-center border-2 rounded p-3 w-[75%] mx-auto">
        <p className="text-xl md:text-3xl font-bold text-orange-500">
          নিচের তালিকা থেকে বুকিং করুন আপনার পছন্দের বাসের সিট।
        </p>
      </div>
      <div className="overflow-x-auto p-4 mx-10">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="border border-gray-300 px-4 py-3">From</th>
              <th className="border border-gray-300 px-4 py-3">To</th>
              <th className="border border-gray-300 px-4 py-3">Unit</th>
              <th className="border border-gray-300 px-4 py-3">Bus types</th>
              <th className="border border-gray-300 px-4 py-3">Journey Date</th>
              <th className="border border-gray-300 px-4 py-3">Exam Date</th>
              <th className="border border-gray-300 px-4 py-4">
                Ticket Booking
              </th>
            </tr>
          </thead>
          <tbody>
            {buses.map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
              >
                <td className="border border-gray-300 px-4 py-4">{row.from}</td>
                <td className="border border-gray-300 px-4 py-4">{row.to}</td>
                <td className="border border-gray-300 px-4 py-4">{row.unit}</td>
                <td className="border border-gray-300 px-4 py-4">
                  {row.busType}
                </td>
                <td className="border border-gray-300 px-4 py-4">
                  {new Date(row.journeyDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-4">
                  {new Date(row.examDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  <button
                    onClick={() => handleBookClick(row)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
                  >
                    <FontAwesomeIcon icon={faCarSide} /> Book
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
