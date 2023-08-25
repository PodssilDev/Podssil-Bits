import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import proyectos from "./jsons/projects.json";
import ProjectCardComponent from "./ProjectCardComponent";


export default function ProjectComponent() {
  return (
    <div>
        <GlobalStyle/>
    <HomeStyle> 
        <div className="background">
            <div className="background-fade"></div>
            <div className="background-image"></div>
        </div>
        <div className = "proyectos">
      {proyectos.map(projects => {
                    return(
                                    <ProjectCardComponent id={projects.id} img_url={projects.img_url} titulo={projects.titulo} descripcion={projects.descripcion} lenguaje={projects.lenguaje} anio= {projects.anio} url_repo={projects.url_repo}></ProjectCardComponent>
                            );})}
                            </div>
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
  background: no-repeat center url(https://exploreshizuoka.jp/wp-content/uploads/2022/04/003867-scaled.jpg);
  background-size: cover;
}

.background-fade {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(51, 51, 51);
  background: linear-gradient(180deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 0) 80%, rgba(51, 51, 51, 1) 100%);
}
.proyectos{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
`;