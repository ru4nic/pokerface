import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type InitialState = {
  blobState: null | string;
};

const initialState: InitialState = {
  blobState: null,
};

const blobSlice = createSlice({
  name: 'blob',
  initialState,
  reducers: {
    setBlobState: (state, action: PayloadAction<string>) => {
      state.blobState = action.payload;
    },
  },
});

export const { setBlobState } = blobSlice.actions;
export const selectBlobState = (state: RootState) => state.blob.blobState;
export default blobSlice.reducer;
