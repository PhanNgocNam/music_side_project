import { ArtistsTypes } from "./ArtistsType";

export type CarouselItemTypes = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailM: string;
  artists: ArtistsTypes[];
};
