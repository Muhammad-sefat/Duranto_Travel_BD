import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const ConfirmOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `https://duranto-backend.vercel.app/api/orders/${user?.email}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);

  if (orders.length === 0) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold my-10">
        Thank you. Your order has been received.
      </h1>

      {/* Iterate Over Orders */}
      {orders.map((order, index) => {
        const {
          busData,
          name,
          guardianPhoneNumber,
          studentPhoneNumber,
          selectedSeats,
          journeyDate,
          paymentMethod,
          transactionId,
          totalPrice,
          orderNotes,
          updatedAt,
          _id,
        } = order;

        return (
          <div key={_id} className="mb-10">
            {/* Order Summary */}
            <div className="flex justify-between items-center gap-4 mb-8">
              <div>
                <p className="text-base font-bold">ORDER NUMBER:</p>
                <p>{_id}</p>
              </div>

              <div>
                <p className="text-base font-bold">DATE:</p>
                <p>{new Date(updatedAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-base font-bold">EMAIL:</p>
                <p>{user?.email}</p>
              </div>
              <div>
                <p className="text-base font-bold">TOTAL:</p>
                <p>{totalPrice} BDT</p>
              </div>
              <div>
                <p className="text-base font-bold">PAYMENT METHOD:</p>
                <p>{paymentMethod}</p>
              </div>
            </div>

            {/* Order Details */}
            <div className="border rounded-lg p-4 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
              <div className="mb-4">
                <p className="font-semibold text-lg">{busData.to} &times; 1</p>
                <p>
                  <strong>Boarding:</strong> {busData.from} (
                  {new Date(journeyDate).toLocaleDateString()}{" "}
                  {new Date(journeyDate).toLocaleTimeString()})
                </p>
                <p>
                  <strong>Dropping:</strong> {busData.to} (
                  {new Date(journeyDate).toLocaleDateString()}{" "}
                  {new Date(journeyDate).toLocaleTimeString()})
                </p>
              </div>

              {selectedSeats.map((seat, seatIndex) => (
                <div key={seatIndex} className="border-b pb-4 mb-4">
                  <hr className="my-2" />
                  <p>
                    <strong>Seat Type :</strong> {seat.type}{" "}
                  </p>
                  <p>
                    <strong>Seat :</strong> {seat.seatNumber}{" "}
                  </p>
                  <p>
                    <strong>Price :</strong> ({seat.price} &times; 1) ={" "}
                    {seat.price} BDT
                  </p>
                </div>
              ))}

              <p className="font-semibold">
                <strong>Total Quantity :</strong> {selectedSeats.length}
              </p>
              <p className="font-semibold">
                <strong>Ticket Sub Total :</strong> {totalPrice - 15} BDT
              </p>
              <p className="font-semibold">
                <strong>Order Total :</strong> {totalPrice} BDT
              </p>
            </div>

            {/* Billing Details */}
            <div className="border rounded-lg p-4 mb-8">
              <h2 className="text-lg font-semibold mb-4">Billing Address</h2>

              <p>
                <strong>Name :</strong> {name}
              </p>
              <p>
                <strong>Guardian Phone Number :</strong> {guardianPhoneNumber}
              </p>
              <p>
                <strong>Student Phone Number :</strong> {studentPhoneNumber}
              </p>
              <p>
                <strong>Email :</strong> {user?.email}
              </p>

              <div className="mt-4">
                <p>
                  <strong>Transaction ID :</strong> {transactionId || "N/A"}
                </p>
                <p>
                  <strong>Order Notes :</strong> {orderNotes}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ConfirmOrder;
