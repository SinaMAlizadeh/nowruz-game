import styled, { css, keyframes } from "styled-components";
import Amou1 from "../../assets/images/amou-v1.png";
import Amou2 from "../../assets/images/amou-v1-2.png";
import Amou3 from "../../assets/images/amou-v1-3.png";

const TOP: string = "350px";
const BOTTOM: string = "100px";
const TOP_XS: string = "400px";
const BOTTOM_XS: string = "200px";
// Define keyframes for the Running and Jump animations
const Running = keyframes`
  0% {
    background-image: url(${Amou1});
  }
  50% {
    background-image: url(${Amou2});
  }
  100% {
    background-image: url(${Amou3});
  }
`;

const MoveUp = (bottom: string, top: string) => keyframes`
  0% {
    bottom: ${bottom};
  }
  100% {
    bottom: ${top};
  }
`;

const StayTop = (top: string) => keyframes`
  0%, 100% {
    bottom: ${top};
  }
`;

const MoveDown = (bottom: string, top: string) => keyframes`
  0% {
    bottom: ${top};
  }
  100% {
    bottom: ${bottom};
  }
`;

type Props = {
  $isJumping: boolean;
  $isPlay: boolean;
};

// Define the Player styled component
const PlayerCharacter = styled.div<Props>`
  position: absolute;
  bottom: 100px;
  left: 10px;
  width: 100px;
  height: 100px;
  background-image: url(${Amou1});
  background-size: 100px 100px;
  background-repeat: no-repeat;
  animation: ${Running} 0.3s linear infinite;
  animation-play-state: ${(props) => (props?.$isPlay ? "running" : "paused")};
  ${({ $isJumping }) =>
    $isJumping &&
    css`
      animation: ${MoveUp(BOTTOM, TOP)} 0.3s forwards,
        ${StayTop(TOP)} 0.07s forwards 0.3s,
        ${MoveDown(BOTTOM, TOP)} 0.4s forwards 0.37s;
    `}
  @media only screen and (max-width: 480px) {
    width: 70px;
    height: 70px;
    background-size: 70px 70px;
    bottom: 200px;
    ${({ $isJumping }) =>
      $isJumping &&
      css`
        animation: ${MoveUp(BOTTOM_XS, TOP_XS)} 0.3s forwards,
          ${StayTop(TOP_XS)} 0.07s forwards 0.3s,
          ${MoveDown(BOTTOM_XS, TOP_XS)} 0.4s forwards 0.37s;
      `}
  }
`;

export default PlayerCharacter;
