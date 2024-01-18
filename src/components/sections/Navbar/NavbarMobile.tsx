import React, { ElementType, useState } from 'react';
import Logo from '../../UI/Logo';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import NavItemMobile from './NavItemMobile';
import Button from '@mui/material/Button';

import Socials from '../../UI/Socials';
import { IconWrapp } from './styles';
import links from '../../data/links';

type NavbarMobileProps = {
  StyledIcon: ElementType;
};

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

const NavbarMobile = ({ StyledIcon }: NavbarMobileProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
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
        <NavItemMobile
          linkTo={links.sections.about}
          handleMenuClose={handleMenuClose}
          name="О нас"
        />
        <NavItemMobile
          linkTo={links.sections.video}
          handleMenuClose={handleMenuClose}
          name="Видео"
        />
        <NavItemMobile
          linkTo={links.sections.forClients}
          handleMenuClose={handleMenuClose}
          name="Заказчикам"
        />
        {/* <NavItemMobile
                  linkTo="prices"
                  
                  handleMenuClose={handleMenuClose}
                  name="Цены"
                /> */}
        <Divider />
        <MenuItem //Logo
          centerRipple
          sx={{
            justifyContent: 'center',
          }}
        >
          <Logo section="appBar" />
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Socials section="appBar" />
        </MenuItem>
        <MenuItem sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<StyledIcon />}
            size="medium"
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
