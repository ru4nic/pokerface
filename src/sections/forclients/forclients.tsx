'use client';
import { ErrorBoundary } from 'react-error-boundary';

import { useState, useEffect, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDispatch } from 'react-redux';
import { Song as typeSong } from '../../slices/cartSlice';
import { addSong, clearCart } from '../../slices/cartSlice';

import CircularProgress from '@mui/material/CircularProgress';
import { MdOutlineError } from 'react-icons/md';

import {
  Section,
  Title,
  Container,
  Paragraph,
  SpinnerWrapp,
} from '../../layout/main';
import { Wrapper, Heading } from './forclients.styled';
import Downloads from './downloads';
// import Popup from '../../components/Popup';

import Player from './player/player';

import links from '../../data/links';
import Error from './error';
// import Fetch from './fetch';
const Fetch = lazy(() => import('./fetch'));
const Cart = lazy(() => import('./cart'));
const SongList = lazy(() => import('./songlist/songlist'));
const FilterForm = lazy(() => import('./filters'));
// import FilterForm from './filterform';

const ForClients = () => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.2,
    triggerOnce: true,
  });

  const [srcSong, setSrcSong] = useState<null | string>(null);

  //Получение ссылки на текущ. песню в плеере

  const dispatch = useDispatch();

  useEffect(() => {
    const initialCart = localStorage.getItem('cart'); //Получаем данные из localStorage

    if (initialCart) {
      //Если LocalStorage не пуст, то
      dispatch(clearCart()); // Очищаем корзину, чтобы избежать дублирования данных
      const parsedCart = JSON.parse(initialCart); //Парсим данные из localStorage в Redux и обновляем состояние сразу после загрузки страницы
      parsedCart.forEach((song: typeSong) => {
        dispatch(addSong(song)); // Добавление списка песен
      });
    }
  }, []);
  return (
    <Section id={links.sections.forClients}>
      {!inView && <div ref={ref} />}
      <Container $default>
        <Title>Заказчикам</Title>
        <Paragraph $dark $forClients>
          Соберите сет-лист из репертуара группы на своё мероприятие и отправьте
          его нам!
        </Paragraph>
        {inView && (
          <ErrorBoundary
            fallback={
              <Error>
                <MdOutlineError className="error-icon" />
                Ошибка загрузки песен. Проверьте подключение к интернету и
                перезагрузите страницу.
              </Error>
              // Здесь отлавливаем ошибки при рендеринге.
            }
          >
            <Suspense
              fallback={
                /* Пока раздел загружается на экране крутится спиннер */
                <SpinnerWrapp>
                  <CircularProgress />
                </SpinnerWrapp>
              }
            >
              {/* Отправляем запрос и показываем ошибку если не будет ответа от сервера */}
              <Fetch />
              <Cart />
              <Wrapper>
                <FilterForm />
                <Heading>Репертуар</Heading>
                <SongList srcSong={srcSong} setSrcSong={setSrcSong} />
              </Wrapper>
              {/* Аудиоплеер покажется на странице если пользователь кликнул послушать любую песню. */}
              {srcSong !== null && (
                <Player srcSong={srcSong} setSrcSong={setSrcSong} />
              )}
              {/* Раздел загрузится как только попадёт в область видимости */}
            </Suspense>
          </ErrorBoundary>
        )}
        <Downloads />
      </Container>
    </Section>
  );
};

export default ForClients;
