import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.styles.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="links-container">
        <div className="link-container">
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
        </div>

        <div className="link-container">
          <Link to="/bookings" className="link">
            Bookings
          </Link>
        </div>

        {/* <div className="user">User</div> */}
      </div>
    </div>
  );
};

export default SideBar;
