import TiltParalax from '../../UI/TiltParalax';
import animation from '../../settings/animation';

import { IconWrapper, StyledIcon, CardTitle, CardDesc } from './feature_styles';
type CardFeatureProps = {
  icon: string;
  title: string;
  desc: string;
  index: number;
};
const CardFeature = ({ icon: Icon, title, desc, index }: CardFeatureProps) => {
  return (
    <TiltParalax className="feature">
      <IconWrapper
        {...animation}
        transition={{ duration: 0.5, delay: 0.4 + index / 9 }}
      >
        <StyledIcon>
          <Icon />
        </StyledIcon>
      </IconWrapper>
      <CardTitle
        {...animation}
        transition={{ duration: 0.5, delay: 0.1 + index / 9 }}
      >
        {title}
      </CardTitle>
      <CardDesc
        {...animation}
        transition={{ duration: 0.5, delay: 0.2 + index / 9 }}
      >
        {desc}
      </CardDesc>
    </TiltParalax>
  );
};

export default CardFeature;
