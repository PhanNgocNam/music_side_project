import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "../features/playing/isPlayingSlice";
import durationSlice from "../features/duration/durationSlice";
import currentTimeSlice from "../features/current_time/currentTimeSlice";
import currentSongUrlSlice from "../features/current_song_url/currentSongUrlSlide";
import currentSongIdSlice from "../features/current_song_id/currentSongIdSlice";
import currentPlaylistSlice from "../features/current_playlist/currentPlaylistSlice";
import currentPlaylistIdSlice from "../features/current_playlist_id/current_playlist_id";
import canPlaySlice from "../features/can_play/canPlaySlice";
import loopSlice from "../features/loop/loopSlice";
import randomSlice from "../features/random/randomSlice";
import pauseSlice from "../features/pause/pauseSlice";

export const store = configureStore({
  reducer: {
    playing: playingReducer,
    duration: durationSlice,
    currentTime: currentTimeSlice,
    currentSongUrl: currentSongUrlSlice,
    currentSongId: currentSongIdSlice,
    currentPlaylist: currentPlaylistSlice,
    currentPlaylistId: currentPlaylistIdSlice,
    canPlay: canPlaySlice,
    loop: loopSlice,
    random: randomSlice,
    pause: pauseSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
