import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavBar>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-links" to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to={"/about"}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to={"/service"}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to={"/contact"}>
              contact
            </NavLink>
          </li>
          <div className="mobile-navbar-btn">
            <CgMenu name="menu-outline" className="mobile-nav-icon" />
            <CgCloseR
              name="close-outline"
              className="close-outline mobile-nav-icon"
            />
          </div>
        </ul>
      </div>
    </NavBar>
  );
};
// MediaQueryList

const NavBar = styled.nav`
.navbar-list {
  display: flex;
  gap: 4.8rem;
  
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
  }
  .mobile-navbar-btn {
    display: none;
    .close-outline {
      display: none;
    }
  }
  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    // hide orginal navbarlist

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;
      transform: translateX(100%);
      // visibility: hidden;
      // opacity: 0;
      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
    }
  }
`;
export default Nav;
