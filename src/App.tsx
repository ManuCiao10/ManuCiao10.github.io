import "./App.css";
import img from "../img/globe-dark.png";
import logo from "../img/favicon.png";

// import Header from "./Header";
//add backgroud images
import background from "../img/background.png";

function App() {
  return (
    <>
      <div className="main-part">
        <header className="header-full-size">
          <div className="header-size-less">
            <div className="header-nice-formatted">
              <div className="header-left">
                <a className="block-link" href="/">
                  <img
                    className="logo"
                    src={logo}
                    alt="Logo"
                    draggable="false"
                  />
                </a>
              </div>
              <div className="header-right">
                <ul className="header-list">
                  <li className="header-discord">
                    <a className="block-link" href=""></a>
                  </li>
                  {/* <li className="header-github"> */}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="App">
        {/* <Header /> */}

        <img src={img} alt="globe" className="globe" />
        <div className="title-bio noHover ">
          Your vision<br></br>
          <span className="title-bio-span noHover">my execution</span>
        </div>

        <p className="agency-intro noHover">
          Your online presence to the next level.
        </p>
      </div>
    </>
  );
}

export default App;

/*

--draggable="false" is used to prevent the image from being dragged
//for text use <p> instead of <div> because <p> is a block element

0. add bottom border to header
1. add btton under your online precence to the next level
1. [+] Domain
2. [+] sea sfondo end of the page
6. [+] Clean the code adding functions and components
*/
