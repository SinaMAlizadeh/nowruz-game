import styled, { keyframes } from "styled-components";

export const upDown = keyframes`
0% {
    transform: translateY(0); /* Start at the initial position */
  }
  50% {
    transform: translateY(-10%); /* Move up */
  }
  100% {
    transform: translateY(0); /* Return to the initial position */
  }
`;

export const Cloud = styled.img`
  height: 20%;
  right: 12%;
  animation: ${upDown} 3s ease-in-out infinite;
  position: absolute;
  top: 5%;
  @media (max-width: 600px) {
    width: 16%;
  }
`;
