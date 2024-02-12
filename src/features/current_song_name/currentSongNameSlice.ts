import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CurrentSongNameType = {
  currentSongName: string;
};

const initialState: CurrentSongNameType = {
  currentSongName: "",
};

const currentSongNameSlice = createSlice({
  name: "current_song_name",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentSongName: (state, action: PayloadAction<string>) => {
      state.currentSongName = action.payload;
    },
  },
});

export const { setCurrentSongName } = currentSongNameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectDuration = (state: RootState) =>
//   state.currentTime.currentTime;

export default currentSongNameSlice.reducer;
