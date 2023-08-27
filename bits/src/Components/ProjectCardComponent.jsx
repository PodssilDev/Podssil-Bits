import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import github from "./images/github.png";

export default function ProjectCardComponent({
  id,
  img_url,
  titulo,
  descripcion,
  lenguaje,
  anio,
  url_repo,
}) {
  return (
    <div>
      <GlobalStyle />
      <HomeStyle>
        <div className="main">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={img_url} />
            <Card.Body>
              <Card.Title>
                <b>
                  <h4>{titulo}</h4>
                </b>
              </Card.Title>
              <hr></hr>
              <Card.Text>{descripcion}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                {" "}
                {lenguaje.map((lang, key) => {
                  return (
                    <div className="langs">
                      <div key={key}>
                        <img src={lang} width="30" height="30"></img>
                      </div>
                    </div>
                  );
                })}
              </ListGroup.Item>
              <ListGroup.Item>Año de Creación: {anio}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href={url_repo}>
                <img src={github} width="30" height="30"></img>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </HomeStyle>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
body {
    font-family: "Plus Jakarta Sans", sans-serif;
    background-color: #333;
    color: #000000;
    line-height: 1.777777778;
}
`;

const HomeStyle = styled.nav`
  .main {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
  }
  .card {
    background-color: #34495e !important;
  }
  .list-group-item {
    background-color: #34495e !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .langs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;