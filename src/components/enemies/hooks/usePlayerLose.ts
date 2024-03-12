import React, { useContext, useEffect } from "react";
import { EnemyDto } from "../../../models/TEnemy";
import { GameContext } from "../../../context/gameContext";

type Props = {
  setEnemies: React.Dispatch<React.SetStateAction<EnemyDto[]>>;

  setIndex: React.Dispatch<React.SetStateAction<number>>;
};
function usePlayerLose({ setEnemies, setIndex }: Props) {
  const {
    state: { duration },
  } = useContext(GameContext);

  useEffect(() => {
    if (duration === 0) {
      setEnemies([]);
      setIndex(0);
    }
  }, [duration, setEnemies, setIndex]);

  return {};
}

export default usePlayerLose;
