import React from "react";
import styles from "./app.module.css";
import Winner from "../winner/winner";
import Tracks from "../tracks/tracks";
import Dice from "../dice/dice";
import RaceTrack from "../race-track/race-track";

const App = () => {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        <Winner />
        <RaceTrack />
        <Tracks />
        <Dice />
      </main>
    </div>
  );
};

export default App;
