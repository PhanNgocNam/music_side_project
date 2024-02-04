import React, { useEffect, useState } from "react";
import PauseIcon from "../../../assets/icons/PauseIcon";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { triggerPauseOrPlay } from "../../../features/playing/isPlayingSlice";
import PlayIcon from "../../../assets/icons/PlayIcon";
import ShuffleIcon from "../../../assets/icons/ShuffleIcon";
import PrevIcon from "../../../assets/icons/PrevIcon";
import NextIcon from "../../../assets/icons/NextIcon";
import LoopIcon from "../../../assets/icons/LoopIcon";
import { setDuration } from "../../../features/duration/durationSlice";
import { TbLoader2 } from "react-icons/tb";
import { handleNextSong } from "../../../utils/handleNextSong";
import { handlePrevSong } from "../../../utils/handlePrevSong";
import { setLoop } from "../../../features/loop/loopSlice";
import { setRandom } from "../../../features/random/randomSlice";

export default React.forwardRef<HTMLAudioElement>(function MainPlayer({}, ref) {
  const [audioStatus, setAudioStatus] = useState("unknown");
  const audioContext = new AudioContext();

  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { ready } = useAppSelector((state) => state.canPlay);
  const { isLoop } = useAppSelector((state) => state.loop);
  const { isRandom } = useAppSelector((state) => state.random);

  useEffect(() => {
    if (ref && "current" in ref && ref.current && isPlaying) {
      ref.current?.play();
      dispatch(setDuration(ref.current.duration));
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

  const playingNode = ready ? (
    <PauseIcon width={2.2} height={2.2} />
  ) : (
    <TbLoader2 size={22} className="animate-spin text-white" />
  );

  return (
    <div className="flex justify-center items-center relative">
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

        <button className="hover:opacity-60">
          <button
            className="w-[36px] h-[36px] rounded-full border border-white/20 flex justify-center items-center relative"
            onClick={(event) => {
              event.stopPropagation();
              dispatch(triggerPauseOrPlay());
            }}
          >
            {isPlaying ? (
              playingNode
            ) : (
              <PlayIcon
                width={2.2}
                height={2.2}
                fill="white"
                classname="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[50%]"
              />
            )}
          </button>
        </button>

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
            classname="cursor-pointer"
            fill={isLoop ? "#4285F4" : ""}
          />
        </button>
      </div>
    </div>
  );
});
