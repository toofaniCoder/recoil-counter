import React from "react";
import "./App.css";
import { atom, useRecoilState, useResetRecoilState } from "recoil";

const counterState = atom({
  key: "counterState", // unique key
  default: 0, // default value
});

function App() {
  const [counter, setCounter] = useRecoilState(counterState);
  const restCounter = useResetRecoilState(counterState);
  return (
      <div className="App">
        <div className="counter-wrapper">
          <div className="counter">
            <h1 className="counter-text">{counter}</h1>
            <button
              className="counter-btn left"
              onClick={() => setCounter(counter - 1)}
            >
              <div className="material-icons">remove</div>
            </button>
            <button
              className="counter-btn right"
              onClick={() => setCounter(counter + 1)}
            >
              <div className="material-icons">add</div>
            </button>
          </div>
          <button className="counter-reset" onClick={restCounter}>
            <div className="material-icons">replay</div> reset
          </button>
        </div>
      </div>
  );
}

export default App;
