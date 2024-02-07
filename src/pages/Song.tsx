import { useSearchParams } from "react-router-dom";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { ResponseDataTypes } from "../types/ResponseDataTypes";
import { SongTypes } from "../types/SongTypes";
import PlayIcon from "../assets/icons/PlayIcon";
import PlayButton from "../components/play_button/PlayButton";

export default function Song() {
  const [searchParams] = useSearchParams();
  const data = useGetData<ResponseDataTypes<SongTypes>>(
    `${urls.songInfo}?id=${searchParams.get("id")}`,
    []
  );

  return (
    <div className="h-full">
      <div className="bg-[#4285F4] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[70%] flex p-4 rounded-md">
        <img
          className="z-[106] max-w-[240px] max-h-[240px] rounded-md"
          src={data?.data?.data.thumbnailM}
          alt={data?.data?.data.thumbnailM}
        />
        <div className="w-[240px] h-[240px] pl-4">
          <div className="flex justify-between">
            <p className="text-[2rem] font-bold">{data?.data?.data?.title}</p>
            <PlayButton />
          </div>
          <p>
            {data?.data?.data?.artists?.map((artist) => (
              <>
                <span className="text-[1rem]">{artist.name} </span>{" "}
                <span className="last:hidden">, </span>
              </>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
