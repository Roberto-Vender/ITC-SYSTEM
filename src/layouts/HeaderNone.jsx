import React from "react";
import { Outlet } from "react-router-dom";

function HeaderNone() {
  return (
    <div className="min-h-screen bg-[#E3F2FD]">
      <Outlet />
    </div>
  );
}

export default HeaderNone;