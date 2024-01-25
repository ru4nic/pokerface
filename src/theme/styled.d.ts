import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: '#2B2530'; //darkGrey & greyText & bkrndDark & bkrndNavBar
      secondaryText: '#E9E7E4'; //whiteText
      background: '#ffffff';
      cardBackground: '#ffffff20';
      navBackground: '#2B2530';
      footerBackground: '#2B2530';
      primary: '#d32f2f';
      dark: '#2B2530';
      link: '#ddd';
      checkedBlock: '#00000012';
    };
    sizes: {
      heightOfNavBarDesktop: '5rem';
      heightOfNavBarMobile: '6.7rem';
    };
    fonts: {
      RobotoMedium: 'RobotoMedium';
      RobotoRegular: 'RobotoRegular';
      IbmExtraLight: 'IbmExtraLight';
      IbmLight: 'IbmLight';
      IbmRegular: 'IbmRegular';
      IbmBold: 'IbmBold';
    };
  }
}
