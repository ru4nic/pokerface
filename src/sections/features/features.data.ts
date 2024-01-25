import { GiTrophyCup, GiSpeaker } from 'react-icons/gi';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdMoneyOff, MdEventAvailable, MdAccountBalance } from 'react-icons/md';

const featuresCards = [
  {
    icon: GiTrophyCup,
    title: 'Большой опыт',
    desc: 'За нашими плечами более 15-ти лет профессиональной музыкальной деятельности.',
    animation: 0.3,
  },
  {
    icon: BsFillKeyFill,
    title: 'Под ключ',
    desc: 'Выступление группы с оборудованием. Программа 1.5 часа.',
    animation: 0.35,
  },
  {
    icon: GiSpeaker,
    title: 'Звук',
    desc: 'Звучание и аранжировка максимально приближено к оригиналу.',
    animation: 0.3,
  },
  {
    icon: MdAccountBalance,
    title: 'Оплата',
    desc: 'Возможность безналичного расчёта',
    animation: 0.4,
  },
  {
    icon: MdMoneyOff,
    title: 'Без переплат',
    desc: 'Нас всего четверо. Вы не будете переплачивать за работу звукорежиссёра и директора.',
    animation: 0.35,
  },
  {
    icon: MdEventAvailable,
    title: 'Любое мероприятие',
    desc: 'Свадьбы, корпоративы, рестораны, дни рождения, концерты и т.д.',
    animation: 0.4,
  },
];

export default featuresCards;
