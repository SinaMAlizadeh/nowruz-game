import { RefObject, useContext, useEffect, useRef, useState } from "react";
import TreeIcon from "../../assets/images/snowMan.png";
import { TreeContainer, TreeImg } from "./tree.style";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";

interface TreeProps {
  animationDuration: number;
  delay?: number;
  index: number;
  removeItem: (index: number) => void;
  playerRef: RefObject<HTMLDivElement>;
  width: number;
}
function Tree({
  animationDuration,
  delay,
  index,
  removeItem,
  playerRef,
  width,
}: TreeProps) {
  const { state, dispatch } = useContext(GameContext);
  const [show, setShow] = useState<boolean>(false);
  const treeRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, (animationDuration - (delay || 0)) * 1000);
    return () => window.clearInterval(timer);
  }, [animationDuration, delay]);

  useEffect(() => {
    let timer: number;
    if (show)
      timer = setTimeout(() => {
        setShow(false);
        removeItem(index);
      }, animationDuration * 1000);
    return () => clearInterval(timer);
  }, [show]);

  useEffect(() => {
    // const playerRect = playerRef?.current?.getBoundingClientRect();

    const checkCollision = () => {
      const playerPos = playerRef?.current?.getBoundingClientRect();
      const treePos = treeRef?.current?.getBoundingClientRect();
      if (
        playerPos &&
        treePos &&
        playerPos.x < treePos.x + treePos.width &&
        playerPos.x + playerPos.width > treePos.x &&
        playerPos.y < treePos.y + treePos.height &&
        playerPos.y + playerPos.height > treePos.y
      ) {
        const removedLives = state?.lives.filter((x) => !x.show);
        if (removedLives.some((x) => x.index === index)) {
          return;
        }
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
        <TreeContainer>
          <TreeImg
            width={width}
            ref={treeRef}
            animationDuration={animationDuration}
            src={TreeIcon}
          />
        </TreeContainer>
      ) : (
        ""
      )}
    </>
  );
}

export default Tree;
