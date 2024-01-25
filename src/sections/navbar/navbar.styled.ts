import styled from 'styled-components';
import { styled as stylem } from '@mui/material';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import {
  bkrndNavBar,
  heightOfNavBarDesktop,
  heightOfNavBarMobile,
} from '../../theme/main';

export const StartIcon = stylem(PhoneAndroidIcon)(({ theme }) => ({
  fontSize: '1em',
  [theme.breakpoints.down('md')]: {
    width: '1.2rem',
  },
}));

export const Container = styled.div`
  display: flex;
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

export const NavBar = styled.div<{ $inView?: boolean }>`
  background-color: ${(props) => (props.$inView ? '' : `${bkrndNavBar}80`)};

  height: ${heightOfNavBarDesktop};
  left: 0;
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
  color: #fff;
  @media (max-width: 1076px) {
    background-color: unset;
    height: ${heightOfNavBarMobile};
    backdrop-filter: unset;
  }
  @media (max-width: 908px) {
    padding: 0 7rem;
  }
  @media (max-width: 625px) {
    padding: 0 2rem;
  }
`;
export const IconWrapp = styled.div`
  background-color: #ffffffab;
  border-radius: 0.25em;
  box-shadow: 0 1px 3px #00000080;
  backdrop-filter: blur(3px);
`;
