import React from "react";
import { Link } from "react-router-dom";

const ViewHealthcareHistory = () => {
  // Example sample records (you can replace this with data from your backend later)
  const medicalRecords = [
    {
      date: "2025-09-10",
      diagnosis: "Hypertension",
      treatment: "Prescribed Lisinopril 10mg daily",
      doctor: "Dr. Maria Santos",
    },
    {
      date: "2025-07-15",
      diagnosis: "Routine Checkup",
      treatment: "Normal results, advised follow-up in 6 months",
      doctor: "Dr. Jose Dela Cruz",
    },
    {
      date: "2025-04-22",
      diagnosis: "Flu",
      treatment: "Rest, fluids, and Oseltamivir 75mg",
      doctor: "Dr. Anne Lopez",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-50">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="img.jpg"
          alt="Hospital"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-[90%] max-w-5xl bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">
          🩺 View Healthcare History
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Review all past medical records for monitoring long-term health progress.
        </p>

        {/* Table of Records */}
        <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Diagnosis</th>
                <th className="px-6 py-3 text-left font-semibold">Treatment</th>
                <th className="px-6 py-3 text-left font-semibold">Doctor</th>
              </tr>
            </thead>
            <tbody>
              {medicalRecords.map((record, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-blue-50 transition duration-200"
                >
                  <td className="px-6 py-3">{record.date}</td>
                  <td className="px-6 py-3">{record.diagnosis}</td>
                  <td className="px-6 py-3">{record.treatment}</td>
                  <td className="px-6 py-3">{record.doctor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between items-center">
          <Link
            to="/Dashboard"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            ⬅ Back to Dashboard
          </Link>

          <Link
            to="/CitizenSearch"
            className="text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            🔍 Search Another Citizen
          </Link>
        </div>

        {/* Footer Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-700">
          📋 Note: These records are confidential. Ensure proper authorization before sharing.
        </div>
      </div>
    </div>
  );
};

export default ViewHealthcareHistory;

