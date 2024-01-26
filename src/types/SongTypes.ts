import { ArtistsTypes } from "./ArtistsType";

export type SongTypes = {
  id: string;
  title: string;
  thumbnailM: string;
  thumbnail: string;
  duration: number;
  releaseAt: number;
  hasLyric: boolean;
  artisrs: ArtistsTypes[];
  related?: {
    id: string;
    title: string;
    thumbnail: string;
    releasedAt: number;
    artists: ArtistsTypes[];
  };
};
