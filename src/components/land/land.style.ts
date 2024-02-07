import styled, { keyframes } from "styled-components";

export const slideInOut = keyframes`
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
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
  animation: ${slideInOut} ${(p) => p.$animationDuration}s linear infinite;
  background-image: url(${(p) => p.src});
  position: absolute;
  background-size: 400px 100px;
  animation-play-state: ${(props) => (props?.$isPlay ? "running" : "paused")};
  left: 0;
  bottom: 0;
  right: -${(p) => p.width}px;
  height: 100px;
`;
