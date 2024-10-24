import styled from 'styled-components';

import { ImFilePdf } from 'react-icons/im';
import Button from '@mui/material/Button';

import PdfSongsRender from '../pdf/PdfSongsRender';
import { pdf } from '@react-pdf/renderer';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 4rem;
`;

import { buttons } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { selectSongs } from '../../../slices/songsSlice';
import { selectBlobState, setBlobState } from '../../../slices/blobSlice';
import { useCallback, useEffect } from 'react';

const Downloads = () => {
  const dispatch = useDispatch();
  const allSongs = useSelector(selectSongs);
  const blobUrl = useSelector(selectBlobState);

  const ruSongs = allSongs.filter((songs) => songs.type === 'Отечественные');
  const engSongs = allSongs.filter((songs) => songs.type === 'Зарубежные');

  const generatePdf = useCallback(async () => {
    const blob = await pdf(
      <PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} />
    ).toBlob();
    const newBlobUrl = URL.createObjectURL(blob);

    if (newBlobUrl !== blobUrl) {
      dispatch(setBlobState(newBlobUrl));
    }
  }, [ruSongs, engSongs, dispatch, blobUrl]);

  useEffect(() => {
    if (allSongs.length > 0 && !blobUrl) {
      generatePdf();
      console.log('PDF Generated');
    }
  }, [allSongs, generatePdf, blobUrl]);
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
      <Button
        endIcon={<ImFilePdf />}
        href={blobUrl || '#'}
        download="Pokerface_Repertuar"
        sx={{
          width: '14.7rem',
          '@media (max-width: 900px)': {
            width: '15rem',
          },
        }}
      >
        Репертуар
      </Button>
    </Box>
  );
};

export default Downloads;
