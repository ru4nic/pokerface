//@ts-ignore
import { Link } from "react-scroll";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";

type NavItemMobileProps = {
  linkTo: string;
  handleMenuClose: () => void;
  name: string;
};
const NavItemMobile = ({
  linkTo,
  handleMenuClose,
  name,
}: NavItemMobileProps) => {
  const theme = useTheme();
  return (
    <Link to={linkTo} spy={true} smooth={true} offset={-50} duration={500}>
      <MenuItem
        onClick={handleMenuClose}
        sx={{
          fontFamily: "IbmRegular",
          justifyContent: "center",
          fontSize: "1.1rem",
          color: theme.palette.warning.main,
        }}
      >
        {name}
      </MenuItem>
    </Link>
  );
};

export default NavItemMobile;
