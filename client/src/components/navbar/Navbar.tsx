import React from "react";
import "components/navbar/navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_left">
          <a>Home</a>
          <a>About</a>
        </div>
        <div className="navbar-links_right">
          <a>Sign Up</a>
          <a>Sign In</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
