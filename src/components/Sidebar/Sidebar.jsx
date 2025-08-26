import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center w-48 min-h-screen bg-[repeating-linear-gradient(90deg,#f9f9f9,#f9f9f9_20px,#ffffff_20px,#ffffff_40px)]">
      {/* Logo */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="Vector 2.png"
          alt="Logo"
          className="w-10 h-10 mb-2"
        />
        <h2 className="font-semibold text-gray-800 text-sm">Small Copper</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 text-gray-700 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "font-semibold text-orange-600" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "font-semibold text-orange-600" : ""
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "font-semibold text-orange-600" : ""
            }`
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "font-semibold text-orange-600" : ""
            }`
          }
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-orange-500 transition ${
              isActive ? "font-semibold text-orange-600" : ""
            }`
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
