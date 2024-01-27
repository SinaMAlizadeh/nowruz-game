import { Live } from "../../models/live";
import { GameState } from "../gameContext";
import playerHasLive from "./helper";

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
  SetWidth = "SET_WIDTH",
  SetPlay = "SET_PLAY",
}

type GamePayload = {
  [Types.SetDuration]: {
    duration: number;
  };
  [Types.SetLives]: {
    lives: Array<Live>;
  };
  [Types.SetWidth]: {
    width: number;
  };
  [Types.SetPlay]: {
    play: boolean;
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
      const hasLive = playerHasLive(action?.payload?.lives);

      return {
        ...state,
        lives: action?.payload?.lives,
        duration: hasLive ? state?.duration : 0,
        play: hasLive,
      };
    case Types.SetWidth:
      return {
        ...state,
        width: action?.payload?.width,
      };
    case Types.SetPlay:
      return {
        ...state,
        play: action?.payload?.play,
      };

    default:
      return state;
  }
};
