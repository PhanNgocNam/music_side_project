import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { get } from "../../../utils/get";
import { urls } from "../../../constant/requestURL";
import { SongInfoTypes } from "../../../types/SongInfoTypes";
import { ResponseDataTypes } from "../../../types/ResponseDataTypes";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Left() {
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  const { duration } = useAppSelector((state) => state.duration);
  const { currentTime } = useAppSelector((state) => state.currentTime);
  const [leftData, setLeftData] = useState<ResponseDataTypes<SongInfoTypes>>();
  const navigate = useNavigate();
  const { current_playlist_id } = useAppSelector(
    (state) => state.currentPlaylistId
  );
  useEffect(() => {
    if (currentSongId) {
      (async () => {
        const { data } = await get(`${urls.songInfo}?id=${currentSongId}`);
        setLeftData(data);
      })();
    }
  }, [currentSongId]);

  return (
    <div
      onClick={() => navigate(`/vi/list/?id=${current_playlist_id}`)}
      className="min-w-60 w-[240px] flex flex-1 justify-start gap-3 items-center"
    >
      <div
        style={{
          height: "40px",
          width: "40px",
          backgroundImage: `url(${leftData?.data.data.thumbnailM})`,
        }}
        className="bg-no-repeat bg-cover rounded-md object-cover"
      />
      <div className="text-[1.2rem] text-white/80 flex-1">
        <p className=" one_line">{leftData?.data.data.title}</p>
        <p className="text-[1rem] one_line">
          {leftData?.data.data.artistsNames}
        </p>
        <p className="text-[.9rem]">{`${moment(currentTime * 1000).format(
          "mm:ss"
        )}/${moment(duration * 1000).format("mm:ss")}`}</p>
      </div>
    </div>
  );
}
