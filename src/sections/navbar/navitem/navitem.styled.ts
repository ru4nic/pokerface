import styled from 'styled-components';
//@ts-ignore
import { Link } from 'react-scroll';

import theme from '../../../theme';

export const StyledNavItem = styled.li`
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.75s ease;
  opacity: 1;
  position: relative;
  padding: 0;
  display: block;
  height: inherit;
  line-height: inherit;
  margin: 0 0 0 2em;
  padding: 0;

  &:nth-child(1) {
    margin: 0;
  }
  &:last-child {
    margin-right: 2em;
  }
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${theme.fonts.IbmRegular};
  letter-spacing: 0.15rem;
  position: relative;
  padding: 0.5rem 0.5rem;
  display: block;
  transition: color 0.2s ease;
  border: 0;
  font-size: 0.8em;
  outline: 0;
  cursor: pointer;
  border-radius: 0.2em;

  &::before,
  &::after {
    border-radius: 0.25rem;
    bottom: 0;
    content: '';
    height: 2px;
    position: absolute;
    right: 0;
    width: 100%;
  }

  &::before {
    background: rgb(255, 255, 255);
    transition: max-width 0.2s ease;
    max-width: 0;
  }

  &::after {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.125),
      rgb(255, 255, 255)
    );
    transition: max-width 0.2s ease;
    max-width: 0;
  }

  &:hover {
    &::after {
      transition: max-width 0.2s ease;
      max-width: 100%;
    }

    &::before {
      max-width: 100%;
    }
  }

  &.active {
    background-color: inherit;

    &::after {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.261),
        ${theme.colors.primary}
      );
      max-width: 100%;
      transition: max-width 0.2s ease;
    }
  }
`;
