import img_01 from '../../assets/images/preview11.webp';
import img_02 from '../../assets/images/preview22.jpg';
import img_03 from '../../assets/images/preview33.jpg';
import img_04 from '../../assets/images/preview44.webp';
import img_05 from '../../assets/images/preview55.jpg';
import img_06 from '../../assets/images/preview66.jpg';
import img_07 from '../../assets/images/preview77.jpg';
import img_08 from '../../assets/images/preview88.webp';

export type Videos = {
  link: string;
  desc?: string;
  src: string;
  id: number;
};
export const videos: Videos[] = [
  {
    link: 'https://www.youtube.com/embed/jo_fev_YwDQ?autoplay=1',
    // desc: 'Промо 2023',
    src: img_04,
    id: 0.1,
  },
  {
    link: 'https://www.youtube.com/embed/9GnR9fJafJE?autoplay=1',
    desc: 'Выступление Pokerface на День Города Живой Звук',
    src: img_08,
    id: 0.2,
  },
  {
    link: 'https://www.youtube.com/embed/HuzhEXBPawU?autoplay=1',
    desc: '09.09.23 День Города, Final Countdown',
    src: img_05,
    id: 0.3,
  },
  {
    link: 'https://www.youtube.com/embed/yeuh1Zz4hkQ?autoplay=1',
    src: img_06,
    desc: '09.09.23 День Города, Лесник',

    id: 0.4,
  },
  {
    link: 'https://www.youtube.com/embed/bfOagYn14O8?autoplay=1',
    desc: 'Templebar, Малиновая Лада',
    src: img_07,
    id: 0.5,
  },
  {
    link: 'https://www.youtube.com/embed/9cd5487jIKg?autoplay=1',
    // desc: 'ГЦ Станция',
    src: img_01,
    id: 0.6,
  },
  {
    link: 'https://www.youtube.com/embed/BGVDtUDIUxU?autoplay=1',
    // desc: 'ГЦ Станция',
    src: img_02,
    id: 0.7,
  },
  {
    link: 'https://www.youtube.com/embed/u_LfYj6CASY?autoplay=1',
    // desc: 'ГЦ Станция [Open Air]',
    src: img_03,
    id: 0.8,
  },
];
