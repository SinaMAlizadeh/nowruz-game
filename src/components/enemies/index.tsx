import { RefObject, useEffect, useState } from "react";
import Tree from "../tree";
import { Live } from "../../models/live";

type Props = {
  playerRef: RefObject<HTMLDivElement>;
  duration: number;
  width: number;
  setLives: React.Dispatch<React.SetStateAction<Live[]>>;
};

function Enemies({ playerRef, duration, width, setLives }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [list, setList] = useState<
    { index: number; delay: number; duration: number }[]
  >([]);

  const removeItem = (index: number) => {
    setList((prev) => prev.filter((x) => x.index !== index));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const delay = Math.floor(0 + Math.random() * (2 - 0 + 0));
      setList((prev) => [...prev, { delay, index, duration }]);
      setIndex((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [duration, index, list]);

  return (
    <>
      {duration}
      {list?.map((item) => (
        <Tree
          setLives={setLives}
          width={width}
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
