import styled, { css, keyframes } from "styled-components";
import Amou1 from "../../assets/images/amou-v1.png";
import Amou2 from "../../assets/images/amou-v1-2.png";
import Amou3 from "../../assets/images/amou-v1-3.png";

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

const MoveUp = keyframes`
  0% {
    bottom: 100px;
    @media only screen and (max-width: 480px) {
      bottom: 200px;
  }
  }
  100% {
    bottom: 350px;
  }
`;

const StayTop = keyframes`
  0%, 100% {
    bottom: 350px;
  }
`;

const MoveDown = keyframes`
  0% {
    bottom: 350px;
  }
  100% {
    bottom: 100px;
    @media only screen and (max-width: 480px) {
      bottom: 200px;
  }
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
      animation: ${MoveUp} 0.3s forwards, ${StayTop} 0.07s forwards 0.3s,
        ${MoveDown} 0.4s forwards 0.37s;
    `}
  @media only screen and (max-width: 480px) {
    width: 70px;
    height: 70px;
    background-size: 70px 70px;
    bottom: 200px;
  }
`;

export default PlayerCharacter;
