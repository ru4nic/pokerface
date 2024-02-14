import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  showVideoIndex: null | number;
};
const initialState: InitialState = {
  showVideoIndex: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setShowVideoIndex: (state, action: PayloadAction<number>) => {
      state.showVideoIndex = action.payload;
    },
  },
});
export const { setShowVideoIndex } = videoSlice.actions;
export default videoSlice.reducer;
