import styled from 'styled-components';
import theme from '../../../theme';

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
  font-family: ${theme.fonts.IbmLight};
  user-select: none;
  text-decoration: initial;
  background-color: ${(props) => props.$checked && theme.colors.checkedBlock};
  transition: background-color 0.2s ease, color 0.5s ease;
  border: 1px solid transparent;
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
    border: 1px solid #00000025;
    box-shadow: 0 2px 3px #00000010;
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
  font-family: ${theme.fonts.RobotoMedium};
  grid-area: author;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;

export const Song = styled.div<{ $checked?: boolean }>`
  transition: color 0.2s ease;
  grid-area: song;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;
export const Length = styled.div<{ $checked?: boolean }>`
  transition: color 0.2s ease;
  grid-area: length;
  pointer-events: none;
  text-align: center;
`;
export const PlayBtn = styled.div`
  grid-area: play;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: ${(props) => props.$category === 'Новогодняя' && '1.1rem'};
  display: flex;
`;
export const Genre = styled.div<{ $genre?: 'Disco' | 'Pop' | 'Rock' }>`
  display: flex;
  justify-content: center;
  font-family: ${theme.fonts.IbmExtraLight};
  grid-area: genre;
  font-size: ${(props) => props.$genre && '0.7rem'};
  text-transform: ${(props) => props.$genre && 'uppercase'};
`;
export const NoAudioText = styled.div<{ $checked?: boolean }>`
  text-align: center;
  transition: color 0.2s ease;
`;
