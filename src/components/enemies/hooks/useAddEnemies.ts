import { useContext, useEffect } from "react";
import { GameContext } from "../../../context/gameContext";
import { getTypeOfEnemies } from "../../../utilities/getTypeOfEnemies";
import { EnemyDto } from "../../../models/TEnemy";

type Props = {
  setEnemies: React.Dispatch<React.SetStateAction<EnemyDto[]>>;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

function useAddEnemies({ setEnemies, index, setIndex }: Props) {
  const {
    state: { duration, play },
  } = useContext(GameContext);
  useEffect(() => {
    const timer = setInterval(() => {
      if (play) {
        const delay = Math.floor(0 + Math.random() * (2 - 0 + 0));
        const enemyType = getTypeOfEnemies();
        setEnemies((prev) => [
          ...prev,
          { delay, index, duration, type: enemyType },
        ]);
        setIndex((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, index, play, setEnemies, setIndex]);

  return {};
}

export default useAddEnemies;
