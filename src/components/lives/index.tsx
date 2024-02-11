import { useContext } from "react";
import LiveLogo from "../../assets/images/sabze.png";
import { GameContext } from "../../context/gameContext";
import { LivesContent } from "./lives.style";

function Lives() {
  const {
    state: { lives },
  } = useContext(GameContext);
  return (
    <LivesContent>
      {lives
        ?.filter((x) => x.show)
        .map((item) => (
          <img src={LiveLogo} key={item.id} width="40" />
        ))}
    </LivesContent>
  );
}

export default Lives;
