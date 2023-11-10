import { configureStore } from "@reduxjs/toolkit";
import cartSongReducer from "../slices/songSlicer";
import audioSlice from "../slices/audioSlicer";

export const store = configureStore({
  reducer: {
    addSong: cartSongReducer,
    setPlaying: audioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
