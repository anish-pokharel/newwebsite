import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";

const Service = () => {
  const { service } = useGlobalContext();
  return (
    <Wrapper>
      <h2 className="common-heading"> Our Services </h2>
      <div className="container grid grid-three-column"></div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Service;
