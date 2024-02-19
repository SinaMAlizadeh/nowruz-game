import styled from "styled-components";
import PointBox from "../../assets/images/SETTING_SCORE.png";

export const PointContent = styled.div`
  background: url(${PointBox});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  height: 75px;
  width: 150px;
  left: 20px;
  top: 40px;
  @media only screen and (max-width: 480px) {
    height: 50px;
    width: 100px;
  }
`;

export const PointNumber = styled.b`
  color: white;
  display: flex;
  justify-content: start;
  padding-top: 22px;
  padding-right: 30px;
  font-size: 1.2rem;
  font-family: monospace;
  @media only screen and (max-width: 480px) {
    padding-top: 15px;
    padding-right: 17px;
    font-size: 0.8rem;
  }
`;
