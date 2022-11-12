import { useState } from "react";
import "./App.css";
import img from "../img/globe-dark.png";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <img src={img} alt="globe" />
      <p className="title-bio">Your vision, my execution</p>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="agency-intro">
          web development agency. We provide experienced consultants, designers
          and developers to take your online presence to the next level.
        </p>
      </div>
    </div>
  );
}

export default App;

// style the img 
// img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// List with all the sercive we provide
