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
            <a target="blank" className="button" href="https://t.me/+5599991598763">
              <FaTelegramPlane />
              Falar Comigo
            </a>
            <a target="blank" className="button" href="https://portifolio-nine-red.vercel.app/">
              <FaSitemap />
              Portifolio
            </a>
            <a target="blank" className="button" href="https://www.linkedin.com/in/marcos-lauremiro-melo-silva/">
              <FaLinkedin />
              Meu linkedIn
            </a>
            <a target="blank" className="button" href="https://github.com/MarcosLauremiro">
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
