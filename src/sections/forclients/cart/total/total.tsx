import { Count } from '../cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../../store/store';

import { Wrapp, Songs, Length, Head } from './total.styled';
type TotalTableProps = {
  minutes: number;
  seconds: number;
};
const Total = ({ minutes, seconds }: TotalTableProps) => {
  const songsInCart = useSelector((state: RootState) => state.cart.value);
  return (
    <Wrapp>
      <Head>Итого:</Head>
      <Songs>
        Песен: <Count data-test="popup-song-count">{songsInCart.length}</Count>
      </Songs>
      <Length>
        Общее время:{' '}
        <Count $totalMinutes={minutes}>
          {minutes}.{seconds}
        </Count>
      </Length>
    </Wrapp>
  );
};
export default Total;
