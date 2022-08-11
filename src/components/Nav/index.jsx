import React from "react";
import { Container } from "./styles";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Nav = () => {
  return (
    <>
      <Container>
        <ul className="ul-content">
          <li className="li-nav">
            <Link to="inicio" className="link-style" smooth={true}>
              Inicio
            </Link>
          </li>
          <li className="li-nav">
            <Link to="projetos" className="link-style" smooth={true}>
              Projetos
            </Link>
          </li>
          <li className="li-nav">
            <Link to="sobre" className="link-style" smooth={true}>
              Sobre
            </Link>
          </li>
          <li className="li-nav">
            <Link className="link-style" to="contato" smooth={true}>
              Contato
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default Nav;
