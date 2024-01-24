import { Live } from "../../models/live";
import LiveLogo from "../../assets/images/sabze.png";

type Props = {
  lives: Live[];
};

function Lives({ lives }: Props) {
  return (
    <div style={{ position: "absolute", right: "20px", top: "20px" }}>
      {lives?.map((item) => (
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
