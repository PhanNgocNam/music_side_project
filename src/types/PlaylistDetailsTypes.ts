import { ArtistsTypes } from "./ArtistsType";
import { SongTypes } from "./SongTypes";

export type PlaylistDetailTypes = {
  encodeId: string;
  description: string;
  listen?: number;
  title: string;
  thumbnail?: string;
  thumbnailM: string;
  contentLastUpdate: number;
  like?: number;
  artists: ArtistsTypes[];
  song: {
    totalDuration: number;
    total: number;
    items: SongTypes[];
  };
};
