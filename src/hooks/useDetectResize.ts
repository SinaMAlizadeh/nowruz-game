import { useContext, useLayoutEffect } from "react";
import { GameContext } from "../context/gameContext";
import { Types } from "../context/reducers";

function useDetectResize() {
  const { dispatch, state } = useContext(GameContext);
  useLayoutEffect(() => {
    function updateSize() {
      dispatch({
        type: Types?.SetWidth,
        payload: {
          width: window.innerWidth,
        },
      });
      if (window?.innerWidth < 480) {
        dispatch({
          type: Types?.SetDuration,
          payload: {
            duration: 2,
          },
        });
      }
      if (window?.innerWidth > 480 && window?.innerWidth < 1200) {
        dispatch({
          type: Types?.SetDuration,
          payload: {
            duration: 3,
          },
        });
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [dispatch, state.duration]);

  return {};
}

export default useDetectResize;
