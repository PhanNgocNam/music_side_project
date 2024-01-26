import { ArtistsTypes } from "./ArtistsType";

export type PlaylistTypes = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailM: string;
  artists: ArtistsTypes[];
};
