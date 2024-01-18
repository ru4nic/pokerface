import { useState, memo, useEffect, lazy } from 'react';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs, selectSongsError } from '../../../slices/songsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PdfSongsRender from '../UI/PdfSongsRender';

import Popup from '../../UI/Popup';

import SongList from './SongList';

import AudioPlayerFixed from '../../UI/AudioPlayerFixed';
// import FilterForm from './FilterForm';
const FilterForm = lazy(() => import('./FilterForm'));

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
`;
const Title = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 4rem;
  font-size: 1.4rem;
  font-family: RobotoRegular;
  font-weight: normal;
`;
const Inner = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  //Получение данных из файла JSON
  const fetchError = useSelector(selectSongsError);
  //Показываем ошибку если не будет ответа от сервера
  const [srcSong, setSrcSong] = useState<null | string>(null);
  //Получение ссылки на текущ. песню в плеере

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <>
      <Popup />
      {fetchError ? (
        <div style={{ textAlign: 'center' }}>
          Ошибка загрузки песен. Проверьте подключение к интернету {fetchError}
        </div>
      ) : (
        <Wrapper>
          <FilterForm />
          <Title>Репертуар</Title>
          {/* <SongList lang="Отечественные" {...{ srcSong, setSrcSong }} />
          <SongList lang="Зарубежные" {...{ srcSong, setSrcSong }} /> */}
          <SongList srcSong={srcSong} setSrcSong={setSrcSong} />
        </Wrapper>
      )}

      {/* Аудиоплеер покажется на странице если пользователь кликнул послушать любую песню. */}

      {srcSong !== null && (
        <AudioPlayerFixed srcSong={srcSong} setSrcSong={setSrcSong} />
      )}

      {/* <PDFDownloadLink
        className="songs-list-link__download"
        document={<PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} />}
        fileName="Pokerface_songs.pdf"
      >
        {({blob, url, loading})=> loading? 'Loading doc': "Download"} */}

      {/* </PDFDownloadLink> */}
      {/* <PdfSongsRender ruSongs={ruSongs} engSongs={engSongs} /> */}
    </>
  );
};

export default memo(Inner);
