import React from "react";

import Screen from "../screen/screen";

import "./app.styles.css";

const App = () => {
  return (
    <div className="App">
      <p>
        tempo-kleine-schnecken <button>Button</button>
      </p>
      <header className="App-content">
        <Screen />
      </header>
    </div>
  );
};

export default App;
