import { useContext } from "react";
import LandImgLogo from "../../assets/images/land.png";
import { LandImg } from "./land.style";
import { GameContext } from "../../context/gameContext";

function Land() {
  const { state } = useContext(GameContext);
  return (
    <LandImg
      width={state?.width}
      src={LandImgLogo}
      animationDuration={state?.duration}
    />
  );
}

export default Land;
