import MenuItem from '@mui/material/MenuItem';

//@ts-ignore
import { Link } from 'react-scroll';

import { useTheme } from '@mui/material/styles';
import theme from '../../../theme';

type NavItemMobileProps = {
  linkTo: string;
  name: string;
  handleMenuClose: () => void;
};

const NavItemMobile = ({
  linkTo,
  name,
  handleMenuClose,
}: NavItemMobileProps) => {
  const muiTheme = useTheme();

  return (
    <Link to={linkTo} spy={true} smooth={true} offset={-50} duration={500}>
      <MenuItem
        onClick={handleMenuClose}
        sx={{
          fontFamily: theme.fonts.IbmRegular,
          justifyContent: 'center',
          fontSize: '1.1rem',
          color: muiTheme.palette.warning.main,
        }}
      >
        {name}
      </MenuItem>
    </Link>
  );
};

export default NavItemMobile;
