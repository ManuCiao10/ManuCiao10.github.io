import "./App.css";
import img from "../img/globe-dark.png";

import Header from "./Header";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

// import svg_ from "../img/statistics.svg";
//<img src={svg_} alt="svg" className="svg_" draggable="false" />

function Separator() {
  return (
    <div className="separator-wrapper">
      <div className="separator">
        <span className="path-line"></span>
        <div className="section-label">
          <span className="section-label_number">1</span>
          <h3 className="section-label_title">
            <span className="section-label_phrase"></span>
          </h3>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="main-part">
      <Header />

      <div className="App">
        <div className="title-bio noHover noselect">
          Your vision<br></br>
          <span className="title-bio-span noHover noselect">my execution</span>
        </div>
        <p className="agency-intro noHover noselect"></p>
        <div className="grid-main noHover noselect">
          <a className="block-link">
            <img src={img} alt="globe" className="globe" draggable="false" />
          </a>
          <div className="grid-text">
            <h1 className="grid-title noHover noselect"></h1>
            <p className="grid-desc noHover noselect">
              Your online presence to the next level.
            </p>

            <button className="button-get">Get in touch</button>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}

export default App;

/*

0. [x] Add another page space for the projects
1. [+] Domain
2. [+] Clean the code adding functions and components
*/
