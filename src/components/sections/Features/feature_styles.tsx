import styled from 'styled-components';
import { motion } from 'framer-motion';
import { bkrndLight, cardColor, greyText } from '../../base_styles/Vars';
export const FeaturesWrapper = styled.div`
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
  .feature {
    box-sizing: border-box;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 31.5%;
    position: relative;
    text-align: center;
    padding: 1.7rem;
    border-radius: 10px;
    font-size: 1rem;
    background-color: ${cardColor};
    box-shadow:
            // -7px -7px 20px 0px #fff9,
            // -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001, inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001, inset 0px 0px 0px 0px #fff9,
      inset 0px 0px 0px 0px #0001;
    // transform-style: preserve-3d;
    @media (max-width: 900px) {
      /* font-size: 1.2rem; */
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
      /* min-width: 50%; */
      font-size: 1rem;
    }
  }
`;
export const CardDesc = styled(motion.p)`
  margin: 0;
  line-height: 1.3;
  font-size: 1em;
  font-family: 'IbmLight';
  color: inherit;
  font-weight: normal;
`;
export const CardTitle = styled(motion.h3)`
  font-family: 'IbmBold';
  font-weight: 500;
  font-size: 1.3em;
  line-height: 1;
  color: inherit;
  margin: 0.5rem 0 1em;
  @media (max-width: 450px) {
  }
`;

export const IconWrapper = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background: ${greyText};
  border-radius: 50%;
  position: relative;
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${bkrndLight};
  font-size: 1.75rem;
  line-height: 1rem;
  transform: translate(-50%, -50%);
`;
