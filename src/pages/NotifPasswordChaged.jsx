import React from "react";
import { Link } from "react-router-dom";

const NotifPasswordChanged = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E3F2FD]">
      {/* Cheack email */}
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className=" text-2xl text-poppins text-black font-bold ">
            Password Changed
          </h2>
          <p className="text-sl text-red-400 text-poppins mt-6">
            Your password has been updated. You can now log in with your new password.
          </p>
   
        {/* Go back Button */}
        <Link to="/Stafflogin">
          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-12">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotifPasswordChanged;
