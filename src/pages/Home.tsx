import Carousel from "../components/carousel/Carousel";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { HomePageDataTypes } from "../types/HomaPageDataTypes";
import { ResponseDataTypes } from "../types/ResponseDataTypes";
import HomeSkeleton from "./skeletons/HomeSkeleton";

export default function Home() {
  const data = useGetData<ResponseDataTypes<HomePageDataTypes>, string>(
    urls.home,
    []
  );

  const homePlayList = data?.data?.data?.items
    .filter((item) => item.sectionType === "playlist")
    .splice(1);

  return (
    <div
      style={{
        height: "calc(100%)",
      }}
      className="w-full p-2"
    >
      {data?.result === 1 ? (
        homePlayList?.map((list) => (
          <Carousel
            breakpoints={{
              400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              970: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            slidesPerView={2}
            className="mb-3 w-full"
            key={list.title}
            title={list.title}
            items={list.items}
          />
        ))
      ) : (
        <HomeSkeleton />
      )}
    </div>
  );
}
