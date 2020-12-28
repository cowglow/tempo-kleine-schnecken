import React from "react";
import styles from "./app.module.css";
import Winner from "../winner/winner";
import Tracks from "../tracks/tracks";
import Dice from "../dice/dice";

const App = () => {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        <Winner />
        <Tracks />
        <Dice />
      </main>
    </div>
  );
};

export default App;
