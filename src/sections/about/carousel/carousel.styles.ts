import styled from 'styled-components';

import theme from '../../../theme';

type CarouselStyles = string[];

const ContainerOfSwipers = styled.div`
  /* aspect-ratio: 4/3; */
  /* width: 80%; */
  margin: 0 auto;
  padding: 0 14rem;
  @media screen and (orientation: portrait) and (max-width: 1076px) {
    padding: 0rem;
  }
  @media screen and (orientation: landscape) and (max-width: 1076px) {
    padding: 0 3rem;
    width: 80%;
  }
`;

const Img = styled.img`
  width: 100%;
  /* height: 100%;
  aspect-ratio: 16/9;
  object-position: center; */
  display: block;
`;
const ThumbImg = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  display: block;
  object-fit: cover;
`;
const carouselMainStyles: CarouselStyles = [
  `.swiper-button-next,
      .swiper-button-prev {
        filter: drop-shadow(0 2px 2px #00000050);
        --swiper-navigation-size: 3em;
        transition: transform 0.2s ease-in-out;
      }
      .swiper-button-next:hover,
        .swiper-button-prev:hover {
          transform: scale(1.1);
      }
      
      :host {
        --swiper-theme-color: ${theme.colors.primary};
        height: 80%;
      }
      .swiper {
        --swiper-navigation-color: ${theme.colors.primary};
        position: static;
        display: grid;
        width: 100%;

      }
      .swiper {
        .swiper-button-prev, 
        .swiper-button-next, 
        .swiper-button-disabled {
        align-self: center;
        }
      }
      .swiper-button-prev {
        justify-self: start;
        margin-left: -4rem;
      }
      .swiper-button-next {
        justify-self: end;
        margin-right: -4rem;
      }
      @media (max-width: 1076px){
        .swiper {
          position: relative;
          display: block;
          --swiper-navigation-color: #ffffff;
        }
        .swiper {
          .swiper-button-prev, 
          .swiper-button-next, 
          .swiper-button-disabled {
          align-self: unset;
          }
        }
        .swiper-button-prev {
          justify-self: unset;
          margin-left: unset;
        }
        .swiper-button-next {
          justify-self: unset;
          margin-right: unset;
        }
      }
      @media (max-width: 450px){
        .swiper-button-next,
      .swiper-button-prev {
        --swiper-navigation-size: 2.4em;
        }
      }
    `,
];
const thumbsStyles: CarouselStyles = [
  `
    ::slotted(.swiper-slide-thumb-active)  {
      outline: 3px solid ${theme.colors.primary};
      outline-offset: -3px;
      opacity: 1;
    }
    ::slotted(swiper-slide) {
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.2s ease-in-out, outline 0.2s ease-in-out;
    }
    :host {
      --swiper-theme-color: ${theme.colors.primary};
      height: 20%;
      padding-top: 5px;
    }
    @media (max-width: 750px){
      ::slotted(.swiper-slide-thumb-active)  {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: -2px;
      }
      :host {
        padding-top: 3px;
      }
    }
    `,
];

export { Img, ThumbImg, ContainerOfSwipers, carouselMainStyles, thumbsStyles };
