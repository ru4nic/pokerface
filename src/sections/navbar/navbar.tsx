import useMediaQuery from '@mui/material/useMediaQuery';

import NavbarMobile from './navbar.mobile';
import { NavBar, Container } from './navbar.styled';
import NavbarDesktop from './navbar.desktop';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

type NavBarProps = {
  inView: boolean;
};

function Navbar({ inView }: NavBarProps) {
  const isTablet = useMediaQuery('(max-width:1076px)');

  return (
    <NavBar className="mui-fixed" $inView={inView} data-test="navbar">
      <Container>
        {isTablet ? <NavbarMobile /> : <NavbarDesktop inView={inView} />}
      </Container>
    </NavBar>
  );
}
export default Navbar;
