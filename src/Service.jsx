import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./Context";
import { data } from "./data/Servicedata";

const Service = () => {
  const { service } = useGlobalContext();

  return (
    <Wrapper>
      <h2 className="common-heading"> Our Services </h2>
      <div className="container grid grid-three-column">
        {data.map((curElem) => {
          const { id, title, cover, description } = curElem;
          return (
            <div className="card" key={id}>
              <figure>
                <img src={cover} alt={title} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default Service;
