// ...existing code...
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-[#E3F2FD]   flex flex-col">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="/logo1.jfif"
            alt="Logo"
            className="w-40 h-40 object-contain mb-3"
          />
          <h2 className="text-sl font-bold text-blue-700 text-center">
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
      Dashboard
      </a>

      <a
        href="/IdentifyCitizen"
        className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
      >
      <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8125 0C12.5087 0 13.1764 0.276562 13.6687 0.768845C14.1609 1.26113 14.4375 1.92881 14.4375 2.625C14.4375 3.32119 14.1609 3.98887 13.6687 4.48116C13.1764 4.97344 12.5087 5.25 11.8125 5.25C11.1163 5.25 10.4486 4.97344 9.95634 4.48116C9.46406 3.98887 9.1875 3.32119 9.1875 2.625C9.1875 1.92881 9.46406 1.26113 9.95634 0.768845C10.4486 0.276562 11.1163 0 11.8125 0ZM15.75 12.7969C15.75 13.8223 15.2291 14.7246 14.4375 15.2537V17.0625H9.1875V15.2537C8.3959 14.7246 7.875 13.8223 7.875 12.7969V11.1562C7.875 8.98242 9.63867 7.21875 11.8125 7.21875C13.9863 7.21875 15.75 8.98242 15.75 11.1562V12.7969ZM16.4062 17.0625V15.9428C17.2225 15.0199 17.7188 13.8018 17.7188 12.4688V11.1562C17.7188 10.0611 17.4193 9.03984 16.9025 8.15801C17.3578 7.97344 17.8541 7.875 18.375 7.875C20.5488 7.875 22.3125 9.63867 22.3125 11.8125V13.125C22.3125 14.0971 21.7834 14.9461 21 15.3973V17.0625H16.4062ZM2.625 15.3973C1.8416 14.9461 1.3125 14.0971 1.3125 13.125V11.8125C1.3125 9.63867 3.07617 7.875 5.25 7.875C5.7709 7.875 6.26719 7.97754 6.72246 8.15801C6.20566 9.03574 5.90625 10.0611 5.90625 11.1562V12.4688C5.90625 13.8018 6.40254 15.0158 7.21875 15.9428V17.0625H2.625V15.3973ZM5.25 1.3125C5.55163 1.3125 5.85031 1.37191 6.12898 1.48734C6.40765 1.60277 6.66085 1.77195 6.87414 1.98524C7.08742 2.19852 7.25661 2.45173 7.37204 2.7304C7.48746 3.00907 7.54688 3.30774 7.54688 3.60938C7.54688 3.91101 7.48746 4.20968 7.37204 4.48835C7.25661 4.76702 7.08742 5.02023 6.87414 5.23351C6.66085 5.4468 6.40765 5.61598 6.12898 5.73141C5.85031 5.84684 5.55163 5.90625 5.25 5.90625C4.94837 5.90625 4.64969 5.84684 4.37102 5.73141C4.09235 5.61598 3.83915 5.4468 3.62586 5.23351C3.41258 5.02023 3.24339 4.76702 3.12796 4.48835C3.01254 4.20968 2.95312 3.91101 2.95312 3.60938C2.95312 3.30774 3.01254 3.00907 3.12796 2.7304C3.24339 2.45173 3.41258 2.19852 3.62586 1.98524C3.83915 1.77195 4.09235 1.60277 4.37102 1.48734C4.64969 1.37191 4.94837 1.3125 5.25 1.3125ZM18.375 1.3125C18.6766 1.3125 18.9753 1.37191 19.254 1.48734C19.5326 1.60277 19.7859 1.77195 19.9991 1.98524C20.2124 2.19852 20.3816 2.45173 20.497 2.7304C20.6125 3.00907 20.6719 3.30774 20.6719 3.60938C20.6719 3.91101 20.6125 4.20968 20.497 4.48835C20.3816 4.76702 20.2124 5.02023 19.9991 5.23351C19.7859 5.4468 19.5326 5.61598 19.254 5.73141C18.9753 5.84684 18.6766 5.90625 18.375 5.90625C18.0734 5.90625 17.7747 5.84684 17.496 5.73141C17.2174 5.61598 16.9641 5.4468 16.7509 5.23351C16.5376 5.02023 16.3684 4.76702 16.253 4.48835C16.1375 4.20968 16.0781 3.91101 16.0781 3.60938C16.0781 3.30774 16.1375 3.00907 16.253 2.7304C16.3684 2.45173 16.5376 2.19852 16.7509 1.98524C16.9641 1.77195 17.2174 1.60277 17.496 1.48734C17.7747 1.37191 18.0734 1.3125 18.375 1.3125ZM0.984375 19.0312H22.6406C23.1861 19.0312 23.625 19.4701 23.625 20.0156C23.625 20.5611 23.1861 21 22.6406 21H0.984375C0.438867 21 0 20.5611 0 20.0156C0 19.4701 0.438867 19.0312 0.984375 19.0312Z" fill="black"/>
        </svg>
      Residents
      </a>  

      <a
        href="#reports"
        className="w-full flex items-center gap-2 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
      >
        Reports
      </a>
    </nav>

</aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
<div className="flex justify-between items-center mb-8">
  <h1 className="text-2xl font-bold text-blue-700">
    Welcome, Nurse Lawas 👋
  </h1>

  {/* Action Icons */}
  <div className="flex items-center gap-4 text-gray-600">
    {/* Notifications */}
    <button
      onClick={() => alert("Opening Notifications...")}
      aria-label="Notifications"
      className="p-2 rounded-md hover:bg-gray-100 transition"
    >
      <svg
        width="29"
        height="34"
        viewBox="0 0 29 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0001 33.6667C13.0834 33.6667 12.299 33.3406 11.6467 32.6884C10.9945 32.0362 10.6679 31.2512 10.6667 30.3334H17.3334C17.3334 31.25 17.0073 32.035 16.3551 32.6884C15.7029 33.3417 14.9179 33.6678 14.0001 33.6667ZM0.666748 28.6667L0.666748 25.3334H4.00008L4.00008 13.6667C4.00008 11.3612 4.69453 9.31282 6.08342 7.52171C7.4723 5.7306 9.27786 4.55671 11.5001 4.00004V0.333374L16.5001 0.333374V3.37504C16.2223 3.9306 16.014 4.51393 15.8751 5.12504C15.7362 5.73615 15.6667 6.36115 15.6667 7.00004C15.6667 9.3056 16.4795 11.2712 18.1051 12.8967C19.7306 14.5223 21.6956 15.3345 24.0001 15.3334V25.3334H27.3334V28.6667H0.666748ZM24.0001 12C22.6112 12 21.4306 11.5139 20.4584 10.5417C19.4862 9.56948 19.0001 8.38893 19.0001 7.00004C19.0001 5.61115 19.4862 4.4306 20.4584 3.45837C21.4306 2.48615 22.6112 2.00004 24.0001 2.00004C25.389 2.00004 26.5695 2.48615 27.5417 3.45837C28.514 4.4306 29.0001 5.61115 29.0001 7.00004C29.0001 8.38893 28.514 9.56948 27.5417 10.5417C26.5695 11.5139 25.389 12 24.0001 12Z"
          fill="#1976D2"
        />
      </svg>
    </button>

    {/* Profile */}
    <button
      onClick={() => alert("Opening Profile...")}
      aria-label="Profile"
      className="p-2 rounded-md hover:bg-gray-100 transition"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0001 14C12.1667 14 10.5973 13.3472 9.29175 12.0416C7.98619 10.7361 7.33341 9.16663 7.33341 7.33329C7.33341 5.49996 7.98619 3.93052 9.29175 2.62496C10.5973 1.3194 12.1667 0.666626 14.0001 0.666626C15.8334 0.666626 17.4029 1.3194 18.7084 2.62496C20.014 3.93052 20.6667 5.49996 20.6667 7.33329C20.6667 9.16663 20.014 10.7361 18.7084 12.0416C17.4029 13.3472 15.8334 14 14.0001 14ZM0.666748 24V22.6666C0.666748 21.7222 0.910082 20.8544 1.39675 20.0633C1.88341 19.2722 2.52897 18.6677 3.33341 18.25C5.05564 17.3888 6.80564 16.7433 8.58341 16.3133C10.3612 15.8833 12.1667 15.6677 14.0001 15.6666C15.8334 15.6655 17.639 15.8811 19.4167 16.3133C21.1945 16.7455 22.9445 17.3911 24.6667 18.25C25.4723 18.6666 26.1184 19.2711 26.6051 20.0633C27.0917 20.8555 27.3345 21.7233 27.3334 22.6666V24C27.3334 24.9166 27.0073 25.7016 26.3551 26.355C25.7029 27.0083 24.9179 27.3344 24.0001 27.3333H4.00008C3.08341 27.3333 2.29897 27.0072 1.64675 26.355C0.994525 25.7027 0.667859 24.9177 0.666748 24Z"
          fill="#7AC61D"
        />
      </svg>
    </button>

    {/* Settings */}
    <button
      onClick={() => alert("Opening Settings...")}
      aria-label="Settings"
      className="p-2 rounded-md hover:bg-gray-100 transition"
    >
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0L5 5L10 0H0Z" fill="black" />
      </svg>
    </button>
  </div>
</div>

       {/* Stats Cards */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">

  {/* Total Residents */}
  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
    <h3 className="text-gray-500 font-medium mb-2">Total Residents</h3>
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.4062 13.125C31.1773 16.3023 28.8203 18.75 26.25 18.75C23.6797 18.75 21.3187 16.3031 21.0937 13.125C20.8594 9.81953 23.1539 7.5 26.25 7.5C29.3461 7.5 31.6406 9.87969 31.4062 13.125Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.2501 23.75C21.1587 23.75 16.2626 26.2789 15.036 31.2039C14.8735 31.8555 15.2821 32.5 15.9516 32.5H36.5493C37.2188 32.5 37.6251 31.8555 37.4649 31.2039C36.2383 26.2 31.3422 23.75 26.2501 23.75Z" stroke="black" strokeMiterlimit="10"/>
        <path d="M15.625 14.5266C15.4422 17.0641 13.5375 19.0625 11.4844 19.0625C9.43126 19.0625 7.52345 17.0648 7.34376 14.5266C7.15704 11.8867 9.01095 10 11.4844 10C13.9578 10 15.8117 11.9352 15.625 14.5266Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.0938 23.9063C14.6836 23.2602 13.1305 23.0117 11.4844 23.0117C7.42191 23.0117 3.50784 25.0313 2.52738 28.9648C2.39847 29.4852 2.72503 30 3.25941 30H12.0313" stroke="black" strokeMiterlimit="10" strokeLinecap="round"/>
      </svg>
      <p className="text-3xl font-bold text-blue-700">450</p>
    </div>
  </div>

  {/* Visitors Today */}
  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
    <h3 className="text-gray-500 font-medium mb-2">Visitors Today</h3>
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4C15.5817 4 12 7.58172 12 12C12 16.4183 15.5817 20 20 20C24.4183 20 28 16.4183 28 12C28 7.58172 24.4183 4 20 4Z" stroke="black" strokeWidth="2"/>
        <path d="M34 36C34 28.268 27.732 22 20 22C12.268 22 6 28.268 6 36H34Z" stroke="black" strokeWidth="2"/>
      </svg>
      <p className="text-3xl font-bold text-blue-700">89</p>
    </div>
  </div>

  {/* Pending Follow-ups */}
  <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
    <h3 className="text-gray-500 font-medium mb-2">Pending Follow-ups</h3>
    <div className="flex items-center gap-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2C10.6112 2 3 9.61116 3 19C3 28.3888 10.6112 36 20 36C29.3888 36 37 28.3888 37 19C37 9.61116 29.3888 2 20 2Z" stroke="black" strokeWidth="2"/>
        <path d="M20 10V21L28 25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <p className="text-3xl font-bold text-blue-700">23</p>
    </div>
  </div>

</div>


        {/* Tables Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Completed Consultations */}
          <section className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-700 mb-4 text-center" >
              Completed Consultations
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Patient Name</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {["Ana Dela Cruz", "Maria Santos", "Juan Dela Cruz"].map(
                    (name, i) => (
                      <tr key={i} className="border-b last:border-none">
                        <td className="py-2">{name}</td>
                        <td className="py-2">General Check-up</td>
                        <td className="py-2">Oct 12, 2025</td>
                        <td className="py-2 text-green-600 font-medium">
                          Completed
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Active Staff on Duty */}
          <section className="bg-white p-6 rounded-xl shadow-md border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-700 mb-4 text-center">
              Active Staff on Duty
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Edrian Arsua", status: "Offline" },
                    { name: "Keith Abe Ayuman", status: "Offline" },
                    { name: "Ian John Doedoks", status: "Offline" },
                    { name: "Claudin Delima", status: "On Duty" },
                    { name: "Roberto Vender", status: "On Duty" },
                  ].map((staff, i) => (
                    <tr key={i} className="border-b last:border-none">
                      <td className="py-2">{staff.name}</td>
                      <td
                        className={`py-2 font-medium ${
                          staff.status === "On Duty"
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        {staff.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
