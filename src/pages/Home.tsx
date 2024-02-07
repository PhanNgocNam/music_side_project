import Carousel from "../components/carousel/Carousel";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";
import { HomePageDataTypes } from "../types/HomaPageDataTypes";
import { ResponseDataTypes } from "../types/ResponseDataTypes";

export default function Home() {
  const data = useGetData<ResponseDataTypes<HomePageDataTypes>, string>(
    urls.home,
    []
  );
  // console.log(data?.data?.data?.items[5]);

  return (
    <div
      style={{
        height: "calc(100%)",
      }}
      className="w-[940px]"
    >
      <Carousel
        slidesPerView={5}
        key={data?.data?.data.items[5].title}
        title={data?.data?.data.items[5].title}
        items={data?.data?.data.items[5].items}
      />
    </div>
  );
}
