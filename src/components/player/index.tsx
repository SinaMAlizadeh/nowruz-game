import { useEffect, useState } from "react";
import "./player.css";
import PlayerIcon from "../../assets/images/sleigh.png";

function Player() {
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
  return (
    <div className={`player ${jump ? "jump" : ""}`}>
      <img src={PlayerIcon} />
    </div>
  );
}

export default Player;
