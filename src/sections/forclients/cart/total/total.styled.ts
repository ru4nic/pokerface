import styled from 'styled-components';

import theme from '../../../../theme';

const Wrapp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-template-areas:
    'header header'
    'songs length';
  width: fit-content;
  margin: 2em auto;
  font-size: 1em;
  font-family: ${theme.fonts.RobotoRegular};
  line-height: 1.7em;
  font-weight: 400;
`;
const Head = styled.div`
  grid-area: header;
  text-align: center;

  font-size: 1rem;
`;
const Songs = styled.div`
  grid-area: songs;
  text-align: center;
  font-size: 1rem;
`;
const Length = styled.div`
  grid-area: length;
  text-align: center;
  font-size: 1rem;
`;
export { Wrapp, Length, Head, Songs };
