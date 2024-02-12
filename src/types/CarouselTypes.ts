import { SwiperProps } from "swiper/react";
import { CarouselItemTypes } from "./CarouselItemType";

export interface CarouselTypes extends SwiperProps {
  hdClassName?: string;
  className?: string;
  slidesPerView: number /** Default slide per view */;
  title?: string;
  items?: CarouselItemTypes[];
  sectionType?: string;
}
