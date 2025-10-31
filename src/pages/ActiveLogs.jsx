import React, { useState } from "react";

function ActiveLogs() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);


  return (
    <div className="flex min-h-screen bg-[#F5F5F5] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-[#E3F2FD] flex flex-col">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="/logo1.jfif"
            alt="Logo"
            className="w-40 h-40 object-contain mb-3"
          />
          <h2 className="text-sm font-bold text-blue-700 text-center">
            Barangay Health Profiling
          </h2>
        </div>

         {/* Nav Links */}
        <nav className="flex flex-col gap-3">
        <a
            href="/AdminDashboard"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
        >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.375 5V1.5C9.375 1.25208 9.459 1.04442 9.627 0.877C9.795 0.709583 10.0027 0.625583 10.25 0.625H15.5C15.7479 0.625 15.9559 0.709 16.1239 0.877C16.2919 1.045 16.3756 1.25267 16.375 1.5V5C16.375 5.24792 16.291 5.45588 16.123 5.62388C15.955 5.79188 15.7473 5.87558 15.5 5.875H10.25C10.0021 5.875 9.79442 5.791 9.627 5.623C9.45958 5.455 9.37558 5.24733 9.375 5ZM0.625 8.5V1.5C0.625 1.25208 0.709 1.04442 0.877 0.877C1.045 0.709583 1.25267 0.625583 1.5 0.625H6.75C6.99792 0.625 7.20588 0.709 7.37388 0.877C7.54188 1.045 7.62558 1.25267 7.625 1.5V8.5C7.625 8.74792 7.541 8.95588 7.373 9.12388C7.205 9.29187 6.99733 9.37558 6.75 9.375H1.5C1.25208 9.375 1.04442 9.291 0.877 9.123C0.709583 8.955 0.625583 8.74733 0.625 8.5ZM9.375 15.5V8.5C9.375 8.25208 9.459 8.04442 9.627 7.877C9.795 7.70958 10.0027 7.62558 10.25 7.625H15.5C15.7479 7.625 15.9559 7.709 16.1239 7.877C16.2919 8.045 16.3756 8.25267 16.375 8.5V15.5C16.375 15.7479 16.291 15.9559 16.123 16.1239C15.955 16.2919 15.7473 16.3756 15.5 16.375H10.25C10.0021 16.375 9.79442 16.291 9.627 16.123C9.45958 15.955 9.37558 15.7473 9.375 15.5ZM0.625 15.5V12C0.625 11.7521 0.709 11.5444 0.877 11.377C1.045 11.2096 1.25267 11.1256 1.5 11.125H6.75C6.99792 11.125 7.20588 11.209 7.37388 11.377C7.54188 11.545 7.62558 11.7527 7.625 12V15.5C7.625 15.7479 7.541 15.9559 7.373 16.1239C7.205 16.2919 6.99733 16.3756 6.75 16.375H1.5C1.25208 16.375 1.04442 16.291 0.877 16.123C0.709583 15.955 0.625583 15.7473 0.625 15.5ZM2.375 7.625H5.875V2.375H2.375V7.625ZM11.125 14.625H14.625V9.375H11.125V14.625ZM11.125 4.125H14.625V2.375H11.125V4.125ZM2.375 14.625H5.875V12.875H2.375V14.625Z" fill="#E3F2FD"/>
            </svg>
            Dashboard
            </a>

            <a
                href="/AdminStaff"
                className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.5 4.5C21.5 5.03043 21.2893 5.53914 20.9142 5.91421C20.5391 6.28929 20.0304 6.5 19.5 6.5C18.9696 6.5 18.4609 6.28929 18.0858 5.91421C17.7107 5.53914 17.5 5.03043 17.5 4.5C17.5 3.96957 17.7107 3.46086 18.0858 3.08579C18.4609 2.71071 18.9696 2.5 19.5 2.5C20.0304 2.5 20.5391 2.71071 20.9142 3.08579C21.2893 3.46086 21.5 3.96957 21.5 4.5Z" stroke="black" stroke-width="1.5"/>
                <path d="M20.471 9.406C20.5 10.29 20.5 11.312 20.5 12.5C20.5 16.743 20.5 18.864 19.182 20.182C17.864 21.5 15.742 21.5 11.5 21.5C7.258 21.5 5.136 21.5 3.818 20.182C2.5 18.864 2.5 16.742 2.5 12.5C2.5 8.258 2.5 6.136 3.818 4.818C5.136 3.5 7.258 3.5 11.5 3.5C12.688 3.5 13.71 3.5 14.594 3.529" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 12.5H8L10 8.5L13 16.5L15 12.5H17.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            Staff
            </a> 

            <a
                href="/ActiveLogs"
                className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H15M20 7H15V2M20 7L15 2" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 18C16 16.9391 15.5786 15.9217 14.8284 15.1716C14.0783 14.4214 13.0609 14 12 14C10.9391 14 9.92172 14.4214 9.17157 15.1716C8.42143 15.9217 8 16.9391 8 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>


            Activity Logs
            </a> 
            </nav>
            </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-[#66B821] text-2xl font-bold">Active Logs </h1>
          </div>
          <div className="flex items-center gap-4 relative">
            {/* Profile Icon */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M14.0001 14C12.1667 14 10.5973 13.3472 9.29175 12.0416C7.98619 10.7361 7.33341 9.16663 7.33341 7.33329C7.33341 5.49996 7.98619 3.93052 9.29175 2.62496C10.5973 1.3194 12.1667 0.666626 14.0001 0.666626C15.8334 0.666626 17.4029 1.3194 18.7084 2.62496C20.014 3.93052 20.6667 5.49996 20.6667 7.33329C20.6667 9.16663 20.014 10.7361 18.7084 12.0416C17.4029 13.3472 15.8334 14 14.0001 14ZM0.666748 24V22.6666C0.666748 21.7222 0.910082 20.8544 1.39675 20.0633C1.88341 19.2722 2.52897 18.6677 3.33341 18.25C5.05564 17.3888 6.80564 16.7433 8.58341 16.3133C10.3612 15.8833 12.1667 15.6677 14.0001 15.6666C15.8334 15.6655 17.639 15.8811 19.4167 16.3133C21.1945 16.7455 22.9445 17.3911 24.6667 18.25C25.4723 18.6666 26.1184 19.2711 26.6051 20.0633C27.0917 20.8555 27.3345 21.7233 27.3334 22.6666V24C27.3334 24.9166 27.0073 25.7016 26.3551 26.355C25.7029 27.0083 24.9179 27.3344 24.0001 27.3333H4.00008C3.08341 27.3333 2.29897 27.0072 1.64675 26.355C0.994525 25.7027 0.667859 24.9177 0.666748 24Z" fill="#7AC61D"/>
                </svg>
              </div>
              <button className="p-1" onClick={() => setShowProfileMenu((prev) => !prev)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10L12 15L17 10H7Z" fill="black" />
                </svg>
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 top-12 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <a href="/AdminProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={() => window.location.href = '/AdminLogin'}>Logout</button>
                </div>
              )}
            </div>
            </div>
            </div>
     
  
        

        {/* Tables Section */}
        <div className="grid grid-cols-1 gap-6 w-full">
          <section className="mt-5 bg-white w-full p-6 rounded-xl shadow-md border border-blue-100">
            <div className="overflow-x-auto">
              <table className="min-w-full w-full text-sm">
                <thead>
                  <tr className="border-b bg-indigo-50">
                    <th className="text-left py-2 px-5 whitespace-nowrap">Date & Time </th>
                    <th className="text-left py-2 px-5 whitespace-nowrap">Activity Description</th>
                    <th className="text-left py-2 px-5 whitespace-nowrap">Performed By </th>
                  </tr>
                </thead>

                <tbody>
                  <td className="py-3 px-5 whitespace-nowrap">Oct 21, 2025 – 8:10 AM</td> 
                  <td className="py-3 px-5 whitespace-nowrap">Logged in to the system</td>
                  <td className="py-3 px-5 whitespace-nowrap">Edrian Arsua</td>
                </tbody>
              </table>
            </div>
          </section>
        </div>


      </main>
    </div>
  );
}

export default ActiveLogs;
