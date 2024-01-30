import React, { useEffect, useState } from "react";
import PlayerCharacter from "./player.style";

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
      if (e.keyCode === 32 || e.keyCode === 38) {
        setJump(true);
      }
    }
    function handleClick() {
      setJump(true);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <PlayerCharacter ref={ref} $isJumping={jump} />;
});

export default Player;
