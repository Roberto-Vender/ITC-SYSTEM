import React from "react";

function CreateAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300 text-poppins">
      <div className="bg-white shadow-2xl rounded-xl p-5 w-full max-w-md border ">
        {/* Logo */}
        <div className="relative mb-3">
          <img
            src="/logo1.jfif"
            alt="Logo"
            className="absolute left-13  w-15 h-15 object-contain"
          />
          </div>
        <h2 className="text-xl font-bold text-center text-poppins mb-6 ">
           Staff Registration
        </h2>

        <form className="space-y-2">
          {/* Staff id */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Staff ID
            </label>
            
            <input
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>

            <input
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>

              <input className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 mt-5"
          >
            Create Account
            </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
