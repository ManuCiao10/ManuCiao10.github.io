import "./App.css";
import img from "../img/globe-dark.png";
import logo from "../img/favicon.png";

// import Header from "./Header";

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
            <div className="header-right">
              <ul className="header-list">
                <li className="header-discord">
                  <a
                    className="block-link"
                    href=""
                  ></a>
                </li>
                {/* <li className="header-github"> */}
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="App">
        {/* <Header /> */}

        {/* <img src={img} alt="globe" className="globe" /> */}
        <p className="title-bio">
          Your vision <br></br>my execution
        </p>

        <p className="agency-intro">Your online presence to the next level.</p>
      </div>
    </div>
  );
}

export default App;

/*
1. [+] Domain
2. [+] Mare sfondo end of the page
6. [+] Clean the code adding functions and components
*/
