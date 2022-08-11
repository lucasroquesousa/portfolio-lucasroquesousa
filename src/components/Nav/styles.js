import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  .ul-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    list-style: none;

    .link-style {
      color: white;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      letter-spacing: 3px;
      transition: 1s;
      :hover {
        color: aquamarine;
        border-bottom: 1px solid aquamarine;
        border-radius: 3px;
        transition: 0.5s;
      }
    }
    @media (max-width: 420px) {
      width: 300px;
      margin-top: 16px;
      margin-bottom: 16px;
      .ul-content {
        width: 300px;
      }
      .link-style {
        font-size: 12px;
      }
    }
  }
`;
