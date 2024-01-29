import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "../features/playing/isPlayingSlice";
import durationSlice from "../features/duration/durationSlice";
import currentTimeSlice from "../features/current_time/currentTimeSlice";
import currentSongUrlSlice from "../features/current_song_url/currentSongUrlSlide";

export const store = configureStore({
  reducer: {
    playing: playingReducer,
    duration: durationSlice,
    currentTime: currentTimeSlice,
    currentSongUrl: currentSongUrlSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
