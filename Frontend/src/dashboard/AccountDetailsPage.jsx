import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const AccountDetailsPage = () => {
  const { user, updateName, changePassword } = useAuth();

  const [name, setName] = useState(user?.displayName || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      if (name.trim() && name !== user?.displayName) {
        await updateName(name);
      }

      if (newPassword.trim()) {
        if (!currentPassword.trim()) {
          setMessage(
            "You must enter your current password to change the password."
          );
          return;
        }
        await changePassword(currentPassword, newPassword);
      }
      setMessage("Account Update Successfully");

      // Clear inputs after update
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      setMessage(`Update failed: ${error.message}`);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Account Details</h2>

      {message && <p className="mb-4 text-green-500">{message}</p>}

      <form onSubmit={handleSubmit}>
        {/* Name Update */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Update Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Email (Read-only) */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full border border-gray-300 rounded-lg p-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Password Update */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Change Password
          </label>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Save Changes Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountDetailsPage;
