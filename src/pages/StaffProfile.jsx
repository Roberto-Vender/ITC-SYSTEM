import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StaffProfile = () => {
  const [showFloatingBack, setShowFloatingBack] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [recordForm, setRecordForm] = useState({
    date: "",
    type: "",
    staff: "",
    diagnosis: "",
    status: "Completed",
  });

  useEffect(() => {
    const handleScroll = () => {
      const backButton = document.getElementById("mainBackButton");
      if (backButton) {
        const rect = backButton.getBoundingClientRect();
        setShowFloatingBack(rect.top < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAddModal = () => {
    setRecordForm({
      date: "",
      type: "",
      staff: "",
      diagnosis: "",
      status: "Completed",
    });
    setShowAddModal(true);
  };

  const closeAddModal = () => setShowAddModal(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setRecordForm((s) => ({ ...s, [name]: value }));
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    // TODO: replace with API call / state update
    console.log("New record:", recordForm);
    // close modal after submit
    setShowAddModal(false);
  };

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
          {!isCollapsed && (
            <h2 className="text-sm font-bold text-blue-700 text-center">
              Barangay Health Profiling
            </h2>
          )}

          {/* Hamburger Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute top-0 right-2 py-2 rounded-md hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 px-2">
          <a
            href="/Dashboard"
            className="flex items-center gap-3 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            {/* Dashboard Icon */}
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.375 5V1.5C9.375 1.25208 9.459 1.04442 9.627 0.877C9.795 0.709583 10.0027 0.625583 10.25 0.625H15.5C15.7479 0.625 15.9559 0.709 16.1239 0.877C16.2919 1.045 16.3756 1.25267 16.375 1.5V5C16.375 5.24792 16.291 5.45588 16.123 5.62388C15.955 5.79188 15.7473 5.87558 15.5 5.875H10.25C10.0021 5.875 9.79442 5.791 9.627 5.623C9.45958 5.455 9.37558 5.24733 9.375 5ZM0.625 8.5V1.5C0.625 1.25208 0.709 1.04442 0.877 0.877C1.045 0.709583 1.25267 0.625583 1.5 0.625H6.75C6.99792 0.625 7.20588 0.709 7.37388 0.877C7.54188 1.045 7.62558 1.25267 7.625 1.5V8.5C7.625 8.74792 7.541 8.95588 7.373 9.12388C7.205 9.29187 6.99733 9.37558 6.75 9.375H1.5C1.25208 9.375 1.04442 9.291 0.877 9.123C0.709583 8.955 0.625583 8.74733 0.625 8.5ZM9.375 15.5V8.5C9.375 8.25208 9.459 8.04442 9.627 7.877C9.795 7.70958 10.0027 7.62558 10.25 7.625H15.5C15.7479 7.625 15.9559 7.709 16.1239 7.877C16.2919 8.045 16.3756 8.25267 16.375 8.5V15.5C16.375 15.7479 16.291 15.9559 16.123 16.1239C15.955 16.2919 15.7473 16.3756 15.5 16.375H10.25C10.0021 16.375 9.79442 16.291 9.627 16.123C9.45958 15.955 9.37558 15.7473 9.375 15.5ZM0.625 15.5V12C0.625 11.7521 0.709 11.5444 0.877 11.377C1.045 11.2096 1.25267 11.1256 1.5 11.125H6.75C6.99792 11.125 7.20588 11.209 7.37388 11.377C7.54188 11.545 7.62558 11.7527 7.625 12V15.5C7.625 15.7479 7.541 15.9559 7.373 16.1239C7.205 16.2919 6.99733 16.3756 6.75 16.375H1.5C1.25208 16.375 1.04442 16.291 0.877 16.123C0.709583 15.955 0.625583 15.7473 0.625 15.5ZM2.375 7.625H5.875V2.375H2.375V7.625ZM11.125 14.625H14.625V9.375H11.125V14.625ZM11.125 4.125H14.625V2.375H11.125V4.125ZM2.375 14.625H5.875V12.875H2.375V14.625Z" fill="#E3F2FD"/>
            </svg>

            {!isCollapsed && <span>Dashboard</span>}
          </a>

          <a
            href="/IdentifyCitizen"
            className="flex items-center gap-3 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            {/* Residents Icon */}
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8125 0C12.5087 0 13.1764 0.276562 13.6687 0.768845C14.1609 1.26113 14.4375 1.92881 14.4375 2.625C14.4375 3.32119 14.1609 3.98887 13.6687 4.48116C13.1764 4.97344 12.5087 5.25 11.8125 5.25C11.1163 5.25 10.4486 4.97344 9.95634 4.48116C9.46406 3.98887 9.1875 3.32119 9.1875 2.625C9.1875 1.92881 9.46406 1.26113 9.95634 0.768845C10.4486 0.276562 11.1163 0 11.8125 0ZM15.75 12.7969C15.75 13.8223 15.2291 14.7246 14.4375 15.2537V17.0625H9.1875V15.2537C8.3959 14.7246 7.875 13.8223 7.875 12.7969V11.1562C7.875 8.98242 9.63867 7.21875 11.8125 7.21875C13.9863 7.21875 15.75 8.98242 15.75 11.1562V12.7969ZM16.4062 17.0625V15.9428C17.2225 15.0199 17.7188 13.8018 17.7188 12.4688V11.1562C17.7188 10.0611 17.4193 9.03984 16.9025 8.15801C17.3578 7.97344 17.8541 7.875 18.375 7.875C20.5488 7.875 22.3125 9.63867 22.3125 11.8125V13.125C22.3125 14.0971 21.7834 14.9461 21 15.3973V17.0625H16.4062ZM2.625 15.3973C1.8416 14.9461 1.3125 14.0971 1.3125 13.125V11.8125C1.3125 9.63867 3.07617 7.875 5.25 7.875C5.7709 7.875 6.26719 7.97754 6.72246 8.15801C6.20566 9.03574 5.90625 10.0611 5.90625 11.1562V12.4688C5.90625 13.8018 6.40254 15.0158 7.21875 15.9428V17.0625H2.625V15.3973ZM5.25 1.3125C5.55163 1.3125 5.85031 1.37191 6.12898 1.48734C6.40765 1.60277 6.66085 1.77195 6.87414 1.98524C7.08742 2.19852 7.25661 2.45173 7.37204 2.7304C7.48746 3.00907 7.54688 3.30774 7.54688 3.60938C7.54688 3.91101 7.48746 4.20968 7.37204 4.48835C7.25661 4.76702 7.08742 5.02023 6.87414 5.23351C6.66085 5.4468 6.40765 5.61598 6.12898 5.73141C5.85031 5.84684 5.55163 5.90625 5.25 5.90625C4.94837 5.90625 4.64969 5.84684 4.37102 5.73141C4.09235 5.61598 3.83915 5.4468 3.62586 5.23351C3.41258 5.02023 3.24339 4.76702 3.12796 4.48835C3.01254 4.20968 2.95312 3.91101 2.95312 3.60938C2.95312 3.30774 3.01254 3.00907 3.12796 2.7304C3.24339 2.45173 3.41258 2.19852 3.62586 1.98524C3.83915 1.77195 4.09235 1.60277 4.37102 1.48734C4.64969 1.37191 4.94837 1.3125 5.25 1.3125ZM18.375 1.3125C18.6766 1.3125 18.9753 1.37191 19.254 1.48734C19.5326 1.60277 19.7859 1.77195 19.9991 1.98524C20.2124 2.19852 20.3816 2.45173 20.497 2.7304C20.6125 3.00907 20.6719 3.30774 20.6719 3.60938C20.6719 3.91101 20.6125 4.20968 20.497 4.48835C20.3816 4.76702 20.2124 5.02023 19.9991 5.23351C19.7859 5.4468 19.5326 5.61598 19.254 5.73141C18.9753 5.84684 18.6766 5.90625 18.375 5.90625C18.0734 5.90625 17.7747 5.84684 17.496 5.73141C17.2174 5.61598 16.9641 5.4468 16.7509 5.23351C16.5376 5.02023 16.3684 4.76702 16.253 4.48835C16.1375 4.20968 16.0781 3.91101 16.0781 3.60938C16.0781 3.30774 16.1375 3.00907 16.253 2.7304C16.3684 2.45173 16.5376 2.19852 16.7509 1.98524C16.9641 1.77195 17.2174 1.60277 17.496 1.48734C17.7747 1.37191 18.0734 1.3125 18.375 1.3125ZM0.984375 19.0312H22.6406C23.1861 19.0312 23.625 19.4701 23.625 20.0156C23.625 20.5611 23.1861 21 22.6406 21H0.984375C0.438867 21 0 20.5611 0 20.0156C0 19.4701 0.438867 19.0312 0.984375 19.0312Z" fill="black"/>
            </svg>
            {!isCollapsed && <span>Residents</span>}
          </a>

          <a
            href="#reports"
            className="flex items-center gap-3 hover:bg-blue-100 text-blue-700 font-medium py-3 px-4 shadow-sm transition rounded-lg"
          >
            {/* Reports Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
            {!isCollapsed && <span>Reports</span>}
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 p-8 transition-all duration-300 ${
          isCollapsed ? "ml-24" : "ml-64"
        }`}
      >
        {/* Back Button */}
        <button
          id="mainBackButton"
          onClick={() => (window.location.href = "/IdentifyCitizen")}
          className="text-blue-600 hover:underline mb-4"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-black">
            Staff Profile{" "}
            <span className="text-blue-700 ml-2">Ana Dela Cruz</span>
          </h1>
        </div>

        {/* Profile Section */}
        <div className="flex border-blue-100 p-6 mb-10 gap-8 items-center">
          {/* Profile Image */}
          <div className="flex flex-col items-center w-48">
            <div className="w-40 h-40 rounded-full flex items-center justify-center mb-3">
              <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M96.4999 108.563C105.031 108.563 113.213 105.174 119.245 99.1412C125.278 93.1088 128.667 84.927 128.667 76.3959C128.667 67.8648 125.278 59.6831 119.245 53.6506C113.213 47.6182 105.031 44.2292 96.4999 44.2292C87.9688 44.2292 79.7871 47.6182 73.7546 53.6506C67.7222 59.6831 64.3333 67.8648 64.3333 76.3959C64.3333 84.927 67.7222 93.1088 73.7546 99.1412C79.7871 105.174 87.9688 108.563 96.4999 108.563ZM96.4999 100.521C99.6681 100.521 102.805 99.8969 105.732 98.6845C108.659 97.4721 111.319 95.6951 113.559 93.4549C115.799 91.2147 117.576 88.5551 118.789 85.6282C120.001 82.7012 120.625 79.5641 120.625 76.3959C120.625 73.2278 120.001 70.0907 118.789 67.1637C117.576 64.2367 115.799 61.5772 113.559 59.337C111.319 57.0968 108.659 55.3197 105.732 54.1073C102.805 52.8949 99.6681 52.2709 96.4999 52.2709C90.1016 52.2709 83.9653 54.8126 79.441 59.337C74.9166 63.8613 72.3749 69.9976 72.3749 76.3959C72.3749 82.7943 74.9166 88.9306 79.441 93.4549C83.9653 97.9792 90.1016 100.521 96.4999 100.521Z" fill="black"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M176.917 96.5C176.917 140.914 140.914 176.917 96.4999 176.917C52.0858 176.917 16.0833 140.914 16.0833 96.5C16.0833 52.0859 52.0858 16.0834 96.4999 16.0834C140.914 16.0834 176.917 52.0859 176.917 96.5ZM135.221 157.657C123.646 165.008 110.212 168.9 96.4999 168.875C82.4605 168.901 68.7202 164.819 56.9711 157.134C56.0061 155.928 55.0277 154.681 54.0359 153.395C52.8855 151.888 52.265 150.043 52.2707 148.148C52.2707 143.817 55.3829 140.186 59.5444 139.579C87.067 135.558 106.017 135.904 133.576 139.72C135.571 140.012 137.393 141.014 138.707 142.543C140.022 144.071 140.74 146.023 140.729 148.039C140.729 149.969 140.066 151.843 138.867 153.306C137.632 154.81 136.416 156.26 135.221 157.657ZM148.71 146.624C148.067 139.097 142.353 132.816 134.678 131.755C106.468 127.85 86.7494 127.477 58.3824 131.622C50.6624 132.748 44.9729 139.085 44.2974 146.632C31.3316 133.166 24.0994 115.193 24.1249 96.5C24.1249 56.5289 56.5288 24.125 96.4999 24.125C136.471 24.125 168.875 56.5289 168.875 96.5C168.901 115.189 161.671 133.159 148.71 146.624Z" fill="black"/>
                </svg>

            </div>
            <button className="text-sm text-blue-600 font-medium hover:underline">
              Update Photo
            </button>
            <p className="mt-2 font-semibold text-2xl">Ana Dela Cruz</p>
            <p className="text-gray-500 text-sm">Resident ID: 001</p>

            {/* Action Buttons */}
            <div className="flex gap-6 mt-8 ml-65">
              <button className="bg-green-500 hover:bg-green-600 w-50 h-10 text-white font-semibold py-2 px-6 rounded-lg transition">
                Edit Information
              </button>
              <button
                onClick={openAddModal}
                className="bg-blue-600 hover:bg-blue-700 w-50 h-10 text-white font-semibold py-2 px-6 rounded-lg transition"
              >
                Add Health Record
              </button>
            </div>
          </div>

          {/* Resident Info */}
          <div className="flex flex-col gap-2 text-sm mb-10">
            <div className="flex ">
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

        {/* Health History Table */}
        <section className="bg-white w-full p-6 rounded-xl shadow-md border border-blue-100">
          <h3 className="text-lg font-semibold text-blue-700 mb-4 text-center">
            Health History
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-5 whitespace-nowrap">Date</th>
                  <th className="text-left py-2 px-5 whitespace-nowrap">
                    Type of Check-up
                  </th>
                  <th className="text-left py-2 px-5 whitespace-nowrap">Staff</th>
                  <th className="text-left py-2 px-5 whitespace-nowrap">Diagnosis</th>
                  <th className="text-left py-2 px-5 whitespace-nowrap">Status</th>
                </tr>
                <Link to="/ResidentProfile"></Link>   
              </thead>
              <tbody>
                <tr className="border-t hover:bg-blue-50 transition cursor-pointer">
                <td className="py-3 px-5">Oct 13, 2025</td>
                <td className="py-3 px-5">Vaccination</td>
                <td className="py-3 px-5">Nurse Lunas</td>
                <td className="py-3 px-5">Rabies Dose 1</td>
                <td className="py-3 px-5 text-green-600 font-medium">Completed</td>
                <td className="py-3 px-5 text-right">
                <Link to="/ResidentProfileStaff">
                <button className="bg-[#1363DF] hover:bg-[#0B5ED7] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-all duration-300 hover:scale-[1.05]">
                  View</button>
                  </Link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Add Health Record Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={closeAddModal}
            />

            {/* Modal Card */}
            <div className="relative z-10 w-full max-w-2xl mx-4">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <button
                    type="button"
                    onClick={closeAddModal}
                    className="p-2 rounded-md bg-green-50 text-green-600 hover:bg-green-100"
                    aria-label="Close"
                  >
                    ←
                  </button>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Add Health Record
                  </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleAddRecord} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-2">Date of Visit</span>
                      <input
                        type="date"
                        name="date"
                        value={recordForm.date}
                        onChange={handleFormChange}
                        required
                        className="w-full rounded-lg bg-sky-50 border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>

                    <label className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-2">Follow-up Date</span>
                      <input
                        type="date"
                        name="followup"
                        value={recordForm.followup || ""}
                        onChange={(e) =>
                          setRecordForm((s) => ({ ...s, followup: e.target.value }))
                        }
                        className="w-full rounded-lg bg-sky-50 border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <label className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-2">Type of Check-up</span>
                      <input
                        type="text"
                        name="type"
                        value={recordForm.type}
                        onChange={handleFormChange}
                        placeholder="Vaccination, Consultation, Prenatal, Dental, etc."
                        required
                        className="w-full rounded-lg bg-sky-50 border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>

                    <label className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-2">Attending Staff</span>
                      <input
                        type="text"
                        name="staff"
                        value={recordForm.staff}
                        onChange={handleFormChange}
                        placeholder="Staff name"
                        className="w-full rounded-lg bg-sky-50 border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>

                    <label className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-2">Diagnosis / Service Given</span>
                      <input
                        type="text"
                        name="diagnosis"
                        value={recordForm.diagnosis}
                        onChange={handleFormChange}
                        placeholder="Notes (vaccination, medication, etc.)"
                        className="w-full rounded-lg bg-sky-50 border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>

                    <label className="flex flex-col text-sm">
                      <span className="text-gray-600 mb-2">Notes / Remarks</span>
                      <textarea
                        name="notes"
                        value={recordForm.notes || ""}
                        onChange={(e) =>
                          setRecordForm((s) => ({ ...s, notes: e.target.value }))
                        }
                        rows={3}
                        placeholder="Completed, Ongoing, Pending, etc..."
                        className="w-full rounded-lg bg-sky-50 border border-blue-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      />
                    </label>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-center gap-6 mt-2">
                    <button
                      type="button"
                      onClick={closeAddModal}
                      className="w-40 py-3 rounded-lg bg-sky-200 text-sky-800 font-medium hover:bg-sky-300 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-40 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                      Save Record
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StaffProfile;