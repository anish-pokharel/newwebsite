import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default Error;
