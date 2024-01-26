import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Song from "../song/Song";
import CarouselHeader from "./header/CarouselHeader";
import { CarouselTypes } from "../../types/CarouselTypes";
import { useState } from "react";

export default function Carousel({ id, playlists, title }: CarouselTypes) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  return (
    <>
      <Swiper
        className="w-[100%] pt-16 relative"
        spaceBetween={50}
        slidesPerView={5}
        onReachBeginning={() => {
          setDisableLeftArrow(true);
          setDisableRightArrow(false);
        }}
        onReachEnd={() => {
          setDisableRightArrow(true);
          setDisableLeftArrow(false);
        }}
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
        <CarouselHeader
          title={title}
          disableLeftArrow={disableLeftArrow}
          disableRightArrow={disableRightArrow}
        />
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
      </Swiper>
    </>
  );
}
