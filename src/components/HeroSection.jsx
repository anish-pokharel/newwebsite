import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">This is me</p>
          <h1 className="hero-hading">ANIsh POKHAREL</h1>
          <p className="hero-para">i m anish pokharel</p>
          <Button className="btn hire-me-btn">
            <NavLink to="/contact" />
            Hireme
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src="./images/hero.svg" alt="" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default HeroSection;
