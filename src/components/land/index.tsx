import LandImgLogo from "../../assets/images/land.png";
import { LandImg } from "./land.style";

type Props = {
  duration: number;
  width: number;
};

function Land({ duration, width }: Props) {
  return (
    <LandImg width={width} src={LandImgLogo} animationDuration={duration} />
  );
}

export default Land;
