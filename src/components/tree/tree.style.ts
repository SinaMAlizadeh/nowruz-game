import styled, { keyframes } from "styled-components";

export const slideInOut = (y: number) => keyframes`
 from {
    transform: translateX(${y}px); /* Start off-screen right */
  }
 to {
    transform: translateX(-${y}px); /* Slide in completely */
  }
`;

export const TreeContainer = styled.div`
  width: 100%;
  height: 6%;
  position: absolute;
  bottom: 30px;
`;

interface TreeImgProps {
  animationDuration: number;
  delay?: number;
  width: number;
}

export const TreeImg = styled.img<TreeImgProps>`
  width: 5%;
  animation: ${(props) => slideInOut(props.width)}
    ${(p) => p.animationDuration}s linear infinite;
  position: absolute;
  bottom: 0;

  @media (max-width: 600px) {
    width: 16%;
  }
`;
