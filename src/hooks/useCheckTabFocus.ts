import { useContext, useEffect } from "react";
import { GameContext } from "../context/gameContext";
import { Types } from "../context/reducers";

const useDetectTabFocus = () => {
  const { dispatch } = useContext(GameContext);
  useEffect(() => {
    const handleActivityFalse = () => {
      dispatch({
        type: Types.SetPlay,
        payload: { play: false },
      });
    };

    // const handleActivityTrue = () => {
    //   dispatch({
    //     type: Types.SetPlay,
    //     payload: { play: true },
    //   });
    // };

    // window.addEventListener("focus", handleActivityTrue);
    window.addEventListener("blur", handleActivityFalse);

    return () => {
      // window.removeEventListener("focus", handleActivityTrue);
      window.removeEventListener("blur", handleActivityFalse);
    };
  }, []);
};

export default useDetectTabFocus;
