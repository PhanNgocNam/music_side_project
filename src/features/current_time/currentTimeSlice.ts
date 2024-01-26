import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

type CurrentTimeType = {
  currentTime: number;
};

const initialState: CurrentTimeType = {
  currentTime: 0,
};

export const currentTimeSlice = createSlice({
  name: "current_time",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
  },
});

export const { setCurrentTime } = currentTimeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectDuration = (state: RootState) =>
  state.currentTime.currentTime;

export default currentTimeSlice.reducer;
