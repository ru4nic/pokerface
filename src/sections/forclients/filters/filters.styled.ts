import styled from 'styled-components';

export const Box = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;
export const Title = styled.h4`
  text-align: center;
  width: 100%;
`;
export const Col = styled.div`
  width: 50%;
  padding-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  &:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
    padding-left: 0;
  }
  @media (max-width: 1076px) {
    width: 100%;
    justify-content: center;
    &:nth-child(2) {
      padding-right: 0;
    }
  }
`;
export const GroupHeader = styled('div')(() => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: 'white',
  backgroundColor: '#91865c9f',
  backdropFilter: 'blur(5px)',
}));
export const GroupItems = styled('ul')({
  padding: 0,
});
export const Icon = styled.div`
  display: inline-flex;
  vertical-align: baseline;
  margin-left: 0.2em;
`;
