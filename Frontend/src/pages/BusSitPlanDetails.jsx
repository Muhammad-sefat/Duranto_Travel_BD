import React from "react";
import bus from "../assets/buss.jpg";

const BusSitPlanDetails = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="flex-shrink-0 flex justify-center items-center">
        <img src={bus} alt="Bus" className="w-full max-w-md object-cover" />
      </div>

      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="border p-5 rounded">
          <h2 className="text-xl font-semibold text-gray-800">
            Dhaka University (DU) Exam Centre CU (Bus-1, Unit DU-B)
          </h2>
          <hr className="my-2" />
          <p className="text-gray-800 mt-2">
            <span className="font-semibold text-base">Coach Type:</span> Non AC
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-base">Passenger Capacity:</span>{" "}
            40
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-5">
            <h3 className="font-semibold text-gray-800">Boarding</h3>
            <hr className="my-2" />
            <p className="text-gray-600">📍 (Boro Pull) Halishour Chittagong</p>
            <p className="text-gray-600">⏰ 7:30 am</p>
          </div>

          <div className="border rounded p-5">
            <h3 className="font-semibold text-gray-800">Dropping</h3>
            <hr className="my-2" />
            <p className="text-gray-600">
              📍 Dhaka University (DU) Exam Centre CU
            </p>
            <p className="text-gray-600">⏰ 9:30 am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusSitPlanDetails;
