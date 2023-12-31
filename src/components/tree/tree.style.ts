import styled, { keyframes } from "styled-components";

export const slideInOut = keyframes`
 from {
    transform: translateX(1920px); /* Start off-screen right */
  }
 to {
    transform: translateX(-1920px); /* Slide in completely */
  }
`;

export const TreeContainer = styled.div`
  width: 100%;
  height: 11%;
  position: absolute;
  bottom: 0;
`;

interface TreeImgProps {
  animationDuration: number;
  delay?: number;
}

export const TreeImg = styled.img<TreeImgProps>`
  width: 9%;
  animation: ${slideInOut} ${(p) => p.animationDuration}s linear infinite;
  position: absolute;
  bottom: 0;

  @media (max-width: 600px) {
    width: 16%;
  }
`;
