//4. Наладить верстку с линиями в секиции репертуара (скроллы). На мобилках не корректны линии.
//5. Добавить alt к описаниям видео
//6. Сделать ссылку якорь на карусель название в навбаре - Портфолио например
import { useRef } from 'react';

import CarouselMain from './carousel.main';
import Thumbs from './carousel.thumbs';

import { videos } from '../../video/video.data';
import { images } from './carousel.data';
import Preview from '../../video/preview/preview';
import { ContainerOfSwipers, Img, ThumbImg } from './carousel.styles';

type SlidesProps = {
  main?: boolean;
};
const VideoSlides = ({ main }: SlidesProps) => (
  <>
    {videos.map((video, index) => {
      return (
        <swiper-slide key={index}>
          {main ? (
            <Preview link={video.link} index={index}>
              <Img src={video.src} alt={video.desc} />
            </Preview>
          ) : (
            <ThumbImg src={video.src} alt={video.desc} />
          )}
        </swiper-slide>
      );
    })}
  </>
);
const ImageSlides = ({ main }: SlidesProps) => (
  <>
    {images.map((image, index) => {
      return (
        <swiper-slide key={index} lazy={true}>
          {main ? (
            <Img src={image.src} loading="lazy" alt={image.alt} />
          ) : (
            <ThumbImg src={image.src} loading="lazy" alt={image.alt} />
          )}
        </swiper-slide>
      );
    })}
  </>
);
const CarouselRender = () => {
  const thumbsRef = useRef(null!);

  return (
    <ContainerOfSwipers>
      <CarouselMain forwardedRef={thumbsRef}>
        <VideoSlides main />
        <ImageSlides main />
      </CarouselMain>
      <Thumbs forwardedRef={thumbsRef}>
        <VideoSlides />
        <ImageSlides />
      </Thumbs>
    </ContainerOfSwipers>
  );
};
export default CarouselRender;
