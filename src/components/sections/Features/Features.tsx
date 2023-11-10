import CardFeature from "./CardFeature";
import { Section, Container, Title } from "../../base_styles/styles";
import { FeaturesWrapper } from "./feature_styles";
import featuresCards from "./data";
import animation from "../../settings/animation";
import links from "../../data/links";

function Features() {
  return (
    <Section id={links.sections.features}>
      <Container $default>
        <Title {...animation} transition={{ duration: 0.5, delay: 0.2 }}>
          Наши приемущества
        </Title>
        <FeaturesWrapper>
          {featuresCards.map((card, index) => {
            return <CardFeature key={card.icon} {...card} index={index} />;
          })}
        </FeaturesWrapper>
      </Container>
    </Section>
  );
}
export default Features;
