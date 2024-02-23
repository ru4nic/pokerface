import { useState } from 'react';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import Logo from '../../components/logo';
import NavItemMobile from './navitem/navItem.mobile';
import { IconWrapp } from './navbar.styled';
import Socials from '../../components/socials';

import links from '../../data/links';
import { CloseBtn } from '../about/carousel/preview/preview.styled';

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
  }
}

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Toolbar disableGutters variant="dense">
      <IconWrapp>
        <IconButton size="medium" onClick={toggleDrawer}>
          {/* Кнопка открытия меню */}
          <MenuIcon />
        </IconButton>
      </IconWrapp>

      <Drawer
        open={open}
        onClose={toggleDrawer}
        anchor="right"
        sx={{
          '& .MuiModal-backdrop': {
            background: 'linear-gradient(90deg, transparent, #ffffff)',
          },
        }}
        slotProps={{
          backdrop: {
            children: (
              <CloseBtn $drawer>
                <IconButton
                  onClick={toggleDrawer}
                  sx={{
                    backgroundColor: '#ffffff80',
                    boxShadow:
                      'inset 0 0 0.2em #00000015, 0.02em 0.03em .09em #00000060',
                  }}
                >
                  <CloseOutlined />
                </IconButton>
              </CloseBtn>
            ),
          },
        }}
      >
        <Box role="presentation">
          <MenuItem
            centerRipple
            sx={{
              justifyContent: 'center',
            }}
          >
            <Logo section="appBar" />
          </MenuItem>
          <Divider variant="middle" />
          {Object.entries(links.sections).map(([_, value], index) => {
            return (
              <NavItemMobile
                linkTo={Object.values(links.sections)[index].href}
                name={value.name} //О нас, Видео, Заказчикам
                toggleDrawer={toggleDrawer}
                key={index}
              />
            );
          })}
          {/* ---------------Социалки----------------- */}
          <MenuItem onClick={toggleDrawer}>
            <Socials section="appBar" />
          </MenuItem>
          {/* -------------Кнопка позвонить------------------ */}
          <MenuItem sx={{ justifyContent: 'center' }}>
            <Button
              startIcon={<PhoneAndroidIcon />}
              fullWidth
              href={links.socials.phone}
            >
              +7 (926) 461-02-36
            </Button>
          </MenuItem>
        </Box>
      </Drawer>
    </Toolbar>
  );
};

export default NavbarMobile;
