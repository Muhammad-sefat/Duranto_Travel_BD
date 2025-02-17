import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const SingleSitDetails = () => {
  const { user } = useAuth();
  const location = useLocation();
  const { selectedSeats = [], busData, journeyDate } = location.state || {};
  const [userName, setUserName] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentText, setStudentText] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");

  // Calculate total price dynamically
  const pricePerSeat = busData.price;
  const subtotal = selectedSeats.length * pricePerSeat;
  const bkashCharge = 90;
  const total = subtotal + bkashCharge;

  const handlePlaceOrder = async () => {
    if (!userName || !guardianPhone || !studentPhone) {
      alert("Please fill in all required fields!");
      return;
    }

    const orderData = {
      email: user.email,
      name: userName,
      guardianPhoneNumber: guardianPhone,
      studentPhoneNumber: studentPhone,
      paymentMethod: selectedPaymentMethod,
      transactionId: selectedPaymentMethod !== "cash" ? transactionId : null,
      selectedSeats,
      busData,
      journeyDate,
      totalPrice: total,
      orderNotes: studentText,
    };

    try {
      const response = await axios.post(
        "https://duranto-backend.vercel.app/api/orders/place-order",
        orderData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 201) {
        toast.success("Order placed successfully!");
        navigate("/confirm-order");
      } else {
        toast.error("Failed to place the order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred. Please try again.");
    }
  };

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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                value={guardianPhone}
                onChange={(e) => setGuardianPhone(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700 my-3">Student Phone Number *</span>
              <input
                type="text"
                className="mt-1 block p-3 w-full rounded-md border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter student phone number"
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
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
                value={studentText}
                onChange={(e) => setStudentText(e.target.value)}
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
            <h1 className="text-green-600 text-xl font-semibold my-2">
              {busData.to}
            </h1>
            <h3 className="text-lg font-semibold mb-2">Booking Details :</h3>
            <div className="border rounded p-5">
              <p className="text-gray-600">
                <strong>Boarding: </strong>
                {busData.from}
              </p>
              <p className="text-gray-600">
                <strong>Dropping: </strong>
                {busData.to}
              </p>
              <p className="text-gray-600">
                <strong>Journey Date: </strong>
                {journeyDate instanceof Date
                  ? journeyDate.toLocaleDateString()
                  : new Date(journeyDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="text-xl font-semibold my-2">Ticket Information :</h3>
            <div className="border rounded p-5">
              {selectedSeats.length > 0 ? (
                selectedSeats.map((seat, index) => (
                  <div key={index} className="p-3 border rounded-md my-2">
                    <p>
                      <strong>Seat Number:</strong> {seat.seatNumber}
                    </p>
                    <p>
                      <strong>Seat Type:</strong> {seat.type}
                    </p>
                    <p>
                      <strong>Price:</strong> {seat.price}৳
                    </p>
                  </div>
                ))
              ) : (
                <p>No seats selected</p>
              )}

              <hr className="my-2" />
            </div>
            <hr />
            <div className="flex justify-between items-center my-4">
              <p className="text-lg font-bold">SubTotal</p>
              <p className="text-lg font-bold">{subtotal} ৳</p>
            </div>
            <hr className="w-full" />
            <div className="flex justify-between items-center my-4">
              <p className="text-lg font-bold">Bkash Charge</p>
              <p className="text-lg font-bold">{bkashCharge} ৳</p>
            </div>
            <hr className="w-full" />
            <div className="flex justify-between items-center my-4">
              <p className="text-lg font-bold">Total</p>
              <p className="text-lg font-bold">{total} ৳</p>
            </div>
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

          {selectedPaymentMethod === "cash" && (
            <div className="mt-4 text-gray-600 my-5">
              <p className="mb-2">Pay your bill with passion</p>
            </div>
          )}

          {selectedPaymentMethod === "bkash" && (
            <div className="mt-4 text-gray-600">
              <p className="mb-2">1. Go to your Rocket app or dial *247#</p>
              <p className="mb-2">2. Choose "Send Money"</p>
              <p className="mb-2">3. Enter our account number: 01967000333</p>
              <p className="mb-2">4. Enter the amount: {total}৳</p>
              <p>5. Copy the Transaction ID and paste it below:</p>
              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </div>
          )}

          {selectedPaymentMethod === "nagad" && (
            <div className="mt-4 text-gray-600">
              <p className="mb-2">1. Open your Nagad app or dial *167#</p>
              <p className="mb-2">2. Select "Send Money"</p>
              <p className="mb-2">3. Enter our account number: 01967000333</p>
              <p className="mb-2">
                4. Enter the amount:
                {total}৳
              </p>
              <p>5. Copy the Transaction ID and paste it below:</p>
              <input
                type="text"
                placeholder="Transaction ID"
                className="w-full border border-gray-300 rounded-lg p-2 mt-2"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
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
              <button
                onClick={handlePlaceOrder}
                className="px-4 py-2 text-base font-semibold rounded-md bg-violet-800 text-white border-none"
              >
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
