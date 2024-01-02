import { useEffect, useRef } from "react";
import "./App.css";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Player from "./components/player";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref.current]);

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
            height: "300px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
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
