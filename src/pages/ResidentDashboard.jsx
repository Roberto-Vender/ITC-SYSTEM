import React from "react";

const ResidentDashboard = () => {
    const [showProfileMenu, setShowProfileMenu] = React.useState(false);
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
          <h2 className="text-lg font-bold text-blue-700 text-center">
            Barangay Healthcare
            <br />
            Profiling
          </h2>
        </div>

{/* Nav Links */}
<nav className="flex flex-col gap-3">
  <a
    href="/ResidentDashboard"
    className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
  >
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.375 5V1.5C9.375 1.25208 9.459 1.04442 9.627 0.877C9.795 0.709583 10.0027 0.625583 10.25 0.625H15.5C15.7479 0.625 15.9559 0.709 16.1239 0.877C16.2919 1.045 16.3756 1.25267 16.375 1.5V5C16.375 5.24792 16.291 5.45588 16.123 5.62388C15.955 5.79188 15.7473 5.87558 15.5 5.875H10.25C10.0021 5.875 9.79442 5.791 9.627 5.623C9.45958 5.455 9.37558 5.24733 9.375 5ZM0.625 8.5V1.5C0.625 1.25208 0.709 1.04442 0.877 0.877C1.045 0.709583 1.25267 0.625583 1.5 0.625H6.75C6.99792 0.625 7.20588 0.709 7.37388 0.877C7.54188 1.045 7.62558 1.25267 7.625 1.5V8.5C7.625 8.74792 7.541 8.95588 7.373 9.12388C7.205 9.29187 6.99733 9.37558 6.75 9.375H1.5C1.25208 9.375 1.04442 9.291 0.877 9.123C0.709583 8.955 0.625583 8.74733 0.625 8.5ZM9.375 15.5V8.5C9.375 8.25208 9.459 8.04442 9.627 7.877C9.795 7.70958 10.0027 7.62558 10.25 7.625H15.5C15.7479 7.625 15.9559 7.709 16.1239 7.877C16.2919 8.045 16.3756 8.25267 16.375 8.5V15.5C16.375 15.7479 16.291 15.9559 16.123 16.1239C15.955 16.2919 15.7473 16.3756 15.5 16.375H10.25C10.0021 16.375 9.79442 16.291 9.627 16.123C9.45958 15.955 9.37558 15.7473 9.375 15.5ZM0.625 15.5V12C0.625 11.7521 0.709 11.5444 0.877 11.377C1.045 11.2096 1.25267 11.1256 1.5 11.125H6.75C6.99792 11.125 7.20588 11.209 7.37388 11.377C7.54188 11.545 7.62558 11.7527 7.625 12V15.5C7.625 15.7479 7.541 15.9559 7.373 16.1239C7.205 16.2919 6.99733 16.3756 6.75 16.375H1.5C1.25208 16.375 1.04442 16.291 0.877 16.123C0.709583 15.955 0.625583 15.7473 0.625 15.5ZM2.375 7.625H5.875V2.375H2.375V7.625ZM11.125 14.625H14.625V9.375H11.125V14.625ZM11.125 4.125H14.625V2.375H11.125V4.125ZM2.375 14.625H5.875V12.875H2.375V14.625Z" fill="#E3F2FD"/>
      </svg>
      Dashboard
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
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-[#66B821] text-2xl font-bold">Welcome back, <span className="text-[#1976D2]">Ana!</span></h1>
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
                  <a href="/ResidentProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={() => window.location.href = '/CitizenLogin'}>Logout</button>
                </div>
              )}
            </div>
          </div>
        </div>

