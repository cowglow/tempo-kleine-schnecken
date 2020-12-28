import React from "react";
import colors from "../service/colors";

/** Context **/
interface GameStateContextProps {
  positions: number[];
  totalSteps: number;
}

interface GameStateContextApi extends GameStateContextProps {
  movePlayer: (index: number) => void;
  resetGame: () => void;
}

const defaultErrorMessage = `Error: Context not initialized ${Date.now()}`;

const defaultValues: GameStateContextApi = {
  positions: [],
  totalSteps: 0,
  movePlayer: () => {
    throw Error(defaultErrorMessage);
  },
  resetGame: () => {
    throw Error(defaultErrorMessage);
  },
};

const GameStateContext = React.createContext<GameStateContextApi>(
  defaultValues
);

/** Provider **/
interface GameStateProviderProps {
  children: React.ReactNode;
  defaultValues?: GameStateContextApi;
}

export const GameStateProvider: React.FC<GameStateProviderProps> = ({
  children,
}) => {
  const totalSteps: number = 7;
  const defaultPositions: number[] = new Array(colors.length).fill(0);

  const [state, dispatch] = React.useReducer(
    (state: any, action: { type: string; payload: any }) => {
      switch (action.type) {
        case "MOVE_SNAIL":
          const playerIndex = action.payload;
          const playerPosition = state.positions[playerIndex];
          const newPositions = [...state.positions];
          newPositions[playerIndex] = playerPosition + 1;
          return {
            positions: newPositions,
          };
        case "RESET":
          return {
            positions: defaultPositions,
          };
        default:
          return state;
      }
    },
    {
      positions: defaultPositions,
    }
  );

  const movePlayer = (playerIndex: number) => {
    dispatch({
      type: "MOVE_SNAIL",
      payload: playerIndex,
    });
  };

  const resetGame = () => {
    console.log("reset");
    dispatch({
      type: "RESET",
      payload: null,
    });
  };

  return (
    <GameStateContext.Provider
      value={{
        ...state,
        totalSteps,
        movePlayer,
        resetGame,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

/** Hook **/
export const useGameState = () => {
  return React.useContext(GameStateContext);
};
