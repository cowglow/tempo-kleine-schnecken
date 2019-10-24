import React from "react";
import PropTypes from "prop-types";

import colors from "../../fixtures/colors";

import Dice from "../dice/dice";
import Snail from "../snail/snail";
import Track from "../track/track";

const Screen = () => {
  const [diceValue, updateDiceValue] = React.useState({
    id: null,
    color: null
  });
  const [currentPosition, updateCurrentPosition] = React.useState(0);

  const rollDice = face => {
    updateDiceValue(face);
    updateCurrentPosition(
      currentPosition != colors.length ? currentPosition + 1 : 0
    );
    console.log("currentPosition:", currentPosition);
  };

  return (
    <React.Fragment>
      <p>I need a the tracks</p>
      <Track
        steps={colors.length}
        color={colors[0]}
        currentPosition={currentPosition}
        player={<Snail color={colors[0]} />}
      />

      <p>I need the snails</p>
      <Snail color={diceValue.color} />

      <p>I need the dice</p>
      <Dice faces={colors} callback={rollDice} />

      <p>I need the colors configuration</p>
      {JSON.stringify(colors, null, 2)}
    </React.Fragment>
  );
};

Screen.propTypes = {
  id: PropTypes.any
};

export default Screen;
