import { store } from "../app/store";
import { urls } from "../constant/requestURL";
import { setCurrentSongId } from "../features/current_song_id/currentSongIdSlice";
import { setCurrentSongUrl } from "../features/current_song_url/currentSongUrlSlide";
import { setDuration } from "../features/duration/durationSlice";
import { get } from "./get";

export async function handlePrevSong() {
  const { currentSongId } = store.getState().currentSongId;
  const { list } = store.getState().currentPlaylist;
  let index = list.findIndex((song) => song.encodeId === currentSongId);
  if (index) {
    store.dispatch(setDuration(list[index - 1].duration));
    get(`${urls.sound}?id=${list[index - 1].encodeId}`).then((result) => {
      store.dispatch(setCurrentSongId(list[index - 1].encodeId));
      store.dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
    });
  }
}
