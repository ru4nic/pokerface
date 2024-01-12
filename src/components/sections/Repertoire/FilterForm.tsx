import { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaStar } from 'react-icons/fa';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { IconContext } from 'react-icons';
import {
  resetFilters,
  setAuthorFilter,
  setSongFilter,
  setRatingTopFilter,
  selectRatingTopFilter,
  selectSongFilter,
  selectAuthorFilter,
  setGenreRockFilter,
  selectGenreFilter,
  setGenreDiscoFilter,
  setGenrePopFilter,
  selectCategoryFilter,
  setCategoryChristmasFilter,
  setCategoryBalladFilter,
} from '../../../slices/filterSlice';
import { selectSongs } from '../../../slices/songsSlice';

const FilterBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;
const Title = styled.h4`
  text-align: center;
  width: 100%;
`;
const FilterRow = styled.div`
  width: 50%;
  padding-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    padding-left: 0;
  }
  @media (max-width: 1076px) {
    width: 100%;
    justify-content: center;
    &:nth-child(2) {
      padding-right: 0;
    }
  }
`;
const GroupHeader = styled('div')(() => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: 'white',
  backgroundColor: '#91865c9f',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
}));
const GroupItems = styled('ul')({
  padding: 0,
});
const IconWrapper = styled.div`
  display: inline-flex;
  vertical-align: baseline;
  margin-left: 0.2em;
`;
// declare module '@mui/material/Checkbox' {
//   interface CheckboxPropsColorOverrides {
//     cleanCart: true;
//   }
// }

