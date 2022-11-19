import "./App.css";
// import img from "../img/globe-dark.png";
import Header from "./Header";
import Footer from "./Footer";
import SocialMarketing from "./SocialMarketing";
import background from "./background";

new background();

function App() {
  return (
    <div className="main-part">
      <Header />

      <div className="App">
        <div className="title-bio noHover noselect">
        WE CREATE IMMERSIVE <br></br>
          <span className="title-bio-span noHover noselect">3D EXPERIENCES</span>
        </div>
        {/* <p className="agency-intro noHover noselect"></p> */}
        <div className="grid-main noHover noselect">
          <a className="block-link">
            {/* <img src={img} alt="globe" className="globe" draggable="false" /> */}
          </a>
          <div className="grid-text">
            {/* <h1 className="grid-title noHover noselect"></h1> */}
            <span className="grid-desc noHover noselect">
              Your online presence to the next level.
            </span>
            <li>
              <a
                data-tip
                data-for="email"
                href="mailto:emanuele.ardinghi@gmail.com"
                className="btn-sm-get"
              >
                <span>Get in touch</span>
              </a>
            </li>
          </div>
        </div>
      </div>
      <Footer />
      <SocialMarketing />
    </div>
  );
}

export default App;

/*

-add button change with check price or buy product

0. [+] Increase luminosity of background image
1. [+] Domain (Vercel)
2. [+] Clean the code adding functions and components
*/
