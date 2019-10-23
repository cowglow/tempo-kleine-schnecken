import React from "react";
import PropTypes from "prop-types";

import colors from "../fixtures/colors";
import Dice from '../dice/dice'
import Track from '../track/track'

const Screen = () => {
  const diceColors = colors;

  return (
    <React.Fragment>
      <p>I need a the tracks</p>
      <Track length={6} />

      <p>I need the snails</p>

      <p>I need the dice</p>
      <Dice faces={diceColors}/>

      <p>I need the colors configuration</p>
      {JSON.stringify(diceColors, null, 2)}
    </React.Fragment>
  );
};

Screen.propTypes = {
  id: PropTypes.any
};

export default Screen;
