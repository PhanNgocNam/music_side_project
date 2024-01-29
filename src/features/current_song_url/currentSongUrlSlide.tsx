import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

type CurrentSongUrlType = {
  url: string;
};

const initialState: CurrentSongUrlType = {
  url: "",
};

const currentSongUrlSlice = createSlice({
  name: "current_song_url",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentSongUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
  },
});

export const { setCurrentSongUrl } = currentSongUrlSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDuration = (state: RootState) =>
  state.currentTime.currentTime;

export default currentSongUrlSlice.reducer;
