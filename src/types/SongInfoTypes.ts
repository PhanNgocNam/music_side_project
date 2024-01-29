import { ArtistsTypes } from "./ArtistsType";

export type SongInfoTypes = {
  encodeId: string;
  title: string;
  artistsNames: string;
  artists?: ArtistsTypes[];
  thumbnailM?: string;
  thumbnail?: string;
  duration: number;
  hasLyric: boolean;
  listen: number;
  album: {
    encodeId: string;
    title: string;
    thumbnailM: string;
    thumbnail: string;
  };
};
