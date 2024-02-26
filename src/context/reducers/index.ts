import { Live } from "../../models/live";
import { GameState, useLives } from "../gameContext";
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
  ResetGame = "ResetGame",
  SetPoint = "SetPoint",
  SetGameSound = "SetGameSound",
  SetShowInfo = "SetShowInfo",
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
  [Types.ResetGame]: undefined;
  [Types.SetPoint]: {
    point: number;
  };
  [Types.SetGameSound]: {
    sound: boolean;
  };
  [Types.SetShowInfo]: {
    show: boolean;
  };
};

export type GameActions = ActionMap<GamePayload>[keyof ActionMap<GamePayload>];

export const gameReducer = (
  state: GameState,
  action: GameActions
): GameState => {
  switch (action.type) {
    case Types.SetDuration:
      return {
        ...state,
        duration: action?.payload?.duration,
      };
    case Types.SetLives: {
      const hasLive = playerHasLive(action?.payload?.lives);
      return {
        ...state,
        lives: action?.payload?.lives,
        duration: hasLive ? state?.duration : 0,
        play: hasLive,
      };
    }
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
    case Types.ResetGame:
      return {
        ...state,
        duration: 5,
        hight: 0,
        lives: useLives,
        width: 0,
        play: true,
        point: 0,
      };
    case Types.SetPoint:
      return {
        ...state,
        point: action?.payload?.point,
      };
    case Types.SetGameSound:
      return {
        ...state,
        sound: action?.payload?.sound,
      };
    case Types.SetShowInfo:
      return {
        ...state,
        showInfo: action?.payload?.show,
      };
    default:
      return state;
  }
};
