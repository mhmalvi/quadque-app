import letsGo from "../../public/assets/Audio/lets-go.wav";

const letsGoAudio = new Audio(letsGo);
export const handleLetsGoAudio = () => {
  letsGoAudio.play();
};
