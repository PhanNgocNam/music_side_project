import { store } from "../app/store";
import { urls } from "../constant/requestURL";
import { setNotReadyState } from "../features/can_play/canPlaySlice";
import { setCurrentPlaylist } from "../features/current_playlist/currentPlaylistSlice";
import { setCurrentPlaylistId } from "../features/current_playlist_id/current_playlist_id";
import { setCurrentSongId } from "../features/current_song_id/currentSongIdSlice";
import { setCurrentSongName } from "../features/current_song_name/currentSongNameSlice";
import { setCurrentSongUrl } from "../features/current_song_url/currentSongUrlSlide";
import { setDuration } from "../features/duration/durationSlice";
import { setIsPlaying } from "../features/playing/isPlayingSlice";
import { get } from "./get";

export const handlePlayNewSong = (
  duration: number,
  belongTo: string,
  encodeId: string,
  songName: string,
  pageType: "song" | "playlist"
) => {
  const { currentPlaylistReference } = store.getState().currentPlaylist;
  store.dispatch(setIsPlaying());
  store.dispatch(setNotReadyState());
  store.dispatch(setCurrentPlaylistId(belongTo));
  if (pageType === "playlist") {
    store.dispatch(setCurrentPlaylist(currentPlaylistReference));
  } else if (pageType === "song") {
    store.dispatch(setCurrentPlaylist([]));
  }
  store.dispatch(setDuration(duration));
  store.dispatch(setCurrentSongName(songName));
  get(`${urls.sound}?id=${encodeId}`).then((result) => {
    store.dispatch(setCurrentSongId(encodeId));
    store.dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
  });
};
