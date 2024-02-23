import { createTheme } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import lightWoff2 from '../assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-300.woff2';

import theme from './theme.main';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    footer: Palette['primary'];
    openCart: Palette['primary'];
    cleanCart: Palette['primary'];
    whatsapp: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    footer?: PaletteOptions['primary'];
    openCart?: PaletteOptions['primary'];
    cleanCart?: PaletteOptions['primary'];
    whatsapp?: PaletteOptions['primary'];
  }
}

let muiTheme = createTheme({
  palette: {
    secondary: {
      main: '#ffa500',
    },
    warning: {
      main: theme.colors.dark,
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
          background-color: ${theme.colors.secondaryText};
          color: ${theme.colors.primaryText}
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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: theme.colors.background,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(5px)',
        },
      },
      defaultProps: {
        closeAfterTransition: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: 'unset',
        },
      },
    },
  },
});
muiTheme = createTheme(muiTheme, {
  palette: {
    whatsapp: muiTheme.palette.augmentColor({
      color: {
        main: lightGreen.A700,
      },
      name: 'whatsapp',
    }),
    white: muiTheme.palette.augmentColor({
      color: {
        main: theme.colors.background,
      },
      name: 'white',
    }),
    footer: muiTheme.palette.augmentColor({
      color: {
        main: theme.colors.link,
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
  },
});

export default muiTheme;
