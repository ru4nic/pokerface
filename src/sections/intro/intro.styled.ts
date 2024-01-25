import styled from 'styled-components';

import headImg from '../../assets/images/bknd_head.webp';
import theme from '../../theme';

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
  color: ${theme.colors.primaryText};
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
  }
`;

const BlockDesc = styled.div`
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
  font-family: ${theme.fonts.RobotoRegular};
  font-weight: normal;
  font-size: 1.3em;
  padding: 0.25em 0.5em 0.4em 0.5em;
  position: relative;
  max-width: 20em;
  line-height: 1.3;
  background-color: #00000050;
  border: 1px solid #ffffff11;
  box-shadow: 0 0.22em 0.2em #00000040;
  backdrop-filter: blur(2px);
  color: ${theme.colors.secondaryText};
  display: inline-block;
  z-index: 2;
  text-align: center;
  margin: 0;
  border-radius: 0.5rem;
  @media (max-width: 900px) {
    background-color: #00000020;
    backdrop-filter: blur(3px);
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
const BlockButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;
export { SectionIntro, BlockDesc, Desc, BlockButton };
