import styled from "styled-components";

export const StyledApp = styled.main`
  font-family: "Roboto Mono", monospace;
  background-color: #1f0025;
  background-image: linear-gradient(0deg, #1f0025 0%, #d90482 100%);

  width: 100wh;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  .main-container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      h1 {
        color: #ffffff;
        font-size: 1.3rem;
      }
      p {
        color: #e9ecef;
        font-size: .8rem;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
      gap: .6rem;
      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;

        text-decoration: none;
        color: #ffffff;

        border: 1px solid #ffffff;
        border-radius: 26px;

        padding: 1rem 0 1rem 0;
        width: 60%;
      }
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      h3 {
        color: #e9ecef;
        font-size: .8rem;
      }
    }
  }
`;
