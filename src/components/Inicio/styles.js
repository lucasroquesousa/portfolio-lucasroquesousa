import styled from "styled-components";
import imgFundo from "../../assets/img/fundo3.jpg";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${imgFundo});
  background-attachment: fixed;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-color: black;
  box-shadow: inset 0 0 3em black;
  .content-inicio {
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: row;

    .content-wellcome {
      width: 90%;
      height: 450px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: center;
      align-items: flex-start;

      gap: 16px;
      border: 4px solid white;
      border-radius: 8px;
      padding: 30px;
      .content-box--text {
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        align-content: center;
        .sbv {
          font-family: "BioRhyme", serif;
          color: white;
          text-shadow: 2px 2px 4px grey;
          font-size: 35px;
          animation: fadeIn 8s;
          -webkit-animation: fadeIn 8s;
          -moz-animation: fadeIn 8s;
          -o-animation: fadeIn 8s;
          -ms-animation: fadeIn 20s;
        }
      }

      .text-p--inicio {
        width: 90%;
        color: white;
        font-size: 25px;
        text-shadow: 2px 2px 4px grey;
        -webkit-animation: fadeIn 15s;
        -moz-animation: fadeIn 15s;
        -o-animation: fadeIn 15s;
        -ms-animation: fadeIn 10s;
      }
    }

    .div-algum-efeito {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      height: 100%;
    }
    @media (max-width: 1100px) {
      .content-wellcome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 600px;
      }
      .content-box--text {
        width: 90%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
    }
    @media (max-width: 600px) {
      .content-wellcome {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 600px;
        .content-box--text {
          width: 90%;
          font-size: 10px;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          .sbv {
            font-size: 25px;
          }
        }
        .text-p--inicio {
          width: 90%;
          color: white;
          font-size: 20px;
          text-shadow: 2px 2px 4px grey;
          -webkit-animation: fadeIn 15s;
          -moz-animation: fadeIn 15s;
          -o-animation: fadeIn 15s;
          -ms-animation: fadeIn 10s;
        }
      }
    }
    @media (max-width: 460px) {
    }
    .div-algum-efeito {
      background: black;
      border-radius: 8px;
      overflow: hidden;
      max-width: 500px;
      max-height: 500px;

      .gif {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 1100px) {
    .gif {
      max-width: 600px;
      height: 100%;
      object-fit: cover;
    }
  }
  @media (max-width: 640px) {
    .div-algum-efeito {
      max-width: 400px;
      .gif {
        width: 100%;
        max-width: 400px;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
