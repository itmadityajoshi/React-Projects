import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex  items-center justify-between  container mx-auto mt-3">
        <div>
          <img src="/photos/brand_logo.png" alt="brand_logo" srcset="" />
        </div>

        <div>
          <ul className="flex gap-6 font-bold text-xl">
            <li>
              {" "}
              <NavLink to="/">HOME </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/location">LOCATION </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/about">ABOUT </NavLink>{" "}
            </li>
            <li>
              {" "}
              <NavLink to="/contact">CONTACT</NavLink>{" "}
            </li>
          </ul>
        </div>

        <div>
          <button className="bg-red-500 text-white text-xl font-[500] px-4 py-1.5">
            {" "}
            Login{" "}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
