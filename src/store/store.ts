import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
import audioReducer from '../slices/audioSlice';
import songsReducer from '../slices/songsSlice';
import filterReducer from '../slices/filterSlice';
import videoReducer from '../slices/videoSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    setPlaying: audioReducer,
    songs: songsReducer,
    filter: filterReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
