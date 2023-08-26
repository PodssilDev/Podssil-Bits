import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'
import kris from "./images/kris.jpeg";
import talca from "./images/talca.jpg";


export default function HomeComponent() {
  return (
    <div>
        <GlobalStyle/>
      <HomeStyle>
        <div className="background">
            <div className="background-fade"></div>
            <div className="background-image"></div>
        </div>
        <h1 className="text-center">
          <b>
            {" "}
            <i>
              {" "}
              <u>PodssilDev</u>
            </i>
          </b>
        </h1>
        <img src = {kris} width = "10%" height = "10%" alt = "" ></img>
        <h3 className="text-center">
          {" "}
          
            Estudiante de Ingeniería Civil en Informática de la <a href = "https://www.usach.cl/">Universidad de Santiago de Chile.</a><br></br>
            Actualmente en 4to año de la carrera.
        </h3>
        <br></br>
        <u><a href = "/projects"><h1><li type="square">Proyectos.</li></h1></a></u>
        <u><a href = "test"><h1><li type="square">Experiencia y Certificaciones.</li></h1></a></u>
        <h3>Un poco sobre mi...</h3>
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
a {
    color: #eee;
    font-weight: 600;
  }
.facil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.dificil{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.medio{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
}

.nueva-pregunta{
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FDFEFE;
    background-color: #1F618D;
    border-radius: 25px;
    padding: 20px;
    width: 60%;
    margin: auto;
    border: 5px solid #FDFEFE;
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
    background: no-repeat center url(https://womondoo.com/_next/image?url=https%3A%2F%2Fmedia.womondoo.com%2Fmedia%2Fimages%2Fmuralla-china.2e16d0ba.fill-1200x768.jpg&w=3840&q=75);
    background-size: cover;
}

.background-fade {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(51, 51, 51);
    background: linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 0) 80%, rgba(51, 51, 51, 1) 100%);
}
`;