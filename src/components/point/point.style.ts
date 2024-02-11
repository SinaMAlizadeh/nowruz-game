import styled from "styled-components";
import PointBox from "../../assets/images/SETTING_SCORE.png";

export const PointContent = styled.div`
  background: url(${PointBox});
  background-repeat: no-repeat;
  background-size: 100px 50px;
  position: absolute;
  height: 50px;
  width: 100px;
  left: 20px;
  top: 40px;
`;

export const PointNumber = styled.b`
  color: white;
  display: flex;
  justify-content: start;
  padding-top: 12px;
  padding-right: 20px;
`;
