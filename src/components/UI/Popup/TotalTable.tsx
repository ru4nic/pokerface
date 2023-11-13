import styled from 'styled-components';
import { Count } from './Popup';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../../store/store';

const Total = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-template-areas:
    'header header'
    'songs length';
  width: fit-content;
  margin: 2em auto;
  font-size: 1em;
  font-family: RobotoRegular;
  line-height: 1.7em;
  font-weight: 400;
`;
const TitleSum = styled.div`
  grid-area: header;
  text-align: center;

  font-size: 1rem;
`;
const SumSongsText = styled.div`
  grid-area: songs;
  text-align: center;
  font-size: 1rem;
`;
const SumLengthText = styled.div`
  grid-area: length;
  text-align: center;
  font-size: 1rem;
`;
type TotalTableProps = {
  minutes: number;
  seconds: number;
};
const TotalTable = ({ minutes, seconds }: TotalTableProps) => {
  const songsInCart = useSelector((state: RootState) => state.addSong.value);
  return (
    <Total>
      <TitleSum>Итого:</TitleSum>
      <SumSongsText>
        Песен: <Count data-test="popup-song-count">{songsInCart.length}</Count>
      </SumSongsText>
      <SumLengthText>
        Общее время:{' '}
        <Count $totalMinutes={minutes}>
          {minutes}.{seconds}
        </Count>
      </SumLengthText>
    </Total>
  );
};
export default TotalTable;
