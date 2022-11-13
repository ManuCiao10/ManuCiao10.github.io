import "./App.css";
import img from "../img/globe-dark.png";
import logo from "../img/favicon.png";

// import Header from "./Header";
//add backgroud images
import background from "../img/background.png";

function sayHello() {
  alert('You clicked me!');
}

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

        <div className="title-bio noHover noselect">
          Your vision<br></br>
          <span className="title-bio-span noHover noselect">my execution</span>
        </div>
        <p className="agency-intro noHover noselect"></p>
        <div className="grid-main noHover noselect">
          <a
            className="block-link"
          >
            <img src={img} alt="globe" className="globe" draggable="false" />
          </a>
          <div className="grid-text">
            <h1 className="grid-title noHover noselect"></h1>
            <p className="grid-desc noHover noselect">
              Your online presence to the next level.
            </p>
            <button className="button-get" >Get in touch </button>
          </div>
          
          
        </div>
      </div>
      
    </>
  );
}

export default App;



/*

- fix responsive with iphone and mobile
- add discord and check if is possible to cheate the button to pay with the world inside
0. add bottom border to header
1. add btton under your online precence to the next level
1. [+] Domain
6. [+] Clean the code adding functions and components
*/
