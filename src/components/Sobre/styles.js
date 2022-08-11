import styled from "styled-components";
import imgsobre from "../../assets/img/imgSobre.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${imgsobre});
  background-attachment: fixed;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-color: black;
  box-shadow: 0px 0px 30px black;

  .titulo-sobre {
    color: white;
    text-align: center;
    height: 40px;
    text-shadow: 1px 1px 3px black;
  }

  .content {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 50px;
    height: 100%;

    .img-perfil {
      width: 300px;
      border-radius: 100%;
    }

    .content-sobre {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    }

    .descricao-content {
      display: flex;
      width: 90%;
      flex-direction: column;
      gap: 16px;
      background: rgba(0, 0, 0, 0.7);
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0px 0px 8px black;
      .descricao {
        font-size: 16px;
        font-weight: 600;
        color: white;
        text-shadow: 1px 1px 3px black;
        line-height: 1.7;
        letter-spacing: 4px;
        width: 90%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;

    flex-wrap: wrap;
    height: 100%;
    padding-top: 30px;
    padding-bottom: 30px;

    .container-sobre {
      height: 100%;
    }
    .content {
      .content-sobre {
        min-width: 310px;
        height: 100%;
        display: flex;
        flex-direction: column;

        justify-content: flex-start;
        gap: 30px;

        .img-perfil {
          width: 250px;
        }
      }
    }
  }
`;
