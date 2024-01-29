import { ArtistsTypes } from "./ArtistsType";

export type SongTypes = {
  encodeId: string;
  title: string;
  thumbnailM: string;
  thumbnail: string;
  duration: number;
  releaseAt: number;
  hasLyric: boolean;
  artists?: ArtistsTypes[];
};
