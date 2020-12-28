import React from "react";
import style from "./dice.module.css";
import colors from "../../service/colors";
import getRandomNumber from "../../lib/get-random-number/get-random-number";
import { useGameState } from "../../context/game-state-context";

const Dice = () => {
  const { movePlayer } = useGameState();
  const max = colors.length;
  const button = React.useRef(null);
  const [face, setFace] = React.useState("#000000");

  const rollDice = () => {
    const randomIndex = getRandomNumber(max);
    const newValue = colors[randomIndex];
    movePlayer(randomIndex);
    setFace(newValue);
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

export default Dice;
