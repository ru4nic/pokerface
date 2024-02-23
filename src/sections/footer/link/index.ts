import styled from 'styled-components';
import theme from '../../../theme';
//@ts-ignore
import { Link } from 'react-scroll';

export const Underline = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0%;
    background-color: ${theme.colors.primary};
    transition: width 0.2s ease-in-out;
  }
`;
export const StyledLink = styled(Link)<{ $copyright: boolean }>`
  display: ${(props) => (props.$copyright ? '' : 'block')};
  font-size: 0.9rem;
  text-decoration: none;
  color: inherit;
  opacity: 0.65;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out 0s, text-decoration 0.3s ease-in-out 0s;
  &:hover {
    opacity: 1;
    ${Underline} {
      &::after {
        width: 100%;
      }
    }
  }
`;
export const Copyright = styled.div`
  font-size: 0.8em;
  font-family: ${theme.fonts.IbmExtraLight};
  ${StyledLink} {
    font-size: 1em;
  }
`;

export const MadeBy = styled.div``;
