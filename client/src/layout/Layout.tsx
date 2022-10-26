import Navbar from "components/navbar/Navbar";
import React from "react";
import "layout/layout.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout-container">
      <div className="layout">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
