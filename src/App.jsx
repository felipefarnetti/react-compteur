import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Increment from "./Components/Increment";
import Decrement from "./Components/Decrement";
import Reset from "./Components/Reset";

function App() {
  const [counter, setCounter] = useState(0);
  // const [plusButton, setPlusButton] = useState(0);
  // const [minusButton, setMinusButtoin] = useState(0);
  const [reset, setReset] = useState(0);

  return (
    <div className="container">
      <Header />
      <section className="main">
        <div className="haut">
          <Increment counter={counter} setCounter={setCounter} />
        </div>
        <div className="compteur">
          <h1>{counter}</h1>
        </div>
        <div>
          <Decrement counter={counter} setCounter={setCounter} />
        </div>

        <div className="bas">
          <Reset counter={counter} setCounter={setReset} />
        </div>
      </section>
    </div>
  );
}

export default App;
