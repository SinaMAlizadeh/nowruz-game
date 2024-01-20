import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Player from "./components/player";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState<number>(4);

  useEffect(() => {
    setInterval(() => {
      setDuration((prev) => (prev - 0.5 > 0 ? prev - 0.5 : 0));
    }, 30000);
  }, []);

  useEffect(() => {
    console.log(ref.current);
  }, [ref.current]);

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

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
          <Clouds />
          <Enemies duration={duration} playerRef={ref} width={size[0]} />
          <Player ref={ref} />
          <Land width={size[0]} duration={duration} />
        </div>
      </div>
    </>
  );
}

export default App;
