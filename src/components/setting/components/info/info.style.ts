import { styled } from "styled-components";

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InfoContent = styled.div`
  margin: 120px 50px 70px 50px;
  padding: 0 10px;
  direction: ltr;
  font-family: sans-serif;
`;

export const InfoBody = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  height: 100%;
  font-weight: 500;
  max-height: 200px;
  text-align: justify;
`;
