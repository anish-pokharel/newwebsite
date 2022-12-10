import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        <img src="./images/logo.png" alt="" className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0 4.4rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};

  .logo {
    height: auto;
    max-width: 30rem;
  }
`;

export default Header;
