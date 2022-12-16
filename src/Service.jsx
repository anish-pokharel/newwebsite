import React from "react";
import styled from "styled-components";
// import { useGlobalContext } from "./Context";
import { data } from "./data/Servicedata";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Service = () => {
  // const { service } = useGlobalContext();

  return (
    <Wrapper>
      <h2 className="common-heading"> Our Services </h2>
      <div className="container grid grid-three-column">
        {data.map((curElems) => {
          const { id, title, cover, desc } = curElems;
          return (
            <>
              <div className="card" key={id}>
                <figure>
                  <img src={cover} alt={title} />
                </figure>
                <div className="card-data">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <NavLink to="/service">
                    <Button className="btn">Read More</Button>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 1px solid black;
  }
  .card-data {
    paading: 0 2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
  }
`;

export default Service;
