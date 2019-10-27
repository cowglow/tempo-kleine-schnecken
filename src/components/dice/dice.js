import React from "react";
import PropTypes from "prop-types";

import style from "./dice.module.css";

import RandomNumber from "../../services/random-number";

const Dice = ({ faces, callback }) => {
  const max = faces.length;
  const button = React.createRef();
  const [face, setFace] = React.useState("#000000");

  const rollDice = () => {
    const randomIndex = RandomNumber(max);
    const newValue = faces[randomIndex];
    setFace(newValue);
    callback({
      id: randomIndex,
      color: newValue
    });
  };

  return (
    <button
      ref={button}
      onClick={rollDice}
      style={{
        backgroundColor: face,
      }}
      className={style.root}
    >
      Click To Roll
    </button>
  );
};

Dice.propTypes = {
  faces: PropTypes.array.isRequired
};

export default Dice;
