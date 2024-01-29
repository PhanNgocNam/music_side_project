import React from "react";
import { setCurrentTime } from "../../../features/current_time/currentTimeSlice";
import { triggerPauseOrPlay } from "../../../features/playing/isPlayingSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Audio = React.forwardRef<HTMLAudioElement, {}>(({}, ref) => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.currentSongUrl);
  const { isPlaying } = useAppSelector((state) => state.playing);

  return (
    <>
      <audio
        autoPlay={isPlaying}
        onTimeUpdate={() => {
          if (ref && "current" in ref && ref.current) {
            dispatch(setCurrentTime(ref.current.currentTime));
          }
        }}
        ref={ref}
        onEnded={() => dispatch(triggerPauseOrPlay())}
        src={url}
      ></audio>
    </>
  );
});

export default Audio;
