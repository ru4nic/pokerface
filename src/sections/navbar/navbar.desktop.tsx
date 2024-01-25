import Button from '@mui/material/Button';

import NavItem from './components/navitem';
import Logo from '../../components/logo';
import Socials from '../../components/socials';

import links from '../../data/links';
import { NavList, Menu, StartIcon } from './navbar.styled';

type NavbarDesktopProps = {
  inView: boolean;
  navTitles: string[];
};
const NavbarDesktop = ({ inView, navTitles }: NavbarDesktopProps) => {
  return (
    <>
      <Logo section="desktopNav" />
      <Menu>
        <NavList>
          {navTitles.map((name, index) => {
            return (
              <NavItem
                name={name} //О нас, Видео, Заказчикам
                link={Object.values(links.sections)[index]}
                key={index}
              />
            );
          })}
        </NavList>
      </Menu>
      <Socials inView={inView} />
      <Button
        variant={inView ? 'contained' : 'text'}
        color={inView ? 'error' : 'white'}
        startIcon={<StartIcon />}
        href={links.socials.phone}
      >
        +7 (926) 461-02-36
      </Button>
    </>
  );
};

export default NavbarDesktop;
