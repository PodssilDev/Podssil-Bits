import React from "react";
import styled from "styled-components";

function NavbarComponent() {
  return (
    <>
      <NavStyle>
        <nav className="sticky"></nav>
        <header class="header">
          <div class="logo">
            <a class="btn" href="/">
              <button>Homepage</button>
            </a>
            <a class="btn" href="/about-me">
              <button>Sobre Mi</button>
            </a>
            <a class="btn" href="/projects">
              <button>Proyectos</button>
            </a>
            <a class="btn" href="/experience">
              <button>Experiencia y Certificaciones</button>
            </a>
          </div>
          <nav></nav>
        </header>
      </NavStyle>
    </>
  );
}

export default NavbarComponent;

const NavStyle = styled.nav`
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
  }

  .header .logo {
    margin-right: auto;
    color: white;
    display: flex;
    align-items: center;
    margin-left: 150px;
  }

  .header .btn button {
    margin-left: 20px;
    font-weight: 700;
    color: #1b3039;
    padding: 9px 25px;
    background: #eceff1;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  .header .btn button:hover {
    background-color: #e2f1f8;
    color: #ffbc0e;
    transform: scale(1.1);
  }

  .header .clock {
    margin-top: 20px;
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
  }

  .header .puntaje {
    margin-left: 80px;
    font-weight: 700;
    text-align: center;
    color: #eceff1;
  }
`;
