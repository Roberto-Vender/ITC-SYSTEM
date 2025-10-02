import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderLayout from "../layouts/HeaderLayout";
import HeaderNone from "../layouts/HeaderNone";
import PatientLogin from "../pages/patientlogin"; 
import CreateAccount from "../pages/CreateAccount";
import CitizenLogin from "../pages/Citizenlogin";
import Dashboard from "../pages/Dashboard";
import RegisterNewCitizen from "../pages/RegisterNewCitizen";
import IdentifyCitizen from "../pages/IdentifyCitizen";
import EditCitizenProfile from "../pages/EditCitizenProfile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
      </Route>
    
        <Route element={<HeaderNone />}>
            <Route path="/" element={<PatientLogin />} />
            <Route path="CreateAccount" element={<CreateAccount />} />
            <Route path="CitizenLogin" element={<CitizenLogin />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="RegisterNewCitizen" element={<RegisterNewCitizen />} />
            <Route path="IdentifyCitizen" element={<IdentifyCitizen />} />
            <Route path="EditCitizenProfile" element={<EditCitizenProfile />} />
      </Route>
</Routes>
  );
};

export default AppRoutes;
