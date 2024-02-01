import { useSearchParams } from "react-router-dom";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { ArtistsPageDataTypes } from "../types/ArtistsPageDataType";
import Carousel from "../components/carousel/Carousel";
import { useState } from "react";
import ListVerticalSong from "../components/list_vertical_songs/ListVerticalSong";

export default function Artists() {
  const [searchParams] = useSearchParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const data = useGetData<ArtistsPageDataTypes>(
    `${urls.artist}?id=${searchParams.get("id")}`
  );

  const bios = data?.biography
    .split("<br>")
    .map((para) => <p className="last:inline">{para}</p>);

  return (
    <div
      style={{
        backgroundImage: `url(${data?.thumbnailM})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat-x",
      }}
      className="w-full h-full z-[102]  overflow-y-auto"
    >
      <div className="h-fit p-2 bg-black/40 w-full">
        <div className="w-[600px] mx-auto px-2 text-white">
          <div className="flex justify-between w-[600px] pl-2">
            <div className="w-[30%]">
              <p className="font-bold text-[1.8rem]">{data?.name}</p>
              <p className="py-2 text-[1.2rem]">
                Quốc tịch: {data?.national ? data?.national : "Chưa cập nhật"}
              </p>
              <p className="py-2 text-[1.2rem]">
                Tên thật: {data?.realname ? data?.realname : "Chưa cập nhật"}
              </p>
              <p className="py-2 text-[1.2rem]">
                Năm sinh: {data?.birthday ? data?.birthday : "Chưa cập nhật"}
              </p>
            </div>
          </div>
          <div className="text-[1.2rem] pl-2">
            <span>
              {data?.sortBiography.split("<br >").map((para) => (
                <p className="last:inline">{para}</p>
              ))}
            </span>

            {isReadMore ? (
              <span
                className="cursor-pointer hover:underline"
                onClick={() => setIsReadMore(!isReadMore)}
              >
                ...xem thêm
              </span>
            ) : (
              <>
                <span>{bios}</span>
                <span
                  onClick={() => setIsReadMore(true)}
                  className="hover:underline cursor-pointer"
                >
                  ..ẩn bớt
                </span>
              </>
            )}
          </div>

          <ListVerticalSong numberOfSong={10} encodeId={data?.playlistId} />

          <Carousel
            hdClassName="px-2"
            className="px-2 pr-4"
            slidesPerView={3}
            items={data?.sections && data?.sections[1].items}
            title={data?.sections && data.sections[1].title}
          />
        </div>
      </div>
    </div>
  );
}
