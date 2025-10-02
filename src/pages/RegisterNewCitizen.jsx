import React from "react";

function RegisterNewCitizen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md border border-indigo-100">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🏥 Add Citizen
        </h2>

        <form className="space-y-2">
          {/* Citizen id */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Citizen ID
            </label>
            <input
              type="text"
              placeholder="Enter Citizen ID"
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
              placeholder="Enter Last name"
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
              placeholder="Enter First name"
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
              placeholder="Enter Middle name"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          

          {/* para ma hibaw an kinsa na staff ga add */}    
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Staff Id
            </label>
            <input
              type="password"
              placeholder="Enter Staff ID"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {/* Face Recognition Option */}
        <div
          className="mt-4 cursor-pointer bg-blue-50 border border-blue-300 text-blue-700 font-semibold text-center py-3 rounded-lg hover:bg-blue-100 transition"
          onClick={() => alert("Face Recognition Login (to be implemented)")}
        >
          😀 Add face Recognition  
        </div>
            
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
          >
            Add New Citizen
            
          
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterNewCitizen;
