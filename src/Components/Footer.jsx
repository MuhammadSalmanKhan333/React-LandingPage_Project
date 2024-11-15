import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
// import { IconName } from "react-icons/fa6";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="short-info">
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div>
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
            <h3>Muhammad Salman</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>

          {/* 2nd Column */}
          <div className="footer-subscription">
            <h3>Subscribe to stay updated!</h3>
            <form action="#">
              <input type="email" name="email" placeholder="Enter your email" />
              <input className="btn" type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rd Column  */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaGithub className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
            </div>
          </div>

          {/* 4th Column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+92300 1234567</h3>
          </div>
        </div>

        <div className="footer-bottom-section">
          <hr />
          <div className="container grid grid-two-column footer-bottom">
            <p>
              Copyright &copy; {new Date().getFullYear()} by Muhammad Salman.
            </p>
            <div>
              <p>Designed By: Muhammad Salman</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .contact-short {
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 3.5rem 10rem;
    text-align: center;
    max-width: 65vw;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }

    .short-info h3 {
      padding-right: 19rem;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    form .btn {
      &:hover {
        transition: transform 0.4s ease-in-out;
        background-color: ${({ theme }) => theme.colors.btnHover};
        transform: scale(0.95);
      }
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
    }
    .icons {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.white};
      transition: color 0.3s ease-in-out;
      &:hover {
        color: aqua;
      }
    }
  }

  .footer-bottom-section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    .footer-bottom {
      text-align: center;
      height: 1.5rem;
    }
  }
`;

export default Footer;
