import React from "react";

import style from "./track.module.css";

const Track = ({ length }) => {
  const trackStep = [];
  trackStep.length = length;

  return (
    <div className={style.track}>
      {trackStep.map((step) => {
        console.log(step)
        return <div>{step}</div>;
      })}
    </div>
  );
};

export default Track;
