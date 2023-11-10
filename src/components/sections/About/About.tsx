import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import PhotoCarousel from './PhotoCarousel';
import aboutBkndImg from '../../../assets/images/about_bknd2.jpg';
import {
  Container,
  Title,
  Paragraph,
  StyledLink,
} from '../../base_styles/styles';
import animation from '../../settings/animation';
import { bkrndLight, darkGrey } from '../../base_styles/Vars';
import links from '../../data/links';

const AboutSection = styled.section<{ $inView?: boolean }>`
  background: ${(props) =>
    props.$inView
      ? `linear-gradient(rgba(255, 255, 255, 0.94), ${bkrndLight}),
    url(${aboutBkndImg})`
      : `linear-gradient(rgba(255, 255, 255, 0.9), ${bkrndLight})`};
  background-size: ${(props) => (props.$inView ? '100%, 120%' : '100%')};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  color: ${darkGrey};

  @media (max-width: 950px) {
    background-size: 100%, 250%;
    background-position: 50% 0%;
  }
`;

function About() {
  const { ref, inView } = useInView({
    root: null,

    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <AboutSection id={links.sections.about} ref={ref} $inView={inView}>
      <Container $default>
        <Title
          {...animation}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-test="about_title"
        >
          POKERFACE
        </Title>
        <Paragraph
          $dark
          {...animation}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Уникальная, яркая и стильная кавер-группа мирового уровня! Коллектив
          имеет огромный профессиональный опыт и успешно зарекомендовал себя на
          многих площадках.
        </Paragraph>
        <Paragraph
          $dark
          {...animation}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Pokerface подходит для любой публики с разными музыкальными вкусами.
          Музыканты чувствуют настроение зрителей и всегда удачно выбирают
          следующую песню. Выступления проходят на любых праздничных
          мероприятиях: корпоративный вечер, день рождения, свадьба и многие
          другие.
        </Paragraph>
        <Paragraph
          $dark
          {...animation}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          В{' '}
          <StyledLink
            to="for_clients"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            $red={'red'}
          >
            репертуар
          </StyledLink>{' '}
          коллектива включены лучшие песни из дискотеки 80-х, 90-х, зарубежного
          и отечественного рока, современных поп-хитов и не только.
        </Paragraph>
        <PhotoCarousel />
      </Container>
    </AboutSection>
  );
}

export default About;