{/* Overview Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
  {/* Upcoming Appointment */}
  <div className="bg-white rounded-xl p-6 shadow-md">
    <h3 className="text-sm font-semibold mb-4 text-center">Upcoming Appointment</h3>
    <div className="flex items-center justify-center gap-2">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18H2V7H16M13 0V2H5V0H3V2H2C0.89 2 0 2.89 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H15V0M14 11H9V16H14V11Z" fill="black"/>
        </svg>
         <p className="font-medium text-center">Oct 28, 2025 — 09:00 AM</p>
         </div>
      <p className="text-gray-600 text-sm mt-2 text-center">Barangay Health Center — Rabies Dose 2</p>
      <a href="#" className="text-blue-600 text-sm hover:underline mt-2 block text-right">View Details</a>
  </div>

  {/* Health Summary */}
  <div className="bg-white rounded-xl p-6 shadow-md">
    <h3 className="text-sm text-center font-semibold mb-4">Health Summary</h3>
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2 mr-36">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7374 14.6507C11.7379 14.5333 11.714 14.4171 11.6674 14.3094C11.6207 14.2018 11.5521 14.1049 11.4661 14.0251L6.24414 9.20731L1.02039 14.0251C0.934532 14.105 0.86618 14.2019 0.819644 14.3095C0.773108 14.4172 0.749398 14.5334 0.750012 14.6507V19.3494C0.750012 19.5736 0.839064 19.7886 0.99758 19.9471C1.15609 20.1056 1.37109 20.1947 1.59526 20.1947H10.893C11.1172 20.1947 11.3322 20.1056 11.4907 19.9471C11.6492 19.7886 11.7383 19.5736 11.7383 19.3494L11.7374 14.6507ZM14.729 6.73281C15.1261 6.7396 15.5206 6.66725 15.8895 6.51998C16.2583 6.37271 16.5942 6.15347 16.8774 5.87504C17.1606 5.5966 17.3856 5.26456 17.5392 4.89828C17.6927 4.53199 17.7718 4.1388 17.7718 3.74162C17.7718 3.34445 17.6927 2.95126 17.5392 2.58497C17.3856 2.21869 17.1606 1.88665 16.8774 1.60822C16.5942 1.32978 16.2583 1.11054 15.8895 0.963267C15.5206 0.815995 15.1261 0.743645 14.729 0.750438C13.9446 0.763855 13.1968 1.0849 12.6468 1.64439C12.0968 2.20389 11.7885 2.95706 11.7885 3.74162C11.7885 4.52619 12.0968 5.27936 12.6468 5.83886C13.1968 6.39835 13.9446 6.7194 14.729 6.73281Z" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.2268 20.1948H16.9725L17.7206 14.2116H19.9641V11.9689C19.9641 10.8349 19.5959 9.73161 18.9149 8.82491C18.2338 7.91821 17.2768 7.25716 16.1877 6.9412C15.0986 6.62524 13.9363 6.67145 12.8758 7.07289C11.8152 7.47432 10.9137 8.20927 10.3068 9.16718M6.24327 13.6516V17.8813M8.35815 15.7664H4.12665" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Total Visits: 6</span>
      </div>
      <div className="flex items-center justify-center gap-2 mr-40">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.875 2.625L18.375 6.125M16.625 4.375L12.6875 8.3125M10.0625 5.6875L15.3125 10.9375M14.4375 10.0625L8.75 15.75H5.25M5.25 15.75V12.25L10.9375 6.5625M5.25 15.75L2.625 18.375M6.5625 10.9375L7.875 12.25M9.1875 8.3125L10.5 9.625" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Vaccines: 2</span>
      </div>
      <div className="flex items-center justify-center gap-2 mr-10">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2119 18.375C14.2365 18.375 13.4094 18.0355 12.7304 17.3565C12.0514 16.6763 11.7119 15.8491 11.7119 14.875C11.7119 13.9008 12.0514 13.0739 12.7304 12.3943C13.4094 11.7148 14.2363 11.375 15.211 11.375C16.1863 11.375 17.0135 11.7148 17.6925 12.3943C18.3721 13.0733 18.7119 13.9002 18.7119 14.875C18.7119 15.8497 18.3721 16.6769 17.6925 17.3565C17.0129 18.036 16.186 18.3755 15.2119 18.375ZM16.66 16.8017L17.1378 16.324L15.5479 14.7332V12.3515H14.875V15.0167L16.66 16.8017ZM4.91312 17.5C4.52229 17.5 4.18892 17.3623 3.913 17.087C3.63767 16.8116 3.5 16.4783 3.5 16.0868V4.91309C3.5 4.52225 3.63767 4.18888 3.913 3.91296C4.18833 3.63763 4.522 3.49996 4.914 3.49996H8.9705C9.05217 3.15813 9.23387 2.87084 9.51562 2.63809C9.79738 2.40475 10.1255 2.28809 10.5 2.28809C10.8815 2.28809 11.2122 2.40475 11.4922 2.63809C11.7723 2.87025 11.9531 3.15754 12.0347 3.49996H16.086C16.478 3.49996 16.8117 3.63763 17.087 3.91296C17.3623 4.18829 17.5 4.52196 17.5 4.91396V10.1806C17.3495 10.103 17.2072 10.035 17.073 9.97671C16.9388 9.91838 16.7895 9.86617 16.625 9.82009V4.91309C16.625 4.77892 16.569 4.65554 16.457 4.54296C16.345 4.43038 16.2213 4.37438 16.086 4.37496H14V6.32621H7V4.37496H4.914C4.77925 4.37496 4.65558 4.43096 4.543 4.54296C4.43042 4.65496 4.37442 4.77863 4.375 4.91396V16.0868C4.375 16.2438 4.42546 16.3727 4.52637 16.4736C4.62729 16.5745 4.7565 16.625 4.914 16.625H10.2742C10.3209 16.7883 10.376 16.9403 10.4396 17.0808C10.5038 17.2208 10.5855 17.3605 10.6846 17.5H4.91312ZM10.5 4.57621C10.703 4.57621 10.8716 4.50942 11.0058 4.37584C11.1399 4.24167 11.207 4.07309 11.207 3.87009C11.207 3.66709 11.1399 3.4985 11.0058 3.36434C10.8716 3.23017 10.703 3.16309 10.5 3.16309C10.297 3.16309 10.1284 3.23017 9.99425 3.36434C9.86008 3.4985 9.793 3.66709 9.793 3.87009C9.793 4.07309 9.86008 4.24167 9.99425 4.37584C10.1284 4.51 10.297 4.57621 10.5 4.57621Z" fill="#FF0000"/>
        </svg>
        <span>Last Check-up: Oct 10, 2025</span>
      </div>
    </div>
  </div>
</div>


        {/* Services and Consultations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Requested Services */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">REQUESTED SERVICES</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">🧪 Blood Test — Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🏥 Medical Certificate — Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🧪 Blood Test — Pending</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🏥 Medical Certificate — Approved</span>
              </div>
            </div>
          </section>

          {/* Recent Consultations */}
          <section className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">RECENT CONSULTATIONS</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">🩺Oct 10, 2025 — General Check-up — Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">💉Sep 20, 2025 — Flu Vaccine — Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">🩺Oct 10, 2025 — General Check-up — Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">💉Sep 20, 2025 — Flu Vaccine — Completed</span>
              </div>
            </div>
          </section>
        </div>

        {/* Health Tips */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md mb-8  border border-green-500">
          <h3 className="text-lg font-semibold mb-4">HEALTH TIPS</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">💧 Stay hydrated!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">🥗 Eat more fruits and vegetables every day to boost your immune system and energy!</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">😴  Get 7-8 hours of sleep every night.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">🍎 Eat fruits and veggies daily.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResidentDashboard;
