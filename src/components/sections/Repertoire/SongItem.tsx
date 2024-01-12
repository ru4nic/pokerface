import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SongWithAudio from './SongWithAudio';
import styled from 'styled-components';
import {
  checkedAuthor,
  checkedText,
  darkGrey,
  greyText,
  redPlay,
} from '../../base_styles/Vars';
import {
  removeSong,
  addSong,
  toggleSongChecked,
} from '../../../slices/cartSlice';

import { FaStar } from 'react-icons/fa';
import { GiPineTree } from 'react-icons/gi';
import { RootState } from '../../../store/store';
import { Song as typeSong } from '../../../slices/cartSlice';
import { IconContext } from 'react-icons';

const Item = styled.li<{ $checked?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    'play author atributes'
    'play song length'
    'genre . category';
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 1rem;
  font-size: 0.8rem;
  font-family: IbmLight;
  user-select: none;
  text-decoration: initial;
  background-color: ${(props) => props.$checked && redPlay};
  transition: background-color 0.2s ease, color 0.5s ease;
  color: ${(props) => (props.$checked ? checkedAuthor : darkGrey)};
  border: 1px solid #00000025;

  margin: 0.4rem 0.4rem;
  border-radius: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  column-gap: 0.5rem;
  row-gap: 0.2rem;
  &:first-child {
    margin-top: 0;
    border-top: none;
    border-radius: 0 0 3px 3px;
  }
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    border-radius: 3px 3px 0 0;
  }
  &:hover {
    background-color: ${(props) =>
      props.$checked ? `${redPlay}cc` : '#00000010'};
  }

  @media screen and (max-width: 625px) {
    padding: 0.75rem 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding: 0.75rem 0.9rem;
    border-radius: ${(props) => props.$checked && '7px'};
    /* &:last-child {
      margin-bottom: -0.4rem;
    } */
  }
`;

const Author = styled.div<{ $checked?: boolean }>`
  font-family: 'RobotoMedium';
  color: ${(props) => (props.$checked ? checkedAuthor : darkGrey)};
  grid-area: author;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;

const SongName = styled.div<{ $checked?: boolean }>`
  color: ${(props) => (props.$checked ? checkedText : greyText)};

  transition: color 0.2s ease;

  grid-area: song;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;
const Length = styled.div<{ $checked?: boolean }>`
  color: ${(props) => (props.$checked ? checkedText : greyText)};

  transition: color 0.2s ease;
  grid-area: length;
  pointer-events: none;
  text-align: center;
`;
const PlayButton = styled.div`
  grid-area: play;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 5rem;
`;
const Atributes = styled.div<{
  $rating_top: boolean;
}>`
  display: ${(props) => (props.$rating_top ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  grid-area: atributes;
  width: 100%;
  height: 100%;
  font-size: 1.1em;
`;
const Category = styled.div<{
  $category?: 'Медляк' | 'Новогодняя' | '';
}>`
  grid-area: category;
  justify-content: center;
  font-size: ${(props) => props.$category === 'Новогодняя' && '1.1rem'};
  display: flex;
`;
const Genre = styled.div<{ $genre?: 'Disco' | 'Pop' | 'Rock' }>`
  display: flex;
  justify-content: center;
  font-family: IbmExtraLight;
  grid-area: genre;
  font-size: ${(props) => props.$genre && '0.7rem'};
  text-transform: ${(props) => props.$genre && 'uppercase'};
`;
const NoAudioText = styled.div<{ $checked?: boolean }>`
  text-align: center;

  transition: color 0.2s ease;
  color: ${(props) => (props.$checked ? checkedText : greyText)};
`;

type SongProps = {
  author: string;
  title: string;
  length: string;
  src: string;
  srcSong: string | null;
  genre: 'Disco' | 'Pop' | 'Rock';
  rating_top: boolean;
  category: 'Медляк' | 'Новогодняя' | '';
  setSrcSong: Dispatch<SetStateAction<string | null>>;
};
const SongItem = ({
  author,
  title: song,
  length,
  src,
  srcSong,
  genre,
  category,
  rating_top,
  setSrcSong,
}: SongProps) => {
  const dispatch = useDispatch();
  const cartSongs = useSelector((state: RootState) => state.cart.value);
  const checked = useSelector((state: RootState) => {
    const songChecked = state.cart.value.find((track) => track.song === song);
    return songChecked ? songChecked.checked : false;
  }); //checked - выделение цветом в списке песен (в аккордеоне).
  const addSongToCart = (song: typeSong) => {
    //Добавляем песню в корзину, на которую кликнули.
    const songExist = cartSongs.find((track) => track.song === song.song); //Проверяем есть ли песня в корзине
    if (songExist) {
      //Если кликаем на песню и в корзине эта песня уже есть - удаляем оттуда.
      dispatch(removeSong(song));
    } else {
      // Если в корзине нет песни на которую кликнули - добавляем в корзину и выделяем цветом в списке.
      dispatch(addSong(song));
      dispatch(toggleSongChecked(song.song));
    }
  };
  return (
    <Item
      $checked={checked}
      onClick={() =>
        addSongToCart({
          author: author,
          song: song,
          length: length,
          checked: checked,
        })
      }
      title={`${author} - ${song}`}
    >
      <Author $checked={checked}>{author}</Author>
      <SongName $checked={checked}>{song}</SongName>
      <Length $checked={checked}>{length.replace('.', ':')}</Length>
      {rating_top && (
        <Atributes $rating_top={rating_top}>
          <IconContext.Provider value={{ color: 'orange' }}>
            <FaStar title="Рекомендуем" />
          </IconContext.Provider>
        </Atributes>
      )}
      {genre && <Genre $genre={genre}>{genre}</Genre>}
      {category === 'Новогодняя' && (
        <Category $category={category}>
          <IconContext.Provider value={{ color: 'green' }}>
            <GiPineTree title="Рекомендуем" />
          </IconContext.Provider>
        </Category>
      )}
      {category !== 'Новогодняя' && (
        <Category $category={category}>{category}</Category>
      )}
      {src ? (
        <SongWithAudio
          src={src}
          srcSong={srcSong}
          setSrcSong={setSrcSong}
          song={song}
        />
      ) : (
        <PlayButton>
          <NoAudioText $checked={checked}>нет аудиозаписи</NoAudioText>
        </PlayButton>
      )}
    </Item>
  );
};

export default SongItem;
export { PlayButton, SongName, Length, Author };
