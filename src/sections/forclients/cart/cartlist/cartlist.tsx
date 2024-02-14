import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store/store';
import { Song as typeSong } from '../../../../slices/cartSlice';
import { removeSong } from '../../../../slices/cartSlice';

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import { Song, Author } from '../../item/item.styled';
import { Item, DelBtn, Length } from './cartlist.styled';
type PopupSongListProps = {
  handleCloseDialog: () => void;
};
const CartList = ({ handleCloseDialog }: PopupSongListProps) => {
  const songsInCart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  const removeItemHandler = (song: typeSong) => {
    // Удаляем песню из корзины по клику на кнопку "удалить" напротив каждой песни
    dispatch(removeSong(song));
    if (songsInCart.length === 1) {
      handleCloseDialog();
    }
  };

  return (
    <ul>
      {songsInCart.map((track) => {
        const { author, song, length } = track;
        return (
          <Item key={song} className="track-item">
            <Author>{author}&nbsp;</Author>
            <Song>&mdash;&nbsp;{song}</Song>
            <Tooltip title="удалить">
              <DelBtn>
                <IconButton
                  color="inherit"
                  onClick={() =>
                    removeItemHandler({
                      author: author,
                      song: song,
                      length: length,
                      checked: true,
                    })
                  }
                >
                  <DeleteForeverRoundedIcon />
                </IconButton>
              </DelBtn>
            </Tooltip>
            <Length>{length.replace('.', ':')}</Length>
          </Item>
        );
      })}
    </ul>
  );
};
export default CartList;
