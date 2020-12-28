import React from "react";
import style from "./track.module.css";

interface TrackProps {
  steps: number;
  color: string;
  player: React.ReactNode;
  currentPosition: number;
}

const Track: React.FC<TrackProps> = ({
  steps,
  color,
  player,
  currentPosition,
}) => {
  const trackSteps = new Array(steps).fill("");
  trackSteps[currentPosition] = player;

  return (
    <div className={style.track} style={{ border: "thin solid" + color }}>
      {trackSteps.map((item, index) => (
        <h1 key={index} className={style.trackStep}>
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Track;
