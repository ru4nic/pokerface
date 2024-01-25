import styled from 'styled-components';
import theme from '../../../theme';

export const Wrapper = styled.menu`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 2rem;
  margin: 0;
  padding: 1rem 0 2rem 0;
  @media (max-width: 440px) {
    column-gap: 1rem;
  }
`;

export const List = styled.div`
  &:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &:last-child {
    @media (max-width: 440px) {
      flex-grow: 1;
    }
  }
`;

export const Title = styled.div`
  font-size: 1rem;
  font-family: ${theme.fonts.IbmBold};
  margin-bottom: 1rem;
`;
