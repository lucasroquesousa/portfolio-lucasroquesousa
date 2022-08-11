import { Container } from "./styles";
import { Element } from "react-scroll";
import wolfbeats from "../../assets/img/wolfbeast.png";
import flexblog from "../../assets/img/flexblog.png";
import dataBaseHuk from "../../assets/img/dataBaseHub.png";
import emBreve from "../../assets/img/Em.png";

function Projetos() {
  return (
    <Container className="teste">
      <Element className="content-element" name="projetos">
        <div className="card-box">
          <div className="card">
            <div className="div-img--card">
              <img className="imgcard" src={dataBaseHuk} alt="" />
            </div>
            <p className="text-description">
              Site responsivo criado em react, ultilizando hook form e yup com a
              ultilização de api. A função deste projeto é listas as skills de
              um desenvolvedor.
            </p>
            <a
              target="blank"
              href="https://react-entrega-s2-kenzie-hub-lucasroq-git-5b49c0-lucasroquesousa.vercel.app/"
              className="btn-card"
            >
              Ir
            </a>
          </div>

          <div className="card">
            <div className="div-img--card">
              <img className="imgcard" src={wolfbeats} alt="" />
            </div>
            <p className="text-description">
              Este projeto contém toda a estrutura em display grid, o Site é
              totalmente responsivo tornando melhor a experiência do usuário
            </p>
            <a
              target="blank"
              href="https://grid-sections-lucasroquesousa.vercel.app/"
              className="btn-card"
            >
              Ir
            </a>
          </div>

          <div className="card">
            <div className="div-img--card">
              <img className="imgcard" src={flexblog} alt="" />
            </div>
            <p className="text-description">
              Este projeto foi realizado com apenas Html e Css e o objetivo é
              demonstrar como pde ser feita uma estilização responsiva
              ultilizando apenas flex-box.
            </p>
            <a
              target="blank"
              href="https://flex-box-responsive-lucasroquesousa.vercel.app/"
              className="btn-card"
            >
              Ir
            </a>
          </div>
          <div className="card">
            <div className="div-img--card">
              <img className="imgcard" src={emBreve} alt="" />
            </div>
            <p className="text-description">Em breve mais projetos...</p>
            <a target="blank" href="#" className="btn-card">
              Ir
            </a>
          </div>
        </div>
      </Element>
    </Container>
  );
}

export default Projetos;
