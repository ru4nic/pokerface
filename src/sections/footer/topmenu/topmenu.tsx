import Button from '@mui/material/Button';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

import { Wrapper, List, Title } from './topmenu.styled';
import { StyledLink, Underline } from '../link';
import Logo from '../../../components/logo';

import footerColumnData, { scrollLinkSettings } from '../footer.data';
import { useSelector } from 'react-redux';
import { selectBlobState } from '../../../slices/blobSlice';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    footer: true;
  }
}

const TopMenu = () => {
  const urlBlob = useSelector(selectBlobState);

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
        //Размещаем ссылки по колонкам в футере
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
              if (item.name === 'Репертуар') {
                return (
                  <StyledLink
                    to=""
                    as="a"
                    href={urlBlob || '#'}
                    download="Pokerface_Repertuar"
                    key={item.name}
                  >
                    <Underline>Репертуар</Underline>
                  </StyledLink>
                );
              }
              return (
                <StyledLink key={item.name} href={item.href} as="a" to="">
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
