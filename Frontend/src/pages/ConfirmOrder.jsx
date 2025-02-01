import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const ConfirmOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  console.log(user);
  console.log(orders);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/orders/${user.email}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold text-center my-10">
        Thank you. Your order has been received.
      </h1>

      {/* Order Summary */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p className="text-sm font-medium">ORDER NUMBER:</p>
          <p>2046</p>
        </div>

        <div>
          <p className="text-sm font-medium">DATE:</p>
          <p>February 1, 2025</p>
        </div>
        <div>
          <p className="text-sm font-medium">EMAIL:</p>
          <p>sifat5521.chaldaall@gmail.com</p>
        </div>
        <div>
          <p className="text-sm font-medium">TOTAL:</p>
          <p>1,015.00</p>
        </div>
        <div>
          <p className="text-sm font-medium">PAYMENT METHOD:</p>
          <p>bkash</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Order details</h2>

        <div className="border-b pb-4 mb-4">
          <p className="font-semibold">
            Chattagong University (CU) (Unit-D) &times; 1
          </p>
          <p>Boarding: (ChawkBazar) Chattagong (March 22, 2025 8:00 am)</p>
          <p>Dropping: Chattagong University (CU) (March 22, 2025 9:00 am)</p>
          <p>Seat Type: Adult</p>
          <p>Seat: D3</p>
          <p>Price: (250.00 &times; 1) = 250.00</p>
        </div>

        <div className="border-b pb-4 mb-4">
          <p>Seat: E4</p>
          <p>Price: (250.00 &times; 1) = 250.00</p>
        </div>

        <div className="border-b pb-4 mb-4">
          <p>Seat: F3</p>
          <p>Price: (250.00 &times; 1) = 250.00</p>
        </div>

        <p className="font-semibold">Total Quantity: 4</p>
        <p className="font-semibold">Ticket Sub Total: 1,000.00</p>
        <p className="font-semibold">Order Total: 1,000.00</p>
      </div>

      {/* Billing Details */}
      <div className="border rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-4">Billing address</h2>

        <p>muhammad sefat</p>
        <p>01996993330</p>
        <p>sifat5521.chaldaall@gmail.com</p>

        <div className="mt-4">
          <p>Bkash Account Number: 01996993330</p>
          <p>Transaction ID: 028Yt625Z843</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
