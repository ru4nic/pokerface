import { useState } from 'react';
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

import FixPanel from './fixpanel';
import useMediaQuery from '@mui/material/useMediaQuery';

import CartList from './cartlist';
import Total from './total/total';
import CopyBlock from './copyblock';

import { TextChecked, Count, Conditions } from './cart.styled';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    whatsapp: true;
  }
}
const Cart = () => {
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
      <FixPanel
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
            color="warning"
            sx={{ p: 0.5, float: 'right' }}
            onClick={handleCloseDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <CartList handleCloseDialog={handleCloseDialog} />
          {songsInCart.length === 0 && (
            <div className="noTracks">Список пуст</div>
          )}
          <Total minutes={minutes} seconds={seconds} />
          <Conditions>
            &lowast; Минимальная длительность выступления -{' '}
            <TextChecked>90 минут.</TextChecked> Программу можно разделить на
            блоки как Вам удобно. Например:{' '}
            <TextChecked>3 по 30 минут</TextChecked> или{' '}
            <TextChecked>2 по 45 минут</TextChecked>.
          </Conditions>
          <CopyBlock minutes={minutes} seconds={seconds} />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCleanTracks}
          >
            Очистить
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleCloseDialog}
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Cart;
export { Count };
