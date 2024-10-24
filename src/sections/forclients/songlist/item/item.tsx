import { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemWithAudio from './item.withaudio';

import {
  removeSong,
  addSong,
  toggleSongChecked,
} from '../../../../slices/cartSlice';

import { FaStar } from 'react-icons/fa';
import { GiPineTree } from 'react-icons/gi';
import { RootState } from '../../../../store/store';
import { Song as typeSong } from '../../../../slices/cartSlice';
import { IconContext } from 'react-icons';

import {
  Block,
  Song,
  Author,
  Length,
  Atrs,
  Genre,
  Category,
  PlayBtn,
  NoAudioText,
} from './item.styled';

type ItemProps = {
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
const Item = ({
  author,
  title: song,
  length,
  src,
  srcSong,
  genre,
  category,
  rating_top,
  setSrcSong,
}: ItemProps) => {
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
    <Block
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
      <Song $checked={checked}>{song}</Song>
      <Length $checked={checked}>{length.replace('.', ':')}</Length>
      {rating_top && (
        <Atrs $rating_top={rating_top}>
          <IconContext.Provider value={{ color: 'orange' }}>
            <FaStar title="Рекомендуем" />
          </IconContext.Provider>
        </Atrs>
      )}
      {genre && (
        <Genre $genre={genre} $checked={checked}>
          {genre}
        </Genre>
      )}
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
        <ItemWithAudio
          src={src}
          srcSong={srcSong}
          setSrcSong={setSrcSong}
          song={song}
        />
      ) : (
        <PlayBtn>
          <NoAudioText $checked={checked}>{/* нет аудиозаписи */}</NoAudioText>
        </PlayBtn>
      )}
    </Block>
  );
};

export default Item;
