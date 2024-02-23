import {
  memo,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
} from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import IconButton from '@mui/material/IconButton';

import { PlayBtn } from './item.styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { setPlaying } from '../../../../slices/audioSlice';

// declare module '@mui/material/SvgIcon' {
//   interface SvgIconPropsColorOverrides {
//     redPlay: true;
//   }
// }

type ItemWithAudioProps = {
  src: string;
  srcSong: string | null;
  setSrcSong: Dispatch<SetStateAction<string | null>>;
  song: string;
};

const ItemWithAudio = ({
  src,
  srcSong,
  setSrcSong,
  song,
}: ItemWithAudioProps) => {
  const [isPlayingCurrentSong, setIsPlayingCurrentSong] = useState(false);
  const playerIsPaused = useSelector(
    (state: RootState) => state.setPlaying.isPaused
  );
  const cart = useSelector((state: RootState) => state.cart.value);

  const checked = cart.find((item) => song === item.song);

  const dispatch = useDispatch();

  const togglePlayPause: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setSrcSong(src);
    setIsPlayingCurrentSong(!isPlayingCurrentSong);
    dispatch(setPlaying(isPlayingCurrentSong));
  };

  useEffect(() => {
    if (src !== srcSong) {
      setIsPlayingCurrentSong(false);
    }
  }, [src, srcSong]);

  useEffect(() => {
    if (!playerIsPaused) {
      setIsPlayingCurrentSong(true);
    }
  }, [setIsPlayingCurrentSong]);

  return (
    <>
      <PlayBtn>
        {srcSong === src && isPlayingCurrentSong && !playerIsPaused ? (
          <IconButton
            onClick={togglePlayPause}
            // color="error"
            color={checked ? 'white' : 'error'}
          >
            <PauseCircleIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
            onClick={togglePlayPause}
            color={
              checked
                ? 'white'
                : srcSong === src && !checked
                ? 'error'
                : 'warning'
            }
            // color={isPlayingCurrentSong ? 'secondary' : 'default'}
          >
            <PlayCircleIcon fontSize="large" />
          </IconButton>
        )}
      </PlayBtn>
    </>
  );
};

export default memo(ItemWithAudio);
