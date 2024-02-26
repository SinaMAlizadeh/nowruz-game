import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

type Props = {
  $src: string;
};

export const ModalContent = styled.div<Props>`
  background-image: url(${(p) => p.$src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  z-index: 1051;
  overflow: hidden;
  position: relative;
  left: auto;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
