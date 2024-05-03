import styled from 'styled-components';

import { ImFilePdf } from 'react-icons/im';
import Button from '@mui/material/Button';

import PdfSongsRender from '../pdf/PdfSongsRender';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 4rem;
`;

import { buttons } from '../data';
import { useSelector } from 'react-redux';
import { selectSongs } from '../../../slices/songsSlice';

const Downloads = () => {
  const allSongs = useSelector(selectSongs);
  const ruSongs = allSongs.filter((songs) => songs.type === 'Отечественные');
  const engSongs = allSongs.filter((songs) => songs.type === 'Зарубежные');
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

      <PDFDownloadLink
        document={<PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} />}
        fileName="Pokerface_songs.pdf"
      >
        {({ loading, error }) => (
          <Button
            endIcon={loading ? null : !error && <ImFilePdf />}
            sx={{
              width: '14.7rem',
              '@media (max-width: 900px)': {
                width: '15rem',
              },
            }}
          >
            {loading
              ? 'Загрузка...'
              : error
              ? `Ошибка создания PDF-документа ${error}`
              : 'Репертуар'}
          </Button>
        )}
      </PDFDownloadLink>
      {/* <PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} /> */}
    </Box>
  );
};

export default Downloads;
