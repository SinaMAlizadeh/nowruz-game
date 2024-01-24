import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import Clouds from "./components/clouds";
import Enemies from "./components/enemies";
import Land from "./components/land";
import Player from "./components/player";
import Lives from "./components/lives";
import { Live } from "./models/live";

const useLives: Array<Live> = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState<number>(4);
  const [lives, setLives] = useState<Array<Live>>(useLives);

  useEffect(() => {
    setInterval(() => {
      setDuration((prev) => (prev - 0.5 > 0 ? prev - 0.5 : 0));
    }, 30000);
  }, []);

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (lives.length === 0) {
      setDuration(0);
    }
  }, [lives]);

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
          <Lives lives={lives} />
          <Clouds />
          <Enemies
            duration={duration}
            playerRef={ref}
            width={size[0]}
            setLives={setLives}
          />
          <Player ref={ref} />
          <Land width={size[0]} duration={duration} />
        </div>
      </div>
    </>
  );
}

export default App;
