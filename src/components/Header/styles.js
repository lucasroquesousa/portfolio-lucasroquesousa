import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background: transparent;
  height: 80px;
  position: fixed;
  background-image: linear-gradient(179deg, #0000008c, transparent);
  .content-logo--header {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 16px;
  }
  .title-logo {
    color: white;
    font-family: "BioRhyme", serif;
    font-size: 35px;
    text-shadow: 0px 2px 2px grey;
    display: flex;
    align-items: center;
  }
  .icon-header {
    width: 35px;
    transition: 0.8s;
    cursor: pointer;
    :hover {
      box-shadow: 0px 0px 8px aquamarine;
      border-radius: 100px;
    }
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
  }
`;
