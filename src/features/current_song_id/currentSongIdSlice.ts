import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CurrentSongIdType = {
  currentSongId: string;
};

const initialState: CurrentSongIdType = {
  currentSongId: "",
};

const currentSongIdSlice = createSlice({
  name: "current_song_id",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentSongId: (state, action: PayloadAction<string>) => {
      state.currentSongId = action.payload;
    },
  },
});

export const { setCurrentSongId } = currentSongIdSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectDuration = (state: RootState) =>
//   state.currentTime.currentTime;

export default currentSongIdSlice.reducer;
