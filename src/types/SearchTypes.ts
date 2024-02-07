import { ArtistsTypes } from "./ArtistsType";
import { PlaylistTypes } from "./PlaylistTypes";
import { SongTypes } from "./SongTypes";

export type searchTypes = {
  songs: SongTypes[];
  artists: ArtistsTypes[];
  playlists: PlaylistTypes[];
};
