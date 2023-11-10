import styled from 'styled-components';
//@ts-ignore
import { Link } from 'react-scroll';
import {
  bkrndNavBar,
  darkGrey,
  heightOfNavBarDesktop,
  heightOfNavBarMobile,
  redTheme,
  whiteText,
} from '../../base_styles/Vars';

export const Container = styled.div`
  display: flex;
  // justify-content: space-evenly;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  height: inherit;
  line-height: inherit;
  transform: translateY(0);
  transition: opacity 1s ease;
  min-height: 100%;
  opacity: 1;
  width: 100%;
`;
export const Menu = styled.nav`
  /* height: inherit; */
  line-height: inherit;
`;
export const NavList = styled.ul`
  display: flex;
  height: inherit;
  line-height: inherit;
  margin: 0;
  text-align: right;
  color: inherit;
`;
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
`;
export const StyledNavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'IbmRegular';
  letter-spacing: 0.15rem;
  position: relative;
  padding: 0.5rem 0.5rem;
  display: block;
  transition: color 0.2s ease;
  border: 0;
  font-size: 0.9em;
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
    /* color: #fff; */

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
    /* color: #ffffff; */

    &::after {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.261),
        ${redTheme}
      );
      max-width: 100%;
      transition: max-width 0.2s ease;
    }
  }
`;
export const NavBar = styled.div<{ $inView?: boolean }>`
  background-color: ${(props) => (props.$inView ? '' : `${bkrndNavBar}80`)};

  height: ${heightOfNavBarDesktop};
  left: 0;
  /* line-height: 4rem; */
  overflow: hidden;
  padding: 0;
  text-align: center;
  top: 0;
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  backdrop-filter: ${(props) => (props.$inView ? 'blur(3px)' : 'blur(13px)')};
  -webkit-backdrop-filter: ${(props) =>
    props.$inView ? 'blur(3px)' : 'blur(13px)'};
  padding: 0 6rem;
  z-index: 4;
  transition: background-color 0.5s ease-in-out;
  /* color: ${(props) => (props.$inView ? whiteText : darkGrey)}; */
  color: #fff;
  @media (max-width: 1076px) {
    background-color: unset;
    height: ${heightOfNavBarMobile};
    backdrop-filter: unset;
    -webkit-backdrop-filter: unset;
  }
  @media (max-width: 908px) {
    padding: 0 7rem;
  }
  @media (max-width: 625px) {
    padding: 0 2rem;
  }
`;
export const IconWrapp = styled.div`
  background-color: ${bkrndNavBar}92;
  border-radius: 0.25em;
  box-shadow: 0 1px 3px #00000080;
`;
