import styled from "styled-components";
import PointBox from "../../assets/images/SETTING_SCORE.png";

export const PointContent = styled.div`
  background: url(${PointBox});
  background-repeat: no-repeat;
  background-size: 150px 75px;
  position: absolute;
  height: 75px;
  width: 150px;
  left: 20px;
  top: 40px;
`;

export const PointNumber = styled.b`
  color: white;
  display: flex;
  justify-content: start;
  padding-top: 22px;
  padding-right: 30px;
  font-size: 1.2rem;
  font-family: monospace;
`;
