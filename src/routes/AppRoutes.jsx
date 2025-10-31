import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../layouts/HeaderLayout";
import HeaderNone from "../layouts/HeaderNone";
import CreateAccount from "../pages/CreateAccount";
import CitizenLogin from "../pages/Citizenlogin";
import Dashboard from "../pages/Dashboard";
import RegisterNewCitizen from "../pages/RegisterNewCitizen";
import IdentifyCitizen from "../pages/IdentifyCitizen";
import EditCitizenProfile from "../pages/EditCitizenProfile";
import ViewHealthCareHistory from "../pages/ViewHealthCareHistory"; // <-- match name
import ForgotPassword from "../pages/ForgotPassword";
import Checkmail from "../pages/Checkmail";
import CreateNewPassword from "../pages/CreateNewPassword";
import NotifPasswordChanged from "../pages/NotifPasswordChaged";
import StaffLogin from "../pages/StaffLogin";
import ResidentDashboard from "../pages/ResidentDashboard";
import StaffProfile from "../pages/StaffProfile";
import AppointmentTab from "../pages/AppointmentTab";
import LandingPage from "../pages/LandingPage";
import ResidentProfile from "../pages/ResidentProfile";
import ResidentProfileStaff from "../pages/ResidentProfileStaff";
import HealthRecords from "../pages/HealthRecords";
import FollowUps from "../pages/FollowUps";
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import AdminProfile from "../pages/AdminProfile";
import AdminStaff from "../pages/AdminStaff";
import ActiveLogs from "../pages/ActiveLogs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />} />

      <Route element={<HeaderNone />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="CitizenLogin" element={<CitizenLogin />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="RegisterNewCitizen" element={<RegisterNewCitizen />} />
        <Route path="IdentifyCitizen" element={<IdentifyCitizen />} />
        <Route path="EditCitizenProfile" element={<EditCitizenProfile />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="Checkmail" element={<Checkmail />} />
        <Route path="CreateNewPassword" element={<CreateNewPassword />} />
        <Route path="NotifPasswordChanged" element={<NotifPasswordChanged />} />
        <Route path="StaffLogin" element={<StaffLogin />} />  
        <Route path="ResidentDashboard" element={<ResidentDashboard />} />
        <Route path="ViewHealthCareHistory" element={<ViewHealthCareHistory />} /> {/* fixed */}
        <Route path="StaffProfile" element={<StaffProfile />} />
        <Route path="AppointmentTab" element={<AppointmentTab />} />
        <Route path="LandingPage" element={<LandingPage />} />
        <Route path="ResidentProfile" element={<ResidentProfile />} />
        <Route path="ResidentProfileStaff" element={<ResidentProfileStaff />} />
        <Route path="HealthRecords" element={<HealthRecords />} />          
        <Route path="FollowUps" element={<FollowUps />} />       
        <Route path="AdminLogin" element={<AdminLogin />} />   
        <Route path="AdminDashboard" element={<AdminDashboard />} />  
        <Route path="AdminProfile" element={<AdminProfile />} />
        <Route path="AdminStaff" element={<AdminStaff />} />
        <Route path="ActiveLogs" element={<ActiveLogs/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
