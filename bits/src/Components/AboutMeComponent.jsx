import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

export default function AboutMeComponent() {
  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <NavbarComponent />
        <hr></hr>
        <div className="background">
          <div className="background-fade"></div>
          <div className="background-image"></div>
        </div>
        <div className="titulo">
          <b>
            <u>
              <h1>Un poco sobre mi...</h1>
            </u>
          </b>
        </div>
        <div className="texto">
          <p>
            Apasionado por la informática y la programación, comencé mis
            estudios de Ingeniería Civil en Informática en el año 2020. Me
            interesan las areas relacionadas a la programación, principalmente
            en Python y Java, el desarrollo web utilizando React JS, CSS y
            JavaScript y el desarrollo de aplicaciones Full Stack utilizando
            React JS, Java y MySQL.
          </p>
          <p>
            A lo largo de mis estudios he realizado diversas ayudantías, donde
            enseñé a estudiantes temás principales como la Programación en
            Python, el desarrollo de aplicaciones Mónoliticas y Full Stack,
            entre otras. También, he desarollado diversas habilidades, como el
            trabajo en equipo, la lideración y gestión de un equipo de trabajo,
            entre otras.
          </p>
          <p>
            Como datos adicionales, tengo un manejo bastante bueno en inglés,
            lenguaje que comencé a utilizar a corta edad y que hoy en día leo e
            incluso hablo todos los días. Algún día planeo viajar a Canada.
            Siento que cada día puedo aprender máz y que puedo utilizar las
            herramientas y habilidades que he obtenido a lo largo de estos años
            para desarrollar distintas aplicaciones de Software.
          </p>
        </div>
        <Footer />
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
  .titulo {
    padding-right: 750px;
    padding-top: 30px;
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
      url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mt.Fuji_from_Kitadake-sansou_01.jpg/1600px-Mt.Fuji_from_Kitadake-sansou_01.jpg?20070807114437);
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

  .texto {
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
  }
`;
