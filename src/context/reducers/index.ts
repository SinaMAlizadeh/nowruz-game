import { Live } from "../../models/live";
import { GameState } from "../gameContext";

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SetDuration = "SET_DURATION",
  SetLives = "SET_LIVES",
}

type GamePayload = {
  [Types.SetDuration]: {
    duration: number;
  };
  [Types.SetLives]: {
    lives: Array<Live>;
  };
};

export type GameActions = ActionMap<GamePayload>[keyof ActionMap<GamePayload>];

export const gameReducer = (state: GameState, action: GameActions) => {
  switch (action.type) {
    case Types.SetDuration:
      return {
        ...state,
        duration: action?.payload?.duration,
      };
    case Types.SetLives:
      console.log(action);
      return {
        ...state,
        lives: action?.payload?.lives,
        duration: action?.payload?.lives.some((x) => x.show)
          ? state?.duration
          : 0,
      };

    default:
      return state;
  }
};
