import styled from 'styled-components';

import headImg from '../../assets/images/bknd_head.webp';
import theme from '../../theme';

const SectionIntro = styled.section`
  /* background: url(${headImg}); */
  background-color: #131313;
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-attachment: fixed;
  background-size: cover;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  color: ${theme.colors.primaryText};
  /* padding-top: 5rem; */
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
  @media (max-width: 1076px) {
    background-size: cover;
    background-position: 50% 0%;
    background-attachment: unset;
  }

  @media (max-width: 900px) {
    background-size: 180%;
    background-position: 40% 40%;
  }
  @media (max-width: 650px) {
    background-size: 190%;
    background-position: 43% 50%;
  }
  @media (max-width: 470px) {
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
    background-size: 140%;
    background-position: 50% 40%;
  }
`;
const VideoContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  overflow: hidden;
  z-index: 0;
  direction: ltr;
  /* @media (max-width: 900px) {
    height: 100vh;
    width: 100vw;
  } */
`;
const BckrndOverlay = styled.div`
  background-color: #000000fa;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0.58;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
`;
const Video = styled.video`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    position: static;
    top: unset;
    left: unset;
    transform: unset;
  }
`;

const BlockDesc = styled.div`
  /* margin: 20vh auto 2rem auto; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  font-size: 1rem;
  width: 90%;
  @media (max-width: 900px) {
    /* margin: 18vh auto 1rem auto; */
  }
  @media (max-width: 625px) {
  }
  @media (max-width: 550px) {
    /* margin-top: 20vh; */
  }
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
  @media (max-width: 340px) {
    font-size: 0.75rem;
  }
  /* @media (max-height: 820px) and (orientation: landscape) {
    margin-top: 16vh;
  }
  @media (max-height: 450px) and (orientation: landscape) {
    margin-top: 25vh;
  } */
`;

const Desc = styled.h2`
  font-family: ${theme.fonts.IbmLight};
  font-weight: normal;
  font-size: 1.3em;
  padding: 0.25em 0.5em 0.4em 0.5em;
  position: relative;
  line-height: 1.3;
  color: ${theme.colors.secondaryText};
  display: inline-block;
  z-index: 2;
  text-align: center;
  margin: 0;
  border-radius: 0.5rem;
  @media (max-width: 900px) {
    letter-spacing: -1.2px;
  }
  @media (max-width: 450px) {
    letter-spacing: -0.7px;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    letter-spacing: -1px;
  }
`;
const BlockButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
export {
  SectionIntro,
  BlockDesc,
  Desc,
  BlockButton,
  Video,
  VideoContainer,
  BckrndOverlay,
};
