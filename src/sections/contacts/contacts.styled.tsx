import styled from 'styled-components';

import theme from '../../theme';

export const SectionContacts = styled.section`
  background: ${theme.colors.background};
  color: ${theme.colors.primaryText};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .contactsCard {
    box-shadow: 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001,
      inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001,
      inset 0px 0px 0px 0px #fff9, inset 0px 0px 0px 0px #0001;
    transition: box-shadow 0.6s cubic-bezier(0.79, 0.21, 0.06, 0.81);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    background-color: ${theme.colors.cardBackground};
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-weight: normal;
  }
`;
