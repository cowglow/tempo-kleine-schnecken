import React from "react";
import colors from "../../service/colors";
import Track from "../track/track";
import Snail from "../snail/snail";
import { useGameState } from "../../context/game-state-context";

const Tracks = () => {
  const { totalSteps, positions } = useGameState();

  return (
    <React.Fragment>
      {colors.slice(0, colors.length).map((color, index) => (
        <Track
          key={index}
          steps={totalSteps}
          color={color}
          currentPosition={positions[index]}
          player={<Snail color={color} />}
        />
      ))}
    </React.Fragment>
  );
};

export default Tracks;
