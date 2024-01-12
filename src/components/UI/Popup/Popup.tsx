import { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { clearCart } from '../../../slices/cartSlice';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import CartMenu from './CartMenu';
import useMediaQuery from '@mui/material/useMediaQuery';

import { redTheme } from '../../base_styles/Vars';
import styled from 'styled-components';

import PopupSongList from './PopupSongList';
import TotalTable from './TotalTable';
import CopyComponent from './CopyComponent';

const Titles = styled.ul`
  font-size: 0.9rem;
  padding-bottom: 0.3rem;
  color: #777;
  letter-spacing: -1px;
`;
const TitleSong = styled.span`
  padding-left: 5rem;
`;

const Count = styled.span<{ $totalMinutes?: number }>`
  background-color: ${(props) =>
    props.$totalMinutes && props.$totalMinutes > 90
      ? `${redTheme}15`
      : '#12851215'};
  border: ${(props) =>
    props.$totalMinutes && props.$totalMinutes > 90
      ? `1px solid ${redTheme}40`
      : `1px solid #12851250`};
  color: ${(props) =>
    props.$totalMinutes && props.$totalMinutes > 90
      ? `${redTheme}`
      : '#128512'};
  padding: 0 0.2em;
  border-radius: 6px;
  font-family: IbmRegular;
  font-weight: 400;
`;
const Conditions = styled.p`
  margin: 0 auto;
  padding: 0;
  font-size: 0.85em;
`;

const TextChecked = styled.span`
  background-color: #00000010;

  border: 1px solid #00000020;
  border-radius: 6px;
  padding: 0 0.2em;
  white-space: nowrap;
`;
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    whatsapp: true;
  }
}
const Popup = () => {
  const [open, setOpen] = useState(false);

  const songsInCart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCleanTracks = () => {
    //Очистить корзину со всеми песнями
    dispatch(clearCart());
    setOpen(false);
  };

  const isMobile = useMediaQuery('(max-width: 450px)');

  const totalSeconds = songsInCart.reduce((acc, curr) => {
    //Считаем общее количетсво секунд
    const [minutes, seconds] = curr.length.split('.').map(Number);
    return acc + minutes * 60 + seconds;
  }, 0);

  const minutes = Math.floor(totalSeconds / 60); //Получаем минуты и округляем
  const seconds = totalSeconds % 60; //Получаем секунды и округляем

  return (
    <div>
      <CartMenu
        onClick={handleClickOpenDialog}
        totalMinutesOfCart={minutes}
        totalSecondsOfCart={seconds}
      />
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullScreen={isMobile}
        scroll="body"
      >
        <DialogTitle>
          Ваш сет-лист
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5, float: 'right' }}
            onClick={handleCloseDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Titles>
            <TitleSong>Композиция</TitleSong>
          </Titles>
          <PopupSongList handleCloseDialog={handleCloseDialog} />
          {songsInCart.length === 0 && (
            <div className="noTracks">Список пуст</div>
          )}
          <TotalTable minutes={minutes} seconds={seconds} />
          <Conditions>
            &lowast;&nbsp;Минимальная длительность выступления -{' '}
            <TextChecked>90 минут.</TextChecked> Программу можно разделить на
            блоки как Вам удобно. Например:{' '}
            <TextChecked>3 по 30 минут</TextChecked> или{' '}
            <TextChecked>2 по 45 минут</TextChecked>.
          </Conditions>
          <CopyComponent minutes={minutes} seconds={seconds} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCleanTracks}
            size="large"
          >
            Очистить
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCloseDialog}
            size="large"
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default memo(Popup);
export { Count };
