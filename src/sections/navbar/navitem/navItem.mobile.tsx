import MenuItem from '@mui/material/MenuItem';

//@ts-ignore
import { Link } from 'react-scroll';

import { useTheme } from '@mui/material/styles';
import theme from '../../../theme';

type NavItemMobileProps = {
  linkTo: string;
  name: string;
  toggleDrawer: () => void;
};

const NavItemMobile = ({ linkTo, name, toggleDrawer }: NavItemMobileProps) => {
  const muiTheme = useTheme();

  return (
    <Link to={linkTo} spy={true} smooth={true} offset={-50} duration={500}>
      <MenuItem
        onClick={toggleDrawer}
        sx={{
          fontFamily: theme.fonts.IbmRegular,
          justifyContent: 'center',
          color: muiTheme.palette.grey[700],
        }}
      >
        {name}
      </MenuItem>
    </Link>
  );
};

export default NavItemMobile;
