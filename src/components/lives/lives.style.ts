import { styled } from "styled-components";

export const LivesContent = styled.div`
  position: absolute;
  right: 20px;
  top: 40px;
  display: flex;
  gap: 10px;
`;

export const Live = styled.img`
  width: 40px;
  @media only screen and (max-width: 480px) {
    width: 30px;
  }
`;
