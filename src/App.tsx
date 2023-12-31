import { useEffect, useRef } from "react";
import "./App.css";
import Enemies from "./components/enemies";
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
            background: "green",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Enemies playerRef={ref} />
          <Player ref={ref} />
        </div>
      </div>
    </>
  );
}

export default App;
