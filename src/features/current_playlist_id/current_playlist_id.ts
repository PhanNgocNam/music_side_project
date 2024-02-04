import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  current_playlist_id: string;
};

const initialState: initialStateType = {
  current_playlist_id: "",
};

const currentPlaylistIdSlice = createSlice({
  name: "current_playlist_id",
  initialState,
  reducers: {
    setCurrentPlaylistId: (state, action: PayloadAction<string>) => {
      state.current_playlist_id = action.payload;
    },
  },
});

export const { setCurrentPlaylistId } = currentPlaylistIdSlice.actions;
export default currentPlaylistIdSlice.reducer;
