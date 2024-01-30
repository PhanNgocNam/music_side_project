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
import { urls } from "../../../constant/requestURL";
import { get } from "../../../utils/get";
import { setCurrentSongId } from "../../../features/current_song_id/currentSongIdSlice";
import { setCurrentSongUrl } from "../../../features/current_song_url/currentSongUrlSlide";

export default React.forwardRef<HTMLAudioElement>(function MainPlayer({}, ref) {
  const [audioStatus, setAudioStatus] = useState("unknown");
  const audioContext = new AudioContext();

  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  const { list } = useAppSelector((state) => state.currentPlaylist);

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

  async function handlePrevSong() {
    let index = list.findIndex((song) => song.encodeId === currentSongId);
    if (index) {
      dispatch(setDuration(list[index - 1].duration));
      get(`${urls.sound}?id=${list[index - 1].encodeId}`).then((result) => {
        dispatch(setCurrentSongId(list[index - 1].encodeId));
        dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
      });
    }
  }

  return (
    <div className="flex justify-center items-center relative">
      <div className="flex justify-between items-center min-w-[196px]">
        <button className="hover:opacity-60">
          <ShuffleIcon width={1.8} height={1.8} classname="cursor-pointer" />
        </button>

        <button onClick={() => handlePrevSong()} className="hover:opacity-60">
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

        <button
          onClick={() => handleNextSong(true)}
          className="hover:opacity-60"
        >
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
