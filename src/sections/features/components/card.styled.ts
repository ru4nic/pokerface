import styled from 'styled-components';

import { motion } from 'framer-motion';
import theme from '../../../theme';

export const Desc = styled(motion.p)`
  margin: 0;
  line-height: 1.3;
  font-size: 1em;
  font-family: ${theme.fonts.IbmLight};
  color: inherit;
  font-weight: normal;
`;
export const Title = styled(motion.h3)`
  font-family: ${theme.fonts.IbmBold};
  font-weight: 500;
  font-size: 1.3em;
  line-height: 1;
  color: inherit;
  margin: 0.5rem 0 1em;
  @media (max-width: 450px) {
  }
`;

export const CircleWrapp = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background: ${theme.colors.dark};
  border-radius: 50%;
  position: relative;
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${theme.colors.secondaryText};
  font-size: 1.75rem;
  line-height: 1rem;
  transform: translate(-50%, -50%);
`;
