import { useContext, useEffect } from "react";
import { GameContext } from "../context/gameContext";
import { Types } from "../context/reducers";

function usePlayerPoint() {
  const {
    state: { point, play, duration },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    let timer: number;
    if (play) {
      timer = setTimeout(() => {
        dispatch({
          type: Types.SetPoint,
          payload: { point: point + 1 },
        });
      }, duration * 100);
    }
    return () => window.clearInterval(timer);
  }, [point, play]);

  return {};
}

export default usePlayerPoint;
