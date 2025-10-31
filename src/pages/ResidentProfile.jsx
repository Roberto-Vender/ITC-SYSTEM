import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResidentProfile = () => {
const [isCollapsed, setIsCollapsed] = useState(false);
const [showProfileMenu, setShowProfileMenu] = useState(false);
  return (
    <div className="flex bg-[#F5F5F5] text-gray-800">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? "w-24" : "w-64"
        } bg-[#E3F2FD] flex flex-col fixed top-0 left-0 h-screen overflow-y-auto transition-all duration-300`}
      >
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-8 mt-6 relative">
          <img
            src="/logo1.jfif"
            alt="Logo"
            className={`object-contain mb-3 ${
              isCollapsed ? "w-16 h-16" : "w-40 h-40"
            }`}
          />
           <h2 className="text-lg font-bold text-blue-700 text-center">
            Barangay Healthcare
            <br />
            Profiling
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 px-2">
          <a
            href="/ResidentDashboard"
            className="flex items-center gap-3 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            {/* Dashboard Icon */}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.375 5V1.5C9.375 1.25208 9.459 1.04442 9.627 0.877C9.795 0.709583 10.0027 0.625583 10.25 0.625H15.5C15.7479 0.625 15.9559 0.709 16.1239 0.877C16.2919 1.045 16.3756 1.25267 16.375 1.5V5C16.375 5.24792 16.291 5.45588 16.123 5.62388C15.955 5.79188 15.7473 5.87558 15.5 5.875H10.25C10.0021 5.875 9.79442 5.791 9.627 5.623C9.45958 5.455 9.37558 5.24733 9.375 5ZM0.625 8.5V1.5C0.625 1.25208 0.709 1.04442 0.877 0.877C1.045 0.709583 1.25267 0.625583 1.5 0.625H6.75C6.99792 0.625 7.20588 0.709 7.37388 0.877C7.54188 1.045 7.62558 1.25267 7.625 1.5V8.5C7.625 8.74792 7.541 8.95588 7.373 9.12388C7.205 9.29187 6.99733 9.37558 6.75 9.375H1.5C1.25208 9.375 1.04442 9.291 0.877 9.123C0.709583 8.955 0.625583 8.74733 0.625 8.5ZM9.375 15.5V8.5C9.375 8.25208 9.459 8.04442 9.627 7.877C9.795 7.70958 10.0027 7.62558 10.25 7.625H15.5C15.7479 7.625 15.9559 7.709 16.1239 7.877C16.2919 8.045 16.3756 8.25267 16.375 8.5V15.5C16.375 15.7479 16.291 15.9559 16.123 16.1239C15.955 16.2919 15.7473 16.3756 15.5 16.375H10.25C10.0021 16.375 9.79442 16.291 9.627 16.123C9.45958 15.955 9.37558 15.7473 9.375 15.5ZM0.625 15.5V12C0.625 11.7521 0.709 11.5444 0.877 11.377C1.045 11.2096 1.25267 11.1256 1.5 11.125H6.75C6.99792 11.125 7.20588 11.209 7.37388 11.377C7.54188 11.545 7.62558 11.7527 7.625 12V15.5C7.625 15.7479 7.541 15.9559 7.373 16.1239C7.205 16.2919 6.99733 16.3756 6.75 16.375H1.5C1.25208 16.375 1.04442 16.291 0.877 16.123C0.709583 15.955 0.625583 15.7473 0.625 15.5ZM2.375 7.625H5.875V2.375H2.375V7.625ZM11.125 14.625H14.625V9.375H11.125V14.625ZM11.125 4.125H14.625V2.375H11.125V4.125ZM2.375 14.625H5.875V12.875H2.375V14.625Z" fill="#E3F2FD"/>
            </svg>

            <span>Dashboard</span>
          </a>

            <a
            href="/AppointmentTab"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
        >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 20.5C18.4853 20.5 20.5 18.4853 20.5 16C20.5 13.5147 18.4853 11.5 16 11.5C13.5147 11.5 11.5 13.5147 11.5 16C11.5 18.4853 13.5147 20.5 16 20.5Z" stroke="black" stroke-width="2"/>
                <path d="M15.5 14.5V16.5H17.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

        Appointment
        </a> 
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          isCollapsed ? "ml-24" : "ml-64"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between ">
          <h1 className="text-2xl font-bold text-black">
            Profile
          </h1>
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
                  <a href="/ResidentProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={() => window.location.href = '/CitizenLogin'}>Logout</button>
                </div>
              )}
            </div>
            </div>
            <h2 className="text-blue-700 text-xs ">Manage your basic info and password</h2>

            

        {/* Profile Section */}
        <div className="flex border-blue-100 p-6  gap-8 items-center ">
          {/* Profile Image */}
          <div className="flex flex-col items-center w-48">
            <div className="w-40 h-40 rounded-full flex items-center justify-center mb-3">
              <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M96.4999 108.563C105.031 108.563 113.213 105.174 119.245 99.1412C125.278 93.1088 128.667 84.927 128.667 76.3959C128.667 67.8648 125.278 59.6831 119.245 53.6506C113.213 47.6182 105.031 44.2292 96.4999 44.2292C87.9688 44.2292 79.7871 47.6182 73.7546 53.6506C67.7222 59.6831 64.3333 67.8648 64.3333 76.3959C64.3333 84.927 67.7222 93.1088 73.7546 99.1412C79.7871 105.174 87.9688 108.563 96.4999 108.563ZM96.4999 100.521C99.6681 100.521 102.805 99.8969 105.732 98.6845C108.659 97.4721 111.319 95.6951 113.559 93.4549C115.799 91.2147 117.576 88.5551 118.789 85.6282C120.001 82.7012 120.625 79.5641 120.625 76.3959C120.625 73.2278 120.001 70.0907 118.789 67.1637C117.576 64.2367 115.799 61.5772 113.559 59.337C111.319 57.0968 108.659 55.3197 105.732 54.1073C102.805 52.8949 99.6681 52.2709 96.4999 52.2709C90.1016 52.2709 83.9653 54.8126 79.441 59.337C74.9166 63.8613 72.3749 69.9976 72.3749 76.3959C72.3749 82.7943 74.9166 88.9306 79.441 93.4549C83.9653 97.9792 90.1016 100.521 96.4999 100.521Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M176.917 96.5C176.917 140.914 140.914 176.917 96.4999 176.917C52.0858 176.917 16.0833 140.914 16.0833 96.5C16.0833 52.0859 52.0858 16.0834 96.4999 16.0834C140.914 16.0834 176.917 52.0859 176.917 96.5ZM135.221 157.657C123.646 165.008 110.212 168.9 96.4999 168.875C82.4605 168.901 68.7202 164.819 56.9711 157.134C56.0061 155.928 55.0277 154.681 54.0359 153.395C52.8855 151.888 52.265 150.043 52.2707 148.148C52.2707 143.817 55.3829 140.186 59.5444 139.579C87.067 135.558 106.017 135.904 133.576 139.72C135.571 140.012 137.393 141.014 138.707 142.543C140.022 144.071 140.74 146.023 140.729 148.039C140.729 149.969 140.066 151.843 138.867 153.306C137.632 154.81 136.416 156.26 135.221 157.657ZM148.71 146.624C148.067 139.097 142.353 132.816 134.678 131.755C106.468 127.85 86.7494 127.477 58.3824 131.622C50.6624 132.748 44.9729 139.085 44.2974 146.632C31.3316 133.166 24.0994 115.193 24.1249 96.5C24.1249 56.5289 56.5288 24.125 96.4999 24.125C136.471 24.125 168.875 56.5289 168.875 96.5C168.901 115.189 161.671 133.159 148.71 146.624Z" fill="black"/>
                </svg>

            </div>
            <p className="font-semibold text-2xl ">Ana Dela Cruz</p>
          </div>

          {/* Resident Info */}
          <div className="flex flex-col gap-2 text-sm mb-10 ">
            <div className="flex">
              <span className="font-bold w-40">Last Name:</span>
              <span>Dela Cruz</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">First Name:</span>
              <span>Ana</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Middle:</span>
              <span>eab</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Age:</span>
              <span>52</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Sex:</span>
              <span>Female</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Address:</span>
              <span>Purok 1, Brgy. Basak</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Contact:</span>
              <span>09123456789</span>
            </div>
            <div className="flex">
              <span className="font-bold w-40">Registered Date:</span>
              <span>Oct 5, 2025</span>
            </div>
          </div>
        </div>

        {/* Change Pass Table */}
        <section className="bg-white w-full p-6 rounded-xl shadow-md border border-blue-100">
          <h3 className="text-2xl font-semibold text-black mb-8 ml-25">
            Change Password
          </h3>

          <div className=" overflow-x-auto">
            <table className="min-w-full text-sm">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-700 mt-2 ml-30">
                <label className="w- text-right">Enter Current Password</label>
                <input
                    className="w-1/2 border rounded-lg px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Current Password"
                />
                </div>

                <div className="flex items-center gap-3 text-sm font-medium text-gray-700 mt-10 ml-30">
                <label className="w- text-right">Enter Current Password</label>
                <input
                    className="w-1/2 border rounded-lg px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="New Password"
                />
                </div>

                <div className="flex items-center gap-3 text-sm font-medium text-gray-700 mt-10 ml-30">
                <label className="w- text-right">Enter Current Password</label>
                <input
                    className="w-1/2 border rounded-lg px-3 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" placeholder="Confirm Password"
                />
                </div>

                <button className="py-3 px-3 bg-blue-500 w-[270px] ml-70 rounded-lg text-white font-semibold hover:bg-blue-600 mt-10 "> 
                Change Password
                </button>

              
            </table>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ResidentProfile;