import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Live } from "../models/live";
import { GameActions, gameReducer } from "./reducers";
import { lives } from "../utilities/const";

export type GameState = {
  lives: Array<Live>;
  duration: number;
  width: number;
  hight: number;
  play: boolean;
  point: number;
  sound: boolean;
  showInfo: boolean;
  win: boolean;
};

const initialState: GameState = {
  duration: 5,
  hight: 0,
  lives: lives,
  width: 0,
  play: false,
  point: 0,
  sound: true,
  showInfo: false,
  win: false,
};

const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
