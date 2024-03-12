import { css, styled } from "styled-components";

export const SettingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainIcon = styled.img`
  width: 25%;
  margin-top: 25%;
`;

export const MenuItems = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ModalHeader = styled.div`
  position: absolute;
  top: 20px;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-family: fantasy;
  font-weight: 100;
  font-size: 2rem;
  color: black;
`;

type Props = {
  $off?: boolean;
  $src: string;
};

export const MenuItem = styled.div<Props>`
  background: url(${(p) => p.$src});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  position: relative;
  ${(props) =>
    !props.$off &&
    css`
      &:after {
        content: "";
        width: 50px;
        height: 0px;
        border-bottom: 5px solid #2e7a5e;
        position: absolute;
        transform: rotateY(0deg) rotate(120deg);
        left: 0px;
        top: 23px;
      }
    `}
`;
