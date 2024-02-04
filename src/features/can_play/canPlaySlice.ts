import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  ready: boolean;
};

const initialState: initialStateType = {
  ready: false,
};

const canPlaySlice = createSlice({
  name: "can_play",
  initialState,
  reducers: {
    setReadyState: (state) => {
      state.ready = true;
    },
    setNotReadyState: (state) => {
      state.ready = false;
    },
  },
});

export const { setReadyState, setNotReadyState } = canPlaySlice.actions;
export default canPlaySlice.reducer;
