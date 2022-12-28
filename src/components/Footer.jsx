import React from "react";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

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
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Anish POKHAREL</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                facere!
              </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follows Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaDiscord className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                    target="_blank"
                  >
                    <FaYoutube className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="fotter-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>
                @{new Date().getFullYear()} Anish Pokharel.All right Reserrved
              </p>
              <div>
                <p>PROVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
`;
export default Footer;
