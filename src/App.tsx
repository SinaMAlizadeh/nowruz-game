import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Lives from "./components/lives";
import Player from "./components/player";
import Setting from "./components/setting";
import { GameContext } from "./context/gameContext";
import { Types } from "./context/reducers";
import useDetectTabFocus from "./hooks/useCheckTabFocus";
import Point from "./components/point";
import usePlayerPoint from "./hooks/usePlayerPoint";
import { GameContainer, GameLand } from "./app.style";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { dispatch, state } = useContext(GameContext);

  useEffect(() => {
    setInterval(() => {
      dispatch({
        type: Types.SetDuration,
        payload: {
          duration: state?.duration - 0.5 > 0 ? state?.duration - 0.5 : 0,
        },
      });
    }, 30000);

    dispatch({
      type: Types.SetPlay,
      payload: {
        play: true,
      },
    });
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      dispatch({
        type: Types?.SetWidth,
        payload: {
          width: window.innerWidth,
        },
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, [state?.duration]);

  useDetectTabFocus();
  usePlayerPoint();

  return (
    <>
      <GameContainer>
        <GameLand>
          <Setting />
          <Point />
          <Lives />
          <Clouds />
          <Enemies playerRef={ref} />
          <Player ref={ref} />
          <Land />
        </GameLand>
      </GameContainer>
    </>
  );
}

export default App;
