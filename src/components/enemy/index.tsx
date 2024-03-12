import { RefObject, useContext, useEffect, useRef, useState } from "react";
import FireIcon from "../../assets/images/fire_v1.png";
import SnowManIcon from "../../assets/images/snowMan.png";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";
import useCollapseSound from "../../hooks/useCollapsSound";
import { EnemyContainer, EnemyImg } from "./tree.style";
import { enemyType } from "../../models/TEnemy";

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
  const { state, dispatch } = useContext(GameContext);
  const [show, setShow] = useState<boolean>(false);
  const treeRef = useRef<HTMLImageElement>(null);
  const { playAudio } = useCollapseSound();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, (animationDuration - (delay || 0)) * 1000);
    return () => window.clearInterval(timer);
  }, [animationDuration, delay]);

  useEffect(() => {
    let timer: number;
    if (show) {
      if (state?.play) {
        timer = setTimeout(() => {
          setShow(false);
          removeItem(index);
        }, animationDuration * 1000);
      }
    }

    return () => clearInterval(timer);
  }, [show, state?.play]);

  useEffect(() => {
    // const playerRect = playerRef?.current?.getBoundingClientRect();
    const checkCollision = () => {
      const playerPos = playerRef?.current?.getBoundingClientRect();
      const treePos = treeRef?.current?.getBoundingClientRect();
      if (
        playerPos &&
        treePos &&
        playerPos.x < treePos.x + treePos.width - 50 &&
        playerPos.x + playerPos.width > treePos.x &&
        playerPos.y < treePos.y + treePos.height &&
        playerPos.y + playerPos.height > treePos.y
      ) {
        const removedLives = state?.lives.filter((x) => !x.show);
        if (removedLives.some((x) => x.index === index)) {
          return;
        }
        playAudio(state?.sound);
        let isSetTrue = false;
        const lives = state?.lives.map((x) => {
          if (!isSetTrue && x.show) {
            isSetTrue = true;
            return {
              id: x.id,
              show: false,
              index: index,
            };
          }
          return x;
        });

        dispatch({
          type: Types.SetLives,
          payload: {
            lives: lives,
          },
        });
        // alert("you lose");
      }
    };

    const interval = setInterval(() => {
      checkCollision();
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [dispatch, index, playerRef, state?.lives]);

  return (
    <>
      {show ? (
        <EnemyContainer>
          <EnemyImg
            $play={state?.play}
            width={state?.width}
            ref={treeRef}
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
