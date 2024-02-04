import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SongTypes } from "../../types/SongTypes";

type initialStateType = {
  list: SongTypes[];
  currentPlaylistReference: SongTypes[];
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
  currentPlaylistReference: [
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
    setCurrentPlaylistReference: (
      state,
      action: PayloadAction<SongTypes[]>
    ) => {
      state.currentPlaylistReference = [...action.payload];
    },
  },
});

export const { setCurrentPlaylist, setCurrentPlaylistReference } =
  currentPlaylistSlice.actions;
export default currentPlaylistSlice.reducer;
