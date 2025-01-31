import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const ConfirmOrder = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
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
  }, []);

  return (
    <div>
      <p>this is confirm order page</p>
    </div>
  );
};

export default ConfirmOrder;
