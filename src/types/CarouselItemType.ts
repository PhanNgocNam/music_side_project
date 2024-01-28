import { ArtistsTypes } from "./ArtistsType";

export type CarouselItemTypes = {
  encodeId: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailM: string;
  artists: ArtistsTypes[];
};
