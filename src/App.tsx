import "./App.css";
import img from "../img/globe-dark.png";
import logo from "../img/favicon.png";

// import Header from "./Header";
//add backgroud images
import background from "../img/background.png";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import ReactTooltip from "react-tooltip";

// import svg_ from "../img/statistics.svg";
//<img src={svg_} alt="svg" className="svg_" draggable="false" />

function App() {
  return (
    <div className="main-part">
      <header className="header-full-size">
        <div className="header-size-less">
          <div className="header-nice-formatted">
            <div className="header-left">
              <a className="block-link" href="/">
                <img className="logo" src={logo} alt="Logo" draggable="false" />
              </a>
            </div>
            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center space-x-4">
                <li className="hidden md:block">
                  <a
                    data-tip
                    data-for="discord"
                    href="https://discord.gg/7PepvThQ9p"
                  >
                    <FaDiscord
                      className="fill-current text-black hover:text-blue-500 transition duration-300"
                      size="1.5em"
                    />
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    data-tip
                    data-for="email"
                    href="mailto:emanuele.ardinghi@gmail.com"
                  >
                    <MdEmail
                      className="fill-current text-black hover:text-blue-500 transition duration-300"
                      size="1.5em"
                    />
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    data-tip
                    data-for="linkedin"
                    href="https://www.linkedin.com/in/ian-hildebrand/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ReactTooltip place="bottom" id="linkedin">
                      {/* <span>Ian Hildebrand</span> */}
                    </ReactTooltip>
                    <AiFillLinkedin
                      className="fill-current text-black hover:text-blue-500 transition duration-300"
                      size="1.5em"
                    />
                  </a>
                </li>
                <li className="hidden md:block">
                  <a
                    data-tip
                    data-for="github"
                    href="https://github.com/ihildy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="fill-current text-black hover:text-blue-500 transition duration-300"
                      size="1.5em"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/7PepvThQ9p"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 group"
                  >
                    <span>Contact</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 -mr-1 transition duration-300 transform ml-2 group-hover:translate-x-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="App">
        {/* <Header /> */}

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
            <button className="button-get">Get in touch </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

-add emoji to the header
- fix responsive with iphone and mobile
- add discord and check if is possible to cheate the button to pay with the world inside
0. add bottom border to header
1. add btton under your online precence to the next level
1. [+] Domain
6. [+] Clean the code adding functions and components
*/
