import styled from 'styled-components';

import { ImFilePdf } from 'react-icons/im';
import Button from '@mui/material/Button';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 4rem;
`;

import { buttons } from '../data';

const Downloads = () => {
  return (
    <Box>
      {buttons.map((button) => {
        const { text, href, id } = button;
        return (
          <Button
            href={href}
            key={id}
            endIcon={<ImFilePdf />}
            sx={{
              width: '14.7rem',
              '@media (max-width: 900px)': {
                width: '15rem',
              },
            }}
          >
            {text}
          </Button>
        );
      })}
    </Box>
  );
};

export default Downloads;
