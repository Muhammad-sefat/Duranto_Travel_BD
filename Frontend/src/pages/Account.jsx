import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Account = () => {
  const { creatUser, signIn } = useAuth();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState({ type: "", content: "" });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await creatUser(registerEmail, registerPassword);
      if (result.error) {
        toast.error(result.error, { position: "top-right" });
      } else {
        toast.success("Registration successful!", { position: "top-right" });
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred.", {
        position: "top-right",
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn(loginEmail, loginPassword);
      if (result.error) {
        toast.error(result.error, { position: "top-right" });
      } else {
        toast.success("Login successful!", { position: "top-right" });
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message || "An unexpected error occurred.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        My Account
      </h1>
      {message.content && (
        <div
          className={`mb-4 p-3 rounded-lg text-white ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.content}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Login Section */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="login-email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="login-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white py-2 rounded-lg"
            >
              Log in
            </button>
          </form>
        </div>

        {/* Register Section */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="register-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="register-email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="register-password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="register-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white py-2 rounded-lg"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
