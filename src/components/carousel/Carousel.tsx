import { Swiper, SwiperSlide } from "swiper/react";
import Playlists from "../song/Playlists";
import CarouselHeader from "./header/CarouselHeader";
import { CarouselTypes } from "../../types/CarouselTypes";
import { useEffect, useState } from "react";

export default function Carousel({
  items,
  title,
  slidesPerView,
  className,
  hdClassName,
  breakpoints,
}: CarouselTypes) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(false);
  const [disableRightArrow, setDisableRightArrow] = useState(true);

  useEffect(() => {
    setDisableLeftArrow(false);
    setDisableRightArrow(true);
  }, []);
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
        className={`${className}`}
        slidesPerView={slidesPerView}
        spaceBetween={10}
        onReachBeginning={() => {
          setDisableLeftArrow(false);
          setDisableRightArrow(true);
        }}
        onSlideChange={() => handleSlideChange()}
        onReachEnd={() => {
          setDisableRightArrow(false);
          setDisableLeftArrow(true);
        }}
        breakpoints={breakpoints}
      >
        <CarouselHeader
          slot="container-start"
          className={hdClassName}
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
