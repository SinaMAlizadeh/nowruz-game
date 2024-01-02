import styled, { keyframes } from "styled-components";

export const slideInOut = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

interface LandImgProps {
  animationDuration: number;
  src: string;
  delay?: number;
}
export const LandImg = styled.div<LandImgProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(p) => p.src});
  background-size: auto 100%;
  animation: ${slideInOut} ${(p) => p.animationDuration}s linear infinite;
`;
