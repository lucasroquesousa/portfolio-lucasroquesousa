import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 250px;
  background: black;
  box-shadow: 0px 0px 30px rgba(59, 3, 117, 1);
  .content-geral {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      width: 100%;
      flex-direction: column;
      gap: 16px;
      .titulo-contato {
        color: white;
      }
      .content-links {
        display: flex;
        gap: 16px;
        .icons {
          width: 45px;
          height: 45px;
        }
        .linkedin {
          color: blue;
          transition: ease-in-out 0.5s;
          :hover {
            background: white;
            border-radius: 4px;
            box-shadow: 0px 0px 8px whitesmoke;
          }
        }
        .github {
          color: blueviolet;
          transition: ease-in-out 0.5s;
          :hover {
            background: white;
            border-radius: 4px;
            box-shadow: 0px 0px 8px whitesmoke;
          }
        }
        .wtspp {
          color: green;
          transition: ease-in-out 0.5s;
          :hover {
            background: white;
            border-radius: 4px;
            box-shadow: 0px 0px 8px whitesmoke;
          }
        }
      }
    }
  }
`;
