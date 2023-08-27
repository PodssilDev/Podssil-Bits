import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import kris from "./images/kris.jpeg";
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";
import gmail from "./images/gmail.png";

export default function HomeComponent() {
  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <div className="background">
          <div className="background-fade"></div>
          <div className="background-image"></div>
        </div>
        <div className="separacion"></div>
        <h1 className="text-center">
          <b>
            <i>
              <u>¡Hola! Soy PodssilDev</u>
            </i>
          </b>
        </h1>
        <img src={kris} width="10%" height="10%" alt=""></img>
        <h3 className="text-center">
          Estudiante de Ingeniería Civil en Informática de la
          <a href="https://www.usach.cl/">Universidad de Santiago de Chile.</a>
        </h3>
        <div className="socials">
          <a href="https://github.com/PodssilDev">
            <img src={github} width="50" height="50"></img>
          </a>
          <a href="https://www.linkedin.com/in/john-serrano-carrasco-567b3926a/">
            <img src={linkedin} width="50" height="50"></img>
          </a>
          <a href="mailto:john.serrano@usach.cl">
            <img src={gmail} width="50" height="50"></img>
          </a>
        </div>
        <br></br>
        <u>
          <a href="/about-me">
            <h1>
              <li type="square">Sobre Mi</li>
            </h1>
          </a>
        </u>
        <u>
          <a href="/projects">
            <h1>
              <li type="square">Proyectos</li>
            </h1>
          </a>
        </u>
        <u>
          <a href="/experience">
            <h1>
              <li type="square">Experiencia y Certificaciones</li>
            </h1>
          </a>
        </u>
      </HomeStyle>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    font-family: "Plus Jakarta Sans", sans-serif;
    background-color: #333;
    color: #eee;
    line-height: 1.777777778;
}
`;

const HomeStyle = styled.nav`
  .text-center {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
  }

  .separacion {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  a {
    color: #eee;
    font-weight: 600;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.15;
  }

  .background-image {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: no-repeat center
      url(https://womondoo.com/_next/image?url=https%3A%2F%2Fmedia.womondoo.com%2Fmedia%2Fimages%2Fmuralla-china.2e16d0ba.fill-1200x768.jpg&w=3840&q=75);
    background-size: cover;
  }

  .background-fade {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(51, 51, 51);
    background: linear-gradient(
      180deg,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 0) 80%,
      rgba(51, 51, 51, 1) 100%
    );
  }
`;
