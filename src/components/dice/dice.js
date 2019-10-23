import React from "react";
import PropTypes from "prop-types";

import RandomNumber from "../../services/random-number";

const Dice = ({ faces }) => {
  const max = faces.length;
  const button = React.createRef();
  const [face, setFace] = React.useState(faces[RandomNumber(max)])

  const rollDice = () => {
    setFace(faces[RandomNumber(max)])
  };

  return (
    <button
      ref={button}
      onClick={rollDice}
      style={{
        padding: "1rem",
        color: "#ffffff",
        backgroundColor: face,
        ":active": {
          color: "#000000"
        }
      }}
    >
      Click To Roll
    </button>
  );
};

Dice.propTypes = {
  faces: PropTypes.array.isRequired
};

export default Dice;
