import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardPage = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="ml-6">
      <p className="font-medium">
        Your Email :{" "}
        <span className="text-lg font-semibold"> {user?.email}</span> ( If Not
        your <span className="text-lg font-semibold"> {user?.email}</span> ){" "}
        <button
          onClick={handleLogout}
          className="font-bold px-3 underline text-red-600"
        >
          LogOut
        </button>
      </p>
      <p className="my-5">
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
};

export default DashboardPage;
