import { useContext } from "react";
import LandImgLogo from "../../assets/images/land.png";
import { LandImg } from "./land.style";
import { GameContext } from "../../context/gameContext";

type Props = {
  width: number;
};

function Land({ width }: Props) {
  const { state } = useContext(GameContext);
  return (
    <LandImg
      width={width}
      src={LandImgLogo}
      animationDuration={state?.duration}
    />
  );
}

export default Land;
