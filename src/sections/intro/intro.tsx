import { Link } from 'react-scroll';

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import TiltParalax from '../../components/TiltParalax';
import useMediaQuery from '@mui/material/useMediaQuery';

import CustomLogo from './customlogo/index.ts';

import * as S from './intro.styled.ts';
import Button from '@mui/material/Button';

const Intro = () => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <S.SectionIntro id="intro">
      <S.VideoContainer>
        <S.Video autoPlay muted loop playsInline poster="bknd_head.webp">
          {isMobile ? (
            <source src="/PokerFace_9-09-23_mobile.mp4" />
          ) : (
            <source src="/PokerFace_9-09-23_desktop.mp4" />
          )}
        </S.Video>
        <S.BckrndOverlay />
      </S.VideoContainer>
      <S.BlockDesc>
        <CustomLogo />
        <S.Desc data-test="header_intro">
          Музыкальный коллектив для тех, кому нужен яркий праздник
        </S.Desc>
        <S.BlockButton>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={isMobile ? -50 : -80}
            duration={1000}
            spyThrottle={500}
          >
            <TiltParalax>
              <Button
                endIcon={<KeyboardDoubleArrowDownIcon />}
                sx={{ width: '12rem', height: '3rem' }}
              >
                Подробнее
              </Button>
            </TiltParalax>
          </Link>
        </S.BlockButton>
      </S.BlockDesc>
    </S.SectionIntro>
  );
};

export default Intro;
