import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SongTypes } from "../../types/SongTypes";

type initialStateType = {
  list: SongTypes[];
};

const initialState: initialStateType = {
  list: [
    {
      encodeId: "",
      duration: 0,
      hasLyric: true,
      releaseAt: 0,
      thumbnail: "",
      thumbnailM: "",
      title: "",
      artists: [
        {
          id: "",
          name: "",
          playlistId: "",
          cover: "",
          thumbnail: "",
          thumbnailM: "",
          totalFollow: "",
        },
      ],
    },
  ],
};

const currentPlaylistSlice = createSlice({
  name: "current_playlist",
  initialState,
  reducers: {
    setCurrentPlaylist: (state, action: PayloadAction<SongTypes[]>) => {
      state.list = [...action.payload];
    },
  },
});

export const { setCurrentPlaylist } = currentPlaylistSlice.actions;
export default currentPlaylistSlice.reducer;
