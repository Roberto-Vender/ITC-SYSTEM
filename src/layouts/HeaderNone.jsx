import React from "react";
import { Outlet } from "react-router-dom";

function HeaderNone() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default HeaderNone;
