import { useLayoutEffect } from "react";
import { EnemyDto } from "../../../models/TEnemy";

type Props = {
  setEnemies: React.Dispatch<React.SetStateAction<EnemyDto[]>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

function useChangeSizeHandler({ setEnemies }: Props) {
  useLayoutEffect(() => {
    function updateSize() {
      setEnemies([]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return {};
}

export default useChangeSizeHandler;
