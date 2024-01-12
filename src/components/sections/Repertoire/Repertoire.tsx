import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import {
  // toggleSongChecked,
  Song as typeSong,
} from '../../../slices/cartSlice';

import Inner from './Inner';
import { Section, Title, Container, Paragraph } from '../../base_styles/styles';
import { addSong, clearCart } from '../../../slices/cartSlice';
import { ImFilePdf } from 'react-icons/im';
import { StyledButton } from '../../UI/Button/StyledButton';
import { buttons } from './data';
import links from '../../data/links';

const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 4rem;
`;

const Repertoire = () => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.2,
    triggerOnce: true,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const initialCart = localStorage.getItem('cart'); //Получаем данные из localStorage

    if (initialCart) {
      //Если LocalStorage не пуст, то
      dispatch(clearCart()); // Очищаем корзину, чтобы избежать дублирования данных
      const parsedCart = JSON.parse(initialCart); //Парсим данные из localStorage в Redux и обновляем состояние сразу после загрузки страницы
      parsedCart.forEach((song: typeSong) => {
        dispatch(addSong(song)); // Добавление списка песен
        // dispatch(toggleSongChecked(song.song)); //Выделение песен в списке 'checked'
      });
    }
  }, []);
  return (
    <Section id={links.sections.forClients}>
      <Container $default>
        <div ref={ref}></div>
        <Title>Заказчикам</Title>
        <Paragraph $dark $forClients>
          Соберите сет-лист из репертуара группы на своё мероприятие и отправьте
          его нам!
        </Paragraph>
        {inView && <Inner />}
        <WrapperButtons>
          {buttons.map((button) => {
            const { text, href, id } = button;
            return (
              <StyledButton
                href={href}
                key={id}
                endIcon={<ImFilePdf />}
                sx={{
                  width: '14.7rem',
                  '@media (max-width: 900px)': {
                    width: '15rem',
                  },
                }}
              >
                {text}
              </StyledButton>
            );
          })}
        </WrapperButtons>
      </Container>
    </Section>
  );
};

export default Repertoire;
