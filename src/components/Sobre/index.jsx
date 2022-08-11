import React from "react";
import { Element } from "react-scroll";
import { Container } from "./styles";
import perfilimg from "../../assets/img/perfil.png";
const Sobre = () => {
  return (
    <Container id="container-sobre">
      <Element name="sobre" className="content">
        <div className="content-sobre">
          <div className="img-content">
            <img className="img-perfil" src={perfilimg} alt="" />
          </div>
          <div className="descricao-content">
            <h1 className="titulo-sobre">Sobre minha pessoa</h1>
            <p className="descricao">
              “Olá, me chamo Lucas Roque Sousa, tenho 34 anos de idade e sou
              natural de São Paulo. Estou a procura de oportunidades para
              desenvolver, tanto para experiência quanto para renda. Tenho como
              objetivo a área de front-end, que é para mim uma nova jornada. Sou
              pro ativo, tenho muita vontade de aprender, não me acomodo em
              situações difíceis e estou realizando um sonho ao entrar na área
              da tecnológica. Atualmente conclui os cursos de desenvolvedor
              front-end pela Kenzie Academy Brasil e alguns cursos de
              aperfeiçoamento em: React, Flex-box e Grid pela Origamid.
              Atualmente estou cursando Analise e desenvolvimento de sistemas
              pela faculdade Unifatecie.”
            </p>
            <p className="descricao"> - Conhecimento avançados: HTML, CSS.</p>
            <p className="descricao">
              {" "}
              - Conhecimento Intermediário: JS, React.
            </p>
            <p className="descricao">
              - Aprendendo : Redux, Context e TypeScript.
            </p>
            <p className="descricao">
              - Próximas técnologias que pretendo aprender: NodeJs, Mysql,
              MariaDb, ReactNative e Python/Django
            </p>
          </div>
        </div>
      </Element>
    </Container>
  );
};

export default Sobre;
