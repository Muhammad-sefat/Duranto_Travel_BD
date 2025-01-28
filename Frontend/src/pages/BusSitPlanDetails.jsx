import React, { useState } from "react";
import bus from "../assets/buss.jpg";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";

const BusSitPlanDetails = () => {
  const location = useLocation();
  const { busData } = location.state || {};

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [journeyDate, setJourneyDate] = useState(new Date());
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showSeatPlan, setShowSeatPlan] = useState(false);

  const locations = [
    { value: "halishour", label: "(Boro Pull) Halishour Chittagong" },
    { value: "dhakaUniversity", label: "Dhaka University (DU) Exam centre CU" },
  ];

  const seatList = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
    ["E1", "E2", "E3", "E4"],
    ["F1", "F2", "F3", "F4"],
    ["G1", "G2", "G3", "G4"],
    ["I1", "I2", "I3", "I4"],
  ];

  const handleSeatClick = (seat) => {
    const seatDetails = {
      seatNumber: seat,
      type: busData.seatType,
      price: busData.price,
    };

    // Add or remove seat from selectedSeats
    if (selectedSeats.some((s) => s.seatNumber === seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s.seatNumber !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seatDetails]);
    }
  };
  const handleDeleteSeat = (seatNumber) => {
    setSelectedSeats(
      selectedSeats.filter((seat) => seat.seatNumber !== seatNumber)
    );
  };

  const calculateTotal = () =>
    selectedSeats.reduce((total, seat) => total + seat.price, 0);

  return (
    <>
      <div className="flex justify-between mx-12">
        <img
          src={bus}
          alt="Bus"
          className="w-[45%] object-cover transition duration-300 hover:scale-110 "
        />

        <div>
          <div className="border p-5 rounded">
            <p className="font-bold text-lg text-green-600">{busData.to}</p>
            <hr className="my-3" />
            <div className="text-base font-medium">
              <p>Coach Type : {busData.busType}</p>
              <p>Passenger Capacity : 40</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="border p-5 rounded">
              <p className="text-xl font-semibold">Boarding</p>
              <hr className="my-3" />
              <p> 📍 {busData.from}</p>
            </div>
            <div className="border p-5 rounded">
              <p className="text-xl font-semibold">Droping</p>{" "}
              <hr className="my-3" />
              <p> 📍 {busData.to}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen my-5">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4 text-green-600">BUY TICKET</h1>
          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                From:
              </label>
              <Select
                options={locations}
                value={from}
                onChange={setFrom}
                placeholder="Select starting point"
                className="shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                To:
              </label>
              <Select
                options={locations}
                value={to}
                onChange={setTo}
                placeholder="Select destination"
                className="shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Journey Date:
              </label>
              <DatePicker
                selected={journeyDate}
                onChange={(date) => setJourneyDate(date)}
                dateFormat="dd MMM yyyy"
                className="w-full border border-gray-300 rounded-lg shadow-sm px-4 py-2"
              />
            </div>
            <div className="mt-8">
              <button className="bg-green-600 text-white px-16 py-2 rounded-lg hover:bg-green-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mt-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-around items-center my-4">
            <button className="w-[50%] text-xl font-semibold bg-green-600 border p-2 rounded text-white">
              January 25, 2025
            </button>
            <button className="w-[50%] text-xl font-semibold text-green-600 border p-2 rounded ">
              January 26, 2025
            </button>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between gap-5">
            <div className="md:w-[28%] flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="flex-shrink-0 flex justify-center items-center">
                <img src={bus} alt="Bus" className="w-24 object-cover" />
              </div>
              <p className="font-bold text-lg text-green-600">{busData.to}</p>
            </div>
            <div className="md:w-[25%]">
              <p className="text-gray-700">
                📍 {locations[0]?.label} ( 7:30 am )
              </p>
              <p className="text-gray-700">
                📍 {locations[1]?.label} ( 9:30 am )
              </p>
              <p className="text-gray-700">⏳ Duration: 2 H 0 M</p>
            </div>
            <div className="md:w-[45%] flex justify-between items-center gap-5 text-center">
              <div className="text-gray-700">
                <p className="text-lg font-medium">{busData.busType}</p>
                <p>Coach Type</p>
              </div>
              <div className="text-gray-700">
                <p className="text-lg font-medium">Seats Available</p>
                <p> 34/40</p>
              </div>
              <div className="text-gray-700 font-bold">
                <p className="text-lg font-medium">{busData.price}৳ </p>
                <p>Fare/Seat</p>
              </div>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-700 transition"
                onClick={() => setShowSeatPlan(!showSeatPlan)}
              >
                View Seats
              </button>
            </div>
          </div>

          {/* Seat Plan Section (Rendered below the result) */}
          {showSeatPlan && (
            <div className="mt-6 flex gap-6">
              {/* Seat Plan */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md flex-grow">
                <h2 className="text-4xl font-bold mb-8 text-green-600">
                  Select Your Seats
                </h2>
                <div className="grid grid-cols-2 gap-10">
                  {seatList.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center gap-2">
                      {row.map((seat) => (
                        <button
                          key={seat}
                          className={`w-12 h-12 rounded-full ${
                            selectedSeats.find((s) => s.seatNumber === seat)
                              ? "bg-green-600 text-white"
                              : "bg-gray-200 text-gray-800"
                          } hover:bg-green-700 transition`}
                          onClick={() => handleSeatClick(seat)}
                        >
                          {seat}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Seats Details */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md w-1/2">
                <h2 className="text-xl font-bold mb-4 text-green-600 text-center">
                  Selected Seats
                </h2>
                {selectedSeats.length > 0 ? (
                  <div>
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr>
                          <th className="border-b py-2">Seat Type</th>
                          <th className="border-b py-2">Seat</th>
                          <th className="border-b py-2">Price</th>
                          <th className="border-b py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedSeats.map((seat, index) => (
                          <tr key={index}>
                            <td className="py-2">{seat.type}</td>
                            <td className="py-2">{seat.seatNumber}</td>
                            <td className="py-2">{seat.price}৳</td>
                            <td className="py-2">
                              <button
                                onClick={() =>
                                  handleDeleteSeat(seat.seatNumber)
                                }
                                className="text-red-600 hover:text-red-800 transition"
                              >
                                🗑️
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="mt-4 font-bold text-right">
                      Total:{" "}
                      <span className="text-green-600">
                        {calculateTotal()}৳
                      </span>
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-700 text-center">
                    No seats selected.
                  </p>
                )}
                <button className="bg-green-600 text-white w-full py-2 rounded-lg mt-4 hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BusSitPlanDetails;
