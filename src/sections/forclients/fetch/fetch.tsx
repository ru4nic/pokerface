import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { fetchSongs, selectSongsError } from '../../../slices/songsSlice';

import { MdOutlineError } from 'react-icons/md';

import Error from '../error';

const Fetch = () => {
  const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();
  //Получение данных из файла JSON
  const fetchError = useSelector(selectSongsError);
  //Показываем ошибку если не будет ответа от сервера

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <>
      {fetchError && (
        <Error>
          <MdOutlineError className="error-icon" />
          Ошибка загрузки песен. Проверьте подключение к интернету {fetchError}
        </Error>
      )}
    </>
  );
};

export default Fetch;
