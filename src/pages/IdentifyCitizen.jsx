import React from "react";
import { Link } from "react-router-dom";
function IdentifyCitizen() {
  return (
    <div className="min-h-screen flex bg-blue-300">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-1.5xl font-bold text-indigo-600 mb-6">
            <a href="Dashboard">
            🏥 Staff Dashboard
            </a>
          </h2>
          <nav className="space-y-4">
            <a
              href=""
              className="text-gray-700 hover:text-indigo-600 font-medium block bg-blue-200 px-3 py-2 rounded-lg"
            >
              Register New Citizen
            </a>
            <a
              href="/IdentifyCitizen"
              className="text-gray-700 hover:text-indigo-600 font-medium block bg-blue-200 px-3 py-2 rounded-lg"
            >
              Identify Resident <br></br>
              (Via Facial Recognition)
            </a>
            <a
              href="/EditCitizenProfile"
              className="text-gray-700 hover:text-indigo-600 font-medium block bg-blue-200 px-3 py-2 rounded-lg"
            >
              Edit Citizen Profile
            </a>
          </nav>
        </div>
        <button className="text-red-500 hover:text-red-600 font-medium">
          Logout
        </button>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Welcome Back, Staff 👋
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search Citizen Box */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-center">
            <input
              type="text"
              placeholder="🔍 Search citizen..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Face Recognition Option */}
          <div
            className="cursor-pointer bg-indigo-50 border border-indigo-200 text-indigo-600 font-semibold flex items-center justify-center rounded-xl shadow-md hover:bg-indigo-100 transition"
            onClick={() => alert("Face Recognition (to be implemented)")}
          >
            😀 Recognize Citizen
          </div>

          {/* Register Citizen Box */}
          <div className="bg-indigo-600 py-3 px-6 rounded-xl shadow-md text-white font-semibold hover:bg-indigo-700 transition flex items-center justify-center">
            <Link to="/RegisterNewCitizen" >
            ➕ Register Citizen
            </Link>
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Citizen Records
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="py-3 px-4">ID</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Staff ID</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>         
         </table>
        </div>
      </div>
    </div>
  );
}

export default IdentifyCitizen;
