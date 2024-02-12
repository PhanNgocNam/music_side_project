import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DurationType = {
  duration: number;
};

const initialState: DurationType = {
  duration: 0,
};

export const durationSlice = createSlice({
  name: "duration",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { setDuration } = durationSlice.actions;
export default durationSlice.reducer;
