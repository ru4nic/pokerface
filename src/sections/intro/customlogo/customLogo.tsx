import styled from 'styled-components';
import font from '../../../assets/fonts/palatinolinotype_roman.ttf';
import smile from '../../../assets/images/PokerFace_logo_smile.webp';
import theme from '../../../theme/theme.main';

const Wrapper = styled.div`
  @font-face {
    font-display: swap;
    font-family: 'Lati';
    font-style: normal;
    font-weight: 400;
    src: url(${font}) format('truetype');
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #fff;
  /* position: absolute;
  top: calc(8% + ${theme.sizes.heightOfNavBarDesktop});
  left: 50%;
  transform: translateX(-50%); */
  @media (max-width: 915px) {
    font-size: 1.1rem;
    /* top: 7vh; */
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    font-size: 0.9rem;
    top: calc(8% + ${theme.sizes.heightOfNavBarDesktop});
  }
  @media (max-height: 450px) and (orientation: landscape) {
    top: 7%;
    font-size: 0.9rem;
  }
`;

const SmileImage = styled.img`
  width: 3.2em;
`;
const Title = styled.h1`
  line-height: 1;
  font-family: 'Lati';
  font-weight: normal;
  font-style: normal;
  font-size: 3em;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;
const BigLetter = styled.span`
  font-size: 1em;
`;
const OddLetter = styled.span`
  font-size: 0.72em;
`;
const Evenletter = styled.span`
  font-size: 0.6em;
`;

const LetterR = styled.span`
  font-size: 0.72em;
  letter-spacing: -0.08em;
`;
const LetterF = styled.span`
  letter-spacing: -0.08em;
`;

const Desc = styled.span`
  font-size: 0.7em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 0.5;
`;
const CustomLogo = () => {
  return (
    <Wrapper>
      <SmileImage src={smile} alt="logo_smile" data-test="logo_smile" />
      <Title>
        <BigLetter>P</BigLetter>
        <Evenletter>o</Evenletter>
        <OddLetter>k</OddLetter>
        <Evenletter>e</Evenletter>
        <LetterR>r</LetterR>
        <LetterF>F</LetterF>
        <Evenletter>a</Evenletter>
        <OddLetter>c</OddLetter>
        <Evenletter>e</Evenletter>
      </Title>
      <Desc data-test="logo_desc">Кавер группа</Desc>
    </Wrapper>
  );
};
export default CustomLogo;
