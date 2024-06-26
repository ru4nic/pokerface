import styled from 'styled-components';

import theme from '../../theme';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.section)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
`;
export const Heading = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 4rem;
  font-size: 1.4rem;
  font-family: ${theme.fonts.RobotoRegular};
  font-weight: normal;
`;
