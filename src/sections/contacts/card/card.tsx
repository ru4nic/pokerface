import { useInView } from 'react-intersection-observer';

import { Content, Name, Desc, Avatar } from './card.styled';

import TiltParalax from '../../../components/TiltParalax';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';

import avatar from '../../../assets/images/avatar.webp';

import animation from '../../../components/animation/animation';

const Card = () => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <TiltParalax className="contactsCard">
      <Content {...animation}>
        {inView && <Avatar src={avatar} alt="Аватарка" />}
        <Name ref={ref}>Вячеслав</Name>
        <Desc>Руководитель проекта</Desc>
      </Content>
      <Content {...animation}>
        <Button href="tel:+79264610236" startIcon={<PhoneIcon />}>
          +7 (926) 461-02-36
        </Button>
      </Content>
    </TiltParalax>
  );
};
export default Card;
