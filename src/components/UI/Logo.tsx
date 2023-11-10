import logo from '../../assets/images/PokerFace_logo_1.png';
import { StyledLogo } from '../base_styles/styles';
type LogoProps = {
  section?: string;
};
function Logo({ section }: LogoProps) {
  const styledProps = { [`$${section}`]: true };
  return <StyledLogo {...styledProps} src={logo} alt="pokerface logo" />;
}
export default Logo;