interface Song {
  author?: string | undefined;
  title?: string | undefined;
  length?: string | undefined;
  src?: string | undefined;
  type?: 'Отечественные' | 'Зарубежные' | undefined;
  genre?: 'Disco' | 'Pop' | 'Rock' | undefined;
  rating_top?: boolean | undefined;
  category?: '' | 'Медляк' | 'Новогодняя' | undefined;
  firstLetter: string;
}
const FilterForm = () => {
  const [songState, setSongState] = useState<Song | null>(null);
  const [authorState, setAuthorState] = useState<Song | null>(null);
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectSongFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyRatingTopSongs = useSelector(selectRatingTopFilter);
  const genreFilter = useSelector(selectGenreFilter);
  const categoryFilter = useSelector(selectCategoryFilter);
  const allSongs = useSelector(selectSongs);

  const sortedAuthors = Array.from(
    new Set(allSongs.map((option) => option.author))
  )
    .sort((a, b) => new Intl.Collator('ru').compare(a, b))
    .map((author) => allSongs.find((song) => song.author === author));

  const sortedSongs = allSongs.slice().sort((a, b) => {
    const firstLetterA = a.title[0];
    const firstLetterB = b.title[0];

    // Переместить цифры в начало
    if (/[0-9]/.test(firstLetterA) && !/[0-9]/.test(firstLetterB)) {
      return -1;
    }
    if (!/[0-9]/.test(firstLetterA) && /[0-9]/.test(firstLetterB)) {
      return 1;
    }

    // Сортировать русские и зарубежные песни
    return new Intl.Collator('ru').compare(a.title, b.title);
  });

  const songOptions = sortedSongs.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const authorOptions = Array.from(
    new Set(
      sortedAuthors.map((option) => {
        const firstLetter = (option?.author[0] || '').toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      })
    )
  );
  return (
    <FilterBlock>
      <Title>Фильтры</Title>
      <FilterRow>
        {/* Фильтр по Песне */}
        <Autocomplete
          id="filter-song"
          value={songState ? songState : null}
          onChange={(_, newValue) => {
            setSongState(newValue ? newValue : null);
          }}
          options={songOptions}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.title || ''}
          isOptionEqualToValue={(option, value) => {
            return option.title === value.title;
          }}
          inputValue={titleFilter}
          onInputChange={(_, newInputValue) => {
            dispatch(setSongFilter(newInputValue));
          }}
          clearText="Очистить"
          openText="Открыть"
          closeText="Закрыть"
          noOptionsText="Песня не найдена"
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="По песне"
                color="warning"
                variant="outlined"
                margin="normal"
              />
            );
          }}
          renderGroup={(params) => (
            <li key={params.key}>
              <GroupHeader>{params.group}</GroupHeader>
              <GroupItems>{params.children}</GroupItems>
            </li>
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.title || '', inputValue, {
              insideWords: true,
            });
            const parts = parse(option.title || '', matches);

            return (
              <li {...props}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: part.highlight ? 'orange' : '',
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </li>
            );
          }}
        />
        {/* Фильтр по Исполнителю */}
        <Autocomplete
          id="filter-author"
          // freeSolo
          value={authorState ? authorState : null}
          onChange={(_, newValue) => {
            setAuthorState(newValue ? newValue : null);
          }}
          options={authorOptions.sort((a) =>
            a.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option?.author || ''
          }
          isOptionEqualToValue={(option, value) => {
            return option.author === value.author;
          }}
          inputValue={authorFilter}
          onInputChange={(_, newInputValue) => {
            dispatch(setAuthorFilter(newInputValue));
          }}
          clearText="Очистить"
          openText="Открыть"
          closeText="Закрыть"
          noOptionsText="Исполнитель не найден"
          renderInput={(params) => {
            return (
              <TextField
                {...params}
                label="По исполнителю"
                color="warning"
                variant="outlined"
                margin="normal"
              />
            );
          }}
          renderGroup={(params) => (
            <li key={params.key}>
              <GroupHeader>{params.group}</GroupHeader>
              <GroupItems>{params.children}</GroupItems>
            </li>
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.author || '', inputValue, {
              insideWords: true,
            });
            const parts = parse(option.author || '', matches);

            return (
              <li {...props}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: part.highlight ? 'orange' : '',
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </li>
            );
          }}
        />
      </FilterRow>
      <FilterRow>
        <FormGroup sx={{ width: 'max-content' }}>
          <FormLabel component="legend">По категории</FormLabel>
          <FormControlLabel
            name="the_best"
            control={
              <Checkbox
                checked={onlyRatingTopSongs}
                onChange={() => dispatch(setRatingTopFilter())}
                color="warning"
              />
            }
            label={
              <IconContext.Provider value={{ color: 'orange' }}>
                Рекомендуем
                <IconWrapper>
                  <FaStar />
                </IconWrapper>
              </IconContext.Provider>
            }
          />
          <FormControlLabel
            name="Christmas"
            control={
              <Checkbox
                color="warning"
                checked={categoryFilter.christmas}
                onChange={() => dispatch(setCategoryChristmasFilter())}
              />
            }
            label="Новогодние"
          />
          <FormControlLabel
            name="Ballad"
            control={
              <Checkbox
                color="warning"
                checked={categoryFilter.ballad}
                onChange={() => dispatch(setCategoryBalladFilter())}
              />
            }
            label="Медляки"
          />
        </FormGroup>
        <FormGroup>
          <FormLabel component="legend">По жанрам</FormLabel>
          <FormControlLabel
            name="Pop"
            control={
              <Checkbox
                color="warning"
                checked={genreFilter.pop}
                onChange={() => dispatch(setGenrePopFilter())}
              />
            }
            label="Поп"
          />
          <FormControlLabel
            name="Disco"
            control={
              <Checkbox
                color="warning"
                checked={genreFilter.disco}
                onChange={() => dispatch(setGenreDiscoFilter())}
              />
            }
            label="Диско"
          />
          <FormControlLabel
            name="Rock"
            control={
              <Checkbox
                color="warning"
                checked={genreFilter.rock}
                onChange={() => dispatch(setGenreRockFilter())}
              />
            }
            label="Рок"
          />
        </FormGroup>
      </FilterRow>
      <Button
        onClick={() => {
          dispatch(resetFilters());
          setSongState(null);
          setAuthorState(null);
        }}
        size="small"
        sx={{ alignSelf: 'center', margin: 'auto' }}
      >
        Сбросить
      </Button>
    </FilterBlock>
  );
};

export default FilterForm;
