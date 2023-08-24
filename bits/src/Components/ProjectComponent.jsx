import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import prolog from "./images/pluginIcon.png";

export default function ProjectComponent() {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={prolog} />
          <Card.Body>
            <Card.Title>LABORATORIO 2: PARADIGMAS DE PROGRAMACIÓN</Card.Title>
            <Card.Text>
              Proyecto que busca recrear una aplicación similar a Google Docs en
              la Programación Lógica.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Lenguaje: Prolog</ListGroup.Item>
            <ListGroup.Item>Año de Creación: 2021</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://github.com/PodssilDev/Paradigmas_Laboratorio_2_Prolog">
              Repositorio Github
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={prolog} />
          <Card.Body>
            <Card.Title>LABORATORIO 3: PARADIGMAS DE PROGRAMACIÓN</Card.Title>
            <Card.Text>
              Proyecto que busca recrear una aplicación similar a Google Docs en
              la Programación Orientada a Objetos.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Lenguaje: Java</ListGroup.Item>
            <ListGroup.Item>Año de Creación: 2021</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://github.com/PodssilDev/Paradigmas_Laboratorio_2_Prolog">
              Repositorio Github
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
