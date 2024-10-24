import styled from 'styled-components';
import theme from '../../../../theme';

export const Block = styled.section`
  position: fixed;
  right: 2.3%;
  top: calc(${theme.sizes.heightOfNavBarDesktop} + 1rem);
  background-color: ${theme.colors.cartBackground};
  /* background-color: #fffce0e0; */
  /* color: #890f2a; */
  backdrop-filter: blur(15px);
  /* -webkit-backdrop-filter: blur(10px); */
  padding: 1em;
  z-index: 1001;
  width: fit-content;
  border: 1px solid #00000015;
  border-radius: 6px;
  box-shadow: 0 2px 4px #00000015;
  @media (max-width: 1076px) {
    left: 0;
    top: 0;
    height: ${theme.sizes.heightOfNavBarMobile};
    display: flex;
    gap: 1em;
    align-items: center;
    border-radius: 0 0 6px 0;
  }
`;
export const Text = styled.p`
  /* color: ${theme.colors.primaryText}; */
  margin: 0;
  font-size: 0.9em;
  margin-bottom: 0.2rem;

  @media (max-width: 1076px) {
    margin: 0.2rem 0;
  }
`;
export const Content = styled.div``;
export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  gap: 1em;
  @media (max-width: 1076px) {
    margin: 0;
  }
`;
