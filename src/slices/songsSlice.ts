import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const songsData = '/listOfSongs.json';
export const fetchSongs = createAsyncThunk(
  'data/fetchDataFromJson',
  async () => {
    try {
      const response = await fetch(songsData);
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error('Error fetching data from JSON file');
    }
  }
);

export interface ISong {
  author: string;
  title: string;
  length: string;
  src: string;
  type: 'Отечественные' | 'Зарубежные';
  genre: 'Disco' | 'Pop' | 'Rock';
  rating_top: boolean;
  category: 'Медляк' | 'Новогодняя' | '';
}

interface SongsState {
  data: ISong[];
  error: string | undefined;
}

const initialState: SongsState = {
  data: [],
  error: '',
};
const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSongs.fulfilled,
        (state, action: PayloadAction<ISong[]>) => {
          state.data = action.payload;
          state.error = '';
        }
      )
      .addCase(fetchSongs.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const songsReducer = songsSlice.reducer as (
  state: SongsState,
  action: PayloadAction
) => void;

export const selectSongs = (state: RootState) => state.songs.data;
export const selectSongsError = (state: RootState) => state.songs.error;

export default songsSlice.reducer;
