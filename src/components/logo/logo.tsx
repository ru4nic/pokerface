import logo from '../../assets/images/PokerFace_logo_1.webp';
import { StyledLogo } from '../../layout/main';
type LogoProps = {
  section?: string;
};
function Logo({ section }: LogoProps) {
  const styledProps = { [`$${section}`]: true };
  return <StyledLogo {...styledProps} src={logo} alt="pokerface logo" />;
}
export default Logo;
