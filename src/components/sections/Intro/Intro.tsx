//@ts-ignore
import { Link } from 'react-scroll';

import styled from 'styled-components';
//MUI
import Box from '@mui/material/Box';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TiltParalax from '../../UI/TiltParalax';
import useMediaQuery from '@mui/material/useMediaQuery';
//Redux

import { StyledButton } from '../../UI/Button/StyledButton';
import CustomLogo from '../../UI/customLogo';
import headImg from '../../../assets/images/bknd_head.jpg';
import { darkGrey, whiteText } from '../../base_styles/Vars';

const SectionIntro = styled.section`
  background: url(${headImg});
  background-color: #131313;
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  color: ${darkGrey};
  padding-top: 5rem;
  /* margin-top: 5rem; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 1280px) {
    background-size: 120vw;
  }
  @media (max-width: 1070px) {
    background-size: cover;
    background-position: 50% 0%;
    background-attachment: unset;
    min-height: 100vh;
  }

  @media (max-width: 900px) {
    background-size: 180%;
    background-position: 40% 40%;
    min-height: 65vh;
    /* margin-top: 3.6rem; */
  }
  @media (max-width: 650px) {
    background-size: 190%;
    background-position: 43% 50%;
    min-height: 60vh;
  }
  @media (max-width: 470px) {
    min-height: 60vh;
    background-size: 200%;
    background-position: 43% 30%;
    background-attachment: unset;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    background-attachment: unset;

    background-position: 50% 7%;
    background-size: 113%;
  }

  @media (max-height: 450px) and (orientation: landscape) {
    min-height: 100vh;
    background-size: 140%;
    background-position: 50% 40%;
    /* margin-top: 3.7rem; */
  }
`;

const DescWrapper = styled.div`
  margin: 20vh auto 2rem auto;
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 1rem;

  @media (max-width: 900px) {
    margin: 18vh auto 1rem auto;
  }
  @media (max-width: 625px) {
  }
  @media (max-width: 550px) {
    margin-top: 20vh;
  }
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
  @media (max-width: 340px) {
    font-size: 0.75rem;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    margin-top: 16vh;
  }
  @media (max-height: 450px) and (orientation: landscape) {
    margin-top: 25vh;
  }
`;

const Desc = styled.h2`
  font-family: 'RobotoRegular';
  font-weight: normal;
  font-size: 1.3em;
  padding: 0.25em 0.5em 0.4em 0.5em;
  position: relative;
  max-width: 20em;
  line-height: 1.3;
  background-color: #00000050;
  backdrop-filter: blur(2px);
  color: ${whiteText};
  display: inline-block;
  z-index: 2;
  text-align: center;
  margin: 0;
  border-radius: 0.5rem;
  @media (max-width: 900px) {
    background-color: #00000020;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    max-width: 18em;
    letter-spacing: -1.2px;
  }
  @media (max-width: 450px) {
    letter-spacing: -0.7px;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    letter-spacing: -1px;
  }
`;

const Intro = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <SectionIntro id="intro">
      <CustomLogo />
      <DescWrapper>
        <Desc data-test="header_intro">
          Музыкальный коллектив для тех, кому нужен яркий праздник
        </Desc>
      </DescWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={isMobile ? -50 : -80}
          duration={1000}
          spyThrottle={500}
        >
          <TiltParalax>
            <StyledButton
              endIcon={<KeyboardDoubleArrowDownIcon />}
              sx={{ width: '12rem', height: '3rem' }}
            >
              Подробнее
            </StyledButton>
          </TiltParalax>
        </Link>
      </Box>
    </SectionIntro>
  );
};

export default Intro;
