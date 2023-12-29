import { useEffect, useLayoutEffect, useState } from "react";
import Tree from "../tree";

function Enemies() {
  const [duration, setDuration] = useState<number>(7);
  const [index, setIndex] = useState<number>(0);
  const [list, setList] = useState<
    { index: number; delay: number; duration: number }[]
  >([]);

  const removeItem = (index: number) => {
    setList((prev) => prev.filter((x) => x.index !== index));
  };

  useEffect(() => {
    setInterval(() => {
      setDuration((prev) => prev - 0.5);
    }, 30000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(duration);
      console.log(index);
      //console.log([...list, objects[0]]);
      const delay = Math.floor(0 + Math.random() * (2 - 0 + 0));
      // setList((prev) => [...prev, objects[0]]);
      setList((prev) => [...prev, { delay, index, duration }]);
      console.log(list);
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, [duration, index, list]);

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;

  return (
    <>
      {duration}
      {list?.map((item) => (
        <Tree
          key={item?.index}
          animationDuration={item?.duration}
          delay={item?.delay}
          index={item?.index}
          removeItem={removeItem}
        />
      ))}
    </>
  );
}

export default Enemies;
