import React, { useEffect, useState } from "react";
import "./player.css";

const Player = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (jump) {
      timeout = setTimeout(() => setJump(false), 750);
    }
    return () => clearTimeout(timeout);
  }, [jump]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.keyCode === 32) {
        setJump(true);
      }
    }
    function handleClick() {
      setJump(true);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return <div ref={ref} className={`player ${jump ? "jump" : ""}`}></div>;
});

export default Player;
