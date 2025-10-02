import React from "react";
import { Link } from "react-router-dom";

const PatientLogin = () => {
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
          <h2 className="mt-4 text-2xl font-bold text-blue-800">
            🩺 Staff Login
          </h2>
          <p className="text-sm text-gray-500">
            Please sign in to access your records
          </p>
      

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

        {/* Registration */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/CreateAccount"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign up 
          </Link>
        </p>

        {/* Registration */}
        <p className="mt-6 text-center text-sm text-gray-600">
          login as Citizen?{" "}
          <Link
            to="/Citizenlogin"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            click here 
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PatientLogin;
