import React from "react";

import style from "./track.module.css";

const Track = ({ steps, color, currentPosition, player, callback}) => {
  const foo = Array.apply(null, Array(steps));
  foo[currentPosition] = player;

  // TODO: handle winner announcement
  if (currentPosition === steps - 1) {
    callback(player)
  }

  return (
    <div className={style.track} style={{ border: "thin solid" + color }}>
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
