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
import ViewHealthcareHistory from "../pages/ViewHealthCareHistory";
import ForgotPassword from "../pages/ForgotPassword";
import Checkmail from "../pages/Checkmail";
import CreateNewPassword from "../pages/CreateNewPassword";
import NotifPasswordChanged from "../pages/NotifPasswordChaged";
import StaffLogin from "../pages/StaffLogin";
import CitizenProfile from "../pages/CitizenProfile";




const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
      </Route>
    
        <Route element={<HeaderNone />}>
            <Route path="/" element={<CitizenLogin />} />
            <Route path="CitizenLogin" element={<CitizenLogin />} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="RegisterNewCitizen" element={<RegisterNewCitizen />} />
            <Route path="IdentifyCitizen" element={<IdentifyCitizen />} />
            <Route path="EditCitizenProfile" element={<EditCitizenProfile />} />
            <Route path="ViewHealthcareHistory" element={<ViewHealthcareHistory />} />
            <Route path="ForgotPassword" element={<ForgotPassword />} />
            <Route path="Checkmail" element={<Checkmail />} /> 
            <Route path="CreateNewPassword" element={<CreateNewPassword />} />
            <Route path="NotifPasswordChanged" element={<NotifPasswordChanged />} />
            <Route path="StaffLogin" element={<StaffLogin />} />
            <Route path="CitizenProfile" element={<CitizenProfile />} />
        

      </Route>
</Routes>
  );
};

export default AppRoutes;
