import { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/gameContext";
import { Types } from "../context/reducers";

function usePlayerPoint() {
  const {
    state: { play, duration, point: mainPoint },
    dispatch,
  } = useContext(GameContext);

  const [point, setPoint] = useState<number>(0);

  useEffect(() => {
    let timer: number;
    if (play) {
      timer = setTimeout(() => {
        setPoint((prev) => prev + 1);
      }, duration * 100);
    }
    return () => window.clearInterval(timer);
  }, [point, play]);

  useEffect(() => {
    if (mainPoint === 0) {
      setPoint(0);
    }
    dispatch({
      type: Types.SetPoint,
      payload: { point: point + 1 },
    });
  }, [play]);

  return { point };
}

export default usePlayerPoint;
