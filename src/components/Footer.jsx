import React from "react";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready To grt started</h3>
              <h3>Talk to us today</h3>
            </div>
            <div className="contact-short-btn">
              <NavLink to="/">
                <Button>Get Started</Button>
              </NavLink>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section``;
export default Footer;
