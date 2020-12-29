import React from "react";
import style from "./dice.module.css";
import colors from "../../service/colors";
import getRandomNumber from "../../lib/get-random-number/get-random-number";
import { useGameState } from "../../context/game-state-context";

const Dice = () => {
  const { movePlayer, positions, totalSteps } = useGameState();
  const hasWinner = positions.some((position) => position > totalSteps - 1);
  const max = colors.length;
  const button = React.useRef(null);
  const [face, setFace] = React.useState("#000000");
  const [sensorData, setSensorData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const rollDice = () => {
    const randomIndex = getRandomNumber(max);
    const newValue = colors[randomIndex];
    movePlayer(randomIndex);
    setFace(newValue);
  };

  React.useEffect(() => {
    const threshold: number = 15;

    const handleMotionEvent = (event: DeviceMotionEvent) => {
      requestAnimationFrame(() => {
        const { x, y, z }: any = event.acceleration;
        const xDiff = Math.abs(sensorData.x - x);
        const yDiff = Math.abs(sensorData.y - y);
        const zDiff = Math.abs(sensorData.z - z);
        if (
          (xDiff > threshold && yDiff > threshold) ||
          (xDiff > threshold && zDiff > threshold)
        ) {
          if (!hasWinner) {
            rollDice();
            setSensorData({ x, y, z });
          }
        }
      });
    };

    window.addEventListener("devicemotion", handleMotionEvent);

    return () => window.removeEventListener("devicemotion", handleMotionEvent);
  }, []);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Dice;
