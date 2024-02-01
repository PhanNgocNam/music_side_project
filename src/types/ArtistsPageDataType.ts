import { CarouselItemTypes } from "./CarouselItemType";

export type ArtistsPageDataTypes = {
  id: string;
  name: string;
  link?: string;
  alias?: string;
  playlistId?: string;
  cover?: string;
  thumbnail?: string;
  thumbnailM?: string;
  biography: string;
  sortBiography: string;
  national: string;
  birthday: string;
  realname?: string;
  totalFollow?: number;
  sections?: {
    sectionType: string;
    title: string;
    items: CarouselItemTypes[];
  }[];
};
