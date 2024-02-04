import { store } from "../app/store";
import { urls } from "../constant/requestURL";
import { setNotReadyState } from "../features/can_play/canPlaySlice";
import { setCurrentSongId } from "../features/current_song_id/currentSongIdSlice";
import { setCurrentSongUrl } from "../features/current_song_url/currentSongUrlSlide";
import { setDuration } from "../features/duration/durationSlice";
import { get } from "./get";

export async function handleNextSong() {
  const { list } = store.getState().currentPlaylist;
  const { currentSongId } = store.getState().currentSongId;
  const { isRandom } = store.getState().random;
  let index = list.findIndex((song) => song.encodeId === currentSongId);
  let songIndexPosition;
  if (!isRandom) {
    songIndexPosition = index !== -1 && index + 1;
  } else {
    songIndexPosition =
      index !== -1 && Math.floor(Math.random() * (list.length + 1));
  }
  if (songIndexPosition && songIndexPosition < list.length) {
    store.dispatch(setDuration(list[songIndexPosition].duration));
    store.dispatch(setNotReadyState());
    get(`${urls.sound}?id=${list[songIndexPosition].encodeId}`).then(
      (result) => {
        store.dispatch(setCurrentSongId(list[songIndexPosition].encodeId));
        store.dispatch(setCurrentSongUrl(result.data?.data?.data?.[128]));
      }
    );
  }
}
