import React from "react";

import colors from "../../fixtures/colors";

import Dice from "../dice/dice";
import Snail from "../snail/snail";
import Track from "../track/track";
import Winner from "../winner/winner";

const stepCount = 7;

const config = {
  colors: colors,
  positions: Array.from(Array(stepCount - 1), () => 0)
};

const Screen = () => {
  const [state, setState] = React.useState({
    positions: config.positions,
    winner: null
  });

  const rollDice = face => {
    // Previous values
    const updatedPositions = {
      ...state
    };

    // Updated value
    updatedPositions.positions[face.id] = state.positions[face.id] + 1;

    // Validate positions
    const winnerPosition = updatedPositions.positions.indexOf(stepCount - 1);
    if (winnerPosition >= 0) {
      updatedPositions.winner = winnerPosition;
    }

    // Set state
    setState(updatedPositions);
  };

  return (
    <React.Fragment>
      <Winner>
        <Snail color={config.colors[state.winner]} />
      </Winner>

      {config.colors.slice(0, stepCount - 1).map((color, index) => (
        <Track
          key={index}
          steps={stepCount}
          color={color}
          currentPosition={state.positions[index]}
          player={<Snail color={color} />}
        />
      ))}

      <Dice faces={colors.slice(0, stepCount - 1)} callback={rollDice} />
    </React.Fragment>
  );
};

export default Screen;
