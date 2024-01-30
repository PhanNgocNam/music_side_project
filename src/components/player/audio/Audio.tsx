import React from "react";
import { setCurrentTime } from "../../../features/current_time/currentTimeSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { setDuration } from "../../../features/duration/durationSlice";
import { urls } from "../../../constant/requestURL";
import { get } from "../../../utils/get";
import { setCurrentSongId } from "../../../features/current_song_id/currentSongIdSlice";
import { setCurrentSongUrl } from "../../../features/current_song_url/currentSongUrlSlide";

const Audio = React.forwardRef<HTMLAudioElement, {}>(({}, ref) => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.currentSongUrl);
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { list } = useAppSelector((state) => state.currentPlaylist);
  const { currentSongId } = useAppSelector((state) => state.currentSongId);

  async function handleNextSong(isShuffleMode: boolean) {
    let index = list.findIndex((song) => song.encodeId === currentSongId);
    let songIndexPosition;
    if (!isShuffleMode) {
      songIndexPosition = index !== -1 && index + 1;
    } else {
      songIndexPosition =
        index !== 1 && Math.floor(Math.random() * (list.length + 1));
    }
    if (songIndexPosition && songIndexPosition < list.length) {
      dispatch(setDuration(list[songIndexPosition].duration));
      get(`${urls.sound}?id=${list[songIndexPosition].encodeId}`).then(
        (result) => {
          dispatch(setCurrentSongId(list[songIndexPosition].encodeId));
          dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
        }
      );
    }
  }

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
        onEnded={() => handleNextSong(true)}
        src={url}
      ></audio>
    </>
  );
});

export default Audio;
