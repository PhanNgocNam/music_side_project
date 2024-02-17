import { Link, useSearchParams } from "react-router-dom";
import PlayIcon from "../assets/icons/PlayIcon";
import moment from "moment";
import SongHorizontalDisplay from "../components/song/song_horizontal_display/SongHorizontalDisplay";
import { urls } from "../constant/requestURL";
import { PlaylistDetailTypes } from "../types/PlaylistDetailsTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import SlidesNavigates from "../components/slides_navigate/SlidesNavigates";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setCurrentPlaylistReference } from "../features/current_playlist/currentPlaylistSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { get } from "../utils/get";
import { ResponseDataTypes } from "../types/ResponseDataTypes";
import wave from "../assets/images/wave.gif";
import { BiCurrentLocation } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

export default function PlaylistDetails() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { currentPlaylistReference } = useAppSelector(
    (state) => state.currentPlaylist
  );
  const { isPlaying } = useAppSelector((state) => state.playing);
  const { ready } = useAppSelector((state) => state.canPlay);
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  const { current_playlist_id } = useAppSelector(
    (state) => state.currentPlaylistId
  );
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const { ref, inView, entry } = useInView();
  const [data, setData] = useState<ResponseDataTypes<PlaylistDetailTypes>>();

  useEffect(() => {
    (async () => {
      const { data } = await get(
        `${urls.playlistPage}?id=${searchParams.get("id")}`
      );
      if (data) {
        setData(data);
      }
    })();
  }, [location.href]);

  useEffect(() => {
    if (data) dispatch(setCurrentPlaylistReference(data.data.data.song.items));
  }, [data]);

  return (
    <div className="flex h-fit pt-80 justify-start sm:pt-2 sm:flex-col sm:pb-96">
      <div
        className="h-[fit] w-[38%] sm:w-full"
        style={{
          backgroundImage: `url(${data?.data?.data.thumbnailM})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full flex flex-col items-center z-[101] justify-start text-white/50 sticky top-6 sm:flex-row sm:items-start sm:aspect-[2/1] sm:scroll-mt-48">
          <div
            style={{
              backgroundImage: `url(${data?.data?.data.thumbnailM})`,
            }}
            className="w-[280px] h-[280px] bg-contain bg-no-repeat shadow-2xl rounded-tl-md rounded-tr-md relative sm:w-1/2 sm:h-0 sm:pb-[50%] sm:hidden"
          >
            {isPlaying && current_playlist_id === data?.data.data.encodeId ? (
              <div className="flex justify-center items-center h-full w-full bg-black/30 sm:hidden">
                {ready ? (
                  <div className="flex justify-center items-center p-10 w-[80px] h-[80px] rounded-full border border-white/60">
                    <img src={wave} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}

            {inView === false &&
            searchParams.get("id") === current_playlist_id ? (
              <button
                onClick={() => {
                  entry?.target.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="absolute top-4 right-4 z-[105] sm:hidden"
              >
                <BiCurrentLocation size={22} color="rgba(255, 255, 255, .6)" />
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="bg-[#4285F4] w-[280px] flex flex-col text-center items-center  shadow-2xl rounded-bl-md rounded-br-md sm:w-1/2 sm:justify-center sm:h-full sm:flex-1 sm:bg-black/40 ">
            <p className="font-bold text-[1.6rem] pt-2 text-white">
              {data?.data?.data.title}
            </p>
            <p className="text-[1.2rem] pt-2">
              {data?.data?.data?.song.total} Bài hát
            </p>
            <p className="text-[1.2rem] pt-2">
              Cập nhật:{" "}
              {moment(
                data?.data?.data?.contentLastUpdate &&
                  data?.data?.data?.contentLastUpdate * 1000
              ).format("DD/MM/yy")}
            </p>
            <p className="text-[1.2rem] pt-2">
              {data?.data?.data?.artists?.map((artist) => (
                <Link
                  key={artist.id}
                  to={artist.name}
                  className="group hover:underline hover:text-blue-300"
                >
                  {artist.name}{" "}
                  <span className="group-last:hidden">{", "}</span>
                </Link>
              ))}
            </p>

            <button className="flex items-center justify-between px-6 py-3 rounded-full gap-x-2 border border-black/20 text-[1.4rem] my-4">
              <PlayIcon width={1.6} height={1.6} /> Phát ngẫu nhiên
            </button>
          </div>
        </div>
      </div>

      <div className="w-[60%] relative sm:w-full">
        <div className="w-full rounded-bl-lg rounded-br-lg pb-28">
          <div className="h-[40px] flex items-center mr-4 px-2 text-[1.3rem] text-white/80 border-b border-t border-white/20 absolute top-[0px] left-0 right-0 z-[101] bg-slate-500 sm:mr-0 sm:bg-transparent sm:hidden">
            <p className="w-[50%]">Bài hát</p>
            <p className="w-[15%] flex justify-center">Thời gian</p>
            <p className="w-[35%]  flex justify-end items-center gap-4">
              Ngày phát hành
            </p>
          </div>

          <div ref={swiperRef} className="overflow-y-auto relative h-full">
            <Swiper slidesPerView={1} className="pt-[40px] sm:pt-1">
              <SlidesNavigates
                title={`${data?.data?.data.description}`}
                slot="container-start"
              />

              <SwiperSlide>
                {currentPlaylistReference.map((song, index) => (
                  <SongHorizontalDisplay
                    ref={currentSongId === song.encodeId ? ref : null}
                    key={index}
                    belongTo={data?.data?.data.encodeId}
                    encodeId={song.encodeId}
                    duration={song.duration}
                    hasLyric={song.hasLyric}
                    releaseAt={song.releaseAt}
                    title={song.title}
                    thumbnail={song.thumbnail}
                    thumbnailM={song.thumbnailM}
                    artists={song.artists}
                  />
                ))}
              </SwiperSlide>
              {/* <SwiperSlide>Related</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
