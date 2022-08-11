import React from "react";
import Header from "../components/Header";
import Contato from "../components/Contato";
import Inicio from "../components/Inicio";
import Projetos from "../components/Projetos";
import Sobre from "../components/Sobre";

const HomePage = () => {
  return (
    <>
      <Header />
      <Inicio />
      <Projetos />
      <Sobre />
      <Contato />
    </>
  );
};

export default HomePage;
