import { useState, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/store';
import useMediaQuery from '@mui/material/useMediaQuery';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import links from '../../data/links';
import styled from 'styled-components';
const { socials } = links;

const TextCopy = styled.p`
  margin: 0;
`;
type CopyComponentProps = {
  minutes: number;
  seconds: number;
};
const CopyComponent = ({ minutes, seconds }: CopyComponentProps) => {
  const [openSnack, setOpenSnack] = useState(false);
  const songsInCart = useSelector((state: RootState) => state.cart.value);
  const isMobile = useMediaQuery('(max-width: 450px)');

  const handleClickOpenSnack = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event: SyntheticEvent | Event, reason?: string) => {
    if (event || reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const arraySongs = songsInCart.map((track) => {
    //Формируем список песен из корзины для копирования в буфер обмена
    return `**${track.author}** - ${track.song} (${track.length})\n`;
  });

  const text = `${arraySongs.join(
    //Содержание того, что будет скопировано в буфер обмена.
    ''
  )}\n**Кол-во песен:** ${
    songsInCart.length
  }\n**Общее время выступления:** ${minutes}:${seconds}`;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          margin: '2em 0 0 0 ',
          gap: '1em',
        }}
      >
        <TextCopy className={`paragraph`}>
          Скопируйте сет-лист и отправьте его нам прямо сейчас!
        </TextCopy>
        <CopyToClipboard text={text}>
          <Button
            variant="contained"
            color="error"
            endIcon={<ContentPasteIcon />}
            onClick={handleClickOpenSnack}
            className="copy-clipboard"
          >
            Скопировать сет-лист
          </Button>
        </CopyToClipboard>
        <Box
          sx={{
            boxShadow: '1px 1px 3px #00000035',
            borderRadius: '0.5rem',
            padding: '0.3rem',
            margin: '1rem 0 0 0 ',
          }}
        >
          <IconButton
            href={socials.whatsapp}
            target="_blank"
            size="large"
            color="whatsapp"
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            href={socials.telegram}
            target="_blank"
            color="info"
            size="large"
          >
            <TelegramIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={
          isMobile
            ? { vertical: 'bottom', horizontal: 'center' }
            : { vertical: 'top', horizontal: 'center' }
        }
        open={openSnack}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        sx={isMobile ? { marginBottom: '3.4rem' } : null}
      >
        <MuiAlert
          elevation={2}
          variant="filled"
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: '100%' }}
        >
          Сет-лист скопирован
        </MuiAlert>
      </Snackbar>
    </>
  );
};
export default CopyComponent;
