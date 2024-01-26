import React from "react";
import { setCurrentTime } from "../../../features/current_time/currentTimeSlice";
import { triggerPauseOrPlay } from "../../../features/playing/isPlayingSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

const Audio = React.forwardRef<HTMLAudioElement, {}>(({}, ref) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <audio
        onTimeUpdate={() => {
          if (ref && "current" in ref && ref.current) {
            dispatch(setCurrentTime(ref.current.currentTime));
          }
        }}
        ref={ref}
        onEnded={() => dispatch(triggerPauseOrPlay())}
        src="https://a128-zmp3.zmdcdn.me/97751aea811287b6cd83ee7fa364d195?authen=exp=1706451017~acl=/97751aea811287b6cd83ee7fa364d195/*~hmac=0b533accc5c7e894b7a5a2fe7a2880a0"
      ></audio>
    </>
  );
});

export default Audio;
