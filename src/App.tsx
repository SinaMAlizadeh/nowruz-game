import { useRef } from "react";
import "./App.css";
import { GameContainer, GameLand } from "./app.style";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Lives from "./components/lives";
import Player from "./components/player";
import Point from "./components/point";
import Setting from "./components/setting";
import useDetectTabFocus from "./hooks/useCheckTabFocus";
import useDetectResize from "./hooks/useDetectResize";
import useGameStater from "./hooks/useGameStater";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useGameStater();
  useDetectResize();
  useDetectTabFocus();

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
