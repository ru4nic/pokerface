import { useRef, Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { useDispatch, useSelector } from 'react-redux';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import { setPlaying } from '../../slices/audioSlice';
import { RootState } from '../../store/store';
import { greyText } from '../base_styles/Vars';

const StyledAudioPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 103;
`;

const AudioPlayerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  .rhap_container {
    background-color: #ffffffbb;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 7px 7px 0 0;
  }
  .rhap_main-controls {
    flex: 1 1 auto;
  }
  .rhap_additional-controls {
    flex: 0 0 auto;
    @media (max-width: 900px) {
      flex: 1 0 auto;
    }
  }
  .rhap_volume-controls {
    justify-content: flex-start;
  }
  .rhap_progress-filled {
    background-color: ${greyText};
  }
  .rhap_progress-bar-show-download {
    background-color: ${greyText}40;
  }
  .rhap_volume-filled {
    background: ${greyText};
  }
  .rhap_volume-bar {
    background-color: ${greyText}40;
  }
  .rhap_volume-indicator {
    background: #fff;
    opacity: 1;
    z-index: 3;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 12px 0px;
  }
  .rhap_time {
    color: #777;
    font-family: 'IbmLight';
  }
  .rhap_button-clear {
    color: ${greyText};
  }

  .rhap_progress-indicator {
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const AudioPlayerCloseButton = styled.div`
  align-self: flex-end;
  margin-bottom: 0.2rem;
`;

type AudioPlayerFixedProps = {
  setSrcSong: Dispatch<SetStateAction<null | string>>;
  srcSong: undefined | string;
};
const AudioPlayerFixed = ({ setSrcSong, srcSong }: AudioPlayerFixedProps) => {
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
    <StyledAudioPlayer>
      <AudioPlayerContainer>
        <AudioPlayerCloseButton>
          <IconButton onClick={handleCloseAudioPlayer}>
            <CloseOutlinedIcon
              color="warning"
              fontSize={tabletsAndMobiles ? 'large' : 'medium'}
              data-test="close-audioplayer"
            />
          </IconButton>
        </AudioPlayerCloseButton>
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
      </AudioPlayerContainer>
    </StyledAudioPlayer>
  );
};
export default AudioPlayerFixed;
