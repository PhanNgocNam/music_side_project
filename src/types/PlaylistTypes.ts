import { ArtistsTypes } from "./ArtistsType";
import { SongTypes } from "./SongTypes";

export type PlaylistTypes = {
  encodeId: string;
  title: string;
  thumbnail?: string;
  thumbnailM?: string;
  description?: string;
  updateAt?: number;
  artists: ArtistsTypes[];
  songs: SongTypes[];
};
