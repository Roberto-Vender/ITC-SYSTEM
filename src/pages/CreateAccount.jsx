import React from "react";

function CreateAccount() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🏥 Staff Registration
        </h2>

        <form className="space-y-2">
          {/* Staff id */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Staff ID
            </label>
            <input
              type="text"
              placeholder="Enter staff ID"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Middle Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              placeholder="Enter middle name"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
          >
            Create Account
            
          
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
