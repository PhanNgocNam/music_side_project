import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { get } from "../../../utils/get";
import { urls } from "../../../constant/requestURL";
import { SongInfoTypes } from "../../../types/SongInfoTypes";
import { ResponseDataTypes } from "../../../types/ResponseDataTypes";
import moment from "moment";

export default function Left() {
  const { currentSongId } = useAppSelector((state) => state.currentSongId);
  const { duration } = useAppSelector((state) => state.duration);
  const { currentTime } = useAppSelector((state) => state.currentTime);
  const [leftData, setLeftData] = useState<ResponseDataTypes<SongInfoTypes>>();
  useEffect(() => {
    if (currentSongId) {
      (async () => {
        const { data } = await get(`${urls.songInfo}?id=${currentSongId}`);
        setLeftData(data);
      })();
    }
  }, [currentSongId]);

  return (
    <div className="min-w-60 w-[240px] flex justify-start gap-3 items-center">
      <div
        style={{
          height: "40px",
          width: "40px",
          backgroundImage: `url(${leftData?.data.data.thumbnail})`,
        }}
        className="bg-no-repeat bg-center bg-contain rounded-md"
      ></div>
      <div className="text-[1.2rem] text-white/80">
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
