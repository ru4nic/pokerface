import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  author: '',
  song: '',
  genre: { rock: false, disco: false, pop: false },
  rating_top: false,
  category: { christmas: false, ballad: false },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSongFilter: (state, action: PayloadAction<string>) => {
      state.song = action.payload;
    },
    setAuthorFilter: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setGenreRockFilter: (state) => {
      state.genre.rock = !state.genre.rock;
    },
    setGenrePopFilter: (state) => {
      state.genre.pop = !state.genre.pop;
    },
    setGenreDiscoFilter: (state) => {
      state.genre.disco = !state.genre.disco;
    },
    setRatingTopFilter: (state) => {
      state.rating_top = !state.rating_top;
    },
    setCategoryChristmasFilter: (state) => {
      state.category.christmas = !state.category.christmas;
    },
    setCategoryBalladFilter: (state) => {
      state.category.ballad = !state.category.ballad;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setSongFilter,
  setAuthorFilter,
  setRatingTopFilter,
  setGenrePopFilter,
  setGenreDiscoFilter,
  setGenreRockFilter,
  setCategoryBalladFilter,
  setCategoryChristmasFilter,
  resetFilters,
} = filterSlice.actions;

export const selectSongFilter = (state: RootState) => state.filter.song;
export const selectAuthorFilter = (state: RootState) => state.filter.author;
export const selectGenreFilter = (state: RootState) => state.filter.genre;
export const selectRatingTopFilter = (state: RootState) =>
  state.filter.rating_top;
export const selectCategoryFilter = (state: RootState) => state.filter.category;

export default filterSlice.reducer;
