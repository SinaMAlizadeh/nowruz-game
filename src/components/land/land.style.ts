import styled, { keyframes } from "styled-components";
import Xs_land from "../../assets/images/lang_xs.png";
import Land from "../../assets/images/longland_v1.png";

export const slideInOut = (width: number) => keyframes`
  0% {
    background-position: right;
  }
  100% {
    background-position: -${width}px;
  }
`;

interface LandImgProps {
  $animationDuration: number;
  src: string;
  delay?: number;
  width: number;
  $isPlay: boolean;
}

export const LandImg = styled.div<LandImgProps>`
  animation: ${(p) => slideInOut(p.width)} ${(p) => p.$animationDuration}s
    linear infinite;
  background-image: url(${Land});
  position: absolute;
  background-size: 400px 100px;
  animation-play-state: ${(props) => (props?.$isPlay ? "running" : "paused")};
  left: 0;
  bottom: 0;
  right: -${(p) => p.width}px;
  height: 100px;
  @media only screen and (max-width: 480px) {
    height: 200px;
    background-size: 400px 200px;
    background-image: url(${Xs_land});
  }
`;
