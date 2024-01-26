import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Song from "../song/Song";
import CustomeNavigation from "./CustomeNavigation";
import { CarouselTypes } from "../../types/CarouselTypes";

export default function Carousel({ id, playlists, title }: CarouselTypes) {
  return (
    <>
      <Swiper
        className="w-[100%] pt-10 relative"
        spaceBetween={50}
        slidesPerView={5}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        <CustomeNavigation />
        {playlists?.map((playlist) => (
          <SwiperSlide>
            <Song
              id={playlist.id}
              description={playlist.description}
              thumbnail={playlist.thumbnail}
              thumbnailM={playlist.thumbnailM}
              title={playlist.title}
              artists={playlist.artists}
              key={playlist.id}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Song />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
