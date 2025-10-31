import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-[#F8FAFF]/80 overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-10 lg:pt-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side Text */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Logo + System Name */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <img
              src="/LOGO.png"
              alt="Barangay Healthcare Profiling System Logo"
              className="w-30 h-30"
            />
            <h1 className="text-[#1363DF] text-xl sm:text-3xl font-bold leading-tight">
              Barangay Healthcare Profiling System
            </h1>
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h2 className="text-[#1363DF] font-extrabold text-3xl sm:text-4xl leading-snug">
              Caring for every resident,
            </h2>
            <h3 className="text-[#1363DF] font-extrabold text-3xl sm:text-4xl leading-snug">
              one record at a time.
            </h3>
          </div>

          <p className="text-[#606C88] text-base sm:text-lg max-w-md mx-auto lg:mx-0">
            A centralized system for your barangay’s healthcare data — manage
            resident profiles, consultations, and health records efficiently.
          </p>

          {/* Button */}
          <Link
            to="/StaffLogin"
            className="inline-block bg-[#1363DF] hover:bg-[#0B5ED7] text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:scale-[1.03]"
          >
            Login to Continue
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center lg:justify-end relative z-10">
          <img
            src="/landingp.png"
            alt="Healthcare professionals"
            className="w-[330px] sm:w-[390px] lg:w-[430px] object-contain rounded-full"
          />
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src="/landingw.png"
          alt="Wave design"
          className="w-full select-none pointer-events-none"
        />
      </div>
    </div>
  );
}
