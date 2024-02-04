import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type RandomType = {
  isRandom: boolean;
};

const initialState: RandomType = {
  isRandom: false,
};

export const randomSlice = createSlice({
  name: "random",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setRandom: (state, action: PayloadAction<boolean>) => {
      state.isRandom = action.payload;
    },
  },
});

export const { setRandom } = randomSlice.actions;
export default randomSlice.reducer;
