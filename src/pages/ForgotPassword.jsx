import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E3F2FD]">
      {/* Login Card */}
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className=" text-2xl text-poppins text-black font-bold">
            Forgot your password
          </h2>
          <p className="text-sm text-black text-poppins mt-6">
            Please enter your registered email address
          </p>
   

        {/* Username Input */}
        <div className="text-sm text-black mt-8 " >
        Enter email address
        <input type="text" placeholder="yourname@example.com" className="mt-2 w-full  p-2 text-xl rounded-lg bg-sky-50 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        </div>

        

        {/* Sign In Button */}
        <Link to="/Checkmail">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-7">
            Send Reset Link
          </button>
        </Link>

        <div className="flex justify-center mt-8">
          <Link to="/Citizenlogin" className="font-semibold text-blue-600 hover:text-blue-700">
            Back to Login
          </Link>
        </div>
        

        {/* Notice */}
        <div className="mt-6 p-3 text-xs  text-gray-500">
          If an account matching that email address exists,  a password reset link has been sent.
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
