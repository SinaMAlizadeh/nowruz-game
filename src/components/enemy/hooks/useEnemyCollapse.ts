import { RefObject, useContext, useEffect } from "react";
import useCollapseSound from "../../../hooks/useCollapsSound";
import { GameContext } from "../../../context/gameContext";
import { Types } from "../../../context/reducers";

type Props = {
  index: number;
  playerRef: RefObject<HTMLDivElement>;
  enemyRef: RefObject<HTMLDivElement>;
};

function useEnemyCollapse({ index, playerRef, enemyRef }: Props) {
  const { state, dispatch } = useContext(GameContext);
  const { playAudio } = useCollapseSound();
  useEffect(() => {
    const checkCollision = () => {
      const playerPos = playerRef?.current?.getBoundingClientRect();
      const treePos = enemyRef?.current?.getBoundingClientRect();
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
      }
    };

    const interval = setInterval(() => {
      checkCollision();
    }, 100);

    return () => clearInterval(interval);
  }, [dispatch, index, state?.lives, playerRef]);
  return {};
}

export default useEnemyCollapse;
