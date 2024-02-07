import React from "react";
import { setCurrentTime } from "../../../features/current_time/currentTimeSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import { setReadyState } from "../../../features/can_play/canPlaySlice";
import { handleNextSong } from "../../../utils/handleNextSong";
import { setPause } from "../../../features/pause/pauseSlice";
import { setDuration } from "../../../features/duration/durationSlice";

const Audio = React.forwardRef<HTMLAudioElement, {}>(({}, ref) => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.currentSongUrl);
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { isLoop } = useAppSelector((state) => state.loop);

  return (
    <>
      <audio
        autoPlay={isPlaying}
        loop={isLoop}
        onCanPlay={() => dispatch(setReadyState())}
        onPause={() => dispatch(setPause(true))}
        onPlay={() => {
          if (ref && "current" in ref && ref.current) {
            console.log(ref.current.duration);
          }
          dispatch(setPause(false));
        }}
        onTimeUpdate={() => {
          if (ref && "current" in ref && ref.current) {
            dispatch(setCurrentTime(ref.current.currentTime));
          }
        }}
        ref={ref}
        onEnded={() => handleNextSong()}
        src={url}
      ></audio>
    </>
  );
});

export default Audio;
