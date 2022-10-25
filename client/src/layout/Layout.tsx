import Navbar from "components/navbar/Navbar";
import React from "react";
import "layout/layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <div className="layout">
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;
