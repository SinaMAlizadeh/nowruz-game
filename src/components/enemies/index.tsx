import { RefObject, useState } from "react";
import { EnemyDto } from "../../models/TEnemy";
import Enemy from "../enemy";
import useAddEnemies from "./hooks/useAddEnemies";
import useChangeSizeHandler from "./hooks/useChangeSizeHandler";
import usePlayerLose from "./hooks/usePlayerLose";

type Props = {
  playerRef: RefObject<HTMLDivElement>;
};

function Enemies({ playerRef }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [enemies, setEnemies] = useState<EnemyDto[]>([]);

  const removeItem = (index: number) => {
    setEnemies((prev) => prev.filter((x) => x.index !== index));
  };

  useAddEnemies({
    index,
    setEnemies,
    setIndex,
  });

  usePlayerLose({
    setEnemies,
    setIndex,
  });

  useChangeSizeHandler({
    setEnemies,
    setIndex,
  });

  return (
    <>
      {enemies?.map((item) => (
        <Enemy
          key={item?.index}
          animationDuration={item?.duration}
          delay={item?.delay}
          index={item?.index}
          removeItem={removeItem}
          playerRef={playerRef}
          enemyType={item?.type}
        />
      ))}
    </>
  );
}

export default Enemies;
