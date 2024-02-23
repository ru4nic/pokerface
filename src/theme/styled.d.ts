import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: '#000000aa';
      secondaryText: '#E9E7E4';
      background: '#ffffff';
      cardBackground: '#ffffff20';
      navBackground: '#2B2530';
      footerBackground: '#2B2530';
      primary: '#d32f2f';
      dark: '#000000aa';
      link: '#ddd';
      checkedBlock: '#d35757';
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
