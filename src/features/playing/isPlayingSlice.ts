import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

type IsPlayingType = {
  isPlaying: boolean;
};

const initialState: IsPlayingType = {
  isPlaying: false,
};

export const isPlayingSlice = createSlice({
  name: "is_playing",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    triggerPauseOrPlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { triggerPauseOrPlay } = isPlayingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectIsPlaying = (state: RootState) => state.playing.isPlaying;

export default isPlayingSlice.reducer;
