import React from "react";

import style from "./track.module.css";

const Track = ({ steps, color, currentPosition, player }) => {
  const foo = Array.apply(null, Array(steps));
  foo[currentPosition] = player;

  return (
    <div className={style.track}>
      {foo.map((item, index) => {
        if (item) {
          return <h1 className={style.trackStep}>{player}</h1>;
        } else {
          return <h1 className={style.trackStep}>{""}</h1>;
        }
      })}
    </div>
  );
};

export default Track;
