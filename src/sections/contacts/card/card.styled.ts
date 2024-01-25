import styled from 'styled-components';

import { motion } from 'framer-motion';

import theme from '../../../theme';

export const Content = styled(motion.div)`
  text-align: center;
  z-index: 0;
`;
export const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border: 2px solid rgba(0, 0, 0, 0.06);
  border-radius: 50%;
`;
export const Name = styled.h3`
  font-weight: normal;
  font-family: ${theme.fonts.RobotoMedium};
  letter-spacing: normal;
  color: ${theme.colors.primaryText};
  line-height: 1.5;
  margin: 0 0 0.5rem 0;
  display: block;
  font-size: 1.4em;
  text-align: center;
  @media (max-width: 450px) {
    font-weight: normal;
  }
`;
export const Desc = styled.p`
  font-family: 'IbmLight';
  font-size: 1.1em;
  margin-top: 0;
`;
