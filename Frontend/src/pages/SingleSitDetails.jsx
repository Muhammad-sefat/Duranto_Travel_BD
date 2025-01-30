import React, { useState } from "react";

const SingleSitDetails = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* billing information */}
      <div className="max-w-full my-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Billing Details Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Billing details</h2>

            <label className="block mb-4">
              <span className="text-gray-700 my-3">Your name *</span>
              <input
                type="text"
                className="mt-1 block p-3 w-full rounded-md border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 my-3">
                Guardian phone number *
              </span>
              <input
                type="text"
                className="mt-1 block p-3 w-full rounded-md border-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter guardian's phone number"
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 my-3">Student Phone Number *</span>
              <input
                type="text"
                className="mt-1 block p-3 w-full rounded-md border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter student phone number"
              />
            </label>

            <label className="flex items-center mt-4">
              <input
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2 text-gray-700">
                I would like to receive exclusive emails with discounts and
                product information
              </span>
            </label>
          </div>

          {/* Additional Information Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Additional information
            </h2>

            <label className="block">
              <span className="text-gray-700 my-3">Order notes (optional)</span>
              <textarea
                className="mt-1 block p-3 w-full rounded-md border-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows="6"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </label>
          </div>
        </div>
      </div>
      {/* Order Section */}
      <div className="mb-6 px-5 my-5">
        <h2 className="text-2xl font-bold mb-4">Your Order</h2>
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Booking Details</h3>
            <p className="text-gray-600">
              <strong>Boarding:</strong> Boro Pull, Hailshour, Chittagong
              (February 12, 2025, 9:00 PM)
            </p>
            <p className="text-gray-600">
              <strong>Dropping:</strong> JU, Jahangirnagar University (February
              13, 2025, 6:00 AM)
            </p>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold">Ticket Information</h3>
            <ul className="text-gray-600">
              <li>Seat F3 - 1,500৳</li>
              <li>Seat F4 - 1,500৳</li>
              <li>Seat G3 - 1,500৳</li>
              <li>Seat G4 - 1,500৳</li>
            </ul>
            <p className="text-right font-bold mt-4">Total: 6,000৳</p>
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="px-5 my-5">
        <h2 className="text-3xl font-bold mb-4">Payment</h2>
        <div className="border border-gray-300 rounded-lg p-4 bg-stone-200">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Payment Method
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPaymentMethod("cash")}
                className={`p-2 rounded-lg border text-sm font-medium w-1/3 ${
                  selectedPaymentMethod === "cash"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Cash on Delivery
              </button>
              <button
                onClick={() => setSelectedPaymentMethod("bkash")}
                className={`p-2 rounded-lg border text-sm font-medium w-1/3 ${
                  selectedPaymentMethod === "bkash"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                bKash
              </button>
              <button
                onClick={() => setSelectedPaymentMethod("nagad")}
                className={`p-2 rounded-lg border text-sm font-medium w-1/3 ${
                  selectedPaymentMethod === "nagad"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                Nagad
              </button>
            </div>
          </div>

          {selectedPaymentMethod === "bkash" && (
            <div className="mt-4 text-gray-600">
              <p className="mb-2">1. Go to your Rocket app or dial *247#</p>
              <p className="mb-2">2. Choose "Send Money"</p>
              <p className="mb-2">3. Enter our account number: 01967000333</p>
              <p className="mb-2">4. Enter the amount: 6,090৳</p>
              <p>5. Copy the Transaction ID and paste it below:</p>
              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              />
            </div>
          )}

          {selectedPaymentMethod === "nagad" && (
            <div className="mt-4 text-gray-600">
              <p className="mb-2">1. Open your Nagad app or dial *167#</p>
              <p className="mb-2">2. Select "Send Money"</p>
              <p className="mb-2">3. Enter our account number: 01967000333</p>
              <p className="mb-2">4. Enter the amount: 6,090৳</p>
              <p>5. Copy the Transaction ID and paste it below:</p>
              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
              />
            </div>
          )}
          <div>
            <p className="my-5 text-gray-600">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="text-red-700">Privacy policy</span>.
            </p>
            <div className="text-right">
              <button className="px-4 py-2 text-base font-semibold rounded-md bg-violet-800 text-white border-none">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSitDetails;
