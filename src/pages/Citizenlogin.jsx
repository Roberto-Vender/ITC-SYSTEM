import React from "react";
import { Link } from "react-router-dom";

const CitizenLogin = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="img.jpg"
          alt="Hospital"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-[400px] bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-200">
        <h2 className="mt-4 text-2xl font-bold text-blue-800">🩺 Citizen Login</h2>
        <p className="text-sm text-gray-500">Please sign in to access your records</p>

        {/* Username Input */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            className="mt-2 w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Link
              to="/ForgotPassword"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            id="password"
            required
            className="mt-2 w-full p-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Face Recognition Option */}
        <div
          className="mb-4 cursor-pointer bg-blue-50 border border-blue-300 text-blue-700 font-semibold text-center py-3 rounded-lg hover:bg-blue-100 transition"
          onClick={() => alert("Face Recognition Login (to be implemented)")}
        >
          😀 Login with Face Recognition 
        </div>

        {/* Sign In Button */}
        <Link to="/Dashboard">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Sign In
          </button>
        </Link>

        {/* Security Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
          🔒 Your login is secure. Please keep your credentials confidential.
        </div>
      </div>
    </div>
  );
};

export default CitizenLogin;
