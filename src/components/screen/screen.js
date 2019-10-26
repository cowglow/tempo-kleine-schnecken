import React from "react";

import colors from "../../fixtures/colors";

import Dice from "../dice/dice";
import Snail from "../snail/snail";
import Track from "../track/track";

const Screen = () => {
  const stepCount = 7;

  // eslint-disable-next-line
  const [diceValue, updateDiceValue] = React.useState({
    id: null,
    color: null
  });

  // eslint-disable-next-line
  const [positions, updatePositions] = React.useState(
    Array.from(Array(stepCount), () => 0)
  );

  const rollDice = face => {
    const newPositions = positions;

    newPositions[face.id] = newPositions[face.id] + 1;
    // updatePositions(newPositions);
    updateDiceValue(face);
  };

  return (
    <React.Fragment>
      {colors.map((color, index) => (
        <Track
          steps={stepCount}
          color={color}
          currentPosition={positions[index]}
          player={<Snail color={color} />}
        />
      ))}

      <Dice faces={colors} callback={rollDice} />
    </React.Fragment>
  );
};

export default Screen;
