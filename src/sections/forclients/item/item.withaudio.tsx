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
import { RootState } from '../../../store/store';
import { setPlaying } from '../../../slices/audioSlice';

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
  const [currentPlayingSong, setCurrentPlayingSong] = useState(false);
  const audioPlayerState = useSelector(
    (state: RootState) => state.setPlaying.isPaused
  );
  const checked = useSelector((state: RootState) => {
    const songChecked = state.cart.value.find((track) => track.song === song);
    return songChecked?.checked;
  }); //checked - выделение цветом в списке песен (в аккордеоне).)

  const dispatch = useDispatch();
  const togglePlayPause: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    setSrcSong(src);
    setCurrentPlayingSong(!currentPlayingSong);
    dispatch(setPlaying(currentPlayingSong));
  };
  useEffect(() => {
    if (src !== srcSong) {
      setCurrentPlayingSong(false);
    }
  }, [src, srcSong]);
  useEffect(() => {
    if (!audioPlayerState) {
      setCurrentPlayingSong(true);
    }
  }, [setCurrentPlayingSong]);
  return (
    <>
      <PlayBtn>
        <IconButton onClick={togglePlayPause} color="inherit">
          {srcSong === src && currentPlayingSong && !audioPlayerState ? (
            <PauseCircleIcon
              fontSize="large"
              color={checked ? 'inherit' : 'error'}
            />
          ) : (
            <PlayCircleIcon
              fontSize="large"
              color={
                srcSong === src && audioPlayerState && !checked
                  ? 'error'
                  : 'inherit'
              }
            />
          )}
        </IconButton>
      </PlayBtn>
    </>
  );
};

export default memo(ItemWithAudio, (prevProps, nextProps) => {
  return prevProps.srcSong === nextProps.srcSong;
});
