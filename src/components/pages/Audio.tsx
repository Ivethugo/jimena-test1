import { NewModal } from "../index.ts";
import { useOpenningTime } from "../../store/openning_time/useOpenningTime.ts";
import ReactPlayer from "react-player";
import Sound from "../../assets/audio/Ed_Sheeran_Thinking_Out_Loud.mp3";
import { useAudio } from "../../store/audio/useAudio.ts";

export function Audio() {
  const { setPreloading, setWelcome, timePreloading } = useOpenningTime();
  const { audio } = useAudio();

  const handleModalConfirm = () => {
    setPreloading(true);

    const timer = setTimeout(() => {
      setWelcome(true);
    }, timePreloading + 2000);

    return () => clearTimeout(timer);
  };

  return (
    <>
      <ReactPlayer
        url={Sound}
        loop={true}
        playing={audio}
        controls
        width="0px"
        height="0px"
      />
      <NewModal time={0} onConfirm={handleModalConfirm} />
    </>
  );
}
