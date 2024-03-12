import { useContext } from "react";
import Modal from "../modal";
import { GameContext } from "../../context/gameContext";
import { Types } from "../../context/reducers";
import IconPlay from "../../assets/images/play-icon.png";
import IconSound from "../../assets/images/sound-icon.png";
import IconReset from "../../assets/images/reset-icon.png";
import IconInfo from "../../assets/images/info-icon.png";
import IconGithub from "../../assets/images/github-icon.png";
import {
  MainIcon,
  MenuItem,
  MenuItems,
  ModalHeader,
  SettingContent,
} from "./setting.style";
import playerHasLive from "../../context/reducers/helper";
import GameInfo from "./components/info";
import { GITHUB_URL } from "../../utilities/const";

function Setting() {
  const {
    state: { play, lives, sound, showInfo, win },
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

  const soundToggle = () => {
    dispatch({
      type: Types.SetGameSound,
      payload: {
        sound: !sound,
      },
    });
  };

  const infoHandler = () => {
    dispatch({
      type: Types.SetShowInfo,
      payload: {
        show: true,
      },
    });
  };

  return (
    <Modal isOpen={!play} onClose={continuePlay}>
      <ModalHeader>{win ? "!Happy Nowruz" : "Nowruz Game"}</ModalHeader>
      <SettingContent>
        {showInfo ? (
          <GameInfo />
        ) : (
          <>
            {numberOfLives ? (
              <MainIcon src={IconPlay} onClick={continuePlay} />
            ) : (
              <MainIcon src={IconReset} onClick={resetGame} />
            )}

            <MenuItems>
              <MenuItem $src={IconSound} $off={sound} onClick={soundToggle} />
              <MenuItem $src={IconInfo} $off={true} onClick={infoHandler} />
              <MenuItem
                $src={IconGithub}
                $off={true}
                onClick={() => window.open(GITHUB_URL, "_blank")}
              />
            </MenuItems>
          </>
        )}
      </SettingContent>
    </Modal>
  );
}

export default Setting;
