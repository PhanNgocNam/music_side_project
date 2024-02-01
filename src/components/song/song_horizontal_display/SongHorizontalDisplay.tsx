import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/icons/HeartIcon";
import { SongTypes } from "../../../types/SongTypes";
import moment from "moment";
import PlayIcon from "../../../assets/icons/PlayIcon";
import { urls } from "../../../constant/requestURL";
import { get } from "../../../utils/get";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setCurrentSongUrl } from "../../../features/current_song_url/currentSongUrlSlide";
import { setCurrentSongId } from "../../../features/current_song_id/currentSongIdSlice";
import { setDuration } from "../../../features/duration/durationSlice";

export default function SongHorizontalDisplay({
  encodeId,
  title,
  duration,
  releaseAt,
  artists,
  thumbnail,
  thumbnailM,
  hasLyric,
}: SongTypes) {
  const dispatch = useAppDispatch();
  const handlePlayNewSong = () => {
    dispatch(setDuration(duration));
    get(`${urls.sound}?id=${encodeId}`).then((result) => {
      dispatch(setCurrentSongId(encodeId));
      dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
    });
  };
  return (
    <div className="h-[60px] flex items-center justify-between px-2 border-b border-white/30 z-[101] text-white/50 group hover:bg-white/20 mr-4 group">
      <div className="w-[50%] h-full flex justify-between items-center z-[101]">
        <div className="flex items-center gap-4 justify-start">
          <div className="relative m-h-[48px] m-w-[48px] flex justify-center items-center">
            <div
              style={{
                backgroundImage: `url(${thumbnail})`,
              }}
              className="h-[40px] w-[40px] rounded-md object-cover bg-no-repeat bg-cover"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 shadow-2xl">
              <PlayIcon
                onClick={() => handlePlayNewSong()}
                width={1.8}
                height={1.8}
                fill="white"
                classname="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </span>
          </div>
          <div className="z-[101]">
            <p className="text-[1.3rem] one_line text-white/80">{title}</p>
            <p className="text-[1.1rem]">
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

      <div className="w-[15%] h-full flex justify-center items-center text-[1.1rem] z-[101">
        {moment.utc(duration * 1000).format("mm:ss")}
      </div>
      <div className="w-[35%] h-full flex justify-end items-center text-[1.1rem] z-[101] gap-10">
        <HeartIcon width={1.8} height={1.8} />
        {moment(releaseAt).format("DD/MM/YYYY")}
      </div>
    </div>
  );
}
