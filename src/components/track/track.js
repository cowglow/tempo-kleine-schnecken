import React from "react";
import PropTypes from "prop-types";

import style from "./track.module.css";

const Track = ({ steps, color, player, currentPosition }) => {
  const trackSteps = Array.apply(null, Array(steps));
  trackSteps[currentPosition] = player;

  return (
    <div className={style.track} style={{ border: "thin solid" + color }}>
      {trackSteps.map((item, index) => {
        if (item) {
          return (
            <h1 key={index} className={style.trackStep}>
              {player}
            </h1>
          );
        } else {
          return (
            <h1 key={index} className={style.trackStep}>
              {""}
            </h1>
          );
        }
      })}
    </div>
  );
};

Track.propTypes = {
  steps: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  player: PropTypes.node.isRequired,
  currentPosition: PropTypes.number.isRequired
};
export default Track;
