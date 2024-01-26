import { useContext } from "react";
import LiveLogo from "../../assets/images/sabze.png";
import { GameContext } from "../../context/gameContext";

function Lives() {
  const { state } = useContext(GameContext);
  return (
    <div style={{ position: "absolute", right: "20px", top: "20px" }}>
      {state?.lives
        ?.filter((x) => x.show)
        .map((item) => (
          <img
            src={LiveLogo}
            key={item.id}
            width="23"
            style={{ marginLeft: "10px" }}
          />
        ))}
    </div>
  );
}

export default Lives;
