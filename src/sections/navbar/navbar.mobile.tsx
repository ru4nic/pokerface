import { useState, MouseEvent } from 'react';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import Logo from '../../components/logo';
import NavItemMobile from './components/navItem.mobile';
import { StartIcon, IconWrapp } from './navbar.styled';
import Socials from '../../components/socials';

import links from '../../data/links';

type NavbarMobileProps = {
  navTitles: string[];
};
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

const NavbarMobile = ({ navTitles }: NavbarMobileProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    //Закрытие меню
    setAnchorEl(null);
  };
  return (
    <Toolbar disableGutters variant="dense">
      <IconWrapp>
        <IconButton size="medium" color="warning" onClick={handleMenuClick}>
          {/* Кнопка открытия меню */}
          <MenuIcon />
        </IconButton>
      </IconWrapp>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        variant="menu"
        sx={{
          '& .MuiMenu-paper': {
            backgroundColor: '#ffffff95',
            backdropFilter: 'blur(15px)',
          },
        }}
      >
        {navTitles.map((item, index) => {
          return (
            <NavItemMobile
              linkTo={Object.values(links.sections)[index]}
              handleMenuClose={handleMenuClose}
              name={item} //О нас, Видео, Заказчикам
              key={index}
            />
          );
        })}
        <Divider /> {/* Разделитель */}
        {/* ------------------------------------------ */}
        <MenuItem
          centerRipple
          sx={{
            justifyContent: 'center',
          }}
        >
          <Logo section="appBar" />
        </MenuItem>
        {/* ---------------Социалки----------------- */}
        <MenuItem onClick={handleMenuClose}>
          <Socials section="appBar" />
        </MenuItem>
        {/* -------------Кнопка позвонить------------------ */}
        <MenuItem sx={{ justifyContent: 'center' }}>
          <Button
            startIcon={<StartIcon />}
            fullWidth
            href={links.socials.phone}
          >
            +7 (926) 461-02-36
          </Button>
        </MenuItem>
      </Menu>
    </Toolbar>
  );
};

export default NavbarMobile;
