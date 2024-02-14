import GlobalStyles, { Container } from './layout';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyleSheetManager } from 'styled-components';
import { muiTheme } from './theme';
import { Provider } from 'react-redux';
import store from './store';

export const CreateApp = () => {
  return (
    <Container>
      <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <StyleSheetManager enableVendorPrefixes>
            <GlobalStyles />
          </StyleSheetManager>
        </ThemeProvider>
      </Provider>
    </Container>
  );
};
