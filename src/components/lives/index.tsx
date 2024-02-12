import { useContext } from "react";
import LiveLogo from "../../assets/images/sabze.png";
import { GameContext } from "../../context/gameContext";
import { Live, LivesContent } from "./lives.style";

function Lives() {
  const {
    state: { lives },
  } = useContext(GameContext);

  return (
    <LivesContent>
      {lives
        ?.filter((x) => x.show)
        .map((item) => (
          <Live src={LiveLogo} key={item.id} />
        ))}
    </LivesContent>
  );
}

export default Lives;
