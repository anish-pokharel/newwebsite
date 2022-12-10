import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            {" "}
            <NavLink className="navbar-links" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navbar-links" to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navbar-links" to={"/service"}>
              Service
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className="navbar-links" to={"/contact"}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};

const NavBar = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
  }
  li {
    list-style: none;
    .navbar-links {
      $:link,
      $:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        text-transformation: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
`;
export default Nav;
