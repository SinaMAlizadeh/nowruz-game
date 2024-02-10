import { RefObject, useContext, useEffect, useState } from "react";
import Tree from "../tree";

import { GameContext } from "../../context/gameContext";

type Enemy = {
  index: number;
  delay: number;
  duration: number;
};

type Props = {
  playerRef: RefObject<HTMLDivElement>;
};

function Enemies({ playerRef }: Props) {
  const {
    state: { duration, play },
  } = useContext(GameContext);
  const [index, setIndex] = useState<number>(0);
  const [list, setList] = useState<Enemy[]>([]);

  const removeItem = (index: number) => {
    setList((prev) => prev.filter((x) => x.index !== index));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (play) {
        const delay = Math.floor(0 + Math.random() * (2 - 0 + 0));
        setList((prev) => [...prev, { delay, index, duration }]);
        setIndex((prev) => prev + 1);
        console.log(list);
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

  return (
    <>
      {list?.map((item) => (
        <Tree
          key={item?.index}
          animationDuration={item?.duration}
          delay={item?.delay}
          index={item?.index}
          removeItem={removeItem}
          playerRef={playerRef}
        />
      ))}
    </>
  );
}

export default Enemies;
