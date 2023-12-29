import { useEffect, useState } from "react";
import { TreeContainer, TreeImg } from "./tree.style";
import TreeIcon from "../../assets/images/tree.png";

interface TreeProps {
  animationDuration: number;
  delay?: number;
  index: number;
  removeItem: (index: number) => void;
}
function Tree({ animationDuration, delay, index, removeItem }: TreeProps) {
  const [show, setShow] = useState<boolean>(false);

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

  return (
    <>
      {show ? (
        <TreeContainer>
          {animationDuration} - {index}
          <TreeImg animationDuration={animationDuration} src={TreeIcon} />
        </TreeContainer>
      ) : (
        ""
      )}
    </>
  );
}

export default Tree;
