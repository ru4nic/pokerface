import { memo, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import SongItem from './SongItem';
// import { ISong } from '../../../slices/songsSlice';
import { selectSongs } from '../../../slices/songsSlice';
import { darkGrey } from '../../base_styles/Vars';
import {
  selectAuthorFilter,
  selectCategoryFilter,
  selectGenreFilter,
  selectRatingTopFilter,
  selectSongFilter,
} from '../../../slices/filterSlice';

const WrappTitle = styled.div`
  text-align: center;
`;
const Title = styled.h4`
  /* margin: 0rem calc(17px + 0.4rem) 0rem 0.4rem; */
  padding: 1rem;
  font-size: 1rem;
  font-family: IbmBold;
  color: ${darkGrey};
  text-align: center;
  border: 1px solid #00000030;
  border-radius: 5px 5px 0 0;
  border-bottom: none;
  display: inline-block;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const ScrollContainer = styled.ul<{ $filteredSongsLength: number }>`
  max-height: ${(props) =>
    props.$filteredSongsLength <= 3 ? 'min-content' : '59vmin'};
  overflow-y: ${(props) =>
    props.$filteredSongsLength <= 3 ? 'min-content' : 'auto'};
  min-height: min-content;
  border: 1px solid #00000020;
  border-right: none;
  border-bottom: ${(props) => props.$filteredSongsLength === 0 && 'none'};
  /* border-radius: 6px 0 0 6px; */
  border-left: none;
  @media (max-width: 1076px) {
    border-left: 0;
    border-radius: 0;
    max-height: 49vmax;
  }
`;
const ListWrapper = styled.div`
  width: 50%;

  &:last-child {
    /* width: 49.7%; */
    ${ScrollContainer} {
      /* border-radius: 0 6px 6px 0; */
      @media (max-width: 1076px) {
        border-radius: 0;
      }
    }
  }
  @media (max-width: 1076px) {
    width: 100%;
    margin-bottom: 4rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export interface SongsProps {
  // lang: 'Зарубежные' | 'Отечественные';
  srcSong: null | string;
  setSrcSong: Dispatch<SetStateAction<string | null>>;
}
const SongList = ({ srcSong, setSrcSong }: SongsProps) => {
  const allSongs = useSelector(selectSongs);
  // const lang = 'Зарубежные' || 'Отечественные';
  // const songListLangFilter: ISong[] =
  //   lang && allSongs.filter((song) => song.type === lang);

  const titleFilter = useSelector(selectSongFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyRatingTopFilter = useSelector(selectRatingTopFilter);
  const genreFilter = useSelector(selectGenreFilter);
  const categoryFilter = useSelector(selectCategoryFilter);

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
          <ListWrapper>
            <WrappTitle>
              <Title>Отечественные</Title>
            </WrappTitle>
            <ScrollContainer $filteredSongsLength={filteredRuSongs.length}>
              {filteredRuSongs.map((song) => {
                return (
                  <SongItem
                    srcSong={srcSong}
                    setSrcSong={setSrcSong}
                    key={song.title}
                    {...song}
                  />
                );
              })}
            </ScrollContainer>
          </ListWrapper>
          <ListWrapper>
            <WrappTitle>
              <Title>Зарубежные</Title>
            </WrappTitle>
            <ScrollContainer $filteredSongsLength={filteredEngSongs.length}>
              {filteredEngSongs.map((song) => {
                return (
                  <SongItem
                    srcSong={srcSong}
                    setSrcSong={setSrcSong}
                    key={song.title}
                    {...song}
                  />
                );
              })}
            </ScrollContainer>
          </ListWrapper>
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          Песни не найдены
        </div>
      )}
    </>
  );
};
export default memo(SongList);
