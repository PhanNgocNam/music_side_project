import { store } from "../app/store";
import { history } from "../constant/history";

export function backToCurrentPlayingPage() {
  const { current_playlist_id } = store.getState().currentPlaylistId;
  const { currentSongId } = store.getState().currentSongId;
  if (!current_playlist_id) {
    history.navigate && history.navigate(`/song?id=${currentSongId}`);
  } else {
    history.navigate && history.navigate(`/list?id=${current_playlist_id}`);
  }
}
