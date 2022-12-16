import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { data } from "./data/Servicedata";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";

const Service = () => {
  // const { service } = useGlobalContext();

  return (
    <Wrapper>
      <h2 className="common-heading"> Our Services </h2>
      <div className="container grid grid-three-column">
        {data.map((curElem) => {
          const { id, title, cover, desc } = curElem;
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
const Wrapper = styled.section``;

export default Service;
