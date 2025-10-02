import React from "react";

function Dashboard() {
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
              href="/RegisterNewCitizen"
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
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-black-800 mb-6">
          Welcome Back, Staff 👋
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-600">Total Staff</h2>
            <p className="mt-2 text-3xl font-bold text-gray-800">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-600">Total Citizen</h2>
            <p className="mt-2 text-3xl font-bold text-gray-800">35</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-600">Active Today</h2>
            <p className="mt-2 text-3xl font-bold text-gray-800">8</p>
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md border border-indigo-100">
          <h2 className="text-xl font-semibold text-indigo-600 mb-4">
            Recent Staff
          </h2>
          <table className="w-full border-collapse">
            {/* Table ari bai */}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
