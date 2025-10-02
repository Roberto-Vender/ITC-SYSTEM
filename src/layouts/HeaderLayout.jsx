import React from "react";
import { Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <div>
      <header className="bg-indigo-600 text-white p-4">
        <h1>Header Layout</h1>
      </header>
        <Outlet />
    </div>
  );
}

export default HeaderLayout;
