import { useEffect, useState, memo } from 'react';

// import { PDFDownloadLink } from '@react-pdf/renderer';
// import PdfSongsRender from '../UI/PdfSongsRender';

import Popup from '../../UI/Popup';

import SongsAccordion from './SongsAccordion';

import AudioPlayerFixed from '../../UI/AudioPlayerFixed';

type TypeSong = {
  type: 'Отечественные' | 'Зарубежные';
};
export interface Songs {
  author: string;
  song: string;
  length: string;
  src: string;
  type: TypeSong;
}
const Inner = () => {
  //Получение данных из файла JSON
  const [listOfSongs, setlistOfSongs] = useState([]);
  //Показываем ошибку если не будет ответа от сервера
  const [error, setError] = useState<string | null>(null);
  //Получение ссылки на текущ. песню в плеере
  const [srcSong, setSrcSong] = useState<null | string>(null);
  //Медиазапрос для MUI

  //----------------------------------------------------------------------------//

  const linkJson = './listOfSongs.json';
  // const linkJson = 'https://pokerfaceband.ru/listOfSongs.json';
  const ruSongs: Songs[] = listOfSongs.filter(
    (song: TypeSong) => song.type === 'Отечественные'
  );
  const engSongs: Songs[] = listOfSongs.filter(
    (song: TypeSong) => song.type === 'Зарубежные'
  );

  useEffect(() => {
    async function fetchData() {
      //Отправляем запрос и получаем данные о песнях из JSON файла
      try {
        const resSongs = await fetch(linkJson);
        const fetchSongs = await resSongs.json();
        setlistOfSongs(fetchSongs);
      } catch (error: any) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);
  if (error) {
    return (
      <h3>
        Ошибка загрузки песен: {error} Сервер не отвечает или проверьте
        подключение к интернету.
      </h3>
    );
  }

  return (
    <>
      <Popup />
      <SongsAccordion
        lang="Отечественные"
        {...{ ruSongs, srcSong, setSrcSong }}
      />
      <SongsAccordion
        lang="Зарубежные"
        {...{ engSongs, srcSong, setSrcSong }}
      />
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
      {/* <TiltParalax> */}
      {/* </TiltParalax> */}
    </>
  );
};

export default memo(Inner);
