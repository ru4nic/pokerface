import Button from '@mui/material/Button';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

import { Wrapper, List, Title } from './topmenu.styled';
import { StyledLink, Underline } from '../link';
import Logo from '../../../components/logo';

import footerColumnData, { scrollLinkSettings } from '../footer.data';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    footer: true;
  }
}

const TopMenu = () => {
  return (
    <Wrapper>
      <List>
        <Logo section="footer" />
        <Button
          color="footer"
          variant="text"
          href="tel:+79264610236"
          size="small"
          startIcon={<PhoneAndroid />}
        >
          +7 (926) 461-02-36
        </Button>
        <Button
          size="small"
          variant="text"
          startIcon={<DraftsOutlinedIcon />}
          color="footer"
          href="mailto:pokerfacecoverband@ya.ru"
        >
          pokerfacecoverband@ya.ru
        </Button>
      </List>
      {footerColumnData.map((column) => {
        //Размещаем ссылки по полонкам в футере
        if (column.header === 'Разделы') {
          return (
            <List key={column.header}>
              <Title>{column.header}</Title>
              {column.items.map((item) => {
                return (
                  <StyledLink
                    key={item.name}
                    to={item.href}
                    {...scrollLinkSettings}
                  >
                    <Underline>{item.name}</Underline>
                  </StyledLink>
                );
              })}
            </List>
          );
        }
        return (
          <List key={column.header}>
            <Title>{column.header}</Title>
            {column.items.map((item) => {
              return (
                //@ts-ignore
                <StyledLink key={item.name} href={item.href} as="a">
                  <Underline>{item.name}</Underline>
                </StyledLink>
              );
            })}
          </List>
        );
      })}
    </Wrapper>
  );
};

export default TopMenu;
