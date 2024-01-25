import styled from 'styled-components';

import theme from '../../../theme';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5em 0 0 0;
`;
const Wrapp = styled.div`
  width: 100%;
  height: 100%;
  margin: 3% auto;
  --swiper-pagination-color: ${theme.colors.primary};
  --swiper-pagination-bullet-inactive-color: ${theme.colors.primary}90;
  --swiper-navigation-color: #fff;
  --swiper-pagination-bullet-size: 0.7em;

  @media (max-width: 736px) {
    width: 100%;
    margin: auto;
  }
`;
const Inner = styled.div`
  width: 100%;
  height: 35rem;
  margin: 0 auto;

  @media (max-width: 900px) {
    height: 30rem;
    --swiper-navigation-size: 12px;
  }
  @media (max-width: 625px) {
    height: 30rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 30rem;
  object-fit: contain;
  @media (max-width: 900px) {
    height: 27rem;
  }
`;

export { Container, Wrapp, Inner, Img };
