import { StyledApp } from "./style";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GlobalStyle } from "./globalstyled";
import { PiDevToLogoFill } from "react-icons/pi";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <div className="main-container">
          <div className="logo">
          <PiDevToLogoFill color='white' size='40' />
            <h1>Lauremiro</h1>
            <p>
              Desenvolvedor Web <span>Full Stack</span>
            </p>
          </div>
          <div className="buttons">
            <a target="blank" className="button" href="">
              <FaTelegramPlane />
              Falar Comigo
            </a>
            <a target="blank" className="button" href="">
              <FaSitemap />
              Portifolio
            </a>
            <a target="blank" className="button" href="">
              <FaLinkedin />
              Meu linkedIn
            </a>
            <a target="blank" className="button" href="">
              <FaGithub />
              Meu Github
            </a>
          </div>
          <div className="footer">
            <h3>by Lauremiro</h3>
          </div>
        </div>
      </StyledApp>
    </>
  );
}

export default App;
