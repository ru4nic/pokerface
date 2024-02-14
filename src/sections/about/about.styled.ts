import styled from 'styled-components';

import aboutBkndImg from '../../assets/images/about_bknd2.webp';

import theme from '../../theme';

const AboutSection = styled.section<{ $inView?: boolean }>`
  background: ${(props) =>
    props.$inView
      ? `linear-gradient(rgba(255, 255, 255, 0.94), ${theme.colors.background}),
    url(${aboutBkndImg})`
      : `linear-gradient(rgba(255, 255, 255, 0.9), ${theme.colors.background})`};
  background-size: ${(props) => (props.$inView ? '100%, 120%' : '100%')};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  color: ${theme.colors.primaryText};
  /* width: 100%;
  height: 100%; */

  @media (max-width: 950px) {
    background-size: 100%, 250%;
    background-position: 50% 0%;
  }
`;
export { AboutSection };
