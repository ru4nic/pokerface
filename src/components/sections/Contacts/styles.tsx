import styled from 'styled-components';
import {
  bkrndLight,
  cardColor,
  darkGrey,
  greyText,
} from '../../base_styles/Vars';
import { motion } from 'framer-motion';

export const SectionContacts = styled.section`
  background: ${bkrndLight};
  color: ${greyText};
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
    background-color: ${cardColor};
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-weight: normal;
  }
`;
export const Manager = styled(motion.div)`
  text-align: center;
  z-index: 0;
`;
export const ManagerImg = styled.img`
  width: 10rem;
  height: 10rem;
  border: 2px solid rgba(0, 0, 0, 0.06);
  border-radius: 50%;
`;
export const ManagerTitle = styled.h3`
  font-weight: normal;
  font-family: 'RobotoMedium';
  letter-spacing: normal;
  color: ${darkGrey};
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
  display: block;
  font-size: 1.4em;
  text-align: center;
  @media (max-width: 450px) {
    font-weight: normal;
  }
`;
export const ManagerDesc = styled.p`
  font-family: 'IbmLight';
  font-size: 1.1em;
  margin-top: 0;
`;
