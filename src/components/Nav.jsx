import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/contact"}>contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
