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
  animationDuration: number;
  src: string;
  delay?: number;
}
export const LandImg = styled.div<LandImgProps>`
  animation: ${slideInOut} ${(p) => p.animationDuration}s linear infinite;
  background-image: url(${(p) => p.src});
  position: absolute;
  background-size: auto 30px;
  background-repeat: repeat-x;
  left: 0;
  height: 30px;
  bottom: 0;
  right: -1920px;
  height: 30px;
  z-index: -1;
`;
