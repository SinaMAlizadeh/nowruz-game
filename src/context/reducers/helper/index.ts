import { Live } from "../../../models/live";

const playerHasLive = (lives: Array<Live>): boolean => {
  return lives.some((x) => x.show);
};

export default playerHasLive;
