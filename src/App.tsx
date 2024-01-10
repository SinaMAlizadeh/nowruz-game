import { useEffect, useRef, useState } from "react";
import "./App.css";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Player from "./components/player";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState<number>(7);

  useEffect(() => {
    setInterval(() => {
      setDuration((prev) => prev - 0.5);
    }, 30000);
  }, []);

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
          <Enemies duration={duration} playerRef={ref} />
          <Player ref={ref} />
          <Land duration={duration} />
        </div>
      </div>
    </>
  );
}

export default App;
