import styled from 'styled-components';
import theme from '../../../../theme';

export const Block = styled.li<{ $checked?: boolean }>`
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
  font-family: ${theme.fonts.IbmRegular};
  user-select: none;
  text-decoration: initial;
  background-color: ${(props) => props.$checked && theme.colors.primary};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  border: 1px solid transparent;
  margin: 1.5rem 0.4rem;
  border-radius: 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  column-gap: 0.5rem;
  row-gap: 0.2rem;
  border: 1px solid #00000025;
  color: ${(props) => props.$checked && 'white'};
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
    background-color: ${(props) => (props.$checked ? '#a72626' : '#00000010')};

    box-shadow: 1px 2px 2px #00000010;
    &:last-child {
      border-bottom: none;
    }
    &:first-child {
      border-top: none;
    }
  }

  @media screen and (max-width: 625px) {
    padding: 0.75rem 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding: 0.75rem 0.9rem;
    border-radius: ${(props) => props.$checked && '7px'};
  }
`;

export const Author = styled.div<{ $checked?: boolean }>`
  font-family: ${theme.fonts.IbmBold};
  grid-area: author;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;

export const Song = styled.div<{ $checked?: boolean }>`
  grid-area: song;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;
export const Length = styled.div<{ $checked?: boolean }>`
  grid-area: length;
  pointer-events: none;
  text-align: center;
  color: #777;
`;
export const PlayBtn = styled.div`
  grid-area: play;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  min-width: 5rem;
`;
export const Atrs = styled.div<{
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

export const Category = styled.div<{
  $category?: 'Медляк' | 'Новогодняя' | '';
}>`
  grid-area: category;
  justify-content: center;
  /* font-size: ${(props) => props.$category === 'Новогодняя' && '1.1rem'}; */
  font-size: 0.7rem;
  display: flex;
`;
export const Genre = styled.div<{
  $genre?: 'Disco' | 'Pop' | 'Rock';
  $checked?: boolean;
}>`
  display: flex;
  justify-content: center;
  font-family: ${theme.fonts.IbmRegular};
  grid-area: genre;
  color: ${(props) => (props.$checked ? 'white' : theme.colors.primary)};
  font-size: ${(props) => props.$genre && '0.7rem'};
  text-transform: ${(props) => props.$genre && 'uppercase'};
`;
export const NoAudioText = styled.div<{ $checked?: boolean }>`
  text-align: center;
`;
