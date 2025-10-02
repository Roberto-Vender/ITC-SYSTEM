import React from "react";

function EditCitizenProfile() {
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
              Value="2627"
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
              value="Vender"
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
              Value="Roberto"
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
              value="Tanio"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          

          {/* para ma hibaw an kinsa na staff ga add */}    
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Staff Id
            </label>
            <input
              type="text"
              vALUE="2222"
              className="mt-1 w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Buttons Section */}
        <div className="flex gap-4 mt-4">
        <button
            type="button"
            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
        >
            Confirm
        </button>

        <button
            type="button"
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
        >
            Cancel
        </button>
        </div> 
</form>
      </div>
      </div>
      
  );
}

export default EditCitizenProfile;
