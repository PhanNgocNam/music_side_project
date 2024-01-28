import Carousel from "../components/carousel/Carousel";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { HomePageDataTypes } from "../types/HomaPageDataTypes";

export default function Home() {
  const data = useGetData<HomePageDataTypes>(urls.home);
  // console.log(data?.items[5]);

  return (
    <div
      style={{
        height: "calc(100% - 64px)",
      }}
      className="w-[940px]"
    >
      <Carousel
        key={data?.items[5].title}
        title={data?.items[5].title}
        items={data?.items[5].items}
      />
    </div>
  );
}
