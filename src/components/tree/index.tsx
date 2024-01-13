import { RefObject, useEffect, useRef, useState } from "react";
import { TreeContainer, TreeImg } from "./tree.style";
import TreeIcon from "../../assets/images/tree.png";

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
        console.log("closion");
        // alert("you lose");
      }
    };

    const interval = setInterval(() => {
      checkCollision();
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

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
