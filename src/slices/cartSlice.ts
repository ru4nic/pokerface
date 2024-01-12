import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Song {
  author: string;
  song: string;
  length: string;
  checked: boolean;
}
export interface SongList {
  value: Song[];
}
const initialState: SongList = {
  value: [],
};
const addCartToLocalStorage = (data: Song[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
export const cartSongSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.value.push(action.payload);
      addCartToLocalStorage(state.value);
    },
    removeSong: (state, action: PayloadAction<Song>) => {
      const songToRemove = action.payload;
      state.value = state.value.filter(
        (track) => track.song !== songToRemove.song
      );
      addCartToLocalStorage(state.value);
    },
    toggleSongChecked: (state, action: PayloadAction<string>) => {
      // Ищем песню по её названию и переключаем состояние
      const song = state.value.find((track) => track.song === action.payload);
      if (song) {
        song.checked = !song.checked;
        addCartToLocalStorage(state.value);
      }
    },
    clearCart: (state) => {
      state.value = [];
      addCartToLocalStorage(state.value);
    },
  },
});
export const { addSong, removeSong, toggleSongChecked, clearCart } =
  cartSongSlice.actions;

export default cartSongSlice.reducer;
