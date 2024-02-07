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
  z-index: 1050; // Make sure it's above other content: ;
`;

type Props = {
  $src: string;
};

export const ModalContent = styled.div<Props>`
  background-image: url(${(p) => p.$src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 600px;
  height: 600px;
  padding: 20px;
  border-radius: 5px;
  z-index: 1051;
  max-width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
`;
