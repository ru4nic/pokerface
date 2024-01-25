import TiltParalax from '../../../components/TiltParalax';
import animation from '../../../components/animation/animation';

import { CircleWrapp, StyledIcon, Desc, Title } from './card.styled';

type CardFeatureProps = {
  icon: string;
  title: string;
  desc: string;
  index: number;
};
const Card = ({ icon: Icon, title, desc, index }: CardFeatureProps) => {
  return (
    <TiltParalax className="feature-card">
      <CircleWrapp
        {...animation}
        transition={{ duration: 0.5, delay: 0.4 + index / 9 }}
      >
        <StyledIcon>
          <Icon />
        </StyledIcon>
      </CircleWrapp>
      <Title
        {...animation}
        transition={{ duration: 0.5, delay: 0.1 + index / 9 }}
      >
        {title}
      </Title>
      <Desc
        {...animation}
        transition={{ duration: 0.5, delay: 0.2 + index / 9 }}
      >
        {desc}
      </Desc>
    </TiltParalax>
  );
};

export default Card;
