import Button from '@mui/material/Button';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import NavItem from './navitem/navitem';
import Logo from '../../components/logo';
import Socials from '../../components/socials';

import links from '../../data/links';
import { NavList, Menu } from './navbar.styled';
import { StyledNavItem } from './navitem/navitem.styled';

type NavbarDesktopProps = {
  inView: boolean;
};
const NavbarDesktop = ({ inView }: NavbarDesktopProps) => {
  return (
    <>
      <Logo section="desktopNav" />
      <Menu>
        <NavList>
          {Object.entries(links.sections).map(([key, value], index) => {
            //Не показываем в меню раздел "Приемущества"
            if (key === 'features') return;
            return (
              <NavItem
                name={value.name} //О нас, Портфолио, Заказчикам
                link={Object.values(links.sections)[index].href}
                key={index}
              />
            );
          })}
          <StyledNavItem>
            <Socials />
          </StyledNavItem>
        </NavList>
      </Menu>
      <Button
        variant={inView ? 'contained' : 'text'}
        color={inView ? 'error' : 'white'}
        startIcon={<PhoneAndroidIcon />}
        href={links.socials.phone}
        size="small"
      >
        +7 (926) 461-02-36
      </Button>
    </>
  );
};

export default NavbarDesktop;
