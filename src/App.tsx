import { useState, useEffect, lazy } from 'react';
import { useInView } from 'react-intersection-observer';
//MUI
import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';

import GlobalStyles from './layout';
import { Provider } from 'react-redux';
//My Components
import Intro from './sections/intro';
import { SpinnerWrapp } from './layout/main';
const Navbar = lazy(() => import('./sections/navbar'));
const About = lazy(() => import('./sections/about'));
const Features = lazy(() => import('./sections/features'));
const ForClients = lazy(() => import('./sections/forclients'));
const Contacts = lazy(() => import('./sections/contacts'));
const Footer = lazy(() => import('./sections/footer'));

import { muiTheme } from './theme';
import store from './store';
import { StyleSheetManager } from 'styled-components';

function App() {
  const { ref, inView } = useInView({
    root: null,
    initialInView: true,
    threshold: 0,
  });

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <StyleSheetManager enableVendorPrefixes>
          <GlobalStyles />
          {isPageLoaded ? (
            <>
              <Navbar inView={inView} />
              <div className="wrapper">
                <div ref={ref}>
                  <Intro />
                </div>
                <About />
                <Features />
                <ForClients />
                <Contacts />
                <Footer />
              </div>
            </>
          ) : (
            <SpinnerWrapp $fullHeight>
              <CircularProgress />
            </SpinnerWrapp>
          )}
        </StyleSheetManager>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
