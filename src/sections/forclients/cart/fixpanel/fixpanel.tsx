// import Badge from "@mui/material/Badge";

// import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../../slices/cartSlice';
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { IoIosOpen } from 'react-icons/io';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import { RootState } from '../../../../store/store';

import { Count } from '../cart';
import { Block, Content, Text, Actions } from './fixpanel.styled';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    openCart: true;
    cleanCart: true;
  }
}

type FixPanelProps = {
  onClick: () => void;
  totalMinutesOfCart: number | undefined;
  totalSecondsOfCart: number | undefined;
};

export default function FixPanel({
  onClick,
  totalMinutesOfCart,
  totalSecondsOfCart,
}: FixPanelProps) {
  const count = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Slide direction="left" in={count.length !== 0} mountOnEnter unmountOnExit>
      <Block className="mui-fixed" data-test="icon-cart">
        <Content>
          <Text>
            Выбрано песен: <Count data-test="songs-count">{count.length}</Count>
          </Text>
          <Text>
            Общее время:{' '}
            <Count $totalMinutes={totalMinutesOfCart} data-test="timing-sum">
              {totalMinutesOfCart}.{totalSecondsOfCart}
            </Count>
          </Text>
        </Content>
        <Actions>
          <Tooltip title="Открыть корзину">
            <IconButton
              size="medium"
              onClick={onClick}
              color="success"
              sx={{
                border: '1px solid #00000015',
                boxShadow: '0 2px 3px #00000025',
              }}
            >
              {/* <IoIosOpen /> */}
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Очистить корзину">
            <IconButton
              color="error"
              size="medium"
              onClick={() => dispatch(clearCart())}
              sx={{
                border: '1px solid #00000015',
                boxShadow: '0 2px 3px #00000025',
              }}
            >
              <RemoveShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </Actions>
      </Block>
    </Slide>
  );
}
