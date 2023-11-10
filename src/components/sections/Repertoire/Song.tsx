import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongWithAudio from "./SongWithAudio";
import styled from "styled-components";
import {
  checkedAuthor,
  checkedText,
  darkGrey,
  greyText,
  redPlay,
} from "../../base_styles/Vars";
import {
  removeSong,
  addSong,
  toggleSongChecked,
} from "../../../slices/songSlicer";

import { RootState } from "../../../store/store";
import { Song as typeSong } from "../../../slices/songSlicer";

const Item = styled.li<{ $checked?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas:
    "play author -"
    "play song length";
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0.75rem 2.2rem;
  font-size: 1rem;
  font-family: IbmLight;
  user-select: none;
  text-decoration: initial;
  background-color: ${(props) => (props.$checked ? redPlay : "")};
  transition: background-color 0.2s ease, border-radius 0.2s ease,
    color 0.5s ease;
  color: ${(props) => (props.$checked ? checkedAuthor : darkGrey)};
  margin: 0.8rem 0.4rem;
  box-shadow: ${(props) =>
    props.$checked
      ? "2px 2px 3px rgba(0, 0, 0, 0.493)"
      : "1px 2px 3px 1px rgba(0, 0, 0, 0.187)"};
  border-radius: ${(props) => (props.$checked ? "15px" : "5px")};
  text-overflow: ellipsis;
  overflow: hidden;
  column-gap: 0.5rem;
  /* border: ${(props) => props.$checked && "1px solid #8a3131"}; */
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    /* background: #fff; */
    background-color: ${(props) => props.$checked && `${redPlay}cc`};
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.208), 1px 2px 2px 1px white;
  }

  @media screen and (max-width: 625px) {
    padding: 0.75rem 1rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding: 0.75rem 0.9rem;
    border-radius: ${(props) => props.$checked && "7px"};
    &:last-child {
      margin-bottom: 0.5rem;
    }
  }
`;

const Author = styled.div<{ $checked?: boolean }>`
  font-family: "RobotoMedium";
  color: ${(props) => (props.$checked ? checkedAuthor : darkGrey)};
  grid-area: author;
  text-overflow: ellipsis;
  transition: color 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;

const SongName = styled.div<{ $checked?: boolean }>`
  color: ${(props) => (props.$checked ? checkedText : greyText)};

  transition: color 0.2s ease;

  grid-area: song;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`;
const Length = styled.div<{ $checked?: boolean }>`
  color: ${(props) => (props.$checked ? checkedText : greyText)};

  transition: color 0.2s ease;
  grid-area: length;
  pointer-events: none;
`;
const PlayButton = styled.div`
  grid-area: play;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 6rem;
`;
const NoAudioText = styled.div<{ $checked?: boolean }>`
  text-align: center;

  transition: color 0.2s ease;
  color: ${(props) => (props.$checked ? checkedText : greyText)};
`;

type SongProps = {
  author: string;
  song: string;
  length: string;
  src: string;
  srcSong: string | null;
  setSrcSong: Dispatch<SetStateAction<string | null>>;
};
const Song = ({
  author,
  song,
  length,
  src,
  srcSong,
  setSrcSong,
}: SongProps) => {
  const dispatch = useDispatch();
  const cartSongs = useSelector((state: RootState) => state.addSong.value);
  const checked = useSelector((state: RootState) => {
    const songChecked = state.addSong.value.find(
      (track) => track.song === song
    );
    return songChecked ? songChecked.checked : false;
  }); //checked - выделение цветом в списке песен (в аккордеоне).

  const addSongToCart = (song: typeSong) => {
    //Добавляем песню в корзину, на которую кликнули.
    const songExist = cartSongs.find((track) => track.song === song.song); //Проверяем есть ли песня в корзине
    if (songExist) {
      //Если кликаем на песню и в корзине эта песня уже есть - удаляем оттуда.
      dispatch(removeSong(song));
    } else {
      // Если в корзине нет песни на которую кликнули - добавляем в корзину и выделяем цветом в списке.
      dispatch(addSong(song));
      dispatch(toggleSongChecked(song.song));
    }
  };
  return (
    <Item
      $checked={checked}
      onClick={() =>
        addSongToCart({
          author: author,
          song: song,
          length: length,
          checked: checked,
        })
      }
    >
      <Author $checked={checked}>{author}</Author>
      <SongName $checked={checked}>{song}</SongName>
      <Length $checked={checked}>{length.replace(".", ":")}</Length>
      {src ? (
        <SongWithAudio
          src={src}
          srcSong={srcSong}
          setSrcSong={setSrcSong}
          song={song}
        />
      ) : (
        <PlayButton>
          <NoAudioText $checked={checked}>нет аудиозаписи</NoAudioText>
        </PlayButton>
      )}
    </Item>
  );
};

export default Song;
export { PlayButton, SongName, Length, Author };
