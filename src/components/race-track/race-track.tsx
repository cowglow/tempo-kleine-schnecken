import React from "react";
import style from "./race-track.module.css";

interface RaceTrackProps {}

const RaceTrack: React.FC<RaceTrackProps> = () => {
  return (
    <div className={style.racetrack}>
      <div className={style.start}>Start</div>
      <div className={style.step}>1</div>
      <div className={style.step}>2</div>
      <div className={style.step}>3</div>
      <div className={style.step}>4</div>
      <div className={style.step}>5</div>
      <div className={style.step}>6</div>
      <div className={style.finish}>Finish</div>
    </div>
  );
};

export default RaceTrack;
