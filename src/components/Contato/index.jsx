import React from "react";
import { Element } from "react-scroll";
import { Container } from "./styles";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from "react-icons/fa";
const Contato = () => {
  return (
    <Container>
      <Element name="contato" className="content-geral">
        <div className="content">
          <h2 className="titulo-contato">Meus Contatos</h2>
          <div className="content-links">
            <a
              target="blank"
              href="https://www.linkedin.com/in/lucas-roque-sousa-5619761b7/"
            >
              <FaLinkedin className="icons linkedin" />
            </a>
            <a target="blank" href="https://github.com/lucasroquesousa">
              <FaGithubSquare className="icons github" />
            </a>
            <a target="blank" href="HTTPS://wa.me/5577991667026">
              <FaWhatsappSquare className="icons wtspp" />
            </a>
          </div>
        </div>
      </Element>
    </Container>
  );
};

export default Contato;
