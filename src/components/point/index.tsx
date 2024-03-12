import { useContext } from "react";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";
import usePlayerPoint from "../../hooks/usePlayerPoint";
import Celebrate from "../celebrate";
import { PointContent, PointNumber } from "./point.style";

function Point() {
  const { dispatch } = useContext(GameContext);
  const { point, win } = usePlayerPoint();

  return (
    <>
      {win && <Celebrate />}
      <PointContent
        onClick={() =>
          dispatch({
            type: Types.SetPlay,
            payload: {
              play: false,
            },
          })
        }
      >
        <PointNumber>{point}</PointNumber>
      </PointContent>
    </>
  );
}

export default Point;
