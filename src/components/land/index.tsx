import LandImgLogo from "../../assets/images/land.png";
import { LandImg } from "./land.style";

type Props = {
  duration: number;
};

function Land({ duration }: Props) {
  return <LandImg src={LandImgLogo} animationDuration={duration} />;
}

export default Land;
