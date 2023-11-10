import NavLink from './NavLink';

import { StyledNavItem } from './styles';

type NavItemProps = {
  name: string;
  link: string;
};
function NavItem({ name, link }: NavItemProps) {
  return (
    <StyledNavItem>
      <NavLink name={name} link={link} />
    </StyledNavItem>
  );
}
export default NavItem;
