import React, { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import ShuffleIcon from "../../../assets/icons/ShuffleIcon";
import PrevIcon from "../../../assets/icons/PrevIcon";
import NextIcon from "../../../assets/icons/NextIcon";
import LoopIcon from "../../../assets/icons/LoopIcon";
import { handleNextSong } from "../../../utils/handleNextSong";
import { handlePrevSong } from "../../../utils/handlePrevSong";
import { setLoop } from "../../../features/loop/loopSlice";
import { setRandom } from "../../../features/random/randomSlice";
import PlayButton from "../../play_button/PlayButton";

export default React.forwardRef<HTMLAudioElement>(function MainPlayer({}, ref) {
  const audioContext = new AudioContext();

  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { isLoop } = useAppSelector((state) => state.loop);
  const { isRandom } = useAppSelector((state) => state.random);

  useEffect(() => {
    if (ref && "current" in ref && ref.current && isPlaying) {
      ref.current?.play();
    } else ref && "current" in ref && ref.current?.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (audioContext.state === "running") {
      // console.log("Running...");
    }
    if (audioContext.state === "suspended") {
      // console.log("Off");
    }
  }, [audioContext]);

  return (
    <div className="flex justify-center items-center relative flex-1">
      <div className="flex justify-between items-center min-w-[196px]">
        <button
          onClick={() => dispatch(setRandom(!isRandom))}
          className="hover:opacity-60"
        >
          <ShuffleIcon
            width={1.8}
            height={1.8}
            classname="cursor-pointer"
            fill={isRandom ? "#4285F4" : ""}
          />
        </button>

        <button
          onClick={(event) => {
            event.stopPropagation();
            handlePrevSong();
          }}
          className="hover:opacity-60"
        >
          <PrevIcon
            width={1.8}
            height={1.8}
            fill="white"
            classname="cursor-pointer"
          />{" "}
        </button>

        {/*Play Btn */}
        <PlayButton />

        <button
          onClick={(event) => {
            event.stopPropagation();
            handleNextSong();
          }}
          className="hover:opacity-60"
        >
          <NextIcon
            width={1.8}
            height={1.8}
            fill="white"
            classname="cursor-pointer"
          />
        </button>
        <button
          onClick={() => dispatch(setLoop(!isLoop))}
          className="hover:opacity-60"
        >
          <LoopIcon
            width={1.8}
            height={1.8}
            classname="cursor-pointer sm:mr-2"
            fill={isLoop ? "#4285F4" : ""}
          />
        </button>
      </div>
    </div>
  );
});
