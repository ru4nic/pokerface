import avatar from '../../../assets/images/avatar.jpg';
import TiltParalax from '../../UI/TiltParalax';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import { useInView } from 'react-intersection-observer';
import {
  SectionContacts,
  Wrapper,
  ManagerImg,
  ManagerTitle,
  Manager,
  ManagerDesc,
} from './styles';
import { Container } from '../../base_styles/styles';
import animation from '../../settings/animation';

function Contacts() {
  const { ref, inView } = useInView({
    root: null,

    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <SectionContacts id="contacts">
      <Container>
        <Wrapper>
          <TiltParalax className="contactsCard">
            <Manager {...animation} transition={{ duration: 0.5, delay: 0.3 }}>
              {inView && <ManagerImg src={avatar} alt="Аватарка" />}
              <ManagerTitle ref={ref}>Вячеслав</ManagerTitle>
              <ManagerDesc>Руководитель проекта</ManagerDesc>
            </Manager>
            <Manager {...animation} transition={{ duration: 0.5, delay: 0.3 }}>
              {/* <ManagerTitle>Телефон</ManagerTitle> */}
              <Button
                variant="contained"
                href="tel:+79264610236"
                color="error"
                startIcon={<PhoneIcon />}
              >
                +7 (926) 461-02-36
              </Button>
            </Manager>
          </TiltParalax>
        </Wrapper>
      </Container>
    </SectionContacts>
  );
}
export default Contacts;
