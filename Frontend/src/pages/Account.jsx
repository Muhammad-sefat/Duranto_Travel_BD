import React from "react";

const Account = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        My Account
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Login Section */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username or email address{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Enter your username or email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  placeholder="Enter your password"
                />
                <span className="absolute inset-y-0 right-3 flex items-center">
                  <i className="fas fa-eye text-gray-500"></i>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-lime-500" />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-lime-500 hover:underline">
                Lost your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600"
            >
              Log in
            </button>
          </form>
        </div>

        {/* Register Section */}
        <div className="border border-gray-300 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Create a password"
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              A link to set a new password will be sent to your email address.
            </p>
            <button
              type="submit"
              className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600"
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
