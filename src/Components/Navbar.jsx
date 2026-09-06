import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
        Shop
      </NavLink>
      <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
        Admin Portal
      </NavLink>
    </nav>
  );
}

export default Navbar;