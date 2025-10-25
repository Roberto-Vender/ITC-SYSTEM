import React from "react";
import { Link } from "react-router-dom";

const Checkmail = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E3F2FD]">
      {/* Cheack email */}
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className=" text-2xl text-poppins text-black font-bold ">
            Check your email
          </h2>
          <p className="text-sm text-red-400 text-poppins mt-6">
            A password reset link has been sent to your email address. Please check your inbox
          </p>
   
        {/* Reset Link Button */}
        <Link to="/createNewPassword">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-12">
            Resend
          </button>
        </Link>

        <div className="flex justify-center mt-8">
          <Link to="/Citizenlogin" className="font-semibold text-blue-600 hover:text-blue-700">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkmail;
