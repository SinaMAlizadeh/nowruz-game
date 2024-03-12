import { useEffect } from "react";

type Props = {
  animationDuration: number;
  delay: number | undefined;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
function useShowEnemy({ animationDuration, setShow, delay }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, (animationDuration - (delay || 0)) * 1000);
    return () => window.clearInterval(timer);
  }, [animationDuration, delay]);
  return {};
}

export default useShowEnemy;
