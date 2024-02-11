import { useContext } from "react";
import { PointContent, PointNumber } from "./point.style";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";

function Point() {
  const {
    dispatch,
    state: { point },
  } = useContext(GameContext);
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
