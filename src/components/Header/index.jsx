import React from "react";
import Nav from "../Nav";
import { Container } from "./styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Header = () => {
  return (
    <Container>
      <div className="content-logo--header">
        <h1 className="title-logo">
          <FaChevronLeft />
          Lucas Roque <p> /</p>
          <FaChevronRight />
        </h1>
      </div>
      <Nav />
    </Container>
  );
};

export default Header;
