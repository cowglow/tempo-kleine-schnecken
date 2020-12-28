import React from "react";
import style from "./winner.module.css";
import { useGameState } from "../../context/game-state-context";
import Snail from "../snail/snail";
import colors from "../../service/colors";

const Winner = () => {
  const { positions, totalSteps, resetGame } = useGameState();
  const winnerPosition = positions.indexOf(totalSteps - 1);

  return (
    <div
      className={style.root}
      style={{ visibility: winnerPosition >= 0 ? "visible" : "hidden" }}
    >
      <div className={style.content}>
        <h1>WINNER</h1>
        <Snail color={colors[winnerPosition]} />
      </div>
      <button
        className={style.button}
        onClick={() => resetGame()}
        style={{ backgroundColor: colors[winnerPosition] }}
      >
        RESTART
      </button>
    </div>
  );
};

export default Winner;
