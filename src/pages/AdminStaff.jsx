import React, { useState } from "react";

function AdminStaff() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);


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
           <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="21" fill="black"/>
          <path d="M11.375 7V3.5C11.375 3.25208 11.459 3.04442 11.627 2.877C11.795 2.70958 12.0027 2.62558 12.25 2.625H17.5C17.7479 2.625 17.9559 2.709 18.1239 2.877C18.2919 3.045 18.3756 3.25267 18.375 3.5V7C18.375 7.24792 18.291 7.45588 18.123 7.62388C17.955 7.79188 17.7473 7.87558 17.5 7.875H12.25C12.0021 7.875 11.7944 7.791 11.627 7.623C11.4596 7.455 11.3756 7.24733 11.375 7ZM2.625 10.5V3.5C2.625 3.25208 2.709 3.04442 2.877 2.877C3.045 2.70958 3.25267 2.62558 3.5 2.625H8.75C8.99792 2.625 9.20588 2.709 9.37388 2.877C9.54188 3.045 9.62558 3.25267 9.625 3.5V10.5C9.625 10.7479 9.541 10.9559 9.373 11.1239C9.205 11.2919 8.99733 11.3756 8.75 11.375H3.5C3.25208 11.375 3.04442 11.291 2.877 11.123C2.70958 10.955 2.62558 10.7473 2.625 10.5ZM11.375 17.5V10.5C11.375 10.2521 11.459 10.0444 11.627 9.877C11.795 9.70958 12.0027 9.62558 12.25 9.625H17.5C17.7479 9.625 17.9559 9.709 18.1239 9.877C18.2919 10.045 18.3756 10.2527 18.375 10.5V17.5C18.375 17.7479 18.291 17.9559 18.123 18.1239C17.955 18.2919 17.7473 18.3756 17.5 18.375H12.25C12.0021 18.375 11.7944 18.291 11.627 18.123C11.4596 17.955 11.3756 17.7473 11.375 17.5ZM2.625 17.5V14C2.625 13.7521 2.709 13.5444 2.877 13.377C3.045 13.2096 3.25267 13.1256 3.5 13.125H8.75C8.99792 13.125 9.20588 13.209 9.37388 13.377C9.54188 13.545 9.62558 13.7527 9.625 14V17.5C9.625 17.7479 9.541 17.9559 9.373 18.1239C9.205 18.2919 8.99733 18.3756 8.75 18.375H3.5C3.25208 18.375 3.04442 18.291 2.877 18.123C2.70958 17.955 2.62558 17.7473 2.625 17.5ZM4.375 9.625H7.875V4.375H4.375V9.625ZM13.125 16.625H16.625V11.375H13.125V16.625ZM13.125 6.125H16.625V4.375H13.125V6.125ZM4.375 16.625H7.875V14.875H4.375V16.625Z" fill="#E3F2FD"/>
          </svg>


            Dashboard
          </a>

          <a
            href="/AdminStaff"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5 4.5C21.5 5.03043 21.2893 5.53914 20.9142 5.91421C20.5391 6.28929 20.0304 6.5 19.5 6.5C18.9696 6.5 18.4609 6.28929 18.0858 5.91421C17.7107 5.53914 17.5 5.03043 17.5 4.5C17.5 3.96957 17.7107 3.46086 18.0858 3.08579C18.4609 2.71071 18.9696 2.5 19.5 2.5C20.0304 2.5 20.5391 2.71071 20.9142 3.08579C21.2893 3.46086 21.5 3.96957 21.5 4.5Z" stroke="#1976D2" stroke-width="1.5"/>
            <path d="M20.471 9.406C20.5 10.29 20.5 11.312 20.5 12.5C20.5 16.743 20.5 18.864 19.182 20.182C17.864 21.5 15.742 21.5 11.5 21.5C7.258 21.5 5.136 21.5 3.818 20.182C2.5 18.864 2.5 16.742 2.5 12.5C2.5 8.258 2.5 6.136 3.818 4.818C5.136 3.5 7.258 3.5 11.5 3.5C12.688 3.5 13.71 3.5 14.594 3.529" stroke="#1976D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.5 12.5H8L10 8.5L13 16.5L15 12.5H17.5" stroke="#1976D2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
            <h1 className="text-[#66B821] text-2xl font-bold">Barangay Healthcare Staff </h1>
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
     
        {/* Controls Section */}
        <div className="flex items-center justify-between mb-8 w-full">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by name, ID, or diagnosis…                                             🔍"
            className="flex-1 max-w-[500px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* ADD STAFF */}
          <div>
            <button
              type="button"
              onClick={openRegisterModal}
              className="bg-indigo-600 py-2 px-6 rounded-xl shadow-md text-white font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
            >
              Add New Staff
            </button>
          </div>
        </div>
      
        {/* Stats Section */}
        <div className="flex justify-center w-full mt-6">
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1200px] text-center">
            {/* Total Staff */}
            <div className="bg-white border border-gray-200 shadow-md rounded-xl flex flex-col items-center p-6 h-[160px]">
              <div className="text-gray-500 font-medium text-2xl">Total Staff</div>
              <div className="flex items-center justify-center gap-3 mt-3">
                {/* SVG omitted for brevity */}
                <span className="flex text-3xl font-bold text-gray-800 mt-4">
                <svg className="mt-1" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  d="M25.6306 10.7112C25.4438 13.3042 23.5203 15.3017 21.4226 15.3017C19.325 15.3017 17.3982 13.3048 17.2146 10.7112C17.0233 8.01357 18.8959 6.12061 21.4226 6.12061C23.9493 6.12061 25.8219 8.06267 25.6306 10.7112Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.4226 19.3823C17.2675 19.3823 13.2718 21.4462 12.2708 25.4655C12.1382 25.9972 12.4716 26.5232 13.018 26.5232H29.8278C30.3742 26.5232 30.7057 25.9972 30.575 25.4655C29.574 21.3818 25.5783 19.3823 21.4226 19.3823Z" stroke="black" stroke-miterlimit="10"/>
                <path d="M12.7516 11.8553C12.6024 13.9261 11.048 15.557 9.3724 15.557C7.69685 15.557 6.13988 13.9268 5.99324 11.8553C5.84086 9.70088 7.35383 8.16113 9.3724 8.16113C11.391 8.16113 12.9039 9.74041 12.7516 11.8553Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.134 19.5098C11.9832 18.9825 10.7157 18.7798 9.37232 18.7798C6.05692 18.7798 2.86265 20.4279 2.06249 23.6381C1.95729 24.0628 2.2238 24.4829 2.6599 24.4829H9.81863" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
                </svg>
                134</span>
              </div>
            </div>

            {/* Active Staff */}
            <div className="bg-white border border-gray-200 shadow-md rounded-xl flex flex-col items-center  p-6 h-[160px]">
              <div className="text-gray-500 font-medium text-2xl">Active Staff</div>
              <div className="flex items-center justify-center gap-3 mt-3">
                {/* SVG omitted for brevity */}
                <span className=" flex text-3xl font-bold text-gray-800 mt-4">
                  <svg className="mt-1" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6306 10.7112C25.4438 13.3042 23.5203 15.3017 21.4226 15.3017C19.325 15.3017 17.3982 13.3048 17.2146 10.7112C17.0233 8.01357 18.8959 6.12061 21.4226 6.12061C23.9493 6.12061 25.8219 8.06267 25.6306 10.7112Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.4226 19.3823C17.2675 19.3823 13.2718 21.4462 12.2708 25.4655C12.1382 25.9972 12.4716 26.5232 13.018 26.5232H29.8278C30.3742 26.5232 30.7057 25.9972 30.575 25.4655C29.574 21.3818 25.5783 19.3823 21.4226 19.3823Z" stroke="black" stroke-miterlimit="10"/>
                  <path d="M12.7516 11.8553C12.6024 13.9261 11.048 15.557 9.3724 15.557C7.69685 15.557 6.13988 13.9268 5.99324 11.8553C5.84086 9.70088 7.35383 8.16113 9.3724 8.16113C11.391 8.16113 12.9039 9.74041 12.7516 11.8553Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.134 19.5098C11.9832 18.9825 10.7157 18.7798 9.37232 18.7798C6.05692 18.7798 2.86265 20.4279 2.06249 23.6381C1.95729 24.0628 2.2238 24.4829 2.6599 24.4829H9.81863" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
                  </svg>
                  42</span>
              </div>
            </div>

            {/* Inactive Staff */}
            <div className="bg-white border border-gray-200 shadow-md rounded-xl flex flex-col items-center  p-6 h-[160px]">
              <div className="text-gray-500 font-medium text-2xl">Inactive Staff</div>
              <div className="flex items-center justify-center gap-3 mt-3">
                {/* SVG omitted for brevity */}
                <span className="flex text-3xl font-bold text-gray-800 mt-4">
                  <svg className="mt-1" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.6306 10.7112C25.4438 13.3042 23.5203 15.3017 21.4226 15.3017C19.325 15.3017 17.3982 13.3048 17.2146 10.7112C17.0233 8.01357 18.8959 6.12061 21.4226 6.12061C23.9493 6.12061 25.8219 8.06267 25.6306 10.7112Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21.4226 19.3823C17.2675 19.3823 13.2718 21.4462 12.2708 25.4655C12.1382 25.9972 12.4716 26.5232 13.018 26.5232H29.8278C30.3742 26.5232 30.7057 25.9972 30.575 25.4655C29.574 21.3818 25.5783 19.3823 21.4226 19.3823Z" stroke="black" stroke-miterlimit="10"/>
                  <path d="M12.7516 11.8553C12.6024 13.9261 11.048 15.557 9.3724 15.557C7.69685 15.557 6.13988 13.9268 5.99324 11.8553C5.84086 9.70088 7.35383 8.16113 9.3724 8.16113C11.391 8.16113 12.9039 9.74041 12.7516 11.8553Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.134 19.5098C11.9832 18.9825 10.7157 18.7798 9.37232 18.7798C6.05692 18.7798 2.86265 20.4279 2.06249 23.6381C1.95729 24.0628 2.2238 24.4829 2.6599 24.4829H9.81863" stroke="black" stroke-miterlimit="10" stroke-linecap="round"/>
                  </svg>
                  19</span>
              </div>
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
                    <th className="text-left py-2 px-5 whitespace-nowrap">Name</th>
                    <th className="text-left py-2 px-5 whitespace-nowrap">Position    </th>
                    <th className="text-left py-2 px-5 whitespace-nowrap">Contact</th>
                    <th className="text-left py-2 px-5 whitespace-nowrap">Assigned Area</th>
                    <th className="text-left py-2 px-5 whitespace-nowrap">Status  </th>
                  </tr>
                </thead>

                <tbody>
                  <td className="py-3 px-5 whitespace-nowrap">Edrian Arsua</td>
                  <td className="py-3 px-5 whitespace-nowrap">Nurse</td>
                  <td className="py-3 px-5 whitespace-nowrap">0917-234-5678</td>
                  <td className="py-3 px-5 whitespace-nowrap">Health Center Lab</td>
                  <td className="py-3 px-5 whitespace-nowrap flex">
                    {/* SVG omitted for brevity */}
                    On Duty (2nd Dose)
                  </td>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Register Resident Modal */}
        {showRegisterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeRegisterModal}
            />

            <div className="relative z-10 w-full max-w-xl mx-4">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full mx-auto max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <h3 className="text-center text-lg font-semibold text-gray-900">Register Resident</h3>
                  <button
                    onClick={closeRegisterModal}
                    className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 p-2"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-col items-center mt-2">
                    <svg  width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M78 100.75C84.8956 100.75 91.5088 98.0107 96.3848 93.1348C101.261 88.2588 104 81.6456 104 74.75C104 67.8544 101.261 61.2412 96.3848 56.3652C91.5088 51.4893 84.8956 48.75 78 48.75C71.1044 48.75 64.4912 51.4893 59.6152 56.3652C54.7393 61.2412 52 67.8544 52 74.75C52 81.6456 54.7393 88.2588 59.6152 93.1348C64.4912 98.0107 71.1044 100.75 78 100.75ZM78 94.25C80.5608 94.25 83.0965 93.7456 85.4623 92.7657C87.8282 91.7857 89.9778 90.3493 91.7886 88.5386C93.5993 86.7278 95.0357 84.5782 96.0157 82.2123C96.9956 79.8465 97.5 77.3108 97.5 74.75C97.5 72.1892 96.9956 69.6535 96.0157 67.2877C95.0357 64.9218 93.5993 62.7722 91.7886 60.9614C89.9778 59.1507 87.8282 57.7143 85.4623 56.7344C83.0965 55.7544 80.5608 55.25 78 55.25C72.8283 55.25 67.8684 57.3045 64.2114 60.9614C60.5545 64.6184 58.5 69.5783 58.5 74.75C58.5 79.9217 60.5545 84.8816 64.2114 88.5386C67.8684 92.1955 72.8283 94.25 78 94.25Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M143 91C143 126.899 113.899 156 78 156C42.1005 156 13 126.899 13 91C13 55.1005 42.1005 26 78 26C113.899 26 143 55.1005 143 91ZM109.298 140.432C99.9417 146.375 89.0833 149.521 78 149.5C66.6521 149.521 55.546 146.222 46.0492 140.01C45.2692 139.035 44.4784 138.028 43.6768 136.988C42.7469 135.77 42.2454 134.279 42.25 132.746C42.25 129.246 44.7655 126.311 48.1292 125.821C70.3755 122.571 85.6927 122.85 107.968 125.934C109.581 126.17 111.053 126.98 112.116 128.216C113.178 129.451 113.759 131.029 113.75 132.659C113.75 134.219 113.214 135.733 112.245 136.916C111.246 138.131 110.264 139.304 109.298 140.432ZM120.201 131.514C119.681 125.43 115.063 120.354 108.859 119.496C86.0567 116.34 70.1188 116.038 47.19 119.389C40.95 120.299 36.3512 125.421 35.8053 131.521C25.3251 120.637 19.4793 106.109 19.5 91C19.5 58.6917 45.6917 32.5 78 32.5C110.308 32.5 136.5 58.6917 136.5 91C136.521 106.106 130.678 120.631 120.201 131.514Z" fill="black"/>
                    </svg>
                  <div className="flex gap-2 text-xs text-gray-500 mb-4 mt-4"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.91667 4.16667C10 4.16667 11.6667 5.83333 11.6667 7.91667C11.6667 10 10 11.6667 7.91667 11.6667C5.83333 11.6667 4.16667 10 4.16667 7.91667C4.16667 5.83333 5.83333 4.16667 7.91667 4.16667ZM7.91667 5C7.14312 5 6.40125 5.30729 5.85427 5.85427C5.30729 6.40125 5 7.14312 5 7.91667C5 8.69022 5.30729 9.43208 5.85427 9.97906C6.40125 10.526 7.14312 10.8333 7.91667 10.8333C8.69021 10.8333 9.43208 10.526 9.97906 9.97906C10.526 9.43208 10.8333 8.69022 10.8333 7.91667C10.8333 7.14312 10.526 6.40125 9.97906 5.85427C9.43208 5.30729 8.69021 5 7.91667 5ZM2.5 1.66667H4.16667L5.83333 0H10L11.6667 1.66667H13.3333C13.9964 1.66667 14.6323 1.93006 15.1011 2.3989C15.5699 2.86774 15.8333 3.50363 15.8333 4.16667V11.6667C15.8333 12.3297 15.5699 12.9656 15.1011 13.4344C14.6323 13.9033 13.9964 14.1667 13.3333 14.1667H2.5C1.83696 14.1667 1.20107 13.9033 0.732233 13.4344C0.263392 12.9656 0 12.3297 0 11.6667V4.16667C0 3.50363 0.263392 2.86774 0.732233 2.3989C1.20107 1.93006 1.83696 1.66667 2.5 1.66667ZM6.175 0.833333L4.50833 2.5H2.5C2.05797 2.5 1.63405 2.67559 1.32149 2.98816C1.00893 3.30072 0.833333 3.72464 0.833333 4.16667V11.6667C0.833333 12.1087 1.00893 12.5326 1.32149 12.8452C1.63405 13.1577 2.05797 13.3333 2.5 13.3333H13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8452C14.8244 12.5326 15 12.1087 15 11.6667V4.16667C15 3.72464 14.8244 3.30072 14.5118 2.98816C14.1993 2.67559 13.7754 2.5 13.3333 2.5H11.325L9.65833 0.833333H6.175Z" fill="black"/>
                    </svg>
                    Register Face ID</div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      closeRegisterModal();
                    }}
                    className="w-full"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-60"
                        placeholder="ID (Auto Increment)"
                        disabled
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Last Name"
                        required
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="First Name"
                        required
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Middle"
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Age"
                        type="number"
                      />
                      <select
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        defaultValue=""
                        aria-label="Sex"
                      >
                        <option value="" disabled>Sex</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Address"
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Contact"
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Username"
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Email"
                        type="email"
                      />
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Password"
                        type="password"
                      />
                    </div>

                    <div className="mt-5">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Register Resident
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
        )}

      </main>
    </div>
  );
}

export default AdminStaff;
