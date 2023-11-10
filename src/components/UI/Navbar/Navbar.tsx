import NavItem from "./NavItem";
import Logo from "../Logo";
import Socials from "../Socials";

import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Button from "@mui/material/Button";
import NavbarMobile from "./NavbarMobile";
import { NavBar, Container, Menu, NavList } from "./styles";
import links from "../../data/links";

const StyledButton = styled(Button)(({ theme }) => ({
  //Стили для моб.устр-в

  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    padding: "5px 10px",
  },
}));
const StyledIcon = styled(PhoneAndroidIcon)(({ theme }) => ({
  fontSize: "1em",
  [theme.breakpoints.down("md")]: {
    width: "1.2rem",
  },
}));

type NavBarProps = {
  inView: boolean;
};
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}
function Navbar({ inView }: NavBarProps) {
  const isTablet = useMediaQuery("(max-width:1076px)");

  return (
    <NavBar className="mui-fixed" $inView={inView}>
      <Container>
        {isTablet ? ( //--------------------Modile & Tablets
          <NavbarMobile StyledIcon={StyledIcon} />
        ) : (
          //--------------------------Desktop
          <>
            <Logo section="desktopNav" />
            <Menu>
              <NavList>
                <NavItem name="О нас" link={links.sections.about} />
                <NavItem name="Видео" link={links.sections.video} />
                <NavItem name="Заказчикам" link={links.sections.forClients} />
                {/* <NavItem name="Цены" link="prices" /> */}
              </NavList>
            </Menu>
            <Socials inView={inView} />
            <StyledButton
              variant={inView ? "contained" : "text"}
              // color={inView ? 'error' : 'white'}
              color={inView ? "error" : "white"}
              startIcon={<StyledIcon />}
              size="large"
              href={links.socials.phone}
              sx={{ alignSelf: "center" }}
            >
              +7 (926) 461-02-36
            </StyledButton>
          </>
        )}
      </Container>
    </NavBar>
  );
}
export default Navbar;
