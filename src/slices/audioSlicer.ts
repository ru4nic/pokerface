import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isPaused: boolean;
};
const initialState: InitialState = {
  isPaused: true,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPaused = action.payload;
    },
  },
});
export const { setPlaying } = audioSlice.actions;
export default audioSlice.reducer;
