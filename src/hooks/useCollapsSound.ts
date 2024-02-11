import audio from "../assets/sound/collaps-sound.mp3";

function useCollapseSound() {
  const playAudio = (sound: boolean) => {
    if (sound) new Audio(audio).play();
  };

  return { playAudio };
}

export default useCollapseSound;
