import Carousel from "../components/carousel/Carousel";
import { urls } from "../constant/requestURL";
import useGetData from "../hooks/useGetData";

export default function Home() {
  const { data } = useGetData(urls.home);
  console.log(data.data?.data?.items[4]);

  return (
    <div
      style={{
        height: "calc(100% - 64px)",
      }}
      className="w-[940px]"
    >
      <Carousel
        id={data.data?.data?.items[4].sectionId}
        key={data.data?.data?.items[4].sectionId}
        title={data.data?.data?.items[4].title}
        playlists={data.data?.data?.items[4].items}
      />
    </div>
  );
}
