import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import styled from 'styled-components';
import { Song as typeSong } from '../../../slices/songSlicer';
import { removeSong } from '../../../slices/songSlicer';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { Author } from '../../sections/Repertoire/Song';
import { PlayButton, SongName, Length } from '../../sections/Repertoire/Song';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { redTheme } from '../../base_styles/Vars';

const TrackItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.hidden {
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
`;

const Song = styled(SongName)`
  /* padding-right: 2rem; */
`;

const DeleteButton = styled(PlayButton)`
  margin: 0 0 0 auto;
  min-width: min-content;
  color: ${redTheme};
`;
const SetListLength = styled(Length)`
  margin: 0;
`;
type PopupSongListProps = {
  handleCloseDialog: () => void;
};
const PopupSongList = ({ handleCloseDialog }: PopupSongListProps) => {
  const songsInCart = useSelector((state: RootState) => state.addSong.value);
  const dispatch = useDispatch();
  const deleteSongHandler = (song: typeSong) => {
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
          <TrackItem key={song} className="track-item">
            <Author>{author}&nbsp;</Author>
            <Song>&mdash;&nbsp;{song}</Song>
            <Tooltip title="удалить">
              <DeleteButton>
                <IconButton
                  color="inherit"
                  onClick={() =>
                    deleteSongHandler({
                      author: author,
                      song: song,
                      length: length,
                      checked: true,
                    })
                  }
                >
                  <DeleteForeverRoundedIcon />
                </IconButton>
              </DeleteButton>
            </Tooltip>
            <SetListLength>{length.replace('.', ':')}</SetListLength>
          </TrackItem>
        );
      })}
    </ul>
  );
};
export default PopupSongList;
