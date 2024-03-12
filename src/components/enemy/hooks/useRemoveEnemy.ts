import { useContext, useEffect } from "react";
import { GameContext } from "../../../context/gameContext";

type Props = {
  animationDuration: number;
  show: boolean;
  index: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  removeItem: (index: number) => void;
};

function useRemoveEnemy({
  animationDuration,
  setShow,
  show,
  index,
  removeItem,
}: Props) {
  const { state } = useContext(GameContext);
  useEffect(() => {
    let timer: number;
    if (show) {
      if (state?.play) {
        timer = setTimeout(() => {
          setShow(false);
          removeItem(index);
        }, animationDuration * 1000);
      }
    }
    return () => clearInterval(timer);
  }, [show, state?.play]);
  return {};
}

export default useRemoveEnemy;
