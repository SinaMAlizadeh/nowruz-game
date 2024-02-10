import { useContext } from "react";
import Modal from "../modal";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";
import IconPlay from "../../assets/images/play-icon.png";
import IconReset from "../../assets/images/reset-icon.png";
import { MainIcon, SettingContent } from "./setting.style";
import playerHasLive from "../../context/reducers/helper";

function Setting() {
  const {
    state: { play, lives },
    dispatch,
  } = useContext(GameContext);
  const numberOfLives = playerHasLive(lives);
  const continuePlay = () => {
    dispatch({
      type: Types.SetPlay,
      payload: {
        play: true,
      },
    });
  };

  const resetGame = () => {
    dispatch({
      type: Types.ResetGame,
    });
  };

  return (
    <Modal isOpen={!play} onClose={continuePlay}>
      <SettingContent>
        {numberOfLives ? (
          <MainIcon src={IconPlay} onClick={continuePlay} />
        ) : (
          <MainIcon src={IconReset} onClick={resetGame} />
        )}
      </SettingContent>
    </Modal>
  );
}

export default Setting;
