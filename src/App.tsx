import { useInView } from 'react-intersection-observer';
//MUI
import GlobalStyles from './GlobalStyles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { lightGreen } from '@mui/material/colors';
//My Components
import Intro from './components/sections/Intro';
import Navbar from './components/sections/Navbar';
import About from './components/sections/About';
import Video from './components/sections/Video';
import Features from './components/sections/Features';
import Repertoire from './components/sections/Repertoire';
import Contacts from './components/sections/Contacts';
import Footer from './components/sections/Footer';

import lightWoff2 from './assets/fonts/IBM_Plex_Sans/ibm-plex-sans-v19-cyrillic_latin-300.woff2';

import {
  colorLink,
  darkGrey,
  redPlay,
  whiteText,
} from './components/base_styles/Vars';
import store from './store';

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

let theme = createTheme({
  palette: {
    // success: {
    //   main: lightGreen.A700,
    // },
    warning: {
      main: darkGrey,
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
        background-color: ${darkGrey};
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
  },
});
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    whatsapp: theme.palette.augmentColor({
      color: {
        main: lightGreen.A700,
      },
      name: 'whatsapp',
    }),
    white: theme.palette.augmentColor({
      color: {
        main: whiteText,
      },
      name: 'white',
    }),
    footer: theme.palette.augmentColor({
      color: {
        main: colorLink,
      },
      name: 'footer',
    }),
    openCart: theme.palette.augmentColor({
      color: {
        main: '#dcc28f',
      },
      name: 'openCart',
    }),
    cleanCart: theme.palette.augmentColor({
      color: {
        main: '#a7a6a4',
      },
      name: 'cleanCart',
    }),
    redPlay: theme.palette.augmentColor({
      color: {
        main: redPlay,
      },
      name: 'redPlay',
    }),
  },
});
function App() {
  const { ref, inView } = useInView({
    root: null,
    initialInView: true,
    threshold: 0,
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Navbar inView={inView} />
        <div className="wrapper">
          <div ref={ref}>
            <Intro />
          </div>
          <About />
          <Video />
          <Features />
          <Repertoire />
          <Contacts />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
