import React, { useState } from "react";

const Dashboard = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
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
            <h1 className="text-[#66B821] text-2xl font-bold">Welcome back, <span className="text-[#1976D2]">Nurse Ana!</span></h1>
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
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100" onClick={() => window.location.href = '/CitizenLogin'}>Logout</button>
                </div>
              )}
            </div>
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
      <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.3083 30.6417C20.4506 30.6417 18.875 29.995 17.5817 28.7017C16.2883 27.4061 15.6417 25.8306 15.6417 23.975C15.6417 22.1194 16.2883 20.5444 17.5817 19.25C18.875 17.9556 20.45 17.3083 22.3067 17.3083C24.1644 17.3083 25.74 17.9556 27.0333 19.25C28.3278 20.5433 28.975 22.1183 28.975 23.975C28.975 25.8317 28.3278 27.4072 27.0333 28.7017C25.7389 29.9961 24.1639 30.6428 22.3083 30.6417ZM25.0667 27.645L25.9767 26.735L22.9483 23.705V19.1683H21.6667V24.245L25.0667 27.645ZM2.69167 28.975C1.94722 28.975 1.31222 28.7128 0.786667 28.1883C0.262222 27.6639 0 27.0289 0 26.2833V5C0 4.25556 0.262222 3.62056 0.786667 3.095C1.31111 2.57056 1.94667 2.30833 2.69333 2.30833H10.42C10.5756 1.65722 10.9217 1.11 11.4583 0.666667C11.995 0.222222 12.62 0 13.3333 0C14.06 0 14.69 0.222222 15.2233 0.666667C15.7567 1.10889 16.1011 1.65611 16.2567 2.30833H23.9733C24.72 2.30833 25.3556 2.57056 25.88 3.095C26.4044 3.61944 26.6667 4.255 26.6667 5.00167V15.0333C26.38 14.8856 26.1089 14.7561 25.8533 14.645C25.5978 14.5339 25.3133 14.4344 25 14.3467V5C25 4.74444 24.8933 4.50944 24.68 4.295C24.4667 4.08056 24.2311 3.97389 23.9733 3.975H20V7.69167H6.66667V3.975H2.69333C2.43667 3.975 2.20111 4.08167 1.98667 4.295C1.77222 4.50833 1.66556 4.74389 1.66667 5.00167V26.2833C1.66667 26.5822 1.76278 26.8278 1.955 27.02C2.14722 27.2122 2.39333 27.3083 2.69333 27.3083H12.9033C12.9922 27.6194 13.0972 27.9089 13.2183 28.1767C13.3406 28.4433 13.4961 28.7094 13.685 28.975H2.69167ZM13.3333 4.35833C13.72 4.35833 14.0411 4.23111 14.2967 3.97667C14.5522 3.72111 14.68 3.4 14.68 3.01333C14.68 2.62667 14.5522 2.30556 14.2967 2.05C14.0411 1.79444 13.72 1.66667 13.3333 1.66667C12.9467 1.66667 12.6256 1.79444 12.37 2.05C12.1144 2.30556 11.9867 2.62667 11.9867 3.01333C11.9867 3.4 12.1144 3.72111 12.37 3.97667C12.6256 4.23222 12.9467 4.35833 13.3333 4.35833Z" fill="#202020" fill-opacity="0.82"/>
      </svg>
      <p className="text-3xl font-bold text-blue-700">23</p>
    </div>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
  {/* Completed Consultations */}
  <section className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col h-full">
    <h3 className="text-lg font-semibold text-blue-700 mb-4 text-center">
      Completed Consultations
    </h3>

    {/*Table */}
    <div className="overflow-x-auto w-full">
      <table className=" w-full text-sm table-auto">
        <thead>
          <tr className="border-b bg-blue-50">
            <th className="text-left py-2 px-3">Patient Name</th>
            <th className="text-left py-2 px-3">Type</th>
            <th className="text-left py-2 px-3">Date</th>
            <th className="text-left py-2 px-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b last:border-none hover:bg-blue-50 transition">
            <td className="py-2 px-3 whitespace-nowrap">
              Ana Dela Cruz
            </td>
            <td className="py-2 px-3 whitespace-nowrap">
              General Check-up
            </td>
            <td className="py-2 px-3 whitespace-nowrap">
              Oct 12, 2025
            </td>
            <td className="py-2 px-3 text-green-600 font-medium whitespace-nowrap">
              Completed
            </td>
          </tr>

          <tr className="border-b last:border-none hover:bg-blue-50 transition">
            <td className="py-2 px-3 whitespace-nowrap">
              Maria Santos 
            </td>
            <td className="py-2 px-3 whitespace-nowrap">
              General Check-up 
            </td>
            <td className="py-2 px-3 whitespace-nowrap">
              Oct 14, 2025
            </td>
            <td className="py-2 px-3 text-green-600 font-medium whitespace-nowrap">
              Completed
            </td>
          </tr>

          <tr className="hover:bg-blue-50 transition">
            <td className="py-2 px-3 whitespace-nowrap">
              Juan Dela Cruz
            </td>
            <td className="py-2 px-3 whitespace-nowrap">
              Dental Check-up
            </td>
            <td className="py-2 px-3 whitespace-nowrap">
              Oct 20, 2025
            </td>
            <td className="py-2 px-3 text-green-600 font-medium whitespace-nowrap">
              Completed
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>



          {/* Active Staff on Duty */}
<section className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col h-full">
  <h3 className="text-lg font-semibold text-blue-700 mb-4 text-center">
    Active Staff on Duty
  </h3>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className=" w-full text-sm table-auto">
            <thead>
              <tr className="border-b bg-blue-50">
                <th className="text-left py-2 px-3">Name</th>
                <th className="text-left py-2 px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-none hover:bg-blue-50 transition">
                <td className="py-2 px-3 whitespace-nowrap">
                  Edrian Arsua 
                </td>
                <td className="py-2 px-3 text-gray-500 font-medium whitespace-nowrap">
                  Offline
                </td>
              </tr>

              <tr className="border-b last:border-none hover:bg-blue-50 transition">
                <td className="py-2 px-3 whitespace-nowrap">
                  Keith Abe Ayuman
                </td>
                <td className="py-2 px-3 text-gray-500 font-medium whitespace-nowrap">
                  Offline
                </td>
              </tr>

              <tr className="border-b last:border-none hover:bg-blue-50 transition">
                <td className="py-2 px-3 whitespace-nowrap">
                  Ian John Doedoks
                </td>
                <td className="py-2 px-3 text-gray-500 font-medium whitespace-nowrap">
                  Offline
                </td>
              </tr>

              <tr className="border-b last:border-none hover:bg-blue-50 transition">
                <td className="py-2 px-3 whitespace-nowrap">
                  Claudin Delima
                </td>
                <td className="py-2 px-3 text-green-600 font-medium whitespace-nowrap">
                  On Duty
                </td>
              </tr>

              <tr className="hover:bg-blue-50 transition">
                <td className="py-2 px-3 whitespace-nowrap">
                  Roberto Vender
                </td>
                <td className="py-2 px-3 text-green-600 font-medium whitespace-nowrap">
                  On Duty
                </td>
              </tr>
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
