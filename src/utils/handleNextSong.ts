import { store } from "../app/store";
import { urls } from "../constant/requestURL";
import { setNotReadyState } from "../features/can_play/canPlaySlice";
import { setCurrentSongId } from "../features/current_song_id/currentSongIdSlice";
import { setCurrentSongName } from "../features/current_song_name/currentSongNameSlice";
import { setCurrentSongUrl } from "../features/current_song_url/currentSongUrlSlide";
import { setDuration } from "../features/duration/durationSlice";
import { get } from "./get";

export async function handleNextSong() {
  const { list } = store.getState().currentPlaylist;
  const { currentSongId } = store.getState().currentSongId;
  const { isRandom } = store.getState().random;
  let index = list.findIndex((song) => song.encodeId === currentSongId);
  let songIndexPosition: number;
  if (!isRandom) {
    songIndexPosition = index !== -1 ? index + 1 : 0;
  } else {
    songIndexPosition =
      index !== -1 ? Math.floor(Math.random() * (list.length + 1)) : 0;
  }
  if (songIndexPosition && songIndexPosition < list.length) {
    store.dispatch(setDuration(list[songIndexPosition].duration));
    store.dispatch(setCurrentSongName(list[songIndexPosition].title));
    store.dispatch(setNotReadyState());
    get(`${urls.sound}?id=${list[songIndexPosition].encodeId}`).then(
      (result) => {
        store.dispatch(setCurrentSongId(list[songIndexPosition].encodeId));
        store.dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
      }
    );
  }
}
