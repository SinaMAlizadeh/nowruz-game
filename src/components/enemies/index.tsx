import {
  RefObject,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { GameContext } from "../../context/gameContext";
import Enemy from "../enemy";
import { EnemyDto } from "../../models/TEnemy";
import { getTypeOfEnemies } from "../../utilities/getTypeOfEnemies";

type Props = {
  playerRef: RefObject<HTMLDivElement>;
};

function Enemies({ playerRef }: Props) {
  const {
    state: { duration, play },
  } = useContext(GameContext);

  const [index, setIndex] = useState<number>(0);
  const [list, setList] = useState<EnemyDto[]>([]);

  const removeItem = (index: number) => {
    setList((prev) => prev.filter((x) => x.index !== index));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (play) {
        const delay = Math.floor(0 + Math.random() * (2 - 0 + 0));
        const enemyType = getTypeOfEnemies();
        setList((prev) => [
          ...prev,
          { delay, index, duration, type: enemyType },
        ]);
        setIndex((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, index, list, play]);

  useEffect(() => {
    if (duration === 0) {
      setList([]);
      setIndex(0);
    }
  }, [duration]);

  useLayoutEffect(() => {
    function updateSize() {
      setList([]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      {list?.map((item) => (
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
