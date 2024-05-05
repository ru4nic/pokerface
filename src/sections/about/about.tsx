import { lazy, Suspense } from 'react';

import * as Base from '../../layout/main';
import animation from '../../components/animation/animation';
import links from '../../data/links';
import { AboutSection } from './about.styled';

const Carousel = lazy(() => import('./carousel'));

function About() {
  return (
    <AboutSection id={links.sections.about.href}>
      <Base.Container $default>
        <Base.Title {...animation} data-test="about_title">
          POKERFACE
        </Base.Title>
        <Base.Paragraph
          $dark
          {...animation}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Уникальная, яркая и стильная кавер-группа мирового уровня! Коллектив
          имеет огромный профессиональный опыт и успешно зарекомендовал себя на
          многих площадках.
        </Base.Paragraph>
        <Base.Paragraph
          $dark
          {...animation}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Pokerface подходит для любой публики с разными музыкальными вкусами.
          Музыканты чувствуют настроение зрителей и всегда удачно выбирают
          следующую песню. Выступления проходят на любых праздничных
          мероприятиях: корпоративный вечер, день рождения, свадьба и многие
          другие.
        </Base.Paragraph>
        <Base.Paragraph
          $dark
          {...animation}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          В{' '}
          <Base.StyledLink
            to={links.sections.forClients.href}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            репертуар
          </Base.StyledLink>{' '}
          коллектива включены лучшие песни из дискотеки 80-х, 90-х, зарубежного
          и отечественного рока, современных поп-хитов и не только.
        </Base.Paragraph>
      </Base.Container>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Carousel />
      </Suspense>
    </AboutSection>
  );
}

export default About;
