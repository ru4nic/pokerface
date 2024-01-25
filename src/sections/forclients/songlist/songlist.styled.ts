import styled from 'styled-components';
import theme from '../../../theme';

export const Heading = styled.div`
  text-align: center;
`;
export const Title = styled.h4`
  padding: 1rem;
  font-size: 1rem;
  font-family: ${theme.fonts.IbmBold};
  color: ${theme.colors.primaryText};
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

export const Col = styled.ul<{ $filteredSongsLength: number }>`
  max-height: ${(props) =>
    props.$filteredSongsLength <= 3 ? 'min-content' : '59vmin'};
  overflow-y: ${(props) =>
    props.$filteredSongsLength <= 3 ? 'min-content' : 'auto'};
  min-height: min-content;
  border: 1px solid #00000020;
  border-right: none;
  border-bottom: ${(props) => props.$filteredSongsLength === 0 && 'none'};
  border-left: 1px solid #00000020;
  @media (max-width: 1076px) {
    max-height: 49vmax;
    border: 1px solid #00000020;
    border-radius: 6px;
  }
`;
export const ListWrapp = styled.div`
  width: 50%;

  &:last-child {
    ${Col} {
      border-left: none;
      @media (max-width: 1076px) {
        border: 1px solid #00000020;
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
export const NotFound = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
