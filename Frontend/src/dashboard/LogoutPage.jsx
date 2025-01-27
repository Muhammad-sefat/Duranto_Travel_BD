import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LogoutPage = () => {
  const { logOut } = useAuth();
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
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
