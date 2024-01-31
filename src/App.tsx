import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Player from "./components/player";
import Lives from "./components/lives";
import { GameContext } from "./context/gameContext";
import { Types } from "./context/reducers";
import useDetectTabFocus from "./hooks/useCheckTabFocus";

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
  }, []);

  useDetectTabFocus();

  return (
    <>
      <div
        style={{
          height: "100svh",
          width: "100% ",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "400px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#91dcff",
            maxWidth: "1920px",
          }}
        >
          <Lives />
          <Clouds />
          <Enemies playerRef={ref} />
          <Player ref={ref} />
          <Land />
        </div>
      </div>
    </>
  );
}

export default App;
