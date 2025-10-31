import React from "react";



const AppointmentTab = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-gray-800">
      {/* Sidebar */}
  

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#005B9E]">Appointments</h1>
        </div>

        {/* Upcoming Appointments Section */}
        <section className="bg-white rounded-xl shadow p-6 border border-blue-50 mb-8">
          <h2 className="text-lg font-semibold text-[#005B9E] mb-4">
            Upcoming Appointments
          </h2>

          <div className="space-y-4">
            {/* Example Appointment Card */}
            <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-700">
                    
                    Oct 30, 2025 — 09:30 AM
                  </p>
                  <p className="text-gray-500 ml-6">
                    Barangay Health Center — General Check-up
                  </p>
                </div>
                <span className="text-sm text-green-600 font-semibold">
                  Confirmed
                </span>
              </div>
            </div>

            <div className="p-4 border border-blue-100 rounded-lg hover:bg-blue-50 transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-700">
                    
                    Nov 5, 2025 — 10:00 AM
                  </p>
                  <p className="text-gray-500 ml-6">
                    Barangay Health Center — Blood Test
                  </p>
                </div>
                <span className="text-sm text-yellow-600 font-semibold">
                  Pending
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Appointments Section */}
        <section className="bg-white rounded-xl shadow p-6 border border-blue-50">
          <h2 className="text-lg font-semibold text-[#005B9E] mb-4">
            Previous Appointments
          </h2>

          <div className="space-y-4">
            {/* Completed Appointment */}
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-700">
                    
                    Oct 5, 2025 — 08:00 AM
                  </p>
                  <p className="text-gray-500 ml-6">
                    Barangay Health Center — Flu Vaccine
                  </p>
                </div>
                <span className="text-sm text-green-600 font-semibold">
                  Completed
                </span>
              </div>
            </div>

            {/* Missed Appointment */}
            <div className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-700">
                   
                    Sep 20, 2025 — 09:00 AM
                  </p>
                  <p className="text-gray-500 ml-6">
                    Barangay Health Center — Dental Check-up
                  </p>
                </div>
                <span className="text-sm text-red-600 font-semibold">
                  Missed
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AppointmentTab;