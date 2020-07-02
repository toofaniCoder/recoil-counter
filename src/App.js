import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="counter-wrapper">
        <div className="counter">
          <h1 className="counter-text">0</h1>
          <button className="counter-btn left">
            <div className="material-icons">remove</div>
          </button>
          <button className="counter-btn right">
            <div className="material-icons">add</div>
          </button>
        </div>
        <button className="counter-reset">
          <div className="material-icons">replay</div> reset
        </button>
      </div>
    </div>
  );
}

export default App;
