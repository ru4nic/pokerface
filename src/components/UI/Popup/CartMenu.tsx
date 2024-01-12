// import Badge from "@mui/material/Badge";
import styled from 'styled-components';
// import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../slices/cartSlice';
import IconButton from '@mui/material/IconButton';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import { RootState } from '../../../store/store';

import { Count } from './Popup';
import {
  greyText,
  heightOfNavBarDesktop,
  heightOfNavBarMobile,
} from '../../base_styles/Vars';

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   '& .MuiBadge-badge': {
//     border: `1px solid #fff`,

//   },
// }));
const CartInfoFixed = styled.section`
  position: fixed;
  right: 2.3%;
  top: calc(${heightOfNavBarDesktop} + 1rem);
  background-color: #ffffffaa;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1em;
  z-index: 1001;
  width: fit-content;
  border-radius: 6px;
  box-shadow: 0 2px 4px #00000015;
  @media (max-width: 1076px) {
    left: 0;
    top: 0;
    height: ${heightOfNavBarMobile};
    /* width: 20rem; */
    display: flex;
    gap: 1em;
    align-items: center;
  }
`;
const TextCart = styled.p`
  color: ${greyText};
  margin: 0;
  font-size: 0.9em;
  @media (max-width: 1076px) {
    margin: 0.2rem 0;
  }
`;
const Content = styled.div``;
const CartButtonsWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  gap: 1em;
  @media (max-width: 1076px) {
    margin: 0;
  }
`;
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    openCart: true;
    cleanCart: true;
  }
}

type CartMenuProps = {
  onClick: () => void;
  totalMinutesOfCart: number | undefined;
  totalSecondsOfCart: number | undefined;
};

export default function CartMenu({
  onClick,
  totalMinutesOfCart,
  totalSecondsOfCart,
}: CartMenuProps) {
  const count = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <Slide direction="left" in={count.length !== 0} mountOnEnter unmountOnExit>
      <CartInfoFixed className="mui-fixed" data-test="icon-cart">
        <Content>
          <TextCart>
            Выбрано песен: <Count data-test="songs-count">{count.length}</Count>
          </TextCart>
          <TextCart>
            Общее время:{' '}
            <Count $totalMinutes={totalMinutesOfCart} data-test="timing-sum">
              {totalMinutesOfCart}.{totalSecondsOfCart}
            </Count>
          </TextCart>
        </Content>
        <CartButtonsWrapp>
          <Tooltip title="Открыть корзину">
            <IconButton
              size="medium"
              onClick={onClick}
              color="openCart"
              sx={{
                border: '1px solid #00000015',
                boxShadow: '0 2px 3px #00000025',
              }}
            >
              {/* <Badge
            color="warning"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            overlap="rectangular"
            variant="standard"
          > */}
              <ShoppingCartIcon />
              {/* </Badge> */}
            </IconButton>
          </Tooltip>
          <Tooltip title="Очистить корзину">
            <IconButton
              color="cleanCart"
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
        </CartButtonsWrapp>
      </CartInfoFixed>
    </Slide>
  );
}
