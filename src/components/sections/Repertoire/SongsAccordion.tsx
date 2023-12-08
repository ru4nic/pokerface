import { memo, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Song from './Song';

import { Songs as typeSongs } from './Inner';

import { darkGrey, greyText } from '../../base_styles/Vars';

const Title = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: ${darkGrey};
  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;
const Length = styled.h4`
  text-align: right;
  font-size: 0.8rem;
  color: ${greyText};
  font-weight: 100;
  margin-right: 0.5rem;
`;

export interface SongsProps {
  lang: 'Зарубежные' | 'Отечественные';
  ruSongs?: typeSongs[];
  engSongs?: typeSongs[];
  srcSong: null | string;
  setSrcSong: Dispatch<SetStateAction<string | null>>;
}
const Songs = ({
  lang,
  ruSongs,
  engSongs,
  srcSong,
  setSrcSong,
}: SongsProps) => {
  return (
    <Accordion
      className="accordion"
      elevation={4}
      sx={{
        backgroundColor: '#ffffff80',
        width: '40%',
        margin: 'auto',
        transition: 'width 1s ease',
        '&.MuiPaper-root.Mui-expanded': {
          width: '40rem',
          margin: 'auto',
        },
        '@media (max-width: 900px)': {
          width: 'auto',
          '&.MuiPaper-root.Mui-expanded': {
            width: 'auto',
          },
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon color="warning" />}>
        <Title>{lang}</Title>
      </AccordionSummary>
      <AccordionDetails>
        <Length>Длительность</Length>
        <ul>
          {lang === 'Отечественные' && ruSongs
            ? ruSongs.map((song) => {
                return (
                  <Song
                    srcSong={srcSong}
                    setSrcSong={setSrcSong}
                    key={song.song}
                    {...song}
                  />
                );
              })
            : engSongs &&
              engSongs.map((song) => {
                return (
                  <Song
                    srcSong={srcSong}
                    setSrcSong={setSrcSong}
                    key={song.song}
                    {...song}
                  />
                );
              })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};
export default memo(Songs);
