import { useSearchParams } from "react-router-dom";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { ArtistsPageDataTypes } from "../types/ArtistsPageDataType";
import Carousel from "../components/carousel/Carousel";
import { useState } from "react";
import { ResponseDataTypes } from "../types/ResponseDataTypes";
import { CarouselItemTypes } from "../types/CarouselItemType";

export default function Artists() {
  const [searchParams] = useSearchParams();
  const [isReadMore, setIsReadMore] = useState(true);
  const data = useGetData<
    ResponseDataTypes<ArtistsPageDataTypes<CarouselItemTypes>>
  >(`${urls.artist}?id=${searchParams.get("id")}`, []);

  const bios = data?.data?.data.biography
    .split("<br>")
    .map((para) => <p className="last:inline">{para}</p>);

  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url(${data?.data?.data.thumbnailM})`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
      className="w-full h-full z-[102]  overflow-y-auto pb-96"
    >
      <div className="h-fit bg-black/40 w-full">
        <div className="w-[600px] mx-auto px-2 text-white p-2 sm:w-full">
          <div className="flex justify-between w-[600px] pl-2">
            <div className="w-[30%]">
              <p className="font-bold text-[1.8rem]">{data?.data?.data.name}</p>
              <p className="py-2 text-[1.2rem]">
                Quốc tịch:{" "}
                {data?.data?.data.national
                  ? data?.data?.data.national
                  : "Chưa cập nhật"}
              </p>
              <p className="py-2 text-[1.2rem]">
                Tên thật:{" "}
                {data?.data?.data.realname
                  ? data?.data?.data.realname
                  : "Chưa cập nhật"}
              </p>
              <p className="py-2 text-[1.2rem]">
                Năm sinh:{" "}
                {data?.data?.data.birthday
                  ? data?.data?.data.birthday
                  : "Chưa cập nhật"}
              </p>
            </div>
          </div>

          <div className="text-[1.3rem] pl-2 sm:text-[1.2rem]">
            <span>
              {data?.data?.data?.sortBiography.split("<br >").map((para) => (
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
                  className="hover:underline cursor-pointer z-[103]"
                >
                  ..ẩn bớt
                </span>
              </>
            )}
          </div>

          {data?.data?.data.sections
            ?.filter((section) => section.sectionType === "playlist")
            ?.map((carousel) => (
              <Carousel
                breakpoints={{
                  400: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
                slidesPerView={2}
                hdClassName="px-2 w-full"
                className="px-2 pr-4 w-[100%]  mb-3"
                items={carousel.items}
                title={carousel.title}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
