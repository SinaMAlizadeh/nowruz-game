import { RefObject, useContext, useRef, useState } from "react";
import FireIcon from "../../assets/images/fire_v1.png";
import SnowManIcon from "../../assets/images/snowMan.png";
import { GameContext } from "../../context/gameContext";
import { enemyType } from "../../models/TEnemy";
import useEnemyCollapse from "./hooks/useEnemyCollapse";
import useRemoveEnemy from "./hooks/useRemoveEnemy";
import useShowEnemy from "./hooks/useShowEnemy";
import { EnemyContainer, EnemyImg } from "./tree.style";

interface EnemyProps {
  animationDuration: number;
  delay?: number;
  index: number;
  removeItem: (index: number) => void;
  playerRef: RefObject<HTMLDivElement>;
  enemyType: enemyType;
}
function Enemy({
  animationDuration,
  delay,
  index,
  removeItem,
  playerRef,
  enemyType,
}: EnemyProps) {
  const { state } = useContext(GameContext);
  const [show, setShow] = useState<boolean>(false);
  const enemyRef = useRef<HTMLImageElement>(null);

  useShowEnemy({
    animationDuration,
    delay,
    setShow,
  });

  useRemoveEnemy({
    animationDuration,
    index,
    removeItem,
    setShow,
    show,
  });

  useEnemyCollapse({
    enemyRef,
    index,
    playerRef,
  });

  return (
    <>
      {show ? (
        <EnemyContainer>
          <EnemyImg
            $play={state?.play}
            width={state?.width}
            ref={enemyRef}
            $animationDuration={animationDuration}
            src={enemyType === 0 ? FireIcon : SnowManIcon}
          />
        </EnemyContainer>
      ) : (
        ""
      )}
    </>
  );
}

export default Enemy;
