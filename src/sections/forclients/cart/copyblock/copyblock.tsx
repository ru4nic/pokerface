import { useState, SyntheticEvent } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../../store/store';

import useMediaQuery from '@mui/material/useMediaQuery';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { Desc, Wrapp, Messengers } from './copyblock.styled';

import links from '../../../../data/links';
const { socials } = links;

type CopyBlockProps = {
  minutes: number;
  seconds: number;
};
const CopyBlock = ({ minutes, seconds }: CopyBlockProps) => {
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

  const Copytext = `${arraySongs.join(
    //Содержание того, что будет скопировано в буфер обмена.
    ''
  )}\n**Кол-во песен:** ${
    songsInCart.length
  }\n**Общее время выступления:** ${minutes}:${seconds}`;

  return (
    <>
      <Wrapp>
        <Desc className={`paragraph`}>
          Скопируйте сет-лист и отправьте его нам прямо сейчас!
        </Desc>
        <CopyToClipboard text={Copytext}>
          <Button
            endIcon={<ContentPasteIcon />}
            onClick={handleClickOpenSnack}
            className="copy-clipboard"
          >
            Скопировать сет-лист
          </Button>
        </CopyToClipboard>
        <Messengers>
          <IconButton href={socials.whatsapp} target="_blank" color="whatsapp">
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton href={socials.telegram} target="_blank" color="info">
            <TelegramIcon fontSize="large" />
          </IconButton>
        </Messengers>
      </Wrapp>
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
export default CopyBlock;
