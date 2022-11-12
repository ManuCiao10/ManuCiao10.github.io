import "./App.css";
import img from "../img/globe-dark.png";

import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img src={img} alt="globe" className="globe" />
      <p className="title-bio">
        Your vision <br></br>my execution
      </p>
      <p className="agency-intro">Your online presence to the next level.</p>
    </div>
  );
}

export default App;

/*
1. [+] Domain
2. [+] Mare sfondo end of the page
3. [+] Logo
*/
