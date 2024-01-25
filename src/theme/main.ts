import { DefaultTheme } from 'styled-components';

// export const bkrndDark = '#2B2530';
export const bkrndLight = '#ffffff';
export const bkrndNavBar = '#2B2530';
export const redTheme = '#d32f2f';
export const cardColor = '#ffffff20';
// #f5f5f5 - прошлый фон
export const heightOfNavBarDesktop = '5rem';
export const heightOfNavBarMobile = '6.7rem';
/*
Text color
*/
export const checkedText = '#ffffffa5';
export const checkedAuthor = '#eee';
export const whiteText = '#E9E7E4';
export const songColor = 'rgb(241, 122, 136)';
export const darkGrey = '#2B2530';
export const greyText = '#2B2530';
//Repertoire
export const redPlay = '#00000012';
//Footer
export const colorLink = '#ddd';

const theme: DefaultTheme = {
  colors: {
    primaryText: '#2B2530', //darkGrey & greyText & bkrndDark & bkrndNavBar
    secondaryText: '#E9E7E4', //whiteText
    background: '#ffffff',
    cardBackground: '#ffffff20',
    navBackground: '#2B2530',
    footerBackground: '#2B2530',
    primary: '#d32f2f',
    dark: '#2B2530',
    link: '#ddd',
    checkedBlock: '#00000012',
  },
  sizes: {
    heightOfNavBarDesktop: '5rem',
    heightOfNavBarMobile: '6.7rem',
  },
  fonts: {
    RobotoMedium: 'RobotoMedium',
    RobotoRegular: 'RobotoRegular',
    IbmExtraLight: 'IbmExtraLight',
    IbmLight: 'IbmLight',
    IbmRegular: 'IbmRegular',
    IbmBold: 'IbmBold',
  },
};
export default theme;
