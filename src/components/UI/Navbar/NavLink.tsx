import { StyledNavLink } from './styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
type NavLinkProps = {
  name: string;
  link: string;
};
function NavLink({ name, link }: NavLinkProps) {
  // const isMobile = useMediaQuery('(max-width: 915px)');
  return (
    <StyledNavLink
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={-75}
      duration={500}
    >
      {name}
    </StyledNavLink>
  );
}
export default NavLink;
