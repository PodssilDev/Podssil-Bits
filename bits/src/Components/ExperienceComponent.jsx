import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import github from "./images/github.png";
import javascript from "./images/javascript.png";
import react from "./images/react.png";
import css from "./images/css.png";
import html from "./images/html.png";
import java from "./images/java-logo.png";
import springboot from "./images/springboot.png";
import mysql from "./images/mysql.png";
import postgresql from "./images/postgresql.png";
import docker from "./images/docker.png";
import k8 from "./images/k8.png";
import jenkins from "./images/jenkins.png";
import aws from "./images/aws.png";
import digitalocean from "./images/digitalocean.png";
import R from "./images/R.png";
import python from "./images/python.png";

export default function ExperienceComponent() {
  return (
    <div>
      <NavbarComponent />
      <GlobalStyle />
      <hr></hr>
      <HomeStyle>
        <div className="background">
          <div className="background-fade"></div>
          <div className="background-image"></div>
        </div>
        <div className="titulo">
          <u>
            <b>
              <h1>Experiencia</h1>
            </b>
          </u>
        </div>
        <div className="experiencia">
          <h3>
            <li type="square">
              <b>Ayudante de Técnicas y Métodos de Ingeniería de Software</b>
            </li>
          </h3>
          <h4>
            <b>Departamento de Ingeniería en Informática - USACH</b>
          </h4>
          <h5>
            <b>Marzo 2023 - Julio 2023</b>
          </h5>
          <br></br>
          <div className="tecnologias">
            <a href="https://github.com/PodssilDev/ayudantias-tingeso-mingeso">
              <img src={github} width="40" height="40"></img>
            </a>
            <img src={javascript} width="40" height="40"></img>
            <img src={react} width="40" height="40"></img>
            <img src={html} width="40" height="40"></img>
            <img src={css} width="40" height="40"></img>
            <img src={java} width="40" height="40"></img>
            <img src={springboot} width="40" height="40"></img>
            <img src={mysql} width="40" height="40"></img>
            <img src={postgresql} width="40" height="40"></img>
            <img src={docker} width="40" height="40"></img>
            <img src={k8} width="40" height="40"></img>
            <img src={jenkins} width="40" height="40"></img>
            <img src={aws} width="40" height="40"></img>
            <img src={digitalocean} width="40" height="40"></img>
          </div>
          <br></br>
          <h3>
            <li type="square">
              <b>Ayudante de Estadística Computacional</b>
            </li>
          </h3>
          <h4>
            <b>Departamento de Ingeniería en Informática - USACH</b>
          </h4>
          <h5>
            <b>Agosto 2022 - Julio 2023</b>
          </h5>
          <br></br>
          <div className="tecnologias2">
            <img src={R} width="40" height="40"></img>
          </div>
          <br></br>
          <h3>
            <li type="square">
              <b>Ayudante de Fundamentos de Programación Para Ingeniería</b>
            </li>
          </h3>
          <h4>
            <b>Facultad de Ingeniería - USACH</b>
          </h4>
          <h5>
            <b>Agosto 2022 - Diciembre 2022</b>
          </h5>
          <br></br>
          <div className="tecnologias2">
            <a href="https://github.com/PodssilDev/Ayudantia_FPI_E-3_2022-2">
              {" "}
              <img src={github} width="40" height="40"></img>
            </a>
            <img src={python} width="40" height="40"></img>
          </div>
        </div>
        <div className="titulo">
          <u>
            <b>
              <h1>Certificaciones</h1>
            </b>
          </u>
        </div>
        <br></br>
        <div className="certificaciones">
          <u>
            <h3>
              <li type="square">
                <b>
                  <a href="https://www.udemy.com/certificate/UC-1918722e-5099-4c2e-8e61-a09cd86ce214/">
                    CSS And Javascript Crash Course - Udemy. 23 de Agosto de
                    2023.
                  </a>
                </b>
              </li>
            </h3>
          </u>
          <u>
            <h3>
              <li type="square">
                <b>
                  <a href="https://www.credly.com/badges/6be29416-c494-482a-8ec0-f605a4bae9e9/linked_in_profile">
                    Docker Essentials: A Developer Introduction - IBM. 18 de
                    Marzo de 2023.
                  </a>
                </b>
              </li>
            </h3>
          </u>
          <u>
            <h3>
              <li type="square">
                <b>
                  <a href="https://www.efset.org/cert/f1F5SG">
                    EFSET English Certificate 73/100 (C2 Proficient) - EF
                    Standard English Test (EF SET). 28 de Febrero de 2023.
                  </a>
                </b>
              </li>
            </h3>
          </u>
          <u>
            <h3>
              <li type="square">
                <b>
                  <a href="https://www.udemy.com/certificate/UC-999cf23e-b5be-463e-bdb1-c110b0fda9d5/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email">
                    R Studio: Empieza desde cero - Udemy. 27 de Agosto de 2022.
                  </a>
                </b>
              </li>
            </h3>
          </u>
          <u>
            <h3>
              <li type="square">
                <b>
                  <a href="https://www.udemy.com/certificate/UC-a35e1c32-af56-4052-9bac-038d779e9a5d/">
                    Python3 For Absolute Beginners From Scratch to Advance Level
                    - Udemy. 09 de Agosto de 2022.
                  </a>
                </b>
              </li>
            </h3>
          </u>
          <u>
            <h3>
              <li type="square">
                <b>
                  <a href="https://www.sololearn.com/certificates/CT-NLIOXVVQ">
                    Python Core - Sololearn. 10 de Febrero de 2020.
                  </a>
                </b>
              </li>
            </h3>
          </u>
        </div>
        <br></br>
      </HomeStyle>
      <Footer />
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
      url(https://dianashealthyliving.com/wp-content/uploads/2019/06/Canadian-Landmarks-Alberta.jpg);
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

  .titulo {
    padding-right: 850px;
    padding-top: 30px;
  }

  .experiencia {
    text-align: left;
    padding-top: 30px;
    padding-left: 100px;
  }

  .tecnologias {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    padding-right: 600px;
  }

  tecnologias2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: left;
    padding-right: 600px;
  }

  .certificaciones {
    text-align: left;
    padding-top: 30px;
    padding-left: 100px;
  }

  a {
    color: #eee;
  }
`;
