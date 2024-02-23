import styled from 'styled-components';

import { PlayBtn, Length as Duration } from '../../songlist/item/item.styled';
import theme from '../../../../theme';

export const Item = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.hidden {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
`;

export const DelBtn = styled(PlayBtn)`
  margin: 0 0 0 auto;
  min-width: min-content;
  color: ${theme.colors.primary};
`;
export const Length = styled(Duration)`
  margin: 0;
`;
