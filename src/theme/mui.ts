import { createTheme } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import lightWoff2 from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-300.woff2';

import * as v from './main';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    footer: Palette['primary'];
    openCart: Palette['primary'];
    cleanCart: Palette['primary'];
    whatsapp: Palette['primary'];
    redPlay: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    footer?: PaletteOptions['primary'];
    openCart?: PaletteOptions['primary'];
    cleanCart?: PaletteOptions['primary'];
    whatsapp?: PaletteOptions['primary'];
    redPlay?: PaletteOptions['primary'];
  }
}

let muiTheme = createTheme({
  palette: {
    // success: {
    //   main: lightGreen.A700,
    // },
    warning: {
      main: v.darkGrey,
    },
  },
  typography: {
    fontFamily: 'IbmLight',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IbmLight';
          font-style: normal;
          font-display: swap;
          font-weight: 300;
          src: local('IbmLight'), url(${lightWoff2}) format('woff2');
        }
        body {
          background-color: ${v.whiteText};
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'error',
        size: 'large',
        style: {
          textTransform: 'none',
          fontFamily: 'IbmLight',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: 'IbmLight',
          fontWeight: '300',
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        disableShrink: true,
        color: 'error',
      },
    },
  },
});
muiTheme = createTheme(muiTheme, {
  // Custom colors created with augmentColor go here
  palette: {
    whatsapp: muiTheme.palette.augmentColor({
      color: {
        main: lightGreen.A700,
      },
      name: 'whatsapp',
    }),
    white: muiTheme.palette.augmentColor({
      color: {
        main: v.whiteText,
      },
      name: 'white',
    }),
    footer: muiTheme.palette.augmentColor({
      color: {
        main: v.colorLink,
      },
      name: 'footer',
    }),
    openCart: muiTheme.palette.augmentColor({
      color: {
        main: '#dcc28f',
      },
      name: 'openCart',
    }),
    cleanCart: muiTheme.palette.augmentColor({
      color: {
        main: '#7b7a79',
      },
      name: 'cleanCart',
    }),
    redPlay: muiTheme.palette.augmentColor({
      color: {
        main: v.redPlay,
      },
      name: 'redPlay',
    }),
  },
});

export default muiTheme;
