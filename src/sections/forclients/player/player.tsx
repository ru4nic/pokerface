import { useRef, Dispatch, SetStateAction, useEffect } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { useDispatch, useSelector } from 'react-redux';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import { setPlaying } from '../../../slices/audioSlice';
import { RootState } from '../../../store/store';

import { Wrapper, Box, CloseBtn } from './player.styled';

type AudioPlayerFixedProps = {
  setSrcSong: Dispatch<SetStateAction<null | string>>;
  srcSong: undefined | string;
};
const Player = ({ setSrcSong, srcSong }: AudioPlayerFixedProps) => {
  const audioPlayerRef = useRef<null | AudioPlayer>(null);
  const dispatch = useDispatch();
  const audioPlayerState = useSelector(
    (state: RootState) => state.setPlaying.isPaused
  );

  const tabletsAndMobiles = useMediaQuery('(max-width:900px)');
  const handleCloseAudioPlayer = () => setSrcSong(null); //Закрываем аудиоплеер при клике на крестик

  useEffect(() => {
    const audioEl = audioPlayerRef.current;
    if (audioPlayerState === true && audioEl) {
      audioEl.audio.current?.pause();
    } else {
      audioEl?.audio.current?.play();
    }
  }, [audioPlayerState]);

  return (
    <Wrapper>
      <Box>
        <CloseBtn>
          <IconButton onClick={handleCloseAudioPlayer}>
            <CloseOutlinedIcon
              color="inherit"
              fontSize={tabletsAndMobiles ? 'medium' : 'medium'}
              data-test="close-audioplayer"
            />
          </IconButton>
        </CloseBtn>
        <AudioPlayer
          layout="horizontal"
          autoPlay
          src={srcSong}
          ref={audioPlayerRef}
          onPause={() => dispatch(setPlaying(true))}
          onPlay={() => dispatch(setPlaying(false))}
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={tabletsAndMobiles ? [] : undefined}
          showFilledVolume={tabletsAndMobiles ? false : true}
        />
      </Box>
    </Wrapper>
  );
};
export default Player;
