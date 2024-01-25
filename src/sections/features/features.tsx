import { Section, Container, Title } from '../../layout/main';
import { CardsWrapper } from './features.styled';
import Card from './components/card';

import cards from './features.data';
import animation from '../../components/animation/animation';
import links from '../../data/links';

function Features() {
  return (
    <Section id={links.sections.features}>
      <Container $default>
        <Title {...animation}>Наши приемущества</Title>
        <CardsWrapper>
          {cards.map((card, index) => {
            return <Card key={card.icon} {...card} index={index} />;
          })}
        </CardsWrapper>
      </Container>
    </Section>
  );
}
export default Features;
