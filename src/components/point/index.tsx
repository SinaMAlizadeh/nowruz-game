import { useContext } from "react";
import { PointContent, PointNumber } from "./point.style";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";
import usePlayerPoint from "../../hooks/usePlayerPoint";

function Point() {
  const { dispatch } = useContext(GameContext);
  const { point } = usePlayerPoint();
  return (
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
  );
}

export default Point;
