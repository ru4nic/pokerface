import styled from 'styled-components';

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 6rem;
  column-gap: 2rem;
  max-width: 100%;
  height: 100%;

  @media screen and (max-width: 900px) {
    row-gap: 5rem;
    column-gap: 2rem;
  }
  @media screen and (max-width: 450px) {
    row-gap: 4rem;
    column-gap: unset;
  }
  @media (max-height: 820px) and (orientation: landscape) {
    align-items: center;
  }
`;
