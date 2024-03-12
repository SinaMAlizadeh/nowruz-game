import { useContext, useEffect } from "react";
import { GameContext } from "../context/gameContext";
import { Types } from "../context/reducers";
import { RAISE_LEVEL_TIMER, REDUCE_TIMER } from "../utilities/const";

function useGameStater() {
  const { dispatch, state } = useContext(GameContext);
  useEffect(() => {
    setInterval(() => {
      dispatch({
        type: Types.SetDuration,
        payload: {
          duration:
            state?.duration - REDUCE_TIMER > 0
              ? state?.duration - REDUCE_TIMER
              : 0,
        },
      });
    }, RAISE_LEVEL_TIMER);
    dispatch({
      type: Types.SetPlay,
      payload: {
        play: true,
      },
    });
  }, []);

  return {};
}

export default useGameStater;
