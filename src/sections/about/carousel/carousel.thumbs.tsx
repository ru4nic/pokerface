import { useEffect, ReactNode, MutableRefObject } from 'react';
import { register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { thumbsStyles } from './carousel.styles';

type ThumbsProps = {
  children: ReactNode;
  forwardedRef: MutableRefObject<null>;
};

const Thumbs = ({ children, forwardedRef }: ThumbsProps) => {
  useEffect(() => {
    register();
    const params: SwiperOptions = {
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 3,
        },
        750: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
      },
      // on: {
      //   breakpoint: (b) => console.log(b.currentBreakpoint),
      // },
      injectStyles: thumbsStyles,
    };
    if (forwardedRef.current) {
      Object.assign(forwardedRef.current, params);
      //@ts-ignore
      forwardedRef.current.initialize();
    }
  });
  return (
    <swiper-container init={false} ref={forwardedRef}>
      {children}
    </swiper-container>
  );
};
export default Thumbs;
