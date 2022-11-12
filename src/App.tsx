import { useState } from "react";
import "./App.css";
import img from "../img/globe-dark.png";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <img src={img} alt="globe" className="globe" />
      <p className="title-bio">
        Your vision <br></br>my execution
      </p>
      <p className="agency-intro">Your online presence to the next level.</p>
    </div>
  );
}

export default App;
