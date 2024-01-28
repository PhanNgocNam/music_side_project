import { Link, useSearchParams } from "react-router-dom";
import PlayIcon from "../assets/icons/PlayIcon";
import moment from "moment";
import SongHorizontalDisplay from "../components/song/song_horizontal_display/SongHorizontalDisplay";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { PlaylistDetailTypes } from "../types/PlaylistDetailsTypes";

export default function PlaylistDetails() {
  const [searchParams] = useSearchParams();
  const data = useGetData<PlaylistDetailTypes>(
    `${urls.playlistPage}?id=${searchParams.get("id")}`
  );

  console.log(data?.artists);

  return (
    <div
      style={{
        height: "calc(100% - 64px)",
      }}
      className="flex gap-[1%] pt-16"
    >
      <div className="h-full w-[38%] flex flex-col items-center z-[101] justify-between text-white/50">
        <div
          style={{
            backgroundImage: `url(${data?.thumbnailM})`,
          }}
          className="w-[280px] h-[280px] bg-black bg-contain rounded-md bg-no-repeat shadow-2xl"
        />

        <p className="font-bold text-[1.6rem] pt-2">{data?.title}</p>
        <p className="text-[1.2rem] pt-2">
          Cập nhật:{" "}
          {moment(
            data?.contentLastUpdate && data?.contentLastUpdate * 1000
          ).format("DD/MM/yy")}
        </p>
        <p className="text-[1.2rem] pt-2">
          {data?.artists.map((artist) => (
            <Link
              to={artist.name}
              className="group hover:underline hover:text-blue-300"
            >
              {artist.name} <span className="group-last:hidden">{", "}</span>
            </Link>
          ))}
        </p>
        <p className="text-[1.2rem] pt-2">Lời tựa: {data?.description}</p>

        <button className="flex items-center justify-between px-6 py-3 rounded-full gap-x-2 border border-black/20 text-[1.4rem] my-4">
          <PlayIcon width={1.6} height={1.6} /> Phát ngẫu nhiên
        </button>
      </div>

      <div className="h-full w-[60%] overflow-y-auto">
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
      </div>
    </div>
  );
}
