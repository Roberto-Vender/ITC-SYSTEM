import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E3F2FD]">
      {/* Login Card */}
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        
        {/* Logo */}
        <div className="relative mb-6">
          <img
            src="/logo1.jfif"
            alt="Logo"
            className="absolute left-0  w-15 h-15 object-contain"
          />

          
          <h2 className="pl-18 text-xl text-poppins text-black">
            Admin Login
          </h2>
          <p className="pl-18 text-sm text-gray-500 text-poppins mt-1">
            Please sign in to access your records
          </p>
        </div>

        {/* Username Input */}
        <div className="text-xl text-black mb-4">
            Username
          
        <input type="text"className="mt-2 w-full p-2 text-xl rounded-lg bg-sky-50 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xl text-black ">
            Password
            <Link
              to="/ForgotPassword"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            className="mt-2 w-full p-2 text-xl rounded-lg bg-sky-50 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign In Button */}
        <Link to="/AdminDashboard">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-5">
            Login
          </button>
        </Link>

        {/* links */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <Link to="/CreateAccount" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign up
          </Link>
        </p>

        <p className="mt-4 text-center text-sm text-gray-600">
          Login as Staff?
          <Link to="/StaffLogin" className="font-semibold text-blue-600 hover:text-blue-700">
            Click here
          </Link>
        </p>

        {/* Notice */}
        <div className="mt-6 p-3 text-xs text-center text-gray-500">
          Your login is secure. Please keep your credentials confidential.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
