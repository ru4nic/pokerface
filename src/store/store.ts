import { configureStore } from '@reduxjs/toolkit';
import cartSongReducer from '../slices/songSlice';
import audioSlice from '../slices/audioSlice';

export const store = configureStore({
  reducer: {
    addSong: cartSongReducer,
    setPlaying: audioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
