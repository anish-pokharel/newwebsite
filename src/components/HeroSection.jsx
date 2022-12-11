import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is me</p>
          <h1 className="hero-hading">ANIsh</h1>
          <p className="hero-para">i m anish pokharel</p>
          <button className="btn hire-me-btn">Hireme</button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="" alt="" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default HeroSection;
