import { Swiper, SwiperSlide } from "swiper/react";
import Playlists from "../song/Playlists";
import CarouselHeader from "./header/CarouselHeader";
import { CarouselTypes } from "../../types/CarouselTypes";
import { useState } from "react";

export default function Carousel({ items, title }: CarouselTypes) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(true);
  const [disableRightArrow, setDisableRightArrow] = useState(false);
  const handleSlideChange = () => {
    if (disableRightArrow !== true && disableLeftArrow !== false) {
      setDisableRightArrow(false);
      setDisableLeftArrow(false);
    }

    if (disableRightArrow !== false && disableLeftArrow !== true) {
      setDisableRightArrow(false);
      setDisableLeftArrow(false);
    }
  };
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
        onSlideChange={() => handleSlideChange()}
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
        {items?.map((playlist) => (
          <SwiperSlide>
            <Playlists
              key={playlist.encodeId}
              encodeId={playlist.encodeId}
              description={playlist.description}
              thumbnail={playlist.thumbnail}
              thumbnailM={playlist.thumbnailM}
              title={playlist.title}
              artists={playlist.artists}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
