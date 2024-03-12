import styled, { keyframes } from "styled-components";

export const slideInOut = (width: number) => keyframes`
 from {
    transform: translateX(${width}px); /* Start off-screen right */
  }
 to {
    transform: translateX(-${width}px); /* Slide in completely */
  }
`;

export const EnemyContainer = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 90px;
  @media only screen and (max-width: 480px) {
    bottom: 190px;
    height: 85px;
  }
`;

interface EnemyImgProps {
  $animationDuration: number;
  delay?: number;
  width: number;
  $play: boolean;
}

export const EnemyImg = styled.img<EnemyImgProps>`
  height: 120px;
  width: auto;
  animation: ${(props) => slideInOut(props.width)}
    ${(p) => p.$animationDuration}s linear infinite;
  position: absolute;
  bottom: 0;
  animation-play-state: ${(props) => (props?.$play ? "running" : "paused")};
  @media only screen and (max-width: 480px) {
    height: 85px;
  }
`;
