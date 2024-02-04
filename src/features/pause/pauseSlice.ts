import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type PauseType = {
  isPause: boolean;
};

const initialState: PauseType = {
  isPause: false,
};

export const pauseSlice = createSlice({
  name: "pause",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPause: (state, action: PayloadAction<boolean>) => {
      state.isPause = action.payload;
    },
  },
});

export const { setPause } = pauseSlice.actions;
export default pauseSlice.reducer;
