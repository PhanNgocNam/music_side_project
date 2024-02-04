import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LoopType = {
  isLoop: boolean;
};

const initialState: LoopType = {
  isLoop: false,
};

export const loopSlice = createSlice({
  name: "loop",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoop: (state, action: PayloadAction<boolean>) => {
      state.isLoop = action.payload;
    },
  },
});

export const { setLoop } = loopSlice.actions;
export default loopSlice.reducer;
