import { Link, useSearchParams } from "react-router-dom";
import PlayIcon from "../assets/icons/PlayIcon";
import moment from "moment";
import SongHorizontalDisplay from "../components/song/song_horizontal_display/SongHorizontalDisplay";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { PlaylistDetailTypes } from "../types/PlaylistDetailsTypes";
import { Swiper, SwiperSlide } from "swiper/react";
import SlidesNavigates from "../components/slides_navigate/SlidesNavigates";

export default function PlaylistDetails() {
  const [searchParams] = useSearchParams();

  const data = useGetData<PlaylistDetailTypes>(
    `${urls.playlistPage}?id=${searchParams.get("id")}`
  );

  return (
    <div
      style={{
        height: "calc(100% - 64px)",
      }}
      className="flex gap-[1%] pt-16"
    >
      <div className="h-full w-[38%] flex flex-col items-center z-[101] justify-start text-white/50">
        <div
          style={{
            backgroundImage: `url(${data?.thumbnailM})`,
          }}
          className="w-[280px] h-[280px] bg-black bg-contain rounded-md  bg-no-repeat shadow-2xl"
        />

        <div className="bg-[#4285F4] w-[280px] flex flex-col items-center rounded-bl-md rounded-br-md shadow-2xl">
          <p className="font-bold text-[1.6rem] pt-2 text-white">
            {data?.title}
          </p>
          <p className="text-[1.2rem] pt-2">{data?.song.total} Bài hát</p>
          <p className="text-[1.2rem] pt-2">
            Cập nhật:{" "}
            {moment(
              data?.contentLastUpdate && data?.contentLastUpdate * 1000
            ).format("DD/MM/yy")}
          </p>
          <p className="text-[1.2rem] pt-2">
            {data?.artists.map((artist) => (
              <Link
                key={artist.id}
                to={artist.name}
                className="group hover:underline hover:text-blue-300"
              >
                {artist.name} <span className="group-last:hidden">{", "}</span>
              </Link>
            ))}
          </p>

          <button className="flex items-center justify-between px-6 py-3 rounded-full gap-x-2 border border-black/20 text-[1.4rem] my-4">
            <PlayIcon width={1.6} height={1.6} /> Phát ngẫu nhiên
          </button>
        </div>
      </div>

      <div className="h-full w-[60%] relative">
        <div className="h-[40px] flex items-center mr-4 px-2 text-[1.3rem] text-white/80 border-b border-t border-white/20 absolute top-[0px] left-0 right-0 z-[101] bg-slate-500">
          <p className="w-[50%]">Bài hát</p>
          <p className="w-[15%] flex justify-center">Thời gian</p>
          <p className="w-[35%]  flex justify-end items-center gap-4">
            Ngày phát hành
          </p>
        </div>

        <div className="overflow-y-auto relative h-full">
          <Swiper slidesPerView={1} className="pt-[40px]">
            <SlidesNavigates
              title={`${data?.description}`}
              slot="container-start"
            />

            <SwiperSlide>
              {data?.song.items?.map((song) => (
                <SongHorizontalDisplay
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
            <SwiperSlide>Related</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
