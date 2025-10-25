import React from "react";
import { Link } from "react-router-dom";

const CreateNewPassword = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-[#E3F2FD]">
      {/* Login Card */}
      <div className="relative z-10 w-[450px] bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className=" text-2xl text-poppins text-black font-bold">
            Create New Password
          </h2>
   

        {/* New Pass */}
        <div className="text-sm text-black mt-4 " >

        <input type="text" placeholder="Enter new password" className="mt-2 w-full  p-2 text-xl rounded-lg bg-sky-50 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        </div>
        {/* Confirm Pass */}
        <div className="text-sm text-black mt-4 " >
            
        <input type="text" placeholder="Enter new password" className="mt-2 w-full  p-2 text-xl rounded-lg bg-sky-50 text-black border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        </div>
        <p className="text-xs text-black text-poppins mt-4">
            At least 8 characters,1 uppercase,1 number,no common passwords.
          </p>

        
    <div className="flex justify-center mt-2 gap-8">
        {/* Cancel Button */}
        <Link to="/ForgotPassword">
          <button className="w-[170px] bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-7">
            Cancel
          </button>
        </Link>

        {/* Submit Button */}
        <Link to="/NotifPasswordChanged">
          <button className="w-[170px] bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition mt-7">
            Submit
          </button>
        </Link>

       </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
