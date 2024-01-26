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

export default React.forwardRef<HTMLAudioElement>(function MainPlayer({}, ref) {
  const [audioStatus, setAudioStatus] = useState("unknown");
  const audioContext = new AudioContext();

  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.playing);

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

  return (
    <div className="flex justify-center items-center relative">
      <div className="flex justify-between items-center min-w-[196px]">
        <button className="hover:opacity-60">
          <ShuffleIcon width={1.8} height={1.8} classname="cursor-pointer" />
        </button>

        <button className="hover:opacity-60">
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
            onClick={() => dispatch(triggerPauseOrPlay())}
          >
            {isPlaying ? (
              <PauseIcon width={2.2} height={2.2} />
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

        <button className="hover:opacity-60">
          <NextIcon
            width={1.8}
            height={1.8}
            fill="white"
            classname="cursor-pointer"
          />
        </button>
        <button className="hover:opacity-60">
          <LoopIcon width={1.8} height={1.8} classname="cursor-pointer" />
        </button>
      </div>
    </div>
  );
});
