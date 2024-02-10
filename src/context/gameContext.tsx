import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { Live } from "../models/live";
import { GameActions, gameReducer } from "./reducers";

export const useLives: Array<Live> = [
  {
    id: 1,
    show: true,
  },
  {
    id: 2,
    show: true,
  },
  {
    id: 3,
    show: true,
  },
];

export type GameState = {
  lives: Array<Live>;
  duration: number;
  width: number;
  hight: number;
  play: boolean;
};

const initialState: GameState = {
  duration: 5,
  hight: 0,
  lives: useLives,
  width: 0,
  play: false,
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
