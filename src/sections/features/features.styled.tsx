import styled from 'styled-components';

import theme from '../../theme';

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 625px) {
    gap: 4rem;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    justify-content: center;
  }
  .feature-card {
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 31.5%;
    position: relative;
    text-align: center;
    padding: 1.7rem;
    border-radius: 10px;
    font-size: 1rem;
    background-color: ${theme.colors.cardBackground};
    box-shadow: 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001,
      inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001,
      inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
    @media (max-width: 900px) {
      flex-basis: 40%;
      padding: 1.5rem;
    }
    @media (max-width: 625px) {
      flex-basis: 50%;
      flex-grow: 1;
      font-size: 1.1rem;
      padding: 2rem;
    }
    @media (max-height: 820px) and (orientation: landscape) {
      font-size: 1rem;
    }
  }
`;
