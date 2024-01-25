import { useEffect, useRef } from 'react';

import { register } from 'swiper/element';
import { Navigation, Zoom, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

import * as S from './carousel.styled';
import theme from '../../../theme';

import img_dushes1 from '../../../assets/images/dushes_1.webp';
import img_dushes2 from '../../../assets/images/dushes_2.webp';
import img_studioRed1 from '../../../assets/images/studio_red_3.webp';
import img_collage from '../../../assets/images/collage.webp';
import img_4_210723 from '../../../assets/images/IMG_4_210723.webp';
import img_22_210723 from '../../../assets/images/IMG_22_210723.webp';
import img_45_210723 from '../../../assets/images/IMG_45_210723.webp';
import img_26_210723 from '../../../assets/images/IMG_26_210723.webp';
import img_3559 from '../../../assets/images/IMG_3559.webp';
import img_3615 from '../../../assets/images/IMG_3615.webp';
import img_3893 from '../../../assets/images/bknd_head.webp';
import img_11 from '../../../assets/images/IMG_11.webp';
import img_66 from '../../../assets/images/IMG_66.webp';
import img_2261 from '../../../assets/images/IMG_2261.webp';

const images = [
  img_collage,
  img_3893,
  img_3615,
  img_dushes1,
  img_4_210723,
  img_22_210723,
  img_3559,
  img_dushes2,
  img_26_210723,
  img_45_210723,
  img_66,
  img_2261,
  img_11,
  img_studioRed1,
];

type MainSwiperProps = {
  children: React.ReactNode;
};
const MainSwiper = ({ children }: MainSwiperProps) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const params: SwiperOptions = {
      modules: [Navigation, Zoom, Pagination],
      pagination: {
        enabled: true,
        clickable: true,
      },
      navigation: true,
      zoom: true,
      injectStyles: [
        `.swiper-button-next,
          .swiper-button-prev {
            background-color: ${theme.colors.primary}60;
            padding: 1em 1em;
            border-radius: 100%;
            --swiper-navigation-size: 3em;
          }
          @media (max-width: 750px){
            .swiper-button-next,
          .swiper-button-prev{
            --swiper-navigation-size: 1.8em;
            }
          }
          :host {
            --swiper-theme-color: ${theme.colors.primary};
          }
        `,
      ],
      injectStylesUrls: [
        './navigation-element.min.css',
        './zoom-element.min.css',
        './pagination-element.min.css',
      ],
    };
    if (swiperElRef.current) {
      Object.assign(swiperElRef.current, params);
      //@ts-ignore
      swiperElRef.current.initialize();
    }
  }, []);
  return (
    <S.Wrapp title="Кликните два раза на фото чтобы увеличить">
      <swiper-container init={false} ref={swiperElRef}>
        {children}
      </swiper-container>
    </S.Wrapp>
  );
};
const Carousel = () => {
  return (
    <S.Container>
      <MainSwiper>
        {images.map((image, index) => {
          return (
            <swiper-slide key={index} lazy={true}>
              <S.Inner>
                <div className="swiper-zoom-container">
                  <S.Img
                    src={image}
                    loading="lazy"
                    alt={`Pokerface кавер группа на свадьбу корпоратив ${index}`}
                  />
                </div>
              </S.Inner>
            </swiper-slide>
          );
        })}
      </MainSwiper>
    </S.Container>
  );
};
export default Carousel;
