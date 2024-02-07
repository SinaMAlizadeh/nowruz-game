import { useContext } from "react";
import Modal from "../modal";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";
import IconPlay from "../../assets/images/play-icon.png";
import IconReset from "../../assets/images/reset-icon.png";
import { MainIcon, SettingContent } from "./setting.style";

function Setting() {
  const {
    state: { play, lives },
    dispatch,
  } = useContext(GameContext);
  const numberOfLives = lives.some((x) => x.show);
  const continuePlay = () => {
    dispatch({
      type: Types.SetPlay,
      payload: {
        play: true,
      },
    });
  };

  return (
    <Modal isOpen={!play} onClose={continuePlay}>
      <SettingContent>
        {numberOfLives ? (
          <MainIcon src={IconPlay} onClick={continuePlay} />
        ) : (
          <MainIcon src={IconReset} />
        )}
      </SettingContent>
    </Modal>
  );
}

export default Setting;
