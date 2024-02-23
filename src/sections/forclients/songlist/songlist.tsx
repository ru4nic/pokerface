import { Dispatch, SetStateAction } from 'react';

import { useSelector } from 'react-redux';
import Item from './item/item';
import { selectSongs } from '../../../slices/songsSlice';
import * as f from '../../../slices/filterSlice';

import { Heading, Title, Col, ListWrapp, NotFound } from './songlist.styled';
export interface SongsProps {
  srcSong: null | string;
  setSrcSong: Dispatch<SetStateAction<string | null>>;
}
const SongList = ({ srcSong, setSrcSong }: SongsProps) => {
  const allSongs = useSelector(selectSongs);

  const titleFilter = useSelector(f.selectSongFilter);
  const authorFilter = useSelector(f.selectAuthorFilter);
  const onlyRatingTopFilter = useSelector(f.selectRatingTopFilter);
  const genreFilter = useSelector(f.selectGenreFilter);
  const categoryFilter = useSelector(f.selectCategoryFilter);

  const filteredSongs = allSongs.filter((song) => {
    //Деструктуризируем
    const { title, author, genre, category } = song;
    const { disco, pop, rock } = genreFilter;

    const matchesTitle = title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesOnlyTop = onlyRatingTopFilter ? song.rating_top : true;
    const matchesGenre =
      (rock && genre === 'Rock') ||
      (disco && genre === 'Disco') ||
      (pop && genre === 'Pop') ||
      (!rock && !disco && !pop);
    const matchesCategory =
      (categoryFilter.christmas && category === 'Новогодняя') ||
      (categoryFilter.ballad && category === 'Медляк') ||
      (!categoryFilter.christmas && !categoryFilter.ballad);
    return (
      matchesTitle &&
      matchesAuthor &&
      matchesOnlyTop &&
      matchesGenre &&
      matchesCategory
    );
  });
  const filteredRuSongs = filteredSongs.filter(
    (song) => song.type === 'Отечественные'
  );
  const filteredEngSongs = filteredSongs.filter(
    (song) => song.type === 'Зарубежные'
  );
  return (
    <>
      {filteredSongs.length > 0 ? (
        <>
          <ListWrapp>
            <Heading>
              <Title>Отечественные</Title>
            </Heading>
            <Col $filteredSongsLength={filteredRuSongs.length}>
              {filteredRuSongs.map((song) => {
                return (
                  <Item
                    srcSong={srcSong}
                    setSrcSong={setSrcSong}
                    key={song.title}
                    {...song}
                  />
                );
              })}
            </Col>
          </ListWrapp>
          <ListWrapp>
            <Heading>
              <Title>Зарубежные</Title>
            </Heading>
            <Col $filteredSongsLength={filteredEngSongs.length}>
              {filteredEngSongs.map((song) => {
                return (
                  <Item
                    srcSong={srcSong}
                    setSrcSong={setSrcSong}
                    key={song.title}
                    {...song}
                  />
                );
              })}
            </Col>
          </ListWrapp>
        </>
      ) : (
        <NotFound>Песни не найдены</NotFound>
      )}
    </>
  );
};
export default SongList;
