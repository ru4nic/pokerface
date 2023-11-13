//MUI
import { Button } from '@mui/material';
import PhoneAndroid from '@mui/icons-material/PhoneAndroid';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

import styled from 'styled-components';
//@ts-ignore
import { Link } from 'react-scroll';

import Logo from '../../UI/Logo';
import Socials from '../../UI/Socials';
import { Container } from '../../base_styles/styles';

import { bkrndNavBar, redTheme, whiteText } from '../../base_styles/Vars';
import footerColumnData from './data';

const SectionFooter = styled.footer`
  background-color: ${bkrndNavBar};
  width: auto;
  color: ${whiteText};
  font-family: 'IbmLight';
`;
const TopMenu = styled.menu`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 0.5rem;
  row-gap: 2rem;
  margin: 0;
  padding: 1rem 0 2rem 0;
  @media (max-width: 440px) {
    column-gap: 1rem;
  }
`;

const List = styled.div`
  &:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  /* &:nth-child(2) {
    
  }
  &:nth-child(3) {
    
  } */
  &:last-child {
    @media (max-width: 440px) {
      flex-grow: 1;
    }
  }
`;
const Underline = styled.span`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0%;
    background-color: ${redTheme};
    transition: width 0.2s ease-in-out;
  }
`;
const StyledLink = styled(Link)`
  display: ${(props) => (props.$copyright ? '' : 'block')};
  font-size: 0.9rem;
  text-decoration: none;
  color: inherit;
  /* color: rgb(153, 153, 153); */
  opacity: 0.65;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out 0s, text-decoration 0.3s ease-in-out 0s;
  &:hover {
    opacity: 1;
    ${Underline} {
      &::after {
        width: 100%;
      }
    }
  }
`;

const ListName = styled.div`
  font-size: 1rem;
  font-family: 'IbmBold';
  margin-bottom: 1rem;
`;
const Copyright = styled.div`
  font-size: 0.8em;
  font-family: 'IbmExtraLight';
  ${StyledLink} {
    font-size: 1em;
  }
`;
const Name = styled.div``;

const BottomMenu = styled.menu`
  display: flex;
  margin: 0;
  padding: 1rem 0 0 0;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
  border-top: 1px solid rgba(233, 236, 239, 0.024);
`;

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    footer: true;
  }
}

const scrollLinkSettings = {
  spy: true,
  smooth: true,
  offset: -70,
  duration: 700,
};

function Footer() {
  return (
    <SectionFooter>
      <Container $footer>
        <TopMenu>
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
                  <ListName>{column.header}</ListName>
                  {column.items.map((item) => {
                    return (
                      <StyledLink
                        key={item.name}
                        to={item.link}
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
                <ListName>{column.header}</ListName>
                {column.items.map((item) => {
                  return (
                    <StyledLink key={item.name} href={item.link} as="a">
                      <Underline>{item.name}</Underline>
                    </StyledLink>
                  );
                })}
              </List>
            );
          })}
        </TopMenu>
        <BottomMenu>
          <Copyright>
            <Name>
              Разработчик{' '}
              <StyledLink
                href="https://t.me/ru4nic"
                as="a"
                $copyright
                target="_blank"
                rel="noreferrer"
              >
                <Underline>Ru4nic</Underline>
              </StyledLink>
            </Name>
            <Name>
              Дизайнер{' '}
              <StyledLink
                href="https://vk.com/yuriykuldo"
                as="a"
                $copyright
                target="_blank"
                rel="noreferrer"
              >
                <Underline>Yuriy Kuldo</Underline>
              </StyledLink>
            </Name>
          </Copyright>
          <Socials section="footer" />
        </BottomMenu>
      </Container>
    </SectionFooter>
  );
}
export default Footer;
