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
        src="https://a128-zmp3.zmdcdn.me/2ac106c140d99721bf1d8dde14bc97ac?authen=exp=1706258855~acl=/2ac106c140d99721bf1d8dde14bc97ac/*~hmac=1ef4e66cf418285ba5cc4e457c1ecc03"
      ></audio>
    </>
  );
});

export default Audio;
