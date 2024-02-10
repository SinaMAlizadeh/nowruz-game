import { useContext } from "react";
import { PointContent } from "./point.style";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";

function Point() {
  const { dispatch } = useContext(GameContext);
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
      120
    </PointContent>
  );
}

export default Point;
