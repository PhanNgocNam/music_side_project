import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import HeartIcon from "../../../assets/icons/HeartIcon";
import { SongTypes } from "../../../types/SongTypes";
import moment from "moment";
import PlayIcon from "../../../assets/icons/PlayIcon";
import { GrVolume } from "react-icons/gr";
import { setIsPlaying } from "../../../features/playing/isPlayingSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { AiOutlineLoading } from "react-icons/ai";
import { handlePlayNewSong } from "../../../utils/handlePlayNewSong";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

export default React.forwardRef<HTMLDivElement | null, SongTypes>(
  function SongHorizontalDisplay(
    { encodeId, title, duration, releaseAt, artists, thumbnail, belongTo },
    songHorizontalDisplayRef
  ) {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const { currentSongId } = useAppSelector((state) => state.currentSongId);
    const { isPause } = useAppSelector((state) => state.pause);
    const { current_playlist_id } = useAppSelector(
      (state) => state.currentPlaylistId
    );
    const { isPlaying } = useAppSelector((state) => state.playing);
    const { ready } = useAppSelector((state) => state.canPlay);

    const isPlayingConditional =
      isPlaying &&
      currentSongId === encodeId &&
      current_playlist_id === searchParams.get("id");

    const isCurrentSongConditional =
      currentSongId === encodeId &&
      current_playlist_id === searchParams.get("id");

    const playingNode = ready ? (
      <GrVolume size={20} className="shadow-2xl text-white" />
    ) : (
      <AiOutlineLoading size={20} className="animate-spin text-white" />
    );

    return (
      <div
        ref={songHorizontalDisplayRef}
        className="h-[60px] flex items-center justify-between px-2 border-b border-white/30 z-[101] text-white/50 group hover:bg-white/20 mr-4 group rounded-md"
        style={{
          background:
            encodeId === currentSongId ? "rgba(255, 255, 255, 0.08)" : "",
        }}
      >
        <div className="w-[50%] h-full flex justify-between items-center z-[101] sm:flex-1">
          <div className="flex items-center gap-4 justify-start">
            <div className="relative m-h-[48px] m-w-[48px] flex justify-center items-center group">
              <div
                style={{
                  backgroundImage: `url(${thumbnail})`,
                }}
                className="h-[40px] w-[40px] rounded-md object-cover bg-no-repeat bg-cover"
              >
                {isPlayingConditional ? (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50" />
                ) : (
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10" />
                )}
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 shadow-2xl">
                {isPlayingConditional ? (
                  playingNode
                ) : isPause && isCurrentSongConditional ? (
                  <PlayIcon
                    onClick={() => dispatch(setIsPlaying())}
                    width={1.8}
                    height={1.8}
                    fill="white"
                    classname={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block`}
                  />
                ) : (
                  <PlayIcon
                    onClick={() =>
                      handlePlayNewSong(
                        duration,
                        belongTo ? belongTo : "",
                        encodeId,
                        `${title}`,
                        "playlist"
                      )
                    }
                    width={1.8}
                    height={1.8}
                    fill="white"
                    classname={`hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:block ${
                      isPause && encodeId === currentSongId ? "!block" : ""
                    } `}
                  />
                )}
              </span>
            </div>
            <div className="z-[101]">
              <p className="text-[1.3rem] one_line text-white/80">{title}</p>
              <p className="text-[1.1rem] two_line">
                {artists?.map((artist, index) => (
                  <Link
                    key={index}
                    to={artist.name}
                    className="group hover:underline hover:text-blue-300"
                  >
                    {artist.name}
                    <span className="group-last:hidden">{", "}</span>
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>

        <div className="w-[15%] h-full flex justify-center items-center text-[1.1rem] z-[101] sm:justify-end sm:pr-2">
          {moment.utc(duration * 1000).format("mm:ss")}
        </div>
        <div className="w-[35%] h-full flex justify-end items-center text-[1.1rem] z-[101] gap-10 sm:hidden">
          <HeartIcon width={1.8} height={1.8} />
          {moment(releaseAt).format("DD/MM/YYYY")}
        </div>
      </div>
    );
  }
);
