import React, { useState } from "react";

function IdentifyCitizen() {
  const [showFaceModal, setShowFaceModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const openFaceModal = () => setShowFaceModal(true);
  const closeFaceModal = () => setShowFaceModal(false);
  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);
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
            href="/Dashboard"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.375 5V1.5C9.375 1.25208 9.459 1.04442 9.627 0.877C9.795 0.709583 10.0027 0.625583 10.25 0.625H15.5C15.7479 0.625 15.9559 0.709 16.1239 0.877C16.2919 1.045 16.3756 1.25267 16.375 1.5V5C16.375 5.24792 16.291 5.45588 16.123 5.62388C15.955 5.79188 15.7473 5.87558 15.5 5.875H10.25C10.0021 5.875 9.79442 5.791 9.627 5.623C9.45958 5.455 9.37558 5.24733 9.375 5ZM0.625 8.5V1.5C0.625 1.25208 0.709 1.04442 0.877 0.877C1.045 0.709583 1.25267 0.625583 1.5 0.625H6.75C6.99792 0.625 7.20588 0.709 7.37388 0.877C7.54188 1.045 7.62558 1.25267 7.625 1.5V8.5C7.625 8.74792 7.541 8.95588 7.373 9.12388C7.205 9.29187 6.99733 9.37558 6.75 9.375H1.5C1.25208 9.375 1.04442 9.291 0.877 9.123C0.709583 8.955 0.625583 8.74733 0.625 8.5ZM9.375 15.5V8.5C9.375 8.25208 9.459 8.04442 9.627 7.877C9.795 7.70958 10.0027 7.62558 10.25 7.625H15.5C15.7479 7.625 15.9559 7.709 16.1239 7.877C16.2919 8.045 16.3756 8.25267 16.375 8.5V15.5C16.375 15.7479 16.291 15.9559 16.123 16.1239C15.955 16.2919 15.7473 16.3756 15.5 16.375H10.25C10.0021 16.375 9.79442 16.291 9.627 16.123C9.45958 15.955 9.37558 15.7473 9.375 15.5ZM0.625 15.5V12C0.625 11.7521 0.709 11.5444 0.877 11.377C1.045 11.2096 1.25267 11.1256 1.5 11.125H6.75C6.99792 11.125 7.20588 11.209 7.37388 11.377C7.54188 11.545 7.62558 11.7527 7.625 12V15.5C7.625 15.7479 7.541 15.9559 7.373 16.1239C7.205 16.2919 6.99733 16.3756 6.75 16.375H1.5C1.25208 16.375 1.04442 16.291 0.877 16.123C0.709583 15.955 0.625583 15.7473 0.625 15.5ZM2.375 7.625H5.875V2.375H2.375V7.625ZM11.125 14.625H14.625V9.375H11.125V14.625ZM11.125 4.125H14.625V2.375H11.125V4.125ZM2.375 14.625H5.875V12.875H2.375V14.625Z" fill="#E3F2FD"/>
            </svg>
            {/* icon omitted for brevity */}
            Dashboard
          </a>

          <a
            href="/IdentifyCitizen"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8125 0C12.5087 0 13.1764 0.276562 13.6687 0.768845C14.1609 1.26113 14.4375 1.92881 14.4375 2.625C14.4375 3.32119 14.1609 3.98887 13.6687 4.48116C13.1764 4.97344 12.5087 5.25 11.8125 5.25C11.1163 5.25 10.4486 4.97344 9.95634 4.48116C9.46406 3.98887 9.1875 3.32119 9.1875 2.625C9.1875 1.92881 9.46406 1.26113 9.95634 0.768845C10.4486 0.276562 11.1163 0 11.8125 0ZM15.75 12.7969C15.75 13.8223 15.2291 14.7246 14.4375 15.2537V17.0625H9.1875V15.2537C8.3959 14.7246 7.875 13.8223 7.875 12.7969V11.1562C7.875 8.98242 9.63867 7.21875 11.8125 7.21875C13.9863 7.21875 15.75 8.98242 15.75 11.1562V12.7969ZM16.4062 17.0625V15.9428C17.2225 15.0199 17.7188 13.8018 17.7188 12.4688V11.1562C17.7188 10.0611 17.4193 9.03984 16.9025 8.15801C17.3578 7.97344 17.8541 7.875 18.375 7.875C20.5488 7.875 22.3125 9.63867 22.3125 11.8125V13.125C22.3125 14.0971 21.7834 14.9461 21 15.3973V17.0625H16.4062ZM2.625 15.3973C1.8416 14.9461 1.3125 14.0971 1.3125 13.125V11.8125C1.3125 9.63867 3.07617 7.875 5.25 7.875C5.7709 7.875 6.26719 7.97754 6.72246 8.15801C6.20566 9.03574 5.90625 10.0611 5.90625 11.1562V12.4688C5.90625 13.8018 6.40254 15.0158 7.21875 15.9428V17.0625H2.625V15.3973ZM5.25 1.3125C5.55163 1.3125 5.85031 1.37191 6.12898 1.48734C6.40765 1.60277 6.66085 1.77195 6.87414 1.98524C7.08742 2.19852 7.25661 2.45173 7.37204 2.7304C7.48746 3.00907 7.54688 3.30774 7.54688 3.60938C7.54688 3.91101 7.48746 4.20968 7.37204 4.48835C7.25661 4.76702 7.08742 5.02023 6.87414 5.23351C6.66085 5.4468 6.40765 5.61598 6.12898 5.73141C5.85031 5.84684 5.55163 5.90625 5.25 5.90625C4.94837 5.90625 4.64969 5.84684 4.37102 5.73141C4.09235 5.61598 3.83915 5.4468 3.62586 5.23351C3.41258 5.02023 3.24339 4.76702 3.12796 4.48835C3.01254 4.20968 2.95312 3.91101 2.95312 3.60938C2.95312 3.30774 3.01254 3.00907 3.12796 2.7304C3.24339 2.45173 3.41258 2.19852 3.62586 1.98524C3.83915 1.77195 4.09235 1.60277 4.37102 1.48734C4.64969 1.37191 4.94837 1.3125 5.25 1.3125ZM18.375 1.3125C18.6766 1.3125 18.9753 1.37191 19.254 1.48734C19.5326 1.60277 19.7859 1.77195 19.9991 1.98524C20.2124 2.19852 20.3816 2.45173 20.497 2.7304C20.6125 3.00907 20.6719 3.30774 20.6719 3.60938C20.6719 3.91101 20.6125 4.20968 20.497 4.48835C20.3816 4.76702 20.2124 5.02023 19.9991 5.23351C19.7859 5.4468 19.5326 5.61598 19.254 5.73141C18.9753 5.84684 18.6766 5.90625 18.375 5.90625C18.0734 5.90625 17.7747 5.84684 17.496 5.73141C17.2174 5.61598 16.9641 5.4468 16.7509 5.23351C16.5376 5.02023 16.3684 4.76702 16.253 4.48835C16.1375 4.20968 16.0781 3.91101 16.0781 3.60938C16.0781 3.30774 16.1375 3.00907 16.253 2.7304C16.3684 2.45173 16.5376 2.19852 16.7509 1.98524C16.9641 1.77195 17.2174 1.60277 17.496 1.48734C17.7747 1.37191 18.0734 1.3125 18.375 1.3125ZM0.984375 19.0312H22.6406C23.1861 19.0312 23.625 19.4701 23.625 20.0156C23.625 20.5611 23.1861 21 22.6406 21H0.984375C0.438867 21 0 20.5611 0 20.0156C0 19.4701 0.438867 19.0312 0.984375 19.0312Z" fill="black"/>
            </svg>
            {/* icon omitted for brevity */}
            Residents
          </a>

          <a
            href="/HealthRecords"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.1667 1.91663C19.4208 1.91663 19.6646 2.01759 19.8443 2.19732C20.024 2.37704 20.125 2.62079 20.125 2.87496V20.125C20.125 20.3791 20.024 20.6229 19.8443 20.8026C19.6646 20.9823 19.4208 21.0833 19.1667 21.0833H5.75C5.49583 21.0833 5.25208 20.9823 5.07236 20.8026C4.89263 20.6229 4.79167 20.3791 4.79167 20.125V18.2083H2.875V16.2916H4.79167V14.375H2.875V12.4583H4.79167V10.5416H2.875V8.62496H4.79167V6.70829H2.875V4.79163H4.79167V2.87496C4.79167 2.62079 4.89263 2.37704 5.07236 2.19732C5.25208 2.01759 5.49583 1.91663 5.75 1.91663H19.1667ZM18.2083 3.83329H6.70833V19.1666H18.2083V3.83329ZM13.4167 7.66663V10.5416H16.2917V12.4583H13.4157L13.4167 15.3333H11.5L11.499 12.4583H8.625V10.5416H11.5V7.66663H13.4167Z" fill="#1976D2"/>
          </svg>

            Health Records
          </a>

          <a
            href="/FollowUps"
            className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6603 20.1249C15.5921 20.1249 14.6861 19.7531 13.9425 19.0094C13.1988 18.2645 12.827 17.3586 12.827 16.2916C12.827 15.2247 13.1988 14.319 13.9425 13.5747C14.6861 12.8304 15.5918 12.4583 16.6593 12.4583C17.7276 12.4583 18.6335 12.8304 19.3772 13.5747C20.1215 14.3184 20.4936 15.224 20.4936 16.2916C20.4936 17.3592 20.1215 18.2651 19.3772 19.0094C18.6329 19.7537 17.7272 20.1256 16.6603 20.1249ZM18.2463 18.4019L18.7696 17.8786L17.0283 16.1364V13.5278H16.2913V16.4469L18.2463 18.4019ZM5.38072 19.1666C4.95266 19.1666 4.58754 19.0158 4.28534 18.7143C3.98379 18.4127 3.83301 18.0476 3.83301 17.6189V5.38098C3.83301 4.95293 3.98379 4.5878 4.28534 4.28561C4.5869 3.98405 4.95234 3.83327 5.38167 3.83327H9.82451C9.91395 3.45888 10.113 3.14423 10.4215 2.88931C10.7301 2.63376 11.0895 2.50598 11.4997 2.50598C11.9175 2.50598 12.2798 2.63376 12.5864 2.88931C12.8931 3.14359 13.0911 3.45825 13.1806 3.83327H17.6177C18.047 3.83327 18.4125 3.98405 18.714 4.28561C19.0156 4.58716 19.1663 4.95261 19.1663 5.38194V11.1501C19.0015 11.0652 18.8456 10.9907 18.6987 10.9269C18.5517 10.863 18.3882 10.8058 18.208 10.7553V5.38098C18.208 5.23404 18.1467 5.09891 18.024 4.97561C17.9013 4.8523 17.7659 4.79097 17.6177 4.79161H15.333V6.92869H7.66634V4.79161H5.38167C5.23409 4.79161 5.09865 4.85294 4.97534 4.97561C4.85204 5.09827 4.7907 5.23372 4.79134 5.38194V17.6189C4.79134 17.7908 4.8466 17.932 4.95713 18.0425C5.06766 18.153 5.20917 18.2083 5.38167 18.2083H11.2524C11.3035 18.3872 11.3639 18.5536 11.4335 18.7076C11.5038 18.8609 11.5933 19.0139 11.7019 19.1666H5.38072ZM11.4997 5.01202C11.722 5.01202 11.9066 4.93887 12.0536 4.79256C12.2005 4.64562 12.274 4.46098 12.274 4.23865C12.274 4.01631 12.2005 3.83168 12.0536 3.68473C11.9066 3.53779 11.722 3.46431 11.4997 3.46431C11.2773 3.46431 11.0927 3.53779 10.9458 3.68473C10.7988 3.83168 10.7253 4.01631 10.7253 4.23865C10.7253 4.46098 10.7988 4.64562 10.9458 4.79256C11.0927 4.93951 11.2773 5.01202 11.4997 5.01202Z" fill="#202020" fill-opacity="0.82"/>
            </svg>
            
            Follow-Ups
          </a>
          
        </nav>
      </aside>


      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-[#66B821] text-2xl font-bold ">Resident Profile <span className="text-[#1976D2] ml-8">Ana!</span></h1>
            <p className="text-gray-600">Here's your health overview.</p>
          </div>
          <div className="flex items-center gap-4 relative">
            {/* Notification Icon */}
            <button className="p-2 rounded-full hover:bg-blue-100 transition" aria-label="Notifications">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 25.667c1.472 0 2.667-1.195 2.667-2.667h-5.334c0 1.472 1.195 2.667 2.667 2.667zm7.333-8V12c0-4.08-2.56-7.52-6.417-8.36V3.5c0-.736-.597-1.333-1.333-1.333s-1.333.597-1.333 1.333v.14C7.227 4.48 4.667 7.92 4.667 12v5.667L2 19.333v1.334h24v-1.334l-2.667-1.666z" fill="#1976D2"/>
              </svg>
            </button>
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
                  <a href="/StaffProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={() => window.location.href = '/StaffLogin'}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>
     
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col justify-center">
            <input
              type="text"
              placeholder="Search by name or ID... 🔍"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div
            className="cursor-pointer bg-indigo-50 border border-indigo-200 text-indigo-600 font-semibold flex items-center justify-center rounded-xl shadow-md hover:bg-indigo-100 transition gap-3"
            onClick={openFaceModal}
            role="button"
            tabIndex={0}
          >
            Recognize Citizen
          </div>

          <div>
            <button
              type="button"
              onClick={openRegisterModal}
              className="bg-indigo-600 py-3 px-20 rounded-xl shadow-md text-white font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-3"
            >
              Register Citizen
            </button>
          </div>
        </div>

        {/* Tables Section */}
        <div className="grid grid-cols-1 gap-6 w-full">
          <section className="mt-5 bg-white w-full p-6 rounded-xl shadow-md border border-blue-100">
            <div className="overflow-x-auto">
              <table className="min-w-full w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-5 whitespace-nowrap">ID</th>
    <th className="text-left py-2 px-15 whitespace-nowrap">Name</th>
    <th className="text-left py-2 px-15 whitespace-nowrap">Age</th>
    <th className="text-left py-2 px-15 whitespace-nowrap">Address</th>
    <th className="text-left py-2 px-15 whitespace-nowrap">Contact Number</th>
    <th className="text-left py-2 px-15 whitespace-nowrap">Service</th>
    <th className="text-left py-2 px-20 whitespace-nowrap">Last Visit</th>
  </tr>
</thead>

              <tbody>
                <tr
                  className="border-t hover:bg-blue-50 transition cursor-pointer"
                  onClick={() => (window.location.href = "/CitizenProfile")}
                  role="button"
                  tabIndex={0}
                >
                  <td className="py-3 px-5 ">112233</td>
                  <td className="py-3 px-15">Roberto</td>
                  <td className="py-3 px-15">21</td>
                  <td className="py-3 px-15 whitespace-nowrap">pueblo de oro babag2</td>
                  <td className="py-3 px-15 whitespace-nowrap">09091090909</td>
                  <td className="py-3 px-15 whitespace-nowrap">Vaccine</td>
                  <td className="py-3 px-20 whitespace-nowrap">Oct 5,2025</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

        {/* Face Recognition Modal */}
        {showFaceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeFaceModal}
            />
            <div className="relative z-10 w-full max-w-3xl mx-4">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-[600px] h-[500px] mx-auto">
                <div className="relative mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">Face Recognition</h3>
                  <button
                    onClick={closeFaceModal}
                    className="absolute right-0 top-0 text-gray-400 hover:text-gray-600 p-2"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-col items-center gap-5">
                  <div className="w-40 h-40 bg-white rounded-sm flex items-center justify-center mt-8">
                    {/* camera svg */}
                    <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151.393 117.75V140.179C151.393 143.153 150.212 146.005 148.109 148.108C146.005 150.211 143.153 151.393 140.179 151.393H117.75M117.75 5.60718H140.179C143.153 5.60718 146.005 6.78868 148.109 8.89177C150.212 10.9949 151.393 13.8472 151.393 16.8215V39.25M5.60742 39.25V16.8215C5.60742 13.8472 6.78892 10.9949 8.89201 8.89177C10.9951 6.78868 13.8475 5.60718 16.8217 5.60718H39.2503M39.2503 151.393H16.8217C13.8475 151.393 10.9951 150.211 8.89201 148.108C6.78892 146.005 5.60742 143.153 5.60742 140.179V117.75M78.5003 50.4643V89.7143H61.6789M50.4646 112.143C58.0299 119.329 68.0659 123.336 78.5003 123.336C88.9347 123.336 98.9706 119.329 106.536 112.143M44.8574 53.2679C44.1139 53.2679 43.4008 52.9725 42.875 52.4467C42.3492 51.921 42.0539 51.2079 42.0539 50.4643C42.0539 49.7208 42.3492 49.0077 42.875 48.4819C43.4008 47.9561 44.1139 47.6607 44.8574 47.6607C45.601 47.6607 46.3141 47.9561 46.8398 48.4819C47.3656 49.0077 47.661 49.7208 47.661 50.4643C47.661 51.2079 47.3656 51.921 46.8398 52.4467C46.3141 52.9725 45.601 53.2679 44.8574 53.2679ZM112.143 53.2679C111.4 53.2679 110.686 52.9725 110.161 52.4467C109.635 51.921 109.34 51.2079 109.34 50.4643C109.34 49.7208 109.635 49.0077 110.161 48.4819C110.686 47.9561 111.4 47.6607 112.143 47.6607C112.887 47.6607 113.6 47.9561 114.126 48.4819C114.651 49.0077 114.947 49.7208 114.947 50.4643C114.947 51.2079 114.651 51.921 114.126 52.4467C113.6 52.9725 112.887 53.2679 112.143 53.2679Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                  </div>

                  <button
                    onClick={() => {/* TODO: implement camera/scan */}}
                    className="flex items-center gap-2 px-15 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 mt-8"
                  >
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.96171V3.48085C1 2.82289 1.26137 2.19187 1.72662 1.72662C2.19187 1.26137 2.82289 1 3.48085 1H5.96171M18.366 1H20.8468C21.5048 1 22.1358 1.26137 22.601 1.72662C23.0663 2.19187 23.3277 2.82289 23.3277 3.48085V5.96171M23.3277 18.366V20.8468C23.3277 21.5048 23.0663 22.1358 22.601 22.601C22.1358 23.0663 21.5048 23.3277 20.8468 23.3277H18.366M5.96171 23.3277H3.48085C2.82289 23.3277 2.19187 23.0663 1.72662 22.601C1.26137 22.1358 1 21.5048 1 20.8468V18.366M7.20213 14.6447C7.20213 14.6447 9.06277 17.1255 12.1638 17.1255C15.2649 17.1255 17.1255 14.6447 17.1255 14.6447M8.44256 8.44256H8.45496M15.8851 8.44256H15.8975" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    Scan Face
                  </button>

                  <p className="text-sm text-gray-500 text-center mt-5">Position the resident's face within the frame</p>
                </div>
              </div>
            </div>
          </div>
        )}
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

                <div className="flex flex-col items-center mt-4">
                    <svg width="156" height="156" viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M78 100.75C84.8956 100.75 91.5088 98.0107 96.3848 93.1348C101.261 88.2588 104 81.6456 104 74.75C104 67.8544 101.261 61.2412 96.3848 56.3652C91.5088 51.4893 84.8956 48.75 78 48.75C71.1044 48.75 64.4912 51.4893 59.6152 56.3652C54.7393 61.2412 52 67.8544 52 74.75C52 81.6456 54.7393 88.2588 59.6152 93.1348C64.4912 98.0107 71.1044 100.75 78 100.75ZM78 94.25C80.5608 94.25 83.0965 93.7456 85.4623 92.7657C87.8282 91.7857 89.9778 90.3493 91.7886 88.5386C93.5993 86.7278 95.0357 84.5782 96.0157 82.2123C96.9956 79.8465 97.5 77.3108 97.5 74.75C97.5 72.1892 96.9956 69.6535 96.0157 67.2877C95.0357 64.9218 93.5993 62.7722 91.7886 60.9614C89.9778 59.1507 87.8282 57.7143 85.4623 56.7344C83.0965 55.7544 80.5608 55.25 78 55.25C72.8283 55.25 67.8684 57.3045 64.2114 60.9614C60.5545 64.6184 58.5 69.5783 58.5 74.75C58.5 79.9217 60.5545 84.8816 64.2114 88.5386C67.8684 92.1955 72.8283 94.25 78 94.25Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M143 91C143 126.899 113.899 156 78 156C42.1005 156 13 126.899 13 91C13 55.1005 42.1005 26 78 26C113.899 26 143 55.1005 143 91ZM109.298 140.432C99.9417 146.375 89.0833 149.521 78 149.5C66.6521 149.521 55.546 146.222 46.0492 140.01C45.2692 139.035 44.4784 138.028 43.6768 136.988C42.7469 135.77 42.2454 134.279 42.25 132.746C42.25 129.246 44.7655 126.311 48.1292 125.821C70.3755 122.571 85.6927 122.85 107.968 125.934C109.581 126.17 111.053 126.98 112.116 128.216C113.178 129.451 113.759 131.029 113.75 132.659C113.75 134.219 113.214 135.733 112.245 136.916C111.246 138.131 110.264 139.304 109.298 140.432ZM120.201 131.514C119.681 125.43 115.063 120.354 108.859 119.496C86.0567 116.34 70.1188 116.038 47.19 119.389C40.95 120.299 36.3512 125.421 35.8053 131.521C25.3251 120.637 19.4793 106.109 19.5 91C19.5 58.6917 45.6917 32.5 78 32.5C110.308 32.5 136.5 58.6917 136.5 91C136.521 106.106 130.678 120.631 120.201 131.514Z" fill="black"/>
                    </svg>
                  <div className="flex gap-2 text-xs text-gray-500 mb-4 mt-2"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.91667 4.16667C10 4.16667 11.6667 5.83333 11.6667 7.91667C11.6667 10 10 11.6667 7.91667 11.6667C5.83333 11.6667 4.16667 10 4.16667 7.91667C4.16667 5.83333 5.83333 4.16667 7.91667 4.16667ZM7.91667 5C7.14312 5 6.40125 5.30729 5.85427 5.85427C5.30729 6.40125 5 7.14312 5 7.91667C5 8.69022 5.30729 9.43208 5.85427 9.97906C6.40125 10.526 7.14312 10.8333 7.91667 10.8333C8.69021 10.8333 9.43208 10.526 9.97906 9.97906C10.526 9.43208 10.8333 8.69022 10.8333 7.91667C10.8333 7.14312 10.526 6.40125 9.97906 5.85427C9.43208 5.30729 8.69021 5 7.91667 5ZM2.5 1.66667H4.16667L5.83333 0H10L11.6667 1.66667H13.3333C13.9964 1.66667 14.6323 1.93006 15.1011 2.3989C15.5699 2.86774 15.8333 3.50363 15.8333 4.16667V11.6667C15.8333 12.3297 15.5699 12.9656 15.1011 13.4344C14.6323 13.9033 13.9964 14.1667 13.3333 14.1667H2.5C1.83696 14.1667 1.20107 13.9033 0.732233 13.4344C0.263392 12.9656 0 12.3297 0 11.6667V4.16667C0 3.50363 0.263392 2.86774 0.732233 2.3989C1.20107 1.93006 1.83696 1.66667 2.5 1.66667ZM6.175 0.833333L4.50833 2.5H2.5C2.05797 2.5 1.63405 2.67559 1.32149 2.98816C1.00893 3.30072 0.833333 3.72464 0.833333 4.16667V11.6667C0.833333 12.1087 1.00893 12.5326 1.32149 12.8452C1.63405 13.1577 2.05797 13.3333 2.5 13.3333H13.3333C13.7754 13.3333 14.1993 13.1577 14.5118 12.8452C14.8244 12.5326 15 12.1087 15 11.6667V4.16667C15 3.72464 14.8244 3.30072 14.5118 2.98816C14.1993 2.67559 13.7754 2.5 13.3333 2.5H11.325L9.65833 0.833333H6.175Z" fill="black"/>
                    </svg>
                    Register Face ID</div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: implement registration logic (API call)
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
                      <input
                        className="w-full bg-[#F1F8FF] border border-transparent rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Staff"
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

export default IdentifyCitizen;