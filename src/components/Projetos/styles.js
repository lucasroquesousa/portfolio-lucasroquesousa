import styled from "styled-components";
import fundoprojetos from "../../assets/img/fundoprojetos.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: black;
  box-shadow: 0px 0px 8px black;
  background-image: url(${fundoprojetos});
  background-attachment: fixed;
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-color: black;
  display: flex;

  align-items: center;

  .content-element {
    padding: 16px;
    width: 100%;
    margin-top: 30px;
    height: 100%;
    display: flex;
    flex-direction: row;

    align-items: center;
    border-radius: 10px;
    gap: 16px;
    .card-box {
      display: flex;
      align-content: center;
      align-items: center;
      width: 95%;
      overflow-y: hidden;
      gap: 30px;
      .card {
        width: 300px;
        min-width: 300px;
        height: 400px;
        gap: 16px;
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: rgba(0, 0, 0, 0.5802696078431373);
        padding: 30px;
        box-shadow: 0px 0px 8px black;
        border-radius: 10px;

        .div-img--card {
          height: 50%;
          .imgcard {
            width: 100%;
            height: 200px;
          }
        }
        .text-description {
          color: white;
          letter-spacing: 1px;
          font-weight: 700;
          line-height: 1.3;
        }
        .btn-card {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
          width: 100px;
          height: 30px;
          border-radius: 8px;
          border: none;
          background: linear-gradient(
            135deg,
            rgba(33, 3, 88, 1) 0%,
            rgba(101, 15, 171, 1) 100%
          );
          font-size: 20px;
          color: white;
          font-weight: 600;
          letter-spacing: 2px;
          transition: ease-in-out 0.4s;
          :hover {
            background: linear-gradient(
              135deg,
              rgba(101, 15, 171, 1) 0%,
              rgba(33, 3, 88, 1) 100%
            );
            box-shadow: 0px 0px 10px white;
          }
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    height: 90%;
  }
`;
