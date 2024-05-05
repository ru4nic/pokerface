import styled from 'styled-components';
import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

import theme from '../theme';

const Section = styled.section<{ $dark?: boolean }>`
  background: ${(props) =>
    props.$dark ? `#e8e2e1` : `${theme.colors.background}`};
`;
const Container = styled.div<{ $default?: boolean; $footer?: boolean }>`
  padding: ${(props) =>
    props.$default ? '7rem 14rem 0rem' : props.$footer ? '3rem 6rem' : '7rem'};
  max-width: 100%;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1076px) {
    padding: ${(props) =>
      props.$default ? '5rem 3rem 0rem' : props.$footer ? '3rem 3rem' : '3rem'};
  }
  @media screen and (max-width: 625px) {
    padding: ${(props) =>
      props.$default
        ? '5rem 1rem 0rem'
        : props.$footer
        ? '3rem 1rem'
        : '5rem 1rem'};
  }
  @media (max-height: 820px) and (orientation: landscape) {
    padding: 2rem;
  }
`;
const Title = styled(motion.h2)<{ $forClients?: boolean }>`
  text-align: center;
  letter-spacing: normal;
  font-family: ${theme.fonts.RobotoRegular};
  font-weight: 400;
  margin-bottom: ${(props) => (props.$forClients ? '' : '3em')};
  @media (max-width: 1000px) {
    font-style: normal;
    font-weight: normal;
  }
  @media (max-width: 736px) {
    margin-bottom: ${(props) => (props.$forClients ? '' : '3em')};
  }
`;
const Paragraph = styled(motion.p)<{
  $dark?: boolean;
  $forClients?: boolean;
}>`
  text-align: ${(props) => (props.$forClients ? 'center' : 'left')};
  line-height: 1.3;
  font-family: ${theme.fonts.IbmRegular};
  font-size: 1.1rem;
  margin: 0 0 2rem 0;
  color: ${(props) =>
    props.$dark ? theme.colors.primaryText : theme.colors.secondaryText};

  @media screen and (max-width: 450px) {
    padding: 0 1rem;
    margin-bottom: 2.5rem;
  }
`;

const StyledLink = styled(Link)<{ $red?: boolean }>`
  text-decoration: none;
  font-family: ${theme.fonts.RobotoRegular};
  font-weight: normal;
  opacity: 1;
  transition: opacity 0.2s ease, text-shadow 0.2s ease;
  cursor: pointer;
  color: ${(props) => (props.$red ? theme.colors.primary : '#63daff')};
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: ${(props) =>
      props.$red ? theme.colors.primary : '#63daff'};
    transition: width 0.2s ease-in-out;
  }
  &:hover {
    opacity: 1;
    text-shadow: 0rem 0 2rem rgba(255, 255, 255, 0.364);
    &::after {
      width: 100%;
    }
  }
`;

const StyledLogo = styled.img<{
  $footer?: boolean;
  $desktopNav?: boolean;
  $appBar?: boolean;
}>`
  height: ${(props) => (props.$footer ? '3rem' : '3rem')};
  width: ${(props) => (props.$footer ? '6rem' : '6rem')};
  align-self: ${(props) => (props.$desktopNav ? 'center' : '')};
  margin-right: ${(props) => (props.$desktopNav ? 'auto' : '')};
  margin-bottom: ${(props) => (props.$footer ? '1rem' : '')};
  display: ${(props) => (props.$footer ? 'block' : '')};
  filter: ${(props) => (props.$appBar ? 'brightness(30%)' : '')};
  margin-top: ${(props) => props.$appBar && '8px'};
`;

const SpinnerWrapp = styled.div<{ $fullHeight?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.$fullHeight ? '90vh' : '100%')};
  width: 100%;
`;
export {
  Section,
  Container,
  Title,
  Paragraph,
  StyledLink,
  StyledLogo,
  SpinnerWrapp,
};
