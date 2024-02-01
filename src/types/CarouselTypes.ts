import { CarouselItemTypes } from "./CarouselItemType";

export type CarouselTypes = {
  hdClassName?: string;
  className?: string;
  slidesPerView: number;
  title?: string;
  items?: CarouselItemTypes[];
};
