import { StyledNavItem, StyledNavLink } from './navitem.styled';

type NavItemProps = {
  name: string;
  link: string;
};
function NavItem({ name, link }: NavItemProps) {
  return (
    <StyledNavItem>
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
    </StyledNavItem>
  );
}
export default NavItem;
