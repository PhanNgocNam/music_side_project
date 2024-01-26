import { ArtistsTypes } from "./ArtistsType";
import { SongTypes } from "./SongTypes";

export type PlaylistTypes = {
  id: string;
  title: string;
  thumbnail?: string;
  thumbnailM?: string;
  description?: string;
  updateAt?: number;
  artists: ArtistsTypes[];
  songs: SongTypes[];
};
