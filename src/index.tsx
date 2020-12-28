import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./components/app/app";
import * as serviceWorker from "./serviceWorker";
import { GameStateProvider } from "./context/game-state-context";

ReactDOM.render(
  <GameStateProvider>
    <App />
  </GameStateProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
