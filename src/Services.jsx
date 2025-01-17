import React from "react";
import styled from "styled-components";
import data from "./Data/services.json";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Services</h2>

      <div className="container grid grid-three-column">
        {data.map((currElem) => {
          const { id, image, title, description } = currElem;
          return (
            <div className="card" key={id}>
              <figure className="services-image">
                <img src={image} alt="image is not showing" />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/services">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
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
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.3s linear;
    }
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    &:hover {
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
    }
    .card-data {
      padding: 0 2rem;
      text-align: center;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
    .btn {
      margin: 2rem;
    }
  }
`;

export default Services;
